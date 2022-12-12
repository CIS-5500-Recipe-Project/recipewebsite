import "../css/main.css";
import "../css/css.css";
import "../css/css1.css";
import "uikit/dist/js/uikit.js";
import { Link } from "react-router-dom";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function SmilarRecipe({ recipes }) {
  // const imgs = recipes[0].Images.split("\n")[0];
  return (
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-small">
        <div class="uk-grid-large" data-uk-grid="">
          <div class="uk-width-expand@m">
            <div class="uk-article">
              <h3>Similar Recipes</h3>
              <div
                class="uk-child-width-1-2 uk-child-width-1-4@s"
                data-uk-grid=""
              >
                {recipes.map((recipe, index) => {
                  return (
                    <Link to={`/recipe/${recipe.RecipeId}`}>
                      <div class="uk-card" key={index}>
                        <div class="uk-card-media-top uk-inline uk-light">
                          <img
                            class="uk-border-rounded-medium"
                            src={recipe.Images.split("\n")[0].replace(/[\[\]']+/g, '')}
                            alt="Course Title"
                          />
                          <div class="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                        </div>
                        <div>
                          <h3 class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                            {recipe.Name}
                          </h3>
                          <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                            <div class="uk-width-auto uk-flex uk-flex-middle">
                            <StarRoundedIcon fontSize="small" color="warning"/>
                              <span class="uk-margin-xsmall-left">5.0</span>
                              <span>({recipe.ReviewCount})</span>
                            </div>
                            <div class="uk-width-expand uk-text-right">
                              by {recipe.AuthorName}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
