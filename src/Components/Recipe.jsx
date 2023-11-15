import React from "react";

function Recipe({ label, image, ingredientLines }) {
  return (
    <div className="Ingredients bg-light">
      <span>{label}</span>
      <img src={image} alt={label} />
      <div className="Steps">
        {ingredientLines.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
