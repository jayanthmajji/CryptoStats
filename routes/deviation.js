const { getDeviation } = require("../controller/deviationControl");
const { Router } = require("express");
const deviationRouter = Router();

// deviation end point

deviationRouter.get("/deviation", getDeviation);

module.exports = {
  deviationRouter: deviationRouter,
};
