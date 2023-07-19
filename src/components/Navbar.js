import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/cartLogo.avif";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div >
      <nav>
        <NavLink to="/">
          <div style={{ marginLeft: "20px" }}>
            <img src={Logo} alt="cartLogo" style={{ height: "56px" }} />
          </div>
        </NavLink>

        <div className="nav-Link">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div style={{ position: "relative" }}>
              <FaShoppingCart
                style={{ fontSize: "28px", lineHeight: "32px" }}
              />
              {cart.length > 0 && (
                <span className="item-number">{cart.length}</span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
