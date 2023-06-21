"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7120],{70167:function(t,r,e){e.d(r,{Zo:function(){return f},kt:function(){return y}});var n=e(45721);function o(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){o(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function c(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var a=n.createContext({}),l=function(t){var r=n.useContext(a),e=r;return t&&(e="function"==typeof t?t(r):u(u({},r),t)),e},f=function(t){var r=l(t.components);return n.createElement(a.Provider,{value:r},t.children)},s={inlineCode:"code",wrapper:function(t){var r=t.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(t,r){var e=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,f=c(t,["components","mdxType","originalType","parentName"]),p=l(e),y=o,v=p["".concat(a,".").concat(y)]||p[y]||s[y]||i;return e?n.createElement(v,u(u({ref:r},f),{},{components:e})):n.createElement(v,u({ref:r},f))}));function y(t,r){var e=arguments,o=r&&r.mdxType;if("string"==typeof t||o){var i=e.length,u=new Array(i);u[0]=p;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=t,c.mdxType="string"==typeof t?t:o,u[1]=c;for(var l=2;l<i;l++)u[l]=e[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},94242:function(t,r,e){e.d(r,{j:function(){return d}});e(88809),e(55795),e(95070),e(98082),e(80881),e(77562),e(35578),e(86236),e(85959),e(85393),e(15401),e(80893),e(79162),e(97290),e(94652),e(99459),e(11737),e(47924),e(60009),e(30212),e(6018);var n=e(87962),o=e(32163);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function a(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==i(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===i(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function l(t){return/^https?:\/\//.test(t)}function f(t){var r=function(t){return l(t)?{rel:"noopener external",target:"_blank"}:{}}(t);return c({link:c({href:t},r)},l(t)&&{iconOptions:(0,o.qZ)({ariaHidden:!0,customSize:"1em"})})}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return y(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return y(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function v(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function b(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?v(Object(e),!0).forEach((function(r){h(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function h(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==s(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===s(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function d(t){var r=function(t){var r,e;return{classNames:null!==(r=null==t?void 0:t.classNames)&&void 0!==r?r:[],href:null!==(e=null==t?void 0:t.href)&&void 0!==e?e:""}}(t),e=f(r.href);return b(b({},e),{},{link:b(b({},e.link),n.zW.apply(void 0,["pando-text-link","pando_textLink"].concat(p(r.classNames))))})}},32163:function(t,r,e){e.d(r,{C9:function(){return c},Y1:function(){return f},iB:function(){return s},qZ:function(){return a},wv:function(){return p},ys:function(){return l}});e(55795),e(95070),e(98082),e(80881),e(77562),e(35578),e(86236),e(85959),e(85393),e(15401),e(80893),e(79162),e(97290),e(94652),e(99459),e(11737),e(47924);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){u(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function u(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,r||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===n(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function c(t,r){return"destructive"===t.kind?{iconOptions:a(i({ariaHidden:!0,size:"m"},null==r?void 0:r.iconOptions)),iconWrapper:i({},null==r?void 0:r.iconWrapper)}:{}}function a(t){return i({},t)}function l(t){var r,e,n,o;return{disabled:null!==(r=null==t?void 0:t.disabled)&&void 0!==r&&r,invalid:null!==(e=null==t?void 0:t.invalid)&&void 0!==e&&e,readOnly:null!==(n=null==t?void 0:t.readOnly)&&void 0!==n&&n,required:null!==(o=null==t?void 0:t.required)&&void 0!==o&&o}}function f(t){var r,e;return{classNames:null!==(r=null==t?void 0:t.classNames)&&void 0!==r?r:[],id:null!==(e=null==t?void 0:t.id)&&void 0!==e?e:""}}function s(t){return{id:t.id}}function p(t){return null!=t?t:"Enter text"}},29850:function(t,r,e){const n=e(86521);r.Z=function(t){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"external link",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...t,children:(0,n.jsx)("path",{d:"M14.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.09l-8.476 8.476a.5.5 0 0 0 0 .708l.702.702a.5.5 0 0 0 .708 0L19 6.41V9.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-6ZM18 18H6V6h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V18Z"})})}},86582:function(t,r,e){function n(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?n(Object(e),!0).forEach((function(r){s(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(_){l=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof y?r:y,u=Object.create(i.prototype),c=new E(o||[]);return n(u,"_invoke",{value:j(t,e,c)}),u}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(_){return{type:"throw",arg:_}}}t.wrap=f;var p={};function y(){}function v(){}function b(){}var h={};l(h,u,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(L([])));m&&m!==r&&e.call(m,u)&&(h=m);var g=b.prototype=y.prototype=Object.create(h);function O(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){function o(n,i,u,c){var a=s(t[n],t,i);if("throw"!==a.type){var l=a.arg,f=l.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(a.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function j(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var c=P(u,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var a=s(t,r,e);if("normal"===a.type){if(n=e.done?"completed":"suspendedYield",a.arg===p)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(n="completed",e.method="throw",e.arg=a.arg)}}}function P(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,P(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=b,n(g,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},O(w.prototype),l(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var u=new w(f(r,e,n,o),i);return t.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},O(g),l(g,a,"Generator"),l(g,u,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return u.type="throw",u.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),a=e.call(i,"finallyLoc");if(c&&a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:L(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,r,e,n,o,i,u){try{var c=t[i](u),a=c.value}catch(l){return void e(l)}c.done?r(a):Promise.resolve(a).then(n,o)}function c(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function c(t){u(i,n,o,c,a,"next",t)}function a(t){u(i,n,o,c,a,"throw",t)}c(void 0)}))}}function a(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function l(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function f(t,r,e){return r&&l(t.prototype,r),e&&l(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,r,e){return(r=O(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function p(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&v(t,r)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function v(t,r){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},v(t,r)}function b(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function h(t,r){if(r&&("object"==typeof r||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=y(t);if(r){var o=y(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return h(this,e)}}function m(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;a=!1}else for(;!(a=(n=i.call(e)).done)&&(c.push(n.value),c.length!==r);a=!0);}catch(f){l=!0,o=f}finally{try{if(!a&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return g(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function O(t){var r=function(t,r){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof r?r:String(r)}e.d(r,{Kd:function(){return b},PA:function(){return a},WY:function(){return d},XW:function(){return p},ZQ:function(){return m},Zj:function(){return o},l5:function(){return i},qH:function(){return f},x:function(){return c}})},9641:function(t,r,e){e.d(r,{h:function(){return p}});var n=e(86582),o=e(45721),i=e(94242),u=e(87962),c=e(26793),a=e(29850),l=e(86521),f=["children"];function s(t,r){var e,o=t.children,s=(0,n.Kd)(t,f),p=(0,i.j)({classNames:(0,u.Xg)(s.className),href:null!==(e=t.href)&&void 0!==e?e:""}),y=p.link,v=p.iconOptions;return(0,l.jsxs)("a",(0,n.Zj)((0,n.Zj)((0,n.Zj)({},s),y),{},{ref:r,children:[o,v&&(0,l.jsx)(a.Z,(0,n.Zj)({},(0,c.L)(v)))]}))}var p=(0,o.forwardRef)(s)}}]);