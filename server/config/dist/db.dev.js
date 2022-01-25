"use strict";

var mongoose = require("mongoose");

var config = require("./keys"); //const db = config.mongoURI;


require("dotenv").config();

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(process.env.DB_PROD, {
            useNewUrlParser: true,
            useUnifiedTopology: true //useCreateIndex: true,
            //useFindAndModify: false,

          }));

        case 3:
          console.log("Connected to database");
          _context.next = 11;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          console.log("Connection Failed!");
          process.exit(1);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports = connectDB;