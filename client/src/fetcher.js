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

const getReviewsById = async (recipeId)=>{
  var res = await fetch(`http://${config.server_host}:${config.server_port}/reviews/${recipeId}`, {
    method: 'GET',
})
return res.json()
}

const homePage_RecentlyPopular = async() =>{
  var res = await fetch(`http://${config.server_host}:${config.server_port}/homePage_RecentlyPopular`,{
    method: 'GET',
  })
  return res.json()
}

const homePage_TodaySelected = async() =>{
  var res = await fetch(`http://${config.server_host}:${config.server_port}/homePage_TodaySelected`,{
    method: 'GET',
  })
  return res.json()
}

export { getFoodSearch, getFoodSearchCount, getRecipeById, getReviewsById, homePage_RecentlyPopular, homePage_TodaySelected};
