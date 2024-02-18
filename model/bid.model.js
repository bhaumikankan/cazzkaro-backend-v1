const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const bidSchema = new Schema(
  {
    productId: { typeLObjectId, ref: "Posts", required: true },
    ownerId: { type: ObjectId, ref: "Users", required: true },
    state: ["RAISED", "REQUESTED", "ACCEPTED", "REJECTED"],
    raisedBy: { type: ObjectId, ref: "Users" },
    acceptedBy: { type: ObjectId, ref: "Users" },
    rejectedBy: { type: ObjectId, ref: "Users" },
    requestedBy: { type: ObjectId, ref: "Users" },
    bidPrice: { type: String },
    requestedPrice: { type: String },
  },
  { collection: "Bid", versionKey: false, timestamps: true }
);

module.exports = new model("Bid", bidSchema);
