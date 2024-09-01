import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "../shopping-cart/Cart";
import styles from "./resetAndOutlet.module.css";

const Nav = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const promises = [];

      for (let i = 1; i <= 10; i++) {
        promises.push(
          fetch("https://fakestoreapi.com/products/" + i, {
            mode: "cors",
          }).then((res) => res.json())
        );
      }
      const results = await Promise.all(promises);
      setItems(results);
      setItemsCount(new Array(results.length).fill(0));
      setCart(new Array(results.length).fill(0));
    };

    fetchItems();
  }, []);

  function cartAdder(item) {
    const temp = [...cart];
    temp.splice(item.id - 1, 1, item);
    if (itemsCount[item.id - 1] == 0) {
      const temp2 = [...itemsCount];
      temp2.splice(item.id - 1, 1, 1);
      setItemsCount(temp2);
    }
    setCart(temp);
  }

  function cartRemover(item) {
    const temp = [...cart];
    temp.splice(item.id - 1, 1, 0);
    const temp2 = [...itemsCount];
    temp2.splice(item.id - 1, 1, 0);
    setCart(temp);
    setItemsCount(temp2);
  }

  function decrementItem(index, item) {
    const temp = [...itemsCount];

    if (itemsCount[index] != 0) {
      temp[index]--;
      setItemsCount(temp);
    }
    if (temp[index] === 0) {
      cartRemover(item);
    }
  }

  function incrementItem(index) {
    const temp = [...itemsCount];
    temp[index]++;
    setItemsCount(temp);
  }

  const [displayCart, setDisplayCart] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  
  useEffect(() => {
    if (displayCart) {
      setHasInteracted(true);
    }
  }, [displayCart]);

  function toggleCart() {
    setDisplayCart(!displayCart);
  }

  return (
    <div className={styles.resetAndOutlet}>
      <div className={styles.nav}>
        <Link to="home">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <button className="cart" onClick={toggleCart}>
          CART
        </button>
      </div>
      <div className={styles.Outlet}>
        <Outlet
          context={[
            cart,
            cartRemover,
            cartAdder,
            items,
            itemsCount,
            decrementItem,
            incrementItem,
          ]}
        />
      </div>
      {
        <Cart
          onClick={toggleCart}
          cart={cart}
          items={items}
          itemsCount={itemsCount}
          decrementItem={decrementItem}
          incrementItem={incrementItem}
          toggleCart={toggleCart}
          displayCart={displayCart}
          hasInteracted={hasInteracted}
        />
      }
    </div>
  );
};

export default Nav;
