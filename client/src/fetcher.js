import config from "./config.json";

const getFoodSearch = async (keyword, page, pagesize) => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/search/${keyword}?page=${page}&pagesize=${pagesize}`,
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

export { getFoodSearch, getFoodSearchCount };
