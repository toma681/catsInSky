const catService = require('../services/catService');

const retrieve = async (req, res) => {
    try {
        let recipes = await catService.retrieve();
        res.send(recipes);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

const post = async (req, res) => {
    try {
        let catName = req.body?.cat;
        let cats = await catService.post(catName);
        res.send(cats);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

const remove = async (req, res) => {
    try {
        let catName = req.body.cat;
        let cats = await catService.remove(catName);
        res.send(cats);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    retrieve,
    post,
    remove
}
