const catDB = require('../db/catDB');

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

const post = async (catName) => {
    await catDB.post(catName);
}

const remove = async (name) => {
    await catDB.remove(name);
}

module.exports = {
    post,
    retrieve,
    remove
}