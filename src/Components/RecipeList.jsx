import React from "react";
import Recipe from "./Recipe";

function RecipeList({ ingredientsList }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {ingredientsList.map(({ recipe }) => (
          <div key={recipe.label} className="col-md-3 mb-3">
            <Recipe {...recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;

