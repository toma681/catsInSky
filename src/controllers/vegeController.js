const { insertVege, hideOrDeleteVege } = require('../services/vegeService');

const createVege = async (req, res) => {
    try {
        let vegeName = req.body.vege;
        let veges = await insertVege(vegeName);
        res.send(veges);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

const deleteVege = async (req, res) => {
    try {
        let vegeName = req.body.vege;
        let veges = await hideOrDeleteVege(vegeName);
        res.send(veges);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    createVege,
    deleteVege
}
