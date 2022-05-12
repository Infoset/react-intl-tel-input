"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TelInput = function (_Component) {
  _inherits(TelInput, _Component);

  var _super = _createSuper(TelInput);

  function TelInput() {
    var _this;

    _classCallCheck(this, TelInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasFocus: false
    });

    _defineProperty(_assertThisInitialized(_this), "refHandler", function (element) {
      _this.tel = element;

      _this.props.refCallback(element);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e) {
      _this.setState({
        hasFocus: false
      });

      if (typeof _this.props.handleOnBlur === 'function') {
        _this.props.handleOnBlur(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e) {
      _this.setState({
        hasFocus: true
      });

      if (typeof _this.props.handleOnFocus === 'function') {
        _this.props.handleOnFocus(e);
      }
    });

    return _this;
  }

  _createClass(TelInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.hasFocus) {
        this.tel.setSelectionRange(this.props.cursorPosition, this.props.cursorPosition);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("input", _extends({}, this.props.inputProps, {
        ref: this.refHandler,
        type: "tel",
        autoComplete: this.props.autoComplete,
        className: this.props.className,
        disabled: this.props.disabled,
        readOnly: this.props.readonly,
        name: this.props.fieldName,
        id: this.props.fieldId,
        value: this.props.value,
        placeholder: this.props.placeholder,
        onChange: this.props.handleInputChange,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        autoFocus: this.props.autoFocus
      }));
    }
  }]);

  return TelInput;
}(_react.Component);

exports["default"] = TelInput;
TelInput.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "refHandler",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "element",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleBlur",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "TelInput",
  "props": {
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "readonly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "fieldName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "fieldId": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "placeholder": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "handleInputChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "handleOnBlur": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "handleOnFocus": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "autoFocus": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "autoComplete": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "inputProps": {
      "type": {
        "name": "object"
      },
      "required": false,
      "description": ""
    },
    "refCallback": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "cursorPosition": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    }
  }
};