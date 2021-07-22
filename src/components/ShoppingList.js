import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)

  const [selectedCategory, setSelectedCategory] = useState(false)

  function handleSelectedCategory(e) {
    setSelectedCategory(e.target.value)
    // items.filter((item) => item.category === e.target.value)

  }

  function laMao() {
    switch (selectedCategory) {
      case 'Produce' :
        let produceItems = items.filter((item) => item.category === selectedCategory) 
          return produceItems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))
      case 'Dairy' :
        let dairyItems = items.filter((item) => item.category === selectedCategory) 
          return dairyItems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))
      case 'Dessert' :
        let dessertItems = items.filter((item) => item.category === selectedCategory) 
          return dessertItems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))
      default : 
        return items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
    }
  }



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelectedCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {laMao()}
      </ul>
    </div>
  );
}

export default ShoppingList;
