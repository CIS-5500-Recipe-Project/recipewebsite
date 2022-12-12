import Topbar from "../components/Topbar";
import RecipeMain from "../components/Recipe/RecipeMain.js";
import RecipeContent from "../components/Recipe/RecipeContent.js";
import SimilarRecipe from "../components/Recipe/SimilarRecipe";
import React, { useState, useEffect, useLocation } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../fetcher.js";
import Loading from "../components/Progress";
import { getSimilarRecipes } from "../components/fetcher";
import dummy from "../components/dummy.json";


export default function Recipe() {
  const [recipe, setRecipe] = useState(0);
  const [recipes , setRecipes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { recipeId } = useParams();

  useEffect(() => {
    Promise.all([getRecipeById(recipeId), getSimilarRecipes(recipeId)])
      .then(([singleRecipe, similarRecipes]) => {
        console.log(similarRecipes)
        setRecipe(singleRecipe);
        setRecipes(similarRecipes);
        setLoaded(true);
      })
  }, [recipeId]);

  return (
    <div>
      <Topbar />
      {loaded ? <RecipeMain recipe={recipe} /> : <Loading />}
      {loaded ? <RecipeContent recipe={recipe} /> : null}
      {loaded ? <SimilarRecipe recipes={recipes} /> : null}
    </div>
  );
}
