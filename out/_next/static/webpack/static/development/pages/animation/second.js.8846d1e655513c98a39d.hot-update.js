webpackHotUpdate("static/development/pages/animation/second.js",{

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
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "col px-0"
      }, _js_globals__WEBPACK_IMPORTED_MODULE_2__["animationLinks"].map(function (p, key) {
        var nameLength = p.name.split("").length;
        var linkName = p.name.split("")[0].toUpperCase() + p.name.split("").splice(1, nameLength).join("");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: key,
          className: Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["activeClass"])(_this.props.router.pathname.split("/")[2], p.name, "nav-link")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/animation/".concat(p.name),
          as: "".concat("", "/animation/").concat(p.name)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, linkName)));
      }));
    }
  }]);

  return AnimationLinks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)));

/***/ }),

/***/ "./node_modules/asn1.js/lib/asn1.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/api.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/buffer.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/node.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/reporter.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/pem.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/pem.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/brorand/index.js":
false,

/***/ "./node_modules/browserify-aes/aes.js":
false,

/***/ "./node_modules/browserify-aes/authCipher.js":
false,

/***/ "./node_modules/browserify-aes/browser.js":
false,

/***/ "./node_modules/browserify-aes/decrypter.js":
false,

/***/ "./node_modules/browserify-aes/encrypter.js":
false,

/***/ "./node_modules/browserify-aes/ghash.js":
false,

/***/ "./node_modules/browserify-aes/incr32.js":
false,

/***/ "./node_modules/browserify-aes/modes/cbc.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb1.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb8.js":
false,

/***/ "./node_modules/browserify-aes/modes/ctr.js":
false,

/***/ "./node_modules/browserify-aes/modes/ecb.js":
false,

/***/ "./node_modules/browserify-aes/modes/index.js":
false,

/***/ "./node_modules/browserify-aes/modes/list.json":
false,

/***/ "./node_modules/browserify-aes/modes/ofb.js":
false,

/***/ "./node_modules/browserify-aes/streamCipher.js":
false,

/***/ "./node_modules/browserify-cipher/browser.js":
false,

/***/ "./node_modules/browserify-des/index.js":
false,

/***/ "./node_modules/browserify-des/modes.js":
false,

/***/ "./node_modules/browserify-rsa/index.js":
false,

/***/ "./node_modules/browserify-sign/algos.js":
false,

/***/ "./node_modules/browserify-sign/browser/algorithms.json":
false,

/***/ "./node_modules/browserify-sign/browser/curves.json":
false,

/***/ "./node_modules/browserify-sign/browser/index.js":
false,

/***/ "./node_modules/browserify-sign/browser/sign.js":
false,

/***/ "./node_modules/browserify-sign/browser/verify.js":
false,

/***/ "./node_modules/buffer-xor/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/cipher-base/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/create-ecdh/browser.js":
false,

/***/ "./node_modules/create-hash/browser.js":
false,

/***/ "./node_modules/create-hash/md5.js":
false,

/***/ "./node_modules/create-hmac/browser.js":
false,

/***/ "./node_modules/create-hmac/legacy.js":
false,

/***/ "./node_modules/crypto-browserify/index.js":
false,

/***/ "./node_modules/des.js/lib/des.js":
false,

/***/ "./node_modules/des.js/lib/des/cbc.js":
false,

/***/ "./node_modules/des.js/lib/des/cipher.js":
false,

/***/ "./node_modules/des.js/lib/des/des.js":
false,

/***/ "./node_modules/des.js/lib/des/ede.js":
false,

/***/ "./node_modules/des.js/lib/des/utils.js":
false,

/***/ "./node_modules/diffie-hellman/browser.js":
false,

/***/ "./node_modules/diffie-hellman/lib/dh.js":
false,

/***/ "./node_modules/diffie-hellman/lib/generatePrime.js":
false,

/***/ "./node_modules/diffie-hellman/lib/primes.json":
false,

/***/ "./node_modules/elliptic/lib/elliptic.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/base.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/edwards.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/mont.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/short.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curves.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/utils.js":
false,

/***/ "./node_modules/elliptic/package.json":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/evp_bytestokey/index.js":
false,

/***/ "./node_modules/hash-base/index.js":
false,

/***/ "./node_modules/hash.js/lib/hash.js":
false,

/***/ "./node_modules/hash.js/lib/hash/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/hmac.js":
false,

/***/ "./node_modules/hash.js/lib/hash/ripemd.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/1.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/224.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/256.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/384.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/512.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/utils.js":
false,

/***/ "./node_modules/hmac-drbg/lib/hmac-drbg.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/indexof/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/md5.js/index.js":
false,

/***/ "./node_modules/miller-rabin/lib/mr.js":
false,

/***/ "./node_modules/minimalistic-assert/index.js":
false,

/***/ "./node_modules/minimalistic-crypto-utils/lib/utils.js":
false,

/***/ "./node_modules/parse-asn1/aesid.json":
false,

/***/ "./node_modules/parse-asn1/asn1.js":
false,

/***/ "./node_modules/parse-asn1/certificate.js":
false,

/***/ "./node_modules/parse-asn1/fixProc.js":
false,

/***/ "./node_modules/parse-asn1/index.js":
false,

/***/ "./node_modules/pbkdf2/browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/async.js":
false,

/***/ "./node_modules/pbkdf2/lib/default-encoding.js":
false,

/***/ "./node_modules/pbkdf2/lib/precondition.js":
false,

/***/ "./node_modules/pbkdf2/lib/sync-browser.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/public-encrypt/browser.js":
false,

/***/ "./node_modules/public-encrypt/mgf.js":
false,

/***/ "./node_modules/public-encrypt/privateDecrypt.js":
false,

/***/ "./node_modules/public-encrypt/publicEncrypt.js":
false,

/***/ "./node_modules/public-encrypt/withPublic.js":
false,

/***/ "./node_modules/public-encrypt/xor.js":
false,

/***/ "./node_modules/randombytes/browser.js":
false,

/***/ "./node_modules/randomfill/browser.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/ripemd160/index.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/sha.js/hash.js":
false,

/***/ "./node_modules/sha.js/index.js":
false,

/***/ "./node_modules/sha.js/sha.js":
false,

/***/ "./node_modules/sha.js/sha1.js":
false,

/***/ "./node_modules/sha.js/sha224.js":
false,

/***/ "./node_modules/sha.js/sha256.js":
false,

/***/ "./node_modules/sha.js/sha384.js":
false,

/***/ "./node_modules/sha.js/sha512.js":
false,

/***/ "./node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ "./node_modules/vm-browserify/index.js":
false,

/***/ 4:
false,

/***/ 5:
false,

/***/ 6:
false,

/***/ 7:
false

})
//# sourceMappingURL=second.js.8846d1e655513c98a39d.hot-update.js.map