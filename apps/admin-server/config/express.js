const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("../routes");
const checkJwt = require("../middlewares/jwtMiddleware");
const userMiddleware = require("../middlewares/authMiddleware");

module.exports = () => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use("/api", checkJwt, userMiddleware, routes());

  app.get("/healthcheck", async (_req, res, _next) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };
    try {
      return res.send(healthcheck);
    } catch (error) {
      healthcheck.message = error;
      return res.status(503).send("Server is having issues!");
    }
  });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  return app;
};
