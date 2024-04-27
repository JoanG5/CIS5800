import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import axios from "axios";

function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const response = axios.get("http://localhost:8000/cart/getItems/");
    response
      .then((res) => {
        setItems(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Menu</h1>
      <h2 className="text-xl font-bold">Select an item to add to your cart:</h2>
      <div className="flex flex-row">
        {items && items.map((item) => <ItemCard key={item.id} props={item} />)}
      </div>
    </div>
  );
}

export default Menu;
