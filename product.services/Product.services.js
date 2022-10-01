const Product = require("../models/Product");

exports.gettingAllProduct = async () => {
  const product = await Product.find({});
  return product;
};
exports.createProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};
exports.updateProductById = async (productId, data) => {
  const product = await updateOne(
    { _id: productId },
    { $set: data },
    { runValidators: true }
  );
  return product;
};
exports.bulkUpdate = async (data) => {
  // const product = await Product.updateMany({ _id: data.ids }, data.data, {
  //   runValidators: true,
  // });
  const products = [];
  console.log(data);
  data.ids.forEach((product) =>
    products.push(Product.updateOne({ _id: product.id }, product.data))
  );
  const result = await Promise.all(products);
  console.log(result);
  return products;
};
exports.deleteProduct = async (data) => {
  const product = await Product.deleteOne({ _id: data });
  return product;
};
exports.bulkDelete = async (ids) => {
  const product = await Product.deleteMany({ _id: ids });
  return product;
};
