(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{39:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r}));const n=t=>{if("function"==typeof t.hasAttribute&&t.hasAttribute("data-contents"))return Array.from(t.childNodes,n);if("OUTPUT"===t.nodeName||"function"==typeof t.hasAttribute&&t.hasAttribute("data-do-not-export"))return[];const e=t.cloneNode(!1);if(t.attributes){for(const{name:a}of t.attributes)a.startsWith("data-")&&e.removeAttribute(a);e.removeAttribute("contenteditable"),e.removeAttribute("tabindex")}return Array.from(t.childNodes).flatMap(n).forEach(t=>e.appendChild(t)),t instanceof HTMLImageElement&&(e.setAttribute("height",t.naturalHeight),e.setAttribute("width",t.naturalWidth)),e};function i(){const t=document.querySelectorAll("[data-export]");return Array.from(t).flatMap(n)}async function r(){const t=await a.e(27).then(a.bind(null,15)).then(t=>t.default),e=await t.getHostNameRegExp("g");return i().map(t=>t.outerHTML.replace(e,"/"))}},69:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return r}));var n=a(39),i=a(2);async function r(t){return await initiateState.initiateWithFile(t),await new Promise(t=>requestIdleCallback(t)),Object(n.a)()}a.e(4).then(a.bind(null,47)).then(t=>t.default).then(t=>t()).then(t=>window.parent.postMessage({lastSavedDate:t,ntbAPI:"ready"},"*")).catch(()=>window.parent.postMessage({lastSavedDate:null,ntbAPI:"ready"},"*")),window.parent.postMessage({ntbAPI:"ready"},"*"),window.self.addEventListener("message",async t=>{t.data instanceof File?await a.e(3).then(a.bind(null,36)).then(e=>e.default.initiateWithFile(t.data)):"useLastSavedState"===t.data&&await a.e(1).then(a.bind(null,38)).then(t=>t.default.recoverSavedState()),await new Promise(t=>{let e;const a=()=>{document.querySelector(".loading")?n():(i.a.unsubscribe(n),t())},n=()=>{clearTimeout(e),e=setTimeout(a,100)};i.a.subscribe(n)}),Object(n.b)().then(e=>t.source.postMessage(e,t.origin)).catch(console.error)},!1)}}]);