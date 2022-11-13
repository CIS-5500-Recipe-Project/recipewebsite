const express = require("express")
const mysql      = require('mysql');
var cors = require('cors')
const port = process.env.PORT || 3000
const routes = require("./routes")

const config = require('./config.json')
const app = express();

//app.listen(port)

// whitelist localhost 3000
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

//main app page
app.get('/', (req, res) => { res.send("Hungry Time") })
//recipe page
app.get('/recipes:choice', routes.recipes)
//pageTwo
app.get('/pageTwo', routes.pageTwo)


app.listen(config.server_port, () => {
    console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;
