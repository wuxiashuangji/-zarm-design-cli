"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _default = function _default(compName) {
  return "\nimport ".concat(compName, " from './").concat(compName, "';\n\nexport default ").concat(compName, ";\n");
};

exports["default"] = _default;