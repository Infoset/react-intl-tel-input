"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _CountryList = _interopRequireDefault(require("./CountryList"));

var _RootModal = _interopRequireDefault(require("./RootModal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlagDropDown = function (_Component) {
  _inherits(FlagDropDown, _Component);

  var _super = _createSuper(FlagDropDown);

  function FlagDropDown() {
    var _this;

    _classCallCheck(this, FlagDropDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "genSelectedDialCode", function () {
      var _this$props = _this.props,
          separateDialCode = _this$props.separateDialCode,
          dialCode = _this$props.dialCode;
      return separateDialCode ? _react["default"].createElement("div", {
        className: "selected-dial-code"
      }, dialCode) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "genArrow", function () {
      var _this$props2 = _this.props,
          allowDropdown = _this$props2.allowDropdown,
          showDropdown = _this$props2.showDropdown;
      var arrowClasses = (0, _classnames["default"])('arrow', showDropdown ? 'up' : 'down');
      return allowDropdown ? _react["default"].createElement("div", {
        className: arrowClasses
      }) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "genFlagClassName", function () {
      return (0, _classnames["default"])('iti-flag', _defineProperty({}, _this.props.countryCode, !!_this.props.countryCode));
    });

    _defineProperty(_assertThisInitialized(_this), "genCountryList", function () {
      var _this$props3 = _this.props,
          dropdownContainer = _this$props3.dropdownContainer,
          showDropdown = _this$props3.showDropdown,
          isMobile = _this$props3.isMobile,
          allowDropdown = _this$props3.allowDropdown,
          setFlag = _this$props3.setFlag,
          countries = _this$props3.countries,
          inputTop = _this$props3.inputTop,
          inputOuterHeight = _this$props3.inputOuterHeight,
          preferredCountries = _this$props3.preferredCountries,
          highlightedCountry = _this$props3.highlightedCountry,
          changeHighlightCountry = _this$props3.changeHighlightCountry,
          window = _this$props3.window,
          document = _this$props3.document;
      return _react["default"].createElement(_CountryList["default"], {
        ref: function ref(countryList) {
          _this.countryList = countryList;
        },
        dropdownContainer: dropdownContainer,
        isMobile: isMobile,
        showDropdown: allowDropdown && showDropdown,
        setFlag: setFlag,
        countries: countries,
        inputTop: inputTop,
        inputOuterHeight: inputOuterHeight,
        preferredCountries: preferredCountries,
        highlightedCountry: highlightedCountry,
        changeHighlightCountry: changeHighlightCountry,
        window: window,
        document: document
      });
    });

    return _this;
  }

  _createClass(FlagDropDown, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          refCallback = _this$props4.refCallback,
          allowDropdown = _this$props4.allowDropdown,
          clickSelectedFlag = _this$props4.clickSelectedFlag,
          handleSelectedFlagKeydown = _this$props4.handleSelectedFlagKeydown,
          titleTip = _this$props4.titleTip,
          dropdownContainer = _this$props4.dropdownContainer,
          showDropdown = _this$props4.showDropdown,
          document = _this$props4.document;
      return _react["default"].createElement("div", {
        ref: refCallback,
        className: "flag-container"
      }, _react["default"].createElement("div", {
        className: "selected-flag",
        tabIndex: allowDropdown ? '0' : '',
        onClick: clickSelectedFlag,
        onKeyDown: handleSelectedFlagKeydown,
        title: titleTip
      }, _react["default"].createElement("div", {
        className: this.genFlagClassName()
      }), this.genSelectedDialCode(), this.genArrow()), dropdownContainer && showDropdown ? _react["default"].createElement(_RootModal["default"], {
        document: document
      }, this.genCountryList()) : this.genCountryList());
    }
  }]);

  return FlagDropDown;
}(_react.Component);

exports["default"] = FlagDropDown;
FlagDropDown.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "genSelectedDialCode",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "genArrow",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "genFlagClassName",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "genCountryList",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "FlagDropDown",
  "props": {
    "allowDropdown": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "dropdownContainer": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "separateDialCode": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "dialCode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "countryCode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "showDropdown": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "clickSelectedFlag": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "handleSelectedFlagKeydown": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isMobile": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "setFlag": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "countries": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "inputTop": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "inputOuterHeight": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "preferredCountries": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "highlightedCountry": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "changeHighlightCountry": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "titleTip": {
      "description": "",
      "type": {
        "name": "string"
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
    "window": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "document": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};