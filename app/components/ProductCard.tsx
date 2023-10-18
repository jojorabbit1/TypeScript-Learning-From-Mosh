import React from "react";
import AddToCart from "./AddToCart";
// import styles from "../components/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-blue-400 border-r-emerald-500">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
