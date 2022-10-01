const Product = require("../models/Product");

exports.gettingAllProduct = async () => {
  const product = await Product.find({});
  return product;
};
exports.createProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};
