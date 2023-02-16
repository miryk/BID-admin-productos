const { Product }  = require('../models/product.model');

module.exports.test = (req, res) => {
  res.json({ message: "Hello World"})
}

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.getProductByID = async (req, res) => {
  try {
    const getOne = await Product.findOne({ _id: req.params._id });
    res.json(getOne);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true})
    res.json(updatedProduct);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: req.params._id });
    res.json(deletedProduct);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}