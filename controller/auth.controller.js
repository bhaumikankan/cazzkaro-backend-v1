const { UserService, AuthService, TokenService } = require("../service");

module.exports = class UserController {
  static async register(req, res, next) {
    try {
      const { user, authToken } = await AuthService.register(req.body);
      res.cookie("access_token", authToken);
      res.apiResponse(true, "Users register successfully", user);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { user, authToken } = await AuthService.login(req.body);
      res.cookie("access_token", authToken);
      res.apiResponse(true, "User loggedin successfully", user);
    } catch (err) {
      next(err);
    }
  }

  static async getUserByAuthToken(req, res, next) {
    try {
      const access_token = req.params.token;
      const { id } = TokenService.decodeToken(access_token);
      const user = await UserService.getUserById(id);
      res.apiResponse(true, "User loggedin successfully", user);
    } catch (err) {
      next(err);
    }
  }
};
