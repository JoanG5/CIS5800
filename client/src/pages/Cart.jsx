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
        if (res.data.ticket.id !== 0) {
          document.getElementById("my_modal_1").showModal();
        }
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
      <div className="min-h-screen">
        <h1 className="text-3xl font-bold text-center m-4">Cart</h1>

        <div className="container2">
          <h2 className="text-xl font-bold">Review your order:</h2>
          <div className="flex flex-col ">
            {cart &&
              cart.map((item) => <CartItemCard key={item.id} props={item} />)}
          </div>
          <h2 className="text-lg font-bold">Total: ${total.toFixed(2)}</h2>
          <div className="flex justify-end">
            <button
              onClick={createTicket}
              className="btn btn-primary w-28"
            >
              Confirm
            </button>
          </div>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-blue-200">
            <h1 className="text-3xl font-bold text-center">
              Thank You For Ordering!
            </h1>
            <p className="text-xl font-bold text-center mb-4">
              Your Ticket Number Is:
            </p>
            <h1 className="text-9xl font-bold text-center my-3 p-10">
              {ticket}
            </h1>
            <form method="dialog">
              <div className="flex justify-end">
                <button className="btn btn-success" onClick={deleteTicket}>
                  Received Order
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Cart;
