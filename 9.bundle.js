(window.webpackJsonp=window.webpackJsonp||[]).push([[9,20,21],{37:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return r});var a=n(8);const s=/\/search#documentUUID\/([a-f0-9\-]+)\/(.+)$/;function r(t){if(s.test(t)&&a.default.getHostNameRegExp().test(t)){const[e,n,r]=s.exec(t),i=new URL("/search",a.default.get());return i.searchParams.set("documentUUID",n),i.searchParams.set("title",r),i.toString()}try{t=new URL(t).toString()}catch{}return t}},39:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return r});var a=n(0),s=n(12);class r extends a.a{handleDrag({currentTarget:t},e){const n=Array.from(t.parentNode.children),a=n.indexOf(t),s=n.indexOf(e);this.props.handleReOrder(a,s)}render(){const t=this.props.content||[];return Object(a.h)("ol",{className:"ordered-list"},t.concat([{}]).map(({label:e,href:n},r)=>Object(a.h)("li",{draggable:r<t.length,onDragStart:Object(s.a)(this.handleDrag.bind(this)),key:r},Object(a.h)("input",{name:"label",value:e||"",placeholder:"Link label",onChange:t=>this.props.handleChange(t,r)}),Object(a.h)("input",{name:"href",value:n||"",placeholder:"Link URL",onChange:t=>this.props.handleChange(t,r),type:"url"}))))}}},42:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h});var a=n(0),s=n(39),r=n(59),i=n(37);function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var c=0;function l(t){return"__private_"+c+++"_"+t}class h extends a.a{constructor(...t){super(...t),this.form=Object(a.g)(),Object.defineProperty(this,u,{writable:!0,value:this.handleReOrder.bind(this)}),Object.defineProperty(this,d,{writable:!0,value:this.handleChange.bind(this)}),Object.defineProperty(this,p,{writable:!0,value:this.handleSubmit.bind(this)})}componentWillMount(){const{type:t,title:e,content:n}=this.props;this.setState({type:t,title:e,content:Array.isArray(n)?n.map(t=>({...t})):[]})}componentDidMount(){this.update()}componentDidUpdate(t){this.update(t)}update(t={}){const{current:e}=this.form;if(e&&t.focus!==this.props.focus){const t=this.props.focus,n=null==t?void 0:t.match(/^(.+)\[(\d+)\]$/),a=n?e.querySelectorAll("input[name=".concat(n[1],"]")).item(n[2]):e.querySelector("input[name=".concat(t,"]"));a&&requestAnimationFrame(()=>{this.props.focusOffset&&a.setSelectionRange(...this.props.focusOffset),a.focus()})}}handleChange(t,e){const{name:n,value:a}=t.target,{content:s}=this.state;e===s.length?s.push({[n]:a}):s[e][n]=a,this.setState({content:s})}handleSubmit(){const t={...this.state};t.content=this.state.content.filter(({label:t,href:e})=>t||e).map(({label:t,href:e})=>({label:t||"[Link]",href:Object(i.default)(e)||"about:blank"})),requestAnimationFrame(()=>this.props.saveState(t))}handleReOrder(t,e){const n=this.state.content;let a=[];-1===e?a=a.concat(n.slice(0,t),n.slice(t+1)):t<e?a=a.concat(n.slice(0,t),n.slice(t+1,e),n.slice(t,1),n.slice(e)):t>e&&(a=a.concat(n.slice(0,e),n.slice(t,t+1),n.slice(e,t),n.slice(t+1))),t!==e&&this.setState({content:a})}render(){return Object(a.h)(r.a,{onClose:this.props.resetState},Object(a.h)("form",{method:"dialog",ref:this.form,onSubmit:o(this,p)[p]},Object(a.h)("div",null,Object(a.h)("label",null,"Title: ",Object(a.h)("input",{name:"title",required:!0,value:this.state.title,onChange:t=>this.setState({title:t.target.value})})),Object(a.h)(s.default,{content:this.state.content,handleChange:o(this,d)[d],handleReOrder:o(this,u)[u]}),Object(a.h)("button",{type:"submit"},"Save"),Object(a.h)("button",{type:"reset",onClick:this.props.resetState},"Cancel"))))}}var u=l("handleReOrder"),d=l("handleChange"),p=l("handleSubmit")},59:function(t,e,n){"use strict";var a=n(0),s=n(2);const r="HTMLDialogElement"in window;var i=t=>r?Promise.resolve():Promise.all([n.e(24).then(n.bind(null,64)),n.e(13).then(n.t.bind(null,65,7))]).then(e=>e[0].default.registerDialog(t));n.d(e,"a",function(){return c});const o=t=>t.stopPropagation();class c extends a.a{constructor(...t){super(...t),this.dialog=Object(a.g)()}componentDidMount(){this.update()}componentDidUpdate(){this.update()}update(){const{current:t}=this.dialog;i(t).then(()=>t&&!t.open&&t.showModal())}render(){return Object(s.c)(Object(a.h)("dialog",{"data-do-not-export":!0,"data-ignore":!0,onClose:this.props.onClose,onClick:o,ref:this.dialog},this.props.children),document.body)}}}}]);