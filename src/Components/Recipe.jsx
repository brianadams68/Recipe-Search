import React from "react";

function Recipe({ label, image, ingredientLines, url }) {
  const openInNewWindow = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="Ingredients bg-success-subtle bg-gradient">
      <span onClick={openInNewWindow} role="button">{label}</span>
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
