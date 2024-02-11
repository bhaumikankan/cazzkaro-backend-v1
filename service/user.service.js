const { User } = require("../model");
const bcrypt = require("bcrypt");

module.exports = class UserService {
  static async createUser(payload) {
    const isPhoneNumberExists = await User.exists({
      phoneNumber: payload?.phoneNumber,
    });
    if (isPhoneNumberExists) throw new Error("Phone Number already exists");

    const isEmailExsists = await User.exists({ email: payload?.email });
    if (isEmailExsists) throw new Error("Email already exists");

    const salt = bcrypt.genSaltSync(10);

    const hashPassword = bcrypt.hashSync(payload?.password, salt);

    const user = await User.create({ ...payload, password: hashPassword });
    return user;
  }

  static async getUserByPhoneNumber(phoneNumber) {
    const user = await User.findOne({ phoneNumber, deleted: { $ne: true } });
    if (!user) throw new Error("Invalid user credential");
    return user;
  }

  static async getUserByEmail(email) {
    const user = await User.findOne({ email, deleted: { $ne: true } });
    if (!user) throw new Error("Invalid user credential");
    return user;
  }

  static async getUserById(id) {
    const user = await User.findOne({ _id: id, deleted: { $ne: true } });
    if (!user) throw new Error("No user found");
    return user;
  }

  static async getUsers(filter) {
    const users = await User.find({ ...filter, deleted: { $ne: true } });
    return users;
  }

  static async updateUser(id, payload) {
    const user = await this.getUserById(id);
    Object.assign(user, { ...payload });
    const updatedUser = await new User(user).save();
    return updatedUser;
  }

  static async deleteUser(id) {
    const user = await this.getUserById(id);

    user.deleted = true;

    await new User(user).save();
  }
};
