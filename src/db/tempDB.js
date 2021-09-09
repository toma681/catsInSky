// Fake DB For Now, Later implement Mongo and Mongoose

const returnCats = () => {
    cats = ["Michael", "Christopher", "Jessica", "Matthew", "Ashley", "Jennifer", "Joshua", "Amanda", "Daniel", "David", "James", "Robert", "John", "Joseph", "Andrew", "Ryan", "Brandon", "Jason", "Justin", "Sarah", "William", "Jonathan", "Stephanie", "Brian", "Nicole", "Nicholas", "Anthony", "Heather", "Eric", "Elizabeth", "Adam", "Megan", "Melissa", "Kevin", "Steven", "Thomas", "Timothy", "Christina", "Kyle", "Rachel", "Laura", "Lauren", "Amber", "Brittany", "Danielle", "Richard", "Kimberly", "Jeffrey", "Amy", "Crystal", "Michelle"]
    return cats;
}

const returnVeges = () => {
    veges = ["Amaranth","Arugula","Broccoli","Cabbage","Celtuce","Corn","Fiddlehead","Grape Leaves","Kale","Lettuce","Mallow","Melokhia","Mustard","Pea","Radicchio","Rapini","Samphire","Spinach","Turnip","Watercress"]
    return veges;
}

module.exports = {
    returnCats,
    returnVeges
}