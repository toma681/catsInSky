const { postVege } = require('../db/tempDB');

const insertVege = async (catName) => {
    return await postVege(catName);
}

module.exports = {
    insertVege,
}