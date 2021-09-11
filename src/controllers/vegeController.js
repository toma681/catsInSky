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
        let vegeName = req.body.vege;
        let veges = await vegeService.remove(vegeName);
        res.send(veges);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    post,
    remove
}
