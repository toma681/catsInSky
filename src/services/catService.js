const catDB = require('../db/catDB');

const retrieveRecipes = async () => {
    let cats = await catDB.retrieveRecipes();

    let recipeFormat = {};

    for (let i = 0; i < cats.length; i++) {
        let curCat = cats[i];
        let name = curCat.name;
        recipeFormat[name] = curCat.veges;
    }
    return recipeFormat;
}

const addCat = async (catName) => {
    await catDB.addCatToDB(catName);
}

const removeCat = async (name) => {
    await catDB.removeCatFromDB(name);
}

module.exports = {
    addCat,
    retrieveRecipes,
    removeCat
}