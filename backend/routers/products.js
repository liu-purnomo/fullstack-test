const express = require("express");
const { productController } = require("../controllers");
const router = express.Router();

router.post("/", productController.create);

module.exports = router;
