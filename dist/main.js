(()=>{"use strict";var n={721:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"#content{\n   \n}\n\n#contact-pos-div{\n    \n    padding: 10px;\n    justify-self: center;\n    align-self: center;\n}\n#contact-section{\n    \n    display: flex;\n    flex-direction: column;\n    padding: 100px;\n    justify-items: start;\n    align-items: start;\n    gap: 20px;\n    margin-left: 80px;\n\n}\n\n#location-section{\n}\n\n\n#contact-section h3{\n    font-size: 30px;\n    color: #881e1e;\n}\n\n#contact-section h4{\n    font-size: 40px;\n    \n}\n\n#contact-div{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    gap: 20px;\n    \n}\n\n#phone-no-div, #socials-div{\n    width: 220px;\n    height: 160px;\n    border: 1px solid;\n    padding: 10px;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    background-color: antiquewhite;\n}\n\n\n#phone-no-div h5, #socials-div h5{\n    font-size: 30px;\n    color: #881e1e;\n    font-weight: bold;\n}\n#phone-no-div p, #socials-div p{\n    font-size: 20px;\n    color: #881e1e;\n}\n\n#location-div{\n    padding: 10px;\n}\n\n#location-section h5{\n    font-size: 30px;\n    \n    font-weight: bold;\n}",""]);const c=i},972:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),d=t.n(c),l=new URL(t(767),t.b),p=i()(r()),s=d()(l);p.push([n.id,`@font-face {\n    font-family: 'arabicFont';\n    src: url(${s}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  \n\n\n*{\n    margin: 0;\n    padding: 0;\n\n}\n\nbody{\n\n    height: 100vh;\n    background: linear-gradient(\n        to right,\n        rgba(255, 255, 255, 1) 0%,\n        rgba(255, 255, 255, 1) 65%,\n        rgba(243, 246, 89, 0.8) 65%, /* Adjusted transparency */\n        rgba(243, 246, 89, 0.8) 100%\n        \n    );\n\n}\n\n\n\n#logo img{\n    width: 230px;\n    height: 190px;\n}\n\n#image-content img{\n    width: 400px;\n    height: 400px;\n    border-radius: 20px;\n\n}\n\nnav{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    padding-right: 130px;\n    align-items: center;\n}\n\nnav #logo{\n  \n    justify-self: center;\n    margin-right: 140px;\n}\n\n#pages{\n    \n    display: flex;\n    justify-content: space-evenly;\n    gap: 70px;\n    align-items: center;\n    padding: 10px;\n}\n\nbutton{\n    width: 100px;\n    height: 30px;\n    font-size: 20px;\n    cursor: pointer;\n    text-align: center;\n    background: inherit;\n    border: none;\n}\n\n#pages button:hover{\n    \n    border-bottom:1px solid #6c5f5f;\n}\n\n#content{\n    \n   \n    \n    \n}\n\n#text-content{\n    justify-self: center;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#text-content h1{\n    font-size: 70px;\n    color: #881e1e;\n    font-weight: lighter;\n    font-family: 'arabicFont';\n}\n\n#text-content p{\n    margin-top: -20px;\n    font-size: 26px;\n    color: #6c5f5f;\n}\n\n#text-content button{\n    margin-top: 10px;\n    width: 300px;\n    height:70px ;\n    background-color: #f3f659;\n    color: #881e1e;\n    cursor: pointer;\n}\n\n#text-content button:hover{\n    background-color: #881e1e;\n    color: #f3f659;\n}\n\n\n`,""]);const m=p},4:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"\nbody{\n    background-color: white;\n}\n\n#content{\n   \n}\n\n#menu-title-text{\n   \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#menu-title-text h4{\n    font-size: 20px;\n    color: #881e1e;\n    font-weight: lighter;\n    font-family:cursive;\n}\n\n#menu-title-text h3{\n    font-size: 40px;\n    font-weight:800;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n   \n}\n\n\n#trending-items-section{\n    width: 900px;\n    height: 380px;\n    display: flex;\n    gap: 20px;\n    overflow-x: scroll;\n}\n\n#trending-items-section::-webkit-scrollbar{\n    display: none;\n}\n\n#trending-items-section img{\n    width: 325px;\n    height: 380px;\n    filter: grayscale(100%);\n    transition: transform 0.5s;\n    border-radius: 20px;\n}\n\n#first-div, #second-div{\n    display: flex;\n    gap: 10px;\n}\n\n\n#gallery-wrap{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n   \n}\n#back-btn,#next-btn{\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    margin: 40px;\n}\n\n#trending-items-section img:hover{\n    filter: grayscale(0);\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n#explore-btn{\n    margin-top: 10px;\n    width: 300px;\n    height:70px ;\n    background-color: #f3f659;\n    color: #881e1e;\n    cursor: pointer;\n\n}\n\n#explore-btn:hover{\n    background-color: #881e1e;\n    color: #f3f659;\n}",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=o.base?d[0]+o.base:d[0],p=a[l]||0,s="".concat(l," ").concat(p);a[l]=p+1;var m=t(s),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,o);o.byIndex=c,e.splice(c,0,{identifier:s,updater:f,references:1})}i.push(s)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},767:(n,e,t)=>{n.exports=t.p+"aaa121377babe2d6501e.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),d=t.n(c),l=t(540),p=t.n(l),s=t(113),m=t.n(s),u=t(972),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals;const g=t.p+"34b5e60ead5f6cdc72f4.jpg";function h(){const n=document.getElementById("content");n.style.marginTop="140px",n.style.display="grid",n.style.gridTemplateColumns="1.5fr 1fr",n.style.gap="30px";let e=document.createElement("div");e.id="text-content";const t=new Image;t.src=g;const o=document.createElement("div");o.id="image-content",o.append(t);let r=document.createElement("h1");r.textContent="عيون الشام";let a=document.createElement("p");a.textContent="For delicious Siryan meals";let i=document.createElement("button");i.textContent="Discover Menu",e.append(r),e.append(a),e.append(i),n.append(e),n.append(o)}var x=t(4),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=p(),e()(x.A,v),x.A&&x.A.locals&&x.A.locals;const y=t.p+"5b9092a36e1bf143f4fe.jpeg",b=t.p+"4073467d1756b356d06a.jpeg",E=t.p+"24c6d859205aaff20449.jpeg",w=t.p+"632bbfbe946fb298c4b2.jpeg",I=t.p+"6e0462d621c2fd78a009.jpeg",C=t.p+"8c639f28938063ea7bb5.png",T=t.p+"32ca062d511224a736da.png";var A=t(721),j={};j.styleTagTransform=m(),j.setAttributes=d(),j.insert=i().bind(null,"head"),j.domAPI=r(),j.insertStyleElement=p(),e()(A.A,j),A.A&&A.A.locals&&A.A.locals;const k=t.p+"07e02d981ff915856821.jpeg";!function(){const n=new Image;n.src=k,document.getElementById("logo").append(n)}(),h(),function(){const n=document.getElementById("home"),e=document.getElementById("menu"),t=document.getElementById("contact");n.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",h()})),e.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",function(){const n=document.getElementById("content");n.style.marginTop="80px",n.style.display="flex",n.style.flexDirection="column",n.style.justifyContent="center",n.style.alignItems="center",n.style.gap="40px";let e=document.createElement("div");e.id="menu-title-text";let t=document.createElement("h4");t.textContent="Our Menu",e.append(t);let o=document.createElement("h3");o.textContent="Most Trending Items",e.append(o),n.append(e);let r=document.createElement("div");r.id="trending-items-section";let a=document.createElement("div");a.id="first-div";let i=document.createElement("span");const c=new Image;c.src=y,i.append(c),a.append(i);let d=document.createElement("span");const l=new Image;l.src=b,d.append(l),a.append(d);let p=document.createElement("span");const s=new Image;s.src=E,p.append(s),a.append(p);let m=document.createElement("div");m.id="second-div";let u=document.createElement("span");const f=new Image;f.src=w,u.append(f),m.append(u);let g=document.createElement("span");const h=new Image;h.src=I,g.append(h),m.append(g),r.append(a),r.append(m);let x=document.createElement("div");x.id="gallery-wrap";const v=new Image;v.src=T,v.id="back-btn",x.append(v),x.append(r);const A=new Image;A.src=C,A.id="next-btn",x.append(A),n.append(x);let j=document.createElement("button");j.id="explore-btn",j.textContent="Explore Menu",n.append(j),A.addEventListener("click",(()=>{r.scrollLeft+=450})),v.addEventListener("click",(()=>{r.scrollLeft-=450}))}()})),t.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",function(){const n=document.getElementById("content");n.style.display="grid",n.style.gridTemplateColumns="repeat(2, 1fr)",n.style.gap="10px",n.style.marginTop="80px";let e=document.createElement("div");e.id="contact-pos-div";let t=document.createElement("div"),o=document.createElement("div");t.id="contact-section",o.id="location-section";let r=document.createElement("h3");r.textContent="Contact Us",t.append(r);let a=document.createElement("h4");a.textContent="Contact us to order  or if you want enquire about somthing in the following",t.append(a);let i=document.createElement("div");i.id="contact-div";let c=document.createElement("div");c.id="phone-no-div";let d=document.createElement("h5");d.textContent="Phone Number";let l=document.createElement("p");l.textContent="012- 0000- 0000 ";let p=document.createElement("p");p.textContent="012- 0000- 0000 ",c.append(d),c.append(l),c.append(p);let s=document.createElement("div");s.id="socials-div";let m=document.createElement("h5");m.textContent="Socials";let u=document.createElement("p");u.textContent="FaceBook: eyoonElSham";let f=document.createElement("p");f.textContent="Instagram: eyoonElSham",s.append(m),s.append(u),s.append(f),i.append(c),i.append(s),t.append(i);let g=document.createElement("div");g.id="location-div",g.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6824.872023117085!2d29.959713658691406!3d31.208647599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5c578c6ab2f%3A0x3fd2610cfe2b18ee!2z2LnZitmI2YYg2KfZhNi02KfZhQ!5e0!3m2!1sen!2seg!4v1715539560564!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';let h=document.createElement("h5");h.textContent="Visit us at our Restaurant at",o.append(h),o.append(g),e.append(t),n.append(e),n.append(o)}()}))}()})()})();