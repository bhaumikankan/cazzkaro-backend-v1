const MODULES = {
  OTP: {
    name: "OTP",
    routes: require("../routes/v1/otp.route"),
    path: "/otp",
  },
  AUTH: {
    name: "AUTH",
    routes: require("../routes/v1/auth.route"),
    path: "/auth",
  },
  USER: {
    name: "USER",
    routes: require("../routes/v1/user.route"),
    path: "/user",
  },
  POST: {
    name: "POST",
    routes: require("../routes/v1/post.route"),
    path: "/post",
  },
  CATEGORY: {
    name: "CATEGORY",
    routes: require("../routes/v1/category.route"),
    path: "/category",
  },
};

module.exports = MODULES;
