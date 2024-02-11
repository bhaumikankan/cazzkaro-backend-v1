const { PostService } = require("../service");

module.exports = class PostController {
  static async createPost(req, res, next) {
    try {
      const post = await PostService.createPost(req.body);
      res.apiResponse(true, "Post created successfully", post);
    } catch (err) {
      next(err);
    }
  }

  static async getPostById(req, res, next) {
    try {
      const postId = req.params.id;
      const post = await PostService.getPostById(postId);
      res.apiResponse(true, "Post fetched successfully", post);
    } catch (err) {
      next(err);
    }
  }

  static async getPosts(req, res, next) {
    try {
      const filter = req.query;
      const posts = await PostService.getPosts(filter);
      res.apiResponse(true, "Posts fetched successfully", posts);
    } catch (err) {
      next(err);
    }
  }

  static async updatePost(req, res, next) {
    try {
      const postId = req.params.id;
      const payload = req.body;
      const post = await PostService.updatePost(postId, payload);
      res.apiResponse(true, "Post updated successfully", post);
    } catch (err) {
      next(err);
    }
  }

  static async deletePost(req, res, next) {
    try {
      const postId = req.params.id;
      await PostService.deletePost(postId);
      res.apiResponse(true, "Post deleted successfully");
    } catch (err) {
      next(err);
    }
  }
};
