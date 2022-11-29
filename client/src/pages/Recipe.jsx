import Topbar from "../components/Topbar";
import RecipeMain from "../components/Recipe/RecipeMain.js";
import RecipeContent from "../components/Recipe/RecipeContent.js";
import SimilarRecipe from "../components/Recipe/SimilarRecipe";
import React, { useState, useEffect, useLocation } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../fetcher.js";
import Loading from "../components/Progress";


export default function Recipe() {
  const [recipe, setRecipe] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { recipeId } = useParams();

  useEffect(() => {
    getRecipeById(recipeId).then((recipe) => {
      setRecipe(recipe);
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      <Topbar />
      {loaded ? <RecipeMain recipe={recipe} /> : <Loading />}
      {loaded ? <RecipeContent recipe={recipe} /> : null}
      {loaded ? <SimilarRecipe recipe={recipe} /> : null}

    </div>
  );
}
