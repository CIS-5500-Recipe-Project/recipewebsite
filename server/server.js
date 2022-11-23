const express = require("express");
const mysql = require("mysql");
var cors = require("cors");
const port = process.env.PORT || 3000;
const routes = require("./routes");

const config = require("./config.json");
const app = express();

// whitelist localhost 3000
app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

//main app page
app.get("/", (req, res) => {
    res.send("Hungry Time");
});
//recipe page
// app.get('/recipes', routes.recipes)
app.get("/recipes", routes.recipes);
app.get("/recipe/:recipeId", routes.recipe);
app.get("/recipes/:choice", routes.recipes);
//pageTwo
app.get("/pageTwo", routes.pageTwo);

//Search Page
app.get("/search/:keyword", routes.search);
app.get("/searchcount/:keyword", routes.searchCount);

app.listen(config.server_port, () => {
    console.log(
        `Server running at http://${config.server_host}:${config.server_port}/`
    );
});

module.exports = app;
