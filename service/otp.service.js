const { OTP } = require("../model");

module.exports = class OTPService {
  static async saveOTP(payload) {
    const otp = await OTP.findOneAndUpdate(
      { phoneNumber: payload?.phoneNumber },
      { ...payload, verifired: false },
      { upsert: true }
    );
    return otp;
  }

  static generateOTP() {
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    return otp;
  }

  static async verifyOTP(payload) {
    const otp = await OTP.findOne({
      phoneNumber: payload?.phoneNumber,
      otp: payload?.otp,
      verifired: false,
    });

    if (!otp) throw new Error("Invalid OTP");

    Object.assign(otp, { verifired: true });
    const verifired = await new OTP(otp).save();
    return verifired;
  }
};
