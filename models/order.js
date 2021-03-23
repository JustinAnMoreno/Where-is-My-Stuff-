const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema defining individual order properties 
const orderSchema = new Schema ({
     orderSchema.pre('save', function (next) { 
        // capitalize
        this.carrier.charAt(0).toUpperCase() + this.carrier.slice(1);
        next();
      }),
    trackingNum : String,
    // address : String,
    carrier : String,
    vendor: String,
    itemDescription : String,
});

// orderSchema.pre('save', function (next) {
//     // capitalize
//     this.carrier.charAt(0).toUpperCase() + this.carrier.slice(1);
//     next();
//   });

//Compile schema into a model and export it 
module.exports = mongoose.model('Orders', orderSchema);