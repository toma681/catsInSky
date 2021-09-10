const { postCat, catDB } = require('../db/catDB');

const postAndUpdateRecipes = async (catName) => {
    return await postCat(catName);
}

const retrieveRecipes = async () => {
    let cats = await catDB();

    let recipeFormat = {};

    for (let i = 0; i < cats.length; i++) {
        let curCat = cats[i];
        let name = curCat.name;
        recipeFormat[name] = curCat.veges;
    }
    return recipeFormat;
}

module.exports = {
    retrieveRecipes,
    postAndUpdateRecipes
}