const { OTPController } = require("../../controller");

const router = require("express").Router();

router.post("/send", OTPController.sendOTP);
router.post("/verify", OTPController.verifyOTP);

module.exports = router;
