const { postCat, catDB } = require('../db/tempDB');

const postAndUpdateRecipes = async (catName) => {
    /*
    1. Post the Cat (make new entry in cats)
    2. Add all new Veges to cat

    */
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