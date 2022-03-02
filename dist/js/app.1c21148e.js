(function(){"use strict";var n={7878:function(n,t,e){var r=e(9242),i=e(3396);function o(n,t,e,r,o,u){const a=(0,i.up)("buttonRow");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a,{branch:"main","display-name":"Main"}),(0,i.Wm)(a,{branch:"develop","display-name":"Develop"})],64)}var u=e(7139),a=e(4870);function l(n){const t=(0,a.iH)(null),e=(0,a.iH)(null);return fetch(n).then((n=>n.json())).then((n=>t.value=n)).catch((n=>e.value=n)),{data:t,error:e}}const c={key:0},p={key:1},s={key:2},f={name:"button-row"};var d=Object.assign(f,{props:{branch:String,displayName:String},setup(n){const t=n,{branch:e,displayName:r}=(0,a.BK)(t),{data:o,error:f}=l(`https://circleci.com/api/v1.1/project/gh/ciderapp/Cider/latest/artifacts?branch=${e.value}&filter=successful`);return(n,t)=>{const e=(0,i.up)("b-spinner"),l=(0,i.up)("b-button"),d=(0,i.up)("b-button-group");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,(0,u.zw)((0,a.SU)(r))+" releases",1),(0,a.SU)(f)?((0,i.wg)(),(0,i.iD)("div",c,"Oops! Error encountered: "+(0,u.zw)((0,a.SU)(f).message),1)):(0,i.kq)("",!0),null===(0,a.SU)(o)?((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(e,{label:"Spinning"})])):((0,i.wg)(),(0,i.iD)("div",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,a.SU)(o),(n=>((0,i.wg)(),(0,i.j4)(d,{class:"mr-1",key:n},{default:(0,i.w5)((()=>[String(n.path).endsWith(".yml")||String(n.path).endsWith(".blockmap")?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(l,{key:0,style:{margin:"5px"},variant:"light"},{default:(0,i.w5)((()=>[(0,i.Uk)("."+(0,u.zw)(String(n.path).split("/")[String(n.path).split("/").length-1].split(".")[String(n.path).split("/")[String(n.path).split("/").length-1].split(".").length-1]),1)])),_:2},1024))])),_:2},1024)))),128))]))],64)}}});const g=d;var h=g,v={name:"App",components:{buttonRow:h}},b=e(89);const m=(0,b.Z)(v,[["render",o]]);var y=m,w=e(7818);(0,r.ri)(y).use(w.ZP).mount("#app")}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,r,i,o){if(!r){var u=1/0;for(p=0;p<n.length;p++){r=n[p][0],i=n[p][1],o=n[p][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||u>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[l])}))?r.splice(l--,1):(a=!1,o<u&&(u=o));if(a){n.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var p=n.length;p>0&&n[p-1][2]>o;p--)n[p]=n[p-1];n[p]=[r,i,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var i,o,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(l)var p=l(e)}for(t&&t(r);c<u.length;c++)o=u[c],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(p)},r=self["webpackChunkupdate_cider"]=self["webpackChunkupdate_cider"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7878)}));r=e.O(r)})();
//# sourceMappingURL=app.1c21148e.js.map