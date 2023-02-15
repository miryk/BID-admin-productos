import ProductController from '../controllers/product.controller';

module.exports = (app) => {
  app.get('/', ProductController.test)
}