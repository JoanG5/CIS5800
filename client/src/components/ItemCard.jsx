import React, { useState } from "react";
import axios from "axios";

function ItemCard({ props }) {
  const [amount, setAmount] = useState(0);

  const addItem = async () => {
    const formData = new FormData();
    formData.append("item", props.id);
    formData.append("quantity", amount);
    const response = await axios.post(
      "http://localhost:8000/cart/add/",
      formData
    );
    console.log(response.data);
  };

  const baseUrl = 'http://127.0.0.1:8000';
  const imageUrl = `${baseUrl}${props.photo}`;

  return (
    <>
      <div className="m-4 bg-blue-300">
        <h1 className="text-3xl font-bold underline">{props.name}</h1>
        <img src={imageUrl} alt={props.name} width={"250px"} height={"250px"} />
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to cart
        </button>
        <input
          className="w-10"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          limit={props.stock}
        ></input>
      </div>
    </>
  );
}

export default ItemCard;
