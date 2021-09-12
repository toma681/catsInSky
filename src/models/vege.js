const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegeSchema = new Schema({
    name: { type: String, required: true },
    cats: [],
    firstChar: { type: String, required: true },
    deleted: { type: Boolean, required: true },
});

module.exports = mongoose.model('Vege', vegeSchema)