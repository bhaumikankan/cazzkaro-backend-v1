const { Product } = require("../model");

module.exports = class ProductService {
  static async createProduct(payload) {
    const post = await Product.create({ ...payload });
    return post;
  }

  static async getProductById(id) {
    const post = await Product.findOne({ _id: id, deleted: { $ne: true } });
    if (!post) throw new Error("No post found");
    return post;
  }

  static async getProducts(filter) {
    const posts = await Product.find({ ...filter, deleted: { $ne: true } });
    return posts;
  }

  static async updateProduct(id, payload) {
    const post = await this.getProductById(id);
    Object.assign(post, { ...payload });
    const updatedProduct = await new Product(post).save();
    return updatedProduct;
  }

  static async deleteProduct(id) {
    const post = await this.getProductById(id);

    post.deleted = true;

    await new Product(post).save();
  }
};
