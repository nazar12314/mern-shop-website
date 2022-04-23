const config = require("config");
const mongoose = require("mongoose");

const databaseName = config.get("databaseName");
const databasePassword = config.get("databasePassword");

const connect = async () => {
  return mongoose.connect(
    `mongodb+srv://${databaseName}:${databasePassword}@cluster0.y2vlb.mongodb.net/shopApi?retryWrites=true&w=majority`,
    console.log("Connection established")
  );
};

module.exports = connect;
