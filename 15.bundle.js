(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{68:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(21),i=a(3);async function s(e){return await initiateState.initiateWithFile(e),await new Promise(e=>requestIdleCallback(e)),Object(n.a)()}a.e(1).then(a.bind(null,67)).then(e=>e.default).then(e=>e()).then(e=>window.parent.postMessage({lastSavedDate:e,ntbAPI:"ready"},"*")).catch(()=>window.parent.postMessage({lastSavedDate:null,ntbAPI:"ready"},"*")),window.parent.postMessage({ntbAPI:"ready"},"*"),window.self.addEventListener("message",async e=>{e.data instanceof File?await Promise.resolve().then(a.bind(null,14)).then(t=>t.default.initiateWithFile(e.data)):"useLastSavedState"===e.data&&await Promise.resolve().then(a.bind(null,7)).then(e=>e.default.recoverSavedState()),await new Promise(e=>{let t;const a=()=>{i.a.unsubscribe(n),e()},n=()=>{clearTimeout(t),t=setTimeout(a,100)};i.a.subscribe(n)}),Object(n.b)().then(t=>e.source.postMessage(t,e.origin))},!1)}}]);