(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{26:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(0),s=n(27);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const a=new(n.n(s).a);class i extends r.a{constructor(...t){var e,n,r;super(...t),r={loading:!0},(n="state")in(e=this)?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}static translate(t){let e;const n=new Promise(t=>e=t),r=function(t,e,n){if(t!==e)throw new TypeError("Private static access of wrong provenance");return n.value}(this,i,c).then(()=>new Promise((e,n)=>{a.onmessage=({data:t})=>{e(t)},a.onmessageerror=n,a.onerror=n,a.postMessage(t)})).finally(e);return function(t,e,n,r){if(t!==e)throw new TypeError("Private static access of wrong provenance");if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}(this,i,c,n),r}componentDidMount(){this.translate()}componentDidUpdate(t){t.content!==this.props.content&&this.translate()}translate(){this.constructor.translate(this.props.content).then(t=>{this.setState({loading:!1,html:t})}).catch(t=>{console.error(t),this.setState({loading:!1,html:"<div data-ignore class='error'>Error when rendering markdown content</div>"})})}render(){return this.state.loading?Object(r.h)("p",{"data-ignore":!0},"Loading..."):Object(r.h)("output",o({"data-contents":!0,dangerouslySetInnerHTML:{__html:this.state.html}},this.props.attributes))}}var c={writable:!0,value:Promise.resolve()}},27:function(t,e,n){t.exports=function(){return new Worker(n.p+"25e8b5bb6f306b1d55e5.worker.js")}},34:function(t,e,n){"use strict";const r="HTMLDialogElement"in window;e.a=t=>r?Promise.resolve():Promise.all([n.e(26).then(n.bind(null,40)),n.e(17).then(n.t.bind(null,41,7))]).then(e=>e[0].default.registerDialog(t))},36:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(0),s=n(42),o=n(34);function a(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}const i=t=>t.stopPropagation();class c extends r.a{constructor(...t){var e,n,s;super(...t),e=this,n="dialog",s=Object(r.g)(),n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,l.set(this,{writable:!0,value:this.handleSubmit.bind(this)})}componentWillMount(){const{type:t,text:e}=this.props;this.setState({type:t,text:e})}componentDidMount(){this.update()}componentDidUpdate(t){this.update(t)}update(t={}){const{current:e}=this.dialog;Object(o.a)(e).then(()=>e&&!e.open&&e.showModal())}handleSubmit(){const t={...this.state};requestIdleCallback(()=>this.props.saveState(t))}render(){return Object(r.h)("dialog",{"data-do-not-export":!0,"data-ignore":!0,onClose:this.props.resetState,onClick:i,ref:this.dialog},Object(r.h)("form",{method:"dialog",onSubmit:a(this,l)},Object(r.h)("div",null,Object(r.h)("label",null,"Footer: ",Object(r.h)(s.a,{name:"description",value:this.state.text,onChange:t=>this.setState({text:t.target.value}),initialFocus:this.props.focusPosition,initiallyActive:!0})),Object(r.h)("button",{type:"submit"},"Save"),Object(r.h)("button",{type:"reset",onClick:this.props.resetState},"Cancel"))))}}var l=new WeakMap},42:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var r=n(0),s=n(31),o=n(32),a=n(26),i=n(43);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}const u=new(n.n(i).a),p=[{label:o.a,char:"**",shortcut:"b"},{label:o.e,char:"_",shortcut:"i"},{label:o.g,charAfter:"\n\n- ",selectionAfter:!0},{label:o.f,charBefore:"[",charAfter:"](https://)",selectionAfter:!0,selectionOffset:[2,1],shortcut:"k"}],d=/\n\s*-\s.+$/,f=/\n(\s*)(\d+)\.\s.+$/,b=/\n\s*(-|\d+\.)\s*$/,g=/\n\s*\d\.\s*$/;class v extends r.a{constructor(...t){super(...t),l(this,"state",{active:this.props.initiallyActive}),l(this,"focusPosition",this.props.focusPosition),l(this,"textarea",Object(r.g)()),w.set(this,{writable:!0,value:this.helper.bind(this)}),m.set(this,{writable:!0,value:this.makePrettier.bind(this)}),O.set(this,{writable:!0,value:{contenteditable:"true",className:"editable-markdown-preview",onBlur:this.getCaretPosition.bind(this),onClick:t=>{t.stopImmediatePropagation(),this.setState({active:!0})}}}),y.set(this,{writable:!0,value:Object(r.h)("p",null,Object(r.h)("button",{hidden:!0,type:"button",onClick:()=>{var t;return null===(t=this.textarea.current)||void 0===t?void 0:t.focus()}}),p.map(t=>Object(r.h)("button",{onClick:this.handleCommand(t),accesskey:t.shortcut,type:"button"},Object(r.h)(s.a,{icon:t.label})))," | ",Object(r.h)("button",{accesskey:"s",onClick:()=>this.setState({active:!1})},Object(r.h)(s.a,{icon:o.h})," Preview"))})}static makePrettier(t){let e;const n=new Promise(t=>e=t),r=function(t,e,n){if(t!==e)throw new TypeError("Private static access of wrong provenance");return n.value}(this,v,P).then(()=>new Promise((e,n)=>{u.onmessage=({data:t})=>{e(t)},u.onmessageerror=n,u.onerror=n,u.postMessage(t)})).finally(e);return function(t,e,n,r){if(t!==e)throw new TypeError("Private static access of wrong provenance");if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}(this,v,P,n),r}getCaretPosition(t){if(window.getSelection){const{anchorNode:t,anchorOffset:e}=window.getSelection();this.focusPosition={text:t.textContent,offset:e}}}handleCommand(t){return e=>{const{current:n}=this.textarea;if(!n)return;const{selectionStart:r,selectionEnd:s,value:o}=n,a=t.charBefore||t.char||"",i=t.charAfter||t.char||"";if(n.value=o.substring(0,r)+a+o.substring(r,s)+i+o.substring(s),t.selectionAfter)if(t.selectionOffset){const[e,r]=t.selectionOffset;n.setSelectionRange(s+a.length+e,s+a.length+i.length-r)}else n.setSelectionRange(s+i.length,s+i.length);else n.setSelectionRange(r+a.length,s+a.length);this.props.onChange({target:n}),n.focus()}}helper(t){const{value:e,selectionStart:n,selectionEnd:r}=t.target,s=e.lastIndexOf("\n",n-1),o=e.indexOf("\n",r-1),a=e.substring(~s?s:0,~o?o:void 0);if(13===t.keyCode)if(d.test(a))t.preventDefault(),t.target.setRangeText("\n- ",n,r,"end");else if(f.test(a)){t.preventDefault();const[e,s,o]=a.match(f);t.target.setRangeText(`\n${s}${Number(o)+1}. `,n,r,"end")}else b.test(a)&&t.target.setRangeText("\n",n-3,r,"end");else 9===t.keyCode&&(b.test(a)?(t.preventDefault(),t.target.setRangeText("  - ",n-2-g.test(a),r,"end")):0===a.trim().length&&(t.preventDefault(),t.target.setRangeText(" > ",n,r,"end")))}makePrettier(t){const{current:e}=this.textarea;if(e){const{value:t}=e;this.constructor.makePrettier(t).then(t=>{e.value=t,this.props.onChange({target:e})}).catch(console.warn)}}componentDidMount(){if(this.props.initiallyActive&&this.props.initialFocus){const{current:t}=this.textarea,{text:e,start:n,end:r}=this.props.initialFocus,s=t.value.indexOf(e,n)-n;t.setSelectionRange(s+n,s+r),requestAnimationFrame(()=>t.focus())}}componentDidUpdate(){if(this.focusPosition&&this.textarea.current){const{current:t}=this.textarea,e=t.value.lastIndexOf(this.focusPosition.text)+this.focusPosition.offset;t.setSelectionRange(e,e),this.focusPosition=null}}render(){return this.state.active?Object(r.h)("fieldset",{className:"markdown-editor"},Object(r.h)("legend",null,"Markdown editor"),h(this,y),Object(r.h)("p",null,Object(r.h)("textarea",c({},this.props,{ref:this.textarea,onKeyDown:h(this,w),onBlur:h(this,m),rows:"10",cols:"50"})))):this.props.value?Object(r.h)(a.a,{content:this.props.value,attributes:h(this,O)}):Object(r.h)("p",{onClick:t=>{t.stopImmediatePropagation(),this.setState({active:!0})}},Object(r.h)("em",{style:{fontSize:"smaller"}},"Empty section, click to add content."))}}var w=new WeakMap,m=new WeakMap,O=new WeakMap,y=new WeakMap,P={writable:!0,value:Promise.resolve()}},43:function(t,e,n){t.exports=function(){return new Worker(n.p+"adfb402c072b1a1540cb.worker.js")}}}]);