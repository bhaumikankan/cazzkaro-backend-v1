const { Schema, model } = require("mongoose");
const { LocationSchema, AddressSchema } = require("./subSchema");
const { ObjectId } = Schema.Types;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: ObjectId, ref: "Category", required: true },
    price: { type: Number, required: true },
    owner: { type: ObjectId, ref: "Users", required: true },
    deleted: { type: Boolean, default: false },
    location: { type: LocationSchema },
    address: { type: AddressSchema, required: true },
  },
  { timestamps: true, versionKey: false, collection: "Product" }
);

productSchema.index({ location: "2dsphere" });

module.exports = new model("Product", productSchema);
