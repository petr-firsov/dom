(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=Array.from(document.querySelectorAll(".tile")),r=t.p+"2dbd01ce16c0fa83cb67.png";!function(){let t=Math.ceil(15*Math.random());e[t].insertAdjacentHTML("beforeend",`<img src="${r}" width=100 height=100 class="goblin" alt="Гоблин">`)}(),setInterval((function(){let t=document.querySelector(".goblin"),n=t.parentElement,i=e.indexOf(n),c=Math.ceil(15*Math.random());for(;c===i;)c=Math.ceil(15*Math.random());t.remove(),e[c].insertAdjacentHTML("beforeend",`<img src="${r}" width=100 height=100 class="goblin">`)}),1500)})();