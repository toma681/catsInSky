const jwt = require('jsonwebtoken');
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
        let catName = req.body.cat;
        let cats = await catService.post(catName);
        res.send(cats);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const remove = async (req, res) => {
    try {
        let token = req.query.token;
        jwt.verify(token, process.env.SECRET);

        let catName = req.body.cat;
        let cats = catService.remove(catName);
        res.send(cats);
    } catch (e) {
        console.log(e.message);
        res.status(500).send("You are not authorized");
    }
}

module.exports = {
    retrieve,
    post,
    remove
}
