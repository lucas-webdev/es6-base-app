(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _objects = _interopRequireDefault(require("./objects.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(function () {
  $('#first_section').html(_objects["default"].map(function (m) {
    return m.nome;
  }));
  console.log(_objects["default"].filter(function (m) {
    return m.nome === 'Lucas Medeiros';
  }));
});

},{"./objects.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mentores = [{
  nome: 'Lucas Medeiros',
  skill: 'Web developer'
}, {
  nome: 'Bruno Machado',
  skill: 'Designer'
}];
var _default = mentores;
exports["default"] = _default;

},{}]},{},[1]);
