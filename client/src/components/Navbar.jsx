import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav" id="nav">
      <div className="logo text-3xl font-bold">
        <h2>Joe's Deli</h2>
      </div>

      <div className="navlinks">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
