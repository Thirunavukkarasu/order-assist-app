const express = require("express");

const leadRoutes = require("./leads/leadRoutes");
const summaryRoutes = require("./summary/summaryRoutes");

module.exports = () => {
  const router = express.Router();

  router.use("/leads", leadRoutes());
  router.use("/summary", summaryRoutes());

  return router;
};
