const express = require("express");

const controller = require("./summaryController");

module.exports = () => {
  const router = express.Router();

  router.post("/list", controller.listData);

  return router;
};
