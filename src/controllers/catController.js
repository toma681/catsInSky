const jwt = require('jsonwebtoken');
const catService = require('../services/catService');

const retrieve = async (req, res) => {
    try {
        let recipes = await catService.retrieve();
        
        res.send(recipes);
    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
}

const post = async (req, res) => {
    try {
        let catName = req.body.cat;
        await catService.post(catName);

        res.send(`Successfully created new Cat: ${catName}!`);
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
    }
}

const remove = async (req, res) => {
    try {
        let token = req.query.token;
        jwt.verify(token, process.env.SECRET);

        let catName = req.body.cat;
        catService.remove(catName);

        res.send(`Cat ${catName} removed successfully!`);
    } catch (e) {
        console.log(e.message);
        res.status(401).send(e.message);
    }
}

module.exports = {
    retrieve,
    post,
    remove
}