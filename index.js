const { CronJob } = require("cron");
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URL, PORT } = require("./config");
const { fetchData } = require("./fetchData");
const { statsRouter } = require("./routes/stats");
const { deviationRouter } = require("./routes/deviation");

const app = express();

app.use(express.json());
app.use("/api", statsRouter);
app.use("/api", deviationRouter);

const job = CronJob.from({
  cronTime: "0 */2 * * *",
  onTick: function () {
    console.log("fetching data");
    fetchData();
  },
  start: true,
  // timeZone: "india",
});

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to mongodb url!");

    app.listen(PORT, () => {
      console.log(`Port is listening on ${PORT}`);
    });
  } catch (e) {
    console.log("Failed to connect to the db", e);
  }
}

main();
