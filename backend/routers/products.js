const express = require("express");
const { productController } = require("../controllers");
const router = express.Router();

router.get("/", productController.index);
router.post("/", productController.create);
router.get("/:id", productController.detail);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
