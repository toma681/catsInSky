require('dotenv').config();
require('./utils/dbConnect');

const express = require("express");

const catRoute = require('./routes/catRoute');
const vegeRoute = require('./routes/vegeRoute');
const authenticationRoute = require('./routes/authenticationRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(catRoute);
app.use(vegeRoute);
app.use(authenticationRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});