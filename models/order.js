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
});

// // Here's our latest function for this module
// function getOne(id) {
//   return todos[id];
// }

// function create(todo) {
//   todos.push(todo);
// }

// function deleteOne(id) {
//   todos.splice(id, 1);
// }

// function updateOne(id, updatedTodo) {
//   todos.splice(id, 1, updatedTodo);
// }

//Compile schema into a model and export it
(module.exports = mongoose.model("Orders", orderSchema)),
  {
    // getOne,
    // create,
    // deleteOne,
    // updateOne,
  };
