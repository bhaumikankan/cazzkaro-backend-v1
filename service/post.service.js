const { Post } = require("../model");

module.exports = class PostService {
  static async createPost(payload) {
    const post = await Post.create({ ...payload });
    return post;
  }

  static async getPostById(id) {
    const post = await Post.findOne({ _id: id, deleted: { $ne: true } });
    if (!post) throw new Error("No post found");
    return post;
  }

  static async getPosts(filter) {
    const posts = await Post.find({ ...filter, deleted: { $ne: true } });
    return posts;
  }

  static async updatePost(id, payload) {
    const post = await this.getPostById(id);
    Object.assign(post, { ...payload });
    const updatedPost = await new Post(post).save();
    return updatedPost;
  }

  static async deletePost(id) {
    const post = await this.getPostById(id);

    post.deleted = true;

    await new Post(post).save();
  }
};
