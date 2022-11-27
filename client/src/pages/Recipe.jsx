import Topbar from "../components/Topbar";
import RecipeMain from "../components/Recipe/RecipeMain.js";
import RecipeContent from "../components/Recipe/RecipeContent.js";
import SimilarRecipe from "../components/Recipe/SimilarRecipe";
import React, { useState, useEffect } from "react";
import { getDefaultRecipes,getRecipeById} from "../components/fetcher.js";

import dummy from "../components/dummy.json";

export default function Recipe({ recipeId }) {
  const [recipe, setRecipe] = useState([dummy.recipe]);

  useEffect(() => {
    console.log(recipe);
    const result = getRecipeById(recipeId).then((res) => {
      setRecipe(res);
    });
  }, [recipeId]);
  return (
    <div>
      <Topbar />
      <RecipeMain recipe={recipe} />
      <RecipeContent recipe={recipe} />
      <SimilarRecipe recipe={recipe} />
      
    </div>
  );
}
