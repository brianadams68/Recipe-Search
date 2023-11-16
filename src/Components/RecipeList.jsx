import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

function RecipeList({ ingredientsList }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`container mt-5 ${scrolled ? "scrolled" : ""}`}>
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
