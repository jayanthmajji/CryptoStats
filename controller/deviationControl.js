const { exchangeModel } = require("../model/crypto");

exports.getDeviation = async (req, res) => {
  try {
    const { coin } = req.query;
    const data = await exchangeModel
      .find({
        name: coin,
      })
      .sort({ lastUpdate: -1 })
      .limit(100);

    let priceSum = 0;
    data.forEach((item) => {
      priceSum = priceSum + item.price;
    });
    console.log("sum", priceSum);
    const mean = priceSum / data.length;
    console.log(mean);

    let deviation = 0;
    data.forEach((item) => {
      deviation = deviation + Math.pow(item.price - mean, 2);
      console.log("deviation", deviation);
    });
    console.log("deviation", deviation);

    const sd = Math.sqrt(deviation / data.length);
    console.log("sd :", sd);

    res.status(200).json({
      standardDeviation: sd,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not found!",
    });
  }
};
