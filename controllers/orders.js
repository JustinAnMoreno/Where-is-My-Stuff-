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
  //ask the data file to splice out the todo from the array 
  Order.deleteOne(req.params.id)
  //respond with a redirect to the index page where we see all the todos minus the deleted todos
  res.redirect('/orders/index');
}

module.exports = {
  new: newOrder,
  create,
  index,
  delete: deleteOrder
};
