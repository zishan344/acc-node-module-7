const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
module.exports = router;
router
  .route("/")
  .get(productController.getProduct)
  .post(productController.createProducts);
