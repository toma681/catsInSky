const env = require('dotenv').config();
const express = require("express");
const dbConnection = require('./utils/dbConnect');

const app = express();
const catRoute = require('./routes/catRoute')
const vegeRoute = require('./routes/vegeRoute')

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(catRoute)
app.use(vegeRoute)

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});