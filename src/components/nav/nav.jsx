import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

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
    if (temp) setInCart(temp);
  }


  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function decrementItem(index) {
    if (itemsCount[index] != 0) {
      const temp = [...itemsCount];
      temp[index]--;
      setItemsCount(temp);
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



  return (
    <>
      <div className="nav">
        <Link to="home">HOME</Link>
        <Link to="/shop">
          SHOP
        </Link>
        <Link to="cart">CART</Link>
      </div>
      <div className="display">
        <Outlet context={[inCartSetter, items,itemsCount, decrementItem, incrementItem]}/>
      </div>
    </>
  );
};

export default Nav;
