require("dotenv").config();

const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");

const app = express();

app.use(cors());
app.use(express());

conn();

app.listen(parseInt(process.env.EXPRESS_PORT), () =>
  console.log("Server connected.")
);
