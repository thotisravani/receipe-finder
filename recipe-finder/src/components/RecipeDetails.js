import React from "react";

const RecipeDetails = ({ recipe, onBack }) => {
  return (
    <div className="recipe-details">
      <button onClick={onBack} className="back-button">Back</button>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>
        <strong>Instructions:</strong> {recipe.strInstructions || "No instructions available."}
      </p>
      <ul>
        <strong>Ingredients:</strong>
        {Array.from({ length: 20 }, (_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return (
            ingredient && (
              <li key={i}>
                {measure} {ingredient}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeDetails;
