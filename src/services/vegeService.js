const { postVege } = require('../db/vegeDB');

const insertVege = async (catName) => {
    return await postVege(catName);
}

module.exports = {
    insertVege,
}