const { retrieveRecipes } = require('../services/recipeService');

const getAll = (req, res) => {
    try {
        let recipes = retrieveRecipes();
        res.send(recipes);
    } catch (error) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    getAll
}