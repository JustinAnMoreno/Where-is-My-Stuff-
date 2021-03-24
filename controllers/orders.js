const Order = require("../models/order");

//renders "new" page
function newOrder(req, res) {
  res.render("orders/new");
}

//defining "create" function/creating form and redirect route
function create(req, res) {
  req.body.delivered = !!req.body.delivered;
  Order.create(req.body, function (err, order) {
    res.redirect("/orders");
  });
}

//rendering all objects inside "Order" on orders/index page
function index(req, res) {
  Order.find({}, function (err, orders) {
    res.render("orders/index", { orders });
  });
}

//defining "delete" function. Finds specfic object by ID and deltes the data. Redirects to order page
function deleteOrder(req, res) {
  Order.findByIdAndDelete(req.params.id).exec(function (err, order) {});
  res.redirect("/orders");
}

//defining show funciton to specify 1 piece of object and display it's information 
function show(req, res) {
  Order.findById(req.params.id, function(err, order){
    res.render("orders/show", { order })
}
  )};

function update(req, res) {
  Order
}

module.exports = {
  new: newOrder,
  create,
  index,
  delete: deleteOrder,
  show,
};
