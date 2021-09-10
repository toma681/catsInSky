const catDB = require('../db/catDB');

const post = async (catName) => {
    return await catDB.post(catName);
}

const retrieve = async () => {
    let cats = await catDB.retrieve();

    let recipeFormat = {};

    for (let i = 0; i < cats.length; i++) {
        let curCat = cats[i];
        let name = curCat.name;
        recipeFormat[name] = curCat.veges;
    }
    return recipeFormat;
}

const remove = (name) => {
    catDB.remove(name);
}

module.exports = {
    post,
    retrieve,
    remove
}