webpackJsonp([3],{203:function(e,t,n){"use strict";function o(e,t){var n=0;return new window.Promise(function(o,i){var a=function(e){var a=document.querySelector(e);return a&&t&&"none"==a.style.display?++n>20&&(i(!1),!0):(o(a),!0)},s=setInterval(function(){a(e)&&clearInterval(s)},500)})}function i(e,t){e.value=t;var n=/^magnet|torrent$/.test(e.value);$("#newoffline-dialog").find("span:contains('确定')[class='text']").click(),n&&o("#offlinebtlist-dialog",!0).then(function(e){"文件名"==$(".content-title-name").html()&&$("a.checked-all")[0].click(),e.querySelectorAll(".dialog-footer>.g-button")[1].click()});!function e(){o("#offlinelist-dialog",!0).then(function(){i()}),o("#dialog1",!0).then(function(t){var n=t.find(".input-code"),o=void 0;n.focus(),o=setInterval(function(){4==n.val().length&&(clearInterval(o),$("#dialog1").find("span:contains('确定')[class='text']").click(),e())},200)})}()}t.a=function(e){document.querySelector(".g-button[data-button-id=b13]").click(),o("#_disk_id_2").then(function(e){return e.click(),o("#share-offline-link")}).then(function(t){i(t,e)})}},209:function(e,t,n){var o,i,a;!function(n,s){i=[],o=s,void 0!==(a="function"==typeof o?o.apply(t,i):o)&&(e.exports=a)}(0,function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return function(){function n(e,t){var o=this;e.style.opacity&&e.style.opacity>.05?e.style.opacity=e.style.opacity-.05:e.style.opacity&&e.style.opacity<=.1?e.parentNode&&(e.parentNode.removeChild(e),t&&t()):e.style.opacity=.9,setTimeout(function(){return n.apply(o,[e,t])},1e3/30)}function o(e,n,i){n=n||{},i=i||"";for(var a in e)if(e.hasOwnProperty(a)){var s=e[a];s&&"object"===(void 0===s?"undefined":t(s))&&!(s instanceof Date||s instanceof RegExp)?o(s,n,i+a+" "):n[i]&&"object"===t(n[i])?n[i][a]=s:(n[i]={},n[i][a]=s)}return n}function i(e){var t=o(e),n=JSON.stringify(t,null,2);return n=n.replace(/"([^"]*)": \{/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1"),n=n.substr(1,n.lastIndexOf("}")-1)}function a(e){var t=document.head||document.getElementsByTagName("head")[0],n=s("style");n.id="mini-toastr-styles",n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(e)}function r(e,t,n){var o=s(n.icons[t].nodeType),i=n.icons[t].attrs;for(var a in i)i.hasOwnProperty(a)&&o.setAttribute(a,i[a]);e.appendChild(o)}function c(e,t,n){var o=s();o.className=n,o.appendChild(document.createTextNode(t)),e.appendChild(o)}var u,d;if("undefined"==typeof window)return{init:function(){}};var l={error:"error",warn:"warn",success:"success",info:"info"},f={container:"mini-toastr",notification:"mini-toastr__notification",title:"mini-toastr-notification__title",icon:"mini-toastr-notification__icon",message:"mini-toastr-notification__message",error:"-"+l.error,warn:"-"+l.warn,success:"-"+l.success,info:"-"+l.info},p={types:l,animation:n,timeout:3e3,icons:{},appendTarget:document.body,node:s(),style:(d={},e(d,"."+f.container,{position:"fixed","z-index":99999,right:"12px",top:"12px"}),e(d,"."+f.notification,(u={cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px"},e(u,"&."+f.error,{"background-color":"#D5122B"}),e(u,"&."+f.warn,{"background-color":"#F5AA1E"}),e(u,"&."+f.success,{"background-color":"#7AC13E"}),e(u,"&."+f.info,{"background-color":"#4196E1"}),e(u,"&:hover",{opacity:1,"box-shadow":"#000 0 0 12px"}),u)),e(d,"."+f.title,{"font-weight":"500"}),e(d,"."+f.message,{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}),d)},m={config:p,showMessage:function(e,t,n,o,i,a){var u={};Object.assign(u,this.config),Object.assign(u,a);var d=s();return d.className=f.notification+" "+f[n],d.onclick=function(){u.animation(d,null)},t&&c(d,t,f.title),u.icons[n]&&r(d,n,u),e&&c(d,e,f.message),u.node.insertBefore(d,u.node.firstChild),setTimeout(function(){return u.animation(d,i)},o||u.timeout),i&&i(),this},init:function(e){var t=this,n={};return Object.assign(n,p),Object.assign(n,e),this.config=n,a(i(n.style)),n.node.id=""+f.container,n.node.className=""+f.container,n.appendTarget.appendChild(n.node),Object.keys(n.types).forEach(function(e){m[n.types[e]]=function(t,o,i,a,s){return this.showMessage(t,o,n.types[e],i,a,s),this}.bind(t)}),this},setIcon:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"i",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n.class=n.class?n.class+" "+f.icon:f.icon,this.config.icons[e]={nodeType:t,attrs:n}}};return m}()})},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(209),i=n.n(o),a=n(203),s=n(56);window.top===window&&function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f.language||navigator.language;return m[n]&&m[n][e]?[m[n][e]," "].join(""):t.notfailback?"":[e," "].join("")}function t(){var e=window.getSelection().toString();return e.match(/^https?/)||e.match(/magnet:/)?e:null}function o(e){var t=null;return"BODY"===e.tagName?t=null:"IMG"===e.tagName&&e.src?t=e.src:e.href?t=e.href:e.parentNode&&(t=o(e.parentNode)),t}function r(t){"changeRpc"===t.name&&i.a.success(e("Success switch the default download service to")+t.message),"currentRpc"===t.name&&i.a.success(e("The current download service is")+t.message),"showMassage"===t.name&&i.a[t.message.action||"success"](t.message.text,t.message.title),"baiduLixian"===t.name&&location.href.match(/^https?:\/\/pan\.baidu\.com/)&&n.i(a.a)(t.message.url),"sendToEndScript"===t.name&&(f=t.message||{},u(),safari.self.tab.dispatchMessage("documentReady",{cookie:document.cookie})),t.message&&t.message.hasCb&&safari.self.tab.dispatchMessage([t.name,"cb"].join("_"),{cookie:document.cookie})}function c(e){var n=[o(e.target)||t(),document.location.href,document.cookie];safari.self.tab.setContextMenuEventUserInfo(e,n)}function u(){if(l)return void(f.catchIframe||l.disconnect());f.catchIframe&&(l=new MutationObserver(function(e){e.some(function(e){return!("IFRAME"!==e.target.tagName||"attributes"!==e.type||"src"!==e.attributeName||!n.i(s.a)(e.target.src,f,p))&&(!e.target.src.match(/^https:\/\/127\.0\.0\.1\//)&&(safari.self.tab.dispatchMessage("downloadFromIframe",{url:e.target.src,cookie:document.cookie}),e.target.src="https://127.0.0.1/",!1))})}),l.observe(document.body,{attributes:!0,attributeFilter:["src"],attributeOldValue:!0,characterData:!1,characterDataOldValue:!1,childList:!1,subtree:!0}))}function d(){p.isCommandPressed=!!p[91],p.isShiftPressd=!!p[16],p.isOptionPressd=!!p[18],safari.self.tab.dispatchMessage("keyPress",{keyPressed:p})}var l,f,p={},m={"zh-CN":{"Success switch the default download service to":"成功切换默认下载服务至","The current download service is":"当前下载服务为"}};document.onkeydown=function(e){var t=e.charCode?e.charCode:e.keyCode;p[t]=!0,d()},document.onkeyup=function(e){var t=e.charCode?e.charCode:e.keyCode;delete p[t],d()},window.onblur=function(e){p={},d()},function(){i.a.init({appendTarget:document.body,timeout:5e3}),safari.self.tab.dispatchMessage("getConfig"),document.addEventListener("contextmenu",c,!1),safari.self.addEventListener("message",r,!1),d()}()}()},56:function(e,t,n){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e&&!n[82]&&t.enableTypefiles?!n.isCommandPressed:n.isCommandPressed){if(e.match(/magnet:[^\\"]+/))return!0;var o=e.substr(e.lastIndexOf(".")+1);o=o.toLowerCase();for(var i=t.filetypes?t.filetypes.split(" "):[],a=0;a<i.length;a++)if(o===i[a].toLowerCase()||n.isShiftPressd)return!0}}t.a=o}},[213]);