function KeyboardInputManager(){this.events={},window.navigator.msPointerEnabled?(this.eventTouchstart="MSPointerDown",this.eventTouchmove="MSPointerMove",this.eventTouchend="MSPointerUp"):(this.eventTouchstart="touchstart",this.eventTouchmove="touchmove",this.eventTouchend="touchend"),this.listen()}KeyboardInputManager.prototype.on=function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)},KeyboardInputManager.prototype.emit=function(t,e){var n=this.events[t];n&&n.forEach(function(t){t(e)})},KeyboardInputManager.prototype.listen=function(){var t=this,e={38:0,39:1,40:2,37:3,75:0,76:1,74:2,72:3,87:0,68:1,83:2,65:3};document.addEventListener("keydown",function(n){var a=n.altKey||n.ctrlKey||n.metaKey||n.shiftKey,o=e[n.which];t.targetIsInput(n)||(a||void 0!==o&&(n.preventDefault(),t.emit("move",o)),a||82!==n.which||t.restart.call(t,n))}),this.bindButtonPress(".retry-button",this.restart),this.bindButtonPress(".restart-button",this.restart);var n,a,o=document.getElementsByClassName("game-container")[0];o.addEventListener(this.eventTouchstart,function(e){!window.navigator.msPointerEnabled&&e.touches.length>1||e.targetTouches>1||t.targetIsInput(e)||(window.navigator.msPointerEnabled?(n=e.pageX,a=e.pageY):(n=e.touches[0].clientX,a=e.touches[0].clientY),e.preventDefault())}),o.addEventListener(this.eventTouchmove,function(t){t.preventDefault()}),o.addEventListener(this.eventTouchend,function(e){if(!(!window.navigator.msPointerEnabled&&e.touches.length>0||e.targetTouches>0||t.targetIsInput(e))){var o,r;window.navigator.msPointerEnabled?(o=e.pageX,r=e.pageY):(o=e.changedTouches[0].clientX,r=e.changedTouches[0].clientY);var i=o-n,s=Math.abs(i),u=r-a,h=Math.abs(u);Math.max(s,h)>10&&t.emit("move",s>h?i>0?1:3:u>0?2:0)}})},KeyboardInputManager.prototype.restart=function(t){t.preventDefault(),this.emit("restart")},KeyboardInputManager.prototype.keepPlaying=function(t){t.preventDefault(),this.emit("keepPlaying")},KeyboardInputManager.prototype.bindButtonPress=function(t,e){var n=document.querySelector(t);n.addEventListener("click",e.bind(this)),n.addEventListener(this.eventTouchend,e.bind(this))},KeyboardInputManager.prototype.targetIsInput=function(t){return"input"===t.target.tagName.toLowerCase()};