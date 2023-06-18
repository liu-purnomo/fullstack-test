const express = require("express");
const { orderController } = require("../controllers");
const router = express.Router();

router.post("/", orderController.create);
router.get("/", orderController.index);
router.get("/:id", orderController.detail);

module.exports = router;
