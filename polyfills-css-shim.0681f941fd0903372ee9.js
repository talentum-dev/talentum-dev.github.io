(self.webpackChunktraining_app=self.webpackChunktraining_app||[]).push([[843],{6831:()=>{var v=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function T(t){return S(function(t){var e=new v;e.start=0,e.end=t.length;for(var r=e,n=0,s=t.length;n<s;n++)if(t[n]===L){r.rules||(r.rules=[]);var o=r,i=o.rules[o.rules.length-1]||null;(r=new v).start=n+1,r.parent=o,r.previous=i,o.rules.push(r)}else t[n]===N&&(r.end=n+1,r=r.parent||e);return e}(t=function(t){return t.replace(l.comments,"").replace(l.port,"")}(t)),t)}function S(t,e){var r=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){r=(r=(r=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){for(var e=arguments[1],r=6-e.length;r--;)e="0"+e;return"\\"+e})}(r=e.substring(t.previous?t.previous.end:t.parent.start,t.start-1))).replace(l.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var s=t.parsedSelector=t.selector=r.trim();t.atRule=0===s.indexOf(U),t.atRule?0===s.indexOf(V)?t.type=u.MEDIA_RULE:s.match(l.keyframesRule)&&(t.type=u.KEYFRAMES_RULE,t.keyframesName=t.selector.split(l.multipleSpaces).pop()):t.type=0===s.indexOf(O)?u.MIXIN_RULE:u.STYLE_RULE}var o=t.rules;if(o)for(var i=0,a=o.length,p=void 0;i<a&&(p=o[i]);i++)S(p,e);return t}var u={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},L="{",N="}",l={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},O="--",V="@media",U="@";function g(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var G=/\bvar\(/,D=/\B--[\w-]+\s*:/,P=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,F=/^[\t ]+\n/gm;function H(t,e,r){var n=function(t,e){var r=g(G,t,e);if(!r)return null;var n=function(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}(t,r.start),s=t.substring(r.end,n-1).split(","),o=s[0],i=s.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:i.length>0?i.join(",").trim():void 0}}(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,o=null!=n.fallback?f(n.fallback):void 0;return e.push(t.substring(r,n.start),function(i){return function(t,e,r){return t[e]?t[e]:r?c(r,t):""}(i,s,o)}),n.end}function c(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function X(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var o=t[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function f(t){var e=0;t=function(t){for(var e="",r=0;;){var n=g(D,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=X(t,s)}return e}(t=t.replace(P,"")).replace(F,"");for(var r=[];e<t.length;)e=H(t,r,e);return r}function y(t){var e={};t.forEach(function(i){i.declarations.forEach(function(a){e[a.prop]=a.value})});for(var r={},n=Object.entries(e),s=function(i){var a=!1;if(n.forEach(function(p){var _=p[0],M=c(p[1],r);M!==r[_]&&(r[_]=M,a=!0)}),!a)return"break"},o=0;o<10&&"break"!==s();o++);return r}function q(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter(function(n){return n.type===u.STYLE_RULE}).forEach(function(n){var s=function(t){for(var e,r=[];e=z.exec(t.trim());){var n=Z(e[2]),s=n.value,o=n.important;r.push({prop:e[1].trim(),value:f(s),important:o})}return r}(n.cssText);s.length>0&&n.parsedSelector.split(",").forEach(function(o){o=o.trim(),r.push({selector:o,declarations:s,specificity:1,nu:e})}),e++}),r}var E="!important",z=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function Z(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith(E);return e&&(t=t.substr(0,t.length-E.length).trim()),{value:t,important:e}}function b(t){var e=[];return t.forEach(function(r){e.push.apply(e,r.selectors)}),e}function R(t){var e=T(t),r=f(t);return{original:t,template:r,selectors:q(e),usesCssVars:r.length>1}}function h(t,e){if(t.some(function(n){return n.styleEl===e}))return!1;var r=R(e.textContent);return r.styleEl=e,t.push(r),!0}function m(t){var e=y(b(t));t.forEach(function(r){r.usesCssVars&&(r.styleEl.textContent=c(r.template,e))})}function A(t,e,r){return function(t,e,r){return t.replace(new RegExp(e,"g"),r)}(t,"\\."+e,"."+r)}function x(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map(function(r){return h(e,r)}).some(Boolean)}function C(t,e,r){var n=r.href;return fetch(n).then(function(s){return s.text()}).then(function(s){if(function(t){return t.indexOf("var(")>-1||at.test(t)}(s)&&r.parentNode){(function(t){return d.lastIndex=0,d.test(t)})(s)&&(s=function(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(d,function(n,s){return n.replace(s,r+s)})}(s,n));var o=t.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,h(e,o),r.parentNode.insertBefore(o,r),r.remove()}}).catch(function(s){console.error(s)})}var t,at=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,d=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,pt=function(){function t(e,r){this.win=e,this.doc=r,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.i=function(){var e=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise(function(r){e.win.requestAnimationFrame(function(){(function(t,e){"undefined"!=typeof MutationObserver&&new MutationObserver(function(){x(t,e)&&m(e)}).observe(document.head,{childList:!0})})(e.doc,e.globalScopes),function(t,e){return x(t,e),function(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(C(t,e,n[s]));return Promise.all(r)}(t,e).then(function(){m(e)})}(e.doc,e.globalScopes).then(function(){return r()})})}))},t.prototype.addLink=function(e){var r=this;return C(this.doc,this.globalScopes,e).then(function(){r.updateGlobal()})},t.prototype.addGlobalStyle=function(e){h(this.globalScopes,e)&&this.updateGlobal()},t.prototype.createHostStyle=function(e,r,n,s){if(this.hostScopeMap.has(e))throw new Error("host style already created");var o=this.registerHostTemplate(n,r,s),i=this.doc.createElement("style");return i.setAttribute("data-no-shim",""),o.usesCssVars?s?(i["s-sc"]=r=o.scopeId+"-"+this.count,i.textContent="/*needs update*/",this.hostStyleMap.set(e,i),this.hostScopeMap.set(e,function(t,e){var r=t.template.map(function(s){return"string"==typeof s?A(s,t.scopeId,e):s}),n=t.selectors.map(function(s){return Object.assign(Object.assign({},s),{selector:A(s.selector,t.scopeId,e)})});return Object.assign(Object.assign({},t),{template:r,selectors:n,scopeId:e})}(o,r)),this.count++):(o.styleEl=i,o.usesCssVars||(i.textContent=c(o.template,{})),this.globalScopes.push(o),this.updateGlobal(),this.hostScopeMap.set(e,o)):i.textContent=n,i},t.prototype.removeHost=function(e){var r=this.hostStyleMap.get(e);r&&r.remove(),this.hostStyleMap.delete(e),this.hostScopeMap.delete(e)},t.prototype.updateHost=function(e){var r=this.hostScopeMap.get(e);if(r&&r.usesCssVars&&r.isScoped){var n=this.hostStyleMap.get(e);if(n){var s=y(function(t,e,r){var n=[],s=function(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}(e,t);return r.forEach(function(o){return n.push(o)}),s.forEach(function(o){return n.push(o)}),function(t){return t.sort(function(e,r){return e.specificity===r.specificity?e.nu-r.nu:e.specificity-r.specificity}),t}(b(n).filter(function(o){return function(t,e){return":root"===e||"html"===e||t.matches(e)}(t,o.selector)}))}(e,this.hostScopeMap,this.globalScopes));n.textContent=c(r.template,s)}}},t.prototype.updateGlobal=function(){m(this.globalScopes)},t.prototype.registerHostTemplate=function(e,r,n){var s=this.scopesMap.get(r);return s||((s=R(e)).scopeId=r,s.isScoped=n,this.scopesMap.set(r,s)),s},t}();!(t="undefined"!=typeof window&&window)||t.__cssshim||t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")||(t.__cssshim=new pt(t,t.document))}}]);