const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
//middleware
app.use(express.json());
app.use(cors());
// schema design
app.use("/api/v1/product", productRoute);

app.post("/api/v1/product");
app.get("/api/v1/product");
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
