import React, { useState } from "react";
import axios from "axios";

function ItemCard({ props }) {
  const [amount, setAmount] = useState(0);

  const addItem = async () => {
    if (amount === 0) {
      return;
    }
    const formData = new FormData();
    formData.append("item", props.id);
    formData.append("quantity", amount);
    const response = await axios.post(
      "http://localhost:8000/cart/add/",
      formData
    );
    console.log(response.data);
  };

  const baseUrl = "http://127.0.0.1:8000/static/";
  const imageUrl = `${baseUrl}${props.photo.slice(9)}`;

  return (
    <>
      <div className="m-4 p-4 bg-blue-200 rounded-lg min-w-72">
        <h1 className="text-3xl font-bold">{props.name}</h1>
        <img
          src={imageUrl}
          alt={props.name}
          className="w-36 h-36 object-cover rounded-lg mx-auto mb-5"
        />
        <p className="text-xl">{props.description}</p>
        <p className="text-xl mb-5">${props.price}</p>
        <div className="flex justify-end items-center">
          <button onClick={addItem} className="btn btn-primary w-28 ">
            Add to cart
          </button>
          <input
            className="w-10 h-10 border-2 border-black rounded-lg"
            min={0}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            limit={props.stock}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
