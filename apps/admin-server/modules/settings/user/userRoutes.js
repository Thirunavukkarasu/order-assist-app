const express = require("express");

const controller = require("./userController");

module.exports = () => {
  const router = express.Router();

  router.post("/list", controller.listData);
  router.post("/getUserDetails", controller.getUserDetails);

  return router;
};
