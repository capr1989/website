(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{250:function(e,t,n){__NEXT_REGISTER_PAGE("/post",function(){return e.exports=n(251),{page:e.exports.default}})},251:function(e,t,n){"use strict";n.r(t);var r=n(13),o=n.n(r),u=n(7),i=n(27),c=n(48),a=n.n(c),f=n(0),s=n.n(f);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,d(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,f["Component"]),n=t,r=[{key:"render",value:function(){var e=this.props.post;return s.a.createElement("div",null,s.a.createElement("h1",null,e.title),s.a.createElement("p",null,e.body))}}],u=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r,u,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=n.id,e.prev=2,e.next=5,a()("https://jsonplaceholder.typicode.com/posts/"+r);case 5:return i=e.sent,e.next=8,i.json();case 8:u=e.sent,e.next=13;break;case 11:e.prev=11,e.t0=e.catch(2);case 13:return e.abrupt("return",{post:u});case 14:case"end":return e.stop()}},e,this,[[2,11]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var u=e.apply(t,n);function i(e){l(u,r,o,i,c,"next",e)}function c(e){l(u,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&y(n.prototype,r),u&&y(n,u),t}();t.default=Object(i.withRouter)(Object(u.a)(v))},48:function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,t.default=r.fetch.bind(r),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}},[[250,1,0]]]);