import Topbar from "../components/Topbar";
import RecipeMain from "../components/Recipe/RecipeMain.js";
import RecipeContent from "../components/Recipe/RecipeContent.js";
import React, { useState, useEffect } from "react";
import { getDefaultRecipes } from "../components/fetcher.js";

import dummy from "../components/dummy.json";

export default function Recipe() {
  const [recipe, setRecipe] = useState([dummy.recipe]);

  useEffect(() => {
    console.log(recipe);
    const result = getDefaultRecipes().then((res) => {
      setRecipe(res);
    });
  }, []);
  return (
    <div>
      <Topbar />
      <RecipeMain recipes={recipe} />
      <RecipeContent recipes={recipe} />
    </div>
  );
}
