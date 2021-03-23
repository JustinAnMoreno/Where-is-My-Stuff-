const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');

// GET /movies/new
router.get('/', ordersCtrl.index);
router.get('/new', ordersCtrl.new);
router.post('/', ordersCtrl.create);


module.exports = router;