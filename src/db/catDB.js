const Cat = require('../models/cat');
const Vege = require('../models/vege');

const catDB = async () => {
    let cats = await Cat.find({}, 'name veges');
    return cats;
}

const postCat = async (name) => {

    let catExists = await Cat.exists({ name });
    if (!catExists) {
        let newCat = new Cat({ name, veges: [], firstChar: name[0].toLowerCase() });
        await newCat.save(err => {
            if (err) {
                console.log(err);
            } else {
                console.log("POG");
            }
        })
    } else {
        return null;
    }

    return "pogCat";
}

module.exports = {
    catDB,
    postCat
}