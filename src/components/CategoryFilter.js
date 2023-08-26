import React from "react";

function CategoryFilter({ handleSelection, categories, selectedCategory }) {

  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;

    return (
      <button key={category} className={className} onClick={(e) => handleSelection(e)}>
        {category}
      </button>
    )

  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
