import Topbar from "../components/Topbar";
import RecipeMain from "../components/Recipe/RecipeMain.js";
import RecipeContent from "../components/Recipe/RecipeContent.js";
import SimilarRecipe from "../components/Recipe/SimilarRecipe";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById, getReviewsById, postComment, getSimilarRecipes} from "../fetcher.js";
import Loading from "../components/Progress";


export default function Recipe() {
  const [recipe, setRecipe] = useState(0);
  const [recipes , setRecipes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { recipeId } = useParams();

  useEffect(() => {
    Promise.all([getRecipeById(recipeId), getSimilarRecipes(recipeId), getReviewsById(recipeId)])
      .then(([singleRecipe, similarRecipes, totalReviews]) => {
        console.log(similarRecipes)
        setRecipe(singleRecipe);
        setRecipes(similarRecipes);
        setReviews(totalReviews);
        setLoaded(true);
      })
  }, [recipeId]);

  const [star, setStar] = React.useState(3);

  const submitComment = async() => {
      // console.log(recipe);
      let id = recipeId
      let name = document.querySelector("#comment-name").value
      let comment = document.querySelector("#comment-detail").value
      // console.log(id);
      // console.log(star);
      // console.log(name);
      // console.log(comment);
      
      await postComment({recipeId: id, name: name, comment: comment, star: star})

      await getReviewsById(recipeId).then((res) => {
        setReviews(res);
      })
  }


  return (
    <div>
      <Topbar />
      {loaded ? <RecipeMain recipe={recipe} /> : <Loading />}
      {loaded ? <RecipeContent recipe={recipe} reviews={reviews} submitComment={submitComment} star={star} setStar={setStar} /> : null}
      {loaded ? <SimilarRecipe recipes={recipes} /> : null}
    </div>
  );
}
