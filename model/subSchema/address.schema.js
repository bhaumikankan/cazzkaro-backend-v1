const { Schema, model } = require("mongoose");
const { LocationSchema } = require(".");
const { ObjectId } = Schema.Types;

const AddressSchema = new Schema({
  country: { type: String, required: true },
  state: { type: String, required: true },
  pin: { type: String, regex: /^\d{6}$/, required: true },
  landmark: { type: String, required: true },
  area: { type: String, require: false },
});

module.exports = AddressSchema;
