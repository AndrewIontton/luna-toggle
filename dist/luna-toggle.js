parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hzwm":[function(require,module,exports) {
!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(n){var t=function(e,t){var r,a;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(r=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a=r.preventDefault,r.preventDefault=function(){a.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(n){this.defaultPrevented=!0}},r};t.prototype=window.Event.prototype,window.CustomEvent=t}}();
},{}],"RZlz":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("custom-event-polyfill");var i=function(){function e(s){t(this,e),this.toggleElement=s,this.state=!1,this.selector=this.toggleElement.getAttribute("data-luna-toggle-target"),this.bodyClass="is-active-".concat(this.selector),this.toggleButtons=document.querySelectorAll('[data-luna-toggle="'.concat(this.selector,'"]')),this.closeButtons=document.querySelectorAll('[data-luna-toggle-close="'.concat(this.selector,'"]')),this.init()}return s(e,[{key:"init",value:function(){var t=this;this.toggleElement.setAttribute("aria-hidden",!this.state);for(var e=0;e<this.toggleButtons.length;e++){var s=this.toggleButtons[e];s.setAttribute("aria-selected",this.state),s.addEventListener("click",function(){return t.toggle()})}for(var i=0;i<this.closeButtons.length;i++){this.closeButtons[i].addEventListener("click",function(){return t.close()})}}},{key:"close",value:function(){this.state=!1;for(var t=0;t<this.toggleButtons.length;t++){var e=this.toggleButtons[t];e.classList.remove("is-active"),e.setAttribute("aria-selected",!1)}document.body.classList.remove(this.bodyClass),this.toggleElement.classList.remove("is-active"),this.toggleElement.setAttribute("aria-hidden",!0),this.triggerEvent("close")}},{key:"toggle",value:function(){this.state=!this.state;for(var t=0;t<this.toggleButtons.length;t++){var e=this.toggleButtons[t];e.classList[this.state?"add":"remove"]("is-active"),e.setAttribute("aria-selected",this.state)}document.body.classList[this.state?"add":"remove"](this.bodyClass),this.toggleElement.classList[this.state?"add":"remove"]("is-active"),this.toggleElement.setAttribute("aria-hidden",!this.state),this.triggerEvent(this.state?"open":"close")}},{key:"triggerEvent",value:function(t){var e=new CustomEvent(t,{bubbles:!0,detail:{toggleClass:this}});this.toggleElement.dispatchEvent(e)}}]),e}();exports.default=i;
},{"custom-event-polyfill":"hzwm"}]},{},["RZlz"], null)
//# sourceMappingURL=/luna-toggle.js.map