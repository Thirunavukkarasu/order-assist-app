const express = require("express");

const crRoutes = require("./cancellationRequest/crRoutes");
const srRoutes = require("./salesReturn/srRoutes");
const summaryRoutes = require("./summary/summaryRoutes");

module.exports = () => {
  const router = express.Router();

  router.use("/cancellationRequest", crRoutes());
  router.use("/salesReturn", srRoutes());
  router.use("/summary", summaryRoutes());

  return router;
};
