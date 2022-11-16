require("dotenv").config();

const expressApp = require("./config/express");
const mongoose = require('mongoose');

const { PORT, MONGO_DB_URI } = process.env;

const startServer = async () => {
  await mongoose.connect(MONGO_DB_URI);
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
