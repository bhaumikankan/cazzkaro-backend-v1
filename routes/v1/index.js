const router = require("express").Router();
const modulesSample = require("../../config/module.sample");

// router.use("/auth", authRoute);

modulesSample.forEach((module) => {
  router.use(module.path, module.routes);
});

router.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
