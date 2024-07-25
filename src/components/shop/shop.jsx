import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";


function Shop(){
  
  const [inCartSetter, items,itemsCount, decrementItem, incrementItem]=useOutletContext();

  
  

  return (
    <>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <button onClick={() => decrementItem(item.id)}>-</button>
          <p>{itemsCount[item.id]}</p>
          <button onClick={() => incrementItem(item.id)}>+</button>
          <button onClick={() => inCartSetter(item.id)}>Add to cart</button>
        </div>
      ))}
    </>
  );
}

export default Shop;
