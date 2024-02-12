const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { UserService, TokenService } = require("../service");

const auth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token =
    authHeader && authHeader.startsWith("Bearer") && authHeader.split(" ")[1];
  let payload, user;
  try {
    payload = TokenService.decodeToken(token);
    user = await UserService.getUserById(payload.id);
  } catch (error) {
    next(
      new ApiError(httpStatus.UNAUTHORIZED, "Invalid Token, Authenticate first")
    );
  }

  //   user = user.toJSON();
  req.user = user;

  next();
};

module.exports = auth;
