const express = require("express");

const app = express();
const recipeRoute = require('./route/recipeRoute');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use('/recipe', recipeRoute)


app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});