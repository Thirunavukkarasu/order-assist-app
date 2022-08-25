const express = require("express");

const cncDashboardRoutes = require("./cancellations/cncDashboardRoutes");

module.exports = () => {
  const router = express.Router();

  router.use("/cancellations", cncDashboardRoutes());
  router.use("/ndr", cncDashboardRoutes());
  router.use("/returns", cncDashboardRoutes());
  router.use("/salesorder", cncDashboardRoutes());

  return router;
};
