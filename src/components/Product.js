import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";
import "../styles/product.css";

const Product = ({ Post }) => {
  const { cart } = useSelector((state) => state);

  // function call in redux using dispatch
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(Post));
    toast.success("Item added to cart ");
  };

  //jis item ko remove krni h usking id pass kro
  const removeFromCart = () => {
    dispatch(remove(Post.id));
    toast.error("Item removed from cart ");
  };
  return (
    <div className="main-container">
      <div>
        <p className="post-title">{Post.title}</p>
      </div>
      <div>
        <p className="post-desription">
          {Post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div style={{ height: "180px" }}>
        <img
          src={Post.image}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className ="post-price-container">
        <div>
          <p className ="post-price">${Post.price}</p>
        </div>

        {cart.some((p) => p.id === Post.id) ? (
          <button onClick={removeFromCart} className="btn">Remove Item</button>
        ) : (
          <button onClick={addToCart} className="btn">Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;

//post -> here work as single post/ single item
