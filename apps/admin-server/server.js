require("dotenv").config();

const expressApp = require("./config/express");
const mongoose = require('mongoose');

const { PORT, MONGO_DB_URI, AUTH_DOMAIN } = process.env;

const startServer = async () => {
  await mongoose.connect(MONGO_DB_URI);
  const app = expressApp();

  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}!`);
  });
};

try {
  if (
    !AUTH_DOMAIN ||
    !MONGO_DB_URI 
  ) {
    console.log(
      "Exiting: Please make sure that AUTH_DOMAIN and MONGO_DB_URI value is set!"
    );
  
    process.exit();
  }

  startServer();
} catch (error) {
  console.log("Bootstrapping the app server failed!", error);
}
