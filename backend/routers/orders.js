const express = require("express");
const { orderController } = require("../controllers");
const router = express.Router();

router.post("/", orderController.create);

module.exports = router;
