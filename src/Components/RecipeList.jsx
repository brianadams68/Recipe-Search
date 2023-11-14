import React from "react";
import Recipe from "./Recipe";

function RecipeList({ ingredientsList }) {
  return (
    <div className="Wrapper">
      {ingredientsList.map(({ recipe }) => (
        <Recipe key={recipe.label} {...recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
