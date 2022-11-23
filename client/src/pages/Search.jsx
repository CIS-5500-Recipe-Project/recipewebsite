import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import React, { useState, useEffect } from "react";

import Pagination from "@mui/material/Pagination";

import { getFoodSearch, getFoodSearchCount } from "../fetcher";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import ItemGrid from "./Search/ItemGrid";

export default function Search() {
  const [food, setFood] = useState(["egg"]);

  const [resultCount, setResultCount] = useState([12]);
  const [result, setResult] = useState(
    Array(12).fill({
      Name: "Place Holder",
      Images: '["static/picture/300x160.jpg"]',
      AvgRating: 5,
      Comment: 39,
      Author: "Test",
    })
  );

  // useEffect(() => {
  //   getFoodSearchCount(food).then((res) => {
  //     setResultCount(res[0].Total);
  //   });

  //   getFoodSearch(food, 1, 12).then((res) => {
  //     // console.log(res);
  //     setResult(res);
  //   });
  // }, []);

  const handleSearch = (event, value) => {
    console.log("Running Search");
    getFoodSearchCount(food).then((res) => {
      setResultCount(res[0].Total);
    });
    getFoodSearch(food, 1, 12).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  const handlePagination = (event, value) => {
    getFoodSearch(food, value, 12).then((res) => {
      // console.log(res);
      setResult(res);
    });
  };

  const handleClick = (key) => { 
    console.log("Clicked: " + key);
  }

  return (
    <div>
      <Topbar />
      <div class="uk-section uk-section-default uk-padding-remove-top">
        <div class="uk-container">
          <div data-uk-grid="">
            <div class="uk-width-1-2@m">
              <form>
                <TextField
                  id="search-bar"
                  className="text"
                  onInput={(event, value) => {
                    setFood(event.target.value);
                    // console.log(event.target.value);
                  }}
                  label="Enter a food name"
                  variant="outlined"
                  placeholder="Search..."
                  size="small"
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon onClick={handleSearch} />
                </IconButton>
              </form>
            </div>
            <div class="uk-width-1-2@m uk-text-right@m">
              <select class="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-muted">
                <option>Sort by: Latest</option>
                <option>Sort by: Top Rated</option>
                <option>Sort by: Trending</option>
              </select>
            </div>
          </div>
          <div>
            <h3 class="uk-text-500 uk-margin-small-bottom uk-margin-top">
              {resultCount} results
            </h3>
          </div>
          <div
            class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top"
            data-uk-grid=""
          >
            {result.map((ele, index) => {
              return (
                <ItemGrid
                  key={index}
                  onClick={()=>handleClick(index)}
                  name={ele.Name}
                  image={ele.Images}
                  rating={ele.AvgRating}
                  comment={ele.Comment}
                  author="Test"
                />
              );
            })}
          </div>
          <div class="uk-margin-large-top uk-text-small">
            <Pagination
              count={resultCount / 12}
              onChange={handlePagination}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
