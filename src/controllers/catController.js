const jwt = require('jsonwebtoken');
const catService = require('../services/catService');

const retrieveRecipes = async (req, res) => {
    try {
        let recipes = await catService.retrieveRecipes();
        
        res.send(recipes);
    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
}

const addCat = async (req, res) => {
    try {
        let catName = req.body.cat;
        await catService.addCat(catName);

        res.send(`Successfully created new Cat: ${catName}!`);
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
    }
}

const removeCat = async (req, res) => {
    try {
        let token = req.query.token;
        jwt.verify(token, process.env.SECRET);

        let catName = req.body.cat;
        catService.removeCat(catName);

        res.send(`Successfully removed Cat: ${catName}`);
    } catch (e) {
        console.log(e.message);
        res.status(401).send(e.message);
    }
}

module.exports = {
    retrieveRecipes,
    addCat,
    removeCat
}