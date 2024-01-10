require("dotenv").config();

const express = require("express");
const sequelize = require("./db");

const fileUpload = require("express-fileupload")
const router = require("./routes/index");
const models = require("./models/models");
const path = require('path')
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5002;
app.use(cors());
app.use(express.json());
app.use(fileUpload())
app.use(express.static('static'))
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

module.exports = app;
