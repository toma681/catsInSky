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

        let vegeList = await Vege.find({ firstChar: newCat.firstChar })

        for (let i = 0; i < vegeList.length; i++) {
            let curVege = vegeList[i];

            newCat.veges.push(curVege.name);
            curVege.cats.push(newCat.name);
            curVege.save();
        }

        newCat.save();
    } 

    return "pogCat";
}

module.exports = {
    catDB,
    postCat
}