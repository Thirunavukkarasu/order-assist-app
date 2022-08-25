require("dotenv").config();

const expressApp = require("./config/express");
const models = require("./models");

const { PORT } = process.env;

const startServer = async () => {
  const app = expressApp();

  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}!`);
  });
};

try {
  startServer();
} catch (error) {
  console.log("Bootstrapping the app server failed!", error);
}
