const express = require("express");
const config = require("config");
const connection = require("./db/connection");
const itemsRouter = require("./routes/itemsRouter");

const app = express();
const port = config.get("port");

//Middleware
app.use(express.json());
app.use("/api/v1/items", itemsRouter);

const start = async () => {
  try {
    await connection();
    app.listen(port, console.log("Listening on port " + port));
  } catch (error) {
    console.log(error);
  }
};

start();
