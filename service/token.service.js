const { SECRET_TEXT } = require("../config/env.config");
const jwt = require("jsonwebtoken");

module.exports = class TokenService {
  static generateToken(payload) {
    const token = jwt.sign({ ...payload }, SECRET_TEXT, { expiresIn: "2d" });
    return token;
  }
  static decodeToken(token) {
    if (!token) throw new Error("Invalid Token");
    const decoded = jwt.verify(token, SECRET_TEXT);
    return decoded;
  }
};
