const mongoose = require("mongoose");
const { DB_URL } = require("./env.config");

const DBConnection = mongoose.connect(DB_URL);

module.exports = { DBConnection };
