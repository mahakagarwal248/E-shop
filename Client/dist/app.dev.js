"use strict";

var express = require("express");

var app = express();

var path = require("path"); //const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
//const server_host = process.env.YOUR_HOST || '0.0.0.0';


app.use(express["static"](path.join(__dirname, "/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
}); //app.listen(server_port, server_host, (_)=>console.log("`React app is listening `"));