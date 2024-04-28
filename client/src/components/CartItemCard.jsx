import React from "react";
import axios from "axios";

function CartItemCard({ props }) {
  const baseUrl = "http://127.0.0.1:8000";
  const imageUrl = `${baseUrl}${props.item.photo}`;
  console.log(props);

  return (
    <div className="flex justify-center my-3">
      <div className="card lg:card-side bg-blue-200 shadow-xl w-11/12">
        <figure>
          <img
            src={imageUrl}
            alt={props.item.name}
            className="rounded-lg w-36 h-36 object-cover mx-3 my-3"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.item.name} x{props.quantity}
          </h2>
          <p>{props.item.description}</p>
          <div className="card-actions justify-end">
            <h2 className="text-lg font-bold ml-2">
              $
              {Number(parseFloat(props.item.price) * props.quantity).toFixed(2)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
