webpackHotUpdate("static/development/pages/animation/particle.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnimationLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationLinks */ "./components/AnimationLinks.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/globals */ "./js/globals.js");
/* harmony import */ var _js_globals__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_globals__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/utils */ "./js/utils.js");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_utils__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  if (props.router.query.name === "contact") {
    console.log(props);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "row header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: "".concat("", "/")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: Object(_js_utils__WEBPACK_IMPORTED_MODULE_5__["activeClass"])("/", props.router.pathname, "col nav-link")
  }, "Go to Home", " "))), _js_globals__WEBPACK_IMPORTED_MODULE_4__["mainLinks"].map(function (p, index) {
    var nameLength = p.name.split("").length;
    var linkName = p.name.split("")[0].toUpperCase() + p.name.split("").splice(1, nameLength).join("");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: index,
      href: "/" + p.name,
      as: "".concat("", "/") + p.name
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: Object(_js_utils__WEBPACK_IMPORTED_MODULE_5__["activeClass"])(props.router.pathname.split("/")[1], p.name, "col nav-link")
    }, linkName)));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnimationLinks__WEBPACK_IMPORTED_MODULE_2__["default"], null), ";");
}));

/***/ })

})
//# sourceMappingURL=particle.js.445077c256fcc53e0632.hot-update.js.map