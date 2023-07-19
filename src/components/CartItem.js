import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import  "../styles/CartItem.css"

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="container">
      <div className="item-container" >
        <div style={{ width: "30%" }}>
          <img src={item.image} alt="item" style={{ width: "100%", height: "100%"}}/>
        </div>
        <div className="item-info">
          <h1 className="item-title">{item.title}</h1>
          <h1 className="item-description">{item.description}</h1>
          <div className="item-price-container">
            <p className="item-price">{item.price}</p>
            <div className="remove-btn"  onClick={removeFromCart} >
              <AiFillDelete  onClick={removeFromCart}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
