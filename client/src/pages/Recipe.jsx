import Topbar from "../components/Topbar";
import RecipeMain from "../components/RecipeMain";
import RecipeContent from "../components/RecipeContent";
import React, { useState, useEffect } from 'react';
import { getDefaultRecipes } from "../components/fetcher.js"

export default function Recipe() {
  const [recipe, setRecipe] = useState([])
  useEffect(() => {
    const result = getDefaultRecipes()
      .then(res => setRecipe(res));
  }, []);
  return (
    <div>
      <Topbar/>
      <RecipeMain recipes={recipe}/>
      <RecipeContent recipes= {recipe} />
    </div>
  );
}