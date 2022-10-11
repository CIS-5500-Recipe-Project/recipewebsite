const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const routes = require("./routes")

app.listen(port)

//main app page
app.get('/', (req, res) => { res.send("Hungry Time") })
//recipe page
app.get('/recipes', routes.recipes)
//pageTwo
app.get('/pageTwo', routes.pageTwo)

