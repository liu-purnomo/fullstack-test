require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const router = require("./routers");
const { errorHandler } = require("./middlewares");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

module.exports = app;
