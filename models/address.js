const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  streetAddress: String,
  zipCode: {
    type: Number,
    min: 5,
    max: 5,
  },
  state: String,
  city: String,
  timestamps: true,
});

module.exports = mongoose.model("Address", addressSchema);
