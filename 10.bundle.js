(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{28:function(e,t,n){"use strict";n.d(t,"b",function(){return d});const r="drop-candidate-for-reordering",o=[],d=e=>{document.body.addEventListener("dragover",e),o.push(e)};t.a=e=>t=>{const{target:n}=t,{parentElement:d}=n;let s,a,i;t.dataTransfer.effectAllowed="move",d.style.setProperty("--dragged-element-height",n.offsetHeight+"px");for(const e of o)document.body.removeEventListener("dragover",e);d.classList.add(r);const c=()=>{var e;i=null,null===(e=d.querySelector("."+r))||void 0===e||e.classList.remove(r),s?(n.classList.remove("to-be-deleted"),s!==n&&s.classList.add(r)):n.classList.add("to-be-deleted")},l=e=>{e.stopPropagation(),e.preventDefault(),s=e.currentTarget,i||(i=requestAnimationFrame(c))},u=e=>{e.preventDefault(),s=null,i||(i=requestAnimationFrame(c))},v=e=>{e.stopPropagation(),e.preventDefault(),a=e.currentTarget},m=e=>{e.preventDefault(),a=null};Array.from(d.children,e=>{e.addEventListener("drop",v),e.addEventListener("dragover",l)}),document.body.addEventListener("dragover",u),document.body.addEventListener("drop",m),n.addEventListener("dragend",t=>{Array.from(document.getElementsByClassName(r),e=>e.classList.remove(r)),document.body.removeEventListener("dragover",u),document.body.removeEventListener("drop",m);for(const e of d.children)e.removeEventListener("drop",v),e.removeEventListener("dragover",l);for(const e of o)document.body.addEventListener("dragover",e);void 0!==a&&e(t,a)},{once:!0,passive:!0})}},44:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return a});var r=n(0),o=n(28);n(44);const d="dragover",s="drop-zone";class a extends r.a{constructor(...e){var t,n,r;super(...e),r={previewing:!0,content:null},(n="state")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}componentDidMount(){Object(o.b)(e=>{e.preventDefault(),document.documentElement.classList.add(d)}),document.getElementById(s).addEventListener("drop",e=>{e.preventDefault();const{dataHandler:t}=this.props;for(const n of e.dataTransfer.items||e.dataTransfer.files)"file"===n.kind?n.getAsFile().text().then(JSON.parse).then(t):"string"===n.kind?console.warn("File was expected, received string",n):n.text().then(JSON.parse).then(t);document.documentElement.classList.remove(d)}),document.getElementById(s).addEventListener("dragleave",e=>{e.preventDefault(),document.documentElement.classList.remove(d)})}render(){return Object(r.h)("div",{id:s})}}}}]);