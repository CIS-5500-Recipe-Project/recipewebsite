import Topbar from "../components/Topbar";
import RecipeMain from "../components/RecipeMain";
import RecipeContent from "../components/RecipeContent";
import React, { useState, useEffect } from 'react';
import { getDefaultRecipes, getRecipeById} from "../components/fetcher.js"

export default function Recipe({recipeId}) {
  const [recipe, setRecipe] = useState([])
  useEffect(() => {
    const result = getRecipeById(recipeId)
      .then(res => setRecipe(res));
  }, []);
  return (
    <div>
      <Topbar/>
      <RecipeMain recipe={recipe}/>
      <RecipeContent recipe={recipe} />
    </div>
  );
}