webpackHotUpdate("static/development/pages/animation.js",{

/***/ "./components/animation/Staggered.js":
/*!*******************************************!*\
  !*** ./components/animation/Staggered.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Staggered; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
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

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: #eee;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 99px;\n  background-color: hotpink;\n  width: 50px;\n  height: 50px;\n\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Ball = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var Col = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());

if (typeof window !== "undefined") {
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(window.__NEXT_DATA__.ids);
}

var Staggered =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Staggered, _React$Component);

  function Staggered() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Staggered);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Staggered)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      x: 250,
      y: 300
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyles", function (prevStyles) {
      // `prevStyles` is the interpolated value of the last tick
      var endValue = prevStyles.map(function (_, i) {
        return i === 0 ? _this.state : {
          x: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[i - 1].x, presets.gentle),
          y: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[i - 1].y, presets.gentle)
        };
      });
      return endValue;
    });

    return _this;
  }

  _createClass(Staggered, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_1__["StaggeredMotion"], {
        defaultStyles: [{
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }],
        styles: this.getStyles
      }, function (balls) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
          className: "container-fluid"
        }, balls.map(function (_ref, i) {
          var x = _ref.x,
              y = _ref.y;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ball, {
            key: i,
            style: {
              WebkitTransform: "translate3d(".concat(x - 25, "px, ").concat(y - 25, "px, 0)"),
              transform: "translate3d(".concat(x - 25, "px, ").concat(y - 25, "px, 0)"),
              zIndex: balls.length - i
            }
          });
        }));
      }, ")}");
    }
  }]);

  return Staggered;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // <Container className="container-fluid">



{
  /* <Row className="row justify-content-around mod-row align-items-center"> */
}
{
  /* <Col className="col-6 text-center d-flex align-items-center justify-content-center"> */
}

/***/ })

})
//# sourceMappingURL=animation.js.93afc8514668054f8776.hot-update.js.map