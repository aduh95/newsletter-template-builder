(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9,21],{38:function(t,e,r){"use strict";r.r(e),r.d(e,"touchHandler",(function(){return a})),r.d(e,"clickHandler",(function(){return o})),r.d(e,"dblClickHandler",(function(){return l}));const i=1,s=300,n=new WeakMap;function a(t){const[e]=t.composedPath(),r=n.get(e)||0,i=t.timeStamp||Date.now();n.set(e,i),i-r<s&&l.call(this,t)}function o(t){if(!this.state.writeMode&&!t.ctrlKey&&t.which===i){t.preventDefault();const[e]=t.composedPath();"A"===e.nodeName&&(e.contentEditable="true",setTimeout(()=>{e.contentEditable="false",this.state.writeMode||r.e(0).then(r.bind(null,62)).then(t=>t.default).then(t=>t("Use Ctrl+Click to open the link"))},s))}}function l(t){if(!this.state.writeMode){var e,r;const n=[],a=t.composedPath();let o=0;for(;a[o]&&void 0===(null===(i=a[o].dataset)||void 0===i?void 0:i.key);){var i;o++}if(t.preventDefault(),window.getSelection){let t=0;const e=getSelection(),{anchorOffset:r,focusOffset:i}=e;if(o>0){let r=a[0];do{var s;const{previousSibling:e}=r;t+=(null==e?void 0:null===(s=e.textContent)||void 0===s?void 0:s.length)||0,r=e||r.parentNode}while(r&&r!==a[o]);this.setState({focusText:e.toString()})}n.push(t+r,t+i)}this.setState({writeMode:!0,focus:null===(e=a[o])||void 0===e?void 0:null===(r=e.dataset)||void 0===r?void 0:r.key,focusOffset:n})}}},40:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return b}));var i=r(0),s=r(38),n=r(59),a=r(11);function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var l=0;function c(t){return"__private_"+l+++"_"+t}const d=t=>t?Array.isArray(t)?t:[t]:[],h=t=>t;class p extends i.a{render(){return Object(i.h)("iframe",{src:this.props.src,frameborder:"0",width:"300",height:"175",loading:"lazy",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0,loading:"lazy","data-key":"src"})}}class u extends i.a{render(){return Object(i.h)("img",{alt:this.props.alt,src:this.props.src,loading:"lazy","data-key":"src"})}}class f extends i.a{render(){return this.props.src?this.props.isVideo?Object(i.h)(p,this.props):Object(i.h)(u,this.props):null}}class b extends i.a{constructor(...t){super(...t),this.state={writeMode:!1,data:JSON.stringify(this.props)},Object.defineProperty(this,w,{writable:!0,value:s.clickHandler.bind(this)}),Object.defineProperty(this,v,{writable:!0,value:s.dblClickHandler.bind(this)}),Object.defineProperty(this,O,{writable:!0,value:s.touchHandler.bind(this)})}update(t){this.setState({writeMode:!1,data:JSON.stringify(t)})}render(){return Object(i.h)("article",{className:this.props.isMain?"main":void 0,"data-type":"NewsletterArticle","data-json":this.state.data,onClick:o(this,w)[w],onDblclick:o(this,v)[v],onTouchEnd:o(this,O)[O]},Object(i.h)("h4",{"data-key":"title"},this.props.title),Object(i.h)(f,{isVideo:this.props.isVideo,src:this.props.illustration,alt:this.props.illustrationDescription}),Object(i.h)("div",null,Object(i.h)(n.a,{content:this.props.description,attributes:{"data-key":"description"}})),Object(i.h)("p",null,d(this.props.links).map((t,e)=>Object(i.h)(i.b,null,Object(i.h)("a",{"data-key":"label[".concat(e,"]"),href:h(t.href),target:"_blank",rel:"noopener"},t.label),".",Object(i.h)("br",null)))),Object(i.h)(a.default,{componentName:"NewsletterArticle",active:this.state.writeMode,props:{...this.props,focus:this.state.focus,focusOffset:this.state.focusOffset,focusText:this.state.focusText,saveState:this.update.bind(this),resetState:()=>this.setState({writeMode:!1})}}))}}var w=c("clickHandler"),v=c("dblClickHandler"),O=c("touchHandler")},43:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return c}));var i=r(0),s=r(40),n=r(11);function a(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var o=0;function l(t){return"__private_"+o+++"_"+t}class c extends i.a{constructor(...t){super(...t),this.state={newArticle:null},Object.defineProperty(this,d,{writable:!0,value:this.setState.bind(this,{openNewArticleDialog:!0})}),Object.defineProperty(this,h,{writable:!0,value:{saveState:this.addNewArticle.bind(this),resetState:()=>this.setState({openNewArticleDialog:!1})}}),Object.defineProperty(this,p,{writable:!0,value:!1}),Object.defineProperty(this,u,{writable:!0,value:!1})}addNewArticle(t){this.setState({newArticle:Object(i.h)("output",{"data-request-render":!0,"data-json":JSON.stringify(t)}),openNewArticleDialog:!1},()=>a(this,p)[p]=!0)}componentDidUpdate(){a(this,u)[u]?this.setState({newArticle:null},()=>a(this,u)[u]=!1):a(this,p)[p]&&(a(this,u)[u]=!0,a(this,p)[p]=!1)}render(){const t=this.props.content||[],e=t.filter(({isMain:t})=>!t).length,r=e%2==0?2:e%3==0||(e-1)%3==0?3:2;return Object(i.h)("section",{className:"newsletter","data-type":"NewsletterSection",style:{"--nb-of-columns":r},id:this.props.id},Object(i.h)("output",{hidden:!0,"data-key":"id"},this.props.id),Object(i.h)("output",{hidden:!0,"data-key":"illustration"},this.props.illustration),Object(i.h)("output",{hidden:!0,"data-key":"illustrationDescription"},this.props.illustrationDescription),Object(i.h)("h2",{className:"newsletter","data-key":"title"},this.props.title),t.map(t=>Object(i.h)(s.default,t)),Object(i.h)("button",{"data-ignore":!0,"data-do-not-export":!0,style:"grid-column: span var(--nb-of-columns)",onClick:a(this,d)[d]},"Add a new article"),Object(i.h)(n.default,{componentName:"NewsletterArticle",active:this.state.openNewArticleDialog,props:a(this,h)[h]}),this.state.newArticle)}}var d=l("createNewArticle"),h=l("newArticleProps"),p=l("readyToConsumeState"),u=l("readyToCleanState")},59:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var i=r(0),s=r(60);function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function a(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var o=0;const l=new(r.n(s).a);class c extends i.a{constructor(...t){super(...t),this.state={loading:!0}}static translate(t){let e;const r=new Promise(t=>e=t),i=a(this,d)[d].then(()=>new Promise((e,r)=>{l.onmessage=({data:t})=>{e(t)},l.onmessageerror=r,l.onerror=r,l.postMessage(t)})).finally(e);return a(this,d)[d]=r,i}componentDidMount(){this.translate()}componentDidUpdate(t){t.content!==this.props.content&&this.translate()}translate(){this.constructor.translate(this.props.content).then(t=>{this.setState({loading:!1,html:t})}).catch(t=>{console.error(t),this.setState({loading:!1,html:"<div data-ignore class='error'>Error when rendering markdown content</div>"})})}render(){return this.state.loading?Object(i.h)("p",{"data-ignore":!0},"Loading..."):Object(i.h)("output",n({"data-contents":!0,dangerouslySetInnerHTML:{__html:this.state.html}},this.props.attributes))}}var d="__private_"+o+++"_"+"translationJobs";Object.defineProperty(c,d,{writable:!0,value:Promise.resolve()})},60:function(t,e,r){t.exports=function(){return new Worker(r.p+"68d89b06e5bbcff2ad92.worker.js")}}}]);