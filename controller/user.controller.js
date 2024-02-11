const { UserService } = require("../service");

module.exports = class UserController {
  static async getUserById(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      res.apiResponse(true, "User fetched successfully", user);
    } catch (err) {
      next(err);
    }
  }

  static async getUsers(req, res, next) {
    try {
      const filter = req.query;
      const users = await UserService.getUsers(filter);
      res.apiResponse(true, "Users fetched successfully", users);
    } catch (err) {
      next(err);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const userId = req.params.id;
      const payload = req.body;
      const user = await UserService.updateUser(userId, payload);
      res.apiResponse(true, "User updated successfully", user);
    } catch (err) {
      next(err);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const userId = req.params.id;
      await UserService.deleteUser(userId);
      res.apiResponse(true, "User deleted successfully");
    } catch (err) {
      next(err);
    }
  }
};
