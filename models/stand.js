const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    code: { type: String, required: true },
    visible: { type: Boolean, required: true, default: true }
});

const standSchema = new mongoose.Schema({
    code: { type: String, required: true },
    items: [itemSchema]
});

module.exports = mongoose.model('Stand', standSchema);
