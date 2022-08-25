const express = require("express");

const roleRoutes = require("./role/roleRoutes");
const userRoutes = require("./user/userRoutes");
const groupRoutes = require("./group/groupRoutes");

module.exports = () => {
  const router = express.Router();

  router.use("/role", roleRoutes());
  router.use("/user", userRoutes());
  router.use("/group", groupRoutes());

  return router;
};
