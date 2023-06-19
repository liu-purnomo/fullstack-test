const express = require("express");
const router = express.Router();
const products = require("./products");
const orders = require("./orders");

router.use("/api/products", products);
router.use("/api/orders", orders);

module.exports = router;
