const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    index: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
