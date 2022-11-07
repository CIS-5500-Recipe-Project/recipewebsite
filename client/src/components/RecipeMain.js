import "../static/css/main.css";
import "../static/css/css.css";
import "../static/css/css1.css";
import "uikit/dist/js/uikit.js";

export default function RecipeMain() {
  return (
    <div class="uk-container">
      <div data-uk-grid="">
        <div class="uk-width-1-2@s">
          <div>
            <img
              class="uk-border-rounded-large"
              src="https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg"
              alt="Image alt"
            />
          </div>
        </div>
        <div class="uk-width-expand@s uk-flex uk-flex-middle">
          <div>
            <h1>White calzones with marinara sauce</h1>
            <p>
              Supermarket brands of ricotta contain stabilizers, which can give
              the cheese a gummy texture when baked. Check the label and choose
              ricotta made with as few ingredients as possible.
            </p>
            <div
              class="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider"
              data-uk-grid=""
            >
              <div>
                <span data-uk-icon="icon: clock; ratio: 1.4"></span>
                <h5 class="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                  Active Time
                </h5>
                <span class="uk-text-small">20 mins</span>
              </div>
              <div>
                <span data-uk-icon="icon: future; ratio: 1.4"></span>
                <h5 class="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                  Total Time
                </h5>
                <span class="uk-text-small">50 mins</span>
              </div>
              <div>
                <span data-uk-icon="icon: users; ratio: 1.4"></span>
                <h5 class="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                  Yield
                </h5>
                <span class="uk-text-small">Serves 4</span>
              </div>
            </div>
            <hr />
            <div data-uk-grid="">
              <div class="uk-width-auto@s uk-text-small">
                <span class="uk-label">Lunch/Snacks</span>
                <p class="uk-margin-small-top uk-margin-remove-bottom">
                  Created by <a href="#">Alex Williamns</a>
                </p>
                <span class="uk-text-muted">21 recipes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
