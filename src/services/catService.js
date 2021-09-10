const { postCat } = require('../db/tempDB');

const postAndUpdateRecipes = async (catName) => {
    /*
    1. Post the Cat (make new entry in cats)
    2. Add all new Veges to cat

    */
    return await postCat(catName);
}

module.exports = {
    postAndUpdateRecipes
}