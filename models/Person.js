const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("People", PersonSchema);
