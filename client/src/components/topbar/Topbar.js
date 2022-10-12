import "../../static/css/main.css";
import "../../static/css/css.css";
import "../../static/css/css1.css";
import "uikit/dist/js/uikit.js"

export default function Topbar() {
  return (
    <nav className="uk-navbar-container uk-letter-spacing-small">
      <div className="uk-container">
        <div className="uk-position-z-index" data-uk-navbar>
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href>
              Recipe
            </a>
            <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
              <li className="uk-active">
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="recipe.html">Recipe</a>
              </li>
              <li>
                <a href="search.html">Search</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <div>
              <a className="uk-navbar-toggle" data-uk-search-icon href="#" />
              <div
                className="uk-drop uk-background-default"
                data-uk-drop="mode: click; pos: left-center; offset: 0"
              >
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input
                    className="uk-search-input uk-text-demi-bold"
                    type="search"
                    placeholder="Search..."
                    autofocus
                  />
                </form>
              </div>
            </div>
            <ul className="uk-navbar-nav uk-visible@m">
              <li>
                <a href="sign-in.html">Sign In</a>
              </li>
            </ul>
            <div className="uk-navbar-item">
              <div>
                <a
                  className="uk-button uk-button-primary"
                  href="sign-up.html"
                >
                  Sign Up
                </a>
              </div>
            </div>
            <a
              className="uk-navbar-toggle uk-hidden@m"
              href="#offcanvas"
              data-uk-toggle
            >
              <span data-uk-navbar-toggle-icon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
