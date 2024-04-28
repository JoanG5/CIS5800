import React, { useEffect, useState } from "react";
import CartItemCard from "../components/CartItemCard";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [ticket, setTicket] = useState(0);

  useEffect(() => {
    const response = axios.get("http://localhost:8000/cart/getCart/");
    response
      .then((res) => {
        setCart(res.data.items);
        calculateTotal(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const calculateTotal = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      const price = parseFloat(item.item.price);
      const quantity = parseInt(item.quantity, 10);
      totalPrice += price * quantity;
    });
    setTotal(totalPrice);
  };

  const createTicket = () => {
    const response = axios.post("http://localhost:8000/cart/createTicket/", {});
    response
      .then((res) => {
        setTicket(res.data.ticket.id);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTicket = () => {
    const response = axios.delete(
      `http://localhost:8000/cart/deleteTicket/${ticket}`
    );
    response
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-4">Cart</h1>

      <div className="container2">
        <h2 className="text-xl font-bold">Review your order:</h2>
        <div className="flex flex-col ">
          {cart &&
            cart.map((item) => <CartItemCard key={item.id} props={item} />)}
        </div>
        <h2 className="text-lg font-bold">Total: ${total.toFixed(2)}</h2>
        <button
          onClick={createTicket}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Confirm
        </button>
        <button
          onClick={deleteTicket}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          END ORDER
        </button>
      </div>
    </>
  );
}

export default Cart;
