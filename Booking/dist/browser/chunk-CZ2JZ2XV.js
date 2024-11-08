import{d as R,f as V}from"./chunk-GAL4ENT6.js";var _=R((g,E)=>{"use strict";(function(c,d){typeof g=="object"&&typeof E<"u"?E.exports=d():typeof define=="function"&&define.amd?define(d):(c=c||self,c.Stepper=d())})(g,function(){"use strict";function c(){return c=Object.assign||function(o){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}return o},c.apply(this,arguments)}var d=window.Element.prototype.matches,b=function(n,e){return n.closest(e)},L=function(n,e){return new window.Event(n,e)},m=function(n,e){var t=new window.CustomEvent(n,e);return t};function w(){if(window.Element.prototype.matches||(d=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(b=function(e,t){if(!document.documentElement.contains(e))return null;do{if(d.call(e,t))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null}),(!window.Event||typeof window.Event!="function")&&(L=function(e,t){t=t||{};var i=document.createEvent("Event");return i.initEvent(e,!!t.bubbles,!!t.cancelable),i}),typeof window.CustomEvent!="function"){var o=window.Event.prototype.preventDefault;m=function(e,t){var i=document.createEvent("CustomEvent");return t=t||{bubbles:!1,cancelable:!1,detail:null},i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i.preventDefault=function(){this.cancelable&&(o.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},i}}}w();var y=1e3,r={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade",VERTICAL:"vertical"},u="transitionend",h="bsStepper",f=function(n,e,t,i){var s=n[h];if(!(s._steps[e].classList.contains(r.ACTIVE)||s._stepsContents[e].classList.contains(r.ACTIVE))){var a=m("show.bs-stepper",{cancelable:!0,detail:{from:s._currentIndex,to:e,indexStep:e}});n.dispatchEvent(a);var p=s._steps.filter(function(v){return v.classList.contains(r.ACTIVE)}),l=s._stepsContents.filter(function(v){return v.classList.contains(r.ACTIVE)});a.defaultPrevented||(p.length&&p[0].classList.remove(r.ACTIVE),l.length&&(l[0].classList.remove(r.ACTIVE),!n.classList.contains(r.VERTICAL)&&!s.options.animation&&l[0].classList.remove(r.BLOCK)),C(n,s._steps[e],s._steps,t),I(n,s._stepsContents[e],s._stepsContents,l,i))}},C=function(n,e,t,i){t.forEach(function(a){var p=a.querySelector(i.selectors.trigger);p.setAttribute("aria-selected","false"),n.classList.contains(r.LINEAR)&&p.setAttribute("disabled","disabled")}),e.classList.add(r.ACTIVE);var s=e.querySelector(i.selectors.trigger);s.setAttribute("aria-selected","true"),n.classList.contains(r.LINEAR)&&s.removeAttribute("disabled")},I=function(n,e,t,i,s){var a=n[h],p=t.indexOf(e),l=m("shown.bs-stepper",{cancelable:!0,detail:{from:a._currentIndex,to:p,indexStep:p}});function v(){e.classList.add(r.BLOCK),e.removeEventListener(u,v),n.dispatchEvent(l),s()}if(e.classList.contains(r.FADE)){e.classList.remove(r.NONE);var O=S(e);e.addEventListener(u,v),i.length&&i[0].classList.add(r.NONE),e.classList.add(r.ACTIVE),k(e,O)}else e.classList.add(r.ACTIVE),e.classList.add(r.BLOCK),n.dispatchEvent(l),s()},S=function(n){if(!n)return 0;var e=window.getComputedStyle(n).transitionDuration,t=parseFloat(e);return t?(e=e.split(",")[0],parseFloat(e)*y):0},k=function(n,e){var t=!1,i=5,s=e+i;function a(){t=!0,n.removeEventListener(u,a)}n.addEventListener(u,a),window.setTimeout(function(){t||n.dispatchEvent(L(u)),n.removeEventListener(u,a)},s)},A=function(n,e){e.animation&&n.forEach(function(t){t.classList.add(r.FADE),t.classList.add(r.NONE)})},T=function(){return function(e){e.preventDefault()}},N=function(n){return function(t){t.preventDefault();var i=b(t.target,n.selectors.steps),s=b(i,n.selectors.stepper),a=s[h],p=a._steps.indexOf(i);f(s,p,n,function(){a._currentIndex=p})}},x={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}},D=function(){function o(e,t){var i=this;t===void 0&&(t={}),this._element=e,this._currentIndex=0,this._stepsContents=[],this.options=c({},x,{},t),this.options.selectors=c({},x.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(r.LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(s){return s.hasAttribute("data-target")}).forEach(function(s){i._stepsContents.push(i._element.querySelector(s.getAttribute("data-target")))}),A(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,h,{value:this,writable:!0}),this._steps.length&&f(this._element,this._currentIndex,this.options,function(){})}var n=o.prototype;return n._setLinkListeners=function(){var t=this;this._steps.forEach(function(i){var s=i.querySelector(t.options.selectors.trigger);t.options.linear?(t._clickStepLinearListener=T(t.options),s.addEventListener("click",t._clickStepLinearListener)):(t._clickStepNonLinearListener=N(t.options),s.addEventListener("click",t._clickStepNonLinearListener))})},n.next=function(){var t=this,i=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;f(this._element,i,this.options,function(){t._currentIndex=i})},n.previous=function(){var t=this,i=this._currentIndex-1>=0?this._currentIndex-1:0;f(this._element,i,this.options,function(){t._currentIndex=i})},n.to=function(t){var i=this,s=t-1,a=s>=0&&s<this._steps.length?s:0;f(this._element,a,this.options,function(){i._currentIndex=a})},n.reset=function(){var t=this;f(this._element,0,this.options,function(){t._currentIndex=0})},n.destroy=function(){var t=this;this._steps.forEach(function(i){var s=i.querySelector(t.options.selectors.trigger);t.options.linear?s.removeEventListener("click",t._clickStepLinearListener):s.removeEventListener("click",t._clickStepNonLinearListener)}),this._element[h]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},o}();return D})});var j=V(_());export{_ as a};
