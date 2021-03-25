const Order = require("../models/order");

//rendering all objects inside "Order" on orders/index page
function index(req, res) {
  Order.find({}, function (err, orders) {
    res.render("orders/index", { title: "All Orders", orders });
  });
}
//defining show funciton to specify 1 piece of object and display it's information
function show(req, res) {
  Order.findById(req.params.id, function (err, order) {
    res.render("orders/show", { order, title: "Order Details" });
  });
}
//renders "new order" page
function newOrder(req, res) {
  res.render("orders/new", { title: "Add Order" });
}

//defining "create" function/creating form and redirect route
function create(req, res) {
  req.body.delivered = !!req.body.delivered;
  Order.create(req.body, function (err, order) {
    res.redirect("/orders");
  });
}
function edit(req, res) {
  Order.findById(req.params.id, function (err, order) {
    res.render("orders/edit", { order });
  });
}
function update(req, res) {
  req.body.done = false
  Order.findByIdAndUpdate(req.params.id, req.body, function (err, order) {
    res.render("orders/show", { order });
  });
}
//defining "delete" function. Finds specfic object by ID and deltes the data. Redirects to order page
function deleteOrder(req, res) {
  Order.findByIdAndDelete(req.params.id).exec(function (err, order) {});
  res.redirect("/orders");
}
module.exports = {
  new: newOrder,
  create,
  index,
  delete: deleteOrder,
  show,
  update,
  edit,
};
