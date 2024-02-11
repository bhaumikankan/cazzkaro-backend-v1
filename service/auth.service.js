const TokenService = require("./token.service");
const UserService = require("./user.service");
const bcrypt = require("bcrypt");
module.exports = class AuthService {
  static async register(payload) {
    const user = await UserService.createUser({ ...payload });
    const authToken = TokenService.generateToken({
      email: payload?.email,
      phoneNumber: payload?.phoneNumber,
      id: user?._id,
    });
    return { user, authToken };
  }

  static async login(payload) {
    let user;
    const phoneNumberRegex = /^\+[0-9]{10,15}$/;
    if (phoneNumberRegex.test(payload?.username)) {
      user = await UserService.getUserByPhoneNumber(payload?.username);
    } else {
      user = await UserService.getUserByEmail(payload?.username);
    }
    const match = await bcrypt.compare(payload?.password, user.password);
    if (!match) throw new Error("Invalid user credential");
    const authToken = TokenService.generateToken({
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      id: user?._id,
    });
    return { user, authToken };
  }
};
