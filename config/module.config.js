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
  PRODUCT: {
    name: "PRODUCT",
    routes: require("../routes/v1/product.route"),
    path: "/product",
  },
  CATEGORY: {
    name: "CATEGORY",
    routes: require("../routes/v1/category.route"),
    path: "/category",
  },
};

module.exports = MODULES;
