import Topbar from "../components/Topbar";
import RecipeMain from "../components/Recipe/RecipeMain.js";
import RecipeContent from "../components/Recipe/RecipeContent.js";
import SimilarRecipe from "../components/Recipe/SimilarRecipe";
import React, { useState, useEffect } from "react";
import {getRecipeById} from "../components/fetcher.js";

import dummy from "../components/dummy.json";

export default function Recipe({ recipeId }) {
  const [recipe, setRecipe] = useState([dummy.recipe]);

  useEffect(() => {
    getRecipeById(recipeId).then((res) => {
      setRecipe(res);
    });
  }, [recipeId]);
  return (
    <div>
      <Topbar />
      <RecipeMain recipe={recipe}/>
      <RecipeContent recipe={recipe} />
      <SimilarRecipe recipe={recipe} />
      
    </div>
  );
}
