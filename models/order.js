const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

//Schema defining individual order properties 
const orderSchema = new Schema({
    trackingNum : String,

//Unsure if drop-down considered data-type
    // address : String,
    carrier : String,

    vendor: String,
    itemDescription : String,
});

//Compile schema into a model and export it 
module.exports = mongoose.model('Orders', orderSchema);