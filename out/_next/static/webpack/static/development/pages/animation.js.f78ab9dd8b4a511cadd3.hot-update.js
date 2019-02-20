webpackHotUpdate("static/development/pages/animation.js",{

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Portal */ "./components/Portal.js");


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




var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "open", function () {
      _this.setState({
        opened: true
      });

      console.log(_this.state.opened);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
      _this.setState({
        opened: false
      });
    });

    _this.state = {
      opened: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: this.open
      }, "Open Modal"), this.state.opened && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Portal__WEBPACK_IMPORTED_MODULE_2__["Portal"], {
        selector: "#modal"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-4024219783" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-4024219783" + " " + "modal"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-4024219783"
      }, "This modal is rendered using", " ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        href: "https://reactjs.org/docs/portals.html",
        className: "jsx-4024219783"
      }, "portals"), "."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: this.close,
        className: "jsx-4024219783"
      }, "Close Modal")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1932196077",
        css: "body{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3NwcmV0dG8vRGVza3RvcC93ZWJzLW1hYy9teS13ZWIvZ2gtcGFnZXMtYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpQyxBQUdtQyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2Nhcmxvc3ByZXR0by9EZXNrdG9wL3dlYnMtbWFjL215LXdlYi9naC1wYWdlcy1hcHAvY29tcG9uZW50cy9Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tIFwiLi9Qb3J0YWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogZmFsc2UgfTtcbiAgfVxuXG4gIG9wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm9wZW5lZCk7XG4gIH07XG5cbiAgY2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub3Blbn0+XG4gICAgICAgICAgT3BlbiBNb2RhbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUub3BlbmVkICYmIChcbiAgICAgICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgVGhpcyBtb2RhbCBpcyByZW5kZXJlZCB1c2luZ3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvcG9ydGFscy5odG1sXCI+cG9ydGFsczwvYT4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuY2xvc2V9PlxuICAgICAgICAgICAgICAgICAgQ2xvc2UgTW9kYWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/carlospretto/Desktop/webs-mac/my-web/gh-pages-app/components/Modal.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "345630115",
        css: ".overlay.jsx-4024219783{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;}.modal.jsx-4024219783{background-color:white;position:absolute;top:10%;right:10%;bottom:10%;left:10%;padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3NwcmV0dG8vRGVza3RvcC93ZWJzLW1hYy9teS13ZWIvZ2gtcGFnZXMtYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEMwQixBQUdrQyxBQVFRLGVBUGEsUUFRbEIsa0JBQ1YsT0FSRixDQVNJLEtBUkYsS0FTRyxHQVJGLFFBU0EsQ0FSRixPQUNULENBUWMsWUFDZCIsImZpbGUiOiIvVXNlcnMvY2FybG9zcHJldHRvL0Rlc2t0b3Avd2Vicy1tYWMvbXktd2ViL2doLXBhZ2VzLWFwcC9jb21wb25lbnRzL01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gXCIuL1BvcnRhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgb3BlbmVkOiBmYWxzZSB9O1xuICB9XG5cbiAgb3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUub3BlbmVkKTtcbiAgfTtcblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vcGVufT5cbiAgICAgICAgICBPcGVuIE1vZGFsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuZWQgJiYgKFxuICAgICAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBUaGlzIG1vZGFsIGlzIHJlbmRlcmVkIHVzaW5ne1wiIFwifVxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9wb3J0YWxzLmh0bWxcIj5wb3J0YWxzPC9hPi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5jbG9zZX0+XG4gICAgICAgICAgICAgICAgICBDbG9zZSBNb2RhbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/carlospretto/Desktop/webs-mac/my-web/gh-pages-app/components/Modal.js */"
      }))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=animation.js.f78ab9dd8b4a511cadd3.hot-update.js.map