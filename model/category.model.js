const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isSubCategory: { type: Boolean, default: false },
    parentCategory: { type: ObjectId, required: false },
  },
  { timestamps: true, versionKey: false, collection: "Category" }
);

module.exports = new model("Category", categorySchema);
