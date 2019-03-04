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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: transparent;\n  border-top: 1px solid black;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 99px;\n  background-color: hotpink;\n  width: 50px;\n  height: 50px;\n  -webkit-box-shadow: 10px 10px 36px 1px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 10px 10px 36px 1px rgba(0, 0, 0, 0.2);\n  box-shadow: 10px 10px 36px 1px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  border: 1px solid honeydew;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Ball = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2()); // const Col = styled.div``;
// const Row = styled.div``;
// if (typeof window !== "undefined") {
//   hydrate(window.__NEXT_DATA__.ids);
// }
// export default class Staggered extends React.Component {
//   state = { x: 250, y: 300 };
//   getStyles = prevStyles => {
//     // `prevStyles` is the interpolated value of the last tick
//     const endValue = prevStyles.map((_, i) => {
//       return i === 0
//         ? this.state
//         : {
//             x: spring(prevStyles[i - 1].x),
//             y: spring(prevStyles[i - 1].y)
//           };
//     });
//     return endValue;
//   };
//   render() {
//     return (
//       <StaggeredMotion
//         defaultStyles={[
//           { x: 0, y: 0 },
//           { x: 0, y: 0 },
//           { x: 0, y: 0 },
//           { x: 0, y: 0 },
//           { x: 0, y: 0 }
//         ]}
//         styles={this.getStyles}
//       >
//         {balls => (
//           <Container className="container-fluid">
//             <Row className="row justify-content-around mod-row align-items-center">
//               <Col className="col-6 text-center d-flex align-items-center justify-content-center">
//                 {balls.map(({ x, y }, i) => (
//                   <Ball
//                     key={i}
//                     style={{
//                       WebkitTransform: `translate3d(${x - 25}px, ${y -
//                         25}px, 0)`,
//                       transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
//                       zIndex: balls.length - i
//                     }}
//                   />
//                 ))}
//               </Col>
//             </Row>
//           </Container>
//         )}
//         )}
//       </StaggeredMotion>
//     );
//   }
// }
// <Container className="container-fluid">

{
  /* <Row className="row justify-content-around mod-row align-items-center"> */
}
{
  /* <Col className="col-6 text-center d-flex align-items-center justify-content-center"> */
}

if (typeof window !== "undefined") {
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(window.__NEXT_DATA__.ids);
}

var Staggered =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Staggered, _React$Component);

  function Staggered(props) {
    var _this;

    _classCallCheck(this, Staggered);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Staggered).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isMounted", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseMove", function (_ref) {
      var x = _ref.pageX,
          y = _ref.pageY;

      _this.setState({
        x: x,
        y: y
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchMove", function (_ref2) {
      var touches = _ref2.touches;

      _this.handleMouseMove(touches[0]);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyles", function (prevStyles) {
      // `prevStyles` is the interpolated value of the last tick
      var endValue = prevStyles.map(function (_, i) {
        return i === 0 ? _this.state : {
          x: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[i - 1].x, {
            stiffness: 120,
            damping: 14
          }),
          y: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(prevStyles[i - 1].y, {
            stiffness: 120,
            damping: 14
          })
        };
      });
      return endValue;
    });

    _this.state = {
      x: 250,
      y: 300
    };
    return _this;
  }

  _createClass(Staggered, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isMounted = true;

      if (this.isMounted) {
        window.addEventListener("mousemove", this.handleMouseMove);
        window.addEventListener("touchmove", this.handleTouchMove);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
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
        }, {
          x: 0,
          y: 0
        }],
        styles: this.getStyles
      }, function (balls) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
          className: "container-fluid"
        }, balls.map(function (_ref3, i) {
          var x = _ref3.x,
              y = _ref3.y;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ball, {
            key: i,
            style: {
              WebkitTransform: "translate3d(".concat(x - 25, "px, ").concat(y - 25, "px, 0)"),
              transform: "translate3d(".concat(x - 25, "px, ").concat(y - 25, "px, 0)"),
              zIndex: balls.length - i
            }
          });
        }));
      });
    }
  }]);

  return Staggered;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=animation.js.a15c5a5ee08593eabce0.hot-update.js.map