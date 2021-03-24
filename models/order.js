const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema defining individual order properties
const orderSchema = new Schema({
  trackingNum: {
    type: String,
    required: true,
  },
  // address : String,
  carrier: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  dateOrdered: {
    type: Date,
    required: true
  }
});

//Compile schema into a model and export it
(module.exports = mongoose.model("Orders", orderSchema)), {};
