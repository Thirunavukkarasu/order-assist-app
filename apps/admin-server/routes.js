const express = require("express");

const dashboardRoutes = require("./modules/dashboard/routes");
const customerRoutes = require("./modules/customer/routes");
const orderRoutes = require("./modules/order/routes");
const rncRoutes = require("./modules/rnc/routes");
const settingsRoutes = require("./modules/settings/routes");

module.exports = () => {
  const router = express.Router();

  router.use("/dashboard", dashboardRoutes());
  router.use("/customer", customerRoutes());
  router.use("/order", orderRoutes());
  router.use("/rnc", rncRoutes());
  router.use("/settings", settingsRoutes());
  router.get('/healthcheck', async (_req, res, _next) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        return res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        return res.status(503).send("Server is having issues!");
    }
});

  return router;
};
