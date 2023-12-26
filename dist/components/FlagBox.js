"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FlagBox(_ref) {
  var dialCode = _ref.dialCode,
    isoCode = _ref.isoCode,
    name = _ref.name,
    onMouseOver = _ref.onMouseOver,
    onFocus = _ref.onFocus,
    onClick = _ref.onClick,
    flagRef = _ref.flagRef,
    innerFlagRef = _ref.innerFlagRef,
    countryClass = _ref.countryClass;
  return _react["default"].createElement("li", {
    className: countryClass,
    "data-dial-code": dialCode,
    "data-country-code": isoCode,
    onMouseOver: onMouseOver,
    onFocus: onFocus,
    onClick: onClick
  }, _react["default"].createElement("div", {
    ref: flagRef,
    className: "flag-box"
  }, _react["default"].createElement("div", {
    ref: innerFlagRef,
    className: "iti-flag ".concat(isoCode)
  })), _react["default"].createElement("span", {
    className: "country-name"
  }, name), _react["default"].createElement("span", {
    className: "dial-code"
  }, "+ ".concat(dialCode)));
}
FlagBox.defaultProps = {
  onFocus: function onFocus() {},
  onMouseOver: function onMouseOver() {},
  onClick: function onClick() {}
};
FlagBox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FlagBox",
  "props": {
    "onFocus": {
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onMouseOver": {
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onClick": {
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "dialCode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "isoCode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "flagRef": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "innerFlagRef": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "countryClass": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
var _default = exports["default"] = FlagBox;