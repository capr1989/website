(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{257:function(e,t,n){__NEXT_REGISTER_PAGE("/post",function(){return e.exports=n(258),{page:e.exports.default}})},258:function(e,t,n){"use strict";n.r(t);var r=n(15),o=n.n(r),u=n(4),a=n(34),i=n(68),c=n.n(i),s=(n(259),n(0)),l=n.n(s);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,y(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,s["Component"]),n=t,r=[{key:"render",value:function(){var e=this.props.post;return l.a.createElement("div",null,l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.body))}}],u=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r,u,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=n.id,e.prev=2,e.next=5,c()("https://jsonplaceholder.typicode.com/posts/"+r);case 5:return a=e.sent,e.next=8,a.json();case 8:u=e.sent,e.next=13;break;case 11:e.prev=11,e.t0=e.catch(2);case 13:return e.abrupt("return",{post:u});case 14:case"end":return e.stop()}},e,this,[[2,11]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var u=e.apply(t,n);function a(e){p(u,r,o,a,i,"next",e)}function i(e){p(u,r,o,a,i,"throw",e)}a(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&d(n.prototype,r),u&&d(n,u),t}();t.default=Object(a.withRouter)(Object(u.a)(b))},259:function(e,t,n){e.exports=n(260)},260:function(e,t,n){"use strict";var r=n(36),o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=k,t.Container=t.default=void 0;var u=o(n(74)),a=o(n(75)),i=o(n(261)),c=o(n(13)),s=o(n(14)),l=o(n(29)),f=o(n(30)),p=o(n(31)),d=o(n(25)),h=r(n(0)),y=o(n(9)),v=n(41),b=n(58),m=function(e){function t(){return(0,c.default)(this,t),(0,l.default)(this,(0,f.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,b.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=k(t);return h.default.createElement(w,null,h.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,a.default)(u.default.mark(function e(t){var n,r,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=m,(0,d.default)(m,"childContextTypes",{headManager:y.default.object,router:y.default.object});var w=function(e){function t(){return(0,c.default)(this,t),(0,l.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=w;var g=(0,v.execOnce)(function(){0});function k(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return g(),r},get pathname(){return g(),t},get asPath(){return g(),n},back:function(){g(),e.back()},push:function(t,n){return g(),e.push(t,n)},pushTo:function(t,n){g();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return g(),e.replace(t,n)},replaceTo:function(t,n){g();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},261:function(e,t,n){var r=n(108);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},68:function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,t.default=r.fetch.bind(r),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}},[[257,1,0]]]);