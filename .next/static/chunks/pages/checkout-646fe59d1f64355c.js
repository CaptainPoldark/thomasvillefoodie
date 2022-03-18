(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{4301:function(e,n,t){t(6477),e.exports=self.fetch.bind(self)},6477:function(e,n){"use strict";n.Headers=self.Headers,n.Request=self.Request,n.Response=self.Response,n.fetch=self.fetch},354:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return t(4918)}])},4918:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r=t(5893),s=t(7294),a=t(267),o=t(1252),i="https://js.stripe.com/v3",l=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",d=null,f=function(e){return null!==d||(d=new Promise((function(n,t){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(c),window.Stripe)n(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(i,'"]')),n=0;n<e.length;n++){var t=e[n];if(l.test(t.src))return t}return null}();r&&e?console.warn(c):r||(r=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(i).concat(n);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(t),t}(e)),r.addEventListener("load",(function(){window.Stripe?n(window.Stripe):t(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){t(new Error("Failed to load Stripe.js"))}))}catch(s){return void t(s)}else n(null)}))),d},p=function(e,n,t){if(null===e)return null;var r=e.apply(void 0,n);return function(e,n){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.10.0",startTime:n})}(r,t),r},u=Promise.resolve().then((function(){return f(null)})),x=!1;u.catch((function(e){x||console.warn(e)}));var m=t(6664),h=t(4051),b=t.n(h),g=t(5988),w=t.n(g),j=t(7905),v=t(7954),y=t(609),k=t(4301),N=t.n(k);var E=function(e){return(0,r.jsxs)("div",{className:"jsx-2213986cca10df41",children:[(0,r.jsxs)("div",{className:"jsx-2213986cca10df41",children:[(0,r.jsx)("label",{htmlFor:"card-element",className:"jsx-2213986cca10df41",children:"Credit or debit card"}),(0,r.jsx)("div",{className:"jsx-2213986cca10df41",children:(0,r.jsx)("fieldset",{style:{border:"none"},className:"jsx-2213986cca10df41",children:(0,r.jsxs)("div",{className:"jsx-2213986cca10df41 form-row",children:[(0,r.jsx)("div",{id:"card-element",style:{width:"100%"},className:"jsx-2213986cca10df41",children:(0,r.jsx)(m.CardElement,{options:{style:{width:"100%",base:{fontSize:"18px"}}}})}),(0,r.jsx)("br",{className:"jsx-2213986cca10df41"}),(0,r.jsx)("div",{className:"jsx-2213986cca10df41 order-button-wrapper",children:(0,r.jsx)("button",{onClick:e.submitOrder,className:"jsx-2213986cca10df41",children:"Confirm order"})}),e.stripeError?(0,r.jsx)("div",{className:"jsx-2213986cca10df41",children:e.stripeError.toString()}):null,(0,r.jsx)("div",{id:"card-errors",role:"alert",className:"jsx-2213986cca10df41"})]})})})]}),(0,r.jsx)(w(),{id:"2213986cca10df41",children:".order-button-wrapper.jsx-2213986cca10df41{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nwidth:100%;\n-webkit-align-items:flex-end;\n-webkit-box-align:flex-end;\n-ms-flex-align:flex-end;\nalign-items:flex-end;\n-webkit-box-pack:end;\n-ms-flex-pack:end;\n-webkit-justify-content:flex-end;\njustify-content:flex-end}"})]})},S=t(4394),P=t(6808),C=t.n(P),Z=t(1163),_=t(3454);function z(e,n,t,r,s,a,o){try{var i=e[a](o),l=i.value}catch(c){return void t(c)}i.done?n(l):Promise.resolve(l).then(r,s)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function o(e){z(a,r,s,o,i,"next",e)}function i(e){z(a,r,s,o,i,"throw",e)}o(void 0)}))}}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var R=function(){var e=function(e){var n=t[e.target.name]=e.target.value;console.log(e.target.value),a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}({},t,{updateItem:n}))},n=(0,s.useState)({address:"",city:"",state:"",stripe_id:""}),t=n[0],a=n[1],o=(0,s.useState)(""),i=o[0],l=o[1],c=(0,m.useStripe)(),d=(0,m.useElements)(),f=(0,s.useContext)(S.Z);function p(){return(p=O(b().mark((function e(){var n,r,s,a,o;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l("Payment Processing..."),n=d.getElement(m.CardElement),r=_.env.NEXT_PUBLIC_API_URL||"https://foodiedb.battlegroundls.com",e.next=5,c.createToken(n);case 5:return s=e.sent,a=C().get("token"),e.next=9,N()("".concat(r,"/api/orders"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({data:{amount:Number(Math.round(f.cart.total+"e2")+"e-2")/100,dishes:f.cart.items,address:t.address,city:t.city,state:t.state,token:s.token.id}})});case 9:(o=e.sent).ok||(console.log(o),l(o.statusText),console.log(o.statusText)),o.ok&&(l("Payment Processed Successfully!"),setTimeout(1e3,Z.default.push("/")));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.jsxs)("div",{className:"jsx-81a0afea84137dc1 paper",children:[(0,r.jsx)("h5",{className:"jsx-81a0afea84137dc1",children:"Your information:"}),(0,r.jsx)("hr",{className:"jsx-81a0afea84137dc1"}),(0,r.jsx)(j.Z,{style:{display:"flex"},children:(0,r.jsxs)("div",{style:{flex:"0.90",marginRight:10},className:"jsx-81a0afea84137dc1",children:[(0,r.jsx)(v.Z,{children:"Address"}),(0,r.jsx)(y.Z,{name:"address",onChange:e})]})}),(0,r.jsxs)(j.Z,{style:{display:"flex"},children:[(0,r.jsxs)("div",{style:{flex:"0.65",marginRight:"6%"},className:"jsx-81a0afea84137dc1",children:[(0,r.jsx)(v.Z,{children:"City"}),(0,r.jsx)(y.Z,{name:"city",onChange:e})]}),(0,r.jsxs)("div",{style:{flex:"0.25",marginRight:0},className:"jsx-81a0afea84137dc1",children:[(0,r.jsx)(v.Z,{children:"State"}),(0,r.jsx)(y.Z,{name:"state",onChange:e})]})]}),(0,r.jsx)(E,{data:t,stripeError:i,submitOrder:function(){return p.apply(this,arguments)}}),(0,r.jsx)(w(),{id:"81a0afea84137dc1",children:'.paper{border:1px solid lightgray;\nbox-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\nheight:550px;\npadding:30px;\nbackground:#fff;\nborder-radius:6px;\nmargin-top:90px}\n.form-half{-webkit-flex:0.5;\n-ms-flex:0.5;\nflex:0.5}\n*{box-sizing:border-box}\nbody, html{background-color:#f6f9fc;\nfont-size:18px;\nfont-family:Helvetica Neue, Helvetica, Arial, sans-serif}\nh1{color:#32325d;\nfont-weight:400;\nline-height:50px;\nfont-size:40px;\nmargin:20px 0;\npadding:0}\n.Checkout{margin:0 auto;\nmax-width:800px;\nbox-sizing:border-box;\npadding:0 5px}\nlabel{color:#6b7c93;\nfont-weight:300;\nletter-spacing:0.025em}\nbutton{white-space:nowrap;\nborder:0;\noutline:0;\ndisplay:inline-block;\nheight:40px;\nline-height:40px;\npadding:0 14px;\nbox-shadow:0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\ncolor:#fff;\nborder-radius:4px;\nfont-size:15px;\nfont-weight:600;\ntext-transform:uppercase;\nletter-spacing:0.025em;\nbackground-color:#6772e5;\n-webkit-text-decoration:none;\ntext-decoration:none;\n-webkit-transition:all 150ms ease;\n-webkit-transition:all 150ms ease;\ntransition:all 150ms ease;\nmargin-top:10px}\nform{margin-bottom:40px;\npadding-bottom:40px;\nborder-bottom:3px solid #e6ebf1}\nbutton:hover{color:#fff;\ncursor:pointer;\nbackground-color:#7795f8;\n-webkit-transform:translateY(-1px);\n-moz-transform:translateY(-1px);\n-ms-transform:translateY(-1px);\ntransform:translateY(-1px);\nbox-shadow:0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)}\ninput, .StripeElement{display:block;\nbackground-color:#f8f9fa!important;\nmargin:10px 0 20px 0;\nmax-width:500px;\npadding:10px 14px;\nfont-size:1em;\nfont-family:"Source Code Pro", monospace;\nbox-shadow:rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;\nborder:0;\noutline:0;\nborder-radius:4px;\nbackground:white}\ninput::placeholder{color:#aab7c4}\ninput:focus, .StripeElement--focus{box-shadow:rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px;\n-webkit-transition:all 150ms ease;\n-webkit-transition:all 150ms ease;\ntransition:all 150ms ease}\n.StripeElement.IdealBankElement, .StripeElement.PaymentRequestButton{padding:0}'})]})},A=t(8851);var F=function(){var e=(0,s.useContext)(S.Z).isAuthenticated,n=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];x=!0;var r=Date.now();return u.then((function(e){return p(e,n,r)}))}("pk_test_51KUL8gJDtFQDLEs1Hwb8wFvEns7jneiJIumEZC825rvqENis0p7jAE7Tg8PT58eIHg18ZtIlUT9J3Fg2qHpgO4U900Z2XCsawP");return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(o.Z,{style:{paddingRight:0},sm:{size:3,order:1,offset:2},children:[(0,r.jsx)("h1",{style:{margin:20},children:"Checkout"}),(0,r.jsx)(A.Z,{isAuthenticated:e})]}),(0,r.jsx)(o.Z,{style:{paddingLeft:5},sm:{size:6,order:2},children:(0,r.jsx)(m.Elements,{stripe:n,children:(0,r.jsx)(R,{})})})]})}},7905:function(e,n,t){"use strict";var r=t(7462),s=t(3366),a=t(7294),o=t(5697),i=t.n(o),l=t(4184),c=t.n(l),d=t(3663),f={children:i().node,row:i().bool,check:i().bool,inline:i().bool,disabled:i().bool,tag:d.iC,className:i().string,cssModule:i().object},p=function(e){var n=e.className,t=e.cssModule,o=e.row,i=e.disabled,l=e.check,f=e.inline,p=e.tag,u=(0,s.Z)(e,["className","cssModule","row","disabled","check","inline","tag"]),x=(0,d.mx)(c()(n,!!o&&"row",l?"form-check":"form-group",!(!l||!f)&&"form-check-inline",!(!l||!i)&&"disabled"),t);return"fieldset"===p&&(u.disabled=i),a.createElement(p,(0,r.Z)({},u,{className:x}))};p.propTypes=f,p.defaultProps={tag:"div"},n.Z=p},7954:function(e,n,t){"use strict";var r=t(7462),s=t(3366),a=t(7294),o=t(5697),i=t.n(o),l=t(4184),c=t.n(l),d=t(3663),f=i().oneOfType([i().number,i().string]),p=i().oneOfType([i().bool,i().string,i().number,i().shape({size:f,order:f,offset:f})]),u={children:i().node,hidden:i().bool,check:i().bool,size:i().string,for:i().string,tag:d.iC,className:i().string,cssModule:i().object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i().array},x={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,n,t){return!0===t||""===t?e?"col":"col-"+n:"auto"===t?e?"col-auto":"col-"+n+"-auto":e?"col-"+t:"col-"+n+"-"+t},h=function(e){var n=e.className,t=e.cssModule,o=e.hidden,i=e.widths,l=e.tag,f=e.check,p=e.size,u=e.for,x=(0,s.Z)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];i.forEach((function(n,r){var s=e[n];if(delete x[n],s||""===s){var a,o=!r;if((0,d.Kn)(s)){var i,l=o?"-":"-"+n+"-";a=m(o,n,s.size),h.push((0,d.mx)(c()(((i={})[a]=s.size||""===s.size,i["order"+l+s.order]=s.order||0===s.order,i["offset"+l+s.offset]=s.offset||0===s.offset,i))),t)}else a=m(o,n,s),h.push(a)}}));var b=(0,d.mx)(c()(n,!!o&&"sr-only",!!f&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return a.createElement(l,(0,r.Z)({htmlFor:u},x,{className:b}))};h.propTypes=u,h.defaultProps=x,n.Z=h}},function(e){e.O(0,[774,888,179],(function(){return n=354,e(e.s=n);var n}));var n=e.O();_N_E=n}]);