const mongoose = require("mongoose");

// crypto schema

const exchangeschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  marketCap: Number,
  changeHour24: Number,
  changeVolume24: Number,
  lastUpdate: Number,
});

const exchangeModel = mongoose.model("exchange", exchangeschema);

module.exports = {
  exchangeModel,
};
