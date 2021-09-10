const { postCat } = require('../db/tempDB');

const postAndUpdateRecipes = (cat) => {
    return postCat(cat);
}

module.exports = {
    postAndUpdateRecipes
}