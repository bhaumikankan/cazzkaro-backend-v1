const { ProductService } = require("../service");

module.exports = class ProductController {
  static async createProduct(req, res, next) {
    try {
      const { user } = req;
      req.body.owner = user?._id;
      const product = await ProductService.createProduct(req.body);
      res.apiResponse(true, "Product created successfully", product);
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const productId = req.params.id;
      const product = await ProductService.getProductById(productId);
      res.apiResponse(true, "Product fetched successfully", product);
    } catch (err) {
      next(err);
    }
  }

  static async getProducts(req, res, next) {
    try {
      const filter = req.query;
      const products = await ProductService.getProducts(filter);
      res.apiResponse(true, "Products fetched successfully", products);
    } catch (err) {
      next(err);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const payload = req.body;
      const product = await ProductService.updateProduct(productId, payload);
      res.apiResponse(true, "Product updated successfully", product);
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;
      await ProductService.deleteProduct(productId);
      res.apiResponse(true, "Product deleted successfully");
    } catch (err) {
      next(err);
    }
  }
};
