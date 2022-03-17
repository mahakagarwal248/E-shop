"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeUser = exports.getServer = void 0;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import axios from "axios";
var isDevelopment = window.location.hostname.includes("localhost");

var getServer = function getServer() {
  return isDevelopment ? "http://localhost:5000" : "http://easycoder.herokuapp.com";
};

exports.getServer = getServer;

var decodeUser = function decodeUser() {
  var token = localStorage.getItem("token");
  return (0, _jwtDecode["default"])(token);
};

exports.decodeUser = decodeUser;