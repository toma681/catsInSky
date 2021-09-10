const { postAndUpdateRecipes } = require('../services/catService');

const getCats = async (req, res) => {

}

const postCat = async (req, res) => {
    try {
        let catName = req.body?.cat;
        let cats = await postAndUpdateRecipes(catName);
        res.send(cats);
    } catch (error) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    postCat
}