const { Schema, model } = require("mongoose");
const { LocationSchema, AddressSchema } = require("./subSchema");
const { ObjectId } = Schema.Types;

const otpSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    verifired: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false, collection: "OTP" }
);

module.exports = new model("OTP", otpSchema);
