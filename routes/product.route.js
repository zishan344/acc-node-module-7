const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
module.exports = router;

//
router.route("/bulk_update").patch(productController.bulkUpdateProduct);
router.route("/bulk_delete").delete(productController.bulkDeleteProduct);

//
router
  .route("/")
  .get(productController.getProduct)
  .post(productController.createProducts);

//
router
  .route("/:id")
  .patch(productController.updateProductById)
  .delete(productController.deleteProductBydId);
module.exports = router;
