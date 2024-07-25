import { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      fetch("https://fakestoreapi.com/products/"+i, { mode: "cors" })
        .then((res) => res.json())
        .then((json) => {
          const temp = { ...items };
          temp.push(json);
          setItems(temp);
        });
    }
  }, []);

  return <></>;
};

export default Shop;
