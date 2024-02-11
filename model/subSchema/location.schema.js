const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const LocationSchema = new Schema(
  {
    type: { type: String, enum: ["Point"] },
    coordinates: [{ type: String }],
  },
  { _id: false }
);

module.exports = LocationSchema;
