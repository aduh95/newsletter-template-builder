(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{46:function(t,e,s){"use strict";s.r(e),s.d(e,"default",function(){return c});var n=s(0),a=s(59),i=s(10),o=s(8),r=s(9);function u(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var l=0;function h(t){return"__private_"+l+++"_"+t}class c extends n.a{constructor(...t){var e;super(...t),this.state={css:i.a.get(),hostname:(null===(e=o.default.getAsURL())||void 0===e?void 0:e.toString())||"",name:r.default.get()},Object.defineProperty(this,d,{writable:!0,value:()=>{this.componentWillUnmount(),i.a.set(this.state.css),o.default.set(this.state.hostname),r.default.set(this.state.name),this.componentDidMount(),this.props.saveChange&&requestAnimationFrame(this.props.saveChange)}}),Object.defineProperty(this,p,{writable:!0,value:this.update.bind(this,"css")}),Object.defineProperty(this,b,{writable:!0,value:this.update.bind(this,"hostname")}),Object.defineProperty(this,m,{writable:!0,value:this.update.bind(this,"name")})}update(t,e){var s;const n="string"==typeof e?e:null==e?void 0:null===(s=e.target)||void 0===s?void 0:s.value;this.setState({[t]:n})}componentDidMount(){i.a.subscribe(u(this,p)[p]),o.default.subscribe(u(this,b)[b]),r.default.subscribe(u(this,m)[m])}componentWillUnmount(){i.a.unsubscribe(u(this,p)[p]),o.default.unsubscribe(u(this,b)[b]),r.default.unsubscribe(u(this,m)[m])}render(){return Object(n.h)(a.a,{onClose:this.props.resetState},Object(n.h)("form",{method:"dialog",onSubmit:u(this,d)[d]},Object(n.h)("div",null,Object(n.h)("label",null,"Name: ",Object(n.h)("input",{name:"name",value:this.state.name,required:!0,onChange:u(this,m)[m]})),Object(n.h)("label",null,"Targeted domain name: ",Object(n.h)("input",{name:"hostname",type:"url",placeholder:"E.G.: https://se.com",value:this.state.hostname,onChange:u(this,b)[b]})),Object(n.h)("label",null,"Custom CSS style: ",Object(n.h)("textarea",{name:"css",value:this.state.css,onChange:u(this,p)[p]})),Object(n.h)("button",{type:"submit"},"Save"),Object(n.h)("button",{type:"reset",onClick:this.props.resetState},"Cancel"),this.props.previousStateDate?Object(n.h)("button",{type:"button",onClick:this.props.recoverSavedState},"Recover last template"):null)))}}var d=h("handleSubmit"),p=h("updateCSS"),b=h("updateHostName"),m=h("updateName")},59:function(t,e,s){"use strict";var n=s(0),a=s(2);const i="HTMLDialogElement"in window;var o=t=>i?Promise.resolve():Promise.all([s.e(24).then(s.bind(null,64)),s.e(13).then(s.t.bind(null,65,7))]).then(e=>e[0].default.registerDialog(t));s.d(e,"a",function(){return u});const r=t=>t.stopPropagation();class u extends n.a{constructor(...t){super(...t),this.dialog=Object(n.g)()}componentDidMount(){this.update()}componentDidUpdate(){this.update()}update(){const{current:t}=this.dialog;o(t).then(()=>t&&!t.open&&t.showModal())}render(){return Object(a.c)(Object(n.h)("dialog",{"data-do-not-export":!0,"data-ignore":!0,onClose:this.props.onClose,onClick:r,ref:this.dialog},this.props.children),document.body)}}}}]);