import React from "react";

function RecipeDetails({ recipe }) {
  if (!recipe) {
    return null;
  }

  return (
    <div className="Ingredients bg-success-subtle bg-gradient">
      <div className="Details">
        {recipe.map(() => (
          <li></li>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetails;
