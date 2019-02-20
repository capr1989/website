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
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      opened: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "modalStateHandler", function () {
      var modalState = !_this.state.opened;

      _this.setState({
        opened: modalState
      });

      console.log(_this.state.opened);
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: this.modalStateHandler
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
        onClick: this.modalStateHandler,
        className: "jsx-4024219783"
      }, "Close Modal")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1932196077",
        css: "body{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3NwcmV0dG8vRGVza3RvcC93ZWJzLW1hYy9teS13ZWIvZ2gtcGFnZXMtYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JpQyxBQUdtQyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2Nhcmxvc3ByZXR0by9EZXNrdG9wL3dlYnMtbWFjL215LXdlYi9naC1wYWdlcy1hcHAvY29tcG9uZW50cy9Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tIFwiLi9Qb3J0YWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgb3BlbmVkOiBmYWxzZSB9O1xuXG4gIG1vZGFsU3RhdGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsU3RhdGUgPSAhdGhpcy5zdGF0ZS5vcGVuZWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogbW9kYWxTdGF0ZSB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm9wZW5lZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMubW9kYWxTdGF0ZUhhbmRsZXJ9PlxuICAgICAgICAgIE9wZW4gTW9kYWxcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHt0aGlzLnN0YXRlLm9wZW5lZCAmJiAoXG4gICAgICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFRoaXMgbW9kYWwgaXMgcmVuZGVyZWQgdXNpbmd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3BvcnRhbHMuaHRtbFwiPnBvcnRhbHM8L2E+LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm1vZGFsU3RhdGVIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgIENsb3NlIE1vZGFsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMCU7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/carlospretto/Desktop/webs-mac/my-web/gh-pages-app/components/Modal.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "345630115",
        css: ".overlay.jsx-4024219783{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;}.modal.jsx-4024219783{background-color:white;position:absolute;top:10%;right:10%;bottom:10%;left:10%;padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3NwcmV0dG8vRGVza3RvcC93ZWJzLW1hYy9teS13ZWIvZ2gtcGFnZXMtYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0MwQixBQUdrQyxBQVFRLGVBUGEsUUFRbEIsa0JBQ1YsT0FSRixDQVNJLEtBUkYsS0FTRyxHQVJGLFFBU0EsQ0FSRixPQUNULENBUWMsWUFDZCIsImZpbGUiOiIvVXNlcnMvY2FybG9zcHJldHRvL0Rlc2t0b3Avd2Vicy1tYWMvbXktd2ViL2doLXBhZ2VzLWFwcC9jb21wb25lbnRzL01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gXCIuL1BvcnRhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBvcGVuZWQ6IGZhbHNlIH07XG5cbiAgbW9kYWxTdGF0ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxTdGF0ZSA9ICF0aGlzLnN0YXRlLm9wZW5lZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBtb2RhbFN0YXRlIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUub3BlbmVkKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5tb2RhbFN0YXRlSGFuZGxlcn0+XG4gICAgICAgICAgT3BlbiBNb2RhbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUub3BlbmVkICYmIChcbiAgICAgICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgVGhpcyBtb2RhbCBpcyByZW5kZXJlZCB1c2luZ3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvcG9ydGFscy5odG1sXCI+cG9ydGFsczwvYT4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMubW9kYWxTdGF0ZUhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgICAgQ2xvc2UgTW9kYWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/carlospretto/Desktop/webs-mac/my-web/gh-pages-app/components/Modal.js */"
      }))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=animation.js.84a965d6c20bd164e8b0.hot-update.js.map