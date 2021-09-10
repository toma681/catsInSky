const express = require("express");
const router = express.Router();
const { getAll } = require('../controllers/recipeController');

router.get('/recipe', getAll);

module.exports = router;