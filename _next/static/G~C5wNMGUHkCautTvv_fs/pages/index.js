(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{214:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(215),{page:e.exports.default}})},215:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(25),o=n.n(r),u=n(31),i=n(41),c=n.n(i),a=n(0),s=n.n(a),f=n(40),p=n.n(f);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,h(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){var e=this.props.data;return s.a.createElement(u.a,null,s.a.createElement("ul",null,e.map(function(e){return s.a.createElement(c.a,{key:e.id,href:"/post?id=".concat(e.id),as:"".concat("/website","/post/").concat(e.id)},s.a.createElement("a",null,s.a.createElement("li",{key:e.id},e.title)))})),"/website")}}],i=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()("https://jsonplaceholder.typicode.com/posts");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.next=14,t.splice(0,10);case 14:return e.t1=e.sent,e.abrupt("return",{data:e.t1});case 16:case"end":return e.stop()}},e,this,[[0,9]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var u=e.apply(t,n);function i(e){y(u,r,o,i,c,"next",e)}function c(e){y(u,r,o,i,c,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}()}],r&&d(n.prototype,r),i&&d(n,i),t}()},25:function(e,t,n){e.exports=n(69)},40:function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,t.default=r.fetch.bind(r),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}},[[214,1,0]]]);