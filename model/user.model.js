const { Schema, model } = require("mongoose");
const { AddressSchema, LocationSchema } = require("./subSchema");
const { ObjectId } = Schema.Types;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: true,
      regex: /^\+[0-9]{10,15}$/,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      unique: true,
    },
    password: { type: String, required: true },
    isApproved: { type: Boolean, default: false },
    address: { type: AddressSchema },
    delete: { type: Boolean, default: false },
    //TODO: collage details
  },
  { timestamps: true, collection: "Users", versionKey: false }
);

// userSchema.pre("save", (next) => {
//   const user = this;
//   console.log(user, "hi");
//   bcrypt.hash(user.password, 10, (err, hash) => {
//     if (err) return next(err);

//     user.password = hash;
//     next();
//   });
// });

module.exports = new model("Users", userSchema);
