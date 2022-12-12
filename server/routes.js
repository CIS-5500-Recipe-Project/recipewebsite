const config = require("./config.json");
const mysql = require("mysql");
const e = require("express");

// // TODO: fill in your connection details here
const connection = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    port: config.rds_port,
    database: config.rds_db,
});
connection.connect();

// ********************************************
//            Example Route
// ********************************************

// Route 1 All Recipes - Query to grab info of all recipes
// query:
async function recipes(req, res) {
    var inputDescription = req.query.attribute ? req.query.attribute : "";
    var queryDescription = `SELECT RecipeId, Name, AggregatedRating, ReviewCount, DatePublished
    FROM recipes
    WHERE Description LIKE '%${inputDescription}%'
    ORDER BY ReviewCount DESC, AggregatedRating DESC, DatePublished DESC
    LIMIT 50`;

    var queryKeyword = `SELECT RecipeId, Name, AggregatedRating, ReviewCount, DatePublished
    FROM recipes
    WHERE Keywords LIKE '%${inputDescription}%'
    ORDER BY ReviewCount DESC, AggregatedRating DESC, DatePublished DESC
    LIMIT 50`;

    var queryAll = `SELECT *
    FROM recipes LIMIT 50`;

    // http://localhost:8080/recipes/description?decription=summer
    // http://localhost:8080/recipes/description?decription=vegan
    if (req.params.choice === "description") {
        connection.query(queryDescription, function (err, results, fields) {
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results);
            }
        });
    } else if (req.params.choice === "keyword") {
        // http://localhost:8080/recipes/keyword?keyword=kid

        connection.query(queryKeyword, function (err, results, fields) {
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results);
            }
        });
    } else {
        connection.query(queryAll, function (err, results, fields) {
            if (err) console.log(err);
            else {
                res.json(results);
            }
        });
    }
}

// async function search_images(req, res) {
//     //TODO: match to images of specific recipe id
//     const recipeId = req.params.RecipeId ? req.params.RecipeId : -1
//     connection.query(`SELECT Images
//         FROM recipes
//         WHERE RecipeId = '${recipeId}'`, function (error, results, fields) {
//         if (error) {
//             console.log(error)
//             res.json({ error: error })
//         } else if (results) {
//             res.json({ results: results })
//         }
//     })
// }

// Route 2
// TODO:
async function pageTwo(req, res) {
    // a GET request to /recipes
    res.send(`this is page 2`);
}

async function recipe(req, res) {
    var x = parseInt(req.params.recipeId);
    console.log(typeof x);
    var queryRecipeWithId = `SELECT *
    FROM recipes 
    WHERE RecipeId = ${x}`;

    if (x) {
        // http://localhost:8080/recipe/38
        connection.query(queryRecipeWithId, function (err, results, fields) {
            console.log(typeof req.params.recipeId);
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results);
            }
        });
    }
}

async function reviews(req, res) {

    var x = parseInt(req.params.recipeId);
    console.log(typeof x);
    var query = `SELECT *
    FROM reviews
    WHERE RecipeId = ${x}`;

    if (x) {
        connection.query(query, function (err, results, fields) {
            console.log(typeof req.params.recipeId);
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results);
            }
        });
    }
}

// Route 3 - Search
async function search(req, res) {
    const pagesize = req.query.pagesize ? req.query.pagesize : 10;
    const page = req.query.page ? req.query.page : 1;
    const sort = req.query.sort ? req.query.sort : 1;
    const tagQuery = req.query.tag
        ? `AND recipes.Keywords LIKE '%${req.query.tag}%'`
        : "";
    // 1=date
    // 2=rating
    // 3=comment
    //   console.log(req.query);
    var defaultSort = "recipes.DatePublished DESC";
    if (sort == 2) {
        defaultSort = "AvgRating DESC";
    } else if (sort == 3) {
        defaultSort = "Comment DESC";
    }
    // console.log(defaultSort)
    const keyword = req.params.keyword ? req.params.keyword : "";
    const query = `SELECT recipes.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished,
    recipes.Images,
    AVG(reviews.Rating) as AvgRating,
    COUNT(reviews.RecipeId) as Comment,
    recipes.DatePublished as Date
    from recipes
    LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
    WHERE (recipes.Name LIKE '%${keyword}%' or recipes.keywords LIKE '%${keyword}%') AND DATE(recipes.DatePublished) > '2010-01-01'
    GROUP BY recipes.RecipeId, recipes.Name, recipes.DatePublished
    ORDER BY ${defaultSort}
    LIMIT ${pagesize} OFFSET ${(page - 1) * pagesize};`;

    // http://localhost:8080/search/egg
    connection.query(query, function (err, results, fields) {
        if (err) console.log(err);
        else {
            console.log;
            res.json(results);
        }
    });
}

//Route 4 - Search Count
async function searchCount(req, res) {
    //   console.log(req.query);
    const keyword = req.params.keyword ? req.params.keyword : "";

    var query = `SELECT COUNT(*) as Total
    from recipes
    WHERE (recipes.Name LIKE '%${keyword}%' or recipes.keywords LIKE '%${keyword}%') AND DATE(recipes.DatePublished) > '2010-01-01'`;

    // http://localhost:8080/searchcount/egg
    connection.query(query, function (err, results, fields) {
        if (err) console.log(err);
        else {
            console.log;
            res.json(results);
        }
    });
}

// route 5 - complex query: suggest a recipe
// for example, people who liked recipeId 54 also liked some other recipes
// suggest the top 5 recipes

async function recommendation(req, res) {
    var x = parseInt(req.params.recipeId);

    var complexQuery = `WITH review_authors AS (
    select AuthorId
    FROM reviews 
    where RecipeId = ${x}
    ),
    other_recipes AS (
        select RecipeId 
        FROM reviews 
        WHERE AuthorId in (select * from review_authors)
    ),
    recipe_category AS (
        SELECT RecipeCategory AS category
        FROM recipes
        where RecipeID = ${x}
    ),
    recipe_ingredient AS (
        SELECT RecipeIngredientParts
        FROM recipes
        WHERE RecipeID = ${x})
    select * 
    from recipes 
    where ((RecipeId in (select * from other_recipes) and RecipeId <> ${x})) or (RecipeCategory = (select * from recipe_category) OR (RecipeIngredientParts && (select * from recipe_ingredient)))
    order by ReviewCount desc 
    limit 8;`;

    if (x) {
        // http://localhost:8080/recommendation/54
        connection.query(complexQuery, function (err, results, fields) {
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results);
            }
        });
    }
}

async function homePage_RecentlyPopular(req, res) {
    //return the recipes posted on the same month
    const date = new Date();
    const currentMonth = date.getMonth() + 1;

    var Query = `SELECT recipes.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished,
  recipes.Images,
  AVG(reviews.Rating) as AvgRating,
  COUNT(reviews.RecipeId) as Comment,
  recipes.DatePublished as Date
  from recipes
  LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
  WHERE MONTH(recipes.DatePublished) = ${currentMonth} AND DATE(recipes.DatePublished) > '2010-01-01'
  GROUP BY recipes.RecipeId, recipes.Name, recipes.DatePublished
  ORDER BY AvgRating DESC, Comment DESC
  LIMIT 12;`;

    connection.query(Query, function (err, results, fields) {
        if (err) console.log(err);
        else {
            console.log(results);
            res.json(results);
        }
    });
}

async function homePage_TodaySelected(req, res) {
    //return the recipes based on the current time
    const date = new Date();
    const currentHour = date.getHours();
    var keywords = "snack";

    if (currentHour >= 6 && currentHour < 10) {
        keywords = "breakfast";
    } else if (currentHour >= 10 && currentHour < 12) {
        keywords = "brunch";
    } else if (currentHour >= 12 && currentHour < 14) {
        keywords = "lunch";
    } else if (currentHour >= 14 && currentHour < 17) {
        keywords = "snack";
    } else if (currentHour >= 17 && currentHour < 21) {
        keywords = "dinner";
    } else {
        keywords = "night";
    }

    // route 6 - 2 reviews for each specific recipe




    var Query = `SELECT recipes.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished,
    recipes.Images,
    AVG(reviews.Rating) as AvgRating,
    COUNT(reviews.RecipeId) as Comment,
    recipes.DatePublished as Date
    from recipes
    LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
    WHERE (recipes.RecipeCategory like '%${keywords}%'
       or recipes.Keywords like '%${keywords}%')
       AND DATE(recipes.DatePublished) > '2010-01-01'
    GROUP BY recipes.RecipeId, recipes.Name, recipes.DatePublished
    ORDER BY AvgRating DESC, Comment DESC
    limit 12;`;


    connection.query(Query, function (err, results, fields) {
        if (err) console.log(err);
        else {
            console.log(results);
            res.json(results);
        }
    });
}

module.exports = {
    recipe,
    recipes,
    pageTwo,
    search,
    searchCount,
    recommendation,
    reviews,
    homePage_RecentlyPopular,
    homePage_TodaySelected
};
