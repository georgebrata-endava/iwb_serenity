(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{114:function(e,t,n){"use strict";var a=n(1),r=n(12),u=n(14),i=n(67),l=n(46),s=n(7),o=n(115).f,p=n(68).f,c=n(8).f,f=n(116).trim,d=a.Number,h=d,m=d.prototype,b="Number"==u(n(48)(m)),V="trim"in String.prototype,g=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,u=(t=V?t.trim():f(t,3)).charCodeAt(0);if(43===u||45===u){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===u){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var i,s=t.slice(2),o=0,p=s.length;o<p;o++)if((i=s.charCodeAt(o))<48||i>r)return NaN;return parseInt(s,a)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(b?s((function(){m.valueOf.call(n)})):"Number"!=u(n))?i(new h(g(t)),n,d):g(t)};for(var v,_=n(5)?o(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;_.length>I;I++)r(h,v=_[I])&&!r(d,v)&&c(d,v,p(h,v));d.prototype=m,m.constructor=d,n(11)(a,"Number",d)}},115:function(e,t,n){var a=n(66),r=n(47).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,r)}},116:function(e,t,n){var a=n(3),r=n(18),u=n(7),i=n(117),l="["+i+"]",s=RegExp("^"+l+l+"*"),o=RegExp(l+l+"*$"),p=function(e,t,n){var r={},l=u((function(){return!!i[e]()||"​"!="​"[e]()})),s=r[e]=l?t(c):i[e];n&&(r[n]=s),a(a.P+a.F*l,"String",r)},c=p.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(o,"")),e};e.exports=p},117:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},120:function(e,t,n){"use strict";n.r(t);n(114);var a={props:{groupLabel:{type:String,required:!0},inputMainId:{type:String,default:""},step:{type:Number,default:1},value:{type:Number,default:0},minValue:{type:Number,default:null},maxValue:{type:Number,default:null}},data:function(){return{groupFocused:!1,options:{currency:"",currencyPosition:"suffix",precision:2,separator:" ",min:0,max:999999999},internalValue:this.value}},computed:{decreaseButtonDisable:function(){return null!==this.min&&(null===this.internalValue||this.internalValue<=this.setMinValue)},increaseButtonDisable:function(){return null!==this.max&&this.internalValue>=this.setMaxValue},setMinValue:function(){var e=this.minValue;return null===e&&(e=this.options.min),e},setMaxValue:function(){var e=this.maxValue;return null===e&&(e=this.options.max),e}},methods:{onFocus:function(){this.groupFocused=!0},onBlur:function(){this.groupFocused=!1;var e=this.internalValue;this.internalValue=this.validateValue(e)},decreaseValue:function(){if(!this.decreaseButtonDisable){var e=this.internalValue-this.step;this.internalValue=this.validateValue(e)}},increaseValue:function(){if(console.log("increaseValue - Test"),!this.increaseButtonDisable){var e=this.internalValue+this.step;this.internalValue=this.validateValue(e)}},validateValue:function(e){return null!==this.setMinValue&&e<this.setMinValue?this.setMinValue:null!==this.setMaxValue&&e>this.setMaxValue?this.setMaxValue:e}}},r=n(2),u=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-group input-group--stepper",class:{focused:e.groupFocused}},[n("button",{staticClass:"input-group--stepper__button input-group--stepper__button--prepend",attrs:{type:"button","aria-label":e.groupLabel+" decrease",disabled:e.decreaseButtonDisable},on:{click:e.decreaseValue}},[e._v("\n        -\n    ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.internalValue,expression:"internalValue",modifiers:{number:!0}}],staticClass:"input-group__main input-group--stepper__main input-group__main--prepend input-group__main--append input--text",attrs:{type:"number",placeholder:"0","aria-label":""+e.groupLabel,"aria-live":"assertive","aria-atomic":"true",inputmode:"numeric",pattern:"[0-9]*",id:e.inputMainId,min:e.setMinValue,max:e.setMaxValue,step:e.step},domProps:{value:e.internalValue},on:{focus:e.onFocus,blur:[e.onBlur,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.internalValue=e._n(t.target.value))}}}),e._v(" "),n("button",{staticClass:"input-group--stepper__button input-group--stepper__button--append",attrs:{type:"button","aria-label":e.groupLabel+" increase",disabled:e.increaseButtonDisable},on:{click:e.increaseValue}},[e._v("\n        +\n    ")])])}),[],!1,null,null,null);t.default=u.exports},129:function(e,t,n){"use strict";n.r(t);var a={components:{serenityInputGroupStepper:n(120).default}},r=n(2),u=Object(r.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("label",{staticClass:"field__label",attrs:{id:"inputGroupStepperExampleLabelId",for:"inputGroupStepperExampleLabelId"}},[this._v("Default Input Group Stepper:")]),this._v(" "),t("serenityInputGroupStepper",{attrs:{inputMainId:"inputGroupStepperExampleLabelId",groupLabel:"Label of input group stepper",minValue:0,maxValue:100}})],1)}),[],!1,null,null,null);t.default=u.exports}}]);