const express = require("express");
const router = express.Router();
const products = require("./products");

router.use("/api/products", products);

module.exports = router;
