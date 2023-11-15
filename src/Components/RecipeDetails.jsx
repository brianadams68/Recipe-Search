import React from "react";

function RecipeDetails({ recipe }) {
  return (
    <div className="Ingredients bg-success-subtle bg-gradient">
      <span>{recipe.label}</span>
      <img src={recipe.image} alt={recipe.label} />
      <div className="Steps">
        {recipe.ingredientLines.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetails;
