import React, { useState } from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(false)
  
  function add() {
    setAddToCart(!addToCart)
  }

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={add} className={addToCart ? "remove" : "add"}>{addToCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
