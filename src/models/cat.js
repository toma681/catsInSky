const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: { type: String, required: true },
    veges: [],
    firstChar: { type: String, required: true }
});

module.exports = mongoose.model('Cat', catSchema)