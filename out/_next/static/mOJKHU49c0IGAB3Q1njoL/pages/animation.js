(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(0),a=n.n(r),o=n(38),i=n(48),l=n(3);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){var e=m(["\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 4px;\n  background-color: rgb(130, 181, 198);\n"]);return y=function(){return e},e}function h(){var e=m(["\n  border-radius: 4px;\n  background-color: rgb(240, 240, 232);\n  position: relative;\n  margin: 5px 3px 10px;\n  width: 450px;\n  height: 50px;\n"]);return h=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}"undefined"!=typeof window&&Object(o.a)(window.__NEXT_DATA__.ids);var v=i.a.div(h()),b=i.a.div(y()),g=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=c(t).call(this,e),n=!a||"object"!==u(a)&&"function"!=typeof a?p(r):a,d(p(p(n)),"handleMouseDown",function(){n.setState({open:!n.state.open})}),d(p(p(n)),"handleTouchStart",function(e){e.preventDefault(),n.handleMouseDown()}),n.state={open:!1},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart},"Toggle"),a.a.createElement(l.Motion,{style:{x:Object(l.spring)(this.state.open?400:0,{damping:0,stiffness:2})}},function(e){return a.a.createElement(v,null,a.a.createElement(b,{style:{WebkitTransform:"translate3d(".concat(e.x,"px, 0, 0)"),transform:"translate3d(".concat(e.x,"px, 0, 0)")}}))}))}}])&&s(n.prototype,r),o&&s(n,o),t}()},130:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],c=!1,f=-1;function p(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=l(p);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new y(e,t)),1!==s.length||c||l(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},131:function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n(38),l=n(48);n(7);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100vw;\n  min-height: 100vh;\n"]);return d=function(){return e},e}"undefined"!=typeof window&&Object(i.a)(window.__NEXT_DATA__.ids);var y=function(e){return a.a.createElement("svg",{width:e.width,height:e.height},a.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"darkcyan"}))},h=l.a.div(d()),m=function(e){function t(){var e,n,r,a,o,i,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,f=new Array(s),d=0;d<s;d++)f[d]=arguments[d];return r=this,n=!(a=(e=c(t)).call.apply(e,[this].concat(f)))||"object"!==u(a)&&"function"!=typeof a?p(r):a,o=p(p(n)),l={styles:[{width:0,height:20},{width:24,height:60},{width:50,height:90},{width:60,height:60},{width:80,height:180},{width:100,height:100}]},(i="state")in o?Object.defineProperty(o,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[i]=l,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=(e.children,e.startAnimation);return a.a.createElement(o.StaggeredMotion,{defaultStyles:[{width:0,height:20},{width:24,height:60},{width:50,height:90},{width:60,height:60},{width:80,height:180},{width:100,height:100}],styles:function(e){return[{width:Object(o.spring)(t?0:100),height:Object(o.spring)(t?0:100)},{width:Object(o.spring)(e[0].width),height:Object(o.spring)(e[0].height)},{width:Object(o.spring)(e[1].width),height:Object(o.spring)(e[1].height)},{width:Object(o.spring)(e[2].width),height:Object(o.spring)(e[2].height)},{width:Object(o.spring)(e[3].width),height:Object(o.spring)(e[3].height)},{width:Object(o.spring)(e[4].width),height:Object(o.spring)(e[4].height)}]}},function(e){return a.a.createElement(h,null,a.a.createElement(y,{width:e[0].width,height:e[0].height}),a.a.createElement(y,{width:e[1].width,height:e[1].height}),a.a.createElement(y,{width:e[2].width,height:e[2].height}),a.a.createElement(y,{width:e[3].width,height:e[3].height}),a.a.createElement(y,{width:e[4].width,height:e[4].height}))})}}])&&s(n.prototype,r),i&&s(n,i),t}();t.default=m},133:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(7);t.default=function(){return a.a.createElement("p",null,"second")}},237:function(e,t,n){__NEXT_REGISTER_PAGE("/animation",function(){return e.exports=n(278),{page:e.exports.default}})},238:function(e,t,n){var r={"./First":129,"./First.js":129,"./Particle":132,"./Particle.js":132,"./Second":133,"./Second.js":133};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=238},239:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var i=o(n(94)),l=o(n(62)),u=o(n(95)),s=o(n(96)),c=o(n(97)),f=o(n(98)),p=o(n(0)),d=o(n(19)),y=1e3/60,h=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=a.state,o=n.currentStyle,i=n.currentVelocity,l=n.lastIdealStyle,u=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"==typeof c&&(t||(t=!0,o=r({},o),i=r({},i),l=r({},l),u=r({},u)),o[s]=c,i[s]=0,l[s]=c,u[s]=0)}t&&a.setState({currentStyle:o,currentVelocity:i,lastIdealStyle:l,lastIdealVelocity:u})},this.startAnimationIfNecessary=function(){a.animationID=c.default(function(e){var t=a.props.style;if(f.default(a.state.currentStyle,t,a.state.currentVelocity))return a.wasAnimating&&a.props.onRest&&a.props.onRest(),a.animationID=null,a.wasAnimating=!1,void(a.accumulatedTime=0);a.wasAnimating=!0;var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();var o=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,i=Math.floor(a.accumulatedTime/y),l={},c={},p={},d={};for(var h in t)if(Object.prototype.hasOwnProperty.call(t,h)){var m=t[h];if("number"==typeof m)p[h]=m,d[h]=0,l[h]=m,c[h]=0;else{for(var v=a.state.lastIdealStyle[h],b=a.state.lastIdealVelocity[h],g=0;g<i;g++){var w=u.default(y/1e3,v,b,m.val,m.stiffness,m.damping,m.precision);v=w[0],b=w[1]}var O=u.default(y/1e3,v,b,m.val,m.stiffness,m.damping,m.precision),S=O[0],k=O[1];p[h]=v+(S-v)*o,d[h]=b+(k-b)*o,l[h]=v,c[h]=b}}a.animationID=null,a.accumulatedTime-=i*y,a.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:l,lastIdealVelocity:c}),a.unreadPropStyle=null,a.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||l.default(n),a=i.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=h,e.exports=t.default},240:function(e,t,n){(function(t){(function(){var n,r,a,o,i,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),l=1e9*t.uptime(),i=o-l):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n(130))},241:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var i=o(n(94)),l=o(n(62)),u=o(n(95)),s=o(n(96)),c=o(n(97)),f=o(n(98)),p=o(n(0)),d=o(n(19)),y=1e3/60;var h=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=a.state,n=t.currentStyles,o=t.currentVelocities,i=t.lastIdealStyles,l=t.lastIdealVelocities,u=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,u=!0,n[s]=r({},n[s]),o[s]=r({},o[s]),i[s]=r({},i[s]),l[s]=r({},l[s])),n[s][p]=d,o[s][p]=0,i[s][p]=d,l[s][p]=0)}}u&&a.setState({currentStyles:n,currentVelocities:o,lastIdealStyles:i,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){a.animationID=c.default(function(e){var t=a.props.styles(a.state.lastIdealStyles);if(function(e,t,n){for(var r=0;r<e.length;r++)if(!f.default(e[r],t[r],n[r]))return!1;return!0}(a.state.currentStyles,t,a.state.currentVelocities))return a.animationID=null,void(a.accumulatedTime=0);var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var o=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,i=Math.floor(a.accumulatedTime/y),l=[],c=[],p=[],d=[],h=0;h<t.length;h++){var m=t[h],v={},b={},g={},w={};for(var O in m)if(Object.prototype.hasOwnProperty.call(m,O)){var S=m[O];if("number"==typeof S)v[O]=S,b[O]=0,g[O]=S,w[O]=0;else{for(var k=a.state.lastIdealStyles[h][O],_=a.state.lastIdealVelocities[h][O],T=0;T<i;T++){var P=u.default(y/1e3,k,_,S.val,S.stiffness,S.damping,S.precision);k=P[0],_=P[1]}var j=u.default(y/1e3,k,_,S.val,S.stiffness,S.damping,S.precision),x=j[0],I=j[1];v[O]=k+(x-k)*o,b[O]=_+(I-_)*o,g[O]=k,w[O]=_}}p[h]=v,d[h]=b,l[h]=g,c[h]=w}a.animationID=null,a.accumulatedTime-=i*y,a.setState({currentStyles:p,currentVelocities:d,lastIdealStyles:l,lastIdealVelocities:c}),a.unreadPropStyles=null,a.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:d.default.arrayOf(d.default.objectOf(d.default.number)),styles:d.default.func.isRequired,children:d.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(l.default),a=r.map(function(e){return i.default(e)});return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=h,e.exports=t.default},242:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var i=o(n(94)),l=o(n(62)),u=o(n(95)),s=o(n(243)),c=o(n(96)),f=o(n(97)),p=o(n(98)),d=o(n(0)),y=o(n(19)),h=1e3/60;function m(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var a=0;a<r.length;a++)if(r[a].key===e.key)return{key:r[a].key,data:r[a].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function v(e,t,n,r,a,o,l,u,c){for(var f=s.default(r,a,function(e,r){var a=t(r);return null==a?(n({key:r.key,data:r.data}),null):p.default(o[e],a,l[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:a}}),d=[],y=[],h=[],m=[],v=0;v<f.length;v++){for(var b=f[v],g=null,w=0;w<r.length;w++)if(r[w].key===b.key){g=w;break}if(null==g){var O=e(b);d[v]=O,h[v]=O;var S=i.default(b.style);y[v]=S,m[v]=S}else d[v]=o[g],h[v]=u[g],y[v]=l[g],m[v]=c[g]}return[f,d,y,h,m]}var b=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,e,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),n=t[0],o=t[1],i=t[2],l=t[3],u=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,o[s]=r({},o[s]),i[s]=r({},i[s]),l[s]=r({},l[s]),u[s]=r({},u[s]),n[s]={key:n[s].key,data:n[s].data,style:r({},n[s].style)}),o[s][p]=d,i[s][p]=0,l[s][p]=d,u[s][p]=0,n[s].style[p]=d)}}a.setState({currentStyles:o,currentVelocities:i,mergedPropsStyles:n,lastIdealStyles:l,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){a.unmounting||(a.animationID=f.default(function(e){if(!a.unmounting){var t=a.props.styles,n="function"==typeof t?t(m(a.state.mergedPropsStyles,a.unreadPropStyles,a.state.lastIdealStyles)):t;if(function(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(a=0;a<r.length;a++)if(!p.default(e[a],t[a].style,n[a]))return!1;return!0}(a.state.currentStyles,n,a.state.currentVelocities,a.state.mergedPropsStyles))return a.animationID=null,void(a.accumulatedTime=0);var r=e||c.default(),o=r-a.prevTime;if(a.prevTime=r,a.accumulatedTime=a.accumulatedTime+o,a.accumulatedTime>10*h&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/h)*h)/h,l=Math.floor(a.accumulatedTime/h),s=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,n,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),f=s[0],d=s[1],y=s[2],b=s[3],g=s[4],w=0;w<f.length;w++){var O=f[w].style,S={},k={},_={},T={};for(var P in O)if(Object.prototype.hasOwnProperty.call(O,P)){var j=O[P];if("number"==typeof j)S[P]=j,k[P]=0,_[P]=j,T[P]=0;else{for(var x=b[w][P],I=g[w][P],E=0;E<l;E++){var D=u.default(h/1e3,x,I,j.val,j.stiffness,j.damping,j.precision);x=D[0],I=D[1]}var A=u.default(h/1e3,x,I,j.val,j.stiffness,j.damping,j.precision),M=A[0],C=A[1];S[P]=x+(M-x)*i,k[P]=I+(C-I)*i,_[P]=x,T[P]=I}}b[w]=_,g[w]=T,d[w]=S,y[w]=k}a.animationID=null,a.accumulatedTime-=l*h,a.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:b,lastIdealVelocities:g,mergedPropsStyles:f}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.number).isRequired})),styles:y.default.oneOfType([y.default.func,y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.oneOfType([y.default.number,y.default.object])).isRequired}))]).isRequired,children:y.default.func.isRequired,willEnter:y.default.func,willLeave:y.default.func,didLeave:y.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return l.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,a=e.willLeave,o=e.didLeave,u="function"==typeof n?n(t):n,s=void 0;s=null==t?u:t.map(function(e){for(var t=0;t<u.length;t++)if(u[t].key===e.key)return u[t];return e});var c=null==t?u.map(function(e){return l.default(e.style)}):t.map(function(e){return l.default(e.style)}),f=null==t?u.map(function(e){return i.default(e.style)}):t.map(function(e){return i.default(e.style)}),p=v(r,a,o,s,u,c,f,c,f),d=p[0];return{currentStyles:p[1],currentVelocities:p[2],lastIdealStyles:p[3],lastIdealVelocities:p[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(m(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=m(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&d.default.Children.only(t)},t}(d.default.Component);t.default=b,e.exports=t.default},243:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;for(var o={},a=0;a<t.length;a++)o[t[a].key]=a;for(var i=[],a=0;a<t.length;a++)i[a]=t[a];for(var a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(o,e[a].key)){var l=n(a,e[a]);null!=l&&i.push(l)}return i.sort(function(e,n){var a=o[e.key],i=o[n.key],l=r[e.key],u=r[n.key];if(null!=a&&null!=i)return o[e.key]-o[n.key];if(null!=l&&null!=u)return r[e.key]-r[n.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(a<o[c]&&u>r[c])return-1;if(a>o[c]&&u<r[c])return 1}}return 1}for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(i<o[c]&&l>r[c])return 1;if(i>o[c]&&l<r[c])return-1}}return-1})},e.exports=t.default},244:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},l,t,{val:e})};var a,o=n(131),i=(a=o)&&a.__esModule?a:{default:a},l=r({},i.default.noWobble,{precision:.01});e.exports=t.default},245:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},278:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n.n(r),o=n(0),i=n.n(o),l=n(25),u=n(32),s=n.n(u),c=n(66),f=n(37);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=Object(l.withRouter)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,h(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"col px-0"},c.animationLinks.map(function(t,n){var r=Object(f.upperCaseLink)(t.name),a=e.props.router.asPath.split("/")[e.props.router.asPath.split("/").length-1];return i.a.createElement(s.a,{key:n,href:"/animation?name=".concat(t.name),as:"".concat("/website","/animation/").concat(t.name)},i.a.createElement("a",null,i.a.createElement("li",{className:a===t.name?"cust__active col nav-link":"col nav-link"},r)))}))}}])&&d(n.prototype,r),a&&d(n,a),t}()),b=n(7);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.default=Object(l.withRouter)(Object(b.a)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,k(t).apply(this,arguments))}var r,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,i.a.Component),r=t,o=[{key:"render",value:function(){var e;if(this.props.data.name){var t=Object(f.upperCaseLink)(this.props.data.name);e=n(238)("./"+t).default}else e=function(){return i.a.createElement("p",null,"Animation Page")};return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(e,null))}}],l=[{key:"getInitialProps",value:function(){var e,t=(e=a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.query;case 2:return e.t0=e.sent,e.abrupt("return",{data:e.t0});case 4:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){w(o,r,a,i,l,"next",e)}function l(e){w(o,r,a,i,l,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],o&&O(r.prototype,o),l&&O(r,l),t}()))},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n(239);t.Motion=r(a);var o=n(241);t.StaggeredMotion=r(o);var i=n(242);t.TransitionMotion=r(i);var l=n(244);t.spring=r(l);var u=n(131);t.presets=r(u);var s=n(62);t.stripStyle=r(s);var c=n(245);t.reorderKeys=r(c)},48:function(e,t,n){"use strict";var r=n(0),a=n(65),o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i=Object(a.a)(function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),l=n(63),u=n.n(l),s=n(49),c=n(12),f=n(11),p=i,d=function(e){return"theme"!==e&&"innerRef"!==e},y=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:d},h=function e(t,n){var a,o,i;void 0!==n&&(a=n.label,i=n.target,o=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var l=t.__emotion_real===t,p=l&&t.__emotion_base||t;"function"!=typeof o&&l&&(o=t.__emotion_forwardProp);var d=o||y(p),h=!d("as");return function(){var m=arguments,v=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&v.push("label:"+a+";"),null==m[0]||void 0===m[0].raw)v.push.apply(v,m);else{v.push(m[0][0]);for(var b=m.length,g=1;g<b;g++)v.push(m[g],m[0][g])}var w=Object(s.c)(function(e,t,n){return Object(r.createElement)(s.b.Consumer,null,function(a){var l=h&&e.as||p,u="",s=[],m=e;if(null==e.theme){for(var b in m={},e)m[b]=e[b];m.theme=a}"string"==typeof e.className&&(u+=Object(c.a)(t.registered,s,e.className));var g=Object(f.a)(v.concat(s),t.registered,m);Object(c.b)(t,g,"string"==typeof l),u+=t.key+"-"+g.name,void 0!==i&&(u+=" "+i);var w=h&&void 0===o?y(l):d,O={};for(var S in e)h&&"as"===S||w(S)&&(O[S]=e[S]);return O.className=u,O.ref=n||e.innerRef,Object(r.createElement)(l,O)})});return w.displayName=void 0!==a?a:"Styled("+("string"==typeof p?p:p.displayName||p.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=p,w.__emotion_styles=v,w.__emotion_forwardProp=o,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(t,r){return e(t,void 0!==r?u()({},n||{},r):n).apply(void 0,v)},w}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){h[e]=h(e)});t.a=h},62:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},94:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},95:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a,o,i,l){var u=n+(-o*(t-a)+-i*n)*e,s=t+u*e;if(Math.abs(u)<l&&Math.abs(s-a)<l)return r[0]=a,r[1]=0,r;return r[0]=s,r[1]=u,r};var r=[0,0];e.exports=t.default},96:function(e,t,n){(function(t){(function(){var n,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n(130))},97:function(e,t,n){(function(t){for(var r=n(240),a="undefined"==typeof window?t:window,o=["moz","webkit"],i="AnimationFrame",l=a["request"+i],u=a["cancel"+i]||a["cancelRequest"+i],s=0;!l&&s<o.length;s++)l=a[o[s]+"Request"+i],u=a[o[s]+"Cancel"+i]||a[o[s]+"CancelRequest"+i];if(!l||!u){var c=0,f=0,p=[];l=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return l.call(a,e)},e.exports.cancel=function(){u.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,n(90))},98:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var a="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0},e.exports=t.default}},[[237,1,0]]]);