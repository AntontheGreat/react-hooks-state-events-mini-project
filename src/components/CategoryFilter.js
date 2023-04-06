import React, { useState } from "react";

function CategoryFilter({ categories, filterCategory, setFilterCategory }) {

  const categoriesList = categories.map((category) => {
    const className = (filterCategory === category) ? "selected" : "";

    return <button key={category} className={className} onClick={() => setFilterCategory(category)}>{category}</button>
  });



  return (
    <div className="categories">
      <h5>Category filters</h5>
        {/* <select name="filter"> */}
          {categoriesList}
        {/* </select> */}
    </div>
  );
}

export default CategoryFilter;
