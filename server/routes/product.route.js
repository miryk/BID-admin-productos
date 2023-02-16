const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/", ProductController.getAllProducts);
  app.get("/:_id", ProductController.getProductByID);
  app.post("/add", ProductController.createProduct);
  app.put("/update/:_id", ProductController.updateProduct);
  app.delete("/delete/:_id", ProductController.deleteProductById);
  app.get("/test", ProductController.test);
};
