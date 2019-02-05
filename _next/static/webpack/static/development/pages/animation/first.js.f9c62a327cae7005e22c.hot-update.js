webpackHotUpdate("static/development/pages/animation/first.js",{

/***/ "./components/AnimationLinks.js":
/*!**************************************!*\
  !*** ./components/AnimationLinks.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/globals */ "./js/globals.js");
/* harmony import */ var _js_globals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_globals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/utils */ "./js/utils.js");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_utils__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnimationLinks, _React$Component);

  function AnimationLinks() {
    _classCallCheck(this, AnimationLinks);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnimationLinks).apply(this, arguments));
  }

  _createClass(AnimationLinks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.query, "qqq");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "col px-0"
      }, _js_globals__WEBPACK_IMPORTED_MODULE_2__["animationLinks"].map(function (p, key) {
        var pathArr = _this.props.router.pathname.split("/");

        var query = pathArr[pathArr.length - 1];
        var nameLength = p.name.split("").length;
        var linkName = p.name.split("")[0].toUpperCase() + p.name.split("").splice(1, nameLength).join("");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: key,
          href: "/animation/".concat(p.name),
          as: "".concat("", "/animation/").concat(p.name)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: query === p.name ? "cust__active col nav-link" : "col nav-link"
        }, linkName)));
      }));
    }
  }]);

  return AnimationLinks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)));

/***/ })

})
//# sourceMappingURL=first.js.f9c62a327cae7005e22c.hot-update.js.map