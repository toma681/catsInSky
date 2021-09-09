const { recipeDB } = require('../db/tempDB');

const retrieveRecipes = () => {
    return recipeDB();
}

module.exports = {
    retrieveRecipes
}