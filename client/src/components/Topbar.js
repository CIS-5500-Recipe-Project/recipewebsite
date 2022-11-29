import "./css/main.css";
import "./css/css.css";
import "./css/css1.css";
import "uikit/dist/js/uikit.js";
import Recipe from "../pages/Recipe";
import Recipes from "../pages/Recipes";
import Search from "../pages/Search";
import Home from "../pages/Home";
import { Link, Route, Routes } from "react-router-dom";

export default function Topbar() {
  return (
    <div>
      <nav className="uk-navbar-container uk-letter-spacing-small">
        <div className="uk-container">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
              <a className="uk-navbar-item uk-logo" href>
                Recipe
              </a>

              <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Recipe">Recipes</Link>
                </li>
                <li className="uk-active">
                  <Link to="/Search">Search</Link>
                </li>
                {/* <li>
                  <a href="contact.html">Contact</a>
                </li> */}
              </ul>
            </div>
            <div className="uk-navbar-right">
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
      {/* <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/Recipe/:recipeId' element={<Recipe recipeId={102} />} />
        <Route path='/Search/*' element={<Search />} />
      </Routes> */}
    </div>
  );
}
