const { AuthController } = require("../../controller");

const router = require("express").Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/loggedin-user/:token", AuthController.getUserByAuthToken);

module.exports = router;
