const express = require("express");
const { productController } = require("../controllers");
const router = express.Router();

router.get("/", productController.index);
router.post("/", productController.create);

module.exports = router;
