const router = require("express").Router();
const modulesSample = require("../../config/module.sample");

// router.use("/auth", authRoute);

modulesSample.forEach((module) => {
  console.log(module.path);
  router.use(module.path, module.routes);
});

router.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

router.use("/", (req, res) => {
  res.status(200).json({ message: "Hi its cazzkaro" });
});

module.exports = router;
