const { Category } = require("../model");

module.exports = class CategoryService {
  static async createCategory(payload) {
    const category = await Category.create({ ...payload });
    return category;
  }

  static async getCategoryById(id) {
    const category = await Category.findOne({ _id: id });
    if (!category) throw new Error("No category found");
    return category;
  }

  static async getCategorys(filter) {
    const categorys = await Category.find({ ...filter });
    return categorys;
  }

  static async updateCategory(id, payload) {
    const category = await this.getCategoryById(id);
    Object.assign(category, { ...payload });
    const updatedCategory = await new Category(category).save();
    return updatedCategory;
  }

  static async deleteCategory(id) {
    await Category.findByIdAndDelete(id);
  }
};
