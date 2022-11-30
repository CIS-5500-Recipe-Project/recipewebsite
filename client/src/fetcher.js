import { config } from './config';

const getFoodSearch = async (keyword, page, pagesize, sort) => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/search/${keyword}?page=${page}&pagesize=${pagesize}&sort=${sort}`,
    {
      method: "GET",
    }
  );
  return res.json();
};
const getFoodSearchCount = async (keyword) => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/searchcount/${keyword}`,
    {
      method: "GET",
    }
  );
  return res.json();
};

const getRecipeById = async (recipeId) => {
  var res = await fetch(`http://${config.server_host}:${config.server_port}/recipe/${recipeId}`, {
      method: 'GET',
  })
  return res.json()
}

export { getFoodSearch, getFoodSearchCount, getRecipeById};
