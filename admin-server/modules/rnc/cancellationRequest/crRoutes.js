const express = require("express");

const controller = require("./crController");

module.exports = () => {
  const router = express.Router();

  router.get("/list", controller.listData);

  return router;
};
