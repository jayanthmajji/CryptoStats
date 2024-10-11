require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL,
  API_KEY: process.env.API_KEY,
};
