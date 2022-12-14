import "../css/main.css";
import "../css/css.css";
import "../css/css1.css";
import "uikit/dist/js/uikit.js";
import { Link } from "react-router-dom";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import ItemGrid from "../Search/ItemGrid";

export default function SmilarRecipe({ recipes }) {
  const GreyTextTypography = withStyles({
    root: {
      color: "#808080"
    }
  })(Typography);

  return (
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-small">
        <div class="uk-grid-large" data-uk-grid="">
          <div class="uk-width-expand@m">
            <div class="uk-article">
              <h3>Others You May Like</h3>
              <div
                class="uk-child-width-1-2 uk-child-width-1-4@s"
                data-uk-grid=""
              >
                {(recipes.length !== 0) ? (
                  recipes.map((ele, index) => {
                    return (
                      <Link to={`/recipe/${ele.RecipeId}`}>

                        <ItemGrid
                          key={index}
                          // onClick={()=>handleClick(index)}
                          name={ele.Name}
                          image={ele.Images}
                          rating={
                            ele.AvgRating == null
                              ? 0
                              : Number(ele.AvgRating).toFixed(1)
                          }
                          comment={ele.Comment}
                          date={ele.Date}
                          author={ele.AuthorName}
                        />
                      </Link>
                    )
                  })) : (<GreyTextTypography variant="h7">
                    Similar Recipes Not Found
                  </GreyTextTypography>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
