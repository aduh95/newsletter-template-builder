(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var o,d=t(13);const s="function"==typeof(null===(o=window.indexedDB)||void 0===o?void 0:o.databases);function a(){return(s?indexedDB.databases().then(e=>e.find(({name:e})=>e===d.b)):Promise.resolve(!0)).then(e=>e?Promise.resolve().then(t.bind(null,7)):Promise.reject("No saved state")).then(e=>e.default).then(e=>e.getLastSavedDate())}}}]);