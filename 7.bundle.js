(window.webpackJsonp=window.webpackJsonp||[]).push([[7,22,24,27],{15:function(t,e,n){"use strict";n.r(e);var s,i,r=n(6);function a(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var o=0;e.default=new(s=class extends r.a{constructor(...t){super(...t),Object.defineProperty(this,i,{writable:!0,value:void 0})}set(t){if(t!==a(this,i)[i]){try{a(this,i)[i]=new URL(t||"about:blank").hostname}catch(t){console.warn(t),a(this,i)[i]=""}this.notify(a(this,i)[i])}}get(){return a(this,i)[i]}getAsURL(){return a(this,i)[i]?new URL(`${location.protocol}//${a(this,i)[i]}`):null}getHostNameRegExp(t){return new RegExp(`(https?:)?//${a(this,i)[i]}/?`,t)}},i="__private_"+o+++"_"+"currentName",s)},19:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var s=n(15);const i=/\/search#documentUUID\/([a-f0-9\-]+)\/(.+)$/;function r(t){if(i.test(t)&&s.default.getHostNameRegExp().test(t)){const[e,n,r]=i.exec(t),a=new URL("/search",s.default.getAsURL());return a.searchParams.set("documentUUID",n),a.searchParams.set("title",r),a.toString()}try{t=new URL(t).toString()}catch{}return t}},20:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var s=n(0),i=n(25);class r extends s.a{handleDrag({currentTarget:t},e){const n=Array.from(t.parentNode.children),s=n.indexOf(t),i=n.indexOf(e);this.props.handleReOrder(s,i)}render(){const t=this.props.content||[];return Object(s.h)("ol",{className:"ordered-list"},t.concat([{}]).map(({label:e,href:n},r)=>Object(s.h)("li",{draggable:r<t.length,onDragStart:Object(i.a)(this.handleDrag.bind(this)),key:r},Object(s.h)("input",{name:"label",value:e||"",placeholder:"Link label",onChange:t=>this.props.handleChange(t,r)}),Object(s.h)("input",{name:"href",value:n||"",placeholder:"Link URL",onChange:t=>this.props.handleChange(t,r),type:"url"}))))}}},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var s=n(0),i=n(22),r=n.n(i),a=n(3);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}function l(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var c=0;const h=new r.a;class u extends s.a{constructor(...t){super(...t),this.state={loading:!0}}static translate(t){let e;const n=new Promise(t=>e=t),s=l(this,d)[d].then(()=>new Promise((e,n)=>{h.onmessage=({data:t})=>{e(t)},h.onmessageerror=n,h.onerror=n,h.postMessage(t)})).finally(e);return l(this,d)[d]=n,s}componentDidMount(){this.translate()}componentDidUpdate(t){t.content!==this.props.content&&this.translate()}translate(){this.constructor.translate(this.props.content).then(t=>{this.setState({loading:!1,html:t})}).catch(t=>{console.error(t),this.setState({loading:!1,html:"<div data-ignore class='error'>Error when rendering markdown content</div>"})})}render(){return this.state.loading?Object(s.h)(a.a,null):Object(s.h)("output",o({"data-contents":!0,dangerouslySetInnerHTML:{__html:this.state.html}},this.props.attributes))}}var d="__private_"+c+++"_"+"translationJobs";Object.defineProperty(u,d,{writable:!0,value:Promise.resolve()})},22:function(t,e,n){t.exports=function(){return new Worker(n.p+"44d1adee71d79f1e0dc4.worker.js")}},25:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a}));const s="drop-candidate-for-reordering",i=new Set,r=t=>{document.body.addEventListener("dragover",t),i.add(t)},a=t=>{document.body.removeEventListener("dragover",t),i.delete(t)};e.a=t=>e=>{const{target:n}=e,{parentElement:r}=n;let a,o,l;e.dataTransfer.effectAllowed="move",r.style.setProperty("--dragged-element-height",n.offsetHeight+"px");for(const t of i)document.body.removeEventListener("dragover",t);r.classList.add(s);const c=()=>{var t;l=null,null===(t=r.querySelector("."+s))||void 0===t||t.classList.remove(s),a?(n.classList.remove("to-be-deleted"),a!==n&&a.classList.add(s)):n.classList.add("to-be-deleted")},h=t=>{t.stopPropagation(),t.preventDefault(),a=t.currentTarget,l||(l=requestAnimationFrame(c))},u=t=>{t.preventDefault(),a=null,l||(l=requestAnimationFrame(c))},d=t=>{t.stopPropagation(),t.preventDefault(),o=t.currentTarget},p=t=>{t.preventDefault(),o=null};Array.from(r.children,t=>{t.addEventListener("drop",d),t.addEventListener("dragover",h)}),document.body.addEventListener("dragover",u),document.body.addEventListener("drop",p),n.addEventListener("dragend",e=>{Array.from(document.getElementsByClassName(s),t=>t.classList.remove(s)),document.body.removeEventListener("dragover",u),document.body.removeEventListener("drop",p);for(const t of r.children)t.removeEventListener("drop",d),t.removeEventListener("dragover",h);for(const t of i)document.body.addEventListener("dragover",t);void 0!==o&&t(e,o)},{once:!0,passive:!0})}},32:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var s=n(0),i=n(20),r=n(46),a=n(35),o=n(19);function l(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var c=0;function h(t){return"__private_"+c+++"_"+t}function u(t,e){const{target:n}=e,{name:s,value:i}=n;t({...this.props,[s]:i})}class d extends s.a{constructor(...t){super(...t),Object.defineProperty(this,p,{writable:!0,value:u.bind(this,this.props.onChange)}),Object.defineProperty(this,f,{writable:!0,value:this.disableIllustration.bind(this)}),Object.defineProperty(this,b,{writable:!0,value:this.switchToImage.bind(this)}),Object.defineProperty(this,m,{writable:!0,value:this.switchToVideo.bind(this)})}static getDerivedStateFromProps({src:t}){return{noIllustration:!t}}disableIllustration(t){this.props.onChange({src:void 0,alt:void 0,isVideo:void 0})}switchToVideo(t){this.props.onChange({src:"about:blank",alt:void 0,isVideo:!0}),requestAnimationFrame(()=>t.target.form.elements.src.focus())}switchToImage(t){this.props.onChange({src:"about:blank",alt:"",isVideo:!1}),requestAnimationFrame(()=>t.target.form.elements.src.focus())}render(){return Object(s.h)("fieldset",null,Object(s.h)("legend",null,"Illustration"),"Illustration type: ",Object(s.h)("label",null,Object(s.h)("input",{onChange:l(this,f)[f],name:"isVideo",type:"radio",value:"noIllustration",checked:this.state.noIllustration})," No illustration"),Object(s.h)("label",null,Object(s.h)("input",{onChange:l(this,b)[b],name:"isVideo",type:"radio",value:"false",checked:!this.state.noIllustration&&!this.props.isVideo})," Image"),Object(s.h)("label",null,Object(s.h)("input",{onChange:l(this,m)[m],name:"isVideo",type:"radio",value:"true",checked:!this.state.noIllustration&&this.props.isVideo})," Video"),this.state.noIllustration?null:Object(s.h)("label",{className:"full-size"},this.props.isVideo?"Video":"Image"," URL: ",Object(s.h)("input",{onChange:l(this,p)[p],name:"src",type:"url",value:this.props.src})),this.state.noIllustration||this.props.isVideo?null:Object(s.h)("label",{className:"full-size"},"Image description: ",Object(s.h)("input",{onChange:l(this,p)[p],name:"alt",value:this.props.alt,placeholder:"Mandatory description of the image",required:!0})))}}var p=h("handleChange"),f=h("disableIllustration"),b=h("switchToImage"),m=h("switchToVideo");class g extends s.a{constructor(...t){super(...t),this.form=Object(s.g)(),Object.defineProperty(this,v,{writable:!0,value:u.bind(this,this.setState.bind(this))}),Object.defineProperty(this,O,{writable:!0,value:({target:{name:t,checked:e}})=>l(this,v)[v]({target:{name:t,value:e}})}),Object.defineProperty(this,y,{writable:!0,value:this.handleSubmit.bind(this)}),Object.defineProperty(this,w,{writable:!0,value:this.handleListChange.bind(this)}),Object.defineProperty(this,j,{writable:!0,value:this.handleListReOrder.bind(this)}),Object.defineProperty(this,x,{writable:!0,value:({isVideo:t,src:e,alt:n})=>this.setState({isVideo:t,illustration:e,illustrationDescription:n})}),this.state={type:this.props.type,title:this.props.title,description:this.props.description,isMain:!!this.props.isMain,isVideo:!!this.props.isVideo,illustration:this.props.illustration||null,illustrationDescription:this.props.illustrationDescription,links:Array.isArray(this.props.links)?this.props.links:[]}}componentDidMount(){this.update()}componentDidUpdate(t){this.update(t)}update(t={}){const{current:e}=this.form;if(e&&t.focus!==this.props.focus){const t=this.props.focus,n=null==t?void 0:t.match(/^(.+)\[(\d+)\]$/),s=n?e.querySelectorAll(`[name=${n[1]}]`).item(n[2]):e.querySelector(`[name=${t}]`);s&&requestAnimationFrame(()=>{if(this.props.focusOffset){let t=this.props.focusText?s.value.indexOf(this.props.focusText,this.props.focusOffset[0])-this.props.focusOffset[0]:0;s.setSelectionRange(...this.props.focusOffset.map(e=>e+t))}s.focus()})}}handleListChange(t,e){const{name:n,value:s}=t.target,{links:i}=this.state;e===i.length?i.push({[n]:s}):i[e][n]=s,this.setState({links:i})}handleSubmit(){const t={...this.state};if(Array.isArray(this.state.links)&&(t.links=this.state.links.filter(({label:t,href:e})=>t||e).map(({label:t,href:e})=>({label:t||"[Link]",href:Object(o.default)(e)||"about:blank"}))),t.illustration)if(t.isVideo){const e=new URL(t.illustration);/youtube(\.com)?$/.test(e.hostname)?t.illustration="https://www.youtube.com/embed/"+e.searchParams.get("v"):"youtube.be"===e.hostname?t.illustration="https://www.youtube.com/embed/"+e.pathname.substring(1):e.hostname.endsWith("vimeo.com")&&(t.illustration="https://player.vimeo.com/video/"+e.pathname.substring(1,e.pathname.indexOf("/",2)))}else t.illustration=Object(o.default)(t.illustration);requestAnimationFrame(()=>this.props.saveState(t))}handleListReOrder(t,e){const n=this.state.links;let s=[];-1===e?s=s.concat(n.slice(0,t),n.slice(t+1)):t<e?s=s.concat(n.slice(0,t),n.slice(t+1,e),n.slice(t,1),n.slice(e)):t>e&&(s=s.concat(n.slice(0,e),n.slice(t,t+1),n.slice(e,t),n.slice(t+1))),t!==e&&this.setState({links:s})}render(){return Object(s.h)(a.a,{onClose:this.props.resetState},Object(s.h)("form",{method:"dialog",ref:this.form,onSubmit:l(this,y)[y]},Object(s.h)("div",null,Object(s.h)("label",{className:"full-size"},"Title: ",Object(s.h)("input",{name:"title",required:!0,value:this.state.title,onChange:l(this,v)[v]})),Object(s.h)("label",null,"Featured article: ",Object(s.h)("input",{name:"isMain",checked:this.state.isMain,type:"checkbox",onChange:l(this,O)[O]})),Object(s.h)(d,{isVideo:this.state.isVideo,src:this.state.illustration,alt:this.state.illustrationDescription,onChange:l(this,x)[x]}),Object(s.h)("label",null,"Text: ",Object(s.h)(r.a,{name:"description",value:this.state.description,onChange:l(this,v)[v],initiallyActive:"description"===this.props.focus})),Object(s.h)(i.default,{content:this.state.links,handleChange:l(this,w)[w],handleReOrder:l(this,j)[j]}),Object(s.h)("button",{type:"submit"},"Save"),Object(s.h)("button",{type:"reset",onClick:this.props.resetState},"Cancel"))))}}var v=h("handleChange"),O=h("handleCheckboxChange"),y=h("handleSubmit"),w=h("handleListChange"),j=h("handleListReOrder"),x=h("handleIllustrationChange")},35:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var s=n(0),i=n(1);const r="HTMLDialogElement"in window;const a=t=>t.stopPropagation();class o extends s.a{constructor(...t){super(...t),this.dialog=Object(s.g)()}componentDidMount(){this.update()}componentDidUpdate(){this.update()}update(){const{current:t}=this.dialog;var e;(e=t,r?Promise.resolve():Promise.all([n.e(37).then(n.bind(null,72)),n.e(26).then(n.t.bind(null,73,7))]).then(t=>t[0].default.registerDialog(e))).then(()=>t&&!t.open&&t.showModal())}render(){return Object(i.c)(Object(s.h)("dialog",{"data-do-not-export":!0,"data-ignore":!0,onClose:this.props.onClose,onClick:a,ref:this.dialog},this.props.children),document.body)}}},42:function(t,e,n){t.exports=function(){return new Worker(n.p+"b1bef33280954b008ccf.worker.js")}},43:function(t,e,n){},46:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var s=n(0),i=n(26),r=n(29),a=n(21),o=n(42),l=n.n(o);const c=Symbol("ul"),h=Symbol("ol"),u={[c]:/^(\s*)([-*]\s)/,[h]:/^(\s*)(\d+\.\s)/},d={[c]:"- ",[h]:"1. "},p=/^(\s*)(\d+\.|-|\*)\s/;n(43);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}function b(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var m=0;function g(t){return"__private_"+m+++"_"+t}const v=new l.a,O=[{label:r.a,char:"**",shortcut:"b",help:"Bold"},{label:r.g,char:"_",shortcut:"i",help:"Italic"},{label:r.j,listType:c,help:"Unorded list"},{label:r.i,listType:h,help:"Ordered list"},{label:r.h,charBefore:"[",charAfter:"](https://)",selectionAfter:!0,selectionOffset:[2,1],shortcut:"k",help:"Hypertext link"}],y=/\n(\s*[-*])\s.+$/,w=/\n(\s*)(\d+)\.\s.+$/,j=/\n\s*(-|\d+\.)\s*$/,x=/\n\s*\d+\.\s*$/;class k extends s.a{constructor(...t){super(...t),this.state={active:this.props.initiallyActive},this.focusPosition=this.props.focusPosition,this.textarea=Object(s.g)(),Object.defineProperty(this,C,{writable:!0,value:this.helper.bind(this)}),Object.defineProperty(this,S,{writable:!0,value:this.makePrettier.bind(this)}),Object.defineProperty(this,L,{writable:!0,value:{contenteditable:"true",className:"editable-markdown-preview",onBlur:this.getCaretPosition.bind(this),onClick:t=>{t.stopImmediatePropagation(),this.setState({active:!0})},onFocus:()=>{this.setState({active:!0},()=>{var t;return null===(t=this.textarea.current)||void 0===t?void 0:t.focus()})}}}),Object.defineProperty(this,T,{writable:!0,value:Object(s.h)("p",null,Object(s.h)("button",{hidden:!0,type:"button",onClick:()=>{var t;return null===(t=this.textarea.current)||void 0===t?void 0:t.focus()}}),O.map(t=>Object(s.h)("button",{onClick:this.handleCommand(t),accesskey:t.shortcut,type:"button",className:"md-command",title:t.help},Object(s.h)(i.a,{icon:t.label})))," | ",Object(s.h)("button",{className:"md-preview",accesskey:"s",onClick:()=>this.setState({active:!1})},Object(s.h)(i.a,{icon:r.d})))})}static makePrettier(t){let e;const n=new Promise(t=>e=t),s=b(this,P)[P].then(()=>new Promise((e,n)=>{v.onmessage=({data:t})=>{e(t)},v.onmessageerror=n,v.onerror=n,v.postMessage(t)})).finally(e);return b(this,P)[P]=n,s}getCaretPosition(t){if(window.getSelection){const{anchorNode:t,anchorOffset:e}=window.getSelection();this.focusPosition={text:t.textContent,offset:e}}}handleCommand(t){return e=>{const{current:n}=this.textarea;if(n){if(t.listType)!function(t,e){const{selectionStart:n,selectionEnd:s,value:i}=e,r=d[t],a=u[t],o=Math.max(0,i.lastIndexOf("\n",n-1)),l=function(t,e,n){const s=t.indexOf(e,n);return-1===s?t.length:s}(i,"\n",s);if(n===s){const t=i.substring(o,l);if(s===i.length||"\n"===i.charAt(n))if(0===n||"\n"===i.charAt(n-1))e.setRangeText(t+"\n"+r,o,l,"end");else if(p.test(t)){const[n,s]=t.match(p);e.setRangeText(t+"\n"+s+"    "+r,o,l,"end")}else e.setRangeText("\n"+r+t,o,l,"end");else a.test(t)?e.setRangeText(t.replace(a,""),o,l):p.test(t)?e.setRangeText(t.replace(p,(t,e)=>e+r),o,l):e.setRangeText(r+t,o,l)}else{const t=i.substring(o,l).split("\n").filter(String);t.every(t=>a.test(t))?e.setRangeText(t.map(t=>t.replace(a,"")).join("\n"),o,l):t.every(t=>p.test(t))?e.setRangeText(t.map(t=>t.replace(p,(t,e)=>e+r)).join("\n"),o,l):e.setRangeText(t.map(t=>r+t).join("\n"),o,l)}}(t.listType,n);else{const{selectionStart:e,selectionEnd:s,value:i}=n,r=t.charBefore||t.char||"",a=t.charAfter||t.char||"",o=i.substring(e-r.length,e)===r&&i.substring(s,s+a.length)===a;if(n.value=o?i.substring(0,e-r.length)+i.substring(e,s)+i.substring(s+a.length):i.substring(0,e)+r+i.substring(e,s)+a+i.substring(s),t.selectionAfter)if(t.selectionOffset){const[e,i]=t.selectionOffset;n.setSelectionRange(s+r.length+e,s+r.length+a.length-i)}else n.setSelectionRange(s+a.length,s+a.length);else o?n.setSelectionRange(e-r.length,s-r.length):n.setSelectionRange(e+r.length,s+r.length)}this.props.onChange({target:n}),n.focus()}}}helper(t){const{value:e,selectionStart:n,selectionEnd:s}=t.target,i=e.lastIndexOf("\n",n-1),r=e.indexOf("\n",s-1),a=e.substring(~i?i:0,~r?r:void 0);if("Enter"===t.key)if(y.test(a)){t.preventDefault();const[e,i]=a.match(y);t.target.setRangeText(`\n${i} `,n,s,"end")}else if(w.test(a)){t.preventDefault();const[e,i,r]=a.match(w);t.target.setRangeText(`\n${i}${Number(r)+1}. `,n,s,"end")}else j.test(a)&&t.target.setRangeText("\n",n-3,s,"end");else"Tab"===t.key&&(j.test(a)?(t.preventDefault(),t.target.setRangeText("  - ",n-2-x.test(a),s,"end")):0===a.trim().length&&(t.preventDefault(),t.target.setRangeText(" > ",n,s,"end")))}makePrettier(t){var e;const{current:n}=this.textarea,{relatedTarget:s}=t;if(n&&!(null==s||null===(e=s.classList)||void 0===e?void 0:e.contains("md-command"))){const{value:t}=n;this.constructor.makePrettier(t).then(t=>{n.value=t,this.props.onChange({target:n})}).catch(console.warn)}}componentDidMount(){if(this.props.initiallyActive&&this.props.initialFocus){const{current:t}=this.textarea,{text:e,start:n,end:s}=this.props.initialFocus,i=t.value.indexOf(e,n)-n;t.setSelectionRange(i+n,i+s),requestAnimationFrame(()=>t.focus())}}componentDidUpdate(){if(this.focusPosition&&this.textarea.current){const{current:t}=this.textarea,e=t.value.lastIndexOf(this.focusPosition.text)+this.focusPosition.offset;t.setSelectionRange(e,e),this.focusPosition=null}}render(){return this.state.active?Object(s.h)("fieldset",{className:"markdown-editor"},Object(s.h)("legend",null,"Markdown editor"),b(this,T)[T],Object(s.h)("p",null,Object(s.h)("textarea",f({},this.props,{ref:this.textarea,onKeyDown:b(this,C)[C],onBlur:b(this,S)[S],rows:"10",cols:"50"})))):this.props.value?Object(s.h)(a.a,{content:this.props.value,attributes:b(this,L)[L]}):Object(s.h)("p",{onClick:t=>{t.stopImmediatePropagation(),this.setState({active:!0})},onFocus:()=>{this.setState({active:!0})}},Object(s.h)("em",{style:{fontSize:"smaller"}},"Empty section, click to add content."))}}var P=g("prettierJobs"),C=g("helper"),S=g("makePrettier"),L=g("markdownContentAttributes"),T=g("actionBar");Object.defineProperty(k,P,{writable:!0,value:Promise.resolve()})}}]);