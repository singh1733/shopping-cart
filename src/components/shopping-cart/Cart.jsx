function Cart({
  inCart,
  inCartSetter,
  items,
  itemsCount,
  decrementItem,
  incrementItem,
}) {
  return (
    <div className="cart">
      {items.map((item) =>
        inCart[item.id-1] && itemsCount[item.id-1] !== 0 ? (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>x {itemsCount[item.id-1]}</p>
            <p>{item.title}</p>
            <p>${parseFloat(item.price).toFixed(2) * itemsCount[item.id-1]}</p>
            <button onClick={() => decrementItem(item.id-1)}>-</button>
            <p>{itemsCount[item.id]}</p>
            <button onClick={() => incrementItem(item.id-1)}>+</button>
            <button onClick={() => inCartSetter(item.id-1)}>
              Remove from cart
            </button>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Cart;
