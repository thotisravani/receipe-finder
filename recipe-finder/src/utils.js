export const saveToFavorites = (recipe) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.id === recipe.id)) {
      favorites.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };
  
  export const loadFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  };
