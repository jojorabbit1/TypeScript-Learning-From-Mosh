"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => console.log("Got It")}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
