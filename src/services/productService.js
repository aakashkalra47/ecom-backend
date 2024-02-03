const Products = require('../models/product/product');

const getProducts = async (parameters) => {
  const { category, ids } = parameters;
  let products = [];
  if (category) {
    products = await Products.find({category}).exec();
  } else {
    products = await Products.find({ _id: { $in: ids } });
  }
  return products;
};
const getProductById = async (id) => {
  const product = await Products.findById(id);
  if (!product) {
    const error = new Error('Product Not Found');
    error.status = 404;
    throw error;
  }
  return product;
};
module.exports = {
  getProducts,
  getProductById,
};
