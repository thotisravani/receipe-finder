import React from "react";

const RecipeList = ({ recipes, onSelectRecipe, onAddFavorite }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.idMeal}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
          <button onClick={() => onSelectRecipe(recipe)}>View Details</button>
          <button onClick={() => onAddFavorite(recipe)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
