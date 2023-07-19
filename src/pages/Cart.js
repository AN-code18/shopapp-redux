import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  //console.log("Printing cart");
  //console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="cart" >
          <div className="single-cart">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="div">
            <div className="div-2">
             <div className="div-3">
                <div className="your-cart"> Your Cart </div>
                <div className="summary"> Summary </div>
                <p style={{ fontSize: "20px", lineHeight: "28px", marginTop:"15px" }}>
                  <span className="cart-length">
                    Total Items: {cart.length}
                  </span>
                </p>
                </div>
            </div>

            <div className="flexi">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: "700",
                 
                }}
              >
                <span className="t-amount">Total Amount: ${totalAmount}</span>
              </p>
              <button className="button">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1 className="empty">Your cart is empty!</h1>
          <NavLink to="/">
            <button className="button">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
