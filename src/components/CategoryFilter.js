import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter() {
  function handleCategory(){
    console.log("selected")
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {category.map(category => {
        <button key={category} onClick={handleCategory}>{category}</button>;
      })}
    </div>
  );
}

export default CategoryFilter;
