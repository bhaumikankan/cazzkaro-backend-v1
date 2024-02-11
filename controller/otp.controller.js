const { OTPService, WhatsappService } = require("../service");

module.exports = class OTPController {
  static async sendOTP(req, res, next) {
    try {
      const { phoneNumber } = req.body;
      const { whatsappSession } = req;
      const otp = OTPService.generateOTP();
      const sendOTPMessage = await WhatsappService.sendMessage(
        whatsappSession,
        {
          phoneNumber,
          message: `Hi, Your cazzkaro.in OTP is ${otp}`,
        }
      );
      await OTPService.saveOTP({ phoneNumber, otp });
      res.apiResponse(true, "OTP sent successfully");
    } catch (err) {
      next(err);
    }
  }

  static async verifyOTP(req, res, next) {
    try {
      const { phoneNumber, otp } = req.body;
      await OTPService.verifyOTP({ phoneNumber, otp });
      res.apiResponse(true, "OTP verified");
    } catch (err) {
      next(err);
    }
  }
};
