(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{234:function(e,a,t){"use strict";var c=t(8),n=t(38),r=t(0),s=t.n(r),o=t(1),l=t.n(o),i=t(430),m=t.n(i),d=t(431),u={tag:d.m,className:l.a.string,cssModule:l.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.i)(m()(a,"card-footer"),t);return s.a.createElement(r,Object(c.a)({},o,{className:l}))};h.propTypes=u,h.defaultProps={tag:"div"},a.a=h},237:function(e,a,t){"use strict";var c=t(8),n=t(38),r=t(0),s=t.n(r),o=t(1),l=t.n(o),i=t(430),m=t.n(i),d=t(431),u={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.m,className:l.a.string,cssModule:l.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,l=e.check,i=e.inline,u=e.tag,h=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(d.i)(m()(a,!!r&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!o)&&"disabled"),t);return s.a.createElement(u,Object(c.a)({},h,{className:f}))};h.propTypes=u,h.defaultProps={tag:"div"},a.a=h},238:function(e,a,t){"use strict";var c=t(8),n=t(38),r=t(0),s=t.n(r),o=t(1),l=t.n(o),i=t(430),m=t.n(i),d=t(433),u=t.n(d),h=t(431),f=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:f,push:Object(h.e)(f,'Please use the prop "order"'),pull:Object(h.e)(f,'Please use the prop "order"'),order:f,offset:f})]),b={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:h.m,className:l.a.string,cssModule:l.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,l=e.tag,i=e.check,d=e.size,f=e.for,p=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];o.forEach(function(a,c){var n=e[a];if(delete p[a],n||""===n){var r,s=!c;if(u()(n)){var o,l=s?"-":"-"+a+"-";r=v(s,a,n.size),b.push(Object(h.i)(m()(((o={})[r]=n.size||""===n.size,o["order"+l+n.order]=n.order||0===n.order,o["offset"+l+n.offset]=n.offset||0===n.offset,o))),t)}else r=v(s,a,n),b.push(r)}});var g=Object(h.i)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),t);return s.a.createElement(l,Object(c.a)({htmlFor:f},p,{className:g}))};E.propTypes=b,E.defaultProps=g,a.a=E},239:function(e,a,t){"use strict";var c=t(8),n=t(38),r=t(0),s=t.n(r),o=t(1),l=t.n(o),i=t(430),m=t.n(i),d=t(431),u={children:l.a.node,inline:l.a.bool,tag:d.m,color:l.a.string,className:l.a.string,cssModule:l.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.inline,o=e.color,l=e.tag,i=Object(n.a)(e,["className","cssModule","inline","color","tag"]),u=Object(d.i)(m()(a,!r&&"form-text",!!o&&"text-"+o),t);return s.a.createElement(l,Object(c.a)({},i,{className:u}))};h.propTypes=u,h.defaultProps={tag:"small",color:"muted"},a.a=h},26:function(e,a,t){"use strict";var c=t(8),n=t(38),r=t(433),s=t.n(r),o=t(0),l=t.n(o),i=t(1),m=t.n(i),d=t(430),u=t.n(d),h=t(431),f=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),push:Object(h.e)(f,'Please use the prop "order"'),pull:Object(h.e)(f,'Please use the prop "order"'),order:f,offset:f})]),b={tag:h.m,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),m=[];r.forEach(function(a,c){var n=e[a];if(delete i[a],n||""===n){var r=!c;if(s()(n)){var o,l=r?"-":"-"+a+"-",d=v(r,a,n.size);m.push(Object(h.i)(u()(((o={})[d]=n.size||""===n.size,o["order"+l+n.order]=n.order||0===n.order,o["offset"+l+n.offset]=n.offset||0===n.offset,o)),t))}else{var f=v(r,a,n);m.push(f)}}}),m.length||m.push("col");var d=Object(h.i)(u()(a,m),t);return l.a.createElement(o,Object(c.a)({},i,{className:d}))};E.propTypes=b,E.defaultProps=g,a.a=E},64:function(e,a,t){"use strict";var c=t(8),n=t(38),r=t(60),s=t(129),o=t(0),l=t.n(o),i=t(1),m=t.n(i),d=t(430),u=t.n(d),h=t(431),f={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:h.m,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(s.a)(Object(s.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,s=e.className,o=e.close,i=e.cssModule,m=e.color,d=e.outline,f=e.size,p=e.tag,b=e.innerRef,g=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+m,E=Object(h.i)(u()(s,{close:o},o||"btn",o||v,!!f&&"btn-"+f,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);g.href&&"button"===p&&(p="a");var k=o?"Close":null;return l.a.createElement(p,Object(c.a)({type:"button"===p&&g.onClick?"button":void 0},g,{className:E,ref:b,onClick:this.onClick,"aria-label":t||k}))},a}(l.a.Component);p.propTypes=f,p.defaultProps={color:"secondary",tag:"button"},a.a=p},700:function(e,a,t){"use strict";t.r(a);var c=t(124),n=t(125),r=t(128),s=t(126),o=t(127),l=t(0),i=t.n(l),m=t(61),d=t(12),u=t(687),h=t(133),f=t(237),p=t(26),b=t(238),g=t(86),v=t(239),E=function(e){var a=e.customer,t=e.onChange,c=e.errors;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"name"},"Name")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"text",id:"name",name:"name",placeholder:"CU Name",onChange:t,value:a.name}),i.a.createElement(v.a,{color:"danger"},c.name))),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"url"},"Url")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"text",id:"url",name:"url",placeholder:"ie: www.example.com",onChange:t,value:a.url}),i.a.createElement(v.a,{color:"muted"},"This is a help text"))),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"pdf"},"PDF Number")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"text",id:"pdfs",name:"pdfs",placeholder:"Number of PDF",onChange:t,value:a.pdfs}),i.a.createElement(v.a,{color:"muted"},"This is a help text"))),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"kickoffDate"},"Kickoff ")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"date",id:"kickoffDate",name:"kickoffDate",placeholder:"Kickoff date",onChange:t,value:a.kickoffDate}))),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"finalChangesDate"},"Final Changes ")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"date",id:"finalChangesDate",name:"finalChangesDate",placeholder:"date",onChange:t,value:a.finalChangesDate}))),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"goLiveDate"},"Go Live ")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"date",id:"goLiveDate",name:"goLiveDate",placeholder:"date",onChange:t,value:a.goLiveDate}))))},k=function(e){var a=e.customer,t=e.onChange,c=e.errors;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,null,"Services")),i.a.createElement(p.a,{md:"9"},i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"website",name:"website",onChange:t,value:"website",checked:a&&a.services&&a.services.includes("website")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"website"},"Website")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"social-media",name:"social-media",onChange:t,value:"social-media",checked:a&&a.services.includes("social-media")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"social-media"},"Social Media")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"email",name:"email",onChange:t,value:"email",checked:a&&a.services.includes("email")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"email"},"Email")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"live-chat",name:"live-chat",onChange:t,value:"live-chat",checked:a&&a.services.includes("live-chat")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"live-chat"},"Live Chat")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"branding",name:"branding",onChange:t,value:"branding",checked:a&&a.services.includes("branding")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"branding"},"Branding")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"promet",name:"promet",onChange:t,value:"promet",checked:a&&a.services.includes("promet")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"promet"},"Promet")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"form-stack",name:"form-stack",onChange:t,value:"form-stack",checked:a&&a.services.includes("form-stack")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"form-stack"},"Form Stack")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"logo",name:"logo",onChange:t,value:"logo",checked:a&&a.services.includes("logo")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"logo"},"Logo")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"digital-signage",name:"digital-signage",onChange:t,value:"digital-signage",checked:a&&a.services.includes("digital-signage")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"digital-signage"},"Digital Signage")),i.a.createElement(f.a,{check:!0,inline:!0},i.a.createElement(g.a,{className:"form-check",type:"checkbox",id:"domain",name:"domain",onChange:t,value:"domain",checked:a&&a.services.includes("domain")}),i.a.createElement(b.a,{className:"form-check-label",check:!0,htmlFor:"domain"},"Domain")),i.a.createElement(v.a,{color:"danger"},c.services))))},N=function(e){var a=e.customer,t=e.onChange,c=e.errors;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"text-center pt-4"},"CU Contact Information"),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"contactName"},"Contact Name")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"text",id:"contactName",name:"contactName",placeholder:"CU Contact Name",onChange:t,value:a.contact&&a.contact.contactName}),i.a.createElement(v.a,{color:"danger"},c.contactName))),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"contactEmail"},"Contact email")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"email",id:"contactEmail",name:"contactEmail",placeholder:"CU Contact Email",onChange:t,value:a.contact&&a.contact.contactEmail}),i.a.createElement(v.a,{color:"danger"},c.contactEmail))),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"contactNumber"},"Contact Number")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"text",id:"contactNumber",name:"contactNumber",placeholder:"CU Contact Number",onChange:t,value:a.contact&&a.contact.contactNumber}),i.a.createElement(v.a,{color:"danger"},c.contactNumber))),i.a.createElement(f.a,{row:!0},i.a.createElement(p.a,{md:"3"},i.a.createElement(b.a,{htmlFor:"contactLocation"},"Contact Address")),i.a.createElement(p.a,{xs:"12",md:"9"},i.a.createElement(g.a,{type:"text",id:"contactLocation",name:"contactLocation",placeholder:"CU Contact Address",onChange:t,value:a.contact&&a.contact.contactLocation}),i.a.createElement(v.a,{color:"danger"},c.contactLocation))))},y=t(233),C=t(47),j=t(48),O=t(87),x=t(49),w=t(85),D=t(234),F=t(64),S=i.a.lazy(function(){return t.e(26).then(t.bind(null,697))}),z=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(r.a)(this,Object(s.a)(a).call(this,e))).toggle=t.toggle.bind(Object(h.a)(Object(h.a)(t))),t.toggleFade=t.toggleFade.bind(Object(h.a)(Object(h.a)(t))),t.state={collapse:!0,fadeIn:!0,timeout:300},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.customer._id||document.getElementById("customer-form").reset()}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"render",value:function(){var e=this,a=this.props,t=a.customer,c=a.users,n=a.onSave,r=a.onChange,s=a.errors,o=a.redirect,l=a.currentUser;return i.a.createElement(y.a,null,i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(C.a,null,i.a.createElement(p.a,{xs:"12",md:"12"},i.a.createElement(j.a,null,i.a.createElement(O.a,null,i.a.createElement("strong",null,"Customer Form")),i.a.createElement(x.a,null,i.a.createElement(w.a,{action:"",method:"post",encType:"multipart/form-data",id:"customer-form",ref:function(a){return e.myFormRef=a}},i.a.createElement(E,{customer:t,onChange:r,errors:s}),i.a.createElement(k,{customer:t,onChange:r,errors:s}),i.a.createElement(N,{customer:t,onChange:r,errors:s}),i.a.createElement(S,{customer:t,users:c,onChange:r,errors:s}),i.a.createElement(f.a,{check:!0,className:"mb-3"},i.a.createElement(b.a,{check:!0},i.a.createElement(g.a,{type:"checkbox",name:"Idle",checked:"Idle"===t.status,onChange:r})," ","Idle?")),("Admin"===l.role||"Bookkeeping"===l.role)&&i.a.createElement(f.a,{check:!0,className:"mb-3"},i.a.createElement(b.a,{check:!0},i.a.createElement(g.a,{type:"checkbox",name:"paid",checked:t.deposit,onChange:r})," ","Deposit Paid")),i.a.createElement(f.a,{check:!0,className:"mb-3"},i.a.createElement(b.a,{check:!0},i.a.createElement(g.a,{type:"checkbox",name:"DNS",checked:"DNS"===t.status,onChange:r})," ","Ready for DNS ?")),"Admin"===l.role&&i.a.createElement(f.a,{check:!0,className:"mb-3"},i.a.createElement(b.a,{check:!0},i.a.createElement(g.a,{type:"checkbox",name:"Live",checked:"Live"===t.status,onChange:r})," ","LIVE")),("Admin"===l.role||"Bookkeeping"===l.role)&&i.a.createElement(f.a,{check:!0,className:"mb-3"},i.a.createElement(b.a,{check:!0},i.a.createElement(g.a,{type:"checkbox",name:"finalPayment",checked:t.finalPayment,onChange:r})," ","Final Payment")))),i.a.createElement(D.a,{className:"d-flex justify-content-center"},i.a.createElement(F.a,{type:"submit",onClick:n,size:"md",color:"primary",className:"m-2"},i.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),i.a.createElement(F.a,{type:"reset",onClick:o,size:"md",color:"danger",className:"m-2"},i.a.createElement("i",{className:"fa fa-ban"})," Back")))))))}}]),a}(l.Component),M={_id:void 0,name:"",url:void 0,status:void 0,finalChangesDate:void 0,goLiveDate:void 0,log:[],services:[],pdfs:void 0,pm:void 0,dev:void 0,compliance:void 0},P=t(458),R=t(449),L=function(e){function a(e,t){var n;return Object(c.a)(this,a),(n=Object(r.a)(this,Object(s.a)(a).call(this,e,t))).updateCustomerState=function(e){var a=Object.assign({},n.state.customer);if("Deposit"===a.status&&"Assigned"!==a.status&&(a.status="Assigned"),"checkbox"===e.target.type)if("paid"===e.target.name)a.deposit=e.target.checked,a.status="Deposit";else if("finalPayment"===e.target.name)a.finalPayment=!0;else if("Idle"===e.target.name)a.status="Idle";else if("DNS"===e.target.name)"DNS"!==a.status?a.status="DNS":a.status="Assigned";else if("Live"===e.target.name)a.status="Live";else{var t=a.services;e.target.checked?t.push(e.target.value):t=t.filter(function(a){return a!==e.target.value}),a.services=t}else if("contactName"===e.target.name||"contactEmail"===e.target.name||"contactNumber"===e.target.name||"contactLocation"===e.target.name)a.contact||(a.contact={}),a.contact[e.target.name]=e.target.value;else{a[e.target.name]=e.target.value}return n.setState({customer:a})},n.saveCustomer=function(e){e.preventDefault();var a=Object.assign({},n.state.customer);Object(P.validateAll)(a,{name:"required|string",services:"required|array"}).then(function(){a._id?(n.setState({saving:!0}),n.props.customersActions.updateCustomer(a),n.setState({toDashboard:!0})):(n.setState({saving:!0}),n.props.customersActions.saveCustomer(a),n.setState({toDashboard:!0}))}).catch(function(e){console.log(e);var a={};e.forEach(function(e){return a[e.field]=e.message}),n.setState({errors:a})})},n.redirect=function(){n.setState({toDashboard:!0})},n.state={customer:Object.assign({},n.props.customer),users:[],errors:{},saving:!1,disabledAdvance:!1,disabledLive:!1,toDashboard:!1,assign:!1},n}return Object(o.a)(a,e),Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.props.customer&&this.props.customer._id!==e.customer._id&&this.setState({customer:Object.assign({},e.customer)})}},{key:"componentWillMount",value:function(){var e=this.props.location.pathname,a={};if(e.includes("/edit")){if(this.props.location.state.customer)a=this.props.location.state.customer;else{var t=this.props.match.params.id;a=this.props.customers.find(function(e){return e._id===t})}this.setState({customer:a})}else e.includes("/add")&&this.setState({customer:M})}},{key:"componentDidMount",value:function(){this.setState({users:this.props.users})}},{key:"render",value:function(){return this.state.toDashboard?i.a.createElement(u.a,{to:"/customers"}):i.a.createElement(z,{customer:this.state.customer,users:this.state.users,onSave:this.saveCustomer,onChange:this.updateCustomerState,errors:this.state.errors,saving:this.state.saving,redirect:this.redirect,currentUser:this.props.currentUser})}}]),a}(i.a.Component);a.default=Object(m.b)(function(e){return{customers:e.customers,users:e.users,currentUser:e.auth.user}},function(e){return{customersActions:Object(d.bindActionCreators)(R,e)}})(L)},85:function(e,a,t){"use strict";var c=t(8),n=t(38),r=t(60),s=t(129),o=t(0),l=t.n(o),i=t(1),m=t.n(i),d=t(430),u=t.n(d),h=t(431),f={children:m.a.node,inline:m.a.bool,tag:h.m,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(Object(s.a)(t))),t.submit=t.submit.bind(Object(s.a)(Object(s.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,s=e.tag,o=e.innerRef,i=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(h.i)(u()(a,!!r&&"form-inline"),t);return l.a.createElement(s,Object(c.a)({},i,{ref:o,className:m}))},a}(o.Component);p.propTypes=f,p.defaultProps={tag:"form"},a.a=p},86:function(e,a,t){"use strict";var c=t(8),n=t(38),r=t(60),s=t(129),o=t(0),l=t.n(o),i=t(1),m=t.n(i),d=t(430),u=t.n(d),h=t(431),f={children:m.a.node,type:m.a.string,size:m.a.string,bsSize:m.a.string,state:Object(h.e)(m.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:m.a.bool,invalid:m.a.bool,tag:h.m,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),static:Object(h.e)(m.a.bool,'Please use the prop "plaintext"'),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(Object(s.a)(t))),t.focus=t.focus.bind(Object(s.a)(Object(s.a)(t))),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,o=e.state,i=e.valid,m=e.invalid,d=e.tag,f=e.addon,p=e.static,b=e.plaintext,g=e.innerRef,v=Object(n.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),E=["radio","checkbox"].indexOf(r)>-1,k=new RegExp("\\D","g"),N=d||("select"===r||"textarea"===r?r:"input"),y="form-control";b||p?(y+="-plaintext",N=d||"input"):"file"===r?y+="-file":E&&(y=f?null:"form-check-input"),o&&"undefined"===typeof i&&"undefined"===typeof m&&("danger"===o?m=!0:"success"===o&&(i=!0)),v.size&&k.test(v.size)&&(Object(h.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=v.size,delete v.size);var C=Object(h.i)(u()(a,m&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,y),t);return("input"===N||d&&"function"===typeof d)&&(v.type=r),!v.children||b||p||"select"===r||"string"!==typeof N||"select"===N||(Object(h.n)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),l.a.createElement(N,Object(c.a)({},v,{ref:g,className:C}))},a}(l.a.Component);p.propTypes=f,p.defaultProps={type:"text"},a.a=p}}]);
//# sourceMappingURL=19.c17ecf88.chunk.js.map