const { returnVeges, returnCats } = require('../db/tempDB')

const getAll = (req, res) => {
    let cats = returnCats();
    let veges = returnVeges();

    res.send(cats + veges);
}

module.exports = {
    getAll
}