(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9,21],{38:function(t,e,r){"use strict";r.r(e),r.d(e,"touchHandler",(function(){return a})),r.d(e,"clickHandler",(function(){return o})),r.d(e,"dblClickHandler",(function(){return c}));const n=1,i=300,s=new WeakMap;function a(t){const[e]=t.composedPath(),r=s.get(e)||0,n=t.timeStamp||Date.now();s.set(e,n),n-r<i&&c.call(this,t)}function o(t){if(!this.state.writeMode&&!t.ctrlKey&&t.which===n){t.preventDefault();const[e]=t.composedPath();"A"===e.nodeName&&(e.contentEditable="true",setTimeout(()=>{e.contentEditable="false",this.state.writeMode||r.e(0).then(r.bind(null,62)).then(t=>t.default).then(t=>t("Use Ctrl+Click to open the link"))},i))}}function c(t){if(!this.state.writeMode){var e,r;const s=[],a=t.composedPath();let o=0;for(;a[o]&&void 0===(null===(n=a[o].dataset)||void 0===n?void 0:n.key);){var n;o++}if(t.preventDefault(),window.getSelection){let t=0;const e=getSelection(),{anchorOffset:r,focusOffset:n}=e;if(o>0){let r=a[0];do{var i;const{previousSibling:e}=r;t+=(null==e?void 0:null===(i=e.textContent)||void 0===i?void 0:i.length)||0,r=e||r.parentNode}while(r&&r!==a[o]);this.setState({focusText:e.toString()})}s.push(t+r,t+n)}this.setState({writeMode:!0,focus:null===(e=a[o])||void 0===e?void 0:null===(r=e.dataset)||void 0===r?void 0:r.key,focusOffset:s})}}},40:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return b}));var n=r(0),i=r(38),s=r(59),a=r(11);function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var c=0;function l(t){return"__private_"+c+++"_"+t}const d=t=>t?Array.isArray(t)?t:[t]:[],h=t=>t;class p extends n.a{render(){return Object(n.h)("iframe",{src:this.props.src,frameborder:"0",width:"300",height:"175",loading:"lazy",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0,loading:"lazy","data-key":"src"})}}class u extends n.a{render(){return Object(n.h)("img",{alt:this.props.alt,src:this.props.src,loading:"lazy","data-key":"src"})}}class f extends n.a{render(){return this.props.src?this.props.isVideo?Object(n.h)(p,this.props):Object(n.h)(u,this.props):null}}class b extends n.a{constructor(...t){super(...t),this.state={writeMode:!1,data:JSON.stringify(this.props)},Object.defineProperty(this,w,{writable:!0,value:i.clickHandler.bind(this)}),Object.defineProperty(this,v,{writable:!0,value:i.dblClickHandler.bind(this)}),Object.defineProperty(this,O,{writable:!0,value:i.touchHandler.bind(this)})}update(t){this.setState({writeMode:!1,data:JSON.stringify(t)})}render(){return Object(n.h)("article",{className:this.props.isMain?"main":void 0,"data-type":"NewsletterArticle","data-json":this.state.data,onClick:o(this,w)[w],onDblclick:o(this,v)[v],onTouchEnd:o(this,O)[O]},Object(n.h)("h4",{"data-key":"title"},this.props.title),Object(n.h)(f,{isVideo:this.props.isVideo,src:this.props.illustration,alt:this.props.illustrationDescription}),Object(n.h)("div",null,Object(n.h)(s.a,{content:this.props.description,attributes:{"data-key":"description"}})),Object(n.h)("p",null,d(this.props.links).map((t,e)=>Object(n.h)(n.b,null,Object(n.h)("a",{"data-key":"label[".concat(e,"]"),href:h(t.href),target:"_blank",rel:"noopener"},t.label),".",Object(n.h)("br",null)))),Object(n.h)(a.default,{componentName:"NewsletterArticle",active:this.state.writeMode,props:{...this.props,focus:this.state.focus,focusOffset:this.state.focusOffset,focusText:this.state.focusText,saveState:this.update.bind(this),resetState:()=>this.setState({writeMode:!1})}}))}}var w=l("clickHandler"),v=l("dblClickHandler"),O=l("touchHandler")},54:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));var n=r(0),i=r(40),s=r(11);function a(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var o=0;function c(t){return"__private_"+o+++"_"+t}class l extends n.a{constructor(...t){super(...t),this.state={newTopic:null},Object.defineProperty(this,d,{writable:!0,value:this.setState.bind(this,{openNewArticleDialog:!0})}),Object.defineProperty(this,h,{writable:!0,value:{saveState:this.addNewArticle.bind(this),resetState:()=>this.setState({openNewArticleDialog:!1})}}),Object.defineProperty(this,p,{writable:!0,value:!1}),Object.defineProperty(this,u,{writable:!0,value:!1})}addNewArticle(t){this.setState({newTopic:Object(n.h)("output",{"data-request-render":!0,"data-json":JSON.stringify(t)}),openNewArticleDialog:!1},()=>a(this,p)[p]=!0)}componentDidUpdate(){a(this,u)[u]?this.setState({newTopic:null},()=>a(this,u)[u]=!1):a(this,p)[p]&&(a(this,u)[u]=!0,a(this,p)[p]=!1)}render(){const t=this.props.content||[];return Object(n.h)("section",{class:"newsletter hot-topics","data-type":"HotTopics"},Object(n.h)("h2",{"data-key":"title"},this.props.title||"[[Title]]"),t.map(t=>Object(n.h)(i.default,t)),Object(n.h)("button",{"data-ignore":!0,"data-do-not-export":!0,style:"grid-column: span var(--nb-of-columns)",onClick:a(this,d)[d]},"Add a new article"),Object(n.h)(s.default,{componentName:"NewsletterArticle",active:this.state.openNewArticleDialog,props:a(this,h)[h]}),this.state.newTopic)}}var d=c("createNewArticle"),h=c("newArticleProps"),p=c("readyToConsumeState"),u=c("readyToCleanState")},59:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(0),i=r(60);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function a(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var o=0;const c=new(r.n(i).a);class l extends n.a{constructor(...t){super(...t),this.state={loading:!0}}static translate(t){let e;const r=new Promise(t=>e=t),n=a(this,d)[d].then(()=>new Promise((e,r)=>{c.onmessage=({data:t})=>{e(t)},c.onmessageerror=r,c.onerror=r,c.postMessage(t)})).finally(e);return a(this,d)[d]=r,n}componentDidMount(){this.translate()}componentDidUpdate(t){t.content!==this.props.content&&this.translate()}translate(){this.constructor.translate(this.props.content).then(t=>{this.setState({loading:!1,html:t})}).catch(t=>{console.error(t),this.setState({loading:!1,html:"<div data-ignore class='error'>Error when rendering markdown content</div>"})})}render(){return this.state.loading?Object(n.h)("p",{"data-ignore":!0},"Loading..."):Object(n.h)("output",s({"data-contents":!0,dangerouslySetInnerHTML:{__html:this.state.html}},this.props.attributes))}}var d="__private_"+o+++"_"+"translationJobs";Object.defineProperty(l,d,{writable:!0,value:Promise.resolve()})},60:function(t,e,r){t.exports=function(){return new Worker(r.p+"68d89b06e5bbcff2ad92.worker.js")}}}]);