const Cat = require('../models/cat');
const Vege = require('../models/vege');

const retrieve = async () => {
    let cats = await Cat.find({}, 'name veges');
    return cats;
}

const post = async (name) => {
    let catExists = await Cat.exists({ name });
    if (!catExists) {
        let newCat = new Cat({ name, veges: [], firstChar: name[0].toLowerCase() });

        let vegeList = await Vege.find({ firstChar: newCat.firstChar, deleted: false })

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

const remove = async (name) => {
    let foundCat = await Cat.findOne({name});

    if (foundCat) {
        let vegeList = foundCat.veges;
        for (let i = 0; i < vegeList.length; i++) {
            let curVege = await Vege.findOne({name: vegeList[i]});
            
            let catIndex = curVege.cats.indexOf(name);
            curVege.cats.splice(catIndex);
            curVege.save();
        }

        foundCat.delete();
    }
}

module.exports = {
    retrieve,
    post,
    remove
}