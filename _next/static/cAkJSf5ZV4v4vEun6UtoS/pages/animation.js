(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(0),o=n.n(r),a=n(38),i=n(48),l=n(3);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){var e=m(["\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 4px;\n  background-color: rgb(130, 181, 198);\n"]);return h=function(){return e},e}function y(){var e=m(["\n  border-radius: 4px;\n  background-color: rgb(240, 240, 232);\n  position: relative;\n  margin: 5px 3px 10px;\n  width: 450px;\n  height: 50px;\n"]);return y=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}"undefined"!=typeof window&&Object(a.a)(window.__NEXT_DATA__.ids);var v=i.a.div(y()),b=i.a.div(h()),g=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=c(t).call(this,e),n=!o||"object"!==u(o)&&"function"!=typeof o?p(r):o,d(p(p(n)),"handleMouseDown",function(){n.setState({open:!n.state.open})}),d(p(p(n)),"handleTouchStart",function(e){e.preventDefault(),n.handleMouseDown()}),n.state={open:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart},"Toggle"),o.a.createElement(l.Motion,{style:{x:Object(l.spring)(this.state.open?400:0,{damping:0,stiffness:2})}},function(e){return o.a.createElement(v,null,o.a.createElement(b,{style:{WebkitTransform:"translate3d(".concat(e.x,"px, 0, 0)"),transform:"translate3d(".concat(e.x,"px, 0, 0)")}}))}))}}])&&s(n.prototype,r),a&&s(n,a),t}()},130:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],c=!1,f=-1;function p(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=l(p);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||c||l(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},131:function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},132:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n(38),l=n(48);n(7);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100vw;\n  min-height: 100vh;\n"]);return d=function(){return e},e}"undefined"!=typeof window&&Object(i.a)(window.__NEXT_DATA__.ids);var h=function(e){return o.a.createElement("svg",{width:e.width,height:e.height},o.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"darkcyan"}))},y=l.a.div(d()),m=function(e){function t(){var e,n,r,o,a,i,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,f=new Array(s),d=0;d<s;d++)f[d]=arguments[d];return r=this,n=!(o=(e=c(t)).call.apply(e,[this].concat(f)))||"object"!==u(o)&&"function"!=typeof o?p(r):o,a=p(p(n)),l={styles:[{width:0,height:20},{width:24,height:60},{width:50,height:90},{width:60,height:60},{width:80,height:180},{width:100,height:100}]},(i="state")in a?Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[i]=l,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=(e.children,e.startAnimation);return o.a.createElement(a.StaggeredMotion,{defaultStyles:[{width:0,height:20},{width:24,height:60},{width:50,height:90},{width:60,height:60},{width:80,height:180},{width:100,height:100}],styles:function(e){return[{width:Object(a.spring)(t?0:100),height:Object(a.spring)(t?0:100)},{width:Object(a.spring)(e[0].width),height:Object(a.spring)(e[0].height)},{width:Object(a.spring)(e[1].width),height:Object(a.spring)(e[1].height)},{width:Object(a.spring)(e[2].width),height:Object(a.spring)(e[2].height)},{width:Object(a.spring)(e[3].width),height:Object(a.spring)(e[3].height)},{width:Object(a.spring)(e[4].width),height:Object(a.spring)(e[4].height)}]}},function(e){return o.a.createElement(y,null,o.a.createElement(h,{width:e[0].width,height:e[0].height}),o.a.createElement(h,{width:e[1].width,height:e[1].height}),o.a.createElement(h,{width:e[2].width,height:e[2].height}),o.a.createElement(h,{width:e[3].width,height:e[3].height}),o.a.createElement(h,{width:e[4].width,height:e[4].height}))})}}])&&s(n.prototype,r),i&&s(n,i),t}();t.default=m},133:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);n(7);t.default=function(){return o.a.createElement("p",null,"second")}},237:function(e,t,n){__NEXT_REGISTER_PAGE("/animation",function(){return e.exports=n(278),{page:e.exports.default}})},238:function(e,t,n){var r={"./First":129,"./First.js":129,"./Particle":132,"./Particle.js":132,"./Second":133,"./Second.js":133};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=238},239:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){return e&&e.__esModule?e:{default:e}}var i=a(n(94)),l=a(n(62)),u=a(n(95)),s=a(n(96)),c=a(n(97)),f=a(n(98)),p=a(n(0)),d=a(n(19)),h=1e3/60,y=function(e){function t(n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=o.state,a=n.currentStyle,i=n.currentVelocity,l=n.lastIdealStyle,u=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"==typeof c&&(t||(t=!0,a=r({},a),i=r({},i),l=r({},l),u=r({},u)),a[s]=c,i[s]=0,l[s]=c,u[s]=0)}t&&o.setState({currentStyle:a,currentVelocity:i,lastIdealStyle:l,lastIdealVelocity:u})},this.startAnimationIfNecessary=function(){o.animationID=c.default(function(e){var t=o.props.style;if(f.default(o.state.currentStyle,t,o.state.currentVelocity))return o.wasAnimating&&o.props.onRest&&o.props.onRest(),o.animationID=null,o.wasAnimating=!1,void(o.accumulatedTime=0);o.wasAnimating=!0;var n=e||s.default(),r=n-o.prevTime;if(o.prevTime=n,o.accumulatedTime=o.accumulatedTime+r,o.accumulatedTime>10*h&&(o.accumulatedTime=0),0===o.accumulatedTime)return o.animationID=null,void o.startAnimationIfNecessary();var a=(o.accumulatedTime-Math.floor(o.accumulatedTime/h)*h)/h,i=Math.floor(o.accumulatedTime/h),l={},c={},p={},d={};for(var y in t)if(Object.prototype.hasOwnProperty.call(t,y)){var m=t[y];if("number"==typeof m)p[y]=m,d[y]=0,l[y]=m,c[y]=0;else{for(var v=o.state.lastIdealStyle[y],b=o.state.lastIdealVelocity[y],g=0;g<i;g++){var w=u.default(h/1e3,v,b,m.val,m.stiffness,m.damping,m.precision);v=w[0],b=w[1]}var O=u.default(h/1e3,v,b,m.val,m.stiffness,m.damping,m.precision),S=O[0],k=O[1];p[y]=v+(S-v)*a,d[y]=b+(k-b)*a,l[y]=v,c[y]=b}}o.animationID=null,o.accumulatedTime-=i*h,o.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:l,lastIdealVelocity:c}),o.unreadPropStyle=null,o.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||l.default(n),o=i.default(r);return{currentStyle:r,currentVelocity:o,lastIdealStyle:r,lastIdealVelocity:o}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=y,e.exports=t.default},240:function(e,t,n){(function(t){(function(){var n,r,o,a,i,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),l=1e9*t.uptime(),i=a-l):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(130))},241:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){return e&&e.__esModule?e:{default:e}}var i=a(n(94)),l=a(n(62)),u=a(n(95)),s=a(n(96)),c=a(n(97)),f=a(n(98)),p=a(n(0)),d=a(n(19)),h=1e3/60;var y=function(e){function t(n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=o.state,n=t.currentStyles,a=t.currentVelocities,i=t.lastIdealStyles,l=t.lastIdealVelocities,u=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,u=!0,n[s]=r({},n[s]),a[s]=r({},a[s]),i[s]=r({},i[s]),l[s]=r({},l[s])),n[s][p]=d,a[s][p]=0,i[s][p]=d,l[s][p]=0)}}u&&o.setState({currentStyles:n,currentVelocities:a,lastIdealStyles:i,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){o.animationID=c.default(function(e){var t=o.props.styles(o.state.lastIdealStyles);if(function(e,t,n){for(var r=0;r<e.length;r++)if(!f.default(e[r],t[r],n[r]))return!1;return!0}(o.state.currentStyles,t,o.state.currentVelocities))return o.animationID=null,void(o.accumulatedTime=0);var n=e||s.default(),r=n-o.prevTime;if(o.prevTime=n,o.accumulatedTime=o.accumulatedTime+r,o.accumulatedTime>10*h&&(o.accumulatedTime=0),0===o.accumulatedTime)return o.animationID=null,void o.startAnimationIfNecessary();for(var a=(o.accumulatedTime-Math.floor(o.accumulatedTime/h)*h)/h,i=Math.floor(o.accumulatedTime/h),l=[],c=[],p=[],d=[],y=0;y<t.length;y++){var m=t[y],v={},b={},g={},w={};for(var O in m)if(Object.prototype.hasOwnProperty.call(m,O)){var S=m[O];if("number"==typeof S)v[O]=S,b[O]=0,g[O]=S,w[O]=0;else{for(var k=o.state.lastIdealStyles[y][O],_=o.state.lastIdealVelocities[y][O],P=0;P<i;P++){var T=u.default(h/1e3,k,_,S.val,S.stiffness,S.damping,S.precision);k=T[0],_=T[1]}var j=u.default(h/1e3,k,_,S.val,S.stiffness,S.damping,S.precision),x=j[0],I=j[1];v[O]=k+(x-k)*a,b[O]=_+(I-_)*a,g[O]=k,w[O]=_}}p[y]=v,d[y]=b,l[y]=g,c[y]=w}o.animationID=null,o.accumulatedTime-=i*h,o.setState({currentStyles:p,currentVelocities:d,lastIdealStyles:l,lastIdealVelocities:c}),o.unreadPropStyles=null,o.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"propTypes",value:{defaultStyles:d.default.arrayOf(d.default.objectOf(d.default.number)),styles:d.default.func.isRequired,children:d.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(l.default),o=r.map(function(e){return i.default(e)});return{currentStyles:r,currentVelocities:o,lastIdealStyles:r,lastIdealVelocities:o}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=y,e.exports=t.default},242:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){return e&&e.__esModule?e:{default:e}}var i=a(n(94)),l=a(n(62)),u=a(n(95)),s=a(n(243)),c=a(n(96)),f=a(n(97)),p=a(n(98)),d=a(n(0)),h=a(n(19)),y=1e3/60;function m(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var o=0;o<r.length;o++)if(r[o].key===e.key)return{key:r[o].key,data:r[o].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function v(e,t,n,r,o,a,l,u,c){for(var f=s.default(r,o,function(e,r){var o=t(r);return null==o?(n({key:r.key,data:r.data}),null):p.default(a[e],o,l[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:o}}),d=[],h=[],y=[],m=[],v=0;v<f.length;v++){for(var b=f[v],g=null,w=0;w<r.length;w++)if(r[w].key===b.key){g=w;break}if(null==g){var O=e(b);d[v]=O,y[v]=O;var S=i.default(b.style);h[v]=S,m[v]=S}else d[v]=a[g],y[v]=u[g],h[v]=l[g],m[v]=c[g]}return[f,d,h,y,m]}var b=function(e){function t(n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=v(o.props.willEnter,o.props.willLeave,o.props.didLeave,o.state.mergedPropsStyles,e,o.state.currentStyles,o.state.currentVelocities,o.state.lastIdealStyles,o.state.lastIdealVelocities),n=t[0],a=t[1],i=t[2],l=t[3],u=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,a[s]=r({},a[s]),i[s]=r({},i[s]),l[s]=r({},l[s]),u[s]=r({},u[s]),n[s]={key:n[s].key,data:n[s].data,style:r({},n[s].style)}),a[s][p]=d,i[s][p]=0,l[s][p]=d,u[s][p]=0,n[s].style[p]=d)}}o.setState({currentStyles:a,currentVelocities:i,mergedPropsStyles:n,lastIdealStyles:l,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){o.unmounting||(o.animationID=f.default(function(e){if(!o.unmounting){var t=o.props.styles,n="function"==typeof t?t(m(o.state.mergedPropsStyles,o.unreadPropStyles,o.state.lastIdealStyles)):t;if(function(e,t,n,r){if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(r[o].key!==t[o].key)return!1;for(o=0;o<r.length;o++)if(!p.default(e[o],t[o].style,n[o]))return!1;return!0}(o.state.currentStyles,n,o.state.currentVelocities,o.state.mergedPropsStyles))return o.animationID=null,void(o.accumulatedTime=0);var r=e||c.default(),a=r-o.prevTime;if(o.prevTime=r,o.accumulatedTime=o.accumulatedTime+a,o.accumulatedTime>10*y&&(o.accumulatedTime=0),0===o.accumulatedTime)return o.animationID=null,void o.startAnimationIfNecessary();for(var i=(o.accumulatedTime-Math.floor(o.accumulatedTime/y)*y)/y,l=Math.floor(o.accumulatedTime/y),s=v(o.props.willEnter,o.props.willLeave,o.props.didLeave,o.state.mergedPropsStyles,n,o.state.currentStyles,o.state.currentVelocities,o.state.lastIdealStyles,o.state.lastIdealVelocities),f=s[0],d=s[1],h=s[2],b=s[3],g=s[4],w=0;w<f.length;w++){var O=f[w].style,S={},k={},_={},P={};for(var T in O)if(Object.prototype.hasOwnProperty.call(O,T)){var j=O[T];if("number"==typeof j)S[T]=j,k[T]=0,_[T]=j,P[T]=0;else{for(var x=b[w][T],I=g[w][T],E=0;E<l;E++){var A=u.default(y/1e3,x,I,j.val,j.stiffness,j.damping,j.precision);x=A[0],I=A[1]}var D=u.default(y/1e3,x,I,j.val,j.stiffness,j.damping,j.precision),M=D[0],C=D[1];S[T]=x+(M-x)*i,k[T]=I+(C-I)*i,_[T]=x,P[T]=I}}b[w]=_,g[w]=P,d[w]=S,h[w]=k}o.animationID=null,o.accumulatedTime-=l*y,o.setState({currentStyles:d,currentVelocities:h,lastIdealStyles:b,lastIdealVelocities:g,mergedPropsStyles:f}),o.unreadPropStyles=null,o.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"propTypes",value:{defaultStyles:h.default.arrayOf(h.default.shape({key:h.default.string.isRequired,data:h.default.any,style:h.default.objectOf(h.default.number).isRequired})),styles:h.default.oneOfType([h.default.func,h.default.arrayOf(h.default.shape({key:h.default.string.isRequired,data:h.default.any,style:h.default.objectOf(h.default.oneOfType([h.default.number,h.default.object])).isRequired}))]).isRequired,children:h.default.func.isRequired,willEnter:h.default.func,willLeave:h.default.func,didLeave:h.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return l.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,o=e.willLeave,a=e.didLeave,u="function"==typeof n?n(t):n,s=void 0;s=null==t?u:t.map(function(e){for(var t=0;t<u.length;t++)if(u[t].key===e.key)return u[t];return e});var c=null==t?u.map(function(e){return l.default(e.style)}):t.map(function(e){return l.default(e.style)}),f=null==t?u.map(function(e){return i.default(e.style)}):t.map(function(e){return i.default(e.style)}),p=v(r,o,a,s,u,c,f,c,f),d=p[0];return{currentStyles:p[1],currentVelocities:p[2],lastIdealStyles:p[3],lastIdealVelocities:p[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(m(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=m(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&d.default.Children.only(t)},t}(d.default.Component);t.default=b,e.exports=t.default},243:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r={},o=0;o<e.length;o++)r[e[o].key]=o;for(var a={},o=0;o<t.length;o++)a[t[o].key]=o;for(var i=[],o=0;o<t.length;o++)i[o]=t[o];for(var o=0;o<e.length;o++)if(!Object.prototype.hasOwnProperty.call(a,e[o].key)){var l=n(o,e[o]);null!=l&&i.push(l)}return i.sort(function(e,n){var o=a[e.key],i=a[n.key],l=r[e.key],u=r[n.key];if(null!=o&&null!=i)return a[e.key]-a[n.key];if(null!=l&&null!=u)return r[e.key]-r[n.key];if(null!=o){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(o<a[c]&&u>r[c])return-1;if(o>a[c]&&u<r[c])return 1}}return 1}for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(i<a[c]&&l>r[c])return 1;if(i>a[c]&&l<r[c])return-1}}return-1})},e.exports=t.default},244:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},l,t,{val:e})};var o,a=n(131),i=(o=a)&&o.__esModule?o:{default:o},l=r({},i.default.noWobble,{precision:.01});e.exports=t.default},245:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},278:function(e,t,n){"use strict";n.r(t);var r=n(13),o=n.n(r),a=n(0),i=n.n(a),l=n(25),u=n(32),s=n.n(u),c=n(66),f=n(37);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=Object(l.withRouter)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,y(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.mountPathArr=window.location.pathname.split("/"),this.mountPathLength=this.mountPathArr.length,this.mountQuery=this.mountPathArr[this.mountPathLength-1]}},{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"col px-0"},c.animationLinks.map(function(t,n){var r=Object(f.upperCaseLink)(t.name),o=e.props.router.asPath.split("/")[e.props.router.asPath.split("/").length-1];console.log(o,"=",t.name,"= query name comp"),console.log("+++++++++++++++++++++++++++++++++++++"),console.log(e.mountQuery,"=",t.name,"= Mountquery name comp");return i.a.createElement(s.a,{key:n,href:"/animation?name=".concat(t.name),as:"".concat("/website","/animation/").concat(t.name)},i.a.createElement("a",null,i.a.createElement("li",{className:o===t.name||e.mountQuery===t.name?"cust__active col nav-link":"col nav-link"},r)))}))}}])&&d(n.prototype,r),o&&d(n,o),t}()),b=n(7);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.default=Object(l.withRouter)(Object(b.a)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,k(t).apply(this,arguments))}var r,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,i.a.Component),r=t,a=[{key:"render",value:function(){var e;if(this.props.data.name){var t=Object(f.upperCaseLink)(this.props.data.name);e=n(238)("./"+t).default}else e=function(){return i.a.createElement("p",null,"Animation Page")};return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(e,null))}}],l=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.query;case 2:return e.t0=e.sent,e.abrupt("return",{data:e.t0});case 4:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){w(a,r,o,i,l,"next",e)}function l(e){w(a,r,o,i,l,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],a&&O(r.prototype,a),l&&O(r,l),t}()))},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var o=n(239);t.Motion=r(o);var a=n(241);t.StaggeredMotion=r(a);var i=n(242);t.TransitionMotion=r(i);var l=n(244);t.spring=r(l);var u=n(131);t.presets=r(u);var s=n(62);t.stripStyle=r(s);var c=n(245);t.reorderKeys=r(c)},48:function(e,t,n){"use strict";var r=n(0),o=n(65),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i=Object(o.a)(function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),l=n(63),u=n.n(l),s=n(49),c=n(12),f=n(11),p=i,d=function(e){return"theme"!==e&&"innerRef"!==e},h=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:d},y=function e(t,n){var o,a,i;void 0!==n&&(o=n.label,i=n.target,a=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var l=t.__emotion_real===t,p=l&&t.__emotion_base||t;"function"!=typeof a&&l&&(a=t.__emotion_forwardProp);var d=a||h(p),y=!d("as");return function(){var m=arguments,v=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&v.push("label:"+o+";"),null==m[0]||void 0===m[0].raw)v.push.apply(v,m);else{v.push(m[0][0]);for(var b=m.length,g=1;g<b;g++)v.push(m[g],m[0][g])}var w=Object(s.c)(function(e,t,n){return Object(r.createElement)(s.b.Consumer,null,function(o){var l=y&&e.as||p,u="",s=[],m=e;if(null==e.theme){for(var b in m={},e)m[b]=e[b];m.theme=o}"string"==typeof e.className&&(u+=Object(c.a)(t.registered,s,e.className));var g=Object(f.a)(v.concat(s),t.registered,m);Object(c.b)(t,g,"string"==typeof l),u+=t.key+"-"+g.name,void 0!==i&&(u+=" "+i);var w=y&&void 0===a?h(l):d,O={};for(var S in e)y&&"as"===S||w(S)&&(O[S]=e[S]);return O.className=u,O.ref=n||e.innerRef,Object(r.createElement)(l,O)})});return w.displayName=void 0!==o?o:"Styled("+("string"==typeof p?p:p.displayName||p.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=p,w.__emotion_styles=v,w.__emotion_forwardProp=a,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(t,r){return e(t,void 0!==r?u()({},n||{},r):n).apply(void 0,v)},w}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){y[e]=y(e)});t.a=y},62:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},94:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},95:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,o,a,i,l){var u=n+(-a*(t-o)+-i*n)*e,s=t+u*e;if(Math.abs(u)<l&&Math.abs(s-o)<l)return r[0]=o,r[1]=0,r;return r[0]=s,r[1]=u,r};var r=[0,0];e.exports=t.default},96:function(e,t,n){(function(t){(function(){var n,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(130))},97:function(e,t,n){(function(t){for(var r=n(240),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",l=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],s=0;!l&&s<a.length;s++)l=o[a[s]+"Request"+i],u=o[a[s]+"Cancel"+i]||o[a[s]+"CancelRequest"+i];if(!l||!u){var c=0,f=0,p=[];l=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,n(90))},98:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var o="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==o)return!1}return!0},e.exports=t.default}},[[237,1,0]]]);