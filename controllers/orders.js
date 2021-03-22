const { create } = require('../models/order');
const Package = require('../models/order');


function newOrder(req, res) {
 res.render('orders/new');
}



module.exports = {
    new: newOrder,
    create,
};
