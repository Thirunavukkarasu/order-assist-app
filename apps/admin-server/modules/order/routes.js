const express = require("express");

const soRoutes = require("./salesorder/soRoutes");
const packageRoutes = require("./package/packageRoutes");
const shipmentRoutes = require("./shipment/shipmentRoutes");

module.exports = () => {
  const router = express.Router();

  router.use("/salesorder", soRoutes());
  router.use("/package", packageRoutes());
  router.use("/shipment", shipmentRoutes());

  return router;
};
