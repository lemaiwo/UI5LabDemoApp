jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "ui5lab.wl.img.library-preload",
	"modules": {
		"ui5lab/wl/img/ImageViewer.js": "sap.ui.define([\"sap/ui/core/Control\",\"sap/ui/core/Popup\",\"./lib/viewer.min\"],function(e,t){\"use strict\";return e.extend(\"ui5lab.wl.img.ImageViewer\",{metadata:{properties:{src:\"string\"},events:{}},keyEnter:13,init:function(){this.log=jQuery.sap.log,this.attachBrowserEvent(\"keydown\",this.catchOnEnter)},renderer:function(e,t){e.write(\"<div\"),e.writeControlData(t),e.write(\">\"),e.write(\"<img\"),e.writeAttributeEscaped(\"src\",t.getSrc()),e.write(\">\"),e.write(\"</img>\"),e.write(\"</div>\")},onBeforeRendering:function(e){},onAfterRendering:function(e){this.getSrc()&&this.getSrc().length>0&&(this.viewer=new Viewer(this.getDomRef(),{title:!1,tooltip:!1,movable:!1,scalable:!1,navbar:!1,fullscreen:!1,transition:!1}))},catchOnEnter:function(e){switch(this.log.info(\"keydown:\"+event.keyCode),event.keyCode){case this.keyEnter:this.viewer.hide()}},open:function(){sap.ui.getCore().getRenderManager().render(this,sap.ui.getCore().getStaticAreaRef()),this.viewer&&this.viewer.show()},setSrc:function(e){return this.setProperty(\"src\",e,!0),this}})});",
		"ui5lab/wl/img/lib/viewer.min.js": "!function(e,t){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=t():\"function\"==typeof define&&define.amd?define(t):e.Viewer=t()}(this,function(){\"use strict\";function e(e){return j.call(e).slice(8,-1).toLowerCase()}function t(e){return\"string\"==typeof e}function i(e){return\"number\"==typeof e&&!isNaN(e)}function n(e){return void 0===e}function a(e){return\"object\"===(void 0===e?\"undefined\":S(e))&&null!==e}function o(e){if(!a(e))return!1;try{var t=e.constructor,i=t.prototype;return t&&i&&H.call(i,\"isPrototypeOf\")}catch(e){return!1}}function r(t){return\"function\"===e(t)}function l(e,t){var i=-1;return t.indexOf?t.indexOf(e):(t.forEach(function(t,n){t===e&&(i=n)}),i)}function s(e){return t(e)&&(e=e.trim?e.trim():e.replace(O,\"1\")),e}function c(t,n){if(t&&r(n)){var o=void 0;if(s=t,(Array.isArray?Array.isArray(s):\"array\"===e(s))||i(t.length)){var l=t.length;for(o=0;o<l&&!1!==n.call(t,t[o],o,t);o+=1);}else a(t)&&Object.keys(t).forEach(function(e){n.call(t,t[e],e,t)})}var s;return t}function u(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];if(a(e)&&i.length>0){if(Object.assign)return Object.assign.apply(Object,[e].concat(i));i.forEach(function(t){a(t)&&Object.keys(t).forEach(function(i){e[i]=t[i]})})}return e}function d(e,t){for(var i=arguments.length,n=Array(i>2?i-2:0),a=2;a<i;a++)n[a-2]=arguments[a];return function(){for(var i=arguments.length,a=Array(i),o=0;o<i;o++)a[o]=arguments[o];return e.apply(t,n.concat(a))}}function v(e,t){var n=e.style;c(t,function(e,t){W.test(t)&&i(e)&&(e+=\"px\"),n[t]=e})}function h(e,t){return e.classList?e.classList.contains(t):e.className.indexOf(t)>-1}function f(e,t){if(t)if(i(e.length))c(e,function(e){f(e,t)});else if(e.classList)e.classList.add(t);else{var n=s(e.className);n?n.indexOf(t)<0&&(e.className=n+\" \"+t):e.className=t}}function m(e,t){t&&(i(e.length)?c(e,function(e){m(e,t)}):e.classList?e.classList.remove(t):e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,\"\")))}function w(e,t,n){t&&(i(e.length)?c(e,function(e){w(e,t,n)}):n?f(e,t):m(e,t))}function g(e){return e.replace(F,\"$1-$2\").toLowerCase()}function p(e,t){return a(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute(\"data-\"+g(t))}function b(e,t,i){a(i)?e[t]=i:e.dataset?e.dataset[t]=i:e.setAttribute(\"data-\"+g(t),i)}function y(e,t,i){var n=s(t).split(R);n.length>1?c(n,function(t){y(e,t,i)}):e.removeEventListener?e.removeEventListener(t,i,!1):e.detachEvent&&e.detachEvent(\"on\"+t,i)}function x(e,t,i,n){var a=s(t).split(R),o=i;a.length>1?c(a,function(t){x(e,t,i)}):(n&&(i=function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return y(e,t,i),o.apply(e,a)}),e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent&&e.attachEvent(\"on\"+t,i))}function k(e,t,i){if(e.dispatchEvent){var a=void 0;return r(Event)&&r(CustomEvent)?a=n(i)?new Event(t,{bubbles:!0,cancelable:!0}):new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0}):n(i)?(a=document.createEvent(\"Event\")).initEvent(t,!0,!0):(a=document.createEvent(\"CustomEvent\")).initCustomEvent(t,!0,!0,i),e.dispatchEvent(a)}return!e.fireEvent||e.fireEvent(\"on\"+t)}function z(e){var t=e||window.event;if(t.target||(t.target=t.srcElement||document),!i(t.pageX)&&i(t.clientX)){var n=e.target.ownerDocument||document,a=n.documentElement,o=n.body;t.pageX=t.clientX+((a&&a.scrollLeft||o&&o.scrollLeft||0)-(a&&a.clientLeft||o&&o.clientLeft||0)),t.pageY=t.clientY+((a&&a.scrollTop||o&&o.scrollTop||0)-(a&&a.clientTop||o&&o.clientTop||0))}return t}function D(e,t){return e.getElementsByTagName(t)}function E(e,t){return e.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll(\".\"+t)}function I(e,t){t.length?c(t,function(t){I(e,t)}):e.appendChild(t)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function L(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function C(e,t){n(e.textContent)?e.innerText=t:e.textContent=t}function Y(e){return e.offsetWidth}function N(e,t){if(e.naturalWidth)t(e.naturalWidth,e.naturalHeight);else{var i=document.createElement(\"img\");i.onload=function(){t(this.width,this.height)},i.src=e.src}}function X(e){switch(e){case 2:return\"viewer-hide-xs-down\";case 3:return\"viewer-hide-sm-down\";case 4:return\"viewer-hide-md-down\"}return\"\"}function M(e,t){var i={endX:e.pageX,endY:e.pageY};return t?i:u({startX:e.pageX,startY:e.pageY},i)}var A={inline:!1,button:!0,navbar:!0,title:!0,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!0,keyboard:!0,interval:5e3,minWidth:200,minHeight:100,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,zIndex:2015,zIndexInline:0,url:\"src\",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null},S=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},F=/([a-z\\d])([A-Z])/g,R=/\\s+/,W=/^(width|height|left|top|marginLeft|marginTop)$/,O=/^\\s+(.*)\\s+$/,q=Object.prototype,j=q.toString,H=q.hasOwnProperty,P=Array.prototype.slice,V={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var e=this,t=e.options,i=e.parent,n=void 0;t.inline&&(n={width:Math.max(i.offsetWidth,t.minWidth),height:Math.max(i.offsetHeight,t.minHeight)},e.parentData=n),!e.fulled&&n||(n=e.containerData),e.viewerData=u({},n)},renderViewer:function(){this.options.inline&&!this.fulled&&v(this.viewer,this.viewerData)},initList:function(){var e=this,i=e.options,n=e.element,a=e.list,o=[];c(e.images,function(e,n){var a,l=e.src,s=e.alt||(t(a=l)?a.replace(/^.*\\//,\"\").replace(/[?&#].*$/,\"\"):\"\"),c=i.url;l&&(t(c)?c=e.getAttribute(c):r(c)&&(c=c.call(e,e)),o.push('<li><img src=\"'+l+'\" role=\"button\" data-action=\"view\" data-index=\"'+n+'\" data-original-url=\"'+(c||l)+'\" alt=\"'+s+'\"></li>'))}),a.innerHTML=o.join(\"\"),c(D(a,\"img\"),function(t){b(t,\"filled\",!0),x(t,\"load\",d(e.loadImage,e),!0)}),e.items=D(a,\"li\"),i.transition&&x(n,\"viewed\",function(){f(a,\"viewer-transition\")},!0)},renderList:function(e){var t=this,i=e||t.index,n=t.items[i].offsetWidth||30,a=n+1;v(t.list,{width:a*t.length,marginLeft:(t.viewerData.width-n)/2-a*i})},resetList:function(){L(this.list),m(this.list,\"viewer-transition\"),v({marginLeft:0})},initImage:function(e){var t=this,i=t.options,n=t.image,a=t.viewerData,o=t.footer.offsetHeight,l=a.width,s=Math.max(a.height-o,o),c=t.imageData||{};N(n,function(n,a){var o=n/a,d=l,v=s;s*o>l?v=l/o:d=s*o;var h={naturalWidth:n,naturalHeight:a,aspectRatio:o,ratio:(d=Math.min(.9*d,n))/n,width:d,height:v=Math.min(.9*v,a),left:(l-d)/2,top:(s-v)/2},f=u({},h);i.rotatable&&(h.rotate=c.rotate||0,f.rotate=0),i.scalable&&(h.scaleX=c.scaleX||1,h.scaleY=c.scaleY||1,f.scaleX=1,f.scaleY=1),t.imageData=h,t.initialImageData=f,r(e)&&e()})},renderImage:function(e){var t,n,a,o,l,s=this.image,c=this.imageData,u=(n=[],a=(t=c).rotate,o=t.scaleX,l=t.scaleY,i(a)&&0!==a&&n.push(\"rotate(\"+a+\"deg)\"),i(o)&&1!==o&&n.push(\"scaleX(\"+o+\")\"),i(l)&&1!==l&&n.push(\"scaleY(\"+l+\")\"),n.length?n.join(\" \"):\"none\");v(s,{width:c.width,height:c.height,marginLeft:c.left,marginTop:c.top,WebkitTransform:u,msTransform:u,transform:u}),r(e)&&(this.transitioning?x(s,\"transitionend\",e,!0):e())},resetImage:function(){this.image&&(T(this.image),this.image=null)}},B=\"undefined\"!=typeof window?window.PointerEvent:null,K=B?\"pointerdown\":\"touchstart mousedown\",Z=B?\"pointermove\":\"mousemove touchmove\",$=B?\"pointerup pointercancel\":\"touchend touchcancel mouseup\",U=\"wheel mousewheel DOMMouseScroll\",_=\"keydown\",G=\"dragstart\",J={bind:function(){var e=this,t=e.options,i=e.element,n=e.viewer;r(t.view)&&x(i,\"view\",t.view),r(t.viewed)&&x(i,\"viewed\",t.viewed),x(n,\"click\",e.onClick=d(e.click,e)),x(n,U,e.onWheel=d(e.wheel,e)),x(n,G,e.onDragstart=d(e.dragstart,e)),x(e.canvas,K,e.onPointerdown=d(e.pointerdown,e)),x(document,Z,e.onPointermove=d(e.pointermove,e)),x(document,$,e.onPointerup=d(e.pointerup,e)),x(document,_,e.onKeydown=d(e.keydown,e)),x(window,\"resize\",e.onResize=d(e.resize,e))},unbind:function(){var e=this,t=e.options,i=e.element,n=e.viewer;r(t.view)&&y(i,\"view\",t.view),r(t.viewed)&&y(i,\"viewed\",t.viewed),y(n,\"click\",e.onClick),y(n,U,e.onWheel),y(n,G,e.onDragstart),y(e.canvas,K,e.onPointerdown),y(document,Z,e.onPointermove),y(document,$,e.onPointerup),y(document,_,e.onKeydown),y(window,\"resize\",e.onResize)}},Q={start:function(e){var t=z(e).target;\"img\"===t.tagName.toLowerCase()&&(this.target=t,this.show())},click:function(e){var t=this,i=z(e).target,n=p(i,\"action\"),a=t.imageData;switch(n){case\"mix\":t.played?t.stop():t.options.inline?t.fulled?t.exit():t.full():t.hide();break;case\"view\":t.view(p(i,\"index\"));break;case\"zoom-in\":t.zoom(.1,!0);break;case\"zoom-out\":t.zoom(-.1,!0);break;case\"one-to-one\":t.toggle();break;case\"reset\":t.reset();break;case\"prev\":t.prev();break;case\"play\":t.play();break;case\"next\":t.next();break;case\"rotate-left\":t.rotate(-90);break;case\"rotate-right\":t.rotate(90);break;case\"flip-horizontal\":t.scaleX(-a.scaleX||-1);break;case\"flip-vertical\":t.scaleY(-a.scaleY||-1);break;default:t.played&&t.stop()}},load:function(){var e=this,t=e.options,i=e.image,n=e.index,a=e.viewerData;e.timeout&&(clearTimeout(e.timeout),e.timeout=!1),m(i,\"viewer-invisible\"),i.style.cssText=\"width:0;height:0;margin-left:\"+a.width/2+\"px;margin-top:\"+a.height/2+\"px;max-width:none!important;visibility:visible;\",e.initImage(function(){w(i,\"viewer-transition\",t.transition),w(i,\"viewer-move\",t.movable),e.renderImage(function(){e.viewed=!0,k(e.element,\"viewed\",{originalImage:e.images[n],index:n,image:i})})})},loadImage:function(e){var t=z(e).target,i=t.parentNode,n=i.offsetWidth||30,a=i.offsetHeight||50,o=!!p(t,\"filled\");N(t,function(e,i){var r=e/i,l=n,s=a;a*r>n?o?l=a*r:s=n/r:o?s=n/r:l=a*r,v(t,{width:l,height:s,marginLeft:(n-l)/2,marginTop:(a-s)/2})})},resize:function(){var e=this;e.initContainer(),e.initViewer(),e.renderViewer(),e.renderList(),e.viewed&&e.initImage(function(){e.renderImage()}),e.played&&c(D(e.player,\"img\"),function(t){x(t,\"load\",d(e.loadImage,e),!0),k(t,\"load\")})},wheel:function(e){var t=this,i=z(e);if(t.viewed&&(i.preventDefault(),!t.wheeling)){t.wheeling=!0,setTimeout(function(){t.wheeling=!1},50);var n=Number(t.options.zoomRatio)||.1,a=1;i.deltaY?a=i.deltaY>0?1:-1:i.wheelDelta?a=-i.wheelDelta/120:i.detail&&(a=i.detail>0?1:-1),t.zoom(-a*n,!0,i)}},keydown:function(e){var t=this,i=z(e),n=t.options,a=i.keyCode||i.which||i.charCode;if(t.fulled&&n.keyboard)switch(a){case 27:t.played?t.stop():n.inline?t.fulled&&t.exit():t.hide();break;case 32:t.played&&t.stop();break;case 37:t.prev();break;case 38:i.preventDefault(),t.zoom(n.zoomRatio,!0);break;case 39:t.next();break;case 40:i.preventDefault(),t.zoom(-n.zoomRatio,!0);break;case 48:case 49:(i.ctrlKey||i.shiftKey)&&(i.preventDefault(),t.toggle())}},dragstart:function(e){\"img\"===e.target.tagName.toLowerCase()&&e.preventDefault()},pointerdown:function(e){var t=this,i=t.options,n=t.pointers,a=z(e);if(t.viewed&&!t.transitioning){a.changedTouches?c(a.changedTouches,function(e){n[e.identifier]=M(e)}):n[a.pointerId||0]=M(a);var o=!!i.movable&&\"move\";Object.keys(n).length>1?o=\"zoom\":\"touch\"!==a.pointerType&&\"touchmove\"!==a.type||!t.isSwitchable()||(o=\"switch\"),t.action=o}},pointermove:function(e){var t=this,i=t.options,n=t.pointers,a=z(e),o=t.action,r=t.image;t.viewed&&o&&(a.preventDefault(),a.changedTouches?c(a.changedTouches,function(e){u(n[e.identifier],M(e,!0))}):u(n[a.pointerId||0],M(a,!0)),\"move\"===o&&i.transition&&h(r,\"viewer-transition\")&&m(r,\"viewer-transition\"),t.change(a))},pointerup:function(e){var t=this,i=t.pointers,n=z(e),a=t.action;t.viewed&&(n.changedTouches?c(n.changedTouches,function(e){delete i[e.identifier]}):delete i[n.pointerId||0],a&&(\"move\"===a&&t.options.transition&&f(t.image,\"viewer-transition\"),t.action=!1))}},ee={show:function(){var e=this,t=e.options,i=e.element;if(t.inline||e.transitioning)return e;if(e.ready||e.build(),r(t.show)&&x(i,\"show\",t.show,!0),!1===k(i,\"show\"))return e;e.open();var n=e.viewer;return m(n,\"viewer-hide\"),x(i,\"shown\",function(){var t,i;e.view(e.target?l(e.target,(t=e.images,i=i>=0?i:0,Array.from?Array.from(t).slice(i):P.call(t,i))):e.index),e.target=!1},!0),t.transition?(e.transitioning=!0,f(n,\"viewer-transition\"),Y(n),x(n,\"transitionend\",d(e.shown,e),!0),f(n,\"viewer-in\")):(f(n,\"viewer-in\"),e.shown()),e},hide:function(){var e=this,t=e.options,i=e.element,n=e.viewer;return t.inline||e.transitioning||!e.visible?e:(r(t.hide)&&x(i,\"hide\",t.hide,!0),!1===k(i,\"hide\")?e:(e.viewed&&t.transition?(e.transitioning=!0,x(e.image,\"transitionend\",function(){x(n,\"transitionend\",d(e.hidden,e),!0),m(n,\"viewer-in\")},!0),e.zoomTo(0,!1,!1,!0)):(m(n,\"viewer-in\"),e.hidden()),e))},view:function(e){var t=this,i=t.element,n=t.title,a=t.canvas;if(e=Number(e)||0,!t.ready||!t.visible||t.played||e<0||e>=t.length||t.viewed&&e===t.index)return t;var o=t.items[e],r=D(o,\"img\")[0],l=p(r,\"originalUrl\"),s=r.getAttribute(\"alt\"),c=document.createElement(\"img\");return c.src=l,c.alt=s,!1===k(i,\"view\",{originalImage:t.images[e],index:e,image:c})?t:(t.image=c,m(t.items[t.index],\"viewer-active\"),f(o,\"viewer-active\"),t.viewed=!1,t.index=e,t.imageData=null,f(c,\"viewer-invisible\"),L(a),I(a,c),t.renderList(),L(n),x(i,\"viewed\",function(){var e=t.imageData;C(n,s+\" (\"+e.naturalWidth+\" × \"+e.naturalHeight+\")\")},!0),c.complete?t.load():(x(c,\"load\",d(t.load,t),!0),t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout(function(){m(c,\"viewer-invisible\"),t.timeout=!1},1e3)),t)},prev:function(){return this.view(Math.max(this.index-1,0)),this},next:function(){return this.view(Math.min(this.index+1,this.length-1)),this},move:function(e,t){var i=this.imageData;return this.moveTo(n(e)?e:i.left+Number(e),n(t)?t:i.top+Number(t)),this},moveTo:function(e,t){var a=this,o=a.imageData;if(n(t)&&(t=e),e=Number(e),t=Number(t),a.viewed&&!a.played&&a.options.movable){var r=!1;i(e)&&(o.left=e,r=!0),i(t)&&(o.top=t,r=!0),r&&a.renderImage()}return a},zoom:function(e,t,i){var n=this.imageData;return e=(e=Number(e))<0?1/(1-e):1+e,this.zoomTo(n.width*e/n.naturalWidth,t,i),this},zoomTo:function(e,t,n,a){var o,r,l,s,u,d,v=this,h=v.options,f=v.pointers,m=v.imageData;if(i(e=Math.max(0,e))&&v.viewed&&!v.played&&(a||h.zoomable)){if(!a){var w=Math.max(.01,h.minZoomRatio),g=Math.min(100,h.maxZoomRatio);e=Math.min(Math.max(e,w),g)}e>.95&&e<1.05&&(e=1);var p=m.naturalWidth*e,b=m.naturalHeight*e;if(n){var y=(s=v.viewer,u=document.documentElement,{left:(d=s.getBoundingClientRect()).left+((window.scrollX||u&&u.scrollLeft||0)-(u&&u.clientLeft||0)),top:d.top+((window.scrollY||u&&u.scrollTop||0)-(u&&u.clientTop||0))}),x=f&&Object.keys(f).length?(o=0,r=0,l=0,c(f,function(e){o+=e.startX,r+=e.startY,l+=1}),{pageX:o/=l,pageY:r/=l}):{pageX:n.pageX,pageY:n.pageY};m.left-=(p-m.width)*((x.pageX-y.left-m.left)/m.width),m.top-=(b-m.height)*((x.pageY-y.top-m.top)/m.height)}else m.left-=(p-m.width)/2,m.top-=(b-m.height)/2;m.width=p,m.height=b,m.ratio=e,v.renderImage(),t&&v.tooltip()}return v},rotate:function(e){return this.rotateTo((this.imageData.rotate||0)+Number(e)),this},rotateTo:function(e){var t=this,n=t.imageData;return i(e=Number(e))&&t.viewed&&!t.played&&t.options.rotatable&&(n.rotate=e,t.renderImage()),t},scale:function(e,t){var a=this,o=a.imageData;if(n(t)&&(t=e),e=Number(e),t=Number(t),a.viewed&&!a.played&&a.options.scalable){var r=!1;i(e)&&(o.scaleX=e,r=!0),i(t)&&(o.scaleY=t,r=!0),r&&a.renderImage()}return a},scaleX:function(e){return this.scale(e,this.imageData.scaleY),this},scaleY:function(e){return this.scale(this.imageData.scaleX,e),this},play:function(){var e=this,t=e.options,n=e.player,a=d(e.loadImage,e),o=[],r=0,l=0;return!e.visible||e.played?e:(t.fullscreen&&e.requestFullscreen(),e.played=!0,f(n,\"viewer-show\"),c(e.items,function(e,i){var s=D(e,\"img\")[0],c=document.createElement(\"img\");c.src=p(s,\"originalUrl\"),c.alt=s.getAttribute(\"alt\"),r+=1,f(c,\"viewer-fade\"),w(c,\"viewer-transition\",t.transition),h(e,\"viewer-active\")&&(f(c,\"viewer-in\"),l=i),o.push(c),x(c,\"load\",a,!0),I(n,c)}),i(t.interval)&&t.interval>0&&r>1&&function i(){e.playing=setTimeout(function(){m(o[l],\"viewer-in\"),f(o[l=(l+=1)<r?l:0],\"viewer-in\"),i()},t.interval)}(),e)},stop:function(){var e=this,t=e.player;return e.played?(e.options.fullscreen&&e.exitFullscreen(),e.played=!1,clearTimeout(e.playing),m(t,\"viewer-show\"),L(t),e):e},full:function(){var e=this,t=e.options,i=e.viewer,n=e.image,a=e.list;return!e.visible||e.played||e.fulled||!t.inline?e:(e.fulled=!0,e.open(),f(e.button,\"viewer-fullscreen-exit\"),t.transition&&(m(n,\"viewer-transition\"),m(a,\"viewer-transition\")),f(i,\"viewer-fixed\"),i.setAttribute(\"style\",\"\"),v(i,{zIndex:t.zIndex}),e.initContainer(),e.viewerData=u({},e.containerData),e.renderList(),e.initImage(function(){e.renderImage(function(){t.transition&&setTimeout(function(){f(n,\"viewer-transition\"),f(a,\"viewer-transition\")},0)})}),e)},exit:function(){var e=this,t=e.options,i=e.viewer,n=e.image,a=e.list;return e.fulled?(e.fulled=!1,e.close(),m(e.button,\"viewer-fullscreen-exit\"),t.transition&&(m(n,\"viewer-transition\"),m(a,\"viewer-transition\")),m(i,\"viewer-fixed\"),v(i,{zIndex:t.zIndexInline}),e.viewerData=u({},e.parentData),e.renderViewer(),e.renderList(),e.initImage(function(){e.renderImage(function(){t.transition&&setTimeout(function(){f(n,\"viewer-transition\"),f(a,\"viewer-transition\")},0)})}),e):e},tooltip:function(){var e=this,t=e.options,i=e.tooltipBox,n=e.imageData;return e.viewed&&!e.played&&t.tooltip?(C(i,Math.round(100*n.ratio)+\"%\"),e.tooltiping?clearTimeout(e.tooltiping):t.transition?(e.fading&&k(i,\"transitionend\"),f(i,\"viewer-show\"),f(i,\"viewer-fade\"),f(i,\"viewer-transition\"),Y(i),f(i,\"viewer-in\")):f(i,\"viewer-show\"),e.tooltiping=setTimeout(function(){t.transition?(x(i,\"transitionend\",function(){m(i,\"viewer-show\"),m(i,\"viewer-fade\"),m(i,\"viewer-transition\"),e.fading=!1},!0),m(i,\"viewer-in\"),e.fading=!0):m(i,\"viewer-show\"),e.tooltiping=!1},1e3),e):e},toggle:function(){var e=this;return 1===e.imageData.ratio?e.zoomTo(e.initialImageData.ratio,!0):e.zoomTo(1,!0),e},reset:function(){var e=this;return e.viewed&&!e.played&&(e.imageData=u({},e.initialImageData),e.renderImage()),e},update:function(){var e=this,t=[];if(e.isImg&&!e.element.parentNode)return e.destroy();if(e.length=e.images.length,e.ready&&(c(e.items,function(i,n){var a=D(i,\"img\")[0],o=e.images[n];o?o.src!==a.src&&t.push(n):t.push(n)}),v(e.list,{width:\"auto\"}),e.initList(),e.visible))if(e.length){if(e.viewed){var i=l(e.index,t);i>=0?(e.viewed=!1,e.view(Math.max(e.index-(i+1),0))):f(e.items[e.index],\"viewer-active\")}}else e.image=null,e.viewed=!1,e.index=0,e.imageData=null,L(e.canvas),L(e.title);return e},destroy:function(){var e=this,t=e.element;return e.options.inline?e.unbind():(e.visible&&e.unbind(),y(t,\"click\",e.onStart)),e.unbuild(),function(e,t){if(a(e[t]))delete e[t];else if(e.dataset)try{delete e.dataset[t]}catch(i){e.dataset[t]=null}else e.removeAttribute(\"data-\"+g(t))}(t,\"viewer\"),e}},te={open:function(){var e=this.body;f(e,\"viewer-open\"),e.style.paddingRight=this.scrollbarWidth+\"px\"},close:function(){var e=this.body;m(e,\"viewer-open\"),e.style.paddingRight=0},shown:function(){var e=this,t=e.options,i=e.element;e.transitioning=!1,e.fulled=!0,e.visible=!0,e.render(),e.bind(),r(t.shown)&&x(i,\"shown\",t.shown,!0),k(i,\"shown\")},hidden:function(){var e=this,t=e.options,i=e.element;e.transitioning=!1,e.viewed=!1,e.fulled=!1,e.visible=!1,e.unbind(),e.close(),f(e.viewer,\"viewer-hide\"),e.resetList(),e.resetImage(),r(t.hidden)&&x(i,\"hidden\",t.hidden,!0),k(i,\"hidden\")},requestFullscreen:function(){var e=document.documentElement;!this.fulled||document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement||(e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT))},exitFullscreen:function(){this.fulled&&(document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen())},change:function(e){var t,i,n,a=this,o=a.pointers,r=o[Object.keys(o)[0]],l=r.endX-r.startX,s=r.endY-r.startY;switch(a.action){case\"move\":a.move(l,s);break;case\"zoom\":a.zoom((i=u({},t=o),n=[],c(t,function(e,t){delete i[t],c(i,function(t){var i=Math.abs(e.startX-t.startX),a=Math.abs(e.startY-t.startY),o=Math.abs(e.endX-t.endX),r=Math.abs(e.endY-t.endY),l=Math.sqrt(i*i+a*a),s=(Math.sqrt(o*o+r*r)-l)/l;n.push(s)})}),n.sort(function(e,t){return Math.abs(e)<Math.abs(t)}),n[0]),!1,e);break;case\"switch\":a.action=\"switched\",Math.abs(l)>Math.abs(s)&&(l>1?a.prev():l<-1&&a.next())}c(o,function(e){e.startX=e.endX,e.startY=e.endY})},isSwitchable:function(){var e=this.imageData,t=this.viewerData;return this.length>1&&e.left>=0&&e.top>=0&&e.width<=t.width&&e.height<=t.height}},ie=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),ne=void 0!==document.createElement(\"viewer\").style.transition,ae=void 0,oe=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e);var n=this;n.element=t,n.options=u({},A,o(i)&&i),n.isImg=!1,n.ready=!1,n.visible=!1,n.viewed=!1,n.fulled=!1,n.played=!1,n.wheeling=!1,n.playing=!1,n.fading=!1,n.tooltiping=!1,n.transitioning=!1,n.action=!1,n.target=!1,n.timeout=!1,n.index=0,n.length=0,n.pointers={},n.init()}return ie(e,[{key:\"init\",value:function(){var e=this,t=e.options,i=e.element;if(!p(i,\"viewer\")){b(i,\"viewer\",e);var n=\"img\"===i.tagName.toLowerCase(),a=n?[i]:D(i,\"img\"),o=a.length;if(o)if(r(t.ready)&&x(i,\"ready\",t.ready,!0),ne||(t.transition=!1),e.isImg=n,e.length=o,e.count=0,e.images=a,e.body=document.body,e.scrollbarWidth=window.innerWidth-document.body.clientWidth,t.inline){var l=d(e.progress,e);x(i,\"ready\",function(){e.view()},!0),c(a,function(e){e.complete?l():x(e,\"load\",l,!0)})}else x(i,\"click\",e.onStart=d(e.start,e))}}},{key:\"progress\",value:function(){this.count+=1,this.count===this.length&&this.build()}},{key:\"build\",value:function(){var e=this,t=e.options,i=e.element;if(!e.ready){var n=i.parentNode,a=document.createElement(\"div\");a.innerHTML='<div class=\"viewer-container\"><div class=\"viewer-canvas\"></div><div class=\"viewer-footer\"><div class=\"viewer-title\"></div><ul class=\"viewer-toolbar\"><li role=\"button\" class=\"viewer-zoom-in\" data-action=\"zoom-in\"></li><li role=\"button\" class=\"viewer-zoom-out\" data-action=\"zoom-out\"></li><li role=\"button\" class=\"viewer-rotate-left\" data-action=\"rotate-left\"></li><li role=\"button\" class=\"viewer-rotate-right\" data-action=\"rotate-right\"></li><li role=\"button\" class=\"viewer-flip-horizontal\" data-action=\"flip-horizontal\"></li><li role=\"button\" class=\"viewer-flip-vertical\" data-action=\"flip-vertical\"></li></ul><div class=\"viewer-navbar\"><ul class=\"viewer-list\"></ul></div></div><div class=\"viewer-tooltip\"></div><div role=\"button\" class=\"viewer-button\" data-action=\"mix\"></div><div class=\"viewer-player\"></div></div>';var o,r=E(a,\"viewer-container\")[0],l=E(r,\"viewer-title\")[0],s=E(r,\"viewer-toolbar\")[0],c=E(r,\"viewer-navbar\")[0],u=E(r,\"viewer-button\")[0];if(e.parent=n,e.viewer=r,e.title=l,e.toolbar=s,e.navbar=c,e.button=u,e.canvas=E(r,\"viewer-canvas\")[0],e.footer=E(r,\"viewer-footer\")[0],e.tooltipBox=E(r,\"viewer-tooltip\")[0],e.player=E(r,\"viewer-player\")[0],e.list=E(r,\"viewer-list\")[0],f(l,t.title?X(t.title):\"viewer-hide\"),f(s,t.toolbar?X(t.toolbar):\"viewer-hide\"),f(c,t.navbar?X(t.navbar):\"viewer-hide\"),w(u,\"viewer-hide\",!t.button),w(s.querySelectorAll('li[class*=\"zoom\"]'),\"viewer-invisible\",!t.zoomable),w(s.querySelectorAll('li[class*=\"flip\"]'),\"viewer-invisible\",!t.scalable),!t.rotatable){var d=s.querySelectorAll('li[class*=\"rotate\"]');f(d,\"viewer-invisible\"),I(s,d)}t.inline?(f(u,\"viewer-fullscreen\"),v(r,{zIndex:t.zIndexInline}),\"static\"===(o=n,window.getComputedStyle?window.getComputedStyle(o,null):o.currentStyle).position&&v(n,{position:\"relative\"}),n.insertBefore(r,i.nextSibling)):(f(u,\"viewer-close\"),f(r,\"viewer-fixed\"),f(r,\"viewer-fade\"),f(r,\"viewer-hide\"),v(r,{zIndex:t.zIndex}),document.body.appendChild(r)),t.inline&&(e.render(),e.bind(),e.visible=!0),e.ready=!0,k(i,\"ready\")}}},{key:\"unbuild\",value:function(){this.ready&&(this.ready=!1,T(this.viewer))}}],[{key:\"noConflict\",value:function(){return window.Viewer=ae,e}},{key:\"setDefaults\",value:function(e){u(A,o(e)&&e)}}]),e}();return u(oe.prototype,V),u(oe.prototype,J),u(oe.prototype,Q),u(oe.prototype,ee),u(oe.prototype,te),\"undefined\"!=typeof window&&(ae=window.Viewer,window.Viewer=oe),oe});",
		"ui5lab/wl/img/library.js": "/*!\n * ${copyright}\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/library\"],function(e,i){\"use strict\";return sap.ui.getCore().initLibrary({name:\"ui5lab.wl.img\",dependencies:[\"sap.ui.core\"],types:[],interfaces:[],controls:[\"ui5lab.wl.img.ImageViewer\"],elements:[],noLibraryCSS:!1,version:\"${version}\"}),ui5lab.wl.img});"
	}
});