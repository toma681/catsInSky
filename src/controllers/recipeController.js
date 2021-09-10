const { retrieveRecipes } = require('../services/recipeService');

const getAll = async (req, res) => {
    try {
        let recipes = await retrieveRecipes();
        res.send(recipes);
    } catch (error) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    getAll
}