import { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);

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

  const valueIntiliaizer=()=>{

  }

  return (
    <>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <button>-</button>
          <p></p>
          <button>+</button>
          <button>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Shop;
