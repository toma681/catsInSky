const { postAndUpdateRecipes } = require('../services/catService');

const postCat = (req, res) => {
    try {
        let catPayload = req.body;
        let cats = postAndUpdateRecipes(catPayload);
        res.send(cats);
    } catch (error) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    postCat
}