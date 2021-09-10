// Fake DB For Now, Later implement Mongo and Mongoose

const recipeDB = () => {
    return {
        "Alex": ["Artichoke", "Asparagus"],
        "Abhi": ["Artichoke", "Asparagus"],
        "Samarth": ["Squash"],
      }
}

const postCat = () => {
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