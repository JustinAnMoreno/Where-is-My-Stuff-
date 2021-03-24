const express = require('express');
const router = express.Router();
const addressesCtrl = require('../controllers/performers');

router.get('/addresses/new', addressesCtrl.new);
router.post("/addresses", addressesCtrl.create);
router.post("/orders/:id/addresses", addressesCtrl.addAddress);

module.exports = router;