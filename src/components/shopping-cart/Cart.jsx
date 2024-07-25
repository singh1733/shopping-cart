import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [
    inCart,
    inCartSetter,
    items,
    itemsCount,
    decrementItem,
    incrementItem,
  ] = useOutletContext();
  return (
    <div className="cart">
      {items.map((item) =>
        inCart[item.id] && itemsCount[item.id] !== 0 ? (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>x {itemsCount[item.id]}</p>
            <p>{item.title}</p>
            <button onClick={() => decrementItem(item.id)}>-</button>
            <p>{itemsCount[item.id]}</p>
            <button onClick={() => incrementItem(item.id)}>+</button>
            <button onClick={() => inCartSetter(item.id)}>
              Remove from cart
            </button>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Cart;
