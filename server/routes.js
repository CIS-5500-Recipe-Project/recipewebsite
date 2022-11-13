const config = require('./config.json')
const mysql = require('mysql');
const e = require('express');

// // TODO: fill in your connection details here
const connection = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    port: config.rds_port,
    database: config.rds_db
});
connection.connect();


// ********************************************
//            Example Route
// ********************************************

// Route 1 Individual Recipe
// TODO: fill in query to grab info regarding specific recipe 
async function recipes(req, res) {

    var inputDescription = req.query.attribute ? req.query.attribute : ""
    var queryDescription = `SELECT RecipeId, Name, AggregatedRating, ReviewCount, DatePublished
    FROM recipes
    WHERE Description LIKE '%${inputDescription}%'
    ORDER BY ReviewCount DESC, AggregatedRating DESC, DatePublished DESC
    LIMIT 50`

    var queryKeyword = `SELECT RecipeId, Name, AggregatedRating, ReviewCount, DatePublished
    FROM recipes
    WHERE Keywords LIKE '%${inputDescription}%'
    ORDER BY ReviewCount DESC, AggregatedRating DESC, DatePublished DESC
    LIMIT 50`


    // http://localhost:8080/recipes/description?decription=summer
    // http://localhost:8080/recipes/description?decription=vegan
    if (req.params.choice === 'description') {

        connection.query(queryDescription, function(err, results, fields) {
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results)
            }
        })
    } else if (req.params.choice === 'keyword') { // http://localhost:8080/recipes/keyword?keyword=kid

        connection.query(queryKeyword, function(err, results, fields) {
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results)
            }
        })

    }


    

    
}

// Route 2 
// TODO: 
async function pageTwo(req, res) {
    // a GET request to /recipes
    res.send(`this is page 2`)
}

module.exports = { recipes, pageTwo }