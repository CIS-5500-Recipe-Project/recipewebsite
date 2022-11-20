import "../static/css/main.css";
import "../static/css/css.css";
import "../static/css/css1.css";
import "uikit/dist/js/uikit.js";
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import { CardContent, CardActionArea, Typography, CardMedia, Modal, Box } from "@mui/material";
import React, { useState, useEffect } from 'react';

export default function RecipeMain({ recipes }) {
  const imgs = recipes[0].Images.split("\n");
  console.log(imgs[3].replace(/'/g, ""));
  console.log(recipes[2])
  console.log(recipes[2].Images.split("\n")[1]);
  console.log(recipes[0].PrepTime.replace(/^[0-9]+$/))
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleOpen = () => setShow(true);

  return (
    <div class="uk-container">
      <div data-uk-grid="">
        <div class="uk-width-1-2@s">
          <div>
            <Card sx={{ maxWidth: 550 }}>
              {/* onClick={handleOpen} */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={imgs[1].replace(/'/g, "")}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Overall Rating
                    <Rating name="Overall Rating" value={recipes[0].AggregatedRating} precision={0.1} readOnly />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {recipes[0].Description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {/* <Modal
              open={show}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{
                height: 300,
                flexGrow: 1,
                minWidth: 300,
                transform: 'translateZ(0)',
                // The position fixed scoping doesn't work in IE11.
                // Disable this demo to preserve the others.
                '@media all and (-ms-high-contrast: none)': {
                  display: 'none',
                },
              }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Nutritional Facts 
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal> */}
          </div>
        </div>
        <div class="uk-width-expand@s uk-flex uk-flex-middle">
          <div>
            <h1>{recipes[0].Name}</h1>
            <p>
              {recipes[0].Description}
            </p>
            <div
              class="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider"
              data-uk-grid=""
            >
              <div>
                <span data-uk-icon="icon: clock; ratio: 1.4"></span>
                <h5 class="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                  Prep Time
                </h5>
                <span class="uk-text-small">{recipes[0].PrepTime.split(":")[1]} mins</span>
              </div>
              <div>
                <span data-uk-icon="icon: future; ratio: 1.4"></span>
                <h5 class="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                  Total Time
                </h5>
                <span class="uk-text-small">{recipes[0].TotalTime.split(":")[1]} mins</span>
              </div>
              <div>
                <span data-uk-icon="icon: users; ratio: 1.4"></span>
                <h5 class="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                  Yield
                </h5>
                <span class="uk-text-small">Serves {recipes[0].RecipeServings}</span>
              </div>
            </div>
            <hr />
            <div data-uk-grid="">
              <div class="uk-width-auto@s uk-text-small">
                <span class="uk-label">{recipes[0].RecipeCategory}</span>
                <p class="uk-margin-small-top uk-margin-remove-bottom">
                  Created by <a href="#">Alex whatever</a>
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
