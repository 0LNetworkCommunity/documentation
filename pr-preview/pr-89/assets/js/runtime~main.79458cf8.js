(()=>{"use strict";var e,r,t,a,o,n={},f={};function c(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={exports:{}};return n[e].call(t.exports,t,t.exports,c),t.exports}c.m=n,e=[],c.O=(r,t,a,o)=>{if(!t){var n=1/0;for(b=0;b<e.length;b++){t=e[b][0],a=e[b][1],o=e[b][2];for(var f=!0,d=0;d<t.length;d++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](t[d])))?t.splice(d--,1):(f=!1,o<n&&(n=o));if(f){e.splice(b--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,a,o]},c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var f=2&a&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,c.d(o,n),o},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>"assets/js/"+({4:"c141421f",85:"1f391b9e",261:"11f3b9d0",271:"d591aa30",337:"41aa6f12",368:"a94703ab",414:"393be207",460:"a847a89d",507:"5e013b89",513:"4c3fb466",518:"a7bd4aaa",535:"3d8d21df",592:"e0c5e705",629:"aba21aa0",649:"c2f71b01",661:"5e95c892",664:"3b32a354",751:"3720c009",817:"14eb3368",818:"1e4232ab",859:"18c41134",869:"101a9ee6",918:"17896441",920:"1a4e3797",924:"df203c0f",980:"a7456010"}[e]||e)+"."+{4:"bedc2c07",27:"fb69b5f5",85:"f68cc648",261:"67a7262e",271:"4afe3753",337:"fb65f394",368:"1d08ae3b",414:"f1d4e939",426:"9f23680a",460:"390acc38",507:"6aae181d",513:"7dbf03e3",518:"b9d97c95",535:"745b7ec8",592:"b287d1c5",629:"ca78289a",649:"2b4bc857",661:"8c86d957",664:"08ebbc8b",751:"256d2662",772:"ffb3aa18",817:"019bdb36",818:"6b445050",859:"0f52c4e6",869:"988e8fe8",894:"3b507165",918:"f4877aba",920:"0d2eac9d",924:"080ecce0",945:"11fcc792",980:"2c3dad25"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="open-libra-core-docs:",c.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var f,d;if(void 0!==t)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){f=u;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",o+t),f.src=e),a[e]=[r];var l=(r,t)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),d&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/pr-preview/pr-89/",c.gca=function(e){return e={17896441:"918",c141421f:"4","1f391b9e":"85","11f3b9d0":"261",d591aa30:"271","41aa6f12":"337",a94703ab:"368","393be207":"414",a847a89d:"460","5e013b89":"507","4c3fb466":"513",a7bd4aaa:"518","3d8d21df":"535",e0c5e705:"592",aba21aa0:"629",c2f71b01:"649","5e95c892":"661","3b32a354":"664","3720c009":"751","14eb3368":"817","1e4232ab":"818","18c41134":"859","101a9ee6":"869","1a4e3797":"920",df203c0f:"924",a7456010:"980"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(r,t)=>{var a=c.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=c.p+c.u(r),f=new Error;c.l(n,(t=>{if(c.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+r,r)}},c.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],f=t[1],d=t[2],i=0;if(n.some((r=>0!==e[r]))){for(a in f)c.o(f,a)&&(c.m[a]=f[a]);if(d)var b=d(c)}for(r&&r(t);i<n.length;i++)o=n[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(b)},t=self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();