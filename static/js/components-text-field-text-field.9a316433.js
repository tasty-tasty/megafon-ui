(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/TextField/TextField.less":function(e,a,t){},"./src/components/TextField/TextField.mdx":function(e,a,t){"use strict";t.r(a);var n=t("../../node_modules/react/index.js"),r=t.n(n),o=t("../../node_modules/@mdx-js/tag/dist/index.js"),s=t("../../node_modules/docz/dist/index.m.js"),i=(t("./src/components/TextField/TextField.less"),t("../../node_modules/react-input-mask/index.js")),l=t.n(i),c=t("./src/utils/cn.ts"),p=t("../../node_modules/deep-equal/index.js"),m=t("./src/icons/System/24/Checked_24.svg"),d=t("./src/icons/System/24/Cancel_24.svg"),u=t("./src/icons/Basic/24/Hide_24.svg"),f=t("./src/icons/Basic/24/Show_24.svg"),h=t("./src/utils/detectTouch.ts");function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,a){return(E=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=Object(c.a)("mfui-text-field"),x=function(e){function a(e){var t,n,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),n=this,r=(a.__proto__||Object.getPrototypeOf(a)).call(this,e),t=!r||"object"!==g(r)&&"function"!==typeof r?b(n):r,Object.defineProperty(b(t),"isTouch",{configurable:!0,enumerable:!0,writable:!0,value:Object(h.a)()}),Object.defineProperty(b(t),"blur",{configurable:!0,enumerable:!0,writable:!0,value:function(){return t.inputNode.blur()}}),Object.defineProperty(b(t),"focus",{configurable:!0,enumerable:!0,writable:!0,value:function(){return t.inputNode.focus()}}),Object.defineProperty(b(t),"handleEyeToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){t.setState(function(e){return{isPasswordHidden:!e.isPasswordHidden}})}}),Object.defineProperty(b(t),"addInputNode",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return t.inputNode=e}}),t.state={isPasswordHidden:!0},t}var t,r,o;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&E(e,a)}(a,n["Component"]),t=a,(r=[{key:"shouldComponentUpdate",value:function(e,a){return!(p(this.props,e)&&p(this.state,a))}},{key:"renderValidIcon",value:function(){return n.createElement("div",{className:T("icon-box")},n.createElement(m.default,{className:T("icon")}))}},{key:"renderErrorIcon",value:function(){return n.createElement("div",{className:T("icon-box")},n.createElement(d.default,{className:T("icon")}))}},{key:"renderCustomIcon",value:function(){return n.createElement("div",{className:T("icon-box",{custom:!!this.props.customIcon})},this.props.customIcon)}},{key:"renderPasswordFieldIcon",value:function(){var e=this.state.isPasswordHidden;return n.createElement("div",{className:T("icon-box",{password:!0}),onClick:this.handleEyeToggle},e?n.createElement(u.default,{className:T("icon")}):n.createElement(f.default,{className:T("icon")}))}},{key:"renderInputElem",value:function(e){var a=this.state.isPasswordHidden,t={disabled:this.props.disabled,name:this.props.name,id:this.props.id,placeholder:this.props.placeholder,onChange:this.props.onChange,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onKeyUp:this.props.onKeyUp,autoFocus:this.props.autoFocus,defaultValue:this.props.defaultValue,maxLength:this.props.maxLength,value:this.props.value,type:e&&!a?"text":this.props.type,required:this.props.required,autoComplete:this.props.autocomplete,className:T("field",{"big-space":this.props.bigSpace})};return this.props.mask?n.createElement(l.a,Object.assign({},t,{inputRef:this.addInputNode,mask:this.props.mask,maskChar:this.props.maskChar})):n.createElement("input",Object.assign({ref:this.addInputNode},t))}},{key:"render",value:function(){var e=this.props,a=e.isHideIcon,t=e.customIcon,r=e.error,o=e.color,s=e.valid,i=e.disabled,l=e.size,c=e.className,p=e.commentText,m=e.successText,d=e.noticeText,u=e.type,f=!a&&(!!t||r||s),h=!a&&!t,g="password"===u;return n.createElement("div",{className:T("",{valid:s,error:r,icon:f,password:g,disabled:i,color:o,size:l},c)},n.createElement("div",{className:T("field-wrapper",{"no-touch":!this.isTouch})},n.createElement("div",null,this.renderInputElem(g)),t&&this.renderCustomIcon(),h&&s&&this.renderValidIcon(),h&&r&&this.renderErrorIcon(),g&&this.renderPasswordFieldIcon()),(r||s)&&d&&n.createElement("div",{className:T("text",{error:!0}),dangerouslySetInnerHTML:{__html:d}}),p&&n.createElement("div",{className:T("text",{comment:!0})},p),m&&n.createElement("div",{className:T("text",{success:!0})},m))}}])&&y(t.prototype,r),o&&y(t,o),a}();Object.defineProperty(x,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{autocomplete:"off",type:"text",color:"default",isHideIcon:!1}});var v=x;try{x.displayName="TextField",x.__docgenInfo={description:"",displayName:"TextField",props:{color:{defaultValue:{value:"default"},description:"Field color scheme",name:"color",required:!1,type:{name:'"default" | "white"'}},size:{defaultValue:null,description:"Field size",name:"size",required:!1,type:{name:'"large"'}},noticeText:{defaultValue:null,description:"Error/Notice text",name:"noticeText",required:!1,type:{name:"string"}},commentText:{defaultValue:null,description:"Comment text",name:"commentText",required:!1,type:{name:"string"}},successText:{defaultValue:null,description:"Success text",name:"successText",required:!1,type:{name:"string"}},isHideIcon:{defaultValue:{value:"false"},description:"Not show icon of state",name:"isHideIcon",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Autofocus",name:"autoFocus",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"off"},description:"Autocomplete",name:"autocomplete",required:!1,type:{name:'"on" | "off"'}},valid:{defaultValue:null,description:"Validation passed",name:"valid",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Validation error",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disable field",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Required field",name:"required",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"Type - property tag <input>",name:"type",required:!1,type:{name:'"text" | "password" | "tel" | "email"'}},name:{defaultValue:null,description:"Field name",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Placeholder",name:"placeholder",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attribute",name:"id",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field value",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"Max length",name:"maxLength",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"Default value",name:"defaultValue",required:!1,type:{name:"string"}},customIcon:{defaultValue:null,description:"Custom icon",name:"customIcon",required:!1,type:{name:"Element"}},mask:{defaultValue:null,description:"Mask",name:"mask",required:!1,type:{name:"string"}},maskChar:{defaultValue:null,description:"Split symbol for mask",name:"maskChar",required:!1,type:{name:"string"}},bigSpace:{defaultValue:null,description:"Increased size of space between words in the text box",name:"bigSpace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom classname",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}},onBlur:{defaultValue:null,description:"Blur handler",name:"onBlur",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}},onFocus:{defaultValue:null,description:"Focus handler",name:"onFocus",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}},onKeyUp:{defaultValue:null,description:"KeyUp handler",name:"onKeyUp",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:x.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(e){}function _(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,"wrapper",function(){return w});var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250;return function(a){var t=a.children;return r.a.createElement("div",{style:{width:"".concat(e,"px")}},t)}};a.default=function(e){var a=e.components;_(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:a},r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"textfield"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#textfield"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"TextField"),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"properties"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),r.a.createElement(s.e,{of:v}),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"basic-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),r.a.createElement(s.d,{__position:1,__code:'<TextField name="name" />',wrapper:w()},r.a.createElement(v,{name:"name"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"mask-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#mask-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Mask usage"),r.a.createElement(s.d,{__position:2,__code:'<TextField\n  placeholder="+7 (999) 999-99-99"\n  mask="+7 (999) 999-99-99"\n  maskChar="_"\n/>',wrapper:w()},r.a.createElement(v,{placeholder:"+7 (999) 999-99-99",mask:"+7 (999) 999-99-99",maskChar:"_"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"error-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#error-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Error usage"),r.a.createElement(s.d,{__position:3,__code:'<TextField error={true} noticeText="Name is required" />',wrapper:w()},r.a.createElement(v,{error:!0,noticeText:"Name is required"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"valid-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#valid-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Valid usage"),r.a.createElement(s.d,{__position:4,__code:"<TextField valid={true} />",wrapper:w()},r.a.createElement(v,{valid:!0})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"comment-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#comment-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Comment usage"),r.a.createElement(s.d,{__position:5,__code:'<TextField commentText="Comment" />',wrapper:w()},r.a.createElement(v,{commentText:"Comment"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"success-text-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#success-text-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Success text usage"),r.a.createElement(s.d,{__position:6,__code:'<TextField successText="Field is correct" />',wrapper:w()},r.a.createElement(v,{successText:"Field is correct"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"max-length-text-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#max-length-text-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Max length text usage"),r.a.createElement(s.d,{__position:7,__code:"<TextField maxLength={10} />",wrapper:w()},r.a.createElement(v,{maxLength:10})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"disable-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#disable-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Disable usage"),r.a.createElement(s.d,{__position:8,__code:"<TextField disabled={true} />",wrapper:w()},r.a.createElement(v,{disabled:!0})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"password-type-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#password-type-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Password type usage"),r.a.createElement(s.d,{__position:9,__code:'<TextField name="name" placeholder="password" type="password" />',wrapper:w()},r.a.createElement(v,{name:"name",placeholder:"password",type:"password"})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"increased-size-of-space-between-words-usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#increased-size-of-space-between-words-usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Increased size of space between words usage"),r.a.createElement(s.d,{__position:10,__code:"<TextField bigSpace={true} />",wrapper:w()},r.a.createElement(v,{bigSpace:!0})))}}}]);