const vegeDB = require('../db/vegeDB');

const addVege = async (vegeName) => {
    await vegeDB.addVegeToDB(vegeName);
}

const removeVege = async (vegeName) => {
    await vegeDB.flagOrRemoveVege(vegeName);
}

module.exports = {
    addVege,
    removeVege
}