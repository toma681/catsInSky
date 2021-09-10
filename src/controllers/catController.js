const { postAndUpdateRecipes, retrieveRecipes } = require('../services/catService');

const getCats = async (req, res) => {
    try {
        let recipes = await retrieveRecipes();
        res.send(recipes);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

const postCat = async (req, res) => {
    try {
        let catName = req.body?.cat;
        let cats = await postAndUpdateRecipes(catName);
        res.send(cats);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    getCats,
    postCat
}