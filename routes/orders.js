const express = require("express");
const router = express.Router();
const ordersCtrl = require("../controllers/orders");

// GET /movies/new
router.get("/", ordersCtrl.index);
router.get("/new", ordersCtrl.new);
router.delete("/:id", ordersCtrl.delete);
router.put("/:id", ordersCtrl.update);
router.post("/", ordersCtrl.create);
router.get("/:id/edit", ordersCtrl.edit);
router.get("/:id", ordersCtrl.show);

module.exports = router;
