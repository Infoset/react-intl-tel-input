"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TelInput = exports["default"] = function (_Component) {
  _inherits(TelInput, _Component);
  var _super = _createSuper(TelInput);
  function TelInput() {
    var _this;
    _classCallCheck(this, TelInput);
    _this = _super.call(this);
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
    _this.state = {
      hasFocus: false
    };
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
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "readonly": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "fieldName": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "fieldId": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "handleInputChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "handleOnBlur": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "handleOnFocus": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "autoFocus": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "autoComplete": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "inputProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "refCallback": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "cursorPosition": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};