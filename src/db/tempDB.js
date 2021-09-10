const Cat = require('../models/cat');

const catDB = async () => {
    let cats = await Cat.find({}, 'name veges');
    return cats;
}

const postCat = async (name) => {

    let catExists = await Cat.exists({ name });
    if (!catExists) {
        let newCat = new Cat({ name: name, veges: [], firstChar: name[0].toLowerCase() });
        await newCat.save(err => {
            if (err) {
                console.log(err);
            } else {
                console.log("POG");
            }
        })
    }

    return "pogCat";
}

const postVege = () => {
    return "pogVege";
}

const delVege = () => {
    return "pogDelVege";
}

module.exports = {
    catDB,
    postCat,
    postVege,
    delVege
}