const jwt = require('jsonwebtoken');
const vegeService = require('../services/vegeService');

const post = async (req, res) => {
    try {
        let vegeName = req.body.vege;
        await vegeService.post(vegeName);
        
        res.send(`Successfully created new Vege: ${vegeName}!`);
    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
}

const remove = async (req, res) => {
    try {
        let token = req.query.token;
        jwt.verify(token, process.env.SECRET);

        let vegeName = req.body.vege;
        await vegeService.remove(vegeName);

        res.send(`Successfully removed Vege: ${vegeName}!`);
    } catch (e) {
        console.log(e);
        res.status(401).send(e.message);
    }
}

module.exports = {
    post,
    remove
}
