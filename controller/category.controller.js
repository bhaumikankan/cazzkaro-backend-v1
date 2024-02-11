const { CategoryService } = require("../service");

module.exports = class CategoryController {
  static async createCategory(req, res, next) {
    try {
      const category = await CategoryService.createCategory(req.body);
      res.apiResponse(true, "Category created successfully", category);
    } catch (err) {
      next(err);
    }
  }

  static async getCategoryById(req, res, next) {
    try {
      const categoryId = req.params.id;
      const category = await CategoryService.getCategoryById(categoryId);
      res.apiResponse(true, "Category fetched successfully", category);
    } catch (err) {
      next(err);
    }
  }

  static async getCategorys(req, res, next) {
    try {
      const filter = req.query;
      const categorys = await CategoryService.getCategorys(filter);
      res.apiResponse(true, "Categorys fetched successfully", categorys);
    } catch (err) {
      next(err);
    }
  }

  static async updateCategory(req, res, next) {
    try {
      const categoryId = req.params.id;
      const payload = req.body;
      const category = await CategoryService.updateCategory(
        categoryId,
        payload
      );
      res.apiResponse(true, "Category updated successfully", category);
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const categoryId = req.params.id;
      await CategoryService.deleteCategory(categoryId);
      res.apiResponse(true, "Category deleted successfully");
    } catch (err) {
      next(err);
    }
  }
};
