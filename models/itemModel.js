const mongoose = require("mongoose");

const Item = mongoose.Schema({
  name: { type: String, required: true, maxLength: 50 },
  description: { type: String, required: true, maxLength: 200 },
  price: { type: Number, required: true, positive: true },
});

module.exports = mongoose.model("Item", Item);
