require("dotenv").config();
const express = require("express");
const { mongoConnect } = require("./database");

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api", (req, res) => {
  res.send("Hello World!");
});

mongoConnect(async () => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});
