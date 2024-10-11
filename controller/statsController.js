const { exchangeModel } = require("../model/crypto");

exports.getStatus = async (req, res) => {
  const { coin } = req.query;
  console.log("coin", coin);

  const data = await exchangeModel
    .find({ name: coin })
    .sort({ lastUpdate: -1 })
    .limit(1);
  if (data) {
    console.log("data", data);

    res.status(200).json({
      data: data,
    });
  } else {
    res.status(404).json({
      message: "Not found!",
    });
  }
};
