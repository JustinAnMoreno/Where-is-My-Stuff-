const Order = require("../models/order");

function newOrder(req, res) {
  res.render("orders/new");
}

function create(req, res) {
  Order.create(req.body, function (err, order) {
    console.log(order);
    res.redirect("/orders");
  });
}

function index(req, res) {
  Order.find({}, function (err, orders) {
    console.log(orders);
    res.render("orders/index", { orders });
  });
}

function deleteOrder(req, res) {
  Order.findByIdAndDelete(req.params.id).exec(function (err, order) {});
  res.redirect("/orders");
}

module.exports = {
  new: newOrder,
  create,
  index,
  delete: deleteOrder,
};
