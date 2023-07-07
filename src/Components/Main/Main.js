import React, { useState, useEffect } from "react";
import { getAllRecipes } from "/src/Common/Services/LearnService";
import MainList from "./MainList";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const Main = () => {
  // Variables in the state to hold data
  const [recipes, setRecipes] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllRecipes().then((recipes) => {
      console.log(recipes);
      setRecipes(recipes);
    });
  }, []);

  return (
    // Top of webpage
    <div>
      <h1>Cookbook Helper</h1>
      <p>Search for a recipe: </p>
      <input id="searchBar" placeholder="Not yet functional" />
      <button data="buttonText">Search</button>
      <MainList recipes={recipes} />
    </div>
  );
};

export default Main;
