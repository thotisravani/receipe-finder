import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";

const sampleRecipes = [
  { idMeal: "52772", strMeal: "Teriyaki Chicken Casserole", strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg" },
  { idMeal: "52804", strMeal: "Poutine", strMealThumb: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg" },
  { idMeal: "52773", strMeal: "Honey Teriyaki Chicken", strMealThumb: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg" },
  { idMeal: "52819", strMeal: "Beef Wellington", strMealThumb: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg" },
  { idMeal: "52941", strMeal: "Chicken Fajita Mac and Cheese", strMealThumb: "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg" },
  { idMeal: "52878", strMeal: "Katsu Chicken Curry", strMealThumb: "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg" },
  { idMeal: "52813", strMeal: "Chicken Couscous", strMealThumb: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg" },
  { idMeal: "52774", strMeal: "Spaghetti Carbonara", strMealThumb: "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg" },
];


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [theme, setTheme] = useState("light"); // State for theme management

  const fetchRecipes = async (query) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
    );
    const data = await response.json();
    setRecipes(data.meals || []);
  };

  const fetchRecipeDetails = async (idMeal) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await response.json();
    setSelectedRecipe(data.meals[0]);
  };

  const handleSearch = (query) => {
    fetchRecipes(query);
  };

  const handleRecipeSelect = (recipe) => {
    fetchRecipeDetails(recipe.idMeal);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  const addToFavorites = (recipe) => {
    if (!favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFromFavorites = (idMeal) => {
    setFavorites(favorites.filter((fav) => fav.idMeal !== idMeal));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container ${theme}`}>
      <header>
        <h1>Recipe Finder</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Mode {theme === "light" ? "Dark" : "Light"} 
        </button>
      </header>
      <SearchBar onSearch={handleSearch} />
      <FavoritesList
        favorites={favorites}
        onRemoveFavorite={removeFromFavorites}
      />
      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onBack={handleBack} />
      ) : (
        <RecipeList
          recipes={recipes.length > 0 ? recipes : sampleRecipes}
          onSelectRecipe={handleRecipeSelect}
          onAddFavorite={addToFavorites}
        />
      )}
    </div>
  );
};

export default App;