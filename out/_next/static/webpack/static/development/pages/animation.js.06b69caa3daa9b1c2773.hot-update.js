webpackHotUpdate("static/development/pages/animation.js",{

/***/ "./components/animation/Particle.js":
/*!******************************************!*\
  !*** ./components/animation/Particle.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MainLayout */ "./components/MainLayout.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  flex-basis: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-basis: ", "%;\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var color = "hotpink";

if (typeof window !== "undefined") {
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(window.__NEXT_DATA__.ids);
}

var SVG = function SVG(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: props.width,
    height: props.height
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "4",
    fill: "darkcyan"
  }));
};


var colors = ["#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1"];
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Box = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), function (props) {
  return props.width;
}, function (props) {
  return props.bgColor;
});
var ContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3(), function (props) {
  return props.bgColor;
});

var Particle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Particle, _React$Component);

  function Particle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Particle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Particle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      styles: [{
        width: 0,
        height: 20
      }, {
        width: 24,
        height: 60
      }, {
        width: 50,
        height: 90
      }, {
        width: 60,
        height: 60
      }, {
        width: 80,
        height: 180
      }, {
        width: 100,
        height: 100
      }]
    });

    return _this;
  }

  _createClass(Particle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          startAnimation = _this$props.startAnimation;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_1__["StaggeredMotion"], {
        defaultStyles: [{
          width: 0,
          height: 20
        }, {
          width: 24,
          height: 60
        }, {
          width: 50,
          height: 90
        }, {
          width: 60,
          height: 60
        }, {
          width: 80,
          height: 180
        }, {
          width: 100,
          height: 100
        }],
        styles: function styles(prevStyles) {
          return [{
            width: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(startAnimation ? 0 : 100),
            height: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(startAnimation ? 0 : 100)
          }, {
            width: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[0].width),
            height: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[0].height)
          }, {
            width: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[1].width),
            height: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[1].height)
          }, {
            width: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[2].width),
            height: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[2].height)
          }, {
            width: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[3].width),
            height: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[3].height)
          }, {
            width: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[4].width),
            height: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[4].height)
          }];
        }
      }, function (styles) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVG, {
          width: styles[0].width,
          height: styles[0].height
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVG, {
          width: styles[1].width,
          height: styles[1].height
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVG, {
          width: styles[2].width,
          height: styles[2].height
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVG, {
          width: styles[3].width,
          height: styles[3].height
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVG, {
          width: styles[4].width,
          height: styles[4].height
        }));
      });
    }
  }]);

  return Particle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Particle);

/***/ })

})
//# sourceMappingURL=animation.js.06b69caa3daa9b1c2773.hot-update.js.map