var h;h||=typeof Module !== 'undefined' ? Module : {};var aa=Object.assign({},h),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,k="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,m="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");m=k?ka.dirname(m)+"/":__dirname+"/";ha=(a,b)=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c,d=!0)=>{a=la(a)?new URL(a):ka.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,g)=>{e?c(e):b(d?g.buffer:g)})};!h.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=h);process.on("uncaughtException",
a=>{if(!("unwind"===a||a instanceof ma||a.context instanceof ma))throw a;});da=(a,b)=>{process.exitCode=a;throw b;};h.inspect=()=>"[Emscripten Module object]"}else if(ea||k)k?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=0!==m.indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,
!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var na=h.print||console.log.bind(console),q=h.printErr||console.error.bind(console);Object.assign(h,aa);aa=null;h.arguments&&(ba=h.arguments);h.thisProgram&&(ca=h.thisProgram);h.quit&&(da=h.quit);var t;h.wasmBinary&&(t=h.wasmBinary);
"object"!=typeof WebAssembly&&oa("no native wasm support detected");var pa,qa=!1,ra,u,sa,ta,v,x,y,z;function ua(){var a=pa.buffer;h.HEAP8=ra=new Int8Array(a);h.HEAP16=sa=new Int16Array(a);h.HEAPU8=u=new Uint8Array(a);h.HEAPU16=ta=new Uint16Array(a);h.HEAP32=v=new Int32Array(a);h.HEAPU32=x=new Uint32Array(a);h.HEAPF32=y=new Float32Array(a);h.HEAPF64=z=new Float64Array(a)}var va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=h.preRun.shift();va.unshift(a)}var A=0,Ba=null,B=null;
function oa(a){if(h.onAbort)h.onAbort(a);a="Aborted("+a+")";q(a);qa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var Ca=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),C;C="c64-ui.wasm";if(!Ca(C)){var Da=C;C=h.locateFile?h.locateFile(Da,m):m+Da}function Ea(a){if(a==C&&t)return new Uint8Array(t);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}
function Fa(a){if(!t&&(ea||k)){if("function"==typeof fetch&&!la(a))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Ea(a));if(ia)return new Promise((b,c)=>{ia(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Ea(a))}function Ga(a,b,c){return Fa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{q(`failed to asynchronously prepare wasm: ${d}`);oa(d)})}
function Ha(a,b){var c=C;t||"function"!=typeof WebAssembly.instantiateStreaming||Ca(c)||la(c)||fa||"function"!=typeof fetch?Ga(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){q(`wasm streaming compile failed: ${e}`);q("falling back to ArrayBuffer instantiation");return Ga(c,a,b)}))}function ma(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ia=a=>{for(;0<a.length;)a.shift()(h)},Ja=h.noExitRuntime||!0,Ka="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,D=(a,b,c)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ka)return Ka.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|
e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},Na=a=>{var b=La();a();Ma(b)},Oa=0;function Pa(){for(var a=E.length-1;0<=a;--a)Qa(a);E=[];Ra=[]}var Ra=[];function Sa(){if(navigator.userActivation?navigator.userActivation.isActive:Oa&&Ta.Jc)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.vd.apply(null,b.nd)}}var E=[];function Qa(a){var b=E[a];b.target.removeEventListener(b.Ac,b.hd,b.Bc);E.splice(a,1)}
function F(a){function b(d){++Oa;Ta=a;Sa();a.Dc(d);Sa();--Oa}if(!a.target)return-4;if(a.Cc)a.hd=b,a.target.addEventListener(a.Ac,b,a.Bc),E.push(a),Ua||(ya.push(Pa),Ua=!0);else for(var c=0;c<E.length;++c)E[c].target==a.target&&E[c].Ac==a.Ac&&Qa(c--);return 0}function Va(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ua,Ta,Wa,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],G=a=>{a=2<a?a?D(u,a):"":a;return cb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)},db=a=>0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},eb=[],fb,H=a=>{var b=eb[a];b||(a>=eb.length&&(eb.length=a+1),eb[a]=b=fb.get(a));return b},I=(a,b,c)=>{var d=u;if(!(0<c))return 0;var e=b;c=b+c-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=
a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},gb=(a,b,c,d,e,g)=>{Wa||=J(256);a={target:G(a),Ac:g,Cc:d,Dc:(f=event)=>{var l=f.target.id?f.target.id:"",n=Wa;I(Va(f.target),n+0,128);I(l,n+128,128);H(d)(e,n,b)&&f.preventDefault()},Bc:c};return F(a)},hb=(a,
b,c,d,e,g)=>{Xa||=J(176);a={target:G(a),Jc:!0,Ac:g,Cc:d,Dc:f=>{var l=Xa;z[l>>3]=f.timeStamp;var n=l>>2;v[n+2]=f.location;v[n+3]=f.ctrlKey;v[n+4]=f.shiftKey;v[n+5]=f.altKey;v[n+6]=f.metaKey;v[n+7]=f.repeat;v[n+8]=f.charCode;v[n+9]=f.keyCode;v[n+10]=f.which;I(f.key||"",l+44,32);I(f.code||"",l+76,32);I(f.char||"",l+108,32);I(f.locale||"",l+140,32);H(d)(e,l,b)&&f.preventDefault()},Bc:c};return F(a)},ib=(a,b,c)=>{z[a>>3]=b.timeStamp;a>>=2;v[a+2]=b.screenX;v[a+3]=b.screenY;v[a+4]=b.clientX;v[a+5]=b.clientY;
v[a+6]=b.ctrlKey;v[a+7]=b.shiftKey;v[a+8]=b.altKey;v[a+9]=b.metaKey;sa[2*a+20]=b.button;sa[2*a+21]=b.buttons;v[a+11]=b.movementX;v[a+12]=b.movementY;c=db(c);v[a+13]=b.clientX-c.left;v[a+14]=b.clientY-c.top},K=(a,b,c,d,e,g)=>{Ya||=J(72);a=G(a);return F({target:a,Jc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Ac:g,Cc:d,Dc:(f=event)=>{ib(Ya,f,a);H(d)(e,Ya,b)&&f.preventDefault()},Bc:c})},jb=(a,b,c,d,e)=>{Za||=J(260);return F({target:a,Ac:e,Cc:d,Dc:(g=event)=>{var f=Za,l=document.pointerLockElement||
document.Ic||document.Qc||document.Pc;v[f>>2]=!!l;var n=l&&l.id?l.id:"";I(Va(l),f+4,128);I(n,f+132,128);H(d)(20,f,b)&&g.preventDefault()},Bc:c})},kb=(a,b,c,d,e)=>F({target:a,Ac:e,Cc:d,Dc:(g=event)=>{H(d)(38,0,b)&&g.preventDefault()},Bc:c}),lb=(a,b,c,d)=>{$a||=J(36);a=G(a);return F({target:a,Ac:"resize",Cc:d,Dc:(e=event)=>{if(e.target==a){var g=document.body;if(g){var f=$a;v[f>>2]=e.detail;v[f+4>>2]=g.clientWidth;v[f+8>>2]=g.clientHeight;v[f+12>>2]=innerWidth;v[f+16>>2]=innerHeight;v[f+20>>2]=outerWidth;
v[f+24>>2]=outerHeight;v[f+28>>2]=pageXOffset;v[f+32>>2]=pageYOffset;H(d)(10,f,b)&&e.preventDefault()}}},Bc:c})},mb=(a,b,c,d,e,g)=>{ab||=J(1696);a=G(a);return F({target:a,Jc:"touchstart"==g||"touchend"==g,Ac:g,Cc:d,Dc:f=>{for(var l,n={},p=f.touches,r=0;r<p.length;++r)l=p[r],l.Uc=l.Wc=0,n[l.identifier]=l;for(r=0;r<f.changedTouches.length;++r)l=f.changedTouches[r],l.Uc=1,n[l.identifier]=l;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].Wc=1;p=ab;z[p>>3]=f.timeStamp;var w=p>>2;
v[w+3]=f.ctrlKey;v[w+4]=f.shiftKey;v[w+5]=f.altKey;v[w+6]=f.metaKey;w+=7;var qb=db(a),rb=0;for(r in n)if(l=n[r],v[w]=l.identifier,v[w+1]=l.screenX,v[w+2]=l.screenY,v[w+3]=l.clientX,v[w+4]=l.clientY,v[w+5]=l.pageX,v[w+6]=l.pageY,v[w+7]=l.Uc,v[w+8]=l.Wc,v[w+9]=l.clientX-qb.left,v[w+10]=l.clientY-qb.top,w+=13,31<++rb)break;v[p+8>>2]=rb;H(d)(e,p,b)&&f.preventDefault()},Bc:c})},nb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=
(c,d,e,g)=>b.drawArraysInstancedANGLE(c,d,e,g),a.drawElementsInstanced=(c,d,e,g,f)=>b.drawElementsInstancedANGLE(c,d,e,g,f))},ob=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},pb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},sb=a=>{a.pd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},
tb=a=>{a.qd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},ub=1,vb=[],L=[],wb=[],M=[],N=[],O=[],xb=[],yb=[],P=[],zb={},Ab=4;function Q(a){Bb||=a}
var Cb=a=>{for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b},Eb=(a,b)=>{a.Ic||(a.Ic=a.getContext,a.getContext=function(d,e){e=a.Ic(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Vc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0},Db=(a,b)=>{var c=Cb(yb),d={handle:c,attributes:b,version:b.Vc,Nc:a};a.canvas&&(a.canvas.md=d);yb[c]=d;("undefined"==typeof b.Tc||b.Tc)&&Fb(d);return c},Fb=a=>{a||=R;if(!a.kd){a.kd=!0;var b=a.Nc;nb(b);ob(b);pb(b);sb(b);
tb(b);2<=a.version&&(b.Sc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Sc)b.Sc=b.getExtension("EXT_disjoint_timer_query");b.ld=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}};function Gb(){var a=S.getSupportedExtensions()||[];return a=a.concat(a.map(b=>"GL_"+b))}
for(var Bb,R,Hb=(a,b,c,d,e,g)=>{a={target:G(a),Ac:g,Cc:d,Dc:(f=event)=>{H(d)(e,0,b)&&f.preventDefault()},Bc:c};F(a)},Ib=(a,b,c,d)=>{bb||=J(104);return F({target:a,Jc:!0,Ac:"wheel",Cc:d,Dc:(e=event)=>{var g=bb;ib(g,e,a);z[g+72>>3]=e.deltaX;z[g+80>>3]=e.deltaY;z[g+88>>3]=e.deltaZ;v[g+96>>2]=e.deltaMode;H(d)(9,g,b)&&e.preventDefault()},Bc:c})},Jb=["default","low-power","high-performance"],Kb=[null,[],[]],Lb=[],T=(a,b,c,d)=>{for(var e=0;e<a;e++){var g=S[c](),f=g&&Cb(d);g?(g.name=f,d[f]=g):Q(1282);v[b+
4*e>>2]=f}},Mb=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)v[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);q(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:Q(1280);q(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}v[b>>2]=c}else Q(1281)},Nb=a=>
{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Ob=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),U=a=>{a-=5120;return 0==a?ra:1==a?u:2==a?sa:4==a?v:6==a?y:5==a||28922==a||28520==a||30779==a||30782==a?x:ta},Pb=(a,b,c,d,e)=>{a=U(a);var g=31-Math.clz32(a.BYTES_PER_ELEMENT),f=Ab;return a.subarray(e>>g,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<g)+f-1&-f)>>g)},V=a=>{var b=S.gd;if(b){var c=b.Hc[a];
"number"==typeof c&&(b.Hc[a]=c=S.getUniformLocation(b,b.dd[a]+(0<c?`[${c}]`:"")));return c}Q(1282)},W=[],X=[],Qb=a=>{if(!Ja){if(h.onExit)h.onExit(a);qa=!0}da(a,new ma(a))},Sb=a=>{var b=Nb(a)+1,c=Rb(b);I(a,c,b);return c},S,Y=0;32>Y;++Y)Lb.push(Array(Y));var Tb=new Float32Array(288);for(Y=0;288>Y;++Y)W[Y]=Tb.subarray(0,Y+1);var Ub=new Int32Array(288);for(Y=0;288>Y;++Y)X[Y]=Ub.subarray(0,Y+1);
var jc={oa:function(){return 0},nb:function(){return 0},ob:function(){},g:()=>{oa("")},ia:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ja:(a,b,c)=>{a=G(a);if(!a)return-4;a=db(a);z[b>>3]=a.width;z[c>>3]=a.height;return 0},B:()=>performance.now(),jb:(a,b,c)=>u.copyWithin(a,b,b+c),Ya:(a,b)=>{function c(d){H(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ib:a=>{var b=u.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math;d=Math.max(a,d);a:{e=(e.min.call(e,2147483648,d+(65536-d%65536)%65536)-pa.buffer.byteLength+65535)/65536;try{pa.grow(e);ua();var g=1;break a}catch(f){}g=void 0}if(g)return!0}return!1},S:(a,b,c,d)=>gb(a,b,c,d,12,"blur"),ha:(a,b,c)=>{a=G(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:(a,b,c,d)=>gb(a,b,c,d,13,"focus"),aa:(a,b,c,d)=>hb(a,b,c,d,2,"keydown"),_:(a,b,c,d)=>hb(a,b,c,d,1,"keypress"),$:(a,b,c,d)=>hb(a,b,c,d,3,"keyup"),ga:(a,b,c,d)=>K(a,b,c,d,5,"mousedown"),da:(a,b,c,d)=>K(a,b,
c,d,33,"mouseenter"),ca:(a,b,c,d)=>K(a,b,c,d,34,"mouseleave"),ea:(a,b,c,d)=>K(a,b,c,d,8,"mousemove"),fa:(a,b,c,d)=>K(a,b,c,d,6,"mouseup"),V:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ic||document.body.Qc||document.body.Pc))return-1;a=G(a);if(!a)return-4;jb(a,b,c,d,"mozpointerlockchange");jb(a,b,c,d,"webkitpointerlockchange");jb(a,b,c,d,"mspointerlockchange");return jb(a,b,c,d,"pointerlockchange")},U:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||
document.body.Ic||document.body.Qc||document.body.Pc))return-1;a=G(a);if(!a)return-4;kb(a,b,c,d,"mozpointerlockerror");kb(a,b,c,d,"webkitpointerlockerror");kb(a,b,c,d,"mspointerlockerror");return kb(a,b,c,d,"pointerlockerror")},Za:(a,b,c,d)=>lb(a,b,c,d),W:(a,b,c,d)=>mb(a,b,c,d,25,"touchcancel"),X:(a,b,c,d)=>mb(a,b,c,d,23,"touchend"),Y:(a,b,c,d)=>mb(a,b,c,d,24,"touchmove"),Z:(a,b,c,d)=>mb(a,b,c,d,22,"touchstart"),R:(a,b,c,d)=>{Hb(a,b,c,d,31,"webglcontextlost");return 0},Q:(a,b,c,d)=>{Hb(a,b,c,d,32,
"webglcontextrestored");return 0},ba:(a,b,c,d)=>(a=G(a))?"undefined"!=typeof a.onwheel?Ib(a,b,c,d):-1:-4,Wa:(a,b)=>{b>>=2;b={alpha:!!v[b],depth:!!v[b+1],stencil:!!v[b+2],antialias:!!v[b+3],premultipliedAlpha:!!v[b+4],preserveDrawingBuffer:!!v[b+5],powerPreference:Jb[v[b+6]],failIfMajorPerformanceCaveat:!!v[b+7],Vc:v[b+8],rd:v[b+9],Tc:v[b+10],jd:v[b+11],sd:v[b+12],td:v[b+13]};a=G(a);return!a||b.jd?0:Eb(a,b)},Ua:(a,b)=>{a=yb[a];b=b?D(u,b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==
b&&nb(S);"OES_vertex_array_object"==b&&ob(S);"WEBGL_draw_buffers"==b&&pb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&sb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&tb(S);"WEBGL_multi_draw"==b&&(S.ld=S.getExtension("WEBGL_multi_draw"));return!!a.Nc.getExtension(b)},Xa:a=>{a>>=2;for(var b=0;14>b;++b)v[a+b]=0;v[a]=v[a+1]=v[a+3]=v[a+4]=v[a+8]=v[a+10]=1},Va:a=>{R=yb[a];h.od=S=R&&R.Nc;return!a||S?0:-5},na:()=>52,mb:()=>52,hb:function(){return 70},lb:(a,b,c,d)=>{for(var e=0,
g=0;g<c;g++){var f=x[b>>2],l=x[b+4>>2];b+=8;for(var n=0;n<l;n++){var p=u[f+n],r=Kb[a];0===p||10===p?((1===a?na:q)(D(r,0)),r.length=0):r.push(p)}e+=l}x[d>>2]=e;return 0},i:function(a,b,c){const d=a?D(u,a):"";console.log("fs_js_load_snapshot: called with",d,b);let e;try{e=window.indexedDB.open("chips",1)}catch(g){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+g)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=
()=>{var g=e.result;let f;try{f=g.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}g=f.objectStore("store");let l=d+"_"+b,n=g.get(l);n.onsuccess=()=>{if(void 0!==n.result){let p=n.result.length;console.log("fs_js_load_snapshot:",l,"successfully loaded",p,"bytes");let r=Vb(p);u.set(n.result,r);Wb(c,r,p)}else console.log("fs_js_load_snapshot:",l,"does not exist"),Wb(c,0,0)};n.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",
l)};f.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},eb:function(a,b,c,d){const e=a?D(u,a):"";console.log("fs_js_save_snapshot: called with",e,b);let g;try{g=window.indexedDB.open("chips",1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+f);return}g.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");g.result.createObjectStore("store")};g.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");
let f=g.result.transaction(["store"],"readwrite");var l=f.objectStore("store");let n=e+"_"+b;l=l.put(u.subarray(c,c+d),n);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",n,"successfully stored")};l.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",n)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};g.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},l:function(a){S.activeTexture(a)},za:(a,b)=>{S.attachShader(L[a],O[b])},a:(a,b)=>{35051==
a?S.Rc=b:35052==a&&(S.Fc=b);S.bindBuffer(a,vb[b])},j:(a,b)=>{S.bindFramebuffer(a,wb[b])},Ga:(a,b)=>{S.bindRenderbuffer(a,M[b])},m:(a,b)=>{S.bindSampler(a,P[b])},c:(a,b)=>{S.bindTexture(a,N[b])},M:a=>{S.bindVertexArray(xb[a])},I:function(a,b,c,d){S.blendColor(a,b,c,d)},J:function(a,b){S.blendEquationSeparate(a,b)},K:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},sb:function(a,b,c,d,e,g,f,l,n,p){S.blitFramebuffer(a,b,c,d,e,g,f,l,n,p)},Ia:(a,b,c,d)=>{2<=R.version?c&&b?S.bufferData(a,u,d,c,b):S.bufferData(a,
b,d):S.bufferData(a,c?u.subarray(c,c+b):b,d)},r:(a,b,c,d)=>{2<=R.version?c&&S.bufferSubData(a,b,u,d,c):S.bufferSubData(a,b,u.subarray(d,d+c))},ta:function(a){return S.checkFramebufferStatus(a)},Nb:function(a,b,c,d){S.clearBufferfi(a,b,c,d)},ra:(a,b,c)=>{S.clearBufferfv(a,b,y,c>>2)},Mb:(a,b,c)=>{S.clearBufferiv(a,b,v,c>>2)},o:(a,b,c,d)=>{S.colorMask(!!a,!!b,!!c,!!d)},Sb:a=>{S.compileShader(O[a])},Ca:(a,b,c,d,e,g,f,l)=>{2<=R.version?S.Fc||!f?S.compressedTexImage2D(a,b,c,d,e,g,f,l):S.compressedTexImage2D(a,
b,c,d,e,g,u,l,f):S.compressedTexImage2D(a,b,c,d,e,g,l?u.subarray(l,l+f):null)},$b:(a,b,c,d,e,g,f,l,n)=>{S.Fc?S.compressedTexImage3D(a,b,c,d,e,g,f,l,n):S.compressedTexImage3D(a,b,c,d,e,g,f,u,n,l)},Yb:()=>{var a=Cb(L),b=S.createProgram();b.name=a;b.Mc=b.Kc=b.Lc=0;b.Oc=1;L[a]=b;return a},Ub:a=>{var b=Cb(O);O[b]=S.createShader(a);return b},F:function(a){S.cullFace(a)},Sa:(a,b)=>{for(var c=0;c<a;c++){var d=v[b+4*c>>2],e=vb[d];e&&(S.deleteBuffer(e),e.name=0,vb[d]=null,d==S.Rc&&(S.Rc=0),d==S.Fc&&(S.Fc=0))}},
e:(a,b)=>{for(var c=0;c<a;++c){var d=v[b+4*c>>2],e=wb[d];e&&(S.deleteFramebuffer(e),e.name=0,wb[d]=null)}},z:a=>{if(a){var b=L[a];b?(S.deleteProgram(b),b.name=0,L[a]=null):Q(1281)}},O:(a,b)=>{for(var c=0;c<a;c++){var d=v[b+4*c>>2],e=M[d];e&&(S.deleteRenderbuffer(e),e.name=0,M[d]=null)}},N:(a,b)=>{for(var c=0;c<a;c++){var d=v[b+4*c>>2],e=P[d];e&&(S.deleteSampler(e),e.name=0,P[d]=null)}},E:a=>{if(a){var b=O[a];b?(S.deleteShader(b),O[a]=null):Q(1281)}},P:(a,b)=>{for(var c=0;c<a;c++){var d=v[b+4*c>>2],
e=N[d];e&&(S.deleteTexture(e),e.name=0,N[d]=null)}},Qa:(a,b)=>{for(var c=0;c<a;c++){var d=v[b+4*c>>2];S.deleteVertexArray(xb[d]);xb[d]=null}},y:function(a){S.depthFunc(a)},x:a=>{S.depthMask(!!a)},d:function(a){S.disable(a)},L:a=>{S.disableVertexAttribArray(a)},vb:(a,b,c)=>{S.drawArrays(a,b,c)},wb:(a,b,c,d)=>{S.drawArraysInstanced(a,b,c,d)},sa:(a,b)=>{for(var c=Lb[a],d=0;d<a;d++)c[d]=v[b+4*d>>2];S.drawBuffers(c)},xb:(a,b,c,d)=>{S.drawElements(a,b,c,d)},yb:(a,b,c,d,e)=>{S.drawElementsInstanced(a,b,
c,d,e)},h:function(a){S.enable(a)},Jb:a=>{S.enableVertexAttribArray(a)},ua:(a,b,c,d)=>{S.framebufferRenderbuffer(a,b,c,M[d])},n:(a,b,c,d,e)=>{S.framebufferTexture2D(a,b,c,N[d],e)},D:(a,b,c,d,e)=>{S.framebufferTextureLayer(a,b,N[c],d,e)},G:function(a){S.frontFace(a)},Ja:(a,b)=>{T(a,b,"createBuffer",vb)},va:(a,b)=>{T(a,b,"createFramebuffer",wb)},Ha:(a,b)=>{T(a,b,"createRenderbuffer",M)},Zb:(a,b)=>{T(a,b,"createSampler",P)},Ea:(a,b)=>{T(a,b,"createTexture",N)},Pa:function(a,b){T(a,b,"createVertexArray",
xb)},Qb:(a,b)=>S.getAttribLocation(L[a],b?D(u,b):""),b:(a,b)=>Mb(a,b),Vb:(a,b,c,d)=>{a=S.getProgramInfoLog(L[a]);null===a&&(a="(unknown error)");b=0<b&&d?I(a,d,b):0;c&&(v[c>>2]=b)},ya:(a,b,c)=>{if(c)if(a>=ub)Q(1281);else if(a=L[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),v[c>>2]=a.length+1;else if(35719==b){if(!a.Mc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.Mc=Math.max(a.Mc,S.getActiveUniform(a,b).name.length+1);v[c>>2]=a.Mc}else if(35722==b){if(!a.Kc)for(b=0;b<S.getProgramParameter(a,
35721);++b)a.Kc=Math.max(a.Kc,S.getActiveAttrib(a,b).name.length+1);v[c>>2]=a.Kc}else if(35381==b){if(!a.Lc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.Lc=Math.max(a.Lc,S.getActiveUniformBlockName(a,b).length+1);v[c>>2]=a.Lc}else v[c>>2]=S.getProgramParameter(a,b);else Q(1281)},Rb:(a,b,c,d)=>{a=S.getShaderInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?I(a,d,b):0;c&&(v[c>>2]=b)},wa:(a,b,c)=>{c?35716==b?(a=S.getShaderInfoLog(O[a]),null===a&&(a="(unknown error)"),v[c>>2]=a?a.length+1:0):35720==
b?(a=S.getShaderSource(O[a]),v[c>>2]=a?a.length+1:0):v[c>>2]=S.getShaderParameter(O[a],b):Q(1281)},Ta:(a,b)=>{if(2>R.version)return Q(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=Gb().map(d=>{var e=Nb(d)+1,g=J(e);g&&I(d,g,e);return g}),c=zb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},v:(a,b)=>{b=b?D(u,b):"";if(a=L[a]){var c=a,d=c.Hc,e=c.ed,g;if(!d)for(c.Hc=d={},c.dd={},g=0;g<S.getProgramParameter(c,35718);++g){var f=S.getActiveUniform(c,
g);var l=f.name;f=f.size;var n=Ob(l);n=0<n?l.slice(0,n):l;var p=c.Oc;c.Oc+=f;e[n]=[f,p];for(l=0;l<f;++l)d[p]=l,c.dd[p++]=n}c=a.Hc;d=0;e=b;g=Ob(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.ed[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else Q(1281);return-1},rb:(a,b,c)=>{for(var d=Lb[b],e=0;e<b;e++)d[e]=v[c+4*e>>2];S.invalidateFramebuffer(a,d)},Xb:a=>{a=L[a];S.linkProgram(a);a.Hc=0;a.ed={}},Oa:(a,b)=>{3317==a&&(Ab=b);S.pixelStorei(a,b)},H:function(a,b){S.polygonOffset(a,
b)},tb:function(a){S.readBuffer(a)},Fa:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},Aa:(a,b,c)=>{S.samplerParameterf(P[a],b,c)},f:(a,b,c)=>{S.samplerParameteri(P[a],b,c)},q:function(a,b,c,d){S.scissor(a,b,c,d)},Tb:(a,b,c,d)=>{for(var e="",g=0;g<b;++g){var f=d?v[d+4*g>>2]:-1,l=v[c+4*g>>2];f=l?D(u,l,0>f?void 0:f):"";e+=f}S.shaderSource(O[a],e)},Ma:function(a,b,c){S.stencilFunc(a,b,c)},qa:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},w:function(a){S.stencilMask(a)},La:function(a,
b,c){S.stencilOp(a,b,c)},pa:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},ac:(a,b,c,d,e,g,f,l,n)=>{if(2<=R.version)if(S.Fc)S.texImage2D(a,b,c,d,e,g,f,l,n);else if(n){var p=U(l);S.texImage2D(a,b,c,d,e,g,f,l,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else S.texImage2D(a,b,c,d,e,g,f,l,null);else S.texImage2D(a,b,c,d,e,g,f,l,n?Pb(l,f,d,e,n):null)},_b:(a,b,c,d,e,g,f,l,n,p)=>{if(S.Fc)S.texImage3D(a,b,c,d,e,g,f,l,n,p);else if(p){var r=U(n);S.texImage3D(a,b,c,d,e,g,f,l,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else S.texImage3D(a,
b,c,d,e,g,f,l,n,null)},Da:function(a,b,c){S.texParameteri(a,b,c)},qb:(a,b,c,d,e,g,f,l,n)=>{if(2<=R.version)if(S.Fc)S.texSubImage2D(a,b,c,d,e,g,f,l,n);else if(n){var p=U(l);S.texSubImage2D(a,b,c,d,e,g,f,l,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else S.texSubImage2D(a,b,c,d,e,g,f,l,null);else p=null,n&&(p=Pb(l,f,e,g,n)),S.texSubImage2D(a,b,c,d,e,g,f,l,p)},pb:(a,b,c,d,e,g,f,l,n,p,r)=>{if(S.Fc)S.texSubImage3D(a,b,c,d,e,g,f,l,n,p,r);else if(r){var w=U(p);S.texSubImage3D(a,b,c,d,e,g,f,l,n,p,w,r>>31-Math.clz32(w.BYTES_PER_ELEMENT))}else S.texSubImage3D(a,
b,c,d,e,g,f,l,n,p,null)},Ib:(a,b,c)=>{if(2<=R.version)b&&S.uniform1fv(V(a),y,c>>2,b);else{if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);S.uniform1fv(V(a),d)}},xa:(a,b)=>{S.uniform1i(V(a),b)},Db:(a,b,c)=>{if(2<=R.version)b&&S.uniform1iv(V(a),v,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=v[c+4*e>>2];else d=v.subarray(c>>2,c+4*b>>2);S.uniform1iv(V(a),d)}},Hb:(a,b,c)=>{if(2<=R.version)b&&S.uniform2fv(V(a),y,c>>2,2*b);else{if(144>=b)for(var d=W[2*
b-1],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);S.uniform2fv(V(a),d)}},Cb:(a,b,c)=>{if(2<=R.version)b&&S.uniform2iv(V(a),v,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=v[c+4*e>>2],d[e+1]=v[c+(4*e+4)>>2];else d=v.subarray(c>>2,c+8*b>>2);S.uniform2iv(V(a),d)}},Gb:(a,b,c)=>{if(2<=R.version)b&&S.uniform3fv(V(a),y,c>>2,3*b);else{if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=
y.subarray(c>>2,c+12*b>>2);S.uniform3fv(V(a),d)}},Bb:(a,b,c)=>{if(2<=R.version)b&&S.uniform3iv(V(a),v,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=v[c+4*e>>2],d[e+1]=v[c+(4*e+4)>>2],d[e+2]=v[c+(4*e+8)>>2];else d=v.subarray(c>>2,c+12*b>>2);S.uniform3iv(V(a),d)}},Eb:(a,b,c)=>{if(2<=R.version)b&&S.uniform4fv(V(a),y,c>>2,4*b);else{if(72>=b){var d=W[4*b-1],e=y;c>>=2;for(var g=0;g<4*b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=y.subarray(c>>2,c+16*b>>2);
S.uniform4fv(V(a),d)}},Ab:(a,b,c)=>{if(2<=R.version)b&&S.uniform4iv(V(a),v,c>>2,4*b);else{if(72>=b)for(var d=X[4*b-1],e=0;e<4*b;e+=4)d[e]=v[c+4*e>>2],d[e+1]=v[c+(4*e+4)>>2],d[e+2]=v[c+(4*e+8)>>2],d[e+3]=v[c+(4*e+12)>>2];else d=v.subarray(c>>2,c+16*b>>2);S.uniform4iv(V(a),d)}},zb:(a,b,c,d)=>{if(2<=R.version)b&&S.uniformMatrix4fv(V(a),!!c,y,d>>2,16*b);else{if(18>=b){var e=W[16*b-1],g=y;d>>=2;for(var f=0;f<16*b;f+=16){var l=d+f;e[f]=g[l];e[f+1]=g[l+1];e[f+2]=g[l+2];e[f+3]=g[l+3];e[f+4]=g[l+4];e[f+5]=
g[l+5];e[f+6]=g[l+6];e[f+7]=g[l+7];e[f+8]=g[l+8];e[f+9]=g[l+9];e[f+10]=g[l+10];e[f+11]=g[l+11];e[f+12]=g[l+12];e[f+13]=g[l+13];e[f+14]=g[l+14];e[f+15]=g[l+15]}}else e=y.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(V(a),!!c,e)}},p:a=>{a=L[a];S.useProgram(a);S.gd=a},Kb:(a,b)=>{S.vertexAttribDivisor(a,b)},Lb:(a,b,c,d,e,g)=>{S.vertexAttribPointer(a,b,c,!!d,e,g)},k:function(a,b,c,d){S.viewport(a,b,c,d)},Ra:function(){h.Xc=a=>{0!=Xb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
h.Xc)},Ka:function(){h.cd=a=>{const b=a.clipboardData.getData("text");Na(()=>{const c=Sb(b);Yb(c)})};window.addEventListener("paste",h.cd)},Pb:function(a){h.ud=[];a=a?D(u,a):"";a=document.getElementById(a);h.Yc=b=>{b.stopPropagation();b.preventDefault()};h.Zc=b=>{b.stopPropagation();b.preventDefault()};h.$c=b=>{b.stopPropagation();b.preventDefault()};h.ad=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;h.bd=c;Zb(c.length);for(let e=0;e<c.length;e++)Na(()=>{const g=Sb(c[e].name);
$b(e,g)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);ac(b.clientX,b.clientY,d)};a.addEventListener("dragenter",h.Yc,!1);a.addEventListener("dragleave",h.Zc,!1);a.addEventListener("dragover",h.$c,!1);a.addEventListener("drop",h.ad,!1)},fb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},u:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",
function(){bc()});document.body.append(a)},Ob:function(a){const b=h.bd;return 0>a||a>=b.length?0:b[a].size},Fb:function(a,b,c,d,e){const g=new FileReader;g.onload=f=>{f=f.target.result;f.byteLength>d?cc(a,0,1,b,0,c,d,e):(u.set(new Uint8Array(f),c),cc(a,1,0,b,f.byteLength,c,d,e))};g.onerror=()=>{cc(a,0,2,b,0,c,d,e)};g.readAsArrayBuffer(h.bd[a])},t:function(){document.getElementById("_sokol_app_input_element").focus()},kb:function(a){a=a?D(u,a):"";h.Gc=document.getElementById(a);h.Gc||console.log("sokol_app.h: invalid target:"+
a);h.Gc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Na:function(){window.removeEventListener("beforeunload",h.Xc)},bc:function(){window.removeEventListener("paste",h.cd)},ub:function(a){a=a?D(u,a):"";a=document.getElementById(a);a.removeEventListener("dragenter",h.Yc);a.removeEventListener("dragleave",h.Zc);a.removeEventListener("dragover",h.$c);a.removeEventListener("drop",h.ad)},C:function(){h.Gc&&h.Gc.requestPointerLock&&h.Gc.requestPointerLock()},
gb:function(a,b){if(h.Gc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}h.Gc.style.cursor=a}},db:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),g=e.createImageData(a,
b);g.data.set(u.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Wb:function(a){a=a?D(u,a):"";const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";
b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},_a:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];Na(()=>{const e=Sb(c),g=Sb(d);dc(e,g)})}},ab:function(){return h.Ec?h.Ec.bufferSize:0},cb:function(a,b,c){h.zc=null;h.Ec=null;"undefined"!==typeof AudioContext?h.zc=new AudioContext({sampleRate:a,
latencyHint:"interactive"}):(h.zc=null,console.log("sokol_audio.h: no WebAudio support"));return h.zc?(console.log("sokol_audio.h: sample rate ",h.zc.sampleRate),h.Ec=h.zc.createScriptProcessor(c,0,b),h.Ec.onaudioprocess=d=>{const e=d.outputBuffer.length,g=ec(e);if(g){const f=d.outputBuffer.numberOfChannels;for(let l=0;l<f;l++){const n=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)n[p]=y[(g>>2)+(f*p+l)]}}},h.Ec.connect(h.zc.destination),a=()=>{h.zc&&"suspended"===h.zc.state&&h.zc.resume()},
document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},bb:function(){return h.zc?h.zc.sampleRate:0},ma:function(){const a=h.zc;null!==a&&(h.Ec&&h.Ec.disconnect(),a.close(),h.zc=null,h.Ec=null)},$a:function(){if(h.zc)return"suspended"===h.zc.state?1:0},A:function(a,b,c,d,e,g){b=b?D(u,b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range",
"bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const n=new Uint8Array(f.response),p=n.length;p<=g?(u.set(n,e),fc(a,d,p)):gc(a)}else hc(a,f.status)};f.send()},la:function(a,b){b=b?D(u,b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");ic(a,d)}else hc(a,c.status)};c.send()},Ba:function(){return navigator.userAgent.includes("Macintosh")?
1:0},ka:function(a,b){b=b?D(u,b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z=function(){function a(c){Z=c.exports;pa=Z.cc;ua();fb=Z.vc;wa.unshift(Z.dc);A--;h.monitorRunDependencies&&h.monitorRunDependencies(A);0==A&&(null!==Ba&&(clearInterval(Ba),Ba=null),B&&(c=B,B=null,c()));return Z}var b={a:jc};A++;h.monitorRunDependencies&&h.monitorRunDependencies(A);if(h.instantiateWasm)try{return h.instantiateWasm(b,a)}catch(c){return q(`Module.instantiateWasm callback failed with error: ${c}`),
!1}Ha(b,function(c){a(c.instance)});return{}}(),J=a=>(J=Z.ec)(a),Vb=h._fs_emsc_alloc=a=>(Vb=h._fs_emsc_alloc=Z.fc)(a),Wb=h._fs_emsc_load_snapshot_callback=(a,b,c)=>(Wb=h._fs_emsc_load_snapshot_callback=Z.gc)(a,b,c),bc=h.__sapp_emsc_notify_keyboard_hidden=()=>(bc=h.__sapp_emsc_notify_keyboard_hidden=Z.hc)(),Yb=h.__sapp_emsc_onpaste=a=>(Yb=h.__sapp_emsc_onpaste=Z.ic)(a),Xb=h.__sapp_html5_get_ask_leave_site=()=>(Xb=h.__sapp_html5_get_ask_leave_site=Z.jc)(),Zb=h.__sapp_emsc_begin_drop=a=>(Zb=h.__sapp_emsc_begin_drop=
Z.kc)(a),$b=h.__sapp_emsc_drop=(a,b)=>($b=h.__sapp_emsc_drop=Z.lc)(a,b),ac=h.__sapp_emsc_end_drop=(a,b,c)=>(ac=h.__sapp_emsc_end_drop=Z.mc)(a,b,c),cc=h.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,g,f,l)=>(cc=h.__sapp_emsc_invoke_fetch_cb=Z.nc)(a,b,c,d,e,g,f,l),kc=h._main=(a,b)=>(kc=h._main=Z.oc)(a,b),ec=h.__saudio_emsc_pull=a=>(ec=h.__saudio_emsc_pull=Z.pc)(a),dc=h.__sargs_add_kvp=(a,b)=>(dc=h.__sargs_add_kvp=Z.qc)(a,b),ic=h.__sfetch_emsc_head_response=(a,b)=>(ic=h.__sfetch_emsc_head_response=Z.rc)(a,
b),fc=h.__sfetch_emsc_get_response=(a,b,c)=>(fc=h.__sfetch_emsc_get_response=Z.sc)(a,b,c),hc=h.__sfetch_emsc_failed_http_status=(a,b)=>(hc=h.__sfetch_emsc_failed_http_status=Z.tc)(a,b),gc=h.__sfetch_emsc_failed_buffer_too_small=a=>(gc=h.__sfetch_emsc_failed_buffer_too_small=Z.uc)(a),La=()=>(La=Z.wc)(),Ma=a=>(Ma=Z.xc)(a),Rb=a=>(Rb=Z.yc)(a);h.___start_em_js=84980;h.___stop_em_js=98124;var lc;B=function mc(){lc||nc();lc||(B=mc)};
function oc(a=[]){var b=kc;a.unshift(ca);var c=a.length,d=Rb(4*(c+1)),e=d;a.forEach(f=>{x[e>>2]=Sb(f);e+=4});x[e>>2]=0;try{var g=b(c,d);Qb(g)}catch(f){f instanceof ma||"unwind"==f||da(1,f)}}
function nc(){var a=ba;function b(){if(!lc&&(lc=!0,h.calledRun=!0,!qa)){Ia(wa);Ia(xa);if(h.onRuntimeInitialized)h.onRuntimeInitialized();pc&&oc(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();za.unshift(c)}Ia(za)}}if(!(0<A)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Aa();Ia(va);0<A||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},
1)):b())}}if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var pc=!0;h.noInitialRun&&(pc=!1);nc();
