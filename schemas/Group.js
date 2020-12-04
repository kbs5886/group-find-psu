const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Group = Schema({
    name: { type: String, required: true },
    // owner: {type: Schema.ObjectId, ref: 'User', required: true},
    tags: {type: String, required: true},
    category: {type: String, required: true},
    requirements: {type: String, required: true},
    contact: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model("group", Group);