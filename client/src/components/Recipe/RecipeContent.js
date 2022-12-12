import "../css/main.css";
import "../css/css.css";
import "../css/css1.css";
import "uikit/dist/js/uikit.js";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import {Link } from "react-router-dom";

export default function RecipeContent({ recipe }) {
  const instructions = recipe[0].RecipeInstructions.split('\n')
  var ingredients_str = recipe[0].ingredient
  const ingredients = ingredients_str.substring(1, ingredients_str.length-1).split('\",\"')
  var keywords_str = recipe[0].Keywords
  const tags = keywords_str=="[None]"? []: keywords_str.substring(2,keywords_str.length-2).split('\' \'')
  console.log(typeof tags)
  console.log(tags)
  return (
    < div class="uk-section uk-section-default" >
      <div class="uk-container uk-container-small">
        <div class="uk-grid-large" data-uk-grid="">
          <div class="uk-width-expand@m">
            <div class="uk-article">
              <h3>How to Make It</h3>
              {instructions.map((instruction, key) => (
                <>
                  <div id={key} class="uk-grid-small uk-margin-medium-top" data-uk-grid="">
                    <div class="uk-width-expand">
                      <h5
                        className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                        data-uk-leader="fill:—"
                      >
                        {key + 1}. STEP
                      </h5>
                      <div className="uk-step-content">
                        {instruction.replace(/[^a-z0-9, ]/gi, '')}
                      </div>
                    </div>
                  </div>
                </>
              ))}

              <hr class="uk-margin-medium-top uk-margin-large-bottom" />
              <h3>Comments</h3>
              <ul class="uk-comment-list uk-margin-medium-top">
                <li>
                  <article class="uk-comment uk-visible-toggle" tabindex="-1">
                    <header class="uk-comment-header uk-position-relative">
                      <div
                        class="uk-grid-medium uk-flex-middle"
                        data-uk-grid=""
                      >
                        <div class="uk-width-auto">
                          <img
                            class="uk-comment-avatar uk-border-circle"
                            src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
                            width="50"
                            height="50"
                            alt="Alice Thomson"
                          />
                        </div>
                        <div class="uk-width-expand">
                          <h4 class="uk-comment-title uk-margin-remove">
                            <a class="uk-link-reset" href="#">
                              Alice Thomson
                            </a>
                          </h4>
                          <p class="uk-comment-meta uk-margin-remove">
                            <a class="uk-link-reset" href="#">
                              12 days ago
                            </a>
                          </p>
                          <Rating name="half-rating-read" value={3.5} precision={0.1} readOnly />
                        </div>
                      </div>
                    </header>
                    <div class="uk-comment-body">
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                      </p>
                    </div>
                  </article>

                </li>
              </ul>
              <hr class="uk-margin-medium-top" />
              <h3>Leave your comment</h3>
              <div class="uk-margin-medium-bottom">
                <TextField fullWidth id="outlined-textarea" label="Leave your comment..." placeholder="Placeholder" multiline />
              </div>
              <button class="uk-button uk-button-default">Submit</button>
            </div>
          </div>
          <div class="uk-width-1-3@m">
            <h3>Ingredients</h3>
            <ul class="uk-list uk-list-large uk-list-divider uk-margin-medium-top">
              {ingredients.map((ingredient, key) => (
                <li>{ingredient.replace(/[^a-z0-9, ]/gi, '')}</li>
              ))}
            </ul>
            <h3 class="uk-margin-large-top">Tags</h3>
            <div class="uk-margin-medium-top" data-uk-margin="">
              {tags.map((tag) => (<a class="uk-display-inline-block" href="#">
                <Link to={`/Search/${tag}`}>
                    <span class="uk-label uk-label-light">{tag.replace(/'(.*?)'/g)}</span>
                </Link>
              </a>))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
