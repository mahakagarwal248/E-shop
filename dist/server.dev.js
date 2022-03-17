"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var morgan = require("morgan");

var connectDB = require("./config/db"); //const PORT = process.env.PORT || 5000;


require("dotenv").config();

var port = process.env.PORT || 5000;

var path = require('path');

app.use(cors());
app.use(morgan("dev"));
connectDB(); //define routes and api

app.use(express.json({
  extended: false
}));
app.use("/api/users", require("./routes/userAPI"));
app.use("/api/products", require("./routes/productsAPI"));
app.use("/api/auth", require("./routes/authAPI"));
app.use("/api/profile", require("./routes/ProfileAPI"));
app.use("/api/cart", require("./routes/cartAPI"));
app.use("/api/payment", require("./routes/PaymentAPI"));

if (process.env.NODE_ENV === "production") {
  app.use(express["static"]("Client/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
  });
}

app.listen(port, function () {
  console.log("Server is listening ");
});