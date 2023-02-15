const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
  app.get('/', ProductController.test)
}