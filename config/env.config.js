require("dotenv").config();

module.exports = {
  DB_URL: process.env.DB_URL,
  SECRET_TEXT: process.env.SECRET_TEXT,
};
