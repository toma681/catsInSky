const jwt = require('jsonwebtoken');
const vegeService = require('../services/vegeService');

const post = async (req, res) => {
    try {
        let vegeName = req.body.vege;
        let veges = await vegeService.post(vegeName);
        res.send(veges);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

const remove = async (req, res) => {
    try {
        let token = req.query.token;
        jwt.verify(token, process.env.SECRET);

        let vegeName = req.body.vege;
        let veges = await vegeService.remove(vegeName);
        res.send(veges);
    } catch (e) {
        console.log(e);
        res.status(500).send("You are not authorized");
    }
}

module.exports = {
    post,
    remove
}
