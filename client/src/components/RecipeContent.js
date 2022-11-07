import "../static/css/main.css";
import "../static/css/css.css";
import "../static/css/css1.css";
import "uikit/dist/js/uikit.js";
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

export default function RecipeContent() {
  return (
    
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-small">
        <div class="uk-grid-large" data-uk-grid="">
          <div class="uk-width-expand@m">
            <div class="uk-article">
              <h3>How to Make It</h3>
              <div id="step-1" class="uk-grid-small uk-margin-medium-top" data-uk-grid="">
                <div class="uk-width-expand">
                  <h5
                    class="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                    data-uk-leader="fill:—"
                  >
                    1. Step
                  </h5>
                  <div class="uk-step-content">
                    Labour, of evaluated would he the a the our what is in the
                    arduous sides behavioural is which the have didn't kicked
                    records the it framework by the for traveler sure the can
                    most well her. Entered have break himself cheek, and
                    activity, for bit of text.
                  </div>
                </div>
              </div>
              <div
                id="step-2"
                class="uk-grid-small uk-margin-medium-top"
                data-uk-grid=""
              >
                
                <div class="uk-width-expand">
                  <h5
                    class="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                    data-uk-leader="fill:—"
                  >
                    2. Step
                  </h5>
                  <div class="uk-step-content">
                    Labour, of evaluated would he the a the our what is in the
                    arduous sides behavioural is which the have didn't kicked
                    records the it framework by the for traveler sure the can
                    most well her. Entered have break himself cheek, and
                    activity, for bit of text.
                  </div>
                </div>
              </div>
              <div
                id="step-3"
                class="uk-grid-small uk-margin-medium-top"
                data-uk-grid=""
              >
                
                <div class="uk-width-expand">
                  <h5
                    class="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                    data-uk-leader="fill:—"
                  >
                    3. Step
                  </h5>
                  <div class="uk-step-content">
                    Labour, of evaluated would he the a the our what is in the
                    arduous sides behavioural is which the have didn't kicked
                    records the it framework by the for traveler sure the can
                    most well her. Entered have break himself cheek, and
                    activity, for bit of text.
                  </div>
                </div>
              </div>
              <div
                id="step-4"
                class="uk-grid-small uk-margin-medium-top"
                data-uk-grid=""
              >
                
                <div class="uk-width-expand">
                  <h5
                    class="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                    data-uk-leader="fill:—"
                  >
                    4. Step
                  </h5>
                  <div class="uk-step-content">
                    Labour, of evaluated would he the a the our what is in the
                    arduous sides behavioural is which the have didn't kicked
                    records the it framework by the for traveler sure the can
                    most well her. Entered have break himself cheek, and
                    activity, for bit of text.
                  </div>
                </div>
              </div>
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
              <div class ="uk-margin-medium-bottom">
                <TextField fullWidth id="outlined-textarea" label="Leave your comment..." placeholder="Placeholder" multiline/>
              </div>
              <button class="uk-button uk-button-default">Submit</button>
            </div>
          </div>
          <div class="uk-width-1-3@m">
            <h3>Ingredients</h3>
            <ul class="uk-list uk-list-large uk-list-divider uk-margin-medium-top">
              <li>1 pound fresh prepared pizza dough</li>
              <li>6 ounces shredded mozzarella cheese</li>
              <li>3/4 cup of ricotta cheese</li>
              <li>1 large egg yolk</li>
              <li>1/2 teaspoon lemon zest</li>
              <li>2 finely grated garlic cloves</li>
              <li>1/2 teaspoon kosher salt</li>
              <li>1/4 teaspoon black pepper</li>
              <li>1 large egg</li>
              <li>1 teaspoon dried Italian seasoning</li>
            </ul>
            <h3 class="uk-margin-large-top">Tags</h3>
            <div class="uk-margin-medium-top" data-uk-margin="">
              <a class="uk-display-inline-block" href="#">
                <span class="uk-label uk-label-light">dinner</span>
              </a>
              <a class="uk-display-inline-block" href="#">
                <span class="uk-label uk-label-light">casserole</span>
              </a>
              <a class="uk-display-inline-block" href="#">
                <span class="uk-label uk-label-light">party</span>
              </a>
              <a class="uk-display-inline-block" href="#">
                <span class="uk-label uk-label-light">meat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
