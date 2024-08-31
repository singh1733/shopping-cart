import styles from "./Cart.module.css";

function Cart({
  cart,
  itemsCount,
  decrementItem,
  incrementItem,
  toggleCart,
  displayCart,
}) {
  return (
    <div className={`${styles.Cart} ${displayCart ? styles.show : ""}`}>
      <p className={styles.Title}>Cart</p>
      <button onClick={toggleCart} className={styles.Title}>
        X
      </button>
      <div className={styles.cartContents}>
        {cart.map((item) =>
          item != 0 ? (
            <div className={styles.Item} key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>
                ${parseFloat(item.price).toFixed(2) * itemsCount[item.id - 1]}
              </p>
              <div>
                <button onClick={() => decrementItem(item.id - 1, item)}>
                  -
                </button>
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
