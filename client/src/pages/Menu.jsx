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
    <>
      <div className="min-h-screen">
        <h1 className="text-3xl font-bold text-center m-4">Menu</h1>

        <div className="container2">
          <h2 className="text-xl font-bold">
            Select an items to add to your cart:
          </h2>
          <div className="flex flex-row">
            {items &&
              items.map((item) => <ItemCard key={item.id} props={item} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
