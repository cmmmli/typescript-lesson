!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{get totalScore(){return s.getInstance().activeElementsScore.reduce((e,t)=>e+t,0)}render(){const e=document.querySelector(".score__number");e&&(e.textContent=String(this.totalScore))}static getInstance(){return r.instance||(r.instance=new r),r.instance}}class c{constructor(e){this.element=e,e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){this.element.classList.toggle("food--active");r.getInstance().render()}}class s{constructor(){this.elements=document.querySelectorAll(".food"),this._activeElements=[],this._activeElementsScore=[],this.elements.forEach(e=>{new c(e)})}get activeElements(){return this._activeElements=[],this.elements.forEach(e=>{e.classList.contains("food--active")&&this._activeElements.push(e)}),this._activeElements}get activeElementsScore(){return this._activeElementsScore=[],this.activeElements.forEach(e=>{const t=e.querySelector(".food__score");t&&this._activeElementsScore.push(Number(t.textContent))}),this._activeElementsScore}static getInstance(){return s.instance||(s.instance=new s),s.instance}}s.getInstance()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9mb29kcy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L21haW4uanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJnZXRJbnN0YW5jZSIsImFjdGl2ZUVsZW1lbnRzU2NvcmUiLCJyZWR1Y2UiLCJ0b3RhbCIsInNjb3JlIiwic2NvcmVOdW1iZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsInRoaXMiLCJ0b3RhbFNjb3JlIiwiaW5zdGFuY2UiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrRXZlbnRIYW5kbGVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVuZGVyIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2FjdGl2ZUVsZW1lbnRzIiwiX2FjdGl2ZUVsZW1lbnRzU2NvcmUiLCJmb3JFYWNoIiwiY29udGFpbnMiLCJwdXNoIiwiYWN0aXZlRWxlbWVudHMiLCJmb29kU2NvcmUiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1C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S0FBS1kscUJBQXVCLEdBQzVCWixLQUFLZ0IsZUFBZUgsUUFBU1YsSUFDekIsTUFBTWMsRUFBWWQsRUFBUU4sY0FBYyxnQkFDcENvQixHQUNBakIsS0FBS1kscUJBQXFCRyxLQUFLRyxPQUFPRCxFQUFVbkIsZ0JBR2pERSxLQUFLWSxxQkFFaEIscUJBSUksT0FISyxFQUFNVixXQUNQLEVBQU1BLFNBQVcsSUFBSSxHQUVsQixFQUFNQSxVQ2hDckIsRUFBTVoiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgRm9vZHMgfSBmcm9tICcuL2Zvb2RzLmpzJztcbmV4cG9ydCBjbGFzcyBTY29yZSB7XG4gICAgZ2V0IHRvdGFsU2NvcmUoKSB7XG4gICAgICAgIGNvbnN0IGZvb2RzID0gRm9vZHMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGZvb2RzLmFjdGl2ZUVsZW1lbnRzU2NvcmUucmVkdWNlKCh0b3RhbCwgc2NvcmUpID0+IHRvdGFsICsgc2NvcmUsIDApO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX19udW1iZXInKTtcbiAgICAgICAgaWYgKHNjb3JlTnVtYmVyKSB7XG4gICAgICAgICAgICBzY29yZU51bWJlci50ZXh0Q29udGVudCA9IFN0cmluZyh0aGlzLnRvdGFsU2NvcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFTY29yZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU2NvcmUuaW5zdGFuY2UgPSBuZXcgU2NvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmUuaW5zdGFuY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2NvcmUgfSBmcm9tICcuL3Njb3JlLmpzJztcbmV4cG9ydCBjbGFzcyBGb29kIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjbGlja0V2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2Zvb2QtLWFjdGl2ZScpO1xuICAgICAgICBjb25zdCBzY29yZSA9IFNjb3JlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHNjb3JlLnJlbmRlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZvb2QgfSBmcm9tICcuL2Zvb2QuanMnO1xuZXhwb3J0IGNsYXNzIEZvb2RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb29kJyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBuZXcgRm9vZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBhY3RpdmVFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvb2QtLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbGVtZW50cztcbiAgICB9XG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzU2NvcmUoKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb29kU2NvcmUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb29kX19zY29yZScpO1xuICAgICAgICAgICAgaWYgKGZvb2RTY29yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUucHVzaChOdW1iZXIoZm9vZFNjb3JlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUZvb2RzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBGb29kcy5pbnN0YW5jZSA9IG5ldyBGb29kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGb29kcy5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kcyB9IGZyb20gJy4vZm9vZHMuanMnXG5Gb29kcy5nZXRJbnN0YW5jZSgpXG4iXSwic291cmNlUm9vdCI6IiJ9