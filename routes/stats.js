const { Router } = require("express");
const { getStatus } = require("../controller/statsController");

const statsRouter = Router();

// stats end point
statsRouter.get("/stats", getStatus);

module.exports = {
  statsRouter: statsRouter,
};
