import styles from "./Cart.module.css";
import { useEffect, useState } from "react";

function Cart({
  inCart,
  inCartSetter,
  items,
  itemsCount,
  decrementItem,
  incrementItem,
  toggleCart,
  displayCart,
}) {
  return (
    <div
      className={`${styles.Cart} ${displayCart ? styles.show : styles.noShow}`}
    >
      <p className={styles.Title}>Cart</p>
      <button onClick={toggleCart} className={styles.Title}>
        X
      </button>
      <div className={styles.cartContents}>
        {items.map((item) =>
          inCart[item.id - 1] && itemsCount[item.id - 1] !== 0 ? (
            <div className={styles.Item} key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>
                ${parseFloat(item.price).toFixed(2) * itemsCount[item.id - 1]}
              </p>
              <div>
                <button onClick={() => decrementItem(item.id - 1)}>-</button>
                <p>{itemsCount[item.id - 1]}</p>
                <button onClick={() => incrementItem(item.id - 1)}>+</button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Cart;
