webpackHotUpdate("static/development/pages/animation.js",{

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
/* harmony import */ var _components_ActiveLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ActiveLink */ "./components/ActiveLink.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n              font-weight: ", ";\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










if (typeof window !== "undefined") {
  Object(emotion__WEBPACK_IMPORTED_MODULE_6__["hydrate"])(window.__NEXT_DATA__.ids);
}

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
      // this.mountPathArr = window.location.pathname.split("/");
      // this.mountPathLength = this.mountPathArr.length;
      // this.mountQuery = this.mountPathArr[this.mountPathLength - 1];
      var node = document.querySelectorAll(".cust__active.col.nav-link");
      var classes = node[0].className; //   .split(" ")
      //   .splice(1, 2)
      //   .join(" ");
      // node[0].className = classes;
      // console.log(node[0].classList);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "col px-0"
      }, _js_globals__WEBPACK_IMPORTED_MODULE_2__["animationLinks"].map(function (p, key) {
        var linkName = Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["upperCaseLink"])(p.name);

        var pathArr = _this.props.router.asPath.split("/");

        var pathLength = _this.props.router.asPath.split("/").length;

        var query = pathArr[pathLength - 1];

        var classCondition = function classCondition() {
          if (_this.props.router.query.name === p.name) {
            return "cust__active col nav-link";
          }

          return "col nav-link";
        };

        var Li = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].li(_templateObject(), function (_ref) {
          var name = _ref.name,
              query = _ref.query;
          return name === query ? "cust__active col nav-link" : "col nav-link";
        });
        console.log(Li);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: key,
          href: "/animation?name=".concat(p.name),
          as: "".concat("", "/animation/").concat(p.name)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Li, null, linkName)));
      }));
    }
  }]);

  return AnimationLinks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)));

/***/ })

})
//# sourceMappingURL=animation.js.fba9227c8acbb72f0d15.hot-update.js.map