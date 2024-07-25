import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "../shopping-cart/Cart";
import styles from './resetAndOutlet.module.css';

const Nav = () => {
  const [inCart, setInCart] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function inCartSetter(index) {
    const temp = [...inCart];
    temp[index] = !temp[index];
    if (inCart[index]) {
      const temp = [...itemsCount];
      temp[index] = 0;
      setItemsCount(temp);
    }

    setInCart(temp);
  }

  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function decrementItem(index) {
    const temp = [...itemsCount];

    if (itemsCount[index] != 0) {
      temp[index]--;
      setItemsCount(temp);
    }
    if (temp[index] === 0) {
      const temp2 = [...inCart];
      temp2[index] = false;
      setInCart(temp2);
    }
  }

  function incrementItem(index) {
    const temp = [...itemsCount];
    temp[index]++;
    setItemsCount(temp);
  }

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
    };

    fetchItems();
  }, []);

  const [displayCart, setDisplayCart] = useState(false);

  function toggleCart() {
    setDisplayCart(!displayCart);
  }

  return (
    <div className={styles.resetAndOutlet}>
      <div className={styles.nav}>
        <Link to="home">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <div className="cart" onClick={toggleCart}>
          CART
        </div>
      </div>
      <div >
        <Outlet
          context={[
            inCart,
            inCartSetter,
            items,
            itemsCount,
            decrementItem,
            incrementItem,
          ]}
        />
      </div>
      {displayCart && (
        <Cart
          onClick={toggleCart}
          inCart={inCart}
          inCartSetter={setInCart}
          items={items}
          itemsCount={itemsCount}
          decrementItem={decrementItem}
          incrementItem={incrementItem}
        />
      )}
    </div>
  );
};

export default Nav;
