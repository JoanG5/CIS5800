import React from "react";

function CartItemCard({ props }) {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <div className="m-4">
            <h2 className="text-lg font-bold">
              {props.item.name} x{props.quantity}
            </h2>
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
