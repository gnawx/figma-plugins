!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=6)}({0:function(e,r,n){"use strict";function t(e,r){return figma.group(e,r)}function o(){return figma.currentPage}function a(e){const r=typeof e;if(null===e)return null;if("undefined"===r||"number"===r||"string"===r||"boolean"===r)return e;if("object"===r){if(e instanceof Array)return e.map(e=>a(e));if(e instanceof Uint8Array)return new Uint8Array(e);{let r={};for(const n in e)r[n]=a(e[n]);return r}}throw"unknown"}function i(e){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function c(e,r){const n=document.getElementById(e);switch(r){case"number":return parseInt(n.value,10);case"boolean":return n.checked;case"string":return n.value}}n.d(r,"d",(function(){return t})),n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return a})),n.d(r,"e",(function(){return i})),n.d(r,"c",(function(){return c}))},6:function(e,r,n){"use strict";n.r(r);var t=n(0),o=function(e,r,n,t){return new(n||(n=Promise))((function(o,a){function i(e){try{l(t.next(e))}catch(e){a(e)}}function c(e){try{l(t.throw(e))}catch(e){a(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,c)}l((t=t.apply(e,r||[])).next())}))};function a(e,r=!0,n,o,a,i,c,l,u,s){const f=[];let d;c?"Vertical"===e?d=(a-1)*i+l:(n-=1,d=a*i):d=a*i;const g=null===u.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)?t.e("#C7C7C7"):t.e(u);for(let r=0;r<n+1;r++){const n=figma.createLine(),a=t.a(n.strokes);a[0].color.r=g.r/255,a[0].color.g=g.g/255,a[0].color.b=g.b/255,n.strokes=a,"Vertical"===e?(n.rotation=90,n.x=s.x+r*o,n.y=s.y):(n.x=s.x,n.y=s.y-r*o),n.resize(d,0),f.push(n)}if(c&&"Horizontal"===e){const e=figma.createLine(),r=t.a(e.strokes);r[0].color.r=g.r/255,r[0].color.g=g.g/255,r[0].color.b=g.b/255,e.strokes=r,e.resize(d,0),e.x=s.x,e.y=s.y-l-n*o,f.push(e)}const m=t.d(f,t.b());return r||(m.visible=!1),m.name=e,m}function i(e,r,n,o,a,i,c,l,u){const s=[],f=2*n;let d=0,g=0;i&&(r-=1),"Odd"===e?(d=Math.round(r/2),g=u.y-n):(d=Math.floor(r/2),g=u.y-f);for(let i=0;i<d;i++){const u=figma.createRectangle(),d=t.a(u.fills);let m;m=a&&(r%2==0&&"Odd"===e||r%2!=0&&"Even"===e)?t.e(l):t.e(c),d[0].color.r=m.r/255,d[0].color.g=m.g/255,d[0].color.b=m.b/255,u.fills=d,u.resize(o,n),u.y=g-i*f,s.push(u)}const m=t.d(s,t.b());return m.name=e,m}function c(e){return o(this,void 0,void 0,(function*(){yield figma.loadFontAsync(e)}))}figma.showUI(__html__,{width:300,height:485}),figma.ui.onmessage=e=>{!function(e){if("create-table"===e.type){const r=i("Odd",e.rows,e.rowHeight,e.columnWidth*e.columns,e.alternateBackgrounds,e.header,e.primarybackgroundColor,e.stripedbackgroundColor,e.referenceCoordinates),n=i("Even",e.rows,e.rowHeight,e.columnWidth*e.columns,e.alternateBackgrounds,e.header,e.primarybackgroundColor,e.stripedbackgroundColor,e.referenceCoordinates),o=[r,n],l=t.d(o,figma.currentPage);l.name="Row Background";const u=function(e,r,n,o,a,i){const l=[];a&&(e-=1);const u=5,s=5;for(let a=0;a<n;a++){const n=[],f=i.x+a*o+u;for(let t=0;t<e;t++){const a=figma.createText();c(a.fontName).then(n=>{a.name="Row "+(e-t),a.characters="Sample",a.textAlignVertical="CENTER",a.resize(o-1-2*u,r-2*s),a.x=f,a.y=i.y+s-(t+1)*r}),n.push(a)}const d=t.d(n,t.b());d.name="Column "+(a+1),l.push(d)}const f=t.d(l,t.b());return f.name="Table Texts",f}(e.rows,e.rowHeight,e.columns,e.columnWidth,e.header,e.referenceCoordinates),s=function(e,r,n,o,a,i,l,u,s,f){if(a){const a=[],d=o*n,g=figma.createRectangle(),m=t.a(g.fills),h=t.e(s);m[0].color.r=h.r/255,m[0].color.g=h.g/255,m[0].color.b=h.b/255,g.fills=m,g.resize(d,i),g.y=f.y-i-(e-1)*r,g.name="Header Background",a.push(g);const y=[],b=l?i-u:i,p={x:5,y:5};for(let t=0;t<n;t++){const n=f.x+t*o+p.x,a=figma.createText(),l={family:"Roboto",style:"Bold"};c(l).then(c=>{a.name="Column Header "+(t+1),a.characters="SAMPLE",a.textAlignVertical="CENTER",a.fontName=l,a.resize(o-1-2*p.x,b-2*p.y),a.x=n,a.y=f.y-i+p.y-(e-1)*r}),y.push(a)}const x=t.d(y,t.b());if(x.name="Column Headers",a.push(x),l){const i=[],c={x:5,y:5};for(let a=0;a<n;a++){const n=f.x+a*o+c.x,l=figma.createRectangle(),s=t.a(l.fills),d=t.e("#FFFFFF");s[0].color.r=d.r/255,s[0].color.g=d.g/255,s[0].color.b=d.b/255,l.fills=s,l.name="Floating Filter Placeholder"+(a+1),l.resize(o-1-2*c.x,u-2*c.y),l.x=n,l.y=f.y-u+c.y-(e-1)*r,i.push(l)}const l=t.d(i,t.b());l.name="Floating Filters",a.push(l)}const w=t.d(a,t.b());return w.name="Table Header",w}return null}(e.rows,e.rowHeight,e.columns,e.columnWidth,e.header,e.headerHeight,e.floatingFilter,e.floatingFilterHeight,e.primarybackgroundColor,e.referenceCoordinates),f=a("Vertical",e.borders,e.columns,e.columnWidth,e.rows,e.rowHeight,e.header,e.headerHeight,e.borderColor,e.referenceCoordinates),d=a("Horizontal",e.borders,e.rows,e.rowHeight,e.columns,e.columnWidth,e.header,e.headerHeight,e.borderColor,e.referenceCoordinates),g=[f,d],m=t.d(g,figma.currentPage);m.name="Borders";const h=t.d([l],figma.currentPage);h.appendChild(u),null!==s&&h.appendChild(s),h.appendChild(m),h.name="Table",figma.currentPage.selection=[h],figma.viewport.scrollAndZoomIntoView([h]),figma.notify("👍 GridGen successfully generated your table")}}(e),figma.closePlugin()}}});