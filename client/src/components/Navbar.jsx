import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="nav" id="nav">
      <div class="logo text-3xl font-bold">
        <h2>Joe's Deli</h2>
      </div>

      <div class="navlinks">
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
