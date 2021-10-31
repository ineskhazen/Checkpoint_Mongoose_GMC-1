const mongoose = require("mongoose");
const { Schema } = mongoose;
// model (the contact schema ==structure)
const ContactSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: [String],
});


module.exports = Contact = mongoose.model("contact", ContactSchema);
