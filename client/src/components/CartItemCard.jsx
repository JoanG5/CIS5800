import React from "react";

function CartItemCard({ props }) {
  const baseUrl = "http://127.0.0.1:8000";
  const imageUrl = `${baseUrl}${props.item.photo}`;
  console.log(props);
  
  return (
    <>
      <div className="m-4 p-4 bg-blue-300 rounded-lg max-w-80">
        <div className="flex flex-col">
          <div className="m-4">
            <h2 className="text-lg font-bold">
              {props.item.name} x{props.quantity}
            </h2>
            <img
              src={imageUrl}
              alt={props.name}
              className="w-36 h-36 object-cover rounded-lg mx-auto mb-5"
            />
            <p>{props.item.description}</p>
            <h2 className="text-lg font-bold ml-2">
              $
              {Number(parseFloat(props.item.price) * props.quantity).toFixed(2)}
            </h2>
          </div>
          <h2 className="text-lg">{props.description}</h2>
        </div>
      </div>
    </>
  );
}

export default CartItemCard;
