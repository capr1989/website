webpackHotUpdate("static/development/pages/animation.js",{

/***/ "./components/animation/Second.js":
/*!****************************************!*\
  !*** ./components/animation/Second.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Second; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MainLayout */ "./components/MainLayout.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_4__);


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
  var data = _taggedTemplateLiteral(["\n  background-color: purple;\n  border-top: 1px solid hotpink;\n  height: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: hotpink;\n  height: 15%;\n  padding: 10px;\n  border-top: 1px solid black;\n  border-right: 1px solid black;\n  border-left: 1px solid black;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: min-content;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






if (typeof window !== "undefined") {
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(window.__NEXT_DATA__.ids);
}

var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var Col = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var Inner = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4(), function (props) {
  props.height;
});

var Second =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Second, _React$Component);

  function Second() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Second);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Second)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false,
      height: 0
    });

    return _this;
  }

  _createClass(Second, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var element = document.querySelector("div > p");

      if (this.state.isOpen) {
        element.style.display = "block";
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.onClick = function () {
        var element = document.querySelector("div > p");
        var openHeight = Object(react_motion__WEBPACK_IMPORTED_MODULE_4__["spring"])(300, {
          precision: 20,
          damping: 60,
          stiffness: 280
        });
        var closeHeight = Object(react_motion__WEBPACK_IMPORTED_MODULE_4__["spring"])(0, {
          precision: 20,
          damping: 60,
          stiffness: 280
        });
        var open = !_this2.state.isOpen;

        if (open) {
          return _this2.setState(function (state, props) {
            return {
              height: openHeight,
              isOpen: !state.isOpen
            };
          });
        } else {
          return _this2.setState(function (state, props) {
            return {
              height: closeHeight,
              isOpen: !state.isOpen
            };
          });
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"], {
        defaultStyle: {
          height: 0
        },
        style: {
          height: this.state.height
        },
        onRest: function onRest() {
          var element = document.querySelector("div > p");

          if (!_this2.state.isOpen) {
            element.style.display = "none";
          }
        }
      }, function (val) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {
          className: "col-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn alert-danger",
          onClick: _this2.onClick
        }, "Toggle")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
          className: "col-12",
          style: {
            height: val.height
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "lorem"
        }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos cupiditate repudiandae distinctio omnis accusamus laudantium quo ipsa veniam officiis exercitationem iusto dolorum, laborum deleniti saepe cum soluta dolorem necessitatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit ab nobis voluptatum iusto rem facere alias quod, quos quae? Fugiat aut adipisci a debitis tempora. Excepturi qui odio sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos cupiditate repudiandae distinctio omnis accusamus laudantium quo ipsa veniam officiis exercitationem iusto dolorum, laborum deleniti saepe cum soluta dolorem necessitatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit ab nobis voluptatum iusto rem facere alias quod, quos quae? Fugiat aut adipisci a debitis tempora. Excepturi qui odio sit.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "data-collapse col-12 p-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "stats"
        }, "Height: ", val.height + "px"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "stats"
        }, "Opened: ", _this2.state.isOpen.toString())));
      }));
    }
  }]);

  return Second;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=animation.js.8af8c0342233a5da133d.hot-update.js.map