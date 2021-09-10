const express = require("express");

const app = express();
const recipeRoute = require('./routes/recipeRoute');
const catRoute = require('./routes/catRoute')

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(recipeRoute)
app.use(catRoute)

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});