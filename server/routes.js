// const config = require('./config.json')
// const mysql = require('mysql');
// const e = require('express');

// // TODO: fill in your connection details here
// const connection = mysql.createConnection({
//     host: config.rds_host,
//     user: config.rds_user,
//     password: config.rds_password,
//     port: config.rds_port,
//     database: config.rds_db
// });
// connection.connect();


// ********************************************
//            Example Route
// ********************************************

// Route 1 Individual Recipe
// TODO: fill in query to grab info regarding specific recipe 
async function recipes(req, res) {
    // a GET request to /recipes
    res.send(`this is recipe page`)
}

// Route 2 
// TODO: 
async function pageTwo(req, res) {
    // a GET request to /recipes
    res.send(`this is page 2`)
}

module.exports = { recipes, pageTwo }