/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={712:(t,e,r)=>{"use strict";r.r(e),r.d(e,{extractGIF:()=>m,getGIFs:()=>l,getGIFsByIDs:()=>p,getLimit:()=>g,getTrendingGIFs:()=>c,getTrendingTerms:()=>a,initialize:()=>s});var n=r(12),i=r(496),o=r.n(i);function s(t,e){this.baseUrl="https://api.giphy.com/v1",this.defaultLimit=10,this.apiKey=t,this.rating="off"===e?"r":"low"===e?"pg-13":"medium"===e?"pg":"g"}function a(){return u.apply(this,arguments)}function u(){return(u=(0,n.c)(o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.baseUrl+"/trending/searches?api_key="+this.apiKey,t.next=3,fetch(r).then((function(t){return t.json()})).then((function(t){void 0!==t.data?e=t.data:console.error("Sorry, there was something wrong with the Giphy API Key.")}));case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function c(t,e){return h.apply(this,arguments)}function h(){return(h=(0,n.c)(o().mark((function t(e,r){var n,i,s=this;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.baseUrl+"/gifs/trending?api_key="+this.apiKey+"&rating="+this.rating+"&limit="+(r||this.defaultLimit)+(e?"&offset="+e:""),t.next=3,fetch(i).then((function(t){return t.json()})).then((function(t){void 0!==t.data?n={gifs:t.data,next:e+(r||s.defaultLimit)}:console.error("Sorry, there was something wrong with the Tenor API Key.")}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function l(t,e,r){return f.apply(this,arguments)}function f(){return(f=(0,n.c)(o().mark((function t(e,r,n){var i,s,a=this;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=this.baseUrl+"/gifs/search?api_key="+this.apiKey+"&rating="+this.rating+"&q="+e+"&limit="+(n||this.defaultLimit)+(r?"&offset="+r:""),t.next=3,fetch(s).then((function(t){return t.json()})).then((function(t){void 0!==t.data?i={gifs:t.data,next:r+(n||a.defaultLimit)}:console.error("Sorry, there was something wrong with the Tenor API Key.")}));case 3:return t.abrupt("return",i);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=(0,n.c)(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.baseUrl+"/gifs?api_key="+this.apiKey+"&ids="+e,t.next=3,fetch(n).then((function(t){return t.json()})).then((function(t){r=t.data}));case 3:return t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function m(t){return{id:t.id,title:t.title,url:t.images.original.url}}function g(){return this.defaultLimit}},152:(t,e,r)=>{"use strict";r.r(e),r.d(e,{extractGIF:()=>m,getGIFs:()=>l,getGIFsByIDs:()=>p,getLimit:()=>g,getTrendingGIFs:()=>c,getTrendingTerms:()=>a,initialize:()=>s});var n=r(12),i=r(496),o=r.n(i);function s(t,e){this.baseUrl="https://tenor.googleapis.com/v2",this.defaultLimit=10,this.apiKey=t,this.rating=e}function a(){return u.apply(this,arguments)}function u(){return(u=(0,n.c)(o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.baseUrl+"/trending_terms?key="+this.apiKey,t.next=3,fetch(r).then((function(t){return t.json()})).then((function(t){void 0!==t.results?e=t.results:console.error("Sorry, there was something wrong with the Tenor API Key.")}));case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function c(t,e){return h.apply(this,arguments)}function h(){return(h=(0,n.c)(o().mark((function t(e,r){var n,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.baseUrl+"/featured?key="+this.apiKey+"&contentfilter="+this.rating+"&media_filter=minimal&limit="+(r||this.defaultLimit)+(e?"&pos="+e:""),t.next=3,fetch(i).then((function(t){return t.json()})).then((function(t){void 0!==t.results?n={gifs:t.results,next:t.next}:console.error("Sorry, there was something wrong with the Tenor API Key.")}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function l(t,e,r){return f.apply(this,arguments)}function f(){return(f=(0,n.c)(o().mark((function t(e,r,n){var i,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=this.baseUrl+"/search?key="+this.apiKey+"&q="+e+"&contentfilter="+this.rating+"&media_filter=minimal&limit="+(n||this.defaultLimit)+(r?"&pos="+r:""),t.next=3,fetch(s).then((function(t){return t.json()})).then((function(t){void 0!==t.results?i={gifs:t.results,next:t.next}:console.error("Sorry, there was something wrong with the Tenor API Key.")}));case 3:return t.abrupt("return",i);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=(0,n.c)(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.baseUrl+"/posts?key="+this.apiKey+"&id="+e+"&media_filter=minimal",t.next=3,fetch(n).then((function(t){return t.json()})).then((function(t){r=t.results}));case 3:return t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function m(t){return{id:t.id,title:t.title,url:t.media_formats.gif.url}}function g(){return this.defaultLimit}},260:(t,e,r)=>{var n=r(896).default;function i(){"use strict";t.exports=i=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},o=Object.prototype,s=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",h=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),s=new S(n||[]);return a(o,"_invoke",{value:_(t,r,s)}),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var m="suspendedStart",g="suspendedYield",y="executing",v="completed",b={};function w(){}function x(){}function L(){}var k={};f(k,c,(function(){return this}));var E=Object.getPrototypeOf,F=E&&E(E(R([])));F&&F!==o&&s.call(F,c)&&(k=F);var B=L.prototype=w.prototype=Object.create(k);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(i,o,a,u){var c=d(t[i],t,o);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==n(l)&&s.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}})}function _(t,r,n){var i=m;return function(o,s){if(i===y)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw s;return{value:e,done:!0}}for(n.method=o,n.arg=s;;){var a=n.delegate;if(a){var u=I(a,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===m)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var c=d(t,r,n);if("normal"===c.type){if(i=n.done?v:g,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=v,n.method="throw",n.arg=c.arg)}}}function I(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=d(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var s=o.arg;return s?s.done?(r[t.resultName]=s.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function V(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(s.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=L,a(B,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:x,configurable:!0}),x.displayName=f(L,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,f(t,l,"GeneratorFunction")),t.prototype=Object.create(B),t},r.awrap=function(t){return{__await:t}},T(j.prototype),f(j.prototype,h,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var s=new j(p(t,e,n,i),o);return r.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},T(B),f(B,l,"Generator"),f(B,c,(function(){return this})),f(B,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=R,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(V),!t)for(var r in this)"t"===r.charAt(0)&&s.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,i){return a.type="throw",a.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),V(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;V(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},896:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},496:(t,e,r)=>{var n=r(260)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},12:(t,e,r)=>{"use strict";function n(t,e,r,n,i,o,s){try{var a=t[o](s),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var s=t.apply(e,r);function a(t){n(s,i,o,a,u,"next",t)}function u(t){n(s,i,o,a,u,"throw",t)}a(void 0)}))}}r.d(e,{c:()=>i})}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const t=flarum.core.compat["common/extend"],e=flarum.core.compat["common/app"];var i=r.n(e);const o=flarum.core.compat["common/components/TextEditor"];var s=r.n(o);const a=flarum.core.compat["common/components/TextEditorButton"];var u=r.n(a),c=r(12);function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}var f=r(496),p=r.n(f);const d=flarum.core.compat.app;var g=r.n(d);const y=flarum.core.compat["common/components/Button"];var v=r.n(y);const b=flarum.core.compat["common/Component"];var w=r.n(b),x=function(t){function e(){return t.apply(this,arguments)||this}return l(e,t),e.prototype.view=function(){var t=this.attrs.attributes,e=t.title,r=t.url,n=t.icon,i=t.onclick;return m("div",{style:r&&"background-image: url("+r+")",onclick:i},n&&m("i",{class:n})," ",e)},e}(w());const L=flarum.core.compat["common/components/Modal"];var k=r.n(L);const E=flarum.core.compat["common/components/Tooltip"];var F=r.n(E),B="therealsujitk-gifs",T=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var r=e.prototype;return r.oninit=function(e){var r=this;t.prototype.oninit.call(this,e),this.loading=!1,this.hidden=!0,this.rowSpan=15*Math.random()+25,this.id,$(window).resize((function(){r.hidden||r.setRowSpan(r.$("img",r)[0])}))},r.view=function(){var t=this,e=this.attrs.attributes;this.id=e.id,this.favourite=e.favourite;var r=e.title,n=e.url,i=e.onclick;return e.isFavourite&&(this.hidden||this.setRowSpan(this.$("img",this)[0])),m("div",{style:this.rowSpan&&"grid-row-end: span "+Math.round(this.rowSpan)},m("img",{alt:r,src:n,style:this.hidden?"visibility: hidden":"",onclick:function(e){i(e,t.id)},onload:function(e){t.setRowSpan(e.target)}}),m(F(),{showOnFocus:!1,text:e.isFavourite?g().translator.trans(B+".forum.removeFavourite"):g().translator.trans(B+".forum.addFavourite")},m(v(),{className:"Button Button--icon hasIcon",style:this.hidden?"visibility: hidden":"",icon:this.loading?"":e.isFavourite?"fas fa-star":"far fa-star",loading:this.loading,onclick:this.handleFavourite.bind(this)})))},r.setRowSpan=function(t){this.rowSpan=t.height/5+2,this.hidden=!1},r.handleFavourite=function(){var t=(0,c.c)(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.favourite(this.id);case 3:t.sent&&(this.attrs.attributes.isFavourite=!this.attrs.attributes.isFavourite),this.loading=!1,m.redraw();case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e}(w());const j=flarum.core.compat["common/utils/Stream"];var _=r.n(j),I="therealsujitk-gifs",P="tenor",V="home",S="favourite",R="trending",G="result",O=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.textArea=this.attrs.textArea,this.baseUrl=g().forum.attribute("baseUrl"),this.engine=g().forum.attribute(I+".engine")||"giphy",this.apiKey=g().forum.attribute(I+".api_key"),this.rating=g().forum.attribute(I+".rating")||"off",this.Engine=this.getEngine(),this.Engine.initialize(this.apiKey,this.rating),this.isHomeVisible=!0,this.isFavouritesVisible=!1,this.isTrendingVisible=!1,this.isResultsVisible=!1,this.category="",this.query=_()(""),this.next=null,this.favourites=new Set,this.homeButtons=new Array,this.favouriteButtons=new Array,this.resultButtons=new Array,this.loadHomePage(),this.loadFavouritesPage(),this.loading=!1,this.reachedEnd=!1},n.className=function(){return I+"-modal"},n.title=function(){return"Select a GIF to add to your post"},n.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{style:"display: flex;"},m(v(),{id:I+"-back-button",className:"Button Button--icon hasIcon",style:this.isHomeVisible?"display: none":"",icon:"fas fa-long-arrow-alt-left",onclick:this.showHome.bind(this)}),m("span",{id:I+"-category",style:this.isFavouritesVisible||this.isTrendingVisible?"":"display: none"},this.category&&this.category),m("div",{id:I+"-search-input",className:"Search-input",style:this.isHomeVisible||this.isResultsVisible?"":"display: none"},m("input",{className:"FormControl",placeholder:this.getPlaceholder(),value:this.query(),bidi:this.query,onkeydown:this.onkeydown.bind(this)})),m(v(),{id:I+"-search-button",className:"Button Button--primary",style:this.isHomeVisible||this.isResultsVisible?"":"display: none",onclick:function(){t.resetResultsPage(),t.loadResultsPage()}},g().translator.trans(I+".forum.search"))),m("div",{className:I+"-container",style:this.isHomeVisible?"":"display: none"},this.homeButtons&&this.homeButtons.map((function(t){return m(x,{attributes:t})}))),m("div",{className:I+"-container",style:this.isFavouritesVisible?"":"display: none",scrollTop:this.isTrendingVisible||this.isResultsVisible?"0":""},this.favouriteButtons&&this.favouriteButtons.map((function(t){return m(T,{attributes:t})})),m("span",{id:I+"-end"},"app.translator.trans(`$",I,".forum.reachedEnd`)")),m("div",{className:I+"-container",style:this.isTrendingVisible||this.isResultsVisible?"":"display: none",onscroll:this.loadMore.bind(this),scrollTop:this.isTrendingVisible||this.isResultsVisible?"0":""},this.resultButtons&&this.resultButtons.map((function(t){return m(T,{attributes:t})})),m("span",{id:I+"-end"},"app.translator.trans(`$",I,".forum.reachedEnd`)")),m("div",{id:I+"-footer"},m("img",{src:this.baseUrl+"/assets/extensions/therealsujitk-gifs/powered_by_"+this.engine+".svg"})))},n.getEngine=function(){return this.engine===P?r(152):r(712)},n.getPlaceholder=function(){return this.engine==P?g().translator.trans(I+".forum.searchTenor"):g().translator.trans(I+".forum.searchGiphy")},n.showHome=function(){this.isFavouritesVisible=!1,this.isTrendingVisible=!1,this.isResultsVisible=!1,this.isHomeVisible=!0,this.query(""),this.resetResultsPage()},n.showFavourites=function(){this.isHomeVisible=!1,this.isResultsVisible=!1,this.isTrendingVisible=!1,this.isFavouritesVisible=!0,this.category=g().translator.trans(I+".forum.favourites")},n.showTrending=function(){this.isHomeVisible=!1,this.isFavouritesVisible=!1,this.isResultsVisible=!1,this.isTrendingVisible=!0,this.category=g().translator.trans(I+".forum.trending")},n.showResults=function(){this.isHomeVisible=!1,this.isFavouritesVisible=!1,this.isTrendingVisible=!1,this.isResultsVisible=!0},n.loadHomePage=function(){var t=(0,c.c)(p().mark((function t(){var e,r,n,i,o,s=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={title:g().translator.trans(I+".forum.favourites"),icon:"fas fa-star",onclick:function(){s.showFavourites()}},r={title:g().translator.trans(I+".forum.trending"),icon:"fas fa-chart-line",onclick:function(){s.loadTrendingPage()}},this.injectGIFs(null,1,V,1),this.homeButtons.push(e,r),t.next=6,this.Engine.getTrendingTerms();case 6:for(n=t.sent,i=0;i<n.length;++i)o={title:n[i],onclick:function(t){s.query(t.target.innerText),s.loadResultsPage()}},this.injectGIFs(n[i],this.homeButtons.length,V,1),this.homeButtons.push(o);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.loadFavouritesPage=function(){var t=(0,c.c)(p().mark((function t(){var e=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g().store.find(I).then((function(t){var r="";t.forEach((function(t){var n=t.data.attributes.gifID;r=""+r+n+",",e.favouriteButtons.push({}),e.favourites.add(n)})),r=r.slice(0,-1),t.length&&e.injectGIFs(r,0,S,t.length)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n.loadTrendingPage=function(){var t=(0,c.c)(p().mark((function t(){var e,r,n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.showTrending(),e=0;e<this.Engine.getLimit();++e)r={},this.resultButtons.push(r);n=this.resultButtons.length-this.Engine.getLimit(),this.injectGIFs(null,n,R,null),this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.loadResultsPage=function(){var t=(0,c.c)(p().mark((function t(){var e,r,n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.showResults(),e=0;e<this.Engine.getLimit();++e)r={},this.resultButtons.push(r);n=this.resultButtons.length-this.Engine.getLimit(),this.injectGIFs(this.query(),n,G,null),this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.resetResultsPage=function(){this.resultButtons=new Array,m.redraw.sync(),this.next=null,this.reachedEnd=!1},n.loadMore=function(t){if((this.isResultsVisible||this.isTrendingVisible)&&!this.loading&&!this.reachedEnd){var e=t.target.scrollTop,r=t.target.scrollHeight-t.target.offsetHeight;0!=r&&e>=r-200&&(this.loading=!0,this.isResultsVisible?this.loadResultsPage():this.loadTrendingPage())}},n.injectGIFs=function(){var t=(0,c.c)(p().mark((function t(e,r,n,i){var o,s,a,u,h,l=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==S){t.next=6;break}return t.next=3,this.Engine.getGIFsByIDs(e);case 3:o=t.sent,t.next=19;break;case 6:if(n!==R&&null!=e){t.next=14;break}return t.next=9,this.Engine.getTrendingGIFs(this.next,i);case 9:s=t.sent,o=s.gifs,!i&&(this.next=s.next),t.next=19;break;case 14:return t.next=16,this.Engine.getGIFs(e,this.next,i);case 16:s=t.sent,o=s.gifs,!i&&(this.next=s.next);case 19:a=0;case 20:if(!(a<(i||this.Engine.getLimit()))){t.next=36;break}if(void 0!==o[a]){t.next=24;break}return n===S?this.favouriteButtons.splice(r+a):n===G&&(this.resultButtons.splice(r+a),this.reachedEnd=!0),t.abrupt("break",36);case 24:u=this.Engine.extractGIF(o[a]),(h={}).id=u.id,h.title=u.title,h.url=u.url,h.isFavourite=this.favourites.has(u.id),h.onclick=function(t,e){var r=t.target.alt,n=t.target.src,i="!["+l.engine[0].toUpperCase()+l.engine.slice(1)+" - "+r+"]("+n+")";l.textArea.insertAtCursor(i),g().modal.close(),l.engine===P&&(n="https://tenor.googleapis.com/v2/registershare?&key="+l.apiKey+(""!=l.query()?"&q="+l.query():"")+"&id="+e,fetch(n))},h.favourite=function(){var t=(0,c.c)(p().mark((function t(e){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!1,!l.favourites.has(e)){t.next=6;break}return t.next=4,g().request({method:"DELETE",url:g().forum.attribute("apiUrl")+"/"+I+"/"+e}).then((function(){var t=l.favouriteButtons.findIndex((function(t){return t.id===e}));l.favouriteButtons.splice(t,1),l.favourites.delete(e),0==l.favouriteButtons.length?delete l.homeButtons[0].url:l.homeButtons[0].url=l.favouriteButtons[0].url,r=!0}));case 4:t.next=8;break;case 6:return t.next=8,g().store.createRecord(I).save({gifID:e}).then((function(){l.injectGIFs(e,0,S,1),l.favourites.add(e),r=!0}));case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n===V?this.homeButtons[r+a].url=u.url:n===S?(this.favouriteButtons[r+a]&&void 0===this.favouriteButtons[r+a].url?Object.assign(this.favouriteButtons[r+a],h):this.favouriteButtons.unshift(h),r+a==0&&(this.homeButtons[0].url=u.url)):Object.assign(this.resultButtons[r+a],h);case 33:++a,t.next=20;break;case 36:m.redraw();case 37:case"end":return t.stop()}}),t,this)})));return function(e,r,n,i){return t.apply(this,arguments)}}(),n.onsubmit=function(t){t.preventDefault()},n.onkeydown=function(t){"Enter"===t.key&&(this.query(this.query().trim()),""===this.query()?this.showHome():(this.resetResultsPage(),this.loadResultsPage()))},e}(k());const M=flarum.core.compat.Model;var K=r.n(M),N=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).gifID=K().attribute("gifID"),e}return l(e,t),e}(K()),A="therealsujitk-gifs";i().initializers.add(A,(function(){i().store.models[A]=N,(0,t.extend)(s().prototype,"toolbarItems",(function(t){var e=this;t.add("my-item",m(u(),{id:A+"-toolbar-item",className:"Button Button--icon Button--link hasIcon",title:i().translator.trans(A+".forum.label"),onclick:function(){return i().modal.show(O,{textArea:e.attrs.composer.editor})}},m("svg",{id:"therealsujitk-gifs-toolbar-item",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",width:"16pt",height:"7pt",viewBox:"0 0 16 7",version:"1.1"},m("g",null,m("path",{d:"M 0.78125 7.042969 C 0.496094 6.933594 0.265625 6.738281 0.132812 6.480469 L 0 6.234375 L 0 0.875 L 0.132812 0.625 C 0.277344 0.355469 0.558594 0.128906 0.847656 0.0429688 C 0.957031 0.015625 1.71875 0 2.917969 0.0078125 L 4.808594 0.0234375 L 5.050781 0.15625 C 5.21875 0.246094 5.332031 0.355469 5.425781 0.511719 C 5.597656 0.800781 5.648438 0.992188 5.648438 1.410156 L 5.648438 1.753906 L 1.65625 1.753906 L 1.65625 5.355469 L 3.96875 5.355469 L 3.96875 3.554688 L 5.648438 3.554688 L 5.648438 4.800781 C 5.648438 5.484375 5.628906 6.117188 5.605469 6.207031 C 5.523438 6.527344 5.308594 6.808594 5.050781 6.953125 L 4.808594 7.085938 L 2.878906 7.09375 C 1.339844 7.105469 0.917969 7.09375 0.78125 7.042969 Z M 0.78125 7.042969",fill:"currentColor"}),m("path",{d:"M 7.371094 3.554688 L 7.371094 0 L 9.050781 0 L 9.050781 7.109375 L 7.371094 7.109375 Z M 7.371094 3.554688",fill:"currentColor"}),m("path",{d:"M 10.773438 3.554688 L 10.773438 0 L 15.855469 0 L 15.855469 1.753906 L 12.453125 1.753906 L 12.453125 2.988281 L 14.722656 2.988281 L 14.722656 4.742188 L 12.453125 4.742188 L 12.453125 7.109375 L 10.773438 7.109375 Z M 10.773438 3.554688",fill:"currentColor"})))))}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map