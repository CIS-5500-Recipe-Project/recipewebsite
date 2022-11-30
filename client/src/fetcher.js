import { config } from './config';

const getFoodSearch = async (keyword, page, pagesize, sort, tag) => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/search/${keyword}?page=${page}&pagesize=${pagesize}&sort=${sort}&tag=${tag}`,
    {
      method: "GET",
    }
  );
  return res.json();
};
const getFoodSearchCount = async (keyword, tag) => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/searchcount/${keyword}?tag=${tag}`,
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
