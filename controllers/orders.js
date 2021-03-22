const Package = require('../models/order');


function newOrder(req, res) {
 res.render('orders/new');
}

function create(req, res) { 
    const order = newOrder(req.body);
   
    order.save(function(err) {
      // for now, redirect right back to new.ejs
      res.redirect('/orders/new');
    });
  }




module.exports = {
    new: newOrder,
    create,
};
