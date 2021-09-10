const { postCat } = require('../db/tempDB');

const postAndUpdateRecipes = async (catName) => {
    /*
    1. 

    */
    return await postCat(catName);
}

module.exports = {
    postAndUpdateRecipes
}