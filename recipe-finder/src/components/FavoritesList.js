import React from "react";

const FavoritesList = ({ favorites, onRemoveFavorite }) => {
  if (favorites.length === 0) return null;

  return (
    <div className="favorites-list">
      <h2>Favorite Recipes</h2>
      {favorites.map((recipe) => (
        <div className="favorite-item" key={recipe.idMeal}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} width="50" />
          <span>{recipe.strMeal}</span>
          <button onClick={() => onRemoveFavorite(recipe.idMeal)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
