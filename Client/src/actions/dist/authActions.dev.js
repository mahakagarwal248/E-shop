"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports.register = exports.setCurrentUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("./types");

var _util = require("../util");

var _setAuthToken = _interopRequireDefault(require("../util/setAuthToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//SET A USER
var setCurrentUser = function setCurrentUser(user) {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (localStorage.token) {
              (0, _setAuthToken["default"])(localStorage.token);
            }

            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat((0, _util.getServer)(), "/api/auth")));

          case 4:
            res = _context.sent;
            dispatch({
              type: _types.SET_CURRENT_USER,
              payload: res.data
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _types.AUTH_ERROR
            });

          case 11:
            return _context.abrupt("return", {
              type: _types.SET_CURRENT_USER,
              payload: user
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
}; //REGISTER A USER


exports.setCurrentUser = setCurrentUser;

var register = function register(userData) {
  return function _callee2(dispatch) {
    var config, res, error;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = {
              headers: {
                "Content-Type": "application/json"
              }
            };
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat((0, _util.getServer)(), "/api/users"), userData, config));

          case 4:
            res = _context2.sent;
            dispatch({
              type: _types.SUCCESSFUL_REGISTER,
              payload: res.data
            });
            dispatch(setCurrentUser());
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            error = _context2.t0.response.data.errors;

            if (error) {
              dispatch({
                type: _types.ERRORS,
                payload: error
              });
            } else {
              dispatch({
                type: _types.FAILURE_REGISTER
              });
            }

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
}; //login user


exports.register = register;

var login = function login(userData) {
  return function _callee3(dispatch) {
    var config, res, error;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            config = {
              headers: {
                "Content-Type": "application/json"
              }
            };
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat((0, _util.getServer)(), "/api/auth"), userData, config));

          case 4:
            res = _context3.sent;
            dispatch({
              type: _types.SUCCESSFUL_LOGIN,
              payload: res.data
            });
            dispatch(setCurrentUser());
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            error = _context3.t0.response.data.errors;

            if (error) {
              dispatch({
                type: _types.ERRORS,
                payload: error
              });
            } else {
              dispatch({
                type: _types.FAILURE_LOGIN
              });
            }

          case 13:
            ;

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.login = login;

var logout = function logout() {
  return function (dispatch) {
    return dispatch({
      type: _types.LOGOUT
    });
  };
};

exports.logout = logout;