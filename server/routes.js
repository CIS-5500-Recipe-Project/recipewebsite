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
    var choice = req.params.choice;

    //General for all others
    var query = `SELECT recipes.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished, recipes.Images,AVG(reviews.Rating) as AvgRating, COUNT(reviews.RecipeId) as Comment, recipes.DatePublished as Date
  from recipes
  LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
  WHERE Keywords LIKE '%${choice}%' or Description LIKE '%${choice}%' or recipes.Name LIKE '%${choice}%'
  GROUP BY reviews.RecipeId, recipes.Name, recipes.DatePublished
  ORDER BY AvgRating DESC, Comment Desc, recipes.DatePublished DESC
  LIMIT 30;`;

    //Breakfast & Brunch
    var breakfast_brunch_query = `SELECT recipes.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished, recipes.Images,AVG(reviews.Rating) as AvgRating, COUNT(reviews.RecipeId) as Comment, recipes.DatePublished as Date
  from recipes
  LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
  WHERE Keywords LIKE '%${choice}%' or Keywords LIKE '%Brunch%'
  GROUP BY reviews.RecipeId, recipes.Name, recipes.DatePublished
  ORDER BY AvgRating DESC, Comment Desc, recipes.DatePublished DESC
  LIMIT 30;`;

    //Appetizers & Snack
    var appetizer_snack_query = `SELECT recipes.RecipeId, recipes.Name,recipes.AuthorName, recipes.DatePublished, recipes.Images,AVG(reviews.Rating) as AvgRating, COUNT(reviews.RecipeId) as Comment, recipes.DatePublished as Date
    from recipes
    LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
    WHERE Keywords LIKE '%${choice}%' or Keywords LIKE '%snack%'
    GROUP BY reviews.RecipeId, recipes.Name, recipes.DatePublished
    ORDER BY AvgRating DESC, Comment Desc, recipes.DatePublished DESC
    LIMIT 30;`;

    //Grilling & BBQ
    var grilling_bbq_query = `SELECT recipes.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished, recipes.Images,AVG(reviews.Rating) as AvgRating, COUNT(reviews.RecipeId) as Comment, recipes.DatePublished as Date
  from recipes
  LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
  WHERE Keywords LIKE '%${choice}%' or Keywords LIKE '%bbq%'
  GROUP BY reviews.RecipeId, recipes.Name, recipes.DatePublished
  HAVING AVG(reviews.Rating) > 4.5
  ORDER BY AvgRating DESC, Comment Desc, recipes.DatePublished DESC
  LIMIT 30;`;

    //query keto diets
    var keto_query = `WITH DietTable AS (
   SELECT RecipeId,  (FatContent+SaturatedFatContent)/(FatContent+SaturatedFatContent+CarbohydrateContent+ProteinContent) AS FatRatio,       ProteinContent/(FatContent+SaturatedFatContent+CarbohydrateContent+ProteinContent) AS ProteinRatio,       CarbohydrateContent/(FatContent+SaturatedFatContent+CarbohydrateContent+ProteinContent) AS CarbohydrateRatio
   FROM recipes
   )
  SELECT recipes.RecipeId, recipes.Name, recipes.AuthorName, recipes.ReviewCount, recipes.Images,AVG(reviews.Rating) as AvgRating, COUNT(reviews.RecipeId) as Comment, recipes.DatePublished as Date
  FROM recipes JOIN DietTable ON recipes.RecipeId = DietTable.RecipeId
  LEFT JOIN reviews ON reviews.RecipeId = recipes.RecipeId
  WHERE (FatRatio BETWEEN 0.6 AND 0.7) AND (ProteinRatio BETWEEN 0.2 AND 0.35) AND (CarbohydrateRatio BETWEEN 0.05 AND 0.1)
  ORDER BY AvgRating DESC, Comment Desc, recipes.DatePublished DESC
  LIMIT 30;`;

    //query quick and easy meal to make
    var quick_and_easy_query = `SELECT recipes.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished, recipes.Images,AVG(reviews.Rating) as AvgRating, COUNT(reviews.RecipeId) as Comment, recipes.DatePublished as Date
  from recipes
  LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
  WHERE recipes.NumOfSteps <=5 
  GROUP BY reviews.RecipeId, recipes.Name, recipes.DatePublished
  ORDER BY AvgRating DESC, Comment Desc, recipes.DatePublished DESC
  LIMIT 30;`;

    // var queryAll = `SELECT *
    // FROM recipes LIMIT 50`;

    if (choice === "Breakfast & Brunch") {
        connection.query(breakfast_brunch_query, function (err, results, fields) {
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results);
            }
        });
    } else if (choice === "Appetizers & Snack") {
        connection.query(appetizer_snack_query, function (err, results, fields) {
            if (err) console.log(err);
            else {
                console.log(results);
                res.json(results);
            }
        });
    } else if (choice === "Grilling & BBQ") {
        connection.query(grilling_bbq_query, function (err, results, fields) {
            if (err) console.log(err);
            else {
                res.json(results);
            }
        });
    } else if (choice === "Keto") {
        connection.query(keto_query, function (err, results, fields) {
            if (err) console.log(err);
            else {
                console.log("keto result:" + results);
                res.json(results);
            }
        });
    } else if (choice === "Quick & Easy") {
        connection.query(quick_and_easy_query, function (err, results, fields) {
            if (err) console.log(err);
            else {
                res.json(results);
            }
        });
    } else {
        connection.query(query, function (err, results, fields) {
            if (err) console.log(err);
            else {
                res.json(results);
            }
        });
    }
}

// Route 2
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

    // console.log(tagQuery)
    // console.log(defaultSort)
    const keyword = req.params.keyword ? req.params.keyword : "";
    const query = `SELECT reviews.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished,
    recipes.Images,
    AVG(reviews.Rating) as AvgRating,
    COUNT(reviews.RecipeId) as Comment,
    recipes.DatePublished as Date
    from recipes
    LEFT JOIN reviews on recipes.RecipeId = reviews.RecipeId
    AND DATE(recipes.DatePublished) > '2010-01-01'
    WHERE recipes.Name LIKE '%${keyword}%'
    ${tagQuery}
    GROUP BY reviews.RecipeId, recipes.Name, recipes.AuthorName, recipes.DatePublished
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
    var str = "snack";

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

//Top 50 

module.exports = {
    recipe,
    recipes,
    pageTwo,
    search,
    searchCount,
    recommendation,
    reviews,
    homePage_RecentlyPopular,
    homePage_TodaySelected,
};
