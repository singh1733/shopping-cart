import { useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";

function Shop() {
  const [
    cart,
    cartRemover,
    cartAdder,
    items,
    itemsCount,
    decrementItem,
    incrementItem,
  ] = useOutletContext();

  return (
    <div className={styles.Shop}>
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
          <p>
            {item.title.length >= 18
              ? item.title.substring(0, 20) + "..."
              : item.title}
          </p>
          <img src={item.image} alt={item.title} />
          <p>${parseFloat(item.price).toFixed(2)}</p>
          <button onClick={() => decrementItem(item.id - 1, item)}>-</button>
          <p>{itemsCount[item.id - 1]}</p>
          <button onClick={() => incrementItem(item.id - 1)}>+</button>
          <button
            onClick={() => {
              cart.includes(item) ? cartRemover(item) : cartAdder(item);
            }}
          >
            {cart.includes(item) ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
