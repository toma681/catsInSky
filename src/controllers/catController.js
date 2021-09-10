const { retrieveRecipes } = require('../services/recipeService');
const express = require("express");
const postCat = (req, res) => {
    try {
        let catPayload = req.body;
        let recipes = retrieveRecipes();
        res.send(recipes);
    } catch (error) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    postCat
}