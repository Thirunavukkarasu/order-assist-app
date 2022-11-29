require("dotenv").config();
const Redis = require("ioredis");
const mongoose = require("mongoose");

const expressApp = require("./config/express");

const { PORT, MONGO_DB_URI, AUTH_DOMAIN, CACHE_URI } = process.env;

const startServer = async () => {
  await mongoose.connect(MONGO_DB_URI);
  const app = expressApp();

  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}!`);
  });
};

const connectToCache = () => {
  try {
    if (CACHE_URI) {
      const redis = new Redis(CACHE_URI);
      global.redis = redis;
    }
  } catch (error) {
    console.log("Connection to the cache server failed!", error);
  }
};

try {
  if (!AUTH_DOMAIN || !MONGO_DB_URI) {
    console.log(
      "Exiting: Please make sure that AUTH_DOMAIN and MONGO_DB_URI value is set!"
    );

    process.exit();
  }

  connectToCache();
  startServer();
} catch (error) {
  console.log("Bootstrapping the app server failed!", error);
}
