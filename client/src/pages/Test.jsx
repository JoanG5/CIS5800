import React from "react";
import axios from "axios";

function Test() {
  const getCart = async () => {
    const response = await axios.get("http://localhost:8000/cart/getCart/");
    console.log(response.data);
  };

  const addProduct = async () => {
    const formData = new FormData();
    formData.append("item", 1);
    formData.append("quantity", 1);
    const response = await axios.post(
      "http://localhost:8000/cart/add/",
      formData
    );
    console.log(response.data);
  };

  const removeProduct = async (cartItemId) => {
    const formData = new FormData();
    formData.append("id", 3);
    const response = await axios.delete("http://localhost:8000/cart/remove/3");
    console.log(response.data);
  };

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/cart/getItems/");
    console.log(response.data);
  };

  const createTicket = async () => {
    const response = await axios.post(
      "http://localhost:8000/cart/createTicket/",
      {}
    );
    console.log(response.data);
  };

  const deleteTicket = async () => {
    const response = await axios.delete(
      "http://localhost:8000/cart/deleteTicket/1"
    );
    console.log(response.data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={getCart}
      >
        GET CART
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addProduct}
      >
        ADD SODA
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={removeProduct}
      >
        REMOVE
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={getProducts}
      >
        GET PRODUCTS
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={createTicket}
      >
        CREATE TICKET
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={deleteTicket}
      >
        DELETE TICKET
      </button>
    </div>
  );
}

export default Test;
