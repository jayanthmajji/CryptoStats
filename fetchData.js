const axios = require("axios");
const mongoose = require("mongoose");
const crypto = require("./model/crypto");
const { API_KEY } = require("./config");

// fetching the data and storing it.

exports.fetchData = async function () {
  try {
    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,matic-network,ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=2",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY,
      },
    };

    const response = await axios.request(config);
    const data = await response.data;
    // console.log(data);
    if (data) {
      // const exchange = crypto.exchangeModel.bulkWrite([data]);
      const items = [];
      for (item in data) {
        // console.log("data", data[item])
        let temp = {
          name: item,
          price: data[item].usd,
          marketCap: data[item].usd_market_cap,
          changeHour24: data[item].usd_24h_change,
          changeVolume24: data[item].usd_24h_vol,
          lastUpdate: data[item].last_updated_at,
        };
        items.push(temp);
      }
      console.log("items:", items);
      const exchange = await crypto.exchangeModel.insertMany(items);
      console.log(exchange);
    }
  } catch (error) {
    console.log("error while fetching", error);
  }
};
