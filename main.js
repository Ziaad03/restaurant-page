(()=>{"use strict";var n={972:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),p=new URL(t(767),t.b),u=i()(o()),l=s()(p);u.push([n.id,`@font-face {\n    font-family: 'arabicFont';\n    src: url(${l}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  \n\n\n*{\n    margin: 0;\n    padding: 0;\n\n}\n\nbody{\n\n    height: 100vh;\n    background: linear-gradient(\n        to right,\n        rgba(255, 255, 255, 1) 0%,\n        rgba(255, 255, 255, 1) 65%,\n        rgba(243, 246, 89, 0.8) 65%, /* Adjusted transparency */\n        rgba(243, 246, 89, 0.8) 100%\n        \n    );\n\n\n\n    \n\n}\n\n\n\n#logo img{\n    width: 243px;\n    height: 190px;\n}\n\n#image-content img{\n    width: 430px;\n    height: 400px;\n    border-radius: 20px;\n\n}\n\nnav{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    padding-right: 130px;\n    align-items: center;\n}\n\nnav #logo{\n  \n    justify-self: center;\n    margin-right: 140px;\n}\n\n#pages{\n    \n    display: flex;\n    justify-content: space-evenly;\n    gap: 70px;\n    align-items: center;\n    padding: 10px;\n}\n\nbutton{\n    \n   \n   \n    width: 100px;\n    height: 30px;\n    font-size: 28px;\n    cursor: pointer;\n    text-align: center;\n    background: inherit;\n    border: none;\n}\n\n#pages button:hover{\n    \n    border-bottom:1px solid #6c5f5f;\n}\n\n#content{\n    margin-top: 40px;\n   \n    display: grid;\n    grid-template-columns: 1.5fr 1fr;\n    gap: 30px;\n    \n}\n\n#text-content{\n    justify-self: center;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#text-content h1{\n    font-size: 100px;\n    color: #881e1e;\n    font-weight: lighter;\n    font-family: 'arabicFont';\n}\n\n#text-content p{\n    margin-top: -20px;\n    font-size: 32px;\n    color: #6c5f5f;\n}\n\n#text-content button{\n    margin-top: 10px;\n    width: 300px;\n    height:70px ;\n    background-color: #f3f659;\n    color: #881e1e;\n    cursor: pointer;\n}\n\n#text-content button:hover{\n    background-color: #881e1e;\n    color: #f3f659;\n}`,""]);const d=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var g=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),p=0;p<a.length;p++){var u=t(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},767:(n,e,t)=>{n.exports=t.p+"aaa121377babe2d6501e.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),p=t(540),u=t.n(p),l=t(113),d=t.n(l),f=t(972),g={};g.styleTagTransform=d(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),e()(f.A,g),f.A&&f.A.locals&&f.A.locals;const m=t.p+"07e02d981ff915856821.jpeg",h=t.p+"34b5e60ead5f6cdc72f4.jpg";!function(){const n=new Image;n.src=m,document.getElementById("logo").append(n);const e=document.getElementById("content");let t=document.getElementById("text-content");const r=new Image;r.src=h;const o=document.getElementById("image-content");o.append(r);let a=document.createElement("h1");a.textContent="عيون الشام";let i=document.createElement("p");i.textContent="For delicious Siryan meals";let c=document.createElement("button");c.textContent="Discover Menu",t.append(a),t.append(i),t.append(c),e.append(t),e.append(o)}()})()})();