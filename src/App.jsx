import React, { useEffect, useState } from "react";
import Input from "./Components/Input";
import Loading from "./Components/Loading";
import RecipeList from "./Components/RecipeList";
import "./App.css";

function App() {
  const [ingredientsList, updateIngredientsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_RECIPE_KEY;
  const APP_ID = import.meta.env.VITE_APP_ID;

  const searchForRecipe = (query) => {
    setLoading(true);
    let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.hits);
        updateIngredientsList(res.hits);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    searchForRecipe("");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Input onSearch={searchForRecipe} />
        {loading && <Loading />}
        <RecipeList ingredientsList={ingredientsList} />
      </header>
    </div>
  );
}

export default App;
