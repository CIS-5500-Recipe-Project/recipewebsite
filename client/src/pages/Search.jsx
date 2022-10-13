import Topbar from"../components/Topbar";
export default function Search() {
  return (
    <div>
      <Topbar/>
      <div class="uk-section uk-section-default uk-padding-remove-top">
      <div class="uk-container">
        <div data-uk-grid="">
          <div class="uk-width-1-4@m sticky-container">
            <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
              <h2>Recipes</h2>
              <ul
                class="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top"
                data-uk-nav=""
              >
                <li class="uk-parent">
                  <a href="#">Dish Type</a>
                  <ul class="uk-nav-sub">
                    <li><a href="#">Appetizers & Snacks</a></li>
                    <li><a href="#">Bread Recipes</a></li>
                    <li><a href="#">Cake Recipes</a></li>
                    <li><a href="#">Candy and Fudge</a></li>
                    <li><a href="#">Casserole Recipes</a></li>
                    <li><a href="#">Christmas Cookies</a></li>
                    <li><a href="#">Cocktail Recipes</a></li>
                    <li><a href="#">Main Dishes</a></li>
                    <li><a href="#">Pasta Recipes</a></li>
                    <li><a href="#">Pie Recipes</a></li>
                    <li><a href="#">Sandwiches</a></li>
                  </ul>
                </li>
                <li class="uk-parent">
                  <a href="#">Meal Type</a>
                  <ul class="uk-nav-sub">
                    <li><a href="#">Breakfast and Brunch</a></li>
                    <li><a href="#">Desserts</a></li>
                    <li><a href="#">Dinners</a></li>
                    <li><a href="#">Lunch</a></li>
                  </ul>
                </li>
                <li class="uk-parent">
                  <a href="#">Diet and Health</a>
                  <ul class="uk-nav-sub">
                    <li><a href="#">Diabetic</a></li>
                    <li><a href="#">Gluten Free</a></li>
                    <li><a href="#">High Fiber Recipes</a></li>
                    <li><a href="#">Low Calorie</a></li>
                  </ul>
                </li>
                <li class="uk-parent">
                  <a href="#">World Cuisine</a>
                  <ul class="uk-nav-sub">
                    <li><a href="#">Chinese</a></li>
                    <li><a href="#">Indian</a></li>
                    <li><a href="#">Italian</a></li>
                    <li><a href="#">Mexican</a></li>
                  </ul>
                </li>
                <li class="uk-parent">
                  <a href="#">Seasonal</a>
                  <ul class="uk-nav-sub">
                    <li><a href="#">Baby Shower</a></li>
                    <li><a href="#">Birthday</a></li>
                    <li><a href="#">Christmas</a></li>
                    <li><a href="#">Halloween</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="uk-width-expand@m">
            <div data-uk-grid="">
              <div class="uk-width-expand@m">
                <form class="uk-search uk-search-default uk-width-1-1">
                  <span data-uk-search-icon=""></span><input
                    class="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                    type="search"
                    placeholder="Search for recipes..."
                  />
                </form>
              </div>
              <div class="uk-width-1-3@m uk-text-right@m uk-light">
                <select
                  class="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary"
                >
                  <option>Sort by: Latest</option>
                  <option>Sort by: Top Rated</option>
                  <option>Sort by: Trending</option>
                </select>
              </div>
            </div>
            <div
              class="uk-child-width-1-2 uk-child-width-1-3@s"
              data-uk-grid=""
            >
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Chef John's Turkey Sloppy Joes
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span><span class="uk-margin-xsmall-left">5.0</span>
                          <span>(73)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by John Keller
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="../static/picture/300x1601.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Brown Sugar Meatloaf
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">3.0</span>
                          <span>(94)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Danial Caleem
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x1602.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Awesome Slow Cooker Pot Roast
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span><span class="uk-margin-xsmall-left">4.5</span>
                          <span>(153)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Janet Small
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Broiled Tilapia Parmesan
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">5.0</span>
                          <span>(524)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Aleaxa Dorchest
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x1604.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Baked Teriyaki Chicken
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">4.6</span>
                          <span>(404)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Ben Kaller
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x1605.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Zesty Slow Cooker Chicken
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">3.9</span>
                          <span>(629)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Sam Brown
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x1606.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Rosemary Ranch Chicken Kabobs
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">3.6</span>
                          <span>(149)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Theresa Samuel
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x1607.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Slow Cooker Pulled Pork
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">2.9</span>
                          <span>(309)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Adam Brown
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x1608.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Greek Lemon Chicken and Potatoes
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">3.6</span>
                          <span>(124)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Thomas Haller
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x1609.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Turkey Posole Dinner
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">4.0</span>
                          <span>(84)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Thomas Haller
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x16010.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Baked Macaroni and Cheese
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">2.9</span>
                          <span>(311)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Thomas Haller
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div class="uk-card">
                  <div class="uk-card-media-top uk-inline uk-light">
                    <img
                      class="uk-border-rounded-medium"
                      src="static/picture/300x16011.jpg"
                      alt="Course Title"
                    />
                    <div
                      class="uk-position-cover uk-card-overlay uk-border-rounded-medium"
                    ></div>
                    <div class="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>
                  <div>
                    <h3
                      class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                    >
                      Deb's General Tso's Chicken
                    </h3>
                    <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
                      <div class="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          class="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                          ></span>
                          <span class="uk-margin-xsmall-left">4.4</span>
                          <span>(68)</span>
                      </div>
                      <div class="uk-width-expand uk-text-right">
                        by Thomas Haller
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" class="uk-position-cover"></a>
                </div>
              </div>
            </div>
            <div class="uk-margin-large-top uk-text-small">
              <ul
                class="uk-pagination uk-flex-center uk-text-500 uk-margin-remove"
                data-uk-margin=""
              >
                <li>
                  <a href="#"><span data-uk-pagination-previous=""></span></a>
                </li>
                <li><a href="#">1</a></li>
                <li class="uk-active"><span>2</span></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li>
                  <a href="#"><span data-uk-pagination-next=""></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}