const express = require("express");

const controller = require("./soController");

module.exports = () => {
  const router = express.Router();

  router.post("/list", controller.listData);
  router.post("/create", controller.createSalesOrder);

  return router;
};
