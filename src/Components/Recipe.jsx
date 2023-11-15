import React from "react";

function Recipe({ label, image, ingredientLines }) {
  return (
    <div className="Ingredients bg-success-subtle bg-gradient">
      <span>{label}</span>
      <img src={image} alt={label} />
      <div className="Steps">
        {ingredientLines.map((step, index) => (
          <li key={index} className="text-dark">
            {step}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
