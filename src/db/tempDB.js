const Cat = require('../models/cat');

const recipeDB = async () => {
    return {
        "Alex": ["Artichoke", "Asparagus"],
        "Abhi": ["Artichoke", "Asparagus"],
        "Samarth": ["Squash"],
    }
}

const postCat = async (name) => {

    let catExists = await Cat.exists({ name });
    if (!catExists) {
        let newCat = new Cat({ name: name, veges: [] });
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
    recipeDB,
    postCat,
    postVege,
    delVege
}