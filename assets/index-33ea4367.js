function Cu(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(i,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="151",Wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,wo=1,Pu=2,ac=1,Du=2,Or=3,gi=0,cn=1,ri=2,mi=0,ur=1,Eo=2,Ao=3,Co=4,Ru=5,lr=100,Iu=101,Nu=102,Lo=103,Po=104,Uu=200,Ou=201,Fu=202,zu=203,oc=204,lc=205,ku=206,Bu=207,Hu=208,Gu=209,Vu=210,Wu=0,qu=1,ju=2,za=3,Xu=4,$u=5,Yu=6,Ku=7,cc=0,Zu=1,Ju=2,oi=0,Qu=1,ef=2,tf=3,nf=4,rf=5,uc=300,hr=301,pr=302,ka=303,Ba=304,Is=306,Ha=1e3,Bn=1001,Ga=1002,nn=1003,Do=1004,Qs=1005,Ln=1006,sf=1007,zr=1008,Ui=1009,af=1010,of=1011,fc=1012,lf=1013,Ri=1014,Ii=1015,kr=1016,cf=1017,uf=1018,fr=1020,ff=1021,Hn=1023,df=1024,hf=1025,Ni=1026,mr=1027,pf=1028,mf=1029,gf=1030,vf=1031,_f=1033,ea=33776,ta=33777,na=33778,ia=33779,Ro=35840,Io=35841,No=35842,Uo=35843,xf=36196,Oo=37492,Fo=37496,zo=37808,ko=37809,Bo=37810,Ho=37811,Go=37812,Vo=37813,Wo=37814,qo=37815,jo=37816,Xo=37817,$o=37818,Yo=37819,Ko=37820,Zo=37821,ra=36492,yf=36283,Jo=36284,Qo=36285,el=36286,Oi=3e3,Lt=3001,Sf=3200,Mf=3201,bf=0,Tf=1,Wn="srgb",Br="srgb-linear",dc="display-p3",sa=7680,wf=519,tl=35044,nl="300 es",Va=1035;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],aa=Math.PI/180,Wa=180/Math.PI;function Hr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function Ef(i,e){return(i%e+e)%e}function oa(i,e,t){return(1-t)*i+t*e}function il(i){return(i&i-1)===0&&i!==0}function Af(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function es(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*r+e.x,this.y=s*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,c,o,d,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=o,g[3]=t,g[4]=s,g[5]=d,g[6]=n,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],o=n[3],d=n[6],p=n[1],g=n[4],v=n[7],_=n[2],x=n[5],S=n[8],b=r[0],y=r[3],f=r[6],A=r[1],C=r[4],E=r[7],D=r[2],u=r[5],q=r[8];return s[0]=c*b+o*A+d*D,s[3]=c*y+o*C+d*u,s[6]=c*f+o*E+d*q,s[1]=p*b+g*A+v*D,s[4]=p*y+g*C+v*u,s[7]=p*f+g*E+v*q,s[2]=_*b+x*A+S*D,s[5]=_*y+x*C+S*u,s[8]=_*f+x*E+S*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],d=e[6],p=e[7],g=e[8];return t*c*g-t*o*p-n*s*g+n*o*d+r*s*p-r*c*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],d=e[6],p=e[7],g=e[8],v=g*c-o*p,_=o*d-g*s,x=p*s-c*d,S=t*v+n*_+r*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=v*b,e[1]=(r*p-g*n)*b,e[2]=(o*n-r*c)*b,e[3]=_*b,e[4]=(g*t-r*d)*b,e[5]=(r*s-o*t)*b,e[6]=x*b,e[7]=(n*d-p*t)*b,e[8]=(c*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,c,o){const d=Math.cos(s),p=Math.sin(s);return this.set(n*d,n*p,-n*(d*c+p*o)+c+e,-r*p,r*d,-r*(-p*c+d*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new pt;function hc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Cf=new pt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Lf=new pt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Pf(i){return i.convertSRGBToLinear().applyMatrix3(Lf)}function Df(i){return i.applyMatrix3(Cf).convertLinearToSRGB()}const Rf={[Br]:i=>i,[Wn]:i=>i.convertSRGBToLinear(),[dc]:Pf},If={[Br]:i=>i,[Wn]:i=>i.convertLinearToSRGB(),[dc]:Df},vn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Br},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Rf[e],r=If[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ji;class pc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=Ls("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=dr(s[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class mc{constructor(e=null){this.isSource=!0,this.uuid=Hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,o=r.length;c<o;c++)r[c].isDataTexture?s.push(ua(r[c].image)):s.push(ua(r[c]))}else s=ua(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nf=0;class Mn extends Bi{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=Bn,r=Bn,s=Ln,c=zr,o=Hn,d=Ui,p=Mn.DEFAULT_ANISOTROPY,g=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Hr(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=p,this.format=o,this.internalFormat=null,this.type=d,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=uc;Mn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const d=e.elements,p=d[0],g=d[4],v=d[8],_=d[1],x=d[5],S=d[9],b=d[2],y=d[6],f=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(S-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(S+y)<.1&&Math.abs(p+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(p+1)/2,E=(x+1)/2,D=(f+1)/2,u=(g+_)/4,q=(v+b)/4,V=(S+y)/4;return C>E&&C>D?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=u/n,s=q/n):E>D?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=u/r,s=V/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=q/s,r=V/s),this.set(n,r,s,t),this}let A=Math.sqrt((y-S)*(y-S)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(A)<.001&&(A=1),this.x=(y-S)/A,this.y=(v-b)/A,this.z=(_-g)/A,this.w=Math.acos((p+x+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fi extends Bi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gc extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uf extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,c,o){let d=n[r+0],p=n[r+1],g=n[r+2],v=n[r+3];const _=s[c+0],x=s[c+1],S=s[c+2],b=s[c+3];if(o===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(o===1){e[t+0]=_,e[t+1]=x,e[t+2]=S,e[t+3]=b;return}if(v!==b||d!==_||p!==x||g!==S){let y=1-o;const f=d*_+p*x+g*S+v*b,A=f>=0?1:-1,C=1-f*f;if(C>Number.EPSILON){const D=Math.sqrt(C),u=Math.atan2(D,f*A);y=Math.sin(y*u)/D,o=Math.sin(o*u)/D}const E=o*A;if(d=d*y+_*E,p=p*y+x*E,g=g*y+S*E,v=v*y+b*E,y===1-o){const D=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=D,p*=D,g*=D,v*=D}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,s,c){const o=n[r],d=n[r+1],p=n[r+2],g=n[r+3],v=s[c],_=s[c+1],x=s[c+2],S=s[c+3];return e[t]=o*S+g*v+d*x-p*_,e[t+1]=d*S+g*_+p*v-o*x,e[t+2]=p*S+g*x+o*_-d*v,e[t+3]=g*S-o*v-d*_-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,c=e._order,o=Math.cos,d=Math.sin,p=o(n/2),g=o(r/2),v=o(s/2),_=d(n/2),x=d(r/2),S=d(s/2);switch(c){case"XYZ":this._x=_*g*v+p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v-_*x*S;break;case"YXZ":this._x=_*g*v+p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v+_*x*S;break;case"ZXY":this._x=_*g*v-p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v-_*x*S;break;case"ZYX":this._x=_*g*v-p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v+_*x*S;break;case"YZX":this._x=_*g*v+p*x*S,this._y=p*x*v+_*g*S,this._z=p*g*S-_*x*v,this._w=p*g*v-_*x*S;break;case"XZY":this._x=_*g*v-p*x*S,this._y=p*x*v-_*g*S,this._z=p*g*S+_*x*v,this._w=p*g*v+_*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],c=t[1],o=t[5],d=t[9],p=t[2],g=t[6],v=t[10],_=n+o+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-d)*x,this._y=(s-p)*x,this._z=(c-r)*x}else if(n>o&&n>v){const x=2*Math.sqrt(1+n-o-v);this._w=(g-d)/x,this._x=.25*x,this._y=(r+c)/x,this._z=(s+p)/x}else if(o>v){const x=2*Math.sqrt(1+o-n-v);this._w=(s-p)/x,this._x=(r+c)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+v-n-o);this._w=(c-r)/x,this._x=(s+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,c=e._w,o=t._x,d=t._y,p=t._z,g=t._w;return this._x=n*g+c*o+r*p-s*d,this._y=r*g+c*d+s*o-n*p,this._z=s*g+c*p+n*d-r*o,this._w=c*g-n*o-r*d-s*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,c=this._w;let o=c*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const d=1-o*o;if(d<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*n+t*this._x,this._y=x*r+t*this._y,this._z=x*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(d),g=Math.atan2(p,o),v=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=c*v+this._w*_,this._x=n*v+this._x*_,this._y=r*v+this._y*_,this._z=s*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,c=e.y,o=e.z,d=e.w,p=d*t+c*r-o*n,g=d*n+o*t-s*r,v=d*r+s*n-c*t,_=-s*t-c*n-o*r;return this.x=p*d+_*-s+g*-o-v*-c,this.y=g*d+_*-c+v*-s-p*-o,this.z=v*d+_*-o+p*-c-g*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,c=t.x,o=t.y,d=t.z;return this.x=r*d-s*o,this.y=s*c-n*d,this.z=n*o-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new X,rl=new zi;class Gr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xi.copy(e.boundingBox),Xi.applyMatrix4(e.matrixWorld),this.union(Xi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let c=0,o=s.count;c<o;c++)Qn.fromBufferAttribute(s,c).applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else r.boundingBox===null&&r.computeBoundingBox(),Xi.copy(r.boundingBox),Xi.applyMatrix4(e.matrixWorld),this.union(Xi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),ts.subVectors(this.max,Lr),$i.subVectors(e.a,Lr),Yi.subVectors(e.b,Lr),Ki.subVectors(e.c,Lr),ui.subVectors(Yi,$i),fi.subVectors(Ki,Yi),wi.subVectors($i,Ki);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-wi.z,wi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,wi.z,0,-wi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-wi.y,wi.x,0];return!da(t,$i,Yi,Ki,ts)||(t=[1,0,0,0,1,0,0,0,1],!da(t,$i,Yi,Ki,ts))?!1:(ns.crossVectors(ui,fi),t=[ns.x,ns.y,ns.z],da(t,$i,Yi,Ki,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new X,new X,new X,new X,new X,new X,new X,new X],Qn=new X,Xi=new Gr,$i=new X,Yi=new X,Ki=new X,ui=new X,fi=new X,wi=new X,Lr=new X,ts=new X,ns=new X,Ei=new X;function da(i,e,t,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){Ei.fromArray(i,s);const o=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),d=e.dot(Ei),p=t.dot(Ei),g=n.dot(Ei);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>o)return!1}return!0}const Of=new Gr,Pr=new X,ha=new X;class Vr{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Of.setFromPoints(e).getCenter(n);let r=0;for(let s=0,c=e.length;s<c;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(ha)),this.expandByPoint(Pr.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new X,pa=new X,is=new X,di=new X,ma=new X,rs=new X,ga=new X;class Za{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pa.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),di.copy(this.origin).sub(pa);const s=e.distanceTo(t)*.5,c=-this.direction.dot(is),o=di.dot(this.direction),d=-di.dot(is),p=di.lengthSq(),g=Math.abs(1-c*c);let v,_,x,S;if(g>0)if(v=c*d-o,_=c*o-d,S=s*g,v>=0)if(_>=-S)if(_<=S){const b=1/g;v*=b,_*=b,x=v*(v+c*_+2*o)+_*(c*v+_+2*d)+p}else _=s,v=Math.max(0,-(c*_+o)),x=-v*v+_*(_+2*d)+p;else _=-s,v=Math.max(0,-(c*_+o)),x=-v*v+_*(_+2*d)+p;else _<=-S?(v=Math.max(0,-(-c*s+o)),_=v>0?-s:Math.min(Math.max(-s,-d),s),x=-v*v+_*(_+2*d)+p):_<=S?(v=0,_=Math.min(Math.max(-s,-d),s),x=_*(_+2*d)+p):(v=Math.max(0,-(c*s+o)),_=v>0?s:Math.min(Math.max(-s,-d),s),x=-v*v+_*(_+2*d)+p);else _=c>0?-s:s,v=Math.max(0,-(c*_+o)),x=-v*v+_*(_+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(pa).addScaledVector(is,_),x}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=e.radius*e.radius;if(r>s)return null;const c=Math.sqrt(s-r),o=n-c,d=n+c;return d<0?null:o<0?this.at(d,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,c,o,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(n=(e.min.x-_.x)*p,r=(e.max.x-_.x)*p):(n=(e.max.x-_.x)*p,r=(e.min.x-_.x)*p),g>=0?(s=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(s=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),v>=0?(o=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(o=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),n>d||o>r)||((o>n||n!==n)&&(n=o),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,s){ma.subVectors(t,e),rs.subVectors(n,e),ga.crossVectors(ma,rs);let c=this.direction.dot(ga),o;if(c>0){if(r)return null;o=1}else if(c<0)o=-1,c=-c;else return null;di.subVectors(this.origin,e);const d=o*this.direction.dot(rs.crossVectors(di,rs));if(d<0)return null;const p=o*this.direction.dot(ma.cross(di));if(p<0||d+p>c)return null;const g=-o*di.dot(ga);return g<0?null:this.at(g/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,c,o,d,p,g,v,_,x,S,b,y){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=c,f[9]=o,f[13]=d,f[2]=p,f[6]=g,f[10]=v,f[14]=_,f[3]=x,f[7]=S,f[11]=b,f[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),c=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,c=Math.cos(n),o=Math.sin(n),d=Math.cos(r),p=Math.sin(r),g=Math.cos(s),v=Math.sin(s);if(e.order==="XYZ"){const _=c*g,x=c*v,S=o*g,b=o*v;t[0]=d*g,t[4]=-d*v,t[8]=p,t[1]=x+S*p,t[5]=_-b*p,t[9]=-o*d,t[2]=b-_*p,t[6]=S+x*p,t[10]=c*d}else if(e.order==="YXZ"){const _=d*g,x=d*v,S=p*g,b=p*v;t[0]=_+b*o,t[4]=S*o-x,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-o,t[2]=x*o-S,t[6]=b+_*o,t[10]=c*d}else if(e.order==="ZXY"){const _=d*g,x=d*v,S=p*g,b=p*v;t[0]=_-b*o,t[4]=-c*v,t[8]=S+x*o,t[1]=x+S*o,t[5]=c*g,t[9]=b-_*o,t[2]=-c*p,t[6]=o,t[10]=c*d}else if(e.order==="ZYX"){const _=c*g,x=c*v,S=o*g,b=o*v;t[0]=d*g,t[4]=S*p-x,t[8]=_*p+b,t[1]=d*v,t[5]=b*p+_,t[9]=x*p-S,t[2]=-p,t[6]=o*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,x=c*p,S=o*d,b=o*p;t[0]=d*g,t[4]=b-_*v,t[8]=S*v+x,t[1]=v,t[5]=c*g,t[9]=-o*g,t[2]=-p*g,t[6]=x*v+S,t[10]=_-b*v}else if(e.order==="XZY"){const _=c*d,x=c*p,S=o*d,b=o*p;t[0]=d*g,t[4]=-v,t[8]=p*g,t[1]=_*v+b,t[5]=c*g,t[9]=x*v-S,t[2]=S*v-x,t[6]=o*g,t[10]=b*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,zf)}lookAt(e,t,n){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),hi.crossVectors(n,_n),hi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),hi.crossVectors(n,_n)),hi.normalize(),ss.crossVectors(_n,hi),r[0]=hi.x,r[4]=ss.x,r[8]=_n.x,r[1]=hi.y,r[5]=ss.y,r[9]=_n.y,r[2]=hi.z,r[6]=ss.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],o=n[4],d=n[8],p=n[12],g=n[1],v=n[5],_=n[9],x=n[13],S=n[2],b=n[6],y=n[10],f=n[14],A=n[3],C=n[7],E=n[11],D=n[15],u=r[0],q=r[4],V=r[8],P=r[12],U=r[1],Z=r[5],W=r[9],B=r[13],Y=r[2],re=r[6],ue=r[10],ge=r[14],le=r[3],be=r[7],ye=r[11],He=r[15];return s[0]=c*u+o*U+d*Y+p*le,s[4]=c*q+o*Z+d*re+p*be,s[8]=c*V+o*W+d*ue+p*ye,s[12]=c*P+o*B+d*ge+p*He,s[1]=g*u+v*U+_*Y+x*le,s[5]=g*q+v*Z+_*re+x*be,s[9]=g*V+v*W+_*ue+x*ye,s[13]=g*P+v*B+_*ge+x*He,s[2]=S*u+b*U+y*Y+f*le,s[6]=S*q+b*Z+y*re+f*be,s[10]=S*V+b*W+y*ue+f*ye,s[14]=S*P+b*B+y*ge+f*He,s[3]=A*u+C*U+E*Y+D*le,s[7]=A*q+C*Z+E*re+D*be,s[11]=A*V+C*W+E*ue+D*ye,s[15]=A*P+C*B+E*ge+D*He,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],c=e[1],o=e[5],d=e[9],p=e[13],g=e[2],v=e[6],_=e[10],x=e[14],S=e[3],b=e[7],y=e[11],f=e[15];return S*(+s*d*v-r*p*v-s*o*_+n*p*_+r*o*x-n*d*x)+b*(+t*d*x-t*p*_+s*c*_-r*c*x+r*p*g-s*d*g)+y*(+t*p*v-t*o*x-s*c*v+n*c*x+s*o*g-n*p*g)+f*(-r*o*g-t*d*v+t*o*_+r*c*v-n*c*_+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],d=e[6],p=e[7],g=e[8],v=e[9],_=e[10],x=e[11],S=e[12],b=e[13],y=e[14],f=e[15],A=v*y*p-b*_*p+b*d*x-o*y*x-v*d*f+o*_*f,C=S*_*p-g*y*p-S*d*x+c*y*x+g*d*f-c*_*f,E=g*b*p-S*v*p+S*o*x-c*b*x-g*o*f+c*v*f,D=S*v*d-g*b*d-S*o*_+c*b*_+g*o*y-c*v*y,u=t*A+n*C+r*E+s*D;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/u;return e[0]=A*q,e[1]=(b*_*s-v*y*s-b*r*x+n*y*x+v*r*f-n*_*f)*q,e[2]=(o*y*s-b*d*s+b*r*p-n*y*p-o*r*f+n*d*f)*q,e[3]=(v*d*s-o*_*s-v*r*p+n*_*p+o*r*x-n*d*x)*q,e[4]=C*q,e[5]=(g*y*s-S*_*s+S*r*x-t*y*x-g*r*f+t*_*f)*q,e[6]=(S*d*s-c*y*s-S*r*p+t*y*p+c*r*f-t*d*f)*q,e[7]=(c*_*s-g*d*s+g*r*p-t*_*p-c*r*x+t*d*x)*q,e[8]=E*q,e[9]=(S*v*s-g*b*s-S*n*x+t*b*x+g*n*f-t*v*f)*q,e[10]=(c*b*s-S*o*s+S*n*p-t*b*p-c*n*f+t*o*f)*q,e[11]=(g*o*s-c*v*s-g*n*p+t*v*p+c*n*x-t*o*x)*q,e[12]=D*q,e[13]=(g*b*r-S*v*r+S*n*_-t*b*_-g*n*y+t*v*y)*q,e[14]=(S*o*r-c*b*r-S*n*d+t*b*d+c*n*y-t*o*y)*q,e[15]=(c*v*r-g*o*r+g*n*d-t*v*d-c*n*_+t*o*_)*q,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,c=e.x,o=e.y,d=e.z,p=s*c,g=s*o;return this.set(p*c+n,p*o-r*d,p*d+r*o,0,p*o+r*d,g*o+n,g*d-r*c,0,p*d-r*o,g*d+r*c,s*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,c){return this.set(1,n,s,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,c=t._y,o=t._z,d=t._w,p=s+s,g=c+c,v=o+o,_=s*p,x=s*g,S=s*v,b=c*g,y=c*v,f=o*v,A=d*p,C=d*g,E=d*v,D=n.x,u=n.y,q=n.z;return r[0]=(1-(b+f))*D,r[1]=(x+E)*D,r[2]=(S-C)*D,r[3]=0,r[4]=(x-E)*u,r[5]=(1-(_+f))*u,r[6]=(y+A)*u,r[7]=0,r[8]=(S+C)*q,r[9]=(y-A)*q,r[10]=(1-(_+b))*q,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const c=Zi.set(r[4],r[5],r[6]).length(),o=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const p=1/s,g=1/c,v=1/o;return On.elements[0]*=p,On.elements[1]*=p,On.elements[2]*=p,On.elements[4]*=g,On.elements[5]*=g,On.elements[6]*=g,On.elements[8]*=v,On.elements[9]*=v,On.elements[10]*=v,t.setFromRotationMatrix(On),n.x=s,n.y=c,n.z=o,this}makePerspective(e,t,n,r,s,c){const o=this.elements,d=2*s/(t-e),p=2*s/(n-r),g=(t+e)/(t-e),v=(n+r)/(n-r),_=-(c+s)/(c-s),x=-2*c*s/(c-s);return o[0]=d,o[4]=0,o[8]=g,o[12]=0,o[1]=0,o[5]=p,o[9]=v,o[13]=0,o[2]=0,o[6]=0,o[10]=_,o[14]=x,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,c){const o=this.elements,d=1/(t-e),p=1/(n-r),g=1/(c-s),v=(t+e)*d,_=(n+r)*p,x=(c+s)*g;return o[0]=2*d,o[4]=0,o[8]=0,o[12]=-v,o[1]=0,o[5]=2*p,o[9]=0,o[13]=-_,o[2]=0,o[6]=0,o[10]=-2*g,o[14]=-x,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new X,On=new Ot,Ff=new X(0,0,0),zf=new X(1,1,1),hi=new X,ss=new X,_n=new X,sl=new Ot,al=new zi;class Ns{constructor(e=0,t=0,n=0,r=Ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],c=r[4],o=r[8],d=r[1],p=r[5],g=r[9],v=r[2],_=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-rn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ns.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kf=0;const ol=new X,Ji=new zi,ti=new Ot,as=new X,Dr=new X,Bf=new X,Hf=new zi,ll=new X(1,0,0),cl=new X(0,1,0),ul=new X(0,0,1),Gf={type:"added"},fl={type:"removed"};class en extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new X,t=new Ns,n=new zi,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new pt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Dr,as,this.up):ti.lookAt(as,Dr,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(ti),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const c=this.children[r].getObjectsByProperty(e,t);c.length>0&&(n=n.concat(c))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,Bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,d){return o[d.uuid]===void 0&&(o[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const d=o.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];s(e.shapes,v)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let d=0,p=this.material.length;d<p;d++)o.push(s(e.materials,this.material[d]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const d=this.animations[o];r.animations.push(s(e.animations,d))}}if(t){const o=c(e.geometries),d=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),_=c(e.skeletons),x=c(e.animations),S=c(e.nodes);o.length>0&&(n.geometries=o),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),_.length>0&&(n.skeletons=_),x.length>0&&(n.animations=x),S.length>0&&(n.nodes=S)}return n.object=r,n;function c(o){const d=[];for(const p in o){const g=o[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}en.DEFAULT_UP=new X(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new X,ni=new X,va=new X,ii=new X,Qi=new X,er=new X,dl=new X,_a=new X,xa=new X,ya=new X;let os=!1;class kn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Fn.subVectors(r,t),ni.subVectors(n,t),va.subVectors(e,t);const c=Fn.dot(Fn),o=Fn.dot(ni),d=Fn.dot(va),p=ni.dot(ni),g=ni.dot(va),v=c*p-o*o;if(v===0)return s.set(-2,-1,-1);const _=1/v,x=(p*d-o*g)*_,S=(c*g-o*d)*_;return s.set(1-x-S,S,x)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ii),ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,t,n,r,s,c,o,d){return os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),os=!0),this.getInterpolation(e,t,n,r,s,c,o,d)}static getInterpolation(e,t,n,r,s,c,o,d){return this.getBarycoord(e,t,n,r,ii),d.setScalar(0),d.addScaledVector(s,ii.x),d.addScaledVector(c,ii.y),d.addScaledVector(o,ii.z),d}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),ni.subVectors(e,t),Fn.cross(ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Fn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),os=!0),kn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let c,o;Qi.subVectors(r,n),er.subVectors(s,n),_a.subVectors(e,n);const d=Qi.dot(_a),p=er.dot(_a);if(d<=0&&p<=0)return t.copy(n);xa.subVectors(e,r);const g=Qi.dot(xa),v=er.dot(xa);if(g>=0&&v<=g)return t.copy(r);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(n).addScaledVector(Qi,c);ya.subVectors(e,s);const x=Qi.dot(ya),S=er.dot(ya);if(S>=0&&x<=S)return t.copy(s);const b=x*p-d*S;if(b<=0&&p>=0&&S<=0)return o=p/(p-S),t.copy(n).addScaledVector(er,o);const y=g*S-x*v;if(y<=0&&v-g>=0&&x-S>=0)return dl.subVectors(s,r),o=(v-g)/(v-g+(x-S)),t.copy(r).addScaledVector(dl,o);const f=1/(y+b+_);return c=b*f,o=_*f,t.copy(n).addScaledVector(Qi,c).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vf=0;class vr extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=ur,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oc,this.blendDst=lc,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const o in s){const d=s[o];delete d.metadata,c.push(d)}return c}if(t){const s=r(e.textures),c=r(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=vn.workingColorSpace){return this.r=e,this.g=t,this.b=n,vn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=vn.workingColorSpace){if(e=Ef(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=Sa(c,s,e+1/3),this.g=Sa(c,s,e),this.b=Sa(c,s,e-1/3)}return vn.toWorkingColorSpace(this,r),this}setStyle(e,t=Wn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=r[1],o=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,vn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,vn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const d=parseFloat(s[1])/360,p=parseFloat(s[2])/100,g=parseFloat(s[3])/100;return n(s[4]),this.setHSL(d,p,g,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const n=_c[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return vn.fromWorkingColorSpace(Qt.copy(this),e),rn(Qt.r*255,0,255)<<16^rn(Qt.g*255,0,255)<<8^rn(Qt.b*255,0,255)<<0}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vn.workingColorSpace){vn.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,s=Qt.b,c=Math.max(n,r,s),o=Math.min(n,r,s);let d,p;const g=(o+c)/2;if(o===c)d=0,p=0;else{const v=c-o;switch(p=g<=.5?v/(c+o):v/(2-c-o),c){case n:d=(r-s)/v+(r<s?6:0);break;case r:d=(s-n)/v+2;break;case s:d=(n-r)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=vn.workingColorSpace){return vn.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Wn){vn.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(zn),zn.h+=e,zn.s+=t,zn.l+=n,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(ls);const n=oa(zn.h,ls.h,t),r=oa(zn.s,ls.s,t),s=oa(zn.l,ls.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new yt;yt.NAMES=_c;class Ja extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new X,cs=new ft;class Xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xc extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yc extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wf=0;const An=new Ot,Ma=new en,tr=new X,xn=new Gr,Rr=new Gr,Yt=new X;class Dn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hc(e)?yc:xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const o=t[s];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(xn.min,Rr.min),xn.expandByPoint(Yt),Yt.addVectors(xn.max,Rr.max),xn.expandByPoint(Yt)):(xn.expandByPoint(Rr.min),xn.expandByPoint(Rr.max))}xn.getCenter(n);let r=0;for(let s=0,c=e.count;s<c;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let s=0,c=t.length;s<c;s++){const o=t[s],d=this.morphTargetsRelative;for(let p=0,g=o.count;p<g;p++)Yt.fromBufferAttribute(o,p),d&&(tr.fromBufferAttribute(e,p),Yt.add(tr)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,c=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*o),4));const d=this.getAttribute("tangent").array,p=[],g=[];for(let U=0;U<o;U++)p[U]=new X,g[U]=new X;const v=new X,_=new X,x=new X,S=new ft,b=new ft,y=new ft,f=new X,A=new X;function C(U,Z,W){v.fromArray(r,U*3),_.fromArray(r,Z*3),x.fromArray(r,W*3),S.fromArray(c,U*2),b.fromArray(c,Z*2),y.fromArray(c,W*2),_.sub(v),x.sub(v),b.sub(S),y.sub(S);const B=1/(b.x*y.y-y.x*b.y);isFinite(B)&&(f.copy(_).multiplyScalar(y.y).addScaledVector(x,-b.y).multiplyScalar(B),A.copy(x).multiplyScalar(b.x).addScaledVector(_,-y.x).multiplyScalar(B),p[U].add(f),p[Z].add(f),p[W].add(f),g[U].add(A),g[Z].add(A),g[W].add(A))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let U=0,Z=E.length;U<Z;++U){const W=E[U],B=W.start,Y=W.count;for(let re=B,ue=B+Y;re<ue;re+=3)C(n[re+0],n[re+1],n[re+2])}const D=new X,u=new X,q=new X,V=new X;function P(U){q.fromArray(s,U*3),V.copy(q);const Z=p[U];D.copy(Z),D.sub(q.multiplyScalar(q.dot(Z))).normalize(),u.crossVectors(V,Z);const B=u.dot(g[U])<0?-1:1;d[U*4]=D.x,d[U*4+1]=D.y,d[U*4+2]=D.z,d[U*4+3]=B}for(let U=0,Z=E.length;U<Z;++U){const W=E[U],B=W.start,Y=W.count;for(let re=B,ue=B+Y;re<ue;re+=3)P(n[re+0]),P(n[re+1]),P(n[re+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,x=n.count;_<x;_++)n.setXYZ(_,0,0,0);const r=new X,s=new X,c=new X,o=new X,d=new X,p=new X,g=new X,v=new X;if(e)for(let _=0,x=e.count;_<x;_+=3){const S=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,b),c.fromBufferAttribute(t,y),g.subVectors(c,s),v.subVectors(r,s),g.cross(v),o.fromBufferAttribute(n,S),d.fromBufferAttribute(n,b),p.fromBufferAttribute(n,y),o.add(g),d.add(g),p.add(g),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(b,d.x,d.y,d.z),n.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,x=t.count;_<x;_+=3)r.fromBufferAttribute(t,_+0),s.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,s),v.subVectors(r,s),g.cross(v),n.setXYZ(_+0,g.x,g.y,g.z),n.setXYZ(_+1,g.x,g.y,g.z),n.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,d){const p=o.array,g=o.itemSize,v=o.normalized,_=new p.constructor(d.length*g);let x=0,S=0;for(let b=0,y=d.length;b<y;b++){o.isInterleavedBufferAttribute?x=d[b]*o.data.stride+o.offset:x=d[b]*g;for(let f=0;f<g;f++)_[S++]=p[x++]}return new Xn(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,n=this.index.array,r=this.attributes;for(const o in r){const d=r[o],p=e(d,n);t.setAttribute(o,p)}const s=this.morphAttributes;for(const o in s){const d=[],p=s[o];for(let g=0,v=p.length;g<v;g++){const _=p[g],x=e(_,n);d.push(x)}t.morphAttributes[o]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let o=0,d=c.length;o<d;o++){const p=c[o];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const p=n[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let s=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];g.push(x.toJSON(e.data))}g.length>0&&(r[d]=g,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(t))}const s=e.morphAttributes;for(const p in s){const g=[],v=s[p];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new Ot,Vn=new Za,us=new Vr,pl=new X,nr=new X,ir=new X,rr=new X,ba=new X,fs=new X,ds=new ft,hs=new ft,ps=new ft,ml=new X,gl=new X,vl=new X,ms=new X,gs=new X;class ai extends en{constructor(e=new Dn,t=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fs.set(0,0,0);for(let d=0,p=s.length;d<p;d++){const g=o[d],v=s[d];g!==0&&(ba.fromBufferAttribute(v,e),c?fs.addScaledVector(ba,g):fs.addScaledVector(ba.sub(t),g))}t.add(fs)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),us.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(us,pl)===null||Vn.origin.distanceToSquared(pl)>(e.far-e.near)**2))||(hl.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(hl),n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1))return;let c;const o=n.index,d=n.attributes.position,p=n.attributes.uv,g=n.attributes.uv2,v=n.attributes.normal,_=n.groups,x=n.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,b=_.length;S<b;S++){const y=_[S],f=r[y.materialIndex],A=Math.max(y.start,x.start),C=Math.min(o.count,Math.min(y.start+y.count,x.start+x.count));for(let E=A,D=C;E<D;E+=3){const u=o.getX(E),q=o.getX(E+1),V=o.getX(E+2);c=vs(this,f,e,Vn,p,g,v,u,q,V),c&&(c.faceIndex=Math.floor(E/3),c.face.materialIndex=y.materialIndex,t.push(c))}}else{const S=Math.max(0,x.start),b=Math.min(o.count,x.start+x.count);for(let y=S,f=b;y<f;y+=3){const A=o.getX(y),C=o.getX(y+1),E=o.getX(y+2);c=vs(this,r,e,Vn,p,g,v,A,C,E),c&&(c.faceIndex=Math.floor(y/3),t.push(c))}}else if(d!==void 0)if(Array.isArray(r))for(let S=0,b=_.length;S<b;S++){const y=_[S],f=r[y.materialIndex],A=Math.max(y.start,x.start),C=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let E=A,D=C;E<D;E+=3){const u=E,q=E+1,V=E+2;c=vs(this,f,e,Vn,p,g,v,u,q,V),c&&(c.faceIndex=Math.floor(E/3),c.face.materialIndex=y.materialIndex,t.push(c))}}else{const S=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let y=S,f=b;y<f;y+=3){const A=y,C=y+1,E=y+2;c=vs(this,r,e,Vn,p,g,v,A,C,E),c&&(c.faceIndex=Math.floor(y/3),t.push(c))}}}}function qf(i,e,t,n,r,s,c,o){let d;if(e.side===cn?d=n.intersectTriangle(c,s,r,!0,o):d=n.intersectTriangle(r,s,c,e.side===gi,o),d===null)return null;gs.copy(o),gs.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(gs);return p<t.near||p>t.far?null:{distance:p,point:gs.clone(),object:i}}function vs(i,e,t,n,r,s,c,o,d,p){i.getVertexPosition(o,nr),i.getVertexPosition(d,ir),i.getVertexPosition(p,rr);const g=qf(i,e,t,n,nr,ir,rr,ms);if(g){r&&(ds.fromBufferAttribute(r,o),hs.fromBufferAttribute(r,d),ps.fromBufferAttribute(r,p),g.uv=kn.getInterpolation(ms,nr,ir,rr,ds,hs,ps,new ft)),s&&(ds.fromBufferAttribute(s,o),hs.fromBufferAttribute(s,d),ps.fromBufferAttribute(s,p),g.uv2=kn.getInterpolation(ms,nr,ir,rr,ds,hs,ps,new ft)),c&&(ml.fromBufferAttribute(c,o),gl.fromBufferAttribute(c,d),vl.fromBufferAttribute(c,p),g.normal=kn.getInterpolation(ms,nr,ir,rr,ml,gl,vl,new X),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const v={a:o,b:d,c:p,normal:new X,materialIndex:0};kn.getNormal(nr,ir,rr,v.normal),g.face=v}return g}class Wr extends Dn{constructor(e=1,t=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const o=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const d=[],p=[],g=[],v=[];let _=0,x=0;S("z","y","x",-1,-1,n,t,e,c,s,0),S("z","y","x",1,-1,n,t,-e,c,s,1),S("x","z","y",1,1,e,n,t,r,c,2),S("x","z","y",1,-1,e,n,-t,r,c,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(d),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(v,2));function S(b,y,f,A,C,E,D,u,q,V,P){const U=E/q,Z=D/V,W=E/2,B=D/2,Y=u/2,re=q+1,ue=V+1;let ge=0,le=0;const be=new X;for(let ye=0;ye<ue;ye++){const He=ye*Z-B;for(let Te=0;Te<re;Te++){const se=Te*U-W;be[b]=se*A,be[y]=He*C,be[f]=Y,p.push(be.x,be.y,be.z),be[b]=0,be[y]=0,be[f]=u>0?1:-1,g.push(be.x,be.y,be.z),v.push(Te/q),v.push(1-ye/V),ge+=1}}for(let ye=0;ye<V;ye++)for(let He=0;He<q;He++){const Te=_+He+re*ye,se=_+He+re*(ye+1),me=_+(He+1)+re*(ye+1),Ae=_+(He+1)+re*ye;d.push(Te,se,Ae),d.push(se,me,Ae),le+=6}o.addGroup(x,le,P),x+=le,_+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=gr(i[t]);for(const r in n)e[r]=n[r]}return e}function jf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sc(i){return i.getRenderTarget()===null&&i.outputEncoding===Lt?Wn:Br}const Xf={clone:gr,merge:tn};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends Mc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;s+=c.offsetX*r/d,t-=c.offsetY*n/p,r*=c.width/d,n*=c.height/p}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=-90,ar=1;class Kf extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Sn(sr,ar,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Sn(sr,ar,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const c=new Sn(sr,ar,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(0,1,0),this.add(c);const o=new Sn(sr,ar,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const d=new Sn(sr,ar,e,t);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const p=new Sn(sr,ar,e,t);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,c,o,d,p]=this.children,g=e.getRenderTarget(),v=e.toneMapping,_=e.xr.enabled;e.toneMapping=oi,e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,c),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,d),n.texture.generateMipmaps=x,e.setRenderTarget(n,5),e.render(t,p),e.setRenderTarget(g),e.toneMapping=v,e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class bc extends Mn{constructor(e,t,n,r,s,c,o,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,n,r,s,c,o,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wr(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:mi});s.uniforms.tEquirect.value=t;const c=new ai(r,s),o=t.minFilter;return t.minFilter===zr&&(t.minFilter=Ln),new Kf(1,10,this).update(e,c),t.minFilter=o,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(s)}}const Ta=new X,Jf=new X,Qf=new pt;class Ci{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ta.subVectors(n,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qf.getNormalMatrix(e),r=this.coplanarPoint(Ta).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Vr,_s=new X;class Qa{constructor(e=new Ci,t=new Ci,n=new Ci,r=new Ci,s=new Ci,c=new Ci){this.planes=[e,t,n,r,s,c]}set(e,t,n,r,s,c){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],c=n[2],o=n[3],d=n[4],p=n[5],g=n[6],v=n[7],_=n[8],x=n[9],S=n[10],b=n[11],y=n[12],f=n[13],A=n[14],C=n[15];return t[0].setComponents(o-r,v-d,b-_,C-y).normalize(),t[1].setComponents(o+r,v+d,b+_,C+y).normalize(),t[2].setComponents(o+s,v+p,b+x,C+f).normalize(),t[3].setComponents(o-s,v-p,b-x,C-f).normalize(),t[4].setComponents(o-c,v-g,b-S,C-A).normalize(),t[5].setComponents(o+c,v+g,b+S,C+A).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_s.x=r.normal.x>0?e.max.x:e.min.x,_s.y=r.normal.y>0?e.max.y:e.min.y,_s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let i=null,e=!1,t=null,n=null;function r(s,c){t(s,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ed(i,e){const t=e.isWebGL2,n=new WeakMap;function r(p,g){const v=p.array,_=p.usage,x=i.createBuffer();i.bindBuffer(g,x),i.bufferData(g,v,_),p.onUploadCallback();let S;if(v instanceof Float32Array)S=5126;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)S=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=5123;else if(v instanceof Int16Array)S=5122;else if(v instanceof Uint32Array)S=5125;else if(v instanceof Int32Array)S=5124;else if(v instanceof Int8Array)S=5120;else if(v instanceof Uint8Array)S=5121;else if(v instanceof Uint8ClampedArray)S=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:x,type:S,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version}}function s(p,g,v){const _=g.array,x=g.updateRange;i.bindBuffer(v,p),x.count===-1?i.bufferSubData(v,0,_):(t?i.bufferSubData(v,x.offset*_.BYTES_PER_ELEMENT,_,x.offset,x.count):i.bufferSubData(v,x.offset*_.BYTES_PER_ELEMENT,_.subarray(x.offset,x.offset+x.count)),x.count=-1),g.onUploadCallback()}function c(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function o(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=n.get(p);g&&(i.deleteBuffer(g.buffer),n.delete(p))}function d(p,g){if(p.isGLBufferAttribute){const _=n.get(p);(!_||_.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=n.get(p);v===void 0?n.set(p,r(p,g)):v.version<p.version&&(s(v.buffer,p,g),v.version=p.version)}return{get:c,remove:o,update:d}}class eo extends Dn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,c=t/2,o=Math.floor(n),d=Math.floor(r),p=o+1,g=d+1,v=e/o,_=t/d,x=[],S=[],b=[],y=[];for(let f=0;f<g;f++){const A=f*_-c;for(let C=0;C<p;C++){const E=C*v-s;S.push(E,-A,0),b.push(0,0,1),y.push(C/o),y.push(1-f/d)}}for(let f=0;f<d;f++)for(let A=0;A<o;A++){const C=A+p*f,E=A+p*(f+1),D=A+1+p*(f+1),u=A+1+p*f;x.push(C,E,u),x.push(E,D,u)}this.setIndex(x),this.setAttribute("position",new sn(S,3)),this.setAttribute("normal",new sn(b,3)),this.setAttribute("uv",new sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od="vec3 transformed = vec3( position );",ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Md=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,mh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Th=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ah=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ch=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ph=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,qh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jh=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xh=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$h=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,np=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ct={alphamap_fragment:td,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:rd,aomap_fragment:sd,aomap_pars_fragment:ad,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:ud,bumpmap_pars_fragment:fd,clipping_planes_fragment:dd,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:vd,color_pars_vertex:_d,color_vertex:xd,common:yd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:Md,displacementmap_pars_vertex:bd,displacementmap_vertex:Td,emissivemap_fragment:wd,emissivemap_pars_fragment:Ed,encodings_fragment:Ad,encodings_pars_fragment:Cd,envmap_fragment:Ld,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Dd,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:Wd,envmap_vertex:Id,fog_vertex:Nd,fog_pars_vertex:Ud,fog_fragment:Od,fog_pars_fragment:Fd,gradientmap_pars_fragment:zd,lightmap_fragment:kd,lightmap_pars_fragment:Bd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Vd,lights_toon_fragment:qd,lights_toon_pars_fragment:jd,lights_phong_fragment:Xd,lights_phong_pars_fragment:$d,lights_physical_fragment:Yd,lights_physical_pars_fragment:Kd,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:Qd,logdepthbuf_fragment:eh,logdepthbuf_pars_fragment:th,logdepthbuf_pars_vertex:nh,logdepthbuf_vertex:ih,map_fragment:rh,map_pars_fragment:sh,map_particle_fragment:ah,map_particle_pars_fragment:oh,metalnessmap_fragment:lh,metalnessmap_pars_fragment:ch,morphcolor_vertex:uh,morphnormal_vertex:fh,morphtarget_pars_vertex:dh,morphtarget_vertex:hh,normal_fragment_begin:ph,normal_fragment_maps:mh,normal_pars_fragment:gh,normal_pars_vertex:vh,normal_vertex:_h,normalmap_pars_fragment:xh,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:Sh,clearcoat_pars_fragment:Mh,iridescence_pars_fragment:bh,output_fragment:Th,packing:wh,premultiplied_alpha_fragment:Eh,project_vertex:Ah,dithering_fragment:Ch,dithering_pars_fragment:Lh,roughnessmap_fragment:Ph,roughnessmap_pars_fragment:Dh,shadowmap_pars_fragment:Rh,shadowmap_pars_vertex:Ih,shadowmap_vertex:Nh,shadowmask_pars_fragment:Uh,skinbase_vertex:Oh,skinning_pars_vertex:Fh,skinning_vertex:zh,skinnormal_vertex:kh,specularmap_fragment:Bh,specularmap_pars_fragment:Hh,tonemapping_fragment:Gh,tonemapping_pars_fragment:Vh,transmission_fragment:Wh,transmission_pars_fragment:qh,uv_pars_fragment:jh,uv_pars_vertex:Xh,uv_vertex:$h,worldpos_vertex:Yh,background_vert:Kh,background_frag:Zh,backgroundCube_vert:Jh,backgroundCube_frag:Qh,cube_vert:ep,cube_frag:tp,depth_vert:np,depth_frag:ip,distanceRGBA_vert:rp,distanceRGBA_frag:sp,equirect_vert:ap,equirect_frag:op,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:up,meshbasic_frag:fp,meshlambert_vert:dp,meshlambert_frag:hp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:vp,meshphong_vert:_p,meshphong_frag:xp,meshphysical_vert:yp,meshphysical_frag:Sp,meshtoon_vert:Mp,meshtoon_frag:bp,points_vert:Tp,points_frag:wp,shadow_vert:Ep,shadow_frag:Ap,sprite_vert:Cp,sprite_frag:Lp},Ce={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaTest:{value:0}}},qn={basic:{uniforms:tn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:tn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:tn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:tn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:tn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:tn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:tn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:tn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:tn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:tn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:tn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:tn([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:tn([Ce.lights,Ce.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};qn.physical={uniforms:tn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const xs={r:0,b:0,g:0};function Pp(i,e,t,n,r,s,c){const o=new yt(0);let d=s===!0?0:1,p,g,v=null,_=0,x=null;function S(y,f){let A=!1,C=f.isScene===!0?f.background:null;C&&C.isTexture&&(C=(f.backgroundBlurriness>0?t:e).get(C));const E=i.xr,D=E.getSession&&E.getSession();D&&D.environmentBlendMode==="additive"&&(C=null),C===null?b(o,d):C&&C.isColor&&(b(C,1),A=!0),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Is)?(g===void 0&&(g=new ai(new Wr(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:gr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(u,q,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,g.material.toneMapped=C.encoding!==Lt,(v!==C||_!==C.version||x!==i.toneMapping)&&(g.material.needsUpdate=!0,v=C,_=C.version,x=i.toneMapping),g.layers.enableAll(),y.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new ai(new eo(2,2),new ki({name:"BackgroundMaterial",uniforms:gr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,p.material.toneMapped=C.encoding!==Lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,v=C,_=C.version,x=i.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null))}function b(y,f){y.getRGB(xs,Sc(i)),n.buffers.color.setClear(xs.r,xs.g,xs.b,f,c)}return{getClearColor:function(){return o},setClearColor:function(y,f=1){o.set(y),d=f,b(o,d)},getClearAlpha:function(){return d},setClearAlpha:function(y){d=y,b(o,d)},render:S}}function Dp(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||s!==null,o={},d=y(null);let p=d,g=!1;function v(Y,re,ue,ge,le){let be=!1;if(c){const ye=b(ge,ue,re);p!==ye&&(p=ye,x(p.object)),be=f(Y,ge,ue,le),be&&A(Y,ge,ue,le)}else{const ye=re.wireframe===!0;(p.geometry!==ge.id||p.program!==ue.id||p.wireframe!==ye)&&(p.geometry=ge.id,p.program=ue.id,p.wireframe=ye,be=!0)}le!==null&&t.update(le,34963),(be||g)&&(g=!1,V(Y,re,ue,ge),le!==null&&i.bindBuffer(34963,t.get(le).buffer))}function _(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function x(Y){return n.isWebGL2?i.bindVertexArray(Y):s.bindVertexArrayOES(Y)}function S(Y){return n.isWebGL2?i.deleteVertexArray(Y):s.deleteVertexArrayOES(Y)}function b(Y,re,ue){const ge=ue.wireframe===!0;let le=o[Y.id];le===void 0&&(le={},o[Y.id]=le);let be=le[re.id];be===void 0&&(be={},le[re.id]=be);let ye=be[ge];return ye===void 0&&(ye=y(_()),be[ge]=ye),ye}function y(Y){const re=[],ue=[],ge=[];for(let le=0;le<r;le++)re[le]=0,ue[le]=0,ge[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:ue,attributeDivisors:ge,object:Y,attributes:{},index:null}}function f(Y,re,ue,ge){const le=p.attributes,be=re.attributes;let ye=0;const He=ue.getAttributes();for(const Te in He)if(He[Te].location>=0){const me=le[Te];let Ae=be[Te];if(Ae===void 0&&(Te==="instanceMatrix"&&Y.instanceMatrix&&(Ae=Y.instanceMatrix),Te==="instanceColor"&&Y.instanceColor&&(Ae=Y.instanceColor)),me===void 0||me.attribute!==Ae||Ae&&me.data!==Ae.data)return!0;ye++}return p.attributesNum!==ye||p.index!==ge}function A(Y,re,ue,ge){const le={},be=re.attributes;let ye=0;const He=ue.getAttributes();for(const Te in He)if(He[Te].location>=0){let me=be[Te];me===void 0&&(Te==="instanceMatrix"&&Y.instanceMatrix&&(me=Y.instanceMatrix),Te==="instanceColor"&&Y.instanceColor&&(me=Y.instanceColor));const Ae={};Ae.attribute=me,me&&me.data&&(Ae.data=me.data),le[Te]=Ae,ye++}p.attributes=le,p.attributesNum=ye,p.index=ge}function C(){const Y=p.newAttributes;for(let re=0,ue=Y.length;re<ue;re++)Y[re]=0}function E(Y){D(Y,0)}function D(Y,re){const ue=p.newAttributes,ge=p.enabledAttributes,le=p.attributeDivisors;ue[Y]=1,ge[Y]===0&&(i.enableVertexAttribArray(Y),ge[Y]=1),le[Y]!==re&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,re),le[Y]=re)}function u(){const Y=p.newAttributes,re=p.enabledAttributes;for(let ue=0,ge=re.length;ue<ge;ue++)re[ue]!==Y[ue]&&(i.disableVertexAttribArray(ue),re[ue]=0)}function q(Y,re,ue,ge,le,be){n.isWebGL2===!0&&(ue===5124||ue===5125)?i.vertexAttribIPointer(Y,re,ue,le,be):i.vertexAttribPointer(Y,re,ue,ge,le,be)}function V(Y,re,ue,ge){if(n.isWebGL2===!1&&(Y.isInstancedMesh||ge.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const le=ge.attributes,be=ue.getAttributes(),ye=re.defaultAttributeValues;for(const He in be){const Te=be[He];if(Te.location>=0){let se=le[He];if(se===void 0&&(He==="instanceMatrix"&&Y.instanceMatrix&&(se=Y.instanceMatrix),He==="instanceColor"&&Y.instanceColor&&(se=Y.instanceColor)),se!==void 0){const me=se.normalized,Ae=se.itemSize,Ne=t.get(se);if(Ne===void 0)continue;const ne=Ne.buffer,Qe=Ne.type,Ge=Ne.bytesPerElement;if(se.isInterleavedBufferAttribute){const Ee=se.data,Ye=Ee.stride,gt=se.offset;if(Ee.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Te.locationSize;Fe++)D(Te.location+Fe,Ee.meshPerAttribute);Y.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Fe=0;Fe<Te.locationSize;Fe++)E(Te.location+Fe);i.bindBuffer(34962,ne);for(let Fe=0;Fe<Te.locationSize;Fe++)q(Te.location+Fe,Ae/Te.locationSize,Qe,me,Ye*Ge,(gt+Ae/Te.locationSize*Fe)*Ge)}else{if(se.isInstancedBufferAttribute){for(let Ee=0;Ee<Te.locationSize;Ee++)D(Te.location+Ee,se.meshPerAttribute);Y.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ee=0;Ee<Te.locationSize;Ee++)E(Te.location+Ee);i.bindBuffer(34962,ne);for(let Ee=0;Ee<Te.locationSize;Ee++)q(Te.location+Ee,Ae/Te.locationSize,Qe,me,Ae*Ge,Ae/Te.locationSize*Ee*Ge)}}else if(ye!==void 0){const me=ye[He];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Te.location,me);break;case 3:i.vertexAttrib3fv(Te.location,me);break;case 4:i.vertexAttrib4fv(Te.location,me);break;default:i.vertexAttrib1fv(Te.location,me)}}}}u()}function P(){W();for(const Y in o){const re=o[Y];for(const ue in re){const ge=re[ue];for(const le in ge)S(ge[le].object),delete ge[le];delete re[ue]}delete o[Y]}}function U(Y){if(o[Y.id]===void 0)return;const re=o[Y.id];for(const ue in re){const ge=re[ue];for(const le in ge)S(ge[le].object),delete ge[le];delete re[ue]}delete o[Y.id]}function Z(Y){for(const re in o){const ue=o[re];if(ue[Y.id]===void 0)continue;const ge=ue[Y.id];for(const le in ge)S(ge[le].object),delete ge[le];delete ue[Y.id]}}function W(){B(),g=!0,p!==d&&(p=d,x(p.object))}function B(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:W,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfProgram:Z,initAttributes:C,enableAttribute:E,disableUnusedAttributes:u}}function Rp(i,e,t,n){const r=n.isWebGL2;let s;function c(p){s=p}function o(p,g){i.drawArrays(s,p,g),t.update(g,s,1)}function d(p,g,v){if(v===0)return;let _,x;if(r)_=i,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](s,p,g,v),t.update(g,s,v)}this.setMode=c,this.render=o,this.renderInstances=d}function Ip(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(q){if(q==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";q="mediump"}return q==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const d=s(o);d!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",d,"instead."),o=d);const p=c||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,v=i.getParameter(34930),_=i.getParameter(35660),x=i.getParameter(3379),S=i.getParameter(34076),b=i.getParameter(34921),y=i.getParameter(36347),f=i.getParameter(36348),A=i.getParameter(36349),C=_>0,E=c||e.has("OES_texture_float"),D=C&&E,u=c?i.getParameter(36183):0;return{isWebGL2:c,drawBuffers:p,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:y,maxVaryings:f,maxFragmentUniforms:A,vertexTextures:C,floatFragmentTextures:E,floatVertexTextures:D,maxSamples:u}}function Np(i){const e=this;let t=null,n=0,r=!1,s=!1;const c=new Ci,o=new pt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||n!==0||r;return r=_,n=v.length,x},this.beginShadows=function(){s=!0,g(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,x){const S=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,f=i.get(v);if(!r||S===null||S.length===0||s&&!y)s?g(null):p();else{const A=s?0:n,C=A*4;let E=f.clippingState||null;d.value=E,E=g(S,_,C,x);for(let D=0;D!==C;++D)E[D]=t[D];f.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(v,_,x,S){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=d.value,S!==!0||y===null){const f=x+b*4,A=_.matrixWorldInverse;o.getNormalMatrix(A),(y===null||y.length<f)&&(y=new Float32Array(f));for(let C=0,E=x;C!==b;++C,E+=4)c.copy(v[C]).applyMatrix4(A,o),c.normal.toArray(y,E),y[E+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function Up(i){let e=new WeakMap;function t(c,o){return o===ka?c.mapping=hr:o===Ba&&(c.mapping=pr),c}function n(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const o=c.mapping;if(o===ka||o===Ba)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new Zf(d.height/2);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",r),t(p.texture,c.mapping)}else return null}}return c}function r(c){const o=c.target;o.removeEventListener("dispose",r);const d=e.get(o);d!==void 0&&(e.delete(o),d.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Op extends Mc{constructor(e=-1,t=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,c=n+e,o=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=p*this.view.offsetX,c=s+p*this.view.width,o-=g*this.view.offsetY,d=o-g*this.view.height}this.projectionMatrix.makeOrthographic(s,c,o,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cr=4,_l=[.125,.215,.35,.446,.526,.582],Pi=20,wa=new Op,xl=new yt;let Ea=null;const Li=(1+Math.sqrt(5))/2,or=1/Li,yl=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Li,or),new X(0,Li,-or),new X(or,0,Li),new X(-or,0,Li),new X(Li,or,0),new X(-Li,or,0)];class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ea=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:kr,format:Hn,encoding:Oi,depthBuffer:!1},r=Ml(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(s)),this._blurMaterial=zp(s,e,t)}return r}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,r){const o=new Sn(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(xl),g.toneMapping=oi,g.autoClear=!1;const x=new Ja({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),S=new ai(new Wr,x);let b=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,b=!0):(x.color.copy(xl),b=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(o.up.set(0,d[f],0),o.lookAt(p[f],0,0)):A===1?(o.up.set(0,0,d[f]),o.lookAt(0,p[f],0)):(o.up.set(0,d[f],0),o.lookAt(0,0,p[f]));const C=this._cubeSize;ys(r,A*C,f>2?C:0,C,C),g.setRenderTarget(r),b&&g.render(S,o),g.render(e,o)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=_,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new ai(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const d=this._cubeSize;ys(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=yl[(r-1)%yl.length];this._blur(e,r-1,r,s,c)}t.autoClear=n}_blur(e,t,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",s),this._halfBlur(c,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,c,o){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ai(this._lodPlanes[r],p),_=p.uniforms,x=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*Pi-1),b=s/S,y=isFinite(s)?1+Math.floor(g*b):Pi;y>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Pi}`);const f=[];let A=0;for(let q=0;q<Pi;++q){const V=q/b,P=Math.exp(-V*V/2);f.push(P),q===0?A+=P:q<y&&(A+=2*P)}for(let q=0;q<f.length;q++)f[q]=f[q]/A;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=f,_.latitudinal.value=c==="latitudinal",o&&(_.poleAxis.value=o);const{_lodMax:C}=this;_.dTheta.value=S,_.mipInt.value=C-n;const E=this._sizeLods[r],D=3*E*(r>C-cr?r-C+cr:0),u=4*(this._cubeSize-E);ys(t,D,u,3*E,2*E),d.setRenderTarget(t),d.render(v,wa)}}function Fp(i){const e=[],t=[],n=[];let r=i;const s=i-cr+1+_l.length;for(let c=0;c<s;c++){const o=Math.pow(2,r);t.push(o);let d=1/o;c>i-cr?d=_l[c-i+cr-1]:c===0&&(d=0),n.push(d);const p=1/(o-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,S=6,b=3,y=2,f=1,A=new Float32Array(b*S*x),C=new Float32Array(y*S*x),E=new Float32Array(f*S*x);for(let u=0;u<x;u++){const q=u%3*2/3-1,V=u>2?0:-1,P=[q,V,0,q+2/3,V,0,q+2/3,V+1,0,q,V,0,q+2/3,V+1,0,q,V+1,0];A.set(P,b*S*u),C.set(_,y*S*u);const U=[u,u,u,u,u,u];E.set(U,f*S*u)}const D=new Dn;D.setAttribute("position",new Xn(A,b)),D.setAttribute("uv",new Xn(C,y)),D.setAttribute("faceIndex",new Xn(E,f)),e.push(D),r>cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ml(i,e,t){const n=new Fi(i,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zp(i,e,t){const n=new Float32Array(Pi),r=new X(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function bl(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Tl(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function to(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const d=o.mapping,p=d===ka||d===Ba,g=d===hr||d===pr;if(p||g)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let v=e.get(o);return t===null&&(t=new Sl(i)),v=p?t.fromEquirectangular(o,v):t.fromCubemap(o,v),e.set(o,v),v.texture}else{if(e.has(o))return e.get(o).texture;{const v=o.image;if(p&&v&&v.height>0||g&&v&&r(v)){t===null&&(t=new Sl(i));const _=p?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,_),o.addEventListener("dispose",s),_.texture}else return null}}}return o}function r(o){let d=0;const p=6;for(let g=0;g<p;g++)o[g]!==void 0&&d++;return d===p}function s(o){const d=o.target;d.removeEventListener("dispose",s);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Bp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hp(i,e,t,n){const r={},s=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const S in _.attributes)e.remove(_.attributes[S]);_.removeEventListener("dispose",c),delete r[_.id];const x=s.get(_);x&&(e.remove(x),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function o(v,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,t.memory.geometries++),_}function d(v){const _=v.attributes;for(const S in _)e.update(_[S],34962);const x=v.morphAttributes;for(const S in x){const b=x[S];for(let y=0,f=b.length;y<f;y++)e.update(b[y],34962)}}function p(v){const _=[],x=v.index,S=v.attributes.position;let b=0;if(x!==null){const A=x.array;b=x.version;for(let C=0,E=A.length;C<E;C+=3){const D=A[C+0],u=A[C+1],q=A[C+2];_.push(D,u,u,q,q,D)}}else{const A=S.array;b=S.version;for(let C=0,E=A.length/3-1;C<E;C+=3){const D=C+0,u=C+1,q=C+2;_.push(D,u,u,q,q,D)}}const y=new(hc(_)?yc:xc)(_,1);y.version=b;const f=s.get(v);f&&e.remove(f),s.set(v,y)}function g(v){const _=s.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return s.get(v)}return{get:o,update:d,getWireframeAttribute:g}}function Gp(i,e,t,n){const r=n.isWebGL2;let s;function c(_){s=_}let o,d;function p(_){o=_.type,d=_.bytesPerElement}function g(_,x){i.drawElements(s,x,o,_*d),t.update(x,s,1)}function v(_,x,S){if(S===0)return;let b,y;if(r)b=i,y="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[y](s,x,o,_*d,S),t.update(x,s,S)}this.setMode=c,this.setIndex=p,this.render=g,this.renderInstances=v}function Vp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,o){switch(t.calls++,c){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wp(i,e){return i[0]-e[0]}function qp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function jp(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,c=new Dt,o=[];for(let p=0;p<8;p++)o[p]=[p,0];function d(p,g,v){const _=p.morphTargetInfluences;if(e.isWebGL2===!0){const S=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,b=S!==void 0?S.length:0;let y=s.get(g);if(y===void 0||y.count!==b){let re=function(){B.dispose(),s.delete(g),g.removeEventListener("dispose",re)};var x=re;y!==void 0&&y.texture.dispose();const C=g.morphAttributes.position!==void 0,E=g.morphAttributes.normal!==void 0,D=g.morphAttributes.color!==void 0,u=g.morphAttributes.position||[],q=g.morphAttributes.normal||[],V=g.morphAttributes.color||[];let P=0;C===!0&&(P=1),E===!0&&(P=2),D===!0&&(P=3);let U=g.attributes.position.count*P,Z=1;U>e.maxTextureSize&&(Z=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const W=new Float32Array(U*Z*4*b),B=new gc(W,U,Z,b);B.type=Ii,B.needsUpdate=!0;const Y=P*4;for(let ue=0;ue<b;ue++){const ge=u[ue],le=q[ue],be=V[ue],ye=U*Z*4*ue;for(let He=0;He<ge.count;He++){const Te=He*Y;C===!0&&(c.fromBufferAttribute(ge,He),W[ye+Te+0]=c.x,W[ye+Te+1]=c.y,W[ye+Te+2]=c.z,W[ye+Te+3]=0),E===!0&&(c.fromBufferAttribute(le,He),W[ye+Te+4]=c.x,W[ye+Te+5]=c.y,W[ye+Te+6]=c.z,W[ye+Te+7]=0),D===!0&&(c.fromBufferAttribute(be,He),W[ye+Te+8]=c.x,W[ye+Te+9]=c.y,W[ye+Te+10]=c.z,W[ye+Te+11]=be.itemSize===4?c.w:1)}}y={count:b,texture:B,size:new ft(U,Z)},s.set(g,y),g.addEventListener("dispose",re)}let f=0;for(let C=0;C<_.length;C++)f+=_[C];const A=g.morphTargetsRelative?1:1-f;v.getUniforms().setValue(i,"morphTargetBaseInfluence",A),v.getUniforms().setValue(i,"morphTargetInfluences",_),v.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),v.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{const S=_===void 0?0:_.length;let b=n[g.id];if(b===void 0||b.length!==S){b=[];for(let E=0;E<S;E++)b[E]=[E,0];n[g.id]=b}for(let E=0;E<S;E++){const D=b[E];D[0]=E,D[1]=_[E]}b.sort(qp);for(let E=0;E<8;E++)E<S&&b[E][1]?(o[E][0]=b[E][0],o[E][1]=b[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Wp);const y=g.morphAttributes.position,f=g.morphAttributes.normal;let A=0;for(let E=0;E<8;E++){const D=o[E],u=D[0],q=D[1];u!==Number.MAX_SAFE_INTEGER&&q?(y&&g.getAttribute("morphTarget"+E)!==y[u]&&g.setAttribute("morphTarget"+E,y[u]),f&&g.getAttribute("morphNormal"+E)!==f[u]&&g.setAttribute("morphNormal"+E,f[u]),r[E]=q,A+=q):(y&&g.hasAttribute("morphTarget"+E)===!0&&g.deleteAttribute("morphTarget"+E),f&&g.hasAttribute("morphNormal"+E)===!0&&g.deleteAttribute("morphNormal"+E),r[E]=0)}const C=g.morphTargetsRelative?1:1-A;v.getUniforms().setValue(i,"morphTargetBaseInfluence",C),v.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:d}}function Xp(i,e,t,n){let r=new WeakMap;function s(d){const p=n.render.frame,g=d.geometry,v=e.get(d,g);return r.get(v)!==p&&(e.update(v),r.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",o)===!1&&d.addEventListener("dispose",o),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),v}function c(){r=new WeakMap}function o(d){const p=d.target;p.removeEventListener("dispose",o),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:s,dispose:c}}const wc=new Mn,Ec=new gc,Ac=new Uf,Cc=new bc,wl=[],El=[],Al=new Float32Array(16),Cl=new Float32Array(9),Ll=new Float32Array(4);function _r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=wl[r];if(s===void 0&&(s=new Float32Array(r),wl[r]=s),e!==0){n.toArray(s,0);for(let c=1,o=0;c!==e;++c)o+=t,i[c].toArray(s,o)}return s}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Us(i,e){let t=El[e];t===void 0&&(t=new Int32Array(e),El[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Ll.set(n),i.uniformMatrix2fv(this.addr,!1,Ll),Xt(t,n)}}function Qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Cl.set(n),i.uniformMatrix3fv(this.addr,!1,Cl),Xt(t,n)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),Xt(t,n)}}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function cm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||wc,r)}function um(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ac,r)}function fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cc,r)}function dm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ec,r)}function hm(i){switch(i){case 5126:return $p;case 35664:return Yp;case 35665:return Kp;case 35666:return Zp;case 35674:return Jp;case 35675:return Qp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return sm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return dm}}function pm(i,e){i.uniform1fv(this.addr,e)}function mm(i,e){const t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function gm(i,e){const t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function vm(i,e){const t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function _m(i,e){const t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xm(i,e){const t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ym(i,e){const t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sm(i,e){i.uniform1iv(this.addr,e)}function Mm(i,e){i.uniform2iv(this.addr,e)}function bm(i,e){i.uniform3iv(this.addr,e)}function Tm(i,e){i.uniform4iv(this.addr,e)}function wm(i,e){i.uniform1uiv(this.addr,e)}function Em(i,e){i.uniform2uiv(this.addr,e)}function Am(i,e){i.uniform3uiv(this.addr,e)}function Cm(i,e){i.uniform4uiv(this.addr,e)}function Lm(i,e,t){const n=this.cache,r=e.length,s=Us(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||wc,s[c])}function Pm(i,e,t){const n=this.cache,r=e.length,s=Us(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Ac,s[c])}function Dm(i,e,t){const n=this.cache,r=e.length,s=Us(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Cc,s[c])}function Rm(i,e,t){const n=this.cache,r=e.length,s=Us(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Ec,s[c])}function Im(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return vm;case 35674:return _m;case 35675:return xm;case 35676:return ym;case 5124:case 35670:return Sm;case 35667:case 35671:return Mm;case 35668:case 35672:return bm;case 35669:case 35673:return Tm;case 5125:return wm;case 36294:return Em;case 36295:return Am;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Rm}}class Nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hm(t.type)}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Im(t.type)}}class Om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Pl(i,e){i.seq.push(e),i.map[e.id]=e}function Fm(i,e,t){const n=i.name,r=n.length;for(Aa.lastIndex=0;;){const s=Aa.exec(n),c=Aa.lastIndex;let o=s[1];const d=s[2]==="]",p=s[3];if(d&&(o=o|0),p===void 0||p==="["&&c+2===r){Pl(t,p===void 0?new Nm(o,i,e):new Um(o,i,e));break}else{let v=t.map[o];v===void 0&&(v=new Om(o),Pl(t,v)),t=v}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),c=e.getUniformLocation(t,s.name);Fm(s,c,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,c=t.length;s!==c;++s){const o=t[s],d=n[o.id];d.needsUpdate!==!1&&o.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function Dl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let zm=0;function km(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=r;c<s;c++){const o=c+1;n.push(`${o===e?">":" "} ${o}: ${t[c]}`)}return n.join(`
`)}function Bm(i){switch(i){case Oi:return["Linear","( value )"];case Lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Rl(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+km(i.getShaderSource(e),c)}else return r}function Hm(i,e){const t=Bm(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gm(i,e){let t;switch(e){case Qu:t="Linear";break;case ef:t="Reinhard";break;case tf:t="OptimizedCineon";break;case nf:t="ACESFilmic";break;case rf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fr).join(`
`)}function Wm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qm(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),c=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:o}}return t}function Fr(i){return i!==""}function Il(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(i){return i.replace(jm,Xm)}function Xm(i,e){const t=ct[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return qa(t)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace($m,Ym)}function Ym(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ol(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Km(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Or&&(e="SHADOWMAP_TYPE_VSM"),e}function Zm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case pr:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Zu:e="ENVMAP_BLENDING_MIX";break;case Ju:e="ENVMAP_BLENDING_ADD";break}return e}function eg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tg(i,e,t,n){const r=i.getContext(),s=t.defines;let c=t.vertexShader,o=t.fragmentShader;const d=Km(t),p=Zm(t),g=Jm(t),v=Qm(t),_=eg(t),x=t.isWebGL2?"":Vm(t),S=Wm(s),b=r.createProgram();let y,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[S].filter(Fr).join(`
`),y.length>0&&(y+=`
`),f=[x,S].filter(Fr).join(`
`),f.length>0&&(f+=`
`)):(y=[Ol(t),"#define SHADER_NAME "+t.shaderName,S,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),f=[x,Ol(t),"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?ct.tonemapping_pars_fragment:"",t.toneMapping!==oi?Gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.encodings_pars_fragment,Hm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),c=qa(c),c=Il(c,t),c=Nl(c,t),o=qa(o),o=Il(o,t),o=Nl(o,t),c=Ul(c),o=Ul(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,f=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=A+y+c,E=A+f+o,D=Dl(r,35633,C),u=Dl(r,35632,E);if(r.attachShader(b,D),r.attachShader(b,u),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),i.debug.checkShaderErrors){const P=r.getProgramInfoLog(b).trim(),U=r.getShaderInfoLog(D).trim(),Z=r.getShaderInfoLog(u).trim();let W=!0,B=!0;if(r.getProgramParameter(b,35714)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,D,u);else{const Y=Rl(r,D,"vertex"),re=Rl(r,u,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,35715)+`

Program Info Log: `+P+`
`+Y+`
`+re)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||Z==="")&&(B=!1);B&&(this.diagnostics={runnable:W,programLog:P,vertexShader:{log:U,prefix:y},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(D),r.deleteShader(u);let q;this.getUniforms=function(){return q===void 0&&(q=new As(r,b)),q};let V;return this.getAttributes=function(){return V===void 0&&(V=qm(r,b)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.name=t.shaderName,this.id=zm++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=u,this}let ng=0;class ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rg(e),t.set(e,n)),n}}class rg{constructor(e){this.id=ng++,this.code=e,this.usedTimes=0}}function sg(i,e,t,n,r,s,c){const o=new vc,d=new ig,p=[],g=r.isWebGL2,v=r.logarithmicDepthBuffer,_=r.vertexTextures;let x=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(P){return P===1?"uv2":"uv"}function y(P,U,Z,W,B){const Y=W.fog,re=B.geometry,ue=P.isMeshStandardMaterial?W.environment:null,ge=(P.isMeshStandardMaterial?t:e).get(P.envMap||ue),le=ge&&ge.mapping===Is?ge.image.height:null,be=S[P.type];P.precision!==null&&(x=r.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const ye=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,He=ye!==void 0?ye.length:0;let Te=0;re.morphAttributes.position!==void 0&&(Te=1),re.morphAttributes.normal!==void 0&&(Te=2),re.morphAttributes.color!==void 0&&(Te=3);let se,me,Ae,Ne;if(be){const Re=qn[be];se=Re.vertexShader,me=Re.fragmentShader}else se=P.vertexShader,me=P.fragmentShader,d.update(P),Ae=d.getVertexShaderID(P),Ne=d.getFragmentShaderID(P);const ne=i.getRenderTarget(),Qe=B.isInstancedMesh===!0,Ge=!!P.map,Ee=!!P.matcap,Ye=!!ge,gt=!!P.aoMap,Fe=!!P.lightMap,nt=!!P.bumpMap,St=!!P.normalMap,Pe=!!P.displacementMap,ht=!!P.emissiveMap,Rt=!!P.metalnessMap,mt=!!P.roughnessMap,Mt=P.clearcoat>0,Vt=P.iridescence>0,N=P.sheen>0,R=P.transmission>0,ie=Mt&&!!P.clearcoatMap,xe=Mt&&!!P.clearcoatNormalMap,Se=Mt&&!!P.clearcoatRoughnessMap,Le=Vt&&!!P.iridescenceMap,k=Vt&&!!P.iridescenceThicknessMap,pe=N&&!!P.sheenColorMap,te=N&&!!P.sheenRoughnessMap,De=!!P.specularMap,Ue=!!P.specularColorMap,ze=!!P.specularIntensityMap,Oe=R&&!!P.transmissionMap,Be=R&&!!P.thicknessMap,We=!!P.gradientMap,Xe=!!P.alphaMap,At=P.alphaTest>0,G=!!P.extensions,ce=!!re.attributes.uv2;return{isWebGL2:g,shaderID:be,shaderName:P.type,vertexShader:se,fragmentShader:me,defines:P.defines,customVertexShaderID:Ae,customFragmentShaderID:Ne,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,instancing:Qe,instancingColor:Qe&&B.instanceColor!==null,supportsVertexTextures:_,outputEncoding:ne===null?i.outputEncoding:ne.isXRRenderTarget===!0?ne.texture.encoding:Oi,map:Ge,matcap:Ee,envMap:Ye,envMapMode:Ye&&ge.mapping,envMapCubeUVHeight:le,aoMap:gt,lightMap:Fe,bumpMap:nt,normalMap:St,displacementMap:_&&Pe,emissiveMap:ht,normalMapObjectSpace:St&&P.normalMapType===Tf,normalMapTangentSpace:St&&P.normalMapType===bf,decodeVideoTexture:Ge&&P.map.isVideoTexture===!0&&P.map.encoding===Lt,metalnessMap:Rt,roughnessMap:mt,clearcoat:Mt,clearcoatMap:ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,iridescence:Vt,iridescenceMap:Le,iridescenceThicknessMap:k,sheen:N,sheenColorMap:pe,sheenRoughnessMap:te,specularMap:De,specularColorMap:Ue,specularIntensityMap:ze,transmission:R,transmissionMap:Oe,thicknessMap:Be,gradientMap:We,opaque:P.transparent===!1&&P.blending===ur,alphaMap:Xe,alphaTest:At,combine:P.combine,mapUv:Ge&&b(P.map.channel),aoMapUv:gt&&b(P.aoMap.channel),lightMapUv:Fe&&b(P.lightMap.channel),bumpMapUv:nt&&b(P.bumpMap.channel),normalMapUv:St&&b(P.normalMap.channel),displacementMapUv:Pe&&b(P.displacementMap.channel),emissiveMapUv:ht&&b(P.emissiveMap.channel),metalnessMapUv:Rt&&b(P.metalnessMap.channel),roughnessMapUv:mt&&b(P.roughnessMap.channel),clearcoatMapUv:ie&&b(P.clearcoatMap.channel),clearcoatNormalMapUv:xe&&b(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&b(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&b(P.iridescenceMap.channel),iridescenceThicknessMapUv:k&&b(P.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&b(P.sheenColorMap.channel),sheenRoughnessMapUv:te&&b(P.sheenRoughnessMap.channel),specularMapUv:De&&b(P.specularMap.channel),specularColorMapUv:Ue&&b(P.specularColorMap.channel),specularIntensityMapUv:ze&&b(P.specularIntensityMap.channel),transmissionMapUv:Oe&&b(P.transmissionMap.channel),thicknessMapUv:Be&&b(P.thicknessMap.channel),alphaMapUv:Xe&&b(P.alphaMap.channel),vertexTangents:St&&!!re.attributes.tangent,vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,vertexUvs2:ce,pointsUvs:B.isPoints===!0&&!!re.attributes.uv&&(Ge||Xe),fog:!!Y,useFog:P.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:B.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:Te,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:P.toneMapped?i.toneMapping:oi,useLegacyLights:i.useLegacyLights,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ri,flipSided:P.side===cn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionDerivatives:G&&P.extensions.derivatives===!0,extensionFragDepth:G&&P.extensions.fragDepth===!0,extensionDrawBuffers:G&&P.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&P.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||n.has("EXT_shader_texture_lod"),customProgramCacheKey:P.customProgramCacheKey()}}function f(P){const U=[];if(P.shaderID?U.push(P.shaderID):(U.push(P.customVertexShaderID),U.push(P.customFragmentShaderID)),P.defines!==void 0)for(const Z in P.defines)U.push(Z),U.push(P.defines[Z]);return P.isRawShaderMaterial===!1&&(A(U,P),C(U,P),U.push(i.outputEncoding)),U.push(P.customProgramCacheKey),U.join()}function A(P,U){P.push(U.precision),P.push(U.outputEncoding),P.push(U.envMapMode),P.push(U.envMapCubeUVHeight),P.push(U.mapUv),P.push(U.alphaMapUv),P.push(U.lightMapUv),P.push(U.aoMapUv),P.push(U.bumpMapUv),P.push(U.normalMapUv),P.push(U.displacementMapUv),P.push(U.emissiveMapUv),P.push(U.metalnessMapUv),P.push(U.roughnessMapUv),P.push(U.clearcoatMapUv),P.push(U.clearcoatNormalMapUv),P.push(U.clearcoatRoughnessMapUv),P.push(U.iridescenceMapUv),P.push(U.iridescenceThicknessMapUv),P.push(U.sheenColorMapUv),P.push(U.sheenRoughnessMapUv),P.push(U.specularMapUv),P.push(U.specularColorMapUv),P.push(U.specularIntensityMapUv),P.push(U.transmissionMapUv),P.push(U.thicknessMapUv),P.push(U.combine),P.push(U.fogExp2),P.push(U.sizeAttenuation),P.push(U.morphTargetsCount),P.push(U.morphAttributeCount),P.push(U.numDirLights),P.push(U.numPointLights),P.push(U.numSpotLights),P.push(U.numSpotLightMaps),P.push(U.numHemiLights),P.push(U.numRectAreaLights),P.push(U.numDirLightShadows),P.push(U.numPointLightShadows),P.push(U.numSpotLightShadows),P.push(U.numSpotLightShadowsWithMaps),P.push(U.shadowMapType),P.push(U.toneMapping),P.push(U.numClippingPlanes),P.push(U.numClipIntersection),P.push(U.depthPacking)}function C(P,U){o.disableAll(),U.isWebGL2&&o.enable(0),U.supportsVertexTextures&&o.enable(1),U.instancing&&o.enable(2),U.instancingColor&&o.enable(3),U.matcap&&o.enable(4),U.envMap&&o.enable(5),U.normalMapObjectSpace&&o.enable(6),U.normalMapTangentSpace&&o.enable(7),U.clearcoat&&o.enable(8),U.iridescence&&o.enable(9),U.alphaTest&&o.enable(10),U.vertexColors&&o.enable(11),U.vertexAlphas&&o.enable(12),U.vertexUvs2&&o.enable(13),U.vertexTangents&&o.enable(14),P.push(o.mask),o.disableAll(),U.fog&&o.enable(0),U.useFog&&o.enable(1),U.flatShading&&o.enable(2),U.logarithmicDepthBuffer&&o.enable(3),U.skinning&&o.enable(4),U.morphTargets&&o.enable(5),U.morphNormals&&o.enable(6),U.morphColors&&o.enable(7),U.premultipliedAlpha&&o.enable(8),U.shadowMapEnabled&&o.enable(9),U.useLegacyLights&&o.enable(10),U.doubleSided&&o.enable(11),U.flipSided&&o.enable(12),U.useDepthPacking&&o.enable(13),U.dithering&&o.enable(14),U.transmission&&o.enable(15),U.sheen&&o.enable(16),U.decodeVideoTexture&&o.enable(17),U.opaque&&o.enable(18),U.pointsUvs&&o.enable(19),P.push(o.mask)}function E(P){const U=S[P.type];let Z;if(U){const W=qn[U];Z=Xf.clone(W.uniforms)}else Z=P.uniforms;return Z}function D(P,U){let Z;for(let W=0,B=p.length;W<B;W++){const Y=p[W];if(Y.cacheKey===U){Z=Y,++Z.usedTimes;break}}return Z===void 0&&(Z=new tg(i,U,P,s),p.push(Z)),Z}function u(P){if(--P.usedTimes===0){const U=p.indexOf(P);p[U]=p[p.length-1],p.pop(),P.destroy()}}function q(P){d.remove(P)}function V(){d.dispose()}return{getParameters:y,getProgramCacheKey:f,getUniforms:E,acquireProgram:D,releaseProgram:u,releaseShaderCache:q,programs:p,dispose:V}}function ag(){let i=new WeakMap;function e(s){let c=i.get(s);return c===void 0&&(c={},i.set(s,c)),c}function t(s){i.delete(s)}function n(s,c,o){i.get(s)[c]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function og(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function c(v,_,x,S,b,y){let f=i[e];return f===void 0?(f={id:v.id,object:v,geometry:_,material:x,groupOrder:S,renderOrder:v.renderOrder,z:b,group:y},i[e]=f):(f.id=v.id,f.object=v,f.geometry=_,f.material=x,f.groupOrder=S,f.renderOrder=v.renderOrder,f.z=b,f.group=y),e++,f}function o(v,_,x,S,b,y){const f=c(v,_,x,S,b,y);x.transmission>0?n.push(f):x.transparent===!0?r.push(f):t.push(f)}function d(v,_,x,S,b,y){const f=c(v,_,x,S,b,y);x.transmission>0?n.unshift(f):x.transparent===!0?r.unshift(f):t.unshift(f)}function p(v,_){t.length>1&&t.sort(v||og),n.length>1&&n.sort(_||Fl),r.length>1&&r.sort(_||Fl)}function g(){for(let v=e,_=i.length;v<_;v++){const x=i[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:d,finish:g,sort:p}}function lg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let c;return s===void 0?(c=new zl,i.set(n,[c])):r>=s.length?(c=new zl,s.push(c)):c=s[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new yt};break;case"SpotLight":t={position:new X,direction:new X,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function ug(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fg=0;function dg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hg(i,e){const t=new cg,n=ug(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)r.probe.push(new X);const s=new X,c=new Ot,o=new Ot;function d(g,v){let _=0,x=0,S=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let b=0,y=0,f=0,A=0,C=0,E=0,D=0,u=0,q=0,V=0;g.sort(dg);const P=v===!0?Math.PI:1;for(let Z=0,W=g.length;Z<W;Z++){const B=g[Z],Y=B.color,re=B.intensity,ue=B.distance,ge=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=Y.r*re*P,x+=Y.g*re*P,S+=Y.b*re*P;else if(B.isLightProbe)for(let le=0;le<9;le++)r.probe[le].addScaledVector(B.sh.coefficients[le],re);else if(B.isDirectionalLight){const le=t.get(B);if(le.color.copy(B.color).multiplyScalar(B.intensity*P),B.castShadow){const be=B.shadow,ye=n.get(B);ye.shadowBias=be.bias,ye.shadowNormalBias=be.normalBias,ye.shadowRadius=be.radius,ye.shadowMapSize=be.mapSize,r.directionalShadow[b]=ye,r.directionalShadowMap[b]=ge,r.directionalShadowMatrix[b]=B.shadow.matrix,E++}r.directional[b]=le,b++}else if(B.isSpotLight){const le=t.get(B);le.position.setFromMatrixPosition(B.matrixWorld),le.color.copy(Y).multiplyScalar(re*P),le.distance=ue,le.coneCos=Math.cos(B.angle),le.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),le.decay=B.decay,r.spot[f]=le;const be=B.shadow;if(B.map&&(r.spotLightMap[q]=B.map,q++,be.updateMatrices(B),B.castShadow&&V++),r.spotLightMatrix[f]=be.matrix,B.castShadow){const ye=n.get(B);ye.shadowBias=be.bias,ye.shadowNormalBias=be.normalBias,ye.shadowRadius=be.radius,ye.shadowMapSize=be.mapSize,r.spotShadow[f]=ye,r.spotShadowMap[f]=ge,u++}f++}else if(B.isRectAreaLight){const le=t.get(B);le.color.copy(Y).multiplyScalar(re),le.halfWidth.set(B.width*.5,0,0),le.halfHeight.set(0,B.height*.5,0),r.rectArea[A]=le,A++}else if(B.isPointLight){const le=t.get(B);if(le.color.copy(B.color).multiplyScalar(B.intensity*P),le.distance=B.distance,le.decay=B.decay,B.castShadow){const be=B.shadow,ye=n.get(B);ye.shadowBias=be.bias,ye.shadowNormalBias=be.normalBias,ye.shadowRadius=be.radius,ye.shadowMapSize=be.mapSize,ye.shadowCameraNear=be.camera.near,ye.shadowCameraFar=be.camera.far,r.pointShadow[y]=ye,r.pointShadowMap[y]=ge,r.pointShadowMatrix[y]=B.shadow.matrix,D++}r.point[y]=le,y++}else if(B.isHemisphereLight){const le=t.get(B);le.skyColor.copy(B.color).multiplyScalar(re*P),le.groundColor.copy(B.groundColor).multiplyScalar(re*P),r.hemi[C]=le,C++}}A>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=S;const U=r.hash;(U.directionalLength!==b||U.pointLength!==y||U.spotLength!==f||U.rectAreaLength!==A||U.hemiLength!==C||U.numDirectionalShadows!==E||U.numPointShadows!==D||U.numSpotShadows!==u||U.numSpotMaps!==q)&&(r.directional.length=b,r.spot.length=f,r.rectArea.length=A,r.point.length=y,r.hemi.length=C,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=u,r.spotShadowMap.length=u,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=u+q-V,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=V,U.directionalLength=b,U.pointLength=y,U.spotLength=f,U.rectAreaLength=A,U.hemiLength=C,U.numDirectionalShadows=E,U.numPointShadows=D,U.numSpotShadows=u,U.numSpotMaps=q,r.version=fg++)}function p(g,v){let _=0,x=0,S=0,b=0,y=0;const f=v.matrixWorldInverse;for(let A=0,C=g.length;A<C;A++){const E=g[A];if(E.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),_++}else if(E.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),S++}else if(E.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(f),o.identity(),c.copy(E.matrixWorld),c.premultiply(f),o.extractRotation(c),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),b++}else if(E.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(f),x++}else if(E.isHemisphereLight){const D=r.hemi[y];D.direction.setFromMatrixPosition(E.matrixWorld),D.direction.transformDirection(f),y++}}}return{setup:d,setupView:p,state:r}}function kl(i,e){const t=new hg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function c(v){n.push(v)}function o(v){r.push(v)}function d(v){t.setup(n,v)}function p(v){t.setupView(n,v)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:d,setupLightsView:p,pushLight:c,pushShadow:o}}function pg(i,e){let t=new WeakMap;function n(s,c=0){const o=t.get(s);let d;return o===void 0?(d=new kl(i,e),t.set(s,[d])):c>=o.length?(d=new kl(i,e),o.push(d)):d=o[c],d}function r(){t=new WeakMap}return{get:n,dispose:r}}class mg extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gg extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xg(i,e,t){let n=new Qa;const r=new ft,s=new ft,c=new Dt,o=new mg({depthPacking:Mf}),d=new gg,p={},g=t.maxTextureSize,v={[gi]:cn,[cn]:gi,[ri]:ri},_=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:vg,fragmentShader:_g}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const S=new Dn;S.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ai(S,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac,this.render=function(E,D,u){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||E.length===0)return;const q=i.getRenderTarget(),V=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(mi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let Z=0,W=E.length;Z<W;Z++){const B=E[Z],Y=B.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const re=Y.getFrameExtents();if(r.multiply(re),s.copy(Y.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(s.x=Math.floor(g/re.x),r.x=s.x*re.x,Y.mapSize.x=s.x),r.y>g&&(s.y=Math.floor(g/re.y),r.y=s.y*re.y,Y.mapSize.y=s.y)),Y.map===null){const ge=this.type!==Or?{minFilter:nn,magFilter:nn}:{};Y.map=new Fi(r.x,r.y,ge),Y.map.texture.name=B.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ue=Y.getViewportCount();for(let ge=0;ge<ue;ge++){const le=Y.getViewport(ge);c.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),U.viewport(c),Y.updateMatrices(B,ge),n=Y.getFrustum(),C(D,u,Y.camera,B,this.type)}Y.isPointLightShadow!==!0&&this.type===Or&&f(Y,u),Y.needsUpdate=!1}y.needsUpdate=!1,i.setRenderTarget(q,V,P)};function f(E,D){const u=e.update(b);_.defines.VSM_SAMPLES!==E.blurSamples&&(_.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fi(r.x,r.y)),_.uniforms.shadow_pass.value=E.map.texture,_.uniforms.resolution.value=E.mapSize,_.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(D,null,u,_,b,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value=E.mapSize,x.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(D,null,u,x,b,null)}function A(E,D,u,q){let V=null;const P=u.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)V=P;else if(V=u.isPointLight===!0?d:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const U=V.uuid,Z=D.uuid;let W=p[U];W===void 0&&(W={},p[U]=W);let B=W[Z];B===void 0&&(B=V.clone(),W[Z]=B),V=B}if(V.visible=D.visible,V.wireframe=D.wireframe,q===Or?V.side=D.shadowSide!==null?D.shadowSide:D.side:V.side=D.shadowSide!==null?D.shadowSide:v[D.side],V.alphaMap=D.alphaMap,V.alphaTest=D.alphaTest,V.map=D.map,V.clipShadows=D.clipShadows,V.clippingPlanes=D.clippingPlanes,V.clipIntersection=D.clipIntersection,V.displacementMap=D.displacementMap,V.displacementScale=D.displacementScale,V.displacementBias=D.displacementBias,V.wireframeLinewidth=D.wireframeLinewidth,V.linewidth=D.linewidth,u.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const U=i.properties.get(V);U.light=u}return V}function C(E,D,u,q,V){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&V===Or)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,E.matrixWorld);const Z=e.update(E),W=E.material;if(Array.isArray(W)){const B=Z.groups;for(let Y=0,re=B.length;Y<re;Y++){const ue=B[Y],ge=W[ue.materialIndex];if(ge&&ge.visible){const le=A(E,ge,q,V);i.renderBufferDirect(u,null,Z,le,E,ue)}}}else if(W.visible){const B=A(E,W,q,V);i.renderBufferDirect(u,null,Z,B,E,null)}}const U=E.children;for(let Z=0,W=U.length;Z<W;Z++)C(U[Z],D,u,q,V)}}function yg(i,e,t){const n=t.isWebGL2;function r(){let G=!1;const ce=new Dt;let Me=null;const Re=new Dt(0,0,0,0);return{setMask:function(ke){Me!==ke&&!G&&(i.colorMask(ke,ke,ke,ke),Me=ke)},setLocked:function(ke){G=ke},setClear:function(ke,Tt,Ct,zt,un){un===!0&&(ke*=zt,Tt*=zt,Ct*=zt),ce.set(ke,Tt,Ct,zt),Re.equals(ce)===!1&&(i.clearColor(ke,Tt,Ct,zt),Re.copy(ce))},reset:function(){G=!1,Me=null,Re.set(-1,0,0,0)}}}function s(){let G=!1,ce=null,Me=null,Re=null;return{setTest:function(ke){ke?ne(2929):Qe(2929)},setMask:function(ke){ce!==ke&&!G&&(i.depthMask(ke),ce=ke)},setFunc:function(ke){if(Me!==ke){switch(ke){case Wu:i.depthFunc(512);break;case qu:i.depthFunc(519);break;case ju:i.depthFunc(513);break;case za:i.depthFunc(515);break;case Xu:i.depthFunc(514);break;case $u:i.depthFunc(518);break;case Yu:i.depthFunc(516);break;case Ku:i.depthFunc(517);break;default:i.depthFunc(515)}Me=ke}},setLocked:function(ke){G=ke},setClear:function(ke){Re!==ke&&(i.clearDepth(ke),Re=ke)},reset:function(){G=!1,ce=null,Me=null,Re=null}}}function c(){let G=!1,ce=null,Me=null,Re=null,ke=null,Tt=null,Ct=null,zt=null,un=null;return{setTest:function(It){G||(It?ne(2960):Qe(2960))},setMask:function(It){ce!==It&&!G&&(i.stencilMask(It),ce=It)},setFunc:function(It,an,Tn){(Me!==It||Re!==an||ke!==Tn)&&(i.stencilFunc(It,an,Tn),Me=It,Re=an,ke=Tn)},setOp:function(It,an,Tn){(Tt!==It||Ct!==an||zt!==Tn)&&(i.stencilOp(It,an,Tn),Tt=It,Ct=an,zt=Tn)},setLocked:function(It){G=It},setClear:function(It){un!==It&&(i.clearStencil(It),un=It)},reset:function(){G=!1,ce=null,Me=null,Re=null,ke=null,Tt=null,Ct=null,zt=null,un=null}}}const o=new r,d=new s,p=new c,g=new WeakMap,v=new WeakMap;let _={},x={},S=new WeakMap,b=[],y=null,f=!1,A=null,C=null,E=null,D=null,u=null,q=null,V=null,P=!1,U=null,Z=null,W=null,B=null,Y=null;const re=i.getParameter(35661);let ue=!1,ge=0;const le=i.getParameter(7938);le.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(le)[1]),ue=ge>=1):le.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ue=ge>=2);let be=null,ye={};const He=i.getParameter(3088),Te=i.getParameter(2978),se=new Dt().fromArray(He),me=new Dt().fromArray(Te);function Ae(G,ce,Me){const Re=new Uint8Array(4),ke=i.createTexture();i.bindTexture(G,ke),i.texParameteri(G,10241,9728),i.texParameteri(G,10240,9728);for(let Tt=0;Tt<Me;Tt++)i.texImage2D(ce+Tt,0,6408,1,1,0,6408,5121,Re);return ke}const Ne={};Ne[3553]=Ae(3553,3553,1),Ne[34067]=Ae(34067,34069,6),o.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ne(2929),d.setFunc(za),Pe(!1),ht(wo),ne(2884),nt(mi);function ne(G){_[G]!==!0&&(i.enable(G),_[G]=!0)}function Qe(G){_[G]!==!1&&(i.disable(G),_[G]=!1)}function Ge(G,ce){return x[G]!==ce?(i.bindFramebuffer(G,ce),x[G]=ce,n&&(G===36009&&(x[36160]=ce),G===36160&&(x[36009]=ce)),!0):!1}function Ee(G,ce){let Me=b,Re=!1;if(G)if(Me=S.get(ce),Me===void 0&&(Me=[],S.set(ce,Me)),G.isWebGLMultipleRenderTargets){const ke=G.texture;if(Me.length!==ke.length||Me[0]!==36064){for(let Tt=0,Ct=ke.length;Tt<Ct;Tt++)Me[Tt]=36064+Tt;Me.length=ke.length,Re=!0}}else Me[0]!==36064&&(Me[0]=36064,Re=!0);else Me[0]!==1029&&(Me[0]=1029,Re=!0);Re&&(t.isWebGL2?i.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function Ye(G){return y!==G?(i.useProgram(G),y=G,!0):!1}const gt={[lr]:32774,[Iu]:32778,[Nu]:32779};if(n)gt[Lo]=32775,gt[Po]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(gt[Lo]=G.MIN_EXT,gt[Po]=G.MAX_EXT)}const Fe={[Uu]:0,[Ou]:1,[Fu]:768,[oc]:770,[Vu]:776,[Hu]:774,[ku]:772,[zu]:769,[lc]:771,[Gu]:775,[Bu]:773};function nt(G,ce,Me,Re,ke,Tt,Ct,zt){if(G===mi){f===!0&&(Qe(3042),f=!1);return}if(f===!1&&(ne(3042),f=!0),G!==Ru){if(G!==A||zt!==P){if((C!==lr||u!==lr)&&(i.blendEquation(32774),C=lr,u=lr),zt)switch(G){case ur:i.blendFuncSeparate(1,771,1,771);break;case Eo:i.blendFunc(1,1);break;case Ao:i.blendFuncSeparate(0,769,0,1);break;case Co:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ur:i.blendFuncSeparate(770,771,1,771);break;case Eo:i.blendFunc(770,1);break;case Ao:i.blendFuncSeparate(0,769,0,1);break;case Co:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}E=null,D=null,q=null,V=null,A=G,P=zt}return}ke=ke||ce,Tt=Tt||Me,Ct=Ct||Re,(ce!==C||ke!==u)&&(i.blendEquationSeparate(gt[ce],gt[ke]),C=ce,u=ke),(Me!==E||Re!==D||Tt!==q||Ct!==V)&&(i.blendFuncSeparate(Fe[Me],Fe[Re],Fe[Tt],Fe[Ct]),E=Me,D=Re,q=Tt,V=Ct),A=G,P=!1}function St(G,ce){G.side===ri?Qe(2884):ne(2884);let Me=G.side===cn;ce&&(Me=!Me),Pe(Me),G.blending===ur&&G.transparent===!1?nt(mi):nt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),o.setMask(G.colorWrite);const Re=G.stencilWrite;p.setTest(Re),Re&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),mt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ne(32926):Qe(32926)}function Pe(G){U!==G&&(G?i.frontFace(2304):i.frontFace(2305),U=G)}function ht(G){G!==Lu?(ne(2884),G!==Z&&(G===wo?i.cullFace(1029):G===Pu?i.cullFace(1028):i.cullFace(1032))):Qe(2884),Z=G}function Rt(G){G!==W&&(ue&&i.lineWidth(G),W=G)}function mt(G,ce,Me){G?(ne(32823),(B!==ce||Y!==Me)&&(i.polygonOffset(ce,Me),B=ce,Y=Me)):Qe(32823)}function Mt(G){G?ne(3089):Qe(3089)}function Vt(G){G===void 0&&(G=33984+re-1),be!==G&&(i.activeTexture(G),be=G)}function N(G,ce,Me){Me===void 0&&(be===null?Me=33984+re-1:Me=be);let Re=ye[Me];Re===void 0&&(Re={type:void 0,texture:void 0},ye[Me]=Re),(Re.type!==G||Re.texture!==ce)&&(be!==Me&&(i.activeTexture(Me),be=Me),i.bindTexture(G,ce||Ne[G]),Re.type=G,Re.texture=ce)}function R(){const G=ye[be];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(G){se.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),se.copy(G))}function Be(G){me.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),me.copy(G))}function We(G,ce){let Me=v.get(ce);Me===void 0&&(Me=new WeakMap,v.set(ce,Me));let Re=Me.get(G);Re===void 0&&(Re=i.getUniformBlockIndex(ce,G.name),Me.set(G,Re))}function Xe(G,ce){const Re=v.get(ce).get(G);g.get(ce)!==Re&&(i.uniformBlockBinding(ce,Re,G.__bindingPointIndex),g.set(ce,Re))}function At(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},be=null,ye={},x={},S=new WeakMap,b=[],y=null,f=!1,A=null,C=null,E=null,D=null,u=null,q=null,V=null,P=!1,U=null,Z=null,W=null,B=null,Y=null,se.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),d.reset(),p.reset()}return{buffers:{color:o,depth:d,stencil:p},enable:ne,disable:Qe,bindFramebuffer:Ge,drawBuffers:Ee,useProgram:Ye,setBlending:nt,setMaterial:St,setFlipSided:Pe,setCullFace:ht,setLineWidth:Rt,setPolygonOffset:mt,setScissorTest:Mt,activeTexture:Vt,bindTexture:N,unbindTexture:R,compressedTexImage2D:ie,compressedTexImage3D:xe,texImage2D:Ue,texImage3D:ze,updateUBOMapping:We,uniformBlockBinding:Xe,texStorage2D:te,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Le,compressedTexSubImage2D:k,compressedTexSubImage3D:pe,scissor:Oe,viewport:Be,reset:At}}function Sg(i,e,t,n,r,s,c){const o=r.isWebGL2,d=r.maxTextures,p=r.maxCubemapSize,g=r.maxTextureSize,v=r.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let b;const y=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,R){return f?new OffscreenCanvas(N,R):Ls("canvas")}function C(N,R,ie,xe){let Se=1;if((N.width>xe||N.height>xe)&&(Se=xe/Math.max(N.width,N.height)),Se<1||R===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Le=R?Af:Math.floor,k=Le(Se*N.width),pe=Le(Se*N.height);b===void 0&&(b=A(k,pe));const te=ie?A(k,pe):b;return te.width=k,te.height=pe,te.getContext("2d").drawImage(N,0,0,k,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+k+"x"+pe+")."),te}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function E(N){return il(N.width)&&il(N.height)}function D(N){return o?!1:N.wrapS!==Bn||N.wrapT!==Bn||N.minFilter!==nn&&N.minFilter!==Ln}function u(N,R){return N.generateMipmaps&&R&&N.minFilter!==nn&&N.minFilter!==Ln}function q(N){i.generateMipmap(N)}function V(N,R,ie,xe,Se=!1){if(o===!1)return R;if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Le=R;return R===6403&&(ie===5126&&(Le=33326),ie===5131&&(Le=33325),ie===5121&&(Le=33321)),R===33319&&(ie===5126&&(Le=33328),ie===5131&&(Le=33327),ie===5121&&(Le=33323)),R===6408&&(ie===5126&&(Le=34836),ie===5131&&(Le=34842),ie===5121&&(Le=xe===Lt&&Se===!1?35907:32856),ie===32819&&(Le=32854),ie===32820&&(Le=32855)),(Le===33325||Le===33326||Le===33327||Le===33328||Le===34842||Le===34836)&&e.get("EXT_color_buffer_float"),Le}function P(N,R,ie){return u(N,ie)===!0||N.isFramebufferTexture&&N.minFilter!==nn&&N.minFilter!==Ln?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function U(N){return N===nn||N===Do||N===Qs?9728:9729}function Z(N){const R=N.target;R.removeEventListener("dispose",Z),B(R),R.isVideoTexture&&S.delete(R)}function W(N){const R=N.target;R.removeEventListener("dispose",W),re(R)}function B(N){const R=n.get(N);if(R.__webglInit===void 0)return;const ie=N.source,xe=y.get(ie);if(xe){const Se=xe[R.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&Y(N),Object.keys(xe).length===0&&y.delete(ie)}n.remove(N)}function Y(N){const R=n.get(N);i.deleteTexture(R.__webglTexture);const ie=N.source,xe=y.get(ie);delete xe[R.__cacheKey],c.memory.textures--}function re(N){const R=N.texture,ie=n.get(N),xe=n.get(R);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),c.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)i.deleteFramebuffer(ie.__webglFramebuffer[Se]),ie.__webglDepthbuffer&&i.deleteRenderbuffer(ie.__webglDepthbuffer[Se]);else{if(i.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&i.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let Se=0;Se<ie.__webglColorRenderbuffer.length;Se++)ie.__webglColorRenderbuffer[Se]&&i.deleteRenderbuffer(ie.__webglColorRenderbuffer[Se]);ie.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Se=0,Le=R.length;Se<Le;Se++){const k=n.get(R[Se]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),c.memory.textures--),n.remove(R[Se])}n.remove(R),n.remove(N)}let ue=0;function ge(){ue=0}function le(){const N=ue;return N>=d&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+d),ue+=1,N}function be(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.encoding),R.join()}function ye(N,R){const ie=n.get(N);if(N.isVideoTexture&&Mt(N),N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){const xe=N.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(ie,N,R);return}}t.bindTexture(3553,ie.__webglTexture,33984+R)}function He(N,R){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){Qe(ie,N,R);return}t.bindTexture(35866,ie.__webglTexture,33984+R)}function Te(N,R){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){Qe(ie,N,R);return}t.bindTexture(32879,ie.__webglTexture,33984+R)}function se(N,R){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){Ge(ie,N,R);return}t.bindTexture(34067,ie.__webglTexture,33984+R)}const me={[Ha]:10497,[Bn]:33071,[Ga]:33648},Ae={[nn]:9728,[Do]:9984,[Qs]:9986,[Ln]:9729,[sf]:9985,[zr]:9987};function Ne(N,R,ie){if(ie?(i.texParameteri(N,10242,me[R.wrapS]),i.texParameteri(N,10243,me[R.wrapT]),(N===32879||N===35866)&&i.texParameteri(N,32882,me[R.wrapR]),i.texParameteri(N,10240,Ae[R.magFilter]),i.texParameteri(N,10241,Ae[R.minFilter])):(i.texParameteri(N,10242,33071),i.texParameteri(N,10243,33071),(N===32879||N===35866)&&i.texParameteri(N,32882,33071),(R.wrapS!==Bn||R.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(N,10240,U(R.magFilter)),i.texParameteri(N,10241,U(R.minFilter)),R.minFilter!==nn&&R.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===nn||R.minFilter!==Qs&&R.minFilter!==zr||R.type===Ii&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===kr&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(N,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function ne(N,R){let ie=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",Z));const xe=R.source;let Se=y.get(xe);Se===void 0&&(Se={},y.set(xe,Se));const Le=be(R);if(Le!==N.__cacheKey){Se[Le]===void 0&&(Se[Le]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),Se[Le].usedTimes++;const k=Se[N.__cacheKey];k!==void 0&&(Se[N.__cacheKey].usedTimes--,k.usedTimes===0&&Y(R)),N.__cacheKey=Le,N.__webglTexture=Se[Le].texture}return ie}function Qe(N,R,ie){let xe=3553;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(xe=35866),R.isData3DTexture&&(xe=32879);const Se=ne(N,R),Le=R.source;t.bindTexture(xe,N.__webglTexture,33984+ie);const k=n.get(Le);if(Le.version!==k.__version||Se===!0){t.activeTexture(33984+ie),i.pixelStorei(37440,R.flipY),i.pixelStorei(37441,R.premultiplyAlpha),i.pixelStorei(3317,R.unpackAlignment),i.pixelStorei(37443,0);const pe=D(R)&&E(R.image)===!1;let te=C(R.image,pe,!1,g);te=Vt(R,te);const De=E(te)||o,Ue=s.convert(R.format,R.encoding);let ze=s.convert(R.type),Oe=V(R.internalFormat,Ue,ze,R.encoding,R.isVideoTexture);Ne(xe,R,De);let Be;const We=R.mipmaps,Xe=o&&R.isVideoTexture!==!0,At=k.__version===void 0||Se===!0,G=P(R,te,De);if(R.isDepthTexture)Oe=6402,o?R.type===Ii?Oe=36012:R.type===Ri?Oe=33190:R.type===fr?Oe=35056:Oe=33189:R.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Ni&&Oe===6402&&R.type!==fc&&R.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Ri,ze=s.convert(R.type)),R.format===mr&&Oe===6402&&(Oe=34041,R.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=fr,ze=s.convert(R.type))),At&&(Xe?t.texStorage2D(3553,1,Oe,te.width,te.height):t.texImage2D(3553,0,Oe,te.width,te.height,0,Ue,ze,null));else if(R.isDataTexture)if(We.length>0&&De){Xe&&At&&t.texStorage2D(3553,G,Oe,We[0].width,We[0].height);for(let ce=0,Me=We.length;ce<Me;ce++)Be=We[ce],Xe?t.texSubImage2D(3553,ce,0,0,Be.width,Be.height,Ue,ze,Be.data):t.texImage2D(3553,ce,Oe,Be.width,Be.height,0,Ue,ze,Be.data);R.generateMipmaps=!1}else Xe?(At&&t.texStorage2D(3553,G,Oe,te.width,te.height),t.texSubImage2D(3553,0,0,0,te.width,te.height,Ue,ze,te.data)):t.texImage2D(3553,0,Oe,te.width,te.height,0,Ue,ze,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Xe&&At&&t.texStorage3D(35866,G,Oe,We[0].width,We[0].height,te.depth);for(let ce=0,Me=We.length;ce<Me;ce++)Be=We[ce],R.format!==Hn?Ue!==null?Xe?t.compressedTexSubImage3D(35866,ce,0,0,0,Be.width,Be.height,te.depth,Ue,Be.data,0,0):t.compressedTexImage3D(35866,ce,Oe,Be.width,Be.height,te.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,ce,0,0,0,Be.width,Be.height,te.depth,Ue,ze,Be.data):t.texImage3D(35866,ce,Oe,Be.width,Be.height,te.depth,0,Ue,ze,Be.data)}else{Xe&&At&&t.texStorage2D(3553,G,Oe,We[0].width,We[0].height);for(let ce=0,Me=We.length;ce<Me;ce++)Be=We[ce],R.format!==Hn?Ue!==null?Xe?t.compressedTexSubImage2D(3553,ce,0,0,Be.width,Be.height,Ue,Be.data):t.compressedTexImage2D(3553,ce,Oe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,ce,0,0,Be.width,Be.height,Ue,ze,Be.data):t.texImage2D(3553,ce,Oe,Be.width,Be.height,0,Ue,ze,Be.data)}else if(R.isDataArrayTexture)Xe?(At&&t.texStorage3D(35866,G,Oe,te.width,te.height,te.depth),t.texSubImage3D(35866,0,0,0,0,te.width,te.height,te.depth,Ue,ze,te.data)):t.texImage3D(35866,0,Oe,te.width,te.height,te.depth,0,Ue,ze,te.data);else if(R.isData3DTexture)Xe?(At&&t.texStorage3D(32879,G,Oe,te.width,te.height,te.depth),t.texSubImage3D(32879,0,0,0,0,te.width,te.height,te.depth,Ue,ze,te.data)):t.texImage3D(32879,0,Oe,te.width,te.height,te.depth,0,Ue,ze,te.data);else if(R.isFramebufferTexture){if(At)if(Xe)t.texStorage2D(3553,G,Oe,te.width,te.height);else{let ce=te.width,Me=te.height;for(let Re=0;Re<G;Re++)t.texImage2D(3553,Re,Oe,ce,Me,0,Ue,ze,null),ce>>=1,Me>>=1}}else if(We.length>0&&De){Xe&&At&&t.texStorage2D(3553,G,Oe,We[0].width,We[0].height);for(let ce=0,Me=We.length;ce<Me;ce++)Be=We[ce],Xe?t.texSubImage2D(3553,ce,0,0,Ue,ze,Be):t.texImage2D(3553,ce,Oe,Ue,ze,Be);R.generateMipmaps=!1}else Xe?(At&&t.texStorage2D(3553,G,Oe,te.width,te.height),t.texSubImage2D(3553,0,0,0,Ue,ze,te)):t.texImage2D(3553,0,Oe,Ue,ze,te);u(R,De)&&q(xe),k.__version=Le.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Ge(N,R,ie){if(R.image.length!==6)return;const xe=ne(N,R),Se=R.source;t.bindTexture(34067,N.__webglTexture,33984+ie);const Le=n.get(Se);if(Se.version!==Le.__version||xe===!0){t.activeTexture(33984+ie),i.pixelStorei(37440,R.flipY),i.pixelStorei(37441,R.premultiplyAlpha),i.pixelStorei(3317,R.unpackAlignment),i.pixelStorei(37443,0);const k=R.isCompressedTexture||R.image[0].isCompressedTexture,pe=R.image[0]&&R.image[0].isDataTexture,te=[];for(let ce=0;ce<6;ce++)!k&&!pe?te[ce]=C(R.image[ce],!1,!0,p):te[ce]=pe?R.image[ce].image:R.image[ce],te[ce]=Vt(R,te[ce]);const De=te[0],Ue=E(De)||o,ze=s.convert(R.format,R.encoding),Oe=s.convert(R.type),Be=V(R.internalFormat,ze,Oe,R.encoding),We=o&&R.isVideoTexture!==!0,Xe=Le.__version===void 0||xe===!0;let At=P(R,De,Ue);Ne(34067,R,Ue);let G;if(k){We&&Xe&&t.texStorage2D(34067,At,Be,De.width,De.height);for(let ce=0;ce<6;ce++){G=te[ce].mipmaps;for(let Me=0;Me<G.length;Me++){const Re=G[Me];R.format!==Hn?ze!==null?We?t.compressedTexSubImage2D(34069+ce,Me,0,0,Re.width,Re.height,ze,Re.data):t.compressedTexImage2D(34069+ce,Me,Be,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+ce,Me,0,0,Re.width,Re.height,ze,Oe,Re.data):t.texImage2D(34069+ce,Me,Be,Re.width,Re.height,0,ze,Oe,Re.data)}}}else{G=R.mipmaps,We&&Xe&&(G.length>0&&At++,t.texStorage2D(34067,At,Be,te[0].width,te[0].height));for(let ce=0;ce<6;ce++)if(pe){We?t.texSubImage2D(34069+ce,0,0,0,te[ce].width,te[ce].height,ze,Oe,te[ce].data):t.texImage2D(34069+ce,0,Be,te[ce].width,te[ce].height,0,ze,Oe,te[ce].data);for(let Me=0;Me<G.length;Me++){const ke=G[Me].image[ce].image;We?t.texSubImage2D(34069+ce,Me+1,0,0,ke.width,ke.height,ze,Oe,ke.data):t.texImage2D(34069+ce,Me+1,Be,ke.width,ke.height,0,ze,Oe,ke.data)}}else{We?t.texSubImage2D(34069+ce,0,0,0,ze,Oe,te[ce]):t.texImage2D(34069+ce,0,Be,ze,Oe,te[ce]);for(let Me=0;Me<G.length;Me++){const Re=G[Me];We?t.texSubImage2D(34069+ce,Me+1,0,0,ze,Oe,Re.image[ce]):t.texImage2D(34069+ce,Me+1,Be,ze,Oe,Re.image[ce])}}}u(R,Ue)&&q(34067),Le.__version=Se.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Ee(N,R,ie,xe,Se){const Le=s.convert(ie.format,ie.encoding),k=s.convert(ie.type),pe=V(ie.internalFormat,Le,k,ie.encoding);n.get(R).__hasExternalTextures||(Se===32879||Se===35866?t.texImage3D(Se,0,pe,R.width,R.height,R.depth,0,Le,k,null):t.texImage2D(Se,0,pe,R.width,R.height,0,Le,k,null)),t.bindFramebuffer(36160,N),mt(R)?_.framebufferTexture2DMultisampleEXT(36160,xe,Se,n.get(ie).__webglTexture,0,Rt(R)):(Se===3553||Se>=34069&&Se<=34074)&&i.framebufferTexture2D(36160,xe,Se,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ye(N,R,ie){if(i.bindRenderbuffer(36161,N),R.depthBuffer&&!R.stencilBuffer){let xe=33189;if(ie||mt(R)){const Se=R.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Ii?xe=36012:Se.type===Ri&&(xe=33190));const Le=Rt(R);mt(R)?_.renderbufferStorageMultisampleEXT(36161,Le,xe,R.width,R.height):i.renderbufferStorageMultisample(36161,Le,xe,R.width,R.height)}else i.renderbufferStorage(36161,xe,R.width,R.height);i.framebufferRenderbuffer(36160,36096,36161,N)}else if(R.depthBuffer&&R.stencilBuffer){const xe=Rt(R);ie&&mt(R)===!1?i.renderbufferStorageMultisample(36161,xe,35056,R.width,R.height):mt(R)?_.renderbufferStorageMultisampleEXT(36161,xe,35056,R.width,R.height):i.renderbufferStorage(36161,34041,R.width,R.height),i.framebufferRenderbuffer(36160,33306,36161,N)}else{const xe=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Se=0;Se<xe.length;Se++){const Le=xe[Se],k=s.convert(Le.format,Le.encoding),pe=s.convert(Le.type),te=V(Le.internalFormat,k,pe,Le.encoding),De=Rt(R);ie&&mt(R)===!1?i.renderbufferStorageMultisample(36161,De,te,R.width,R.height):mt(R)?_.renderbufferStorageMultisampleEXT(36161,De,te,R.width,R.height):i.renderbufferStorage(36161,te,R.width,R.height)}}i.bindRenderbuffer(36161,null)}function gt(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ye(R.depthTexture,0);const xe=n.get(R.depthTexture).__webglTexture,Se=Rt(R);if(R.depthTexture.format===Ni)mt(R)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,xe,0,Se):i.framebufferTexture2D(36160,36096,3553,xe,0);else if(R.depthTexture.format===mr)mt(R)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,xe,0,Se):i.framebufferTexture2D(36160,33306,3553,xe,0);else throw new Error("Unknown depthTexture format")}function Fe(N){const R=n.get(N),ie=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");gt(R.__webglFramebuffer,N)}else if(ie){R.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(36160,R.__webglFramebuffer[xe]),R.__webglDepthbuffer[xe]=i.createRenderbuffer(),Ye(R.__webglDepthbuffer[xe],N,!1)}else t.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),Ye(R.__webglDepthbuffer,N,!1);t.bindFramebuffer(36160,null)}function nt(N,R,ie){const xe=n.get(N);R!==void 0&&Ee(xe.__webglFramebuffer,N,N.texture,36064,3553),ie!==void 0&&Fe(N)}function St(N){const R=N.texture,ie=n.get(N),xe=n.get(R);N.addEventListener("dispose",W),N.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=R.version,c.memory.textures++);const Se=N.isWebGLCubeRenderTarget===!0,Le=N.isWebGLMultipleRenderTargets===!0,k=E(N)||o;if(Se){ie.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)ie.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(ie.__webglFramebuffer=i.createFramebuffer(),Le)if(r.drawBuffers){const pe=N.texture;for(let te=0,De=pe.length;te<De;te++){const Ue=n.get(pe[te]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&mt(N)===!1){const pe=Le?R:[R];ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer);for(let te=0;te<pe.length;te++){const De=pe[te];ie.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(36161,ie.__webglColorRenderbuffer[te]);const Ue=s.convert(De.format,De.encoding),ze=s.convert(De.type),Oe=V(De.internalFormat,Ue,ze,De.encoding,N.isXRRenderTarget===!0),Be=Rt(N);i.renderbufferStorageMultisample(36161,Be,Oe,N.width,N.height),i.framebufferRenderbuffer(36160,36064+te,36161,ie.__webglColorRenderbuffer[te])}i.bindRenderbuffer(36161,null),N.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(ie.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(36160,null)}}if(Se){t.bindTexture(34067,xe.__webglTexture),Ne(34067,R,k);for(let pe=0;pe<6;pe++)Ee(ie.__webglFramebuffer[pe],N,R,36064,34069+pe);u(R,k)&&q(34067),t.unbindTexture()}else if(Le){const pe=N.texture;for(let te=0,De=pe.length;te<De;te++){const Ue=pe[te],ze=n.get(Ue);t.bindTexture(3553,ze.__webglTexture),Ne(3553,Ue,k),Ee(ie.__webglFramebuffer,N,Ue,36064+te,3553),u(Ue,k)&&q(3553)}t.unbindTexture()}else{let pe=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?pe=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,xe.__webglTexture),Ne(pe,R,k),Ee(ie.__webglFramebuffer,N,R,36064,pe),u(R,k)&&q(pe),t.unbindTexture()}N.depthBuffer&&Fe(N)}function Pe(N){const R=E(N)||o,ie=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let xe=0,Se=ie.length;xe<Se;xe++){const Le=ie[xe];if(u(Le,R)){const k=N.isWebGLCubeRenderTarget?34067:3553,pe=n.get(Le).__webglTexture;t.bindTexture(k,pe),q(k),t.unbindTexture()}}}function ht(N){if(o&&N.samples>0&&mt(N)===!1){const R=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ie=N.width,xe=N.height;let Se=16384;const Le=[],k=N.stencilBuffer?33306:36096,pe=n.get(N),te=N.isWebGLMultipleRenderTargets===!0;if(te)for(let De=0;De<R.length;De++)t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+De,36161,null),t.bindFramebuffer(36160,pe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+De,3553,null,0);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer);for(let De=0;De<R.length;De++){Le.push(36064+De),N.depthBuffer&&Le.push(k);const Ue=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ue===!1&&(N.depthBuffer&&(Se|=256),N.stencilBuffer&&(Se|=1024)),te&&i.framebufferRenderbuffer(36008,36064,36161,pe.__webglColorRenderbuffer[De]),Ue===!0&&(i.invalidateFramebuffer(36008,[k]),i.invalidateFramebuffer(36009,[k])),te){const ze=n.get(R[De]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,ze,0)}i.blitFramebuffer(0,0,ie,xe,0,0,ie,xe,Se,9728),x&&i.invalidateFramebuffer(36008,Le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),te)for(let De=0;De<R.length;De++){t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+De,36161,pe.__webglColorRenderbuffer[De]);const Ue=n.get(R[De]).__webglTexture;t.bindFramebuffer(36160,pe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+De,3553,Ue,0)}t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}}function Rt(N){return Math.min(v,N.samples)}function mt(N){const R=n.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Mt(N){const R=c.render.frame;S.get(N)!==R&&(S.set(N,R),N.update())}function Vt(N,R){const ie=N.encoding,xe=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Va||ie!==Oi&&(ie===Lt?o===!1?e.has("EXT_sRGB")===!0&&xe===Hn?(N.format=Va,N.minFilter=Ln,N.generateMipmaps=!1):R=pc.sRGBToLinear(R):(xe!==Hn||Se!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ie)),R}this.allocateTextureUnit=le,this.resetTextureUnits=ge,this.setTexture2D=ye,this.setTexture2DArray=He,this.setTexture3D=Te,this.setTextureCube=se,this.rebindTextures=nt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=mt}function Mg(i,e,t){const n=t.isWebGL2;function r(s,c=null){let o;if(s===Ui)return 5121;if(s===cf)return 32819;if(s===uf)return 32820;if(s===af)return 5120;if(s===of)return 5122;if(s===fc)return 5123;if(s===lf)return 5124;if(s===Ri)return 5125;if(s===Ii)return 5126;if(s===kr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ff)return 6406;if(s===Hn)return 6408;if(s===df)return 6409;if(s===hf)return 6410;if(s===Ni)return 6402;if(s===mr)return 34041;if(s===Va)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===pf)return 6403;if(s===mf)return 36244;if(s===gf)return 33319;if(s===vf)return 33320;if(s===_f)return 36249;if(s===ea||s===ta||s===na||s===ia)if(c===Lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ea)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ea)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ta)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===na)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ro||s===Io||s===No||s===Uo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ro)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Io)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===No)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oo||s===Fo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Oo)return c===Lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Fo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zo||s===ko||s===Bo||s===Ho||s===Go||s===Vo||s===Wo||s===qo||s===jo||s===Xo||s===$o||s===Yo||s===Ko||s===Zo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===zo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ko)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ho)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Go)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$o)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ko)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zo)return c===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ra)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ra)return c===Lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yf||s===Jo||s===Qo||s===el)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ra)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Jo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===el)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class bg extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tg={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,c=null;const o=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,n),f=this._getHandJoint(p,b);y!==null&&(f.matrix.fromArray(y.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=y.radius),f.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,S=.005;p.inputState.pinching&&_>x+S?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=x-S&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return o!==null&&(o.visible=r!==null),d!==null&&(d.visible=s!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wg extends Mn{constructor(e,t,n,r,s,c,o,d,p,g){if(g=g!==void 0?g:Ni,g!==Ni&&g!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===Ni&&(n=Ri),n===void 0&&g===mr&&(n=fr),super(null,r,s,c,o,d,g,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=d!==void 0?d:nn,this.flipY=!1,this.generateMipmaps=!1}}class Eg extends Bi{constructor(e,t){super();const n=this;let r=null,s=1,c=null,o="local-floor",d=1,p=null,g=null,v=null,_=null,x=null,S=null;const b=t.getContextAttributes();let y=null,f=null;const A=[],C=[],E=new Set,D=new Map,u=new Sn;u.layers.enable(1),u.viewport=new Dt;const q=new Sn;q.layers.enable(2),q.viewport=new Dt;const V=[u,q],P=new bg;P.layers.enable(1),P.layers.enable(2);let U=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let me=A[se];return me===void 0&&(me=new Ca,A[se]=me),me.getTargetRaySpace()},this.getControllerGrip=function(se){let me=A[se];return me===void 0&&(me=new Ca,A[se]=me),me.getGripSpace()},this.getHand=function(se){let me=A[se];return me===void 0&&(me=new Ca,A[se]=me),me.getHandSpace()};function W(se){const me=C.indexOf(se.inputSource);if(me===-1)return;const Ae=A[me];Ae!==void 0&&Ae.dispatchEvent({type:se.type,data:se.inputSource})}function B(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",Y);for(let se=0;se<A.length;se++){const me=C[se];me!==null&&(C[se]=null,A[se].disconnect(me))}U=null,Z=null,e.setRenderTarget(y),x=null,_=null,v=null,r=null,f=null,Te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",B),r.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const me={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:b.alpha,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:x}),f=new Fi(x.framebufferWidth,x.framebufferHeight,{format:Hn,type:Ui,encoding:e.outputEncoding,stencilBuffer:b.stencil})}else{let me=null,Ae=null,Ne=null;b.depth&&(Ne=b.stencil?35056:33190,me=b.stencil?mr:Ni,Ae=b.stencil?fr:Ri);const ne={colorFormat:32856,depthFormat:Ne,scaleFactor:s};v=new XRWebGLBinding(r,t),_=v.createProjectionLayer(ne),r.updateRenderState({layers:[_]}),f=new Fi(_.textureWidth,_.textureHeight,{format:Hn,type:Ui,depthTexture:new wg(_.textureWidth,_.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,encoding:e.outputEncoding,samples:b.antialias?4:0});const Qe=e.properties.get(f);Qe.__ignoreDepthValues=_.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(se){for(let me=0;me<se.removed.length;me++){const Ae=se.removed[me],Ne=C.indexOf(Ae);Ne>=0&&(C[Ne]=null,A[Ne].disconnect(Ae))}for(let me=0;me<se.added.length;me++){const Ae=se.added[me];let Ne=C.indexOf(Ae);if(Ne===-1){for(let Qe=0;Qe<A.length;Qe++)if(Qe>=C.length){C.push(Ae),Ne=Qe;break}else if(C[Qe]===null){C[Qe]=Ae,Ne=Qe;break}if(Ne===-1)break}const ne=A[Ne];ne&&ne.connect(Ae)}}const re=new X,ue=new X;function ge(se,me,Ae){re.setFromMatrixPosition(me.matrixWorld),ue.setFromMatrixPosition(Ae.matrixWorld);const Ne=re.distanceTo(ue),ne=me.projectionMatrix.elements,Qe=Ae.projectionMatrix.elements,Ge=ne[14]/(ne[10]-1),Ee=ne[14]/(ne[10]+1),Ye=(ne[9]+1)/ne[5],gt=(ne[9]-1)/ne[5],Fe=(ne[8]-1)/ne[0],nt=(Qe[8]+1)/Qe[0],St=Ge*Fe,Pe=Ge*nt,ht=Ne/(-Fe+nt),Rt=ht*-Fe;me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Rt),se.translateZ(ht),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const mt=Ge+ht,Mt=Ee+ht,Vt=St-Rt,N=Pe+(Ne-Rt),R=Ye*Ee/Mt*mt,ie=gt*Ee/Mt*mt;se.projectionMatrix.makePerspective(Vt,N,R,ie,mt,Mt),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function le(se,me){me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;P.near=q.near=u.near=se.near,P.far=q.far=u.far=se.far,(U!==P.near||Z!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,Z=P.far);const me=se.parent,Ae=P.cameras;le(P,me);for(let Ne=0;Ne<Ae.length;Ne++)le(Ae[Ne],me);Ae.length===2?ge(P,u,q):P.projectionMatrix.copy(u.projectionMatrix),be(se,P,me)};function be(se,me,Ae){Ae===null?se.matrix.copy(me.matrixWorld):(se.matrix.copy(Ae.matrixWorld),se.matrix.invert(),se.matrix.multiply(me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0);const Ne=se.children;for(let ne=0,Qe=Ne.length;ne<Qe;ne++)Ne[ne].updateMatrixWorld(!0);se.projectionMatrix.copy(me.projectionMatrix),se.projectionMatrixInverse.copy(me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Wa*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(se){d=se,_!==null&&(_.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.getPlanes=function(){return E};let ye=null;function He(se,me){if(g=me.getViewerPose(p||c),S=me,g!==null){const Ae=g.views;x!==null&&(e.setRenderTargetFramebuffer(f,x.framebuffer),e.setRenderTarget(f));let Ne=!1;Ae.length!==P.cameras.length&&(P.cameras.length=0,Ne=!0);for(let ne=0;ne<Ae.length;ne++){const Qe=Ae[ne];let Ge=null;if(x!==null)Ge=x.getViewport(Qe);else{const Ye=v.getViewSubImage(_,Qe);Ge=Ye.viewport,ne===0&&(e.setRenderTargetTextures(f,Ye.colorTexture,_.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(f))}let Ee=V[ne];Ee===void 0&&(Ee=new Sn,Ee.layers.enable(ne),Ee.viewport=new Dt,V[ne]=Ee),Ee.matrix.fromArray(Qe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Qe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),ne===0&&(P.matrix.copy(Ee.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ne===!0&&P.cameras.push(Ee)}}for(let Ae=0;Ae<A.length;Ae++){const Ne=C[Ae],ne=A[Ae];Ne!==null&&ne!==void 0&&ne.update(Ne,me,p||c)}if(ye&&ye(se,me),me.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:me.detectedPlanes});let Ae=null;for(const Ne of E)me.detectedPlanes.has(Ne)||(Ae===null&&(Ae=[]),Ae.push(Ne));if(Ae!==null)for(const Ne of Ae)E.delete(Ne),D.delete(Ne),n.dispatchEvent({type:"planeremoved",data:Ne});for(const Ne of me.detectedPlanes)if(!E.has(Ne))E.add(Ne),D.set(Ne,me.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Ne});else{const ne=D.get(Ne);Ne.lastChangedTime>ne&&(D.set(Ne,Ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Ne}))}}S=null}const Te=new Tc;Te.setAnimationLoop(He),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}function Ag(i,e){function t(y,f){y.matrixAutoUpdate===!0&&y.updateMatrix(),f.value.copy(y.matrix)}function n(y,f){f.color.getRGB(y.fogColor.value,Sc(i)),f.isFog?(y.fogNear.value=f.near,y.fogFar.value=f.far):f.isFogExp2&&(y.fogDensity.value=f.density)}function r(y,f,A,C,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(y,f):f.isMeshToonMaterial?(s(y,f),v(y,f)):f.isMeshPhongMaterial?(s(y,f),g(y,f)):f.isMeshStandardMaterial?(s(y,f),_(y,f),f.isMeshPhysicalMaterial&&x(y,f,E)):f.isMeshMatcapMaterial?(s(y,f),S(y,f)):f.isMeshDepthMaterial?s(y,f):f.isMeshDistanceMaterial?(s(y,f),b(y,f)):f.isMeshNormalMaterial?s(y,f):f.isLineBasicMaterial?(c(y,f),f.isLineDashedMaterial&&o(y,f)):f.isPointsMaterial?d(y,f,A,C):f.isSpriteMaterial?p(y,f):f.isShadowMaterial?(y.color.value.copy(f.color),y.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(y,f){y.opacity.value=f.opacity,f.color&&y.diffuse.value.copy(f.color),f.emissive&&y.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(y.map.value=f.map,t(f.map,y.mapTransform)),f.alphaMap&&(y.alphaMap.value=f.alphaMap,t(f.alphaMap,y.alphaMapTransform)),f.bumpMap&&(y.bumpMap.value=f.bumpMap,t(f.bumpMap,y.bumpMapTransform),y.bumpScale.value=f.bumpScale,f.side===cn&&(y.bumpScale.value*=-1)),f.normalMap&&(y.normalMap.value=f.normalMap,t(f.normalMap,y.normalMapTransform),y.normalScale.value.copy(f.normalScale),f.side===cn&&y.normalScale.value.negate()),f.displacementMap&&(y.displacementMap.value=f.displacementMap,t(f.displacementMap,y.displacementMapTransform),y.displacementScale.value=f.displacementScale,y.displacementBias.value=f.displacementBias),f.emissiveMap&&(y.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,y.emissiveMapTransform)),f.specularMap&&(y.specularMap.value=f.specularMap,t(f.specularMap,y.specularMapTransform)),f.alphaTest>0&&(y.alphaTest.value=f.alphaTest);const A=e.get(f).envMap;if(A&&(y.envMap.value=A,y.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=f.reflectivity,y.ior.value=f.ior,y.refractionRatio.value=f.refractionRatio),f.lightMap){y.lightMap.value=f.lightMap;const C=i.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=f.lightMapIntensity*C,t(f.lightMap,y.lightMapTransform)}f.aoMap&&(y.aoMap.value=f.aoMap,y.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,y.aoMapTransform))}function c(y,f){y.diffuse.value.copy(f.color),y.opacity.value=f.opacity,f.map&&(y.map.value=f.map,t(f.map,y.mapTransform))}function o(y,f){y.dashSize.value=f.dashSize,y.totalSize.value=f.dashSize+f.gapSize,y.scale.value=f.scale}function d(y,f,A,C){y.diffuse.value.copy(f.color),y.opacity.value=f.opacity,y.size.value=f.size*A,y.scale.value=C*.5,f.map&&(y.map.value=f.map,t(f.map,y.uvTransform)),f.alphaMap&&(y.alphaMap.value=f.alphaMap),f.alphaTest>0&&(y.alphaTest.value=f.alphaTest)}function p(y,f){y.diffuse.value.copy(f.color),y.opacity.value=f.opacity,y.rotation.value=f.rotation,f.map&&(y.map.value=f.map,t(f.map,y.mapTransform)),f.alphaMap&&(y.alphaMap.value=f.alphaMap),f.alphaTest>0&&(y.alphaTest.value=f.alphaTest)}function g(y,f){y.specular.value.copy(f.specular),y.shininess.value=Math.max(f.shininess,1e-4)}function v(y,f){f.gradientMap&&(y.gradientMap.value=f.gradientMap)}function _(y,f){y.metalness.value=f.metalness,f.metalnessMap&&(y.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,y.metalnessMapTransform)),y.roughness.value=f.roughness,f.roughnessMap&&(y.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,y.roughnessMapTransform)),e.get(f).envMap&&(y.envMapIntensity.value=f.envMapIntensity)}function x(y,f,A){y.ior.value=f.ior,f.sheen>0&&(y.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),y.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(y.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,y.sheenColorMapTransform)),f.sheenRoughnessMap&&(y.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,y.sheenRoughnessMapTransform))),f.clearcoat>0&&(y.clearcoat.value=f.clearcoat,y.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(y.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,y.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(y.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&y.clearcoatNormalScale.value.negate())),f.iridescence>0&&(y.iridescence.value=f.iridescence,y.iridescenceIOR.value=f.iridescenceIOR,y.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(y.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,y.iridescenceMapTransform)),f.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),f.transmission>0&&(y.transmission.value=f.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(y.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,y.transmissionMapTransform)),y.thickness.value=f.thickness,f.thicknessMap&&(y.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=f.attenuationDistance,y.attenuationColor.value.copy(f.attenuationColor)),y.specularIntensity.value=f.specularIntensity,y.specularColor.value.copy(f.specularColor),f.specularColorMap&&(y.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,y.specularColorMapTransform)),f.specularIntensityMap&&(y.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,f){f.matcap&&(y.matcap.value=f.matcap)}function b(y,f){const A=e.get(f).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Cg(i,e,t,n){let r={},s={},c=[];const o=t.isWebGL2?i.getParameter(35375):0;function d(A,C){const E=C.program;n.uniformBlockBinding(A,E)}function p(A,C){let E=r[A.id];E===void 0&&(S(A),E=g(A),r[A.id]=E,A.addEventListener("dispose",y));const D=C.program;n.updateUBOMapping(A,D);const u=e.render.frame;s[A.id]!==u&&(_(A),s[A.id]=u)}function g(A){const C=v();A.__bindingPointIndex=C;const E=i.createBuffer(),D=A.__size,u=A.usage;return i.bindBuffer(35345,E),i.bufferData(35345,D,u),i.bindBuffer(35345,null),i.bindBufferBase(35345,C,E),E}function v(){for(let A=0;A<o;A++)if(c.indexOf(A)===-1)return c.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const C=r[A.id],E=A.uniforms,D=A.__cache;i.bindBuffer(35345,C);for(let u=0,q=E.length;u<q;u++){const V=E[u];if(x(V,u,D)===!0){const P=V.__offset,U=Array.isArray(V.value)?V.value:[V.value];let Z=0;for(let W=0;W<U.length;W++){const B=U[W],Y=b(B);typeof B=="number"?(V.__data[0]=B,i.bufferSubData(35345,P+Z,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=B.elements[0],V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=B.elements[0],V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=B.elements[0]):(B.toArray(V.__data,Z),Z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,P,V.__data)}}i.bindBuffer(35345,null)}function x(A,C,E){const D=A.value;if(E[C]===void 0){if(typeof D=="number")E[C]=D;else{const u=Array.isArray(D)?D:[D],q=[];for(let V=0;V<u.length;V++)q.push(u[V].clone());E[C]=q}return!0}else if(typeof D=="number"){if(E[C]!==D)return E[C]=D,!0}else{const u=Array.isArray(E[C])?E[C]:[E[C]],q=Array.isArray(D)?D:[D];for(let V=0;V<u.length;V++){const P=u[V];if(P.equals(q[V])===!1)return P.copy(q[V]),!0}}return!1}function S(A){const C=A.uniforms;let E=0;const D=16;let u=0;for(let q=0,V=C.length;q<V;q++){const P=C[q],U={boundary:0,storage:0},Z=Array.isArray(P.value)?P.value:[P.value];for(let W=0,B=Z.length;W<B;W++){const Y=Z[W],re=b(Y);U.boundary+=re.boundary,U.storage+=re.storage}if(P.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,q>0){u=E%D;const W=D-u;u!==0&&W-U.boundary<0&&(E+=D-u,P.__offset=E)}E+=U.storage}return u=E%D,u>0&&(E+=D-u),A.__size=E,A.__cache={},this}function b(A){const C={boundary:0,storage:0};return typeof A=="number"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function y(A){const C=A.target;C.removeEventListener("dispose",y);const E=c.indexOf(C.__bindingPointIndex);c.splice(E,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function f(){for(const A in r)i.deleteBuffer(r[A]);c=[],r={},s={}}return{bind:d,update:p,dispose:f}}function Lg(){const i=Ls("canvas");return i.style.display="block",i}class Lc{constructor(e={}){const{canvas:t=Lg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:c=!1,antialias:o=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let _;n!==null?_=n.getContextAttributes().alpha:_=c;let x=null,S=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Oi,this.useLegacyLights=!0,this.toneMapping=oi,this.toneMappingExposure=1;const f=this;let A=!1,C=0,E=0,D=null,u=-1,q=null;const V=new Dt,P=new Dt;let U=null,Z=t.width,W=t.height,B=1,Y=null,re=null;const ue=new Dt(0,0,Z,W),ge=new Dt(0,0,Z,W);let le=!1;const be=new Qa;let ye=!1,He=!1,Te=null;const se=new Ot,me=new X,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return D===null?B:1}let ne=n;function Qe(I,J){for(let oe=0;oe<I.length;oe++){const K=I[oe],de=t.getContext(K,J);if(de!==null)return de}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ka}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),ne===null){const J=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&J.shift(),ne=Qe(J,I),ne===null)throw Qe(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ge,Ee,Ye,gt,Fe,nt,St,Pe,ht,Rt,mt,Mt,Vt,N,R,ie,xe,Se,Le,k,pe,te,De,Ue;function ze(){Ge=new Bp(ne),Ee=new Ip(ne,Ge,e),Ge.init(Ee),te=new Mg(ne,Ge,Ee),Ye=new yg(ne,Ge,Ee),gt=new Vp,Fe=new ag,nt=new Sg(ne,Ge,Ye,Fe,Ee,te,gt),St=new Up(f),Pe=new kp(f),ht=new ed(ne,Ee),De=new Dp(ne,Ge,ht,Ee),Rt=new Hp(ne,ht,gt,De),mt=new Xp(ne,Rt,ht,gt),Le=new jp(ne,Ee,nt),ie=new Np(Fe),Mt=new sg(f,St,Pe,Ge,Ee,De,ie),Vt=new Ag(f,Fe),N=new lg,R=new pg(Ge,Ee),Se=new Pp(f,St,Pe,Ye,mt,_,d),xe=new xg(f,mt,Ee),Ue=new Cg(ne,gt,Ee,Ye),k=new Rp(ne,Ge,gt,Ee),pe=new Gp(ne,Ge,gt,Ee),gt.programs=Mt.programs,f.capabilities=Ee,f.extensions=Ge,f.properties=Fe,f.renderLists=N,f.shadowMap=xe,f.state=Ye,f.info=gt}ze();const Oe=new Eg(f,ne);this.xr=Oe,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const I=Ge.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ge.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(Z,W,!1))},this.getSize=function(I){return I.set(Z,W)},this.setSize=function(I,J,oe=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=I,W=J,t.width=Math.floor(I*B),t.height=Math.floor(J*B),oe===!0&&(t.style.width=I+"px",t.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(Z*B,W*B).floor()},this.setDrawingBufferSize=function(I,J,oe){Z=I,W=J,B=oe,t.width=Math.floor(I*oe),t.height=Math.floor(J*oe),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(ue)},this.setViewport=function(I,J,oe,K){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,J,oe,K),Ye.viewport(V.copy(ue).multiplyScalar(B).floor())},this.getScissor=function(I){return I.copy(ge)},this.setScissor=function(I,J,oe,K){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,J,oe,K),Ye.scissor(P.copy(ge).multiplyScalar(B).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(I){Ye.setScissorTest(le=I)},this.setOpaqueSort=function(I){Y=I},this.setTransparentSort=function(I){re=I},this.getClearColor=function(I){return I.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(I=!0,J=!0,oe=!0){let K=0;I&&(K|=16384),J&&(K|=256),oe&&(K|=1024),ne.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),N.dispose(),R.dispose(),Fe.dispose(),St.dispose(),Pe.dispose(),mt.dispose(),De.dispose(),Ue.dispose(),Mt.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",ke),Oe.removeEventListener("sessionend",Tt),Te&&(Te.dispose(),Te=null),Ct.stop()};function Be(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=gt.autoReset,J=xe.enabled,oe=xe.autoUpdate,K=xe.needsUpdate,de=xe.type;ze(),gt.autoReset=I,xe.enabled=J,xe.autoUpdate=oe,xe.needsUpdate=K,xe.type=de}function Xe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function At(I){const J=I.target;J.removeEventListener("dispose",At),G(J)}function G(I){ce(I),Fe.remove(I)}function ce(I){const J=Fe.get(I).programs;J!==void 0&&(J.forEach(function(oe){Mt.releaseProgram(oe)}),I.isShaderMaterial&&Mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,oe,K,de,je){J===null&&(J=Ae);const et=de.isMesh&&de.matrixWorld.determinant()<0,tt=Os(I,J,oe,K,de);Ye.setMaterial(K,et);let at=oe.index,st=1;K.wireframe===!0&&(at=Rt.getWireframeAttribute(oe),st=2);const ot=oe.drawRange,lt=oe.attributes.position;let _t=ot.start*st,$t=(ot.start+ot.count)*st;je!==null&&(_t=Math.max(_t,je.start*st),$t=Math.min($t,(je.start+je.count)*st)),at!==null?(_t=Math.max(_t,0),$t=Math.min($t,at.count)):lt!=null&&(_t=Math.max(_t,0),$t=Math.min($t,lt.count));const fn=$t-_t;if(fn<0||fn===1/0)return;De.setup(de,K,tt,oe,at);let Rn,Ut=k;if(at!==null&&(Rn=ht.get(at),Ut=pe,Ut.setIndex(Rn)),de.isMesh)K.wireframe===!0?(Ye.setLineWidth(K.wireframeLinewidth*Ne()),Ut.setMode(1)):Ut.setMode(4);else if(de.isLine){let dt=K.linewidth;dt===void 0&&(dt=1),Ye.setLineWidth(dt*Ne()),de.isLineSegments?Ut.setMode(1):de.isLineLoop?Ut.setMode(2):Ut.setMode(3)}else de.isPoints?Ut.setMode(0):de.isSprite&&Ut.setMode(4);if(de.isInstancedMesh)Ut.renderInstances(_t,fn,de.count);else if(oe.isInstancedBufferGeometry){const dt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Hi=Math.min(oe.instanceCount,dt);Ut.renderInstances(_t,fn,Hi)}else Ut.render(_t,fn)},this.compile=function(I,J){function oe(K,de,je){K.transparent===!0&&K.side===ri&&K.forceSinglePass===!1?(K.side=cn,K.needsUpdate=!0,vi(K,de,je),K.side=gi,K.needsUpdate=!0,vi(K,de,je),K.side=ri):vi(K,de,je)}S=R.get(I),S.init(),y.push(S),I.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(f.useLegacyLights),I.traverse(function(K){const de=K.material;if(de)if(Array.isArray(de))for(let je=0;je<de.length;je++){const et=de[je];oe(et,I,K)}else oe(de,I,K)}),y.pop(),S=null};let Me=null;function Re(I){Me&&Me(I)}function ke(){Ct.stop()}function Tt(){Ct.start()}const Ct=new Tc;Ct.setAnimationLoop(Re),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(I){Me=I,Oe.setAnimationLoop(I),I===null?Ct.stop():Ct.start()},Oe.addEventListener("sessionstart",ke),Oe.addEventListener("sessionend",Tt),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(J),J=Oe.getCamera()),I.isScene===!0&&I.onBeforeRender(f,I,J,D),S=R.get(I,y.length),S.init(),y.push(S),se.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),be.setFromProjectionMatrix(se),He=this.localClippingEnabled,ye=ie.init(this.clippingPlanes,He),x=N.get(I,b.length),x.init(),b.push(x),zt(I,J,0,f.sortObjects),x.finish(),f.sortObjects===!0&&x.sort(Y,re),ye===!0&&ie.beginShadows();const oe=S.state.shadowsArray;if(xe.render(oe,I,J),ye===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(x,I),S.setupLights(f.useLegacyLights),J.isArrayCamera){const K=J.cameras;for(let de=0,je=K.length;de<je;de++){const et=K[de];un(x,I,et,et.viewport)}}else un(x,I,J);D!==null&&(nt.updateMultisampleRenderTarget(D),nt.updateRenderTargetMipmap(D)),I.isScene===!0&&I.onAfterRender(f,I,J),De.resetDefaultState(),u=-1,q=null,y.pop(),y.length>0?S=y[y.length-1]:S=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function zt(I,J,oe,K){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)oe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)S.pushLight(I),I.castShadow&&S.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||be.intersectsSprite(I)){K&&me.setFromMatrixPosition(I.matrixWorld).applyMatrix4(se);const et=mt.update(I),tt=I.material;tt.visible&&x.push(I,et,tt,oe,me.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(I.isSkinnedMesh&&I.skeleton.frame!==gt.render.frame&&(I.skeleton.update(),I.skeleton.frame=gt.render.frame),!I.frustumCulled||be.intersectsObject(I))){K&&me.setFromMatrixPosition(I.matrixWorld).applyMatrix4(se);const et=mt.update(I),tt=I.material;if(Array.isArray(tt)){const at=et.groups;for(let st=0,ot=at.length;st<ot;st++){const lt=at[st],_t=tt[lt.materialIndex];_t&&_t.visible&&x.push(I,et,_t,oe,me.z,lt)}}else tt.visible&&x.push(I,et,tt,oe,me.z,null)}}const je=I.children;for(let et=0,tt=je.length;et<tt;et++)zt(je[et],J,oe,K)}function un(I,J,oe,K){const de=I.opaque,je=I.transmissive,et=I.transparent;S.setupLightsView(oe),ye===!0&&ie.setGlobalState(f.clippingPlanes,oe),je.length>0&&It(de,je,J,oe),K&&Ye.viewport(V.copy(K)),de.length>0&&an(de,J,oe),je.length>0&&an(je,J,oe),et.length>0&&an(et,J,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function It(I,J,oe,K){if(Te===null){const tt=Ee.isWebGL2;Te=new Fi(1024,1024,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")?kr:Ui,minFilter:zr,samples:tt&&o===!0?4:0})}const de=f.getRenderTarget();f.setRenderTarget(Te),f.clear();const je=f.toneMapping;f.toneMapping=oi,an(I,oe,K),nt.updateMultisampleRenderTarget(Te),nt.updateRenderTargetMipmap(Te);let et=!1;for(let tt=0,at=J.length;tt<at;tt++){const st=J[tt],ot=st.object,lt=st.geometry,_t=st.material,$t=st.group;if(_t.side===ri&&ot.layers.test(K.layers)){const fn=_t.side;_t.side=cn,_t.needsUpdate=!0,Tn(ot,oe,K,lt,_t,$t),_t.side=fn,_t.needsUpdate=!0,et=!0}}et===!0&&(nt.updateMultisampleRenderTarget(Te),nt.updateRenderTargetMipmap(Te)),f.setRenderTarget(de),f.toneMapping=je}function an(I,J,oe){const K=J.isScene===!0?J.overrideMaterial:null;for(let de=0,je=I.length;de<je;de++){const et=I[de],tt=et.object,at=et.geometry,st=K===null?et.material:K,ot=et.group;tt.layers.test(oe.layers)&&Tn(tt,J,oe,at,st,ot)}}function Tn(I,J,oe,K,de,je){I.onBeforeRender(f,J,oe,K,de,je),I.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),de.onBeforeRender(f,J,oe,K,I,je),de.transparent===!0&&de.side===ri&&de.forceSinglePass===!1?(de.side=cn,de.needsUpdate=!0,f.renderBufferDirect(oe,J,K,de,I,je),de.side=gi,de.needsUpdate=!0,f.renderBufferDirect(oe,J,K,de,I,je),de.side=ri):f.renderBufferDirect(oe,J,K,de,I,je),I.onAfterRender(f,J,oe,K,de,je)}function vi(I,J,oe){J.isScene!==!0&&(J=Ae);const K=Fe.get(I),de=S.state.lights,je=S.state.shadowsArray,et=de.state.version,tt=Mt.getParameters(I,de.state,je,J,oe),at=Mt.getProgramCacheKey(tt);let st=K.programs;K.environment=I.isMeshStandardMaterial?J.environment:null,K.fog=J.fog,K.envMap=(I.isMeshStandardMaterial?Pe:St).get(I.envMap||K.environment),st===void 0&&(I.addEventListener("dispose",At),st=new Map,K.programs=st);let ot=st.get(at);if(ot!==void 0){if(K.currentProgram===ot&&K.lightsStateVersion===et)return qr(I,tt),ot}else tt.uniforms=Mt.getUniforms(I),I.onBuild(oe,tt,f),I.onBeforeCompile(tt,f),ot=Mt.acquireProgram(tt,at),st.set(at,ot),K.uniforms=tt.uniforms;const lt=K.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(lt.clippingPlanes=ie.uniform),qr(I,tt),K.needsLights=Fs(I),K.lightsStateVersion=et,K.needsLights&&(lt.ambientLightColor.value=de.state.ambient,lt.lightProbe.value=de.state.probe,lt.directionalLights.value=de.state.directional,lt.directionalLightShadows.value=de.state.directionalShadow,lt.spotLights.value=de.state.spot,lt.spotLightShadows.value=de.state.spotShadow,lt.rectAreaLights.value=de.state.rectArea,lt.ltc_1.value=de.state.rectAreaLTC1,lt.ltc_2.value=de.state.rectAreaLTC2,lt.pointLights.value=de.state.point,lt.pointLightShadows.value=de.state.pointShadow,lt.hemisphereLights.value=de.state.hemi,lt.directionalShadowMap.value=de.state.directionalShadowMap,lt.directionalShadowMatrix.value=de.state.directionalShadowMatrix,lt.spotShadowMap.value=de.state.spotShadowMap,lt.spotLightMatrix.value=de.state.spotLightMatrix,lt.spotLightMap.value=de.state.spotLightMap,lt.pointShadowMap.value=de.state.pointShadowMap,lt.pointShadowMatrix.value=de.state.pointShadowMatrix);const _t=ot.getUniforms(),$t=As.seqWithValue(_t.seq,lt);return K.currentProgram=ot,K.uniformsList=$t,ot}function qr(I,J){const oe=Fe.get(I);oe.outputEncoding=J.outputEncoding,oe.instancing=J.instancing,oe.skinning=J.skinning,oe.morphTargets=J.morphTargets,oe.morphNormals=J.morphNormals,oe.morphColors=J.morphColors,oe.morphTargetsCount=J.morphTargetsCount,oe.numClippingPlanes=J.numClippingPlanes,oe.numIntersection=J.numClipIntersection,oe.vertexAlphas=J.vertexAlphas,oe.vertexTangents=J.vertexTangents,oe.toneMapping=J.toneMapping}function Os(I,J,oe,K,de){J.isScene!==!0&&(J=Ae),nt.resetTextureUnits();const je=J.fog,et=K.isMeshStandardMaterial?J.environment:null,tt=D===null?f.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Oi,at=(K.isMeshStandardMaterial?Pe:St).get(K.envMap||et),st=K.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!K.normalMap&&!!oe.attributes.tangent,lt=!!oe.morphAttributes.position,_t=!!oe.morphAttributes.normal,$t=!!oe.morphAttributes.color,fn=K.toneMapped?f.toneMapping:oi,Rn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ut=Rn!==void 0?Rn.length:0,dt=Fe.get(K),Hi=S.state.lights;if(ye===!0&&(He===!0||I!==q)){const Kt=I===q&&K.id===u;ie.setState(K,I,Kt)}let Ft=!1;K.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Hi.state.version||dt.outputEncoding!==tt||de.isInstancedMesh&&dt.instancing===!1||!de.isInstancedMesh&&dt.instancing===!0||de.isSkinnedMesh&&dt.skinning===!1||!de.isSkinnedMesh&&dt.skinning===!0||dt.envMap!==at||K.fog===!0&&dt.fog!==je||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==ie.numPlanes||dt.numIntersection!==ie.numIntersection)||dt.vertexAlphas!==st||dt.vertexTangents!==ot||dt.morphTargets!==lt||dt.morphNormals!==_t||dt.morphColors!==$t||dt.toneMapping!==fn||Ee.isWebGL2===!0&&dt.morphTargetsCount!==Ut)&&(Ft=!0):(Ft=!0,dt.__version=K.version);let In=dt.currentProgram;Ft===!0&&(In=vi(K,J,de));let xr=!1,kt=!1,Gn=!1;const Bt=In.getUniforms(),Yn=dt.uniforms;if(Ye.useProgram(In.program)&&(xr=!0,kt=!0,Gn=!0),K.id!==u&&(u=K.id,kt=!0),xr||q!==I){if(Bt.setValue(ne,"projectionMatrix",I.projectionMatrix),Ee.logarithmicDepthBuffer&&Bt.setValue(ne,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),q!==I&&(q=I,kt=!0,Gn=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const Kt=Bt.map.cameraPosition;Kt!==void 0&&Kt.setValue(ne,me.setFromMatrixPosition(I.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Bt.setValue(ne,"isOrthographic",I.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||de.isSkinnedMesh)&&Bt.setValue(ne,"viewMatrix",I.matrixWorldInverse)}if(de.isSkinnedMesh){Bt.setOptional(ne,de,"bindMatrix"),Bt.setOptional(ne,de,"bindMatrixInverse");const Kt=de.skeleton;Kt&&(Ee.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Bt.setValue(ne,"boneTexture",Kt.boneTexture,nt),Bt.setValue(ne,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yr=oe.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0&&Ee.isWebGL2===!0)&&Le.update(de,oe,In),(kt||dt.receiveShadow!==de.receiveShadow)&&(dt.receiveShadow=de.receiveShadow,Bt.setValue(ne,"receiveShadow",de.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Yn.envMap.value=at,Yn.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),kt&&(Bt.setValue(ne,"toneMappingExposure",f.toneMappingExposure),dt.needsLights&&jr(Yn,Gn),je&&K.fog===!0&&Vt.refreshFogUniforms(Yn,je),Vt.refreshMaterialUniforms(Yn,K,B,W,Te),As.upload(ne,dt.uniformsList,Yn,nt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(As.upload(ne,dt.uniformsList,Yn,nt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Bt.setValue(ne,"center",de.center),Bt.setValue(ne,"modelViewMatrix",de.modelViewMatrix),Bt.setValue(ne,"normalMatrix",de.normalMatrix),Bt.setValue(ne,"modelMatrix",de.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Kt=K.uniformsGroups;for(let Gi=0,Vi=Kt.length;Gi<Vi;Gi++)if(Ee.isWebGL2){const Sr=Kt[Gi];Ue.update(Sr,In),Ue.bind(Sr,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function jr(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function Fs(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(I,J,oe){Fe.get(I.texture).__webglTexture=J,Fe.get(I.depthTexture).__webglTexture=oe;const K=Fe.get(I);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=oe===void 0,K.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,J){const oe=Fe.get(I);oe.__webglFramebuffer=J,oe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,oe=0){D=I,C=J,E=oe;let K=!0,de=null,je=!1,et=!1;if(I){const at=Fe.get(I);at.__useDefaultFramebuffer!==void 0?(Ye.bindFramebuffer(36160,null),K=!1):at.__webglFramebuffer===void 0?nt.setupRenderTarget(I):at.__hasExternalTextures&&nt.rebindTextures(I,Fe.get(I.texture).__webglTexture,Fe.get(I.depthTexture).__webglTexture);const st=I.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(et=!0);const ot=Fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(de=ot[J],je=!0):Ee.isWebGL2&&I.samples>0&&nt.useMultisampledRTT(I)===!1?de=Fe.get(I).__webglMultisampledFramebuffer:de=ot,V.copy(I.viewport),P.copy(I.scissor),U=I.scissorTest}else V.copy(ue).multiplyScalar(B).floor(),P.copy(ge).multiplyScalar(B).floor(),U=le;if(Ye.bindFramebuffer(36160,de)&&Ee.drawBuffers&&K&&Ye.drawBuffers(I,de),Ye.viewport(V),Ye.scissor(P),Ye.setScissorTest(U),je){const at=Fe.get(I.texture);ne.framebufferTexture2D(36160,36064,34069+J,at.__webglTexture,oe)}else if(et){const at=Fe.get(I.texture),st=J||0;ne.framebufferTextureLayer(36160,36064,at.__webglTexture,oe||0,st)}u=-1},this.readRenderTargetPixels=function(I,J,oe,K,de,je,et){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&et!==void 0&&(tt=tt[et]),tt){Ye.bindFramebuffer(36160,tt);try{const at=I.texture,st=at.format,ot=at.type;if(st!==Hn&&te.convert(st)!==ne.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=ot===kr&&(Ge.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&Ge.has("EXT_color_buffer_float"));if(ot!==Ui&&te.convert(ot)!==ne.getParameter(35738)&&!(ot===Ii&&(Ee.isWebGL2||Ge.has("OES_texture_float")||Ge.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-K&&oe>=0&&oe<=I.height-de&&ne.readPixels(J,oe,K,de,te.convert(st),te.convert(ot),je)}finally{const at=D!==null?Fe.get(D).__webglFramebuffer:null;Ye.bindFramebuffer(36160,at)}}},this.copyFramebufferToTexture=function(I,J,oe=0){const K=Math.pow(2,-oe),de=Math.floor(J.image.width*K),je=Math.floor(J.image.height*K);nt.setTexture2D(J,0),ne.copyTexSubImage2D(3553,oe,0,0,I.x,I.y,de,je),Ye.unbindTexture()},this.copyTextureToTexture=function(I,J,oe,K=0){const de=J.image.width,je=J.image.height,et=te.convert(oe.format),tt=te.convert(oe.type);nt.setTexture2D(oe,0),ne.pixelStorei(37440,oe.flipY),ne.pixelStorei(37441,oe.premultiplyAlpha),ne.pixelStorei(3317,oe.unpackAlignment),J.isDataTexture?ne.texSubImage2D(3553,K,I.x,I.y,de,je,et,tt,J.image.data):J.isCompressedTexture?ne.compressedTexSubImage2D(3553,K,I.x,I.y,J.mipmaps[0].width,J.mipmaps[0].height,et,J.mipmaps[0].data):ne.texSubImage2D(3553,K,I.x,I.y,et,tt,J.image),K===0&&oe.generateMipmaps&&ne.generateMipmap(3553),Ye.unbindTexture()},this.copyTextureToTexture3D=function(I,J,oe,K,de=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const je=I.max.x-I.min.x+1,et=I.max.y-I.min.y+1,tt=I.max.z-I.min.z+1,at=te.convert(K.format),st=te.convert(K.type);let ot;if(K.isData3DTexture)nt.setTexture3D(K,0),ot=32879;else if(K.isDataArrayTexture)nt.setTexture2DArray(K,0),ot=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(37440,K.flipY),ne.pixelStorei(37441,K.premultiplyAlpha),ne.pixelStorei(3317,K.unpackAlignment);const lt=ne.getParameter(3314),_t=ne.getParameter(32878),$t=ne.getParameter(3316),fn=ne.getParameter(3315),Rn=ne.getParameter(32877),Ut=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;ne.pixelStorei(3314,Ut.width),ne.pixelStorei(32878,Ut.height),ne.pixelStorei(3316,I.min.x),ne.pixelStorei(3315,I.min.y),ne.pixelStorei(32877,I.min.z),oe.isDataTexture||oe.isData3DTexture?ne.texSubImage3D(ot,de,J.x,J.y,J.z,je,et,tt,at,st,Ut.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(ot,de,J.x,J.y,J.z,je,et,tt,at,Ut.data)):ne.texSubImage3D(ot,de,J.x,J.y,J.z,je,et,tt,at,st,Ut),ne.pixelStorei(3314,lt),ne.pixelStorei(32878,_t),ne.pixelStorei(3316,$t),ne.pixelStorei(3315,fn),ne.pixelStorei(32877,Rn),de===0&&K.generateMipmaps&&ne.generateMipmap(ot),Ye.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?nt.setTextureCube(I,0):I.isData3DTexture?nt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?nt.setTexture2DArray(I,0):nt.setTexture2D(I,0),Ye.unbindTexture()},this.resetState=function(){C=0,E=0,D=null,Ye.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Pg extends Lc{}Pg.prototype.isWebGL1Renderer=!0;class no{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=t}clone(){return new no(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Dg extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Pc extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bl=new X,Hl=new X,Gl=new Ot,La=new Za,Ms=new Vr;class Rg extends en{constructor(e=new Dn,t=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Bl.fromBufferAttribute(t,r-1),Hl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Bl.distanceTo(Hl);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Ms.radius+=s,e.ray.intersectsSphere(Ms)===!1)return;Gl.copy(r).invert(),La.copy(e.ray).applyMatrix4(Gl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=o*o,p=new X,g=new X,v=new X,_=new X,x=this.isLineSegments?2:1,S=n.index,y=n.attributes.position;if(S!==null){const f=Math.max(0,c.start),A=Math.min(S.count,c.start+c.count);for(let C=f,E=A-1;C<E;C+=x){const D=S.getX(C),u=S.getX(C+1);if(p.fromBufferAttribute(y,D),g.fromBufferAttribute(y,u),La.distanceSqToSegment(p,g,_,v)>d)continue;_.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(_);V<e.near||V>e.far||t.push({distance:V,point:v.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,c.start),A=Math.min(y.count,c.start+c.count);for(let C=f,E=A-1;C<E;C+=x){if(p.fromBufferAttribute(y,C),g.fromBufferAttribute(y,C+1),La.distanceSqToSegment(p,g,_,v)>d)continue;_.applyMatrix4(this.matrixWorld);const u=e.ray.origin.distanceTo(_);u<e.near||u>e.far||t.push({distance:u,point:v.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Vl=new X,Wl=new X;class Ig extends Rg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Vl.fromBufferAttribute(t,r),Wl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vl.distanceTo(Wl);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dc extends vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ql=new Ot,ja=new Za,bs=new Vr,Ts=new X;class Ng extends en{constructor(e=new Dn,t=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),bs.radius+=s,e.ray.intersectsSphere(bs)===!1)return;ql.copy(r).invert(),ja.copy(e.ray).applyMatrix4(ql);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=o*o,p=n.index,v=n.attributes.position;if(p!==null){const _=Math.max(0,c.start),x=Math.min(p.count,c.start+c.count);for(let S=_,b=x;S<b;S++){const y=p.getX(S);Ts.fromBufferAttribute(v,y),jl(Ts,y,d,r,e,t,this)}}else{const _=Math.max(0,c.start),x=Math.min(v.count,c.start+c.count);for(let S=_,b=x;S<b;S++)Ts.fromBufferAttribute(v,S),jl(Ts,S,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jl(i,e,t,n,r,s,c){const o=ja.distanceSqToPoint(i);if(o<t){const d=new X;ja.closestPointToPoint(i,d),d.applyMatrix4(n);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;s.push({distance:p,distanceToRay:Math.sqrt(o),point:d,index:e,face:null,object:c})}}class io extends Dn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,c=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:c,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(c+o,Math.PI);let p=0;const g=[],v=new X,_=new X,x=[],S=[],b=[],y=[];for(let f=0;f<=n;f++){const A=[],C=f/n;let E=0;f===0&&c===0?E=.5/t:f===n&&d===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){const u=D/t;v.x=-e*Math.cos(r+u*s)*Math.sin(c+C*o),v.y=e*Math.cos(c+C*o),v.z=e*Math.sin(r+u*s)*Math.sin(c+C*o),S.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),y.push(u+E,1-C),A.push(p++)}g.push(A)}for(let f=0;f<n;f++)for(let A=0;A<t;A++){const C=g[f][A+1],E=g[f][A],D=g[f+1][A],u=g[f+1][A+1];(f!==0||c>0)&&x.push(C,E,u),(f!==n-1||d<Math.PI)&&x.push(E,D,u)}this.setIndex(x),this.setAttribute("position",new sn(S,3)),this.setAttribute("normal",new sn(b,3)),this.setAttribute("uv",new sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rc extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pa=new Ot,Xl=new X,$l=new X;class Ug{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),$l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($l),t.updateMatrixWorld(),Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yl=new Ot,Ir=new X,Da=new X;class Og extends Ug{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ir),Da.copy(n.position),Da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Da),n.updateMatrixWorld(),r.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl)}}class Fg extends Rc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Og}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zg extends Rc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kg extends ai{constructor(e,t,n){const r=new io(t,4,2),s=new Ja({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class Bg extends Ig{constructor(e=10,t=10,n=4473924,r=8947848){n=new yt(n),r=new yt(r);const s=t/2,c=e/t,o=e/2,d=[],p=[];for(let _=0,x=0,S=-o;_<=t;_++,S+=c){d.push(-o,0,S,o,0,S),d.push(S,0,-o,S,0,o);const b=_===s?n:r;b.toArray(p,x),x+=3,b.toArray(p,x),x+=3,b.toArray(p,x),x+=3,b.toArray(p,x),x+=3}const g=new Dn;g.setAttribute("position",new sn(d,3)),g.setAttribute("color",new sn(p,3));const v=new Pc({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);const Zl={type:"change"},Ra={type:"start"},Jl={type:"end"};class Hg extends Bi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",Mt),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Mt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zl),n.update(),s=r.NONE},this.update=function(){const k=new X,pe=new zi().setFromUnitVectors(e.up,new X(0,1,0)),te=pe.clone().invert(),De=new X,Ue=new zi,ze=2*Math.PI;return function(){const Be=n.object.position;k.copy(Be).sub(n.target),k.applyQuaternion(pe),o.setFromVector3(k),n.autoRotate&&s===r.NONE&&P(q()),n.enableDamping?(o.theta+=d.theta*n.dampingFactor,o.phi+=d.phi*n.dampingFactor):(o.theta+=d.theta,o.phi+=d.phi);let We=n.minAzimuthAngle,Xe=n.maxAzimuthAngle;return isFinite(We)&&isFinite(Xe)&&(We<-Math.PI?We+=ze:We>Math.PI&&(We-=ze),Xe<-Math.PI?Xe+=ze:Xe>Math.PI&&(Xe-=ze),We<=Xe?o.theta=Math.max(We,Math.min(Xe,o.theta)):o.theta=o.theta>(We+Xe)/2?Math.max(We,o.theta):Math.min(Xe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=p,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),k.setFromSpherical(o),k.applyQuaternion(te),Be.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),g.set(0,0,0)),p=1,v||De.distanceToSquared(n.object.position)>c||8*(1-Ue.dot(n.object.quaternion))>c?(n.dispatchEvent(Zl),De.copy(n.object.position),Ue.copy(n.object.quaternion),v=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",nt),n.domElement.removeEventListener("pointercancel",Pe),n.domElement.removeEventListener("wheel",mt),n.domElement.removeEventListener("pointermove",St),n.domElement.removeEventListener("pointerup",Pe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Mt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const c=1e-6,o=new Kl,d=new Kl;let p=1;const g=new X;let v=!1;const _=new ft,x=new ft,S=new ft,b=new ft,y=new ft,f=new ft,A=new ft,C=new ft,E=new ft,D=[],u={};function q(){return 2*Math.PI/60/60*n.autoRotateSpeed}function V(){return Math.pow(.95,n.zoomSpeed)}function P(k){d.theta-=k}function U(k){d.phi-=k}const Z=function(){const k=new X;return function(te,De){k.setFromMatrixColumn(De,0),k.multiplyScalar(-te),g.add(k)}}(),W=function(){const k=new X;return function(te,De){n.screenSpacePanning===!0?k.setFromMatrixColumn(De,1):(k.setFromMatrixColumn(De,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(te),g.add(k)}}(),B=function(){const k=new X;return function(te,De){const Ue=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;k.copy(ze).sub(n.target);let Oe=k.length();Oe*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*te*Oe/Ue.clientHeight,n.object.matrix),W(2*De*Oe/Ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(te*(n.object.right-n.object.left)/n.object.zoom/Ue.clientWidth,n.object.matrix),W(De*(n.object.top-n.object.bottom)/n.object.zoom/Ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(k){n.object.isPerspectiveCamera?p/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(k){n.object.isPerspectiveCamera?p*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(k){_.set(k.clientX,k.clientY)}function ge(k){A.set(k.clientX,k.clientY)}function le(k){b.set(k.clientX,k.clientY)}function be(k){x.set(k.clientX,k.clientY),S.subVectors(x,_).multiplyScalar(n.rotateSpeed);const pe=n.domElement;P(2*Math.PI*S.x/pe.clientHeight),U(2*Math.PI*S.y/pe.clientHeight),_.copy(x),n.update()}function ye(k){C.set(k.clientX,k.clientY),E.subVectors(C,A),E.y>0?Y(V()):E.y<0&&re(V()),A.copy(C),n.update()}function He(k){y.set(k.clientX,k.clientY),f.subVectors(y,b).multiplyScalar(n.panSpeed),B(f.x,f.y),b.copy(y),n.update()}function Te(k){k.deltaY<0?re(V()):k.deltaY>0&&Y(V()),n.update()}function se(k){let pe=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),pe=!0;break}pe&&(k.preventDefault(),n.update())}function me(){if(D.length===1)_.set(D[0].pageX,D[0].pageY);else{const k=.5*(D[0].pageX+D[1].pageX),pe=.5*(D[0].pageY+D[1].pageY);_.set(k,pe)}}function Ae(){if(D.length===1)b.set(D[0].pageX,D[0].pageY);else{const k=.5*(D[0].pageX+D[1].pageX),pe=.5*(D[0].pageY+D[1].pageY);b.set(k,pe)}}function Ne(){const k=D[0].pageX-D[1].pageX,pe=D[0].pageY-D[1].pageY,te=Math.sqrt(k*k+pe*pe);A.set(0,te)}function ne(){n.enableZoom&&Ne(),n.enablePan&&Ae()}function Qe(){n.enableZoom&&Ne(),n.enableRotate&&me()}function Ge(k){if(D.length==1)x.set(k.pageX,k.pageY);else{const te=Le(k),De=.5*(k.pageX+te.x),Ue=.5*(k.pageY+te.y);x.set(De,Ue)}S.subVectors(x,_).multiplyScalar(n.rotateSpeed);const pe=n.domElement;P(2*Math.PI*S.x/pe.clientHeight),U(2*Math.PI*S.y/pe.clientHeight),_.copy(x)}function Ee(k){if(D.length===1)y.set(k.pageX,k.pageY);else{const pe=Le(k),te=.5*(k.pageX+pe.x),De=.5*(k.pageY+pe.y);y.set(te,De)}f.subVectors(y,b).multiplyScalar(n.panSpeed),B(f.x,f.y),b.copy(y)}function Ye(k){const pe=Le(k),te=k.pageX-pe.x,De=k.pageY-pe.y,Ue=Math.sqrt(te*te+De*De);C.set(0,Ue),E.set(0,Math.pow(C.y/A.y,n.zoomSpeed)),Y(E.y),A.copy(C)}function gt(k){n.enableZoom&&Ye(k),n.enablePan&&Ee(k)}function Fe(k){n.enableZoom&&Ye(k),n.enableRotate&&Ge(k)}function nt(k){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",St),n.domElement.addEventListener("pointerup",Pe)),ie(k),k.pointerType==="touch"?Vt(k):ht(k))}function St(k){n.enabled!==!1&&(k.pointerType==="touch"?N(k):Rt(k))}function Pe(k){xe(k),D.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",St),n.domElement.removeEventListener("pointerup",Pe)),n.dispatchEvent(Jl),s=r.NONE}function ht(k){let pe;switch(k.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case Wi.DOLLY:if(n.enableZoom===!1)return;ge(k),s=r.DOLLY;break;case Wi.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;le(k),s=r.PAN}else{if(n.enableRotate===!1)return;ue(k),s=r.ROTATE}break;case Wi.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;ue(k),s=r.ROTATE}else{if(n.enablePan===!1)return;le(k),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ra)}function Rt(k){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;be(k);break;case r.DOLLY:if(n.enableZoom===!1)return;ye(k);break;case r.PAN:if(n.enablePan===!1)return;He(k);break}}function mt(k){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(k.preventDefault(),n.dispatchEvent(Ra),Te(k),n.dispatchEvent(Jl))}function Mt(k){n.enabled===!1||n.enablePan===!1||se(k)}function Vt(k){switch(Se(k),D.length){case 1:switch(n.touches.ONE){case qi.ROTATE:if(n.enableRotate===!1)return;me(),s=r.TOUCH_ROTATE;break;case qi.PAN:if(n.enablePan===!1)return;Ae(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ne(),s=r.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Qe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ra)}function N(k){switch(Se(k),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ge(k),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ee(k),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;gt(k),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(k),n.update();break;default:s=r.NONE}}function R(k){n.enabled!==!1&&k.preventDefault()}function ie(k){D.push(k)}function xe(k){delete u[k.pointerId];for(let pe=0;pe<D.length;pe++)if(D[pe].pointerId==k.pointerId){D.splice(pe,1);return}}function Se(k){let pe=u[k.pointerId];pe===void 0&&(pe=new ft,u[k.pointerId]=pe),pe.set(k.pageX,k.pageY)}function Le(k){const pe=k.pointerId===D[0].pointerId?D[1]:D[0];return u[pe.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",nt),n.domElement.addEventListener("pointercancel",Pe),n.domElement.addEventListener("wheel",mt,{passive:!1}),this.update()}}var Gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ps={},Vg={get exports(){return Ps},set exports(i){Ps=i}};/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Gg,function(e,t){var n=[],r=Object.getPrototypeOf,s=n.slice,c=n.flat?function(a){return n.flat.call(a)}:function(a){return n.concat.apply([],a)},o=n.push,d=n.indexOf,p={},g=p.toString,v=p.hasOwnProperty,_=v.toString,x=_.call(Object),S={},b=function(l){return typeof l=="function"&&typeof l.nodeType!="number"&&typeof l.item!="function"},y=function(l){return l!=null&&l===l.window},f=e.document,A={type:!0,src:!0,nonce:!0,noModule:!0};function C(a,l,h){h=h||f;var m,M,T=h.createElement("script");if(T.text=a,l)for(m in A)M=l[m]||l.getAttribute&&l.getAttribute(m),M&&T.setAttribute(m,M);h.head.appendChild(T).parentNode.removeChild(T)}function E(a){return a==null?a+"":typeof a=="object"||typeof a=="function"?p[g.call(a)]||"object":typeof a}var D="3.6.4",u=function(a,l){return new u.fn.init(a,l)};u.fn=u.prototype={jquery:D,constructor:u,length:0,toArray:function(){return s.call(this)},get:function(a){return a==null?s.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var l=u.merge(this.constructor(),a);return l.prevObject=this,l},each:function(a){return u.each(this,a)},map:function(a){return this.pushStack(u.map(this,function(l,h){return a.call(l,h,l)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(a,l){return(l+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(a,l){return l%2}))},eq:function(a){var l=this.length,h=+a+(a<0?l:0);return this.pushStack(h>=0&&h<l?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:n.sort,splice:n.splice},u.extend=u.fn.extend=function(){var a,l,h,m,M,T,w=arguments[0]||{},z=1,O=arguments.length,$=!1;for(typeof w=="boolean"&&($=w,w=arguments[z]||{},z++),typeof w!="object"&&!b(w)&&(w={}),z===O&&(w=this,z--);z<O;z++)if((a=arguments[z])!=null)for(l in a)m=a[l],!(l==="__proto__"||w===m)&&($&&m&&(u.isPlainObject(m)||(M=Array.isArray(m)))?(h=w[l],M&&!Array.isArray(h)?T=[]:!M&&!u.isPlainObject(h)?T={}:T=h,M=!1,w[l]=u.extend($,T,m)):m!==void 0&&(w[l]=m));return w},u.extend({expando:"jQuery"+(D+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var l,h;return!a||g.call(a)!=="[object Object]"?!1:(l=r(a),l?(h=v.call(l,"constructor")&&l.constructor,typeof h=="function"&&_.call(h)===x):!0)},isEmptyObject:function(a){var l;for(l in a)return!1;return!0},globalEval:function(a,l,h){C(a,{nonce:l&&l.nonce},h)},each:function(a,l){var h,m=0;if(q(a))for(h=a.length;m<h&&l.call(a[m],m,a[m])!==!1;m++);else for(m in a)if(l.call(a[m],m,a[m])===!1)break;return a},makeArray:function(a,l){var h=l||[];return a!=null&&(q(Object(a))?u.merge(h,typeof a=="string"?[a]:a):o.call(h,a)),h},inArray:function(a,l,h){return l==null?-1:d.call(l,a,h)},merge:function(a,l){for(var h=+l.length,m=0,M=a.length;m<h;m++)a[M++]=l[m];return a.length=M,a},grep:function(a,l,h){for(var m,M=[],T=0,w=a.length,z=!h;T<w;T++)m=!l(a[T],T),m!==z&&M.push(a[T]);return M},map:function(a,l,h){var m,M,T=0,w=[];if(q(a))for(m=a.length;T<m;T++)M=l(a[T],T,h),M!=null&&w.push(M);else for(T in a)M=l(a[T],T,h),M!=null&&w.push(M);return c(w)},guid:1,support:S}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=n[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,l){p["[object "+l+"]"]=l.toLowerCase()});function q(a){var l=!!a&&"length"in a&&a.length,h=E(a);return b(a)||y(a)?!1:h==="array"||l===0||typeof l=="number"&&l>0&&l-1 in a}var V=function(a){var l,h,m,M,T,w,z,O,$,ee,ve,Q,ae,qe,rt,Ve,Wt,Ht,dn,bt="sizzle"+1*new Date,it=a.document,on=0,vt=0,Nt=Kr(),wr=Kr(),Xr=Kr(),hn=Kr(),yi=function(L,F){return L===F&&(ve=!0),0},Si={}.hasOwnProperty,ln=[],li=ln.pop,wn=ln.push,ci=ln.push,go=ln.slice,Mi=function(L,F){for(var H=0,fe=L.length;H<fe;H++)if(L[H]===F)return H;return-1},qs="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",xt="[\\x20\\t\\r\\n\\f]",bi="(?:\\\\[\\da-fA-F]{1,6}"+xt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",vo="\\["+xt+"*("+bi+")(?:"+xt+"*([*^$|!~]?=)"+xt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+bi+"))|)"+xt+"*\\]",js=":("+bi+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+vo+")*)|.*)\\)|)",pu=new RegExp(xt+"+","g"),$r=new RegExp("^"+xt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+xt+"+$","g"),mu=new RegExp("^"+xt+"*,"+xt+"*"),_o=new RegExp("^"+xt+"*([>+~]|"+xt+")"+xt+"*"),gu=new RegExp(xt+"|>"),vu=new RegExp(js),_u=new RegExp("^"+bi+"$"),Yr={ID:new RegExp("^#("+bi+")"),CLASS:new RegExp("^\\.("+bi+")"),TAG:new RegExp("^("+bi+"|[*])"),ATTR:new RegExp("^"+vo),PSEUDO:new RegExp("^"+js),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+xt+"*(even|odd|(([+-]|)(\\d*)n|)"+xt+"*(?:([+-]|)"+xt+"*(\\d+)|))"+xt+"*\\)|)","i"),bool:new RegExp("^(?:"+qs+")$","i"),needsContext:new RegExp("^"+xt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+xt+"*((?:-\\d)?\\d*)"+xt+"*\\)|)(?=[^-]|$)","i")},xu=/HTML$/i,yu=/^(?:input|select|textarea|button)$/i,Su=/^h\d$/i,Er=/^[^{]+\{\s*\[native \w/,Mu=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Xs=/[+~]/,Kn=new RegExp("\\\\[\\da-fA-F]{1,6}"+xt+"?|\\\\([^\\r\\n\\f])","g"),Zn=function(L,F){var H="0x"+L.slice(1)-65536;return F||(H<0?String.fromCharCode(H+65536):String.fromCharCode(H>>10|55296,H&1023|56320))},xo=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,yo=function(L,F){return F?L==="\0"?"�":L.slice(0,-1)+"\\"+L.charCodeAt(L.length-1).toString(16)+" ":"\\"+L},So=function(){Q()},bu=Jr(function(L){return L.disabled===!0&&L.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{ci.apply(ln=go.call(it.childNodes),it.childNodes),ln[it.childNodes.length].nodeType}catch{ci={apply:ln.length?function(F,H){wn.apply(F,go.call(H))}:function(F,H){for(var fe=F.length,j=0;F[fe++]=H[j++];);F.length=fe-1}}}function wt(L,F,H,fe){var j,he,_e,we,Ie,Ke,$e,Je=F&&F.ownerDocument,ut=F?F.nodeType:9;if(H=H||[],typeof L!="string"||!L||ut!==1&&ut!==9&&ut!==11)return H;if(!fe&&(Q(F),F=F||ae,rt)){if(ut!==11&&(Ie=Mu.exec(L)))if(j=Ie[1]){if(ut===9)if(_e=F.getElementById(j)){if(_e.id===j)return H.push(_e),H}else return H;else if(Je&&(_e=Je.getElementById(j))&&dn(F,_e)&&_e.id===j)return H.push(_e),H}else{if(Ie[2])return ci.apply(H,F.getElementsByTagName(L)),H;if((j=Ie[3])&&h.getElementsByClassName&&F.getElementsByClassName)return ci.apply(H,F.getElementsByClassName(j)),H}if(h.qsa&&!hn[L+" "]&&(!Ve||!Ve.test(L))&&(ut!==1||F.nodeName.toLowerCase()!=="object")){if($e=L,Je=F,ut===1&&(gu.test(L)||_o.test(L))){for(Je=Xs.test(L)&&Ys(F.parentNode)||F,(Je!==F||!h.scope)&&((we=F.getAttribute("id"))?we=we.replace(xo,yo):F.setAttribute("id",we=bt)),Ke=w(L),he=Ke.length;he--;)Ke[he]=(we?"#"+we:":scope")+" "+Zr(Ke[he]);$e=Ke.join(",")}try{return ci.apply(H,Je.querySelectorAll($e)),H}catch{hn(L,!0)}finally{we===bt&&F.removeAttribute("id")}}}return O(L.replace($r,"$1"),F,H,fe)}function Kr(){var L=[];function F(H,fe){return L.push(H+" ")>m.cacheLength&&delete F[L.shift()],F[H+" "]=fe}return F}function Un(L){return L[bt]=!0,L}function En(L){var F=ae.createElement("fieldset");try{return!!L(F)}catch{return!1}finally{F.parentNode&&F.parentNode.removeChild(F),F=null}}function $s(L,F){for(var H=L.split("|"),fe=H.length;fe--;)m.attrHandle[H[fe]]=F}function Mo(L,F){var H=F&&L,fe=H&&L.nodeType===1&&F.nodeType===1&&L.sourceIndex-F.sourceIndex;if(fe)return fe;if(H){for(;H=H.nextSibling;)if(H===F)return-1}return L?1:-1}function Tu(L){return function(F){var H=F.nodeName.toLowerCase();return H==="input"&&F.type===L}}function wu(L){return function(F){var H=F.nodeName.toLowerCase();return(H==="input"||H==="button")&&F.type===L}}function bo(L){return function(F){return"form"in F?F.parentNode&&F.disabled===!1?"label"in F?"label"in F.parentNode?F.parentNode.disabled===L:F.disabled===L:F.isDisabled===L||F.isDisabled!==!L&&bu(F)===L:F.disabled===L:"label"in F?F.disabled===L:!1}}function Ti(L){return Un(function(F){return F=+F,Un(function(H,fe){for(var j,he=L([],H.length,F),_e=he.length;_e--;)H[j=he[_e]]&&(H[j]=!(fe[j]=H[j]))})})}function Ys(L){return L&&typeof L.getElementsByTagName<"u"&&L}h=wt.support={},T=wt.isXML=function(L){var F=L&&L.namespaceURI,H=L&&(L.ownerDocument||L).documentElement;return!xu.test(F||H&&H.nodeName||"HTML")},Q=wt.setDocument=function(L){var F,H,fe=L?L.ownerDocument||L:it;return fe==ae||fe.nodeType!==9||!fe.documentElement||(ae=fe,qe=ae.documentElement,rt=!T(ae),it!=ae&&(H=ae.defaultView)&&H.top!==H&&(H.addEventListener?H.addEventListener("unload",So,!1):H.attachEvent&&H.attachEvent("onunload",So)),h.scope=En(function(j){return qe.appendChild(j).appendChild(ae.createElement("div")),typeof j.querySelectorAll<"u"&&!j.querySelectorAll(":scope fieldset div").length}),h.cssHas=En(function(){try{return ae.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),h.attributes=En(function(j){return j.className="i",!j.getAttribute("className")}),h.getElementsByTagName=En(function(j){return j.appendChild(ae.createComment("")),!j.getElementsByTagName("*").length}),h.getElementsByClassName=Er.test(ae.getElementsByClassName),h.getById=En(function(j){return qe.appendChild(j).id=bt,!ae.getElementsByName||!ae.getElementsByName(bt).length}),h.getById?(m.filter.ID=function(j){var he=j.replace(Kn,Zn);return function(_e){return _e.getAttribute("id")===he}},m.find.ID=function(j,he){if(typeof he.getElementById<"u"&&rt){var _e=he.getElementById(j);return _e?[_e]:[]}}):(m.filter.ID=function(j){var he=j.replace(Kn,Zn);return function(_e){var we=typeof _e.getAttributeNode<"u"&&_e.getAttributeNode("id");return we&&we.value===he}},m.find.ID=function(j,he){if(typeof he.getElementById<"u"&&rt){var _e,we,Ie,Ke=he.getElementById(j);if(Ke){if(_e=Ke.getAttributeNode("id"),_e&&_e.value===j)return[Ke];for(Ie=he.getElementsByName(j),we=0;Ke=Ie[we++];)if(_e=Ke.getAttributeNode("id"),_e&&_e.value===j)return[Ke]}return[]}}),m.find.TAG=h.getElementsByTagName?function(j,he){if(typeof he.getElementsByTagName<"u")return he.getElementsByTagName(j);if(h.qsa)return he.querySelectorAll(j)}:function(j,he){var _e,we=[],Ie=0,Ke=he.getElementsByTagName(j);if(j==="*"){for(;_e=Ke[Ie++];)_e.nodeType===1&&we.push(_e);return we}return Ke},m.find.CLASS=h.getElementsByClassName&&function(j,he){if(typeof he.getElementsByClassName<"u"&&rt)return he.getElementsByClassName(j)},Wt=[],Ve=[],(h.qsa=Er.test(ae.querySelectorAll))&&(En(function(j){var he;qe.appendChild(j).innerHTML="<a id='"+bt+"'></a><select id='"+bt+"-\r\\' msallowcapture=''><option selected=''></option></select>",j.querySelectorAll("[msallowcapture^='']").length&&Ve.push("[*^$]="+xt+`*(?:''|"")`),j.querySelectorAll("[selected]").length||Ve.push("\\["+xt+"*(?:value|"+qs+")"),j.querySelectorAll("[id~="+bt+"-]").length||Ve.push("~="),he=ae.createElement("input"),he.setAttribute("name",""),j.appendChild(he),j.querySelectorAll("[name='']").length||Ve.push("\\["+xt+"*name"+xt+"*="+xt+`*(?:''|"")`),j.querySelectorAll(":checked").length||Ve.push(":checked"),j.querySelectorAll("a#"+bt+"+*").length||Ve.push(".#.+[+~]"),j.querySelectorAll("\\\f"),Ve.push("[\\r\\n\\f]")}),En(function(j){j.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var he=ae.createElement("input");he.setAttribute("type","hidden"),j.appendChild(he).setAttribute("name","D"),j.querySelectorAll("[name=d]").length&&Ve.push("name"+xt+"*[*^$|!~]?="),j.querySelectorAll(":enabled").length!==2&&Ve.push(":enabled",":disabled"),qe.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&Ve.push(":enabled",":disabled"),j.querySelectorAll("*,:x"),Ve.push(",.*:")})),(h.matchesSelector=Er.test(Ht=qe.matches||qe.webkitMatchesSelector||qe.mozMatchesSelector||qe.oMatchesSelector||qe.msMatchesSelector))&&En(function(j){h.disconnectedMatch=Ht.call(j,"*"),Ht.call(j,"[s!='']:x"),Wt.push("!=",js)}),h.cssHas||Ve.push(":has"),Ve=Ve.length&&new RegExp(Ve.join("|")),Wt=Wt.length&&new RegExp(Wt.join("|")),F=Er.test(qe.compareDocumentPosition),dn=F||Er.test(qe.contains)?function(j,he){var _e=j.nodeType===9&&j.documentElement||j,we=he&&he.parentNode;return j===we||!!(we&&we.nodeType===1&&(_e.contains?_e.contains(we):j.compareDocumentPosition&&j.compareDocumentPosition(we)&16))}:function(j,he){if(he){for(;he=he.parentNode;)if(he===j)return!0}return!1},yi=F?function(j,he){if(j===he)return ve=!0,0;var _e=!j.compareDocumentPosition-!he.compareDocumentPosition;return _e||(_e=(j.ownerDocument||j)==(he.ownerDocument||he)?j.compareDocumentPosition(he):1,_e&1||!h.sortDetached&&he.compareDocumentPosition(j)===_e?j==ae||j.ownerDocument==it&&dn(it,j)?-1:he==ae||he.ownerDocument==it&&dn(it,he)?1:ee?Mi(ee,j)-Mi(ee,he):0:_e&4?-1:1)}:function(j,he){if(j===he)return ve=!0,0;var _e,we=0,Ie=j.parentNode,Ke=he.parentNode,$e=[j],Je=[he];if(!Ie||!Ke)return j==ae?-1:he==ae?1:Ie?-1:Ke?1:ee?Mi(ee,j)-Mi(ee,he):0;if(Ie===Ke)return Mo(j,he);for(_e=j;_e=_e.parentNode;)$e.unshift(_e);for(_e=he;_e=_e.parentNode;)Je.unshift(_e);for(;$e[we]===Je[we];)we++;return we?Mo($e[we],Je[we]):$e[we]==it?-1:Je[we]==it?1:0}),ae},wt.matches=function(L,F){return wt(L,null,null,F)},wt.matchesSelector=function(L,F){if(Q(L),h.matchesSelector&&rt&&!hn[F+" "]&&(!Wt||!Wt.test(F))&&(!Ve||!Ve.test(F)))try{var H=Ht.call(L,F);if(H||h.disconnectedMatch||L.document&&L.document.nodeType!==11)return H}catch{hn(F,!0)}return wt(F,ae,null,[L]).length>0},wt.contains=function(L,F){return(L.ownerDocument||L)!=ae&&Q(L),dn(L,F)},wt.attr=function(L,F){(L.ownerDocument||L)!=ae&&Q(L);var H=m.attrHandle[F.toLowerCase()],fe=H&&Si.call(m.attrHandle,F.toLowerCase())?H(L,F,!rt):void 0;return fe!==void 0?fe:h.attributes||!rt?L.getAttribute(F):(fe=L.getAttributeNode(F))&&fe.specified?fe.value:null},wt.escape=function(L){return(L+"").replace(xo,yo)},wt.error=function(L){throw new Error("Syntax error, unrecognized expression: "+L)},wt.uniqueSort=function(L){var F,H=[],fe=0,j=0;if(ve=!h.detectDuplicates,ee=!h.sortStable&&L.slice(0),L.sort(yi),ve){for(;F=L[j++];)F===L[j]&&(fe=H.push(j));for(;fe--;)L.splice(H[fe],1)}return ee=null,L},M=wt.getText=function(L){var F,H="",fe=0,j=L.nodeType;if(j){if(j===1||j===9||j===11){if(typeof L.textContent=="string")return L.textContent;for(L=L.firstChild;L;L=L.nextSibling)H+=M(L)}else if(j===3||j===4)return L.nodeValue}else for(;F=L[fe++];)H+=M(F);return H},m=wt.selectors={cacheLength:50,createPseudo:Un,match:Yr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(L){return L[1]=L[1].replace(Kn,Zn),L[3]=(L[3]||L[4]||L[5]||"").replace(Kn,Zn),L[2]==="~="&&(L[3]=" "+L[3]+" "),L.slice(0,4)},CHILD:function(L){return L[1]=L[1].toLowerCase(),L[1].slice(0,3)==="nth"?(L[3]||wt.error(L[0]),L[4]=+(L[4]?L[5]+(L[6]||1):2*(L[3]==="even"||L[3]==="odd")),L[5]=+(L[7]+L[8]||L[3]==="odd")):L[3]&&wt.error(L[0]),L},PSEUDO:function(L){var F,H=!L[6]&&L[2];return Yr.CHILD.test(L[0])?null:(L[3]?L[2]=L[4]||L[5]||"":H&&vu.test(H)&&(F=w(H,!0))&&(F=H.indexOf(")",H.length-F)-H.length)&&(L[0]=L[0].slice(0,F),L[2]=H.slice(0,F)),L.slice(0,3))}},filter:{TAG:function(L){var F=L.replace(Kn,Zn).toLowerCase();return L==="*"?function(){return!0}:function(H){return H.nodeName&&H.nodeName.toLowerCase()===F}},CLASS:function(L){var F=Nt[L+" "];return F||(F=new RegExp("(^|"+xt+")"+L+"("+xt+"|$)"))&&Nt(L,function(H){return F.test(typeof H.className=="string"&&H.className||typeof H.getAttribute<"u"&&H.getAttribute("class")||"")})},ATTR:function(L,F,H){return function(fe){var j=wt.attr(fe,L);return j==null?F==="!=":F?(j+="",F==="="?j===H:F==="!="?j!==H:F==="^="?H&&j.indexOf(H)===0:F==="*="?H&&j.indexOf(H)>-1:F==="$="?H&&j.slice(-H.length)===H:F==="~="?(" "+j.replace(pu," ")+" ").indexOf(H)>-1:F==="|="?j===H||j.slice(0,H.length+1)===H+"-":!1):!0}},CHILD:function(L,F,H,fe,j){var he=L.slice(0,3)!=="nth",_e=L.slice(-4)!=="last",we=F==="of-type";return fe===1&&j===0?function(Ie){return!!Ie.parentNode}:function(Ie,Ke,$e){var Je,ut,Et,Ze,qt,Zt,pn=he!==_e?"nextSibling":"previousSibling",Pt=Ie.parentNode,Ar=we&&Ie.nodeName.toLowerCase(),Cr=!$e&&!we,mn=!1;if(Pt){if(he){for(;pn;){for(Ze=Ie;Ze=Ze[pn];)if(we?Ze.nodeName.toLowerCase()===Ar:Ze.nodeType===1)return!1;Zt=pn=L==="only"&&!Zt&&"nextSibling"}return!0}if(Zt=[_e?Pt.firstChild:Pt.lastChild],_e&&Cr){for(Ze=Pt,Et=Ze[bt]||(Ze[bt]={}),ut=Et[Ze.uniqueID]||(Et[Ze.uniqueID]={}),Je=ut[L]||[],qt=Je[0]===on&&Je[1],mn=qt&&Je[2],Ze=qt&&Pt.childNodes[qt];Ze=++qt&&Ze&&Ze[pn]||(mn=qt=0)||Zt.pop();)if(Ze.nodeType===1&&++mn&&Ze===Ie){ut[L]=[on,qt,mn];break}}else if(Cr&&(Ze=Ie,Et=Ze[bt]||(Ze[bt]={}),ut=Et[Ze.uniqueID]||(Et[Ze.uniqueID]={}),Je=ut[L]||[],qt=Je[0]===on&&Je[1],mn=qt),mn===!1)for(;(Ze=++qt&&Ze&&Ze[pn]||(mn=qt=0)||Zt.pop())&&!((we?Ze.nodeName.toLowerCase()===Ar:Ze.nodeType===1)&&++mn&&(Cr&&(Et=Ze[bt]||(Ze[bt]={}),ut=Et[Ze.uniqueID]||(Et[Ze.uniqueID]={}),ut[L]=[on,mn]),Ze===Ie)););return mn-=j,mn===fe||mn%fe===0&&mn/fe>=0}}},PSEUDO:function(L,F){var H,fe=m.pseudos[L]||m.setFilters[L.toLowerCase()]||wt.error("unsupported pseudo: "+L);return fe[bt]?fe(F):fe.length>1?(H=[L,L,"",F],m.setFilters.hasOwnProperty(L.toLowerCase())?Un(function(j,he){for(var _e,we=fe(j,F),Ie=we.length;Ie--;)_e=Mi(j,we[Ie]),j[_e]=!(he[_e]=we[Ie])}):function(j){return fe(j,0,H)}):fe}},pseudos:{not:Un(function(L){var F=[],H=[],fe=z(L.replace($r,"$1"));return fe[bt]?Un(function(j,he,_e,we){for(var Ie,Ke=fe(j,null,we,[]),$e=j.length;$e--;)(Ie=Ke[$e])&&(j[$e]=!(he[$e]=Ie))}):function(j,he,_e){return F[0]=j,fe(F,null,_e,H),F[0]=null,!H.pop()}}),has:Un(function(L){return function(F){return wt(L,F).length>0}}),contains:Un(function(L){return L=L.replace(Kn,Zn),function(F){return(F.textContent||M(F)).indexOf(L)>-1}}),lang:Un(function(L){return _u.test(L||"")||wt.error("unsupported lang: "+L),L=L.replace(Kn,Zn).toLowerCase(),function(F){var H;do if(H=rt?F.lang:F.getAttribute("xml:lang")||F.getAttribute("lang"))return H=H.toLowerCase(),H===L||H.indexOf(L+"-")===0;while((F=F.parentNode)&&F.nodeType===1);return!1}}),target:function(L){var F=a.location&&a.location.hash;return F&&F.slice(1)===L.id},root:function(L){return L===qe},focus:function(L){return L===ae.activeElement&&(!ae.hasFocus||ae.hasFocus())&&!!(L.type||L.href||~L.tabIndex)},enabled:bo(!1),disabled:bo(!0),checked:function(L){var F=L.nodeName.toLowerCase();return F==="input"&&!!L.checked||F==="option"&&!!L.selected},selected:function(L){return L.parentNode&&L.parentNode.selectedIndex,L.selected===!0},empty:function(L){for(L=L.firstChild;L;L=L.nextSibling)if(L.nodeType<6)return!1;return!0},parent:function(L){return!m.pseudos.empty(L)},header:function(L){return Su.test(L.nodeName)},input:function(L){return yu.test(L.nodeName)},button:function(L){var F=L.nodeName.toLowerCase();return F==="input"&&L.type==="button"||F==="button"},text:function(L){var F;return L.nodeName.toLowerCase()==="input"&&L.type==="text"&&((F=L.getAttribute("type"))==null||F.toLowerCase()==="text")},first:Ti(function(){return[0]}),last:Ti(function(L,F){return[F-1]}),eq:Ti(function(L,F,H){return[H<0?H+F:H]}),even:Ti(function(L,F){for(var H=0;H<F;H+=2)L.push(H);return L}),odd:Ti(function(L,F){for(var H=1;H<F;H+=2)L.push(H);return L}),lt:Ti(function(L,F,H){for(var fe=H<0?H+F:H>F?F:H;--fe>=0;)L.push(fe);return L}),gt:Ti(function(L,F,H){for(var fe=H<0?H+F:H;++fe<F;)L.push(fe);return L})}},m.pseudos.nth=m.pseudos.eq;for(l in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})m.pseudos[l]=Tu(l);for(l in{submit:!0,reset:!0})m.pseudos[l]=wu(l);function To(){}To.prototype=m.filters=m.pseudos,m.setFilters=new To,w=wt.tokenize=function(L,F){var H,fe,j,he,_e,we,Ie,Ke=wr[L+" "];if(Ke)return F?0:Ke.slice(0);for(_e=L,we=[],Ie=m.preFilter;_e;){(!H||(fe=mu.exec(_e)))&&(fe&&(_e=_e.slice(fe[0].length)||_e),we.push(j=[])),H=!1,(fe=_o.exec(_e))&&(H=fe.shift(),j.push({value:H,type:fe[0].replace($r," ")}),_e=_e.slice(H.length));for(he in m.filter)(fe=Yr[he].exec(_e))&&(!Ie[he]||(fe=Ie[he](fe)))&&(H=fe.shift(),j.push({value:H,type:he,matches:fe}),_e=_e.slice(H.length));if(!H)break}return F?_e.length:_e?wt.error(L):wr(L,we).slice(0)};function Zr(L){for(var F=0,H=L.length,fe="";F<H;F++)fe+=L[F].value;return fe}function Jr(L,F,H){var fe=F.dir,j=F.next,he=j||fe,_e=H&&he==="parentNode",we=vt++;return F.first?function(Ie,Ke,$e){for(;Ie=Ie[fe];)if(Ie.nodeType===1||_e)return L(Ie,Ke,$e);return!1}:function(Ie,Ke,$e){var Je,ut,Et,Ze=[on,we];if($e){for(;Ie=Ie[fe];)if((Ie.nodeType===1||_e)&&L(Ie,Ke,$e))return!0}else for(;Ie=Ie[fe];)if(Ie.nodeType===1||_e)if(Et=Ie[bt]||(Ie[bt]={}),ut=Et[Ie.uniqueID]||(Et[Ie.uniqueID]={}),j&&j===Ie.nodeName.toLowerCase())Ie=Ie[fe]||Ie;else{if((Je=ut[he])&&Je[0]===on&&Je[1]===we)return Ze[2]=Je[2];if(ut[he]=Ze,Ze[2]=L(Ie,Ke,$e))return!0}return!1}}function Ks(L){return L.length>1?function(F,H,fe){for(var j=L.length;j--;)if(!L[j](F,H,fe))return!1;return!0}:L[0]}function Eu(L,F,H){for(var fe=0,j=F.length;fe<j;fe++)wt(L,F[fe],H);return H}function Qr(L,F,H,fe,j){for(var he,_e=[],we=0,Ie=L.length,Ke=F!=null;we<Ie;we++)(he=L[we])&&(!H||H(he,fe,j))&&(_e.push(he),Ke&&F.push(we));return _e}function Zs(L,F,H,fe,j,he){return fe&&!fe[bt]&&(fe=Zs(fe)),j&&!j[bt]&&(j=Zs(j,he)),Un(function(_e,we,Ie,Ke){var $e,Je,ut,Et=[],Ze=[],qt=we.length,Zt=_e||Eu(F||"*",Ie.nodeType?[Ie]:Ie,[]),pn=L&&(_e||!F)?Qr(Zt,Et,L,Ie,Ke):Zt,Pt=H?j||(_e?L:qt||fe)?[]:we:pn;if(H&&H(pn,Pt,Ie,Ke),fe)for($e=Qr(Pt,Ze),fe($e,[],Ie,Ke),Je=$e.length;Je--;)(ut=$e[Je])&&(Pt[Ze[Je]]=!(pn[Ze[Je]]=ut));if(_e){if(j||L){if(j){for($e=[],Je=Pt.length;Je--;)(ut=Pt[Je])&&$e.push(pn[Je]=ut);j(null,Pt=[],$e,Ke)}for(Je=Pt.length;Je--;)(ut=Pt[Je])&&($e=j?Mi(_e,ut):Et[Je])>-1&&(_e[$e]=!(we[$e]=ut))}}else Pt=Qr(Pt===we?Pt.splice(qt,Pt.length):Pt),j?j(null,we,Pt,Ke):ci.apply(we,Pt)})}function Js(L){for(var F,H,fe,j=L.length,he=m.relative[L[0].type],_e=he||m.relative[" "],we=he?1:0,Ie=Jr(function(Je){return Je===F},_e,!0),Ke=Jr(function(Je){return Mi(F,Je)>-1},_e,!0),$e=[function(Je,ut,Et){var Ze=!he&&(Et||ut!==$)||((F=ut).nodeType?Ie(Je,ut,Et):Ke(Je,ut,Et));return F=null,Ze}];we<j;we++)if(H=m.relative[L[we].type])$e=[Jr(Ks($e),H)];else{if(H=m.filter[L[we].type].apply(null,L[we].matches),H[bt]){for(fe=++we;fe<j&&!m.relative[L[fe].type];fe++);return Zs(we>1&&Ks($e),we>1&&Zr(L.slice(0,we-1).concat({value:L[we-2].type===" "?"*":""})).replace($r,"$1"),H,we<fe&&Js(L.slice(we,fe)),fe<j&&Js(L=L.slice(fe)),fe<j&&Zr(L))}$e.push(H)}return Ks($e)}function Au(L,F){var H=F.length>0,fe=L.length>0,j=function(he,_e,we,Ie,Ke){var $e,Je,ut,Et=0,Ze="0",qt=he&&[],Zt=[],pn=$,Pt=he||fe&&m.find.TAG("*",Ke),Ar=on+=pn==null?1:Math.random()||.1,Cr=Pt.length;for(Ke&&($=_e==ae||_e||Ke);Ze!==Cr&&($e=Pt[Ze])!=null;Ze++){if(fe&&$e){for(Je=0,!_e&&$e.ownerDocument!=ae&&(Q($e),we=!rt);ut=L[Je++];)if(ut($e,_e||ae,we)){Ie.push($e);break}Ke&&(on=Ar)}H&&(($e=!ut&&$e)&&Et--,he&&qt.push($e))}if(Et+=Ze,H&&Ze!==Et){for(Je=0;ut=F[Je++];)ut(qt,Zt,_e,we);if(he){if(Et>0)for(;Ze--;)qt[Ze]||Zt[Ze]||(Zt[Ze]=li.call(Ie));Zt=Qr(Zt)}ci.apply(Ie,Zt),Ke&&!he&&Zt.length>0&&Et+F.length>1&&wt.uniqueSort(Ie)}return Ke&&(on=Ar,$=pn),qt};return H?Un(j):j}return z=wt.compile=function(L,F){var H,fe=[],j=[],he=Xr[L+" "];if(!he){for(F||(F=w(L)),H=F.length;H--;)he=Js(F[H]),he[bt]?fe.push(he):j.push(he);he=Xr(L,Au(j,fe)),he.selector=L}return he},O=wt.select=function(L,F,H,fe){var j,he,_e,we,Ie,Ke=typeof L=="function"&&L,$e=!fe&&w(L=Ke.selector||L);if(H=H||[],$e.length===1){if(he=$e[0]=$e[0].slice(0),he.length>2&&(_e=he[0]).type==="ID"&&F.nodeType===9&&rt&&m.relative[he[1].type]){if(F=(m.find.ID(_e.matches[0].replace(Kn,Zn),F)||[])[0],F)Ke&&(F=F.parentNode);else return H;L=L.slice(he.shift().value.length)}for(j=Yr.needsContext.test(L)?0:he.length;j--&&(_e=he[j],!m.relative[we=_e.type]);)if((Ie=m.find[we])&&(fe=Ie(_e.matches[0].replace(Kn,Zn),Xs.test(he[0].type)&&Ys(F.parentNode)||F))){if(he.splice(j,1),L=fe.length&&Zr(he),!L)return ci.apply(H,fe),H;break}}return(Ke||z(L,$e))(fe,F,!rt,H,!F||Xs.test(L)&&Ys(F.parentNode)||F),H},h.sortStable=bt.split("").sort(yi).join("")===bt,h.detectDuplicates=!!ve,Q(),h.sortDetached=En(function(L){return L.compareDocumentPosition(ae.createElement("fieldset"))&1}),En(function(L){return L.innerHTML="<a href='#'></a>",L.firstChild.getAttribute("href")==="#"})||$s("type|href|height|width",function(L,F,H){if(!H)return L.getAttribute(F,F.toLowerCase()==="type"?1:2)}),(!h.attributes||!En(function(L){return L.innerHTML="<input/>",L.firstChild.setAttribute("value",""),L.firstChild.getAttribute("value")===""}))&&$s("value",function(L,F,H){if(!H&&L.nodeName.toLowerCase()==="input")return L.defaultValue}),En(function(L){return L.getAttribute("disabled")==null})||$s(qs,function(L,F,H){var fe;if(!H)return L[F]===!0?F.toLowerCase():(fe=L.getAttributeNode(F))&&fe.specified?fe.value:null}),wt}(e);u.find=V,u.expr=V.selectors,u.expr[":"]=u.expr.pseudos,u.uniqueSort=u.unique=V.uniqueSort,u.text=V.getText,u.isXMLDoc=V.isXML,u.contains=V.contains,u.escapeSelector=V.escape;var P=function(a,l,h){for(var m=[],M=h!==void 0;(a=a[l])&&a.nodeType!==9;)if(a.nodeType===1){if(M&&u(a).is(h))break;m.push(a)}return m},U=function(a,l){for(var h=[];a;a=a.nextSibling)a.nodeType===1&&a!==l&&h.push(a);return h},Z=u.expr.match.needsContext;function W(a,l){return a.nodeName&&a.nodeName.toLowerCase()===l.toLowerCase()}var B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Y(a,l,h){return b(l)?u.grep(a,function(m,M){return!!l.call(m,M,m)!==h}):l.nodeType?u.grep(a,function(m){return m===l!==h}):typeof l!="string"?u.grep(a,function(m){return d.call(l,m)>-1!==h}):u.filter(l,a,h)}u.filter=function(a,l,h){var m=l[0];return h&&(a=":not("+a+")"),l.length===1&&m.nodeType===1?u.find.matchesSelector(m,a)?[m]:[]:u.find.matches(a,u.grep(l,function(M){return M.nodeType===1}))},u.fn.extend({find:function(a){var l,h,m=this.length,M=this;if(typeof a!="string")return this.pushStack(u(a).filter(function(){for(l=0;l<m;l++)if(u.contains(M[l],this))return!0}));for(h=this.pushStack([]),l=0;l<m;l++)u.find(a,M[l],h);return m>1?u.uniqueSort(h):h},filter:function(a){return this.pushStack(Y(this,a||[],!1))},not:function(a){return this.pushStack(Y(this,a||[],!0))},is:function(a){return!!Y(this,typeof a=="string"&&Z.test(a)?u(a):a||[],!1).length}});var re,ue=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ge=u.fn.init=function(a,l,h){var m,M;if(!a)return this;if(h=h||re,typeof a=="string")if(a[0]==="<"&&a[a.length-1]===">"&&a.length>=3?m=[null,a,null]:m=ue.exec(a),m&&(m[1]||!l))if(m[1]){if(l=l instanceof u?l[0]:l,u.merge(this,u.parseHTML(m[1],l&&l.nodeType?l.ownerDocument||l:f,!0)),B.test(m[1])&&u.isPlainObject(l))for(m in l)b(this[m])?this[m](l[m]):this.attr(m,l[m]);return this}else return M=f.getElementById(m[2]),M&&(this[0]=M,this.length=1),this;else return!l||l.jquery?(l||h).find(a):this.constructor(l).find(a);else{if(a.nodeType)return this[0]=a,this.length=1,this;if(b(a))return h.ready!==void 0?h.ready(a):a(u)}return u.makeArray(a,this)};ge.prototype=u.fn,re=u(f);var le=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(a){var l=u(a,this),h=l.length;return this.filter(function(){for(var m=0;m<h;m++)if(u.contains(this,l[m]))return!0})},closest:function(a,l){var h,m=0,M=this.length,T=[],w=typeof a!="string"&&u(a);if(!Z.test(a)){for(;m<M;m++)for(h=this[m];h&&h!==l;h=h.parentNode)if(h.nodeType<11&&(w?w.index(h)>-1:h.nodeType===1&&u.find.matchesSelector(h,a))){T.push(h);break}}return this.pushStack(T.length>1?u.uniqueSort(T):T)},index:function(a){return a?typeof a=="string"?d.call(u(a),this[0]):d.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,l){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(a,l))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function ye(a,l){for(;(a=a[l])&&a.nodeType!==1;);return a}u.each({parent:function(a){var l=a.parentNode;return l&&l.nodeType!==11?l:null},parents:function(a){return P(a,"parentNode")},parentsUntil:function(a,l,h){return P(a,"parentNode",h)},next:function(a){return ye(a,"nextSibling")},prev:function(a){return ye(a,"previousSibling")},nextAll:function(a){return P(a,"nextSibling")},prevAll:function(a){return P(a,"previousSibling")},nextUntil:function(a,l,h){return P(a,"nextSibling",h)},prevUntil:function(a,l,h){return P(a,"previousSibling",h)},siblings:function(a){return U((a.parentNode||{}).firstChild,a)},children:function(a){return U(a.firstChild)},contents:function(a){return a.contentDocument!=null&&r(a.contentDocument)?a.contentDocument:(W(a,"template")&&(a=a.content||a),u.merge([],a.childNodes))}},function(a,l){u.fn[a]=function(h,m){var M=u.map(this,l,h);return a.slice(-5)!=="Until"&&(m=h),m&&typeof m=="string"&&(M=u.filter(m,M)),this.length>1&&(be[a]||u.uniqueSort(M),le.test(a)&&M.reverse()),this.pushStack(M)}});var He=/[^\x20\t\r\n\f]+/g;function Te(a){var l={};return u.each(a.match(He)||[],function(h,m){l[m]=!0}),l}u.Callbacks=function(a){a=typeof a=="string"?Te(a):u.extend({},a);var l,h,m,M,T=[],w=[],z=-1,O=function(){for(M=M||a.once,m=l=!0;w.length;z=-1)for(h=w.shift();++z<T.length;)T[z].apply(h[0],h[1])===!1&&a.stopOnFalse&&(z=T.length,h=!1);a.memory||(h=!1),l=!1,M&&(h?T=[]:T="")},$={add:function(){return T&&(h&&!l&&(z=T.length-1,w.push(h)),function ee(ve){u.each(ve,function(Q,ae){b(ae)?(!a.unique||!$.has(ae))&&T.push(ae):ae&&ae.length&&E(ae)!=="string"&&ee(ae)})}(arguments),h&&!l&&O()),this},remove:function(){return u.each(arguments,function(ee,ve){for(var Q;(Q=u.inArray(ve,T,Q))>-1;)T.splice(Q,1),Q<=z&&z--}),this},has:function(ee){return ee?u.inArray(ee,T)>-1:T.length>0},empty:function(){return T&&(T=[]),this},disable:function(){return M=w=[],T=h="",this},disabled:function(){return!T},lock:function(){return M=w=[],!h&&!l&&(T=h=""),this},locked:function(){return!!M},fireWith:function(ee,ve){return M||(ve=ve||[],ve=[ee,ve.slice?ve.slice():ve],w.push(ve),l||O()),this},fire:function(){return $.fireWith(this,arguments),this},fired:function(){return!!m}};return $};function se(a){return a}function me(a){throw a}function Ae(a,l,h,m){var M;try{a&&b(M=a.promise)?M.call(a).done(l).fail(h):a&&b(M=a.then)?M.call(a,l,h):l.apply(void 0,[a].slice(m))}catch(T){h.apply(void 0,[T])}}u.extend({Deferred:function(a){var l=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],h="pending",m={state:function(){return h},always:function(){return M.done(arguments).fail(arguments),this},catch:function(T){return m.then(null,T)},pipe:function(){var T=arguments;return u.Deferred(function(w){u.each(l,function(z,O){var $=b(T[O[4]])&&T[O[4]];M[O[1]](function(){var ee=$&&$.apply(this,arguments);ee&&b(ee.promise)?ee.promise().progress(w.notify).done(w.resolve).fail(w.reject):w[O[0]+"With"](this,$?[ee]:arguments)})}),T=null}).promise()},then:function(T,w,z){var O=0;function $(ee,ve,Q,ae){return function(){var qe=this,rt=arguments,Ve=function(){var Ht,dn;if(!(ee<O)){if(Ht=Q.apply(qe,rt),Ht===ve.promise())throw new TypeError("Thenable self-resolution");dn=Ht&&(typeof Ht=="object"||typeof Ht=="function")&&Ht.then,b(dn)?ae?dn.call(Ht,$(O,ve,se,ae),$(O,ve,me,ae)):(O++,dn.call(Ht,$(O,ve,se,ae),$(O,ve,me,ae),$(O,ve,se,ve.notifyWith))):(Q!==se&&(qe=void 0,rt=[Ht]),(ae||ve.resolveWith)(qe,rt))}},Wt=ae?Ve:function(){try{Ve()}catch(Ht){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(Ht,Wt.stackTrace),ee+1>=O&&(Q!==me&&(qe=void 0,rt=[Ht]),ve.rejectWith(qe,rt))}};ee?Wt():(u.Deferred.getStackHook&&(Wt.stackTrace=u.Deferred.getStackHook()),e.setTimeout(Wt))}}return u.Deferred(function(ee){l[0][3].add($(0,ee,b(z)?z:se,ee.notifyWith)),l[1][3].add($(0,ee,b(T)?T:se)),l[2][3].add($(0,ee,b(w)?w:me))}).promise()},promise:function(T){return T!=null?u.extend(T,m):m}},M={};return u.each(l,function(T,w){var z=w[2],O=w[5];m[w[1]]=z.add,O&&z.add(function(){h=O},l[3-T][2].disable,l[3-T][3].disable,l[0][2].lock,l[0][3].lock),z.add(w[3].fire),M[w[0]]=function(){return M[w[0]+"With"](this===M?void 0:this,arguments),this},M[w[0]+"With"]=z.fireWith}),m.promise(M),a&&a.call(M,M),M},when:function(a){var l=arguments.length,h=l,m=Array(h),M=s.call(arguments),T=u.Deferred(),w=function(z){return function(O){m[z]=this,M[z]=arguments.length>1?s.call(arguments):O,--l||T.resolveWith(m,M)}};if(l<=1&&(Ae(a,T.done(w(h)).resolve,T.reject,!l),T.state()==="pending"||b(M[h]&&M[h].then)))return T.then();for(;h--;)Ae(M[h],w(h),T.reject);return T.promise()}});var Ne=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(a,l){e.console&&e.console.warn&&a&&Ne.test(a.name)&&e.console.warn("jQuery.Deferred exception: "+a.message,a.stack,l)},u.readyException=function(a){e.setTimeout(function(){throw a})};var ne=u.Deferred();u.fn.ready=function(a){return ne.then(a).catch(function(l){u.readyException(l)}),this},u.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(a!==!0&&--u.readyWait>0)&&ne.resolveWith(f,[u]))}}),u.ready.then=ne.then;function Qe(){f.removeEventListener("DOMContentLoaded",Qe),e.removeEventListener("load",Qe),u.ready()}f.readyState==="complete"||f.readyState!=="loading"&&!f.documentElement.doScroll?e.setTimeout(u.ready):(f.addEventListener("DOMContentLoaded",Qe),e.addEventListener("load",Qe));var Ge=function(a,l,h,m,M,T,w){var z=0,O=a.length,$=h==null;if(E(h)==="object"){M=!0;for(z in h)Ge(a,l,z,h[z],!0,T,w)}else if(m!==void 0&&(M=!0,b(m)||(w=!0),$&&(w?(l.call(a,m),l=null):($=l,l=function(ee,ve,Q){return $.call(u(ee),Q)})),l))for(;z<O;z++)l(a[z],h,w?m:m.call(a[z],z,l(a[z],h)));return M?a:$?l.call(a):O?l(a[0],h):T},Ee=/^-ms-/,Ye=/-([a-z])/g;function gt(a,l){return l.toUpperCase()}function Fe(a){return a.replace(Ee,"ms-").replace(Ye,gt)}var nt=function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType};function St(){this.expando=u.expando+St.uid++}St.uid=1,St.prototype={cache:function(a){var l=a[this.expando];return l||(l={},nt(a)&&(a.nodeType?a[this.expando]=l:Object.defineProperty(a,this.expando,{value:l,configurable:!0}))),l},set:function(a,l,h){var m,M=this.cache(a);if(typeof l=="string")M[Fe(l)]=h;else for(m in l)M[Fe(m)]=l[m];return M},get:function(a,l){return l===void 0?this.cache(a):a[this.expando]&&a[this.expando][Fe(l)]},access:function(a,l,h){return l===void 0||l&&typeof l=="string"&&h===void 0?this.get(a,l):(this.set(a,l,h),h!==void 0?h:l)},remove:function(a,l){var h,m=a[this.expando];if(m!==void 0){if(l!==void 0)for(Array.isArray(l)?l=l.map(Fe):(l=Fe(l),l=l in m?[l]:l.match(He)||[]),h=l.length;h--;)delete m[l[h]];(l===void 0||u.isEmptyObject(m))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var l=a[this.expando];return l!==void 0&&!u.isEmptyObject(l)}};var Pe=new St,ht=new St,Rt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,mt=/[A-Z]/g;function Mt(a){return a==="true"?!0:a==="false"?!1:a==="null"?null:a===+a+""?+a:Rt.test(a)?JSON.parse(a):a}function Vt(a,l,h){var m;if(h===void 0&&a.nodeType===1)if(m="data-"+l.replace(mt,"-$&").toLowerCase(),h=a.getAttribute(m),typeof h=="string"){try{h=Mt(h)}catch{}ht.set(a,l,h)}else h=void 0;return h}u.extend({hasData:function(a){return ht.hasData(a)||Pe.hasData(a)},data:function(a,l,h){return ht.access(a,l,h)},removeData:function(a,l){ht.remove(a,l)},_data:function(a,l,h){return Pe.access(a,l,h)},_removeData:function(a,l){Pe.remove(a,l)}}),u.fn.extend({data:function(a,l){var h,m,M,T=this[0],w=T&&T.attributes;if(a===void 0){if(this.length&&(M=ht.get(T),T.nodeType===1&&!Pe.get(T,"hasDataAttrs"))){for(h=w.length;h--;)w[h]&&(m=w[h].name,m.indexOf("data-")===0&&(m=Fe(m.slice(5)),Vt(T,m,M[m])));Pe.set(T,"hasDataAttrs",!0)}return M}return typeof a=="object"?this.each(function(){ht.set(this,a)}):Ge(this,function(z){var O;if(T&&z===void 0)return O=ht.get(T,a),O!==void 0||(O=Vt(T,a),O!==void 0)?O:void 0;this.each(function(){ht.set(this,a,z)})},null,l,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){ht.remove(this,a)})}}),u.extend({queue:function(a,l,h){var m;if(a)return l=(l||"fx")+"queue",m=Pe.get(a,l),h&&(!m||Array.isArray(h)?m=Pe.access(a,l,u.makeArray(h)):m.push(h)),m||[]},dequeue:function(a,l){l=l||"fx";var h=u.queue(a,l),m=h.length,M=h.shift(),T=u._queueHooks(a,l),w=function(){u.dequeue(a,l)};M==="inprogress"&&(M=h.shift(),m--),M&&(l==="fx"&&h.unshift("inprogress"),delete T.stop,M.call(a,w,T)),!m&&T&&T.empty.fire()},_queueHooks:function(a,l){var h=l+"queueHooks";return Pe.get(a,h)||Pe.access(a,h,{empty:u.Callbacks("once memory").add(function(){Pe.remove(a,[l+"queue",h])})})}}),u.fn.extend({queue:function(a,l){var h=2;return typeof a!="string"&&(l=a,a="fx",h--),arguments.length<h?u.queue(this[0],a):l===void 0?this:this.each(function(){var m=u.queue(this,a,l);u._queueHooks(this,a),a==="fx"&&m[0]!=="inprogress"&&u.dequeue(this,a)})},dequeue:function(a){return this.each(function(){u.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,l){var h,m=1,M=u.Deferred(),T=this,w=this.length,z=function(){--m||M.resolveWith(T,[T])};for(typeof a!="string"&&(l=a,a=void 0),a=a||"fx";w--;)h=Pe.get(T[w],a+"queueHooks"),h&&h.empty&&(m++,h.empty.add(z));return z(),M.promise(l)}});var N=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=new RegExp("^(?:([+-])=|)("+N+")([a-z%]*)$","i"),ie=["Top","Right","Bottom","Left"],xe=f.documentElement,Se=function(a){return u.contains(a.ownerDocument,a)},Le={composed:!0};xe.getRootNode&&(Se=function(a){return u.contains(a.ownerDocument,a)||a.getRootNode(Le)===a.ownerDocument});var k=function(a,l){return a=l||a,a.style.display==="none"||a.style.display===""&&Se(a)&&u.css(a,"display")==="none"};function pe(a,l,h,m){var M,T,w=20,z=m?function(){return m.cur()}:function(){return u.css(a,l,"")},O=z(),$=h&&h[3]||(u.cssNumber[l]?"":"px"),ee=a.nodeType&&(u.cssNumber[l]||$!=="px"&&+O)&&R.exec(u.css(a,l));if(ee&&ee[3]!==$){for(O=O/2,$=$||ee[3],ee=+O||1;w--;)u.style(a,l,ee+$),(1-T)*(1-(T=z()/O||.5))<=0&&(w=0),ee=ee/T;ee=ee*2,u.style(a,l,ee+$),h=h||[]}return h&&(ee=+ee||+O||0,M=h[1]?ee+(h[1]+1)*h[2]:+h[2],m&&(m.unit=$,m.start=ee,m.end=M)),M}var te={};function De(a){var l,h=a.ownerDocument,m=a.nodeName,M=te[m];return M||(l=h.body.appendChild(h.createElement(m)),M=u.css(l,"display"),l.parentNode.removeChild(l),M==="none"&&(M="block"),te[m]=M,M)}function Ue(a,l){for(var h,m,M=[],T=0,w=a.length;T<w;T++)m=a[T],m.style&&(h=m.style.display,l?(h==="none"&&(M[T]=Pe.get(m,"display")||null,M[T]||(m.style.display="")),m.style.display===""&&k(m)&&(M[T]=De(m))):h!=="none"&&(M[T]="none",Pe.set(m,"display",h)));for(T=0;T<w;T++)M[T]!=null&&(a[T].style.display=M[T]);return a}u.fn.extend({show:function(){return Ue(this,!0)},hide:function(){return Ue(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){k(this)?u(this).show():u(this).hide()})}});var ze=/^(?:checkbox|radio)$/i,Oe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Be=/^$|^module$|\/(?:java|ecma)script/i;(function(){var a=f.createDocumentFragment(),l=a.appendChild(f.createElement("div")),h=f.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),l.appendChild(h),S.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",S.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",S.option=!!l.lastChild})();var We={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};We.tbody=We.tfoot=We.colgroup=We.caption=We.thead,We.th=We.td,S.option||(We.optgroup=We.option=[1,"<select multiple='multiple'>","</select>"]);function Xe(a,l){var h;return typeof a.getElementsByTagName<"u"?h=a.getElementsByTagName(l||"*"):typeof a.querySelectorAll<"u"?h=a.querySelectorAll(l||"*"):h=[],l===void 0||l&&W(a,l)?u.merge([a],h):h}function At(a,l){for(var h=0,m=a.length;h<m;h++)Pe.set(a[h],"globalEval",!l||Pe.get(l[h],"globalEval"))}var G=/<|&#?\w+;/;function ce(a,l,h,m,M){for(var T,w,z,O,$,ee,ve=l.createDocumentFragment(),Q=[],ae=0,qe=a.length;ae<qe;ae++)if(T=a[ae],T||T===0)if(E(T)==="object")u.merge(Q,T.nodeType?[T]:T);else if(!G.test(T))Q.push(l.createTextNode(T));else{for(w=w||ve.appendChild(l.createElement("div")),z=(Oe.exec(T)||["",""])[1].toLowerCase(),O=We[z]||We._default,w.innerHTML=O[1]+u.htmlPrefilter(T)+O[2],ee=O[0];ee--;)w=w.lastChild;u.merge(Q,w.childNodes),w=ve.firstChild,w.textContent=""}for(ve.textContent="",ae=0;T=Q[ae++];){if(m&&u.inArray(T,m)>-1){M&&M.push(T);continue}if($=Se(T),w=Xe(ve.appendChild(T),"script"),$&&At(w),h)for(ee=0;T=w[ee++];)Be.test(T.type||"")&&h.push(T)}return ve}var Me=/^([^.]*)(?:\.(.+)|)/;function Re(){return!0}function ke(){return!1}function Tt(a,l){return a===Ct()==(l==="focus")}function Ct(){try{return f.activeElement}catch{}}function zt(a,l,h,m,M,T){var w,z;if(typeof l=="object"){typeof h!="string"&&(m=m||h,h=void 0);for(z in l)zt(a,z,h,m,l[z],T);return a}if(m==null&&M==null?(M=h,m=h=void 0):M==null&&(typeof h=="string"?(M=m,m=void 0):(M=m,m=h,h=void 0)),M===!1)M=ke;else if(!M)return a;return T===1&&(w=M,M=function(O){return u().off(O),w.apply(this,arguments)},M.guid=w.guid||(w.guid=u.guid++)),a.each(function(){u.event.add(this,l,M,m,h)})}u.event={global:{},add:function(a,l,h,m,M){var T,w,z,O,$,ee,ve,Q,ae,qe,rt,Ve=Pe.get(a);if(nt(a))for(h.handler&&(T=h,h=T.handler,M=T.selector),M&&u.find.matchesSelector(xe,M),h.guid||(h.guid=u.guid++),(O=Ve.events)||(O=Ve.events=Object.create(null)),(w=Ve.handle)||(w=Ve.handle=function(Wt){return typeof u<"u"&&u.event.triggered!==Wt.type?u.event.dispatch.apply(a,arguments):void 0}),l=(l||"").match(He)||[""],$=l.length;$--;)z=Me.exec(l[$])||[],ae=rt=z[1],qe=(z[2]||"").split(".").sort(),ae&&(ve=u.event.special[ae]||{},ae=(M?ve.delegateType:ve.bindType)||ae,ve=u.event.special[ae]||{},ee=u.extend({type:ae,origType:rt,data:m,handler:h,guid:h.guid,selector:M,needsContext:M&&u.expr.match.needsContext.test(M),namespace:qe.join(".")},T),(Q=O[ae])||(Q=O[ae]=[],Q.delegateCount=0,(!ve.setup||ve.setup.call(a,m,qe,w)===!1)&&a.addEventListener&&a.addEventListener(ae,w)),ve.add&&(ve.add.call(a,ee),ee.handler.guid||(ee.handler.guid=h.guid)),M?Q.splice(Q.delegateCount++,0,ee):Q.push(ee),u.event.global[ae]=!0)},remove:function(a,l,h,m,M){var T,w,z,O,$,ee,ve,Q,ae,qe,rt,Ve=Pe.hasData(a)&&Pe.get(a);if(!(!Ve||!(O=Ve.events))){for(l=(l||"").match(He)||[""],$=l.length;$--;){if(z=Me.exec(l[$])||[],ae=rt=z[1],qe=(z[2]||"").split(".").sort(),!ae){for(ae in O)u.event.remove(a,ae+l[$],h,m,!0);continue}for(ve=u.event.special[ae]||{},ae=(m?ve.delegateType:ve.bindType)||ae,Q=O[ae]||[],z=z[2]&&new RegExp("(^|\\.)"+qe.join("\\.(?:.*\\.|)")+"(\\.|$)"),w=T=Q.length;T--;)ee=Q[T],(M||rt===ee.origType)&&(!h||h.guid===ee.guid)&&(!z||z.test(ee.namespace))&&(!m||m===ee.selector||m==="**"&&ee.selector)&&(Q.splice(T,1),ee.selector&&Q.delegateCount--,ve.remove&&ve.remove.call(a,ee));w&&!Q.length&&((!ve.teardown||ve.teardown.call(a,qe,Ve.handle)===!1)&&u.removeEvent(a,ae,Ve.handle),delete O[ae])}u.isEmptyObject(O)&&Pe.remove(a,"handle events")}},dispatch:function(a){var l,h,m,M,T,w,z=new Array(arguments.length),O=u.event.fix(a),$=(Pe.get(this,"events")||Object.create(null))[O.type]||[],ee=u.event.special[O.type]||{};for(z[0]=O,l=1;l<arguments.length;l++)z[l]=arguments[l];if(O.delegateTarget=this,!(ee.preDispatch&&ee.preDispatch.call(this,O)===!1)){for(w=u.event.handlers.call(this,O,$),l=0;(M=w[l++])&&!O.isPropagationStopped();)for(O.currentTarget=M.elem,h=0;(T=M.handlers[h++])&&!O.isImmediatePropagationStopped();)(!O.rnamespace||T.namespace===!1||O.rnamespace.test(T.namespace))&&(O.handleObj=T,O.data=T.data,m=((u.event.special[T.origType]||{}).handle||T.handler).apply(M.elem,z),m!==void 0&&(O.result=m)===!1&&(O.preventDefault(),O.stopPropagation()));return ee.postDispatch&&ee.postDispatch.call(this,O),O.result}},handlers:function(a,l){var h,m,M,T,w,z=[],O=l.delegateCount,$=a.target;if(O&&$.nodeType&&!(a.type==="click"&&a.button>=1)){for(;$!==this;$=$.parentNode||this)if($.nodeType===1&&!(a.type==="click"&&$.disabled===!0)){for(T=[],w={},h=0;h<O;h++)m=l[h],M=m.selector+" ",w[M]===void 0&&(w[M]=m.needsContext?u(M,this).index($)>-1:u.find(M,this,null,[$]).length),w[M]&&T.push(m);T.length&&z.push({elem:$,handlers:T})}}return $=this,O<l.length&&z.push({elem:$,handlers:l.slice(O)}),z},addProp:function(a,l){Object.defineProperty(u.Event.prototype,a,{enumerable:!0,configurable:!0,get:b(l)?function(){if(this.originalEvent)return l(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(h){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(a){return a[u.expando]?a:new u.Event(a)},special:{load:{noBubble:!0},click:{setup:function(a){var l=this||a;return ze.test(l.type)&&l.click&&W(l,"input")&&un(l,"click",Re),!1},trigger:function(a){var l=this||a;return ze.test(l.type)&&l.click&&W(l,"input")&&un(l,"click"),!0},_default:function(a){var l=a.target;return ze.test(l.type)&&l.click&&W(l,"input")&&Pe.get(l,"click")||W(l,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}};function un(a,l,h){if(!h){Pe.get(a,l)===void 0&&u.event.add(a,l,Re);return}Pe.set(a,l,!1),u.event.add(a,l,{namespace:!1,handler:function(m){var M,T,w=Pe.get(this,l);if(m.isTrigger&1&&this[l]){if(w.length)(u.event.special[l]||{}).delegateType&&m.stopPropagation();else if(w=s.call(arguments),Pe.set(this,l,w),M=h(this,l),this[l](),T=Pe.get(this,l),w!==T||M?Pe.set(this,l,!1):T={},w!==T)return m.stopImmediatePropagation(),m.preventDefault(),T&&T.value}else w.length&&(Pe.set(this,l,{value:u.event.trigger(u.extend(w[0],u.Event.prototype),w.slice(1),this)}),m.stopImmediatePropagation())}})}u.removeEvent=function(a,l,h){a.removeEventListener&&a.removeEventListener(l,h)},u.Event=function(a,l){if(!(this instanceof u.Event))return new u.Event(a,l);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===void 0&&a.returnValue===!1?Re:ke,this.target=a.target&&a.target.nodeType===3?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,l&&u.extend(this,l),this.timeStamp=a&&a.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Re,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Re,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Re,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(a,l){u.event.special[a]={setup:function(){return un(this,a,Tt),!1},trigger:function(){return un(this,a),!0},_default:function(h){return Pe.get(h.target,a)},delegateType:l}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,l){u.event.special[a]={delegateType:l,bindType:l,handle:function(h){var m,M=this,T=h.relatedTarget,w=h.handleObj;return(!T||T!==M&&!u.contains(M,T))&&(h.type=w.origType,m=w.handler.apply(this,arguments),h.type=l),m}}}),u.fn.extend({on:function(a,l,h,m){return zt(this,a,l,h,m)},one:function(a,l,h,m){return zt(this,a,l,h,m,1)},off:function(a,l,h){var m,M;if(a&&a.preventDefault&&a.handleObj)return m=a.handleObj,u(a.delegateTarget).off(m.namespace?m.origType+"."+m.namespace:m.origType,m.selector,m.handler),this;if(typeof a=="object"){for(M in a)this.off(M,l,a[M]);return this}return(l===!1||typeof l=="function")&&(h=l,l=void 0),h===!1&&(h=ke),this.each(function(){u.event.remove(this,a,h,l)})}});var It=/<script|<style|<link/i,an=/checked\s*(?:[^=]|=\s*.checked.)/i,Tn=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function vi(a,l){return W(a,"table")&&W(l.nodeType!==11?l:l.firstChild,"tr")&&u(a).children("tbody")[0]||a}function qr(a){return a.type=(a.getAttribute("type")!==null)+"/"+a.type,a}function Os(a){return(a.type||"").slice(0,5)==="true/"?a.type=a.type.slice(5):a.removeAttribute("type"),a}function jr(a,l){var h,m,M,T,w,z,O;if(l.nodeType===1){if(Pe.hasData(a)&&(T=Pe.get(a),O=T.events,O)){Pe.remove(l,"handle events");for(M in O)for(h=0,m=O[M].length;h<m;h++)u.event.add(l,M,O[M][h])}ht.hasData(a)&&(w=ht.access(a),z=u.extend({},w),ht.set(l,z))}}function Fs(a,l){var h=l.nodeName.toLowerCase();h==="input"&&ze.test(a.type)?l.checked=a.checked:(h==="input"||h==="textarea")&&(l.defaultValue=a.defaultValue)}function I(a,l,h,m){l=c(l);var M,T,w,z,O,$,ee=0,ve=a.length,Q=ve-1,ae=l[0],qe=b(ae);if(qe||ve>1&&typeof ae=="string"&&!S.checkClone&&an.test(ae))return a.each(function(rt){var Ve=a.eq(rt);qe&&(l[0]=ae.call(this,rt,Ve.html())),I(Ve,l,h,m)});if(ve&&(M=ce(l,a[0].ownerDocument,!1,a,m),T=M.firstChild,M.childNodes.length===1&&(M=T),T||m)){for(w=u.map(Xe(M,"script"),qr),z=w.length;ee<ve;ee++)O=M,ee!==Q&&(O=u.clone(O,!0,!0),z&&u.merge(w,Xe(O,"script"))),h.call(a[ee],O,ee);if(z)for($=w[w.length-1].ownerDocument,u.map(w,Os),ee=0;ee<z;ee++)O=w[ee],Be.test(O.type||"")&&!Pe.access(O,"globalEval")&&u.contains($,O)&&(O.src&&(O.type||"").toLowerCase()!=="module"?u._evalUrl&&!O.noModule&&u._evalUrl(O.src,{nonce:O.nonce||O.getAttribute("nonce")},$):C(O.textContent.replace(Tn,""),O,$))}return a}function J(a,l,h){for(var m,M=l?u.filter(l,a):a,T=0;(m=M[T])!=null;T++)!h&&m.nodeType===1&&u.cleanData(Xe(m)),m.parentNode&&(h&&Se(m)&&At(Xe(m,"script")),m.parentNode.removeChild(m));return a}u.extend({htmlPrefilter:function(a){return a},clone:function(a,l,h){var m,M,T,w,z=a.cloneNode(!0),O=Se(a);if(!S.noCloneChecked&&(a.nodeType===1||a.nodeType===11)&&!u.isXMLDoc(a))for(w=Xe(z),T=Xe(a),m=0,M=T.length;m<M;m++)Fs(T[m],w[m]);if(l)if(h)for(T=T||Xe(a),w=w||Xe(z),m=0,M=T.length;m<M;m++)jr(T[m],w[m]);else jr(a,z);return w=Xe(z,"script"),w.length>0&&At(w,!O&&Xe(a,"script")),z},cleanData:function(a){for(var l,h,m,M=u.event.special,T=0;(h=a[T])!==void 0;T++)if(nt(h)){if(l=h[Pe.expando]){if(l.events)for(m in l.events)M[m]?u.event.remove(h,m):u.removeEvent(h,m,l.handle);h[Pe.expando]=void 0}h[ht.expando]&&(h[ht.expando]=void 0)}}}),u.fn.extend({detach:function(a){return J(this,a,!0)},remove:function(a){return J(this,a)},text:function(a){return Ge(this,function(l){return l===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=l)})},null,a,arguments.length)},append:function(){return I(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=vi(this,a);l.appendChild(a)}})},prepend:function(){return I(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=vi(this,a);l.insertBefore(a,l.firstChild)}})},before:function(){return I(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return I(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,l=0;(a=this[l])!=null;l++)a.nodeType===1&&(u.cleanData(Xe(a,!1)),a.textContent="");return this},clone:function(a,l){return a=a??!1,l=l??a,this.map(function(){return u.clone(this,a,l)})},html:function(a){return Ge(this,function(l){var h=this[0]||{},m=0,M=this.length;if(l===void 0&&h.nodeType===1)return h.innerHTML;if(typeof l=="string"&&!It.test(l)&&!We[(Oe.exec(l)||["",""])[1].toLowerCase()]){l=u.htmlPrefilter(l);try{for(;m<M;m++)h=this[m]||{},h.nodeType===1&&(u.cleanData(Xe(h,!1)),h.innerHTML=l);h=0}catch{}}h&&this.empty().append(l)},null,a,arguments.length)},replaceWith:function(){var a=[];return I(this,arguments,function(l){var h=this.parentNode;u.inArray(this,a)<0&&(u.cleanData(Xe(this)),h&&h.replaceChild(l,this))},a)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,l){u.fn[a]=function(h){for(var m,M=[],T=u(h),w=T.length-1,z=0;z<=w;z++)m=z===w?this:this.clone(!0),u(T[z])[l](m),o.apply(M,m.get());return this.pushStack(M)}});var oe=new RegExp("^("+N+")(?!px)[a-z%]+$","i"),K=/^--/,de=function(a){var l=a.ownerDocument.defaultView;return(!l||!l.opener)&&(l=e),l.getComputedStyle(a)},je=function(a,l,h){var m,M,T={};for(M in l)T[M]=a.style[M],a.style[M]=l[M];m=h.call(a);for(M in l)a.style[M]=T[M];return m},et=new RegExp(ie.join("|"),"i"),tt="[\\x20\\t\\r\\n\\f]",at=new RegExp("^"+tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+tt+"+$","g");(function(){function a(){if($){O.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",$.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xe.appendChild(O).appendChild($);var ee=e.getComputedStyle($);h=ee.top!=="1%",z=l(ee.marginLeft)===12,$.style.right="60%",T=l(ee.right)===36,m=l(ee.width)===36,$.style.position="absolute",M=l($.offsetWidth/3)===12,xe.removeChild(O),$=null}}function l(ee){return Math.round(parseFloat(ee))}var h,m,M,T,w,z,O=f.createElement("div"),$=f.createElement("div");$.style&&($.style.backgroundClip="content-box",$.cloneNode(!0).style.backgroundClip="",S.clearCloneStyle=$.style.backgroundClip==="content-box",u.extend(S,{boxSizingReliable:function(){return a(),m},pixelBoxStyles:function(){return a(),T},pixelPosition:function(){return a(),h},reliableMarginLeft:function(){return a(),z},scrollboxSize:function(){return a(),M},reliableTrDimensions:function(){var ee,ve,Q,ae;return w==null&&(ee=f.createElement("table"),ve=f.createElement("tr"),Q=f.createElement("div"),ee.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ve.style.cssText="border:1px solid",ve.style.height="1px",Q.style.height="9px",Q.style.display="block",xe.appendChild(ee).appendChild(ve).appendChild(Q),ae=e.getComputedStyle(ve),w=parseInt(ae.height,10)+parseInt(ae.borderTopWidth,10)+parseInt(ae.borderBottomWidth,10)===ve.offsetHeight,xe.removeChild(ee)),w}}))})();function st(a,l,h){var m,M,T,w,z=K.test(l),O=a.style;return h=h||de(a),h&&(w=h.getPropertyValue(l)||h[l],z&&w&&(w=w.replace(at,"$1")||void 0),w===""&&!Se(a)&&(w=u.style(a,l)),!S.pixelBoxStyles()&&oe.test(w)&&et.test(l)&&(m=O.width,M=O.minWidth,T=O.maxWidth,O.minWidth=O.maxWidth=O.width=w,w=h.width,O.width=m,O.minWidth=M,O.maxWidth=T)),w!==void 0?w+"":w}function ot(a,l){return{get:function(){if(a()){delete this.get;return}return(this.get=l).apply(this,arguments)}}}var lt=["Webkit","Moz","ms"],_t=f.createElement("div").style,$t={};function fn(a){for(var l=a[0].toUpperCase()+a.slice(1),h=lt.length;h--;)if(a=lt[h]+l,a in _t)return a}function Rn(a){var l=u.cssProps[a]||$t[a];return l||(a in _t?a:$t[a]=fn(a)||a)}var Ut=/^(none|table(?!-c[ea]).+)/,dt={position:"absolute",visibility:"hidden",display:"block"},Hi={letterSpacing:"0",fontWeight:"400"};function Ft(a,l,h){var m=R.exec(l);return m?Math.max(0,m[2]-(h||0))+(m[3]||"px"):l}function In(a,l,h,m,M,T){var w=l==="width"?1:0,z=0,O=0;if(h===(m?"border":"content"))return 0;for(;w<4;w+=2)h==="margin"&&(O+=u.css(a,h+ie[w],!0,M)),m?(h==="content"&&(O-=u.css(a,"padding"+ie[w],!0,M)),h!=="margin"&&(O-=u.css(a,"border"+ie[w]+"Width",!0,M))):(O+=u.css(a,"padding"+ie[w],!0,M),h!=="padding"?O+=u.css(a,"border"+ie[w]+"Width",!0,M):z+=u.css(a,"border"+ie[w]+"Width",!0,M));return!m&&T>=0&&(O+=Math.max(0,Math.ceil(a["offset"+l[0].toUpperCase()+l.slice(1)]-T-O-z-.5))||0),O}function xr(a,l,h){var m=de(a),M=!S.boxSizingReliable()||h,T=M&&u.css(a,"boxSizing",!1,m)==="border-box",w=T,z=st(a,l,m),O="offset"+l[0].toUpperCase()+l.slice(1);if(oe.test(z)){if(!h)return z;z="auto"}return(!S.boxSizingReliable()&&T||!S.reliableTrDimensions()&&W(a,"tr")||z==="auto"||!parseFloat(z)&&u.css(a,"display",!1,m)==="inline")&&a.getClientRects().length&&(T=u.css(a,"boxSizing",!1,m)==="border-box",w=O in a,w&&(z=a[O])),z=parseFloat(z)||0,z+In(a,l,h||(T?"border":"content"),w,m,z)+"px"}u.extend({cssHooks:{opacity:{get:function(a,l){if(l){var h=st(a,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(a,l,h,m){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var M,T,w,z=Fe(l),O=K.test(l),$=a.style;if(O||(l=Rn(z)),w=u.cssHooks[l]||u.cssHooks[z],h!==void 0){if(T=typeof h,T==="string"&&(M=R.exec(h))&&M[1]&&(h=pe(a,l,M),T="number"),h==null||h!==h)return;T==="number"&&!O&&(h+=M&&M[3]||(u.cssNumber[z]?"":"px")),!S.clearCloneStyle&&h===""&&l.indexOf("background")===0&&($[l]="inherit"),(!w||!("set"in w)||(h=w.set(a,h,m))!==void 0)&&(O?$.setProperty(l,h):$[l]=h)}else return w&&"get"in w&&(M=w.get(a,!1,m))!==void 0?M:$[l]}},css:function(a,l,h,m){var M,T,w,z=Fe(l),O=K.test(l);return O||(l=Rn(z)),w=u.cssHooks[l]||u.cssHooks[z],w&&"get"in w&&(M=w.get(a,!0,h)),M===void 0&&(M=st(a,l,m)),M==="normal"&&l in Hi&&(M=Hi[l]),h===""||h?(T=parseFloat(M),h===!0||isFinite(T)?T||0:M):M}}),u.each(["height","width"],function(a,l){u.cssHooks[l]={get:function(h,m,M){if(m)return Ut.test(u.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?je(h,dt,function(){return xr(h,l,M)}):xr(h,l,M)},set:function(h,m,M){var T,w=de(h),z=!S.scrollboxSize()&&w.position==="absolute",O=z||M,$=O&&u.css(h,"boxSizing",!1,w)==="border-box",ee=M?In(h,l,M,$,w):0;return $&&z&&(ee-=Math.ceil(h["offset"+l[0].toUpperCase()+l.slice(1)]-parseFloat(w[l])-In(h,l,"border",!1,w)-.5)),ee&&(T=R.exec(m))&&(T[3]||"px")!=="px"&&(h.style[l]=m,m=u.css(h,l)),Ft(h,m,ee)}}}),u.cssHooks.marginLeft=ot(S.reliableMarginLeft,function(a,l){if(l)return(parseFloat(st(a,"marginLeft"))||a.getBoundingClientRect().left-je(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(a,l){u.cssHooks[a+l]={expand:function(h){for(var m=0,M={},T=typeof h=="string"?h.split(" "):[h];m<4;m++)M[a+ie[m]+l]=T[m]||T[m-2]||T[0];return M}},a!=="margin"&&(u.cssHooks[a+l].set=Ft)}),u.fn.extend({css:function(a,l){return Ge(this,function(h,m,M){var T,w,z={},O=0;if(Array.isArray(m)){for(T=de(h),w=m.length;O<w;O++)z[m[O]]=u.css(h,m[O],!1,T);return z}return M!==void 0?u.style(h,m,M):u.css(h,m)},a,l,arguments.length>1)}});function kt(a,l,h,m,M){return new kt.prototype.init(a,l,h,m,M)}u.Tween=kt,kt.prototype={constructor:kt,init:function(a,l,h,m,M,T){this.elem=a,this.prop=h,this.easing=M||u.easing._default,this.options=l,this.start=this.now=this.cur(),this.end=m,this.unit=T||(u.cssNumber[h]?"":"px")},cur:function(){var a=kt.propHooks[this.prop];return a&&a.get?a.get(this):kt.propHooks._default.get(this)},run:function(a){var l,h=kt.propHooks[this.prop];return this.options.duration?this.pos=l=u.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=l=a,this.now=(this.end-this.start)*l+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):kt.propHooks._default.set(this),this}},kt.prototype.init.prototype=kt.prototype,kt.propHooks={_default:{get:function(a){var l;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(l=u.css(a.elem,a.prop,""),!l||l==="auto"?0:l)},set:function(a){u.fx.step[a.prop]?u.fx.step[a.prop](a):a.elem.nodeType===1&&(u.cssHooks[a.prop]||a.elem.style[Rn(a.prop)]!=null)?u.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},kt.propHooks.scrollTop=kt.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},u.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},u.fx=kt.prototype.init,u.fx.step={};var Gn,Bt,Yn=/^(?:toggle|show|hide)$/,yr=/queueHooks$/;function Kt(){Bt&&(f.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Kt):e.setTimeout(Kt,u.fx.interval),u.fx.tick())}function Gi(){return e.setTimeout(function(){Gn=void 0}),Gn=Date.now()}function Vi(a,l){var h,m=0,M={height:a};for(l=l?1:0;m<4;m+=2-l)h=ie[m],M["margin"+h]=M["padding"+h]=a;return l&&(M.opacity=M.width=a),M}function Sr(a,l,h){for(var m,M=(Nn.tweeners[l]||[]).concat(Nn.tweeners["*"]),T=0,w=M.length;T<w;T++)if(m=M[T].call(h,l,a))return m}function Xc(a,l,h){var m,M,T,w,z,O,$,ee,ve="width"in l||"height"in l,Q=this,ae={},qe=a.style,rt=a.nodeType&&k(a),Ve=Pe.get(a,"fxshow");h.queue||(w=u._queueHooks(a,"fx"),w.unqueued==null&&(w.unqueued=0,z=w.empty.fire,w.empty.fire=function(){w.unqueued||z()}),w.unqueued++,Q.always(function(){Q.always(function(){w.unqueued--,u.queue(a,"fx").length||w.empty.fire()})}));for(m in l)if(M=l[m],Yn.test(M)){if(delete l[m],T=T||M==="toggle",M===(rt?"hide":"show"))if(M==="show"&&Ve&&Ve[m]!==void 0)rt=!0;else continue;ae[m]=Ve&&Ve[m]||u.style(a,m)}if(O=!u.isEmptyObject(l),!(!O&&u.isEmptyObject(ae))){ve&&a.nodeType===1&&(h.overflow=[qe.overflow,qe.overflowX,qe.overflowY],$=Ve&&Ve.display,$==null&&($=Pe.get(a,"display")),ee=u.css(a,"display"),ee==="none"&&($?ee=$:(Ue([a],!0),$=a.style.display||$,ee=u.css(a,"display"),Ue([a]))),(ee==="inline"||ee==="inline-block"&&$!=null)&&u.css(a,"float")==="none"&&(O||(Q.done(function(){qe.display=$}),$==null&&(ee=qe.display,$=ee==="none"?"":ee)),qe.display="inline-block")),h.overflow&&(qe.overflow="hidden",Q.always(function(){qe.overflow=h.overflow[0],qe.overflowX=h.overflow[1],qe.overflowY=h.overflow[2]})),O=!1;for(m in ae)O||(Ve?"hidden"in Ve&&(rt=Ve.hidden):Ve=Pe.access(a,"fxshow",{display:$}),T&&(Ve.hidden=!rt),rt&&Ue([a],!0),Q.done(function(){rt||Ue([a]),Pe.remove(a,"fxshow");for(m in ae)u.style(a,m,ae[m])})),O=Sr(rt?Ve[m]:0,m,Q),m in Ve||(Ve[m]=O.start,rt&&(O.end=O.start,O.start=0))}}function $c(a,l){var h,m,M,T,w;for(h in a)if(m=Fe(h),M=l[m],T=a[h],Array.isArray(T)&&(M=T[1],T=a[h]=T[0]),h!==m&&(a[m]=T,delete a[h]),w=u.cssHooks[m],w&&"expand"in w){T=w.expand(T),delete a[m];for(h in T)h in a||(a[h]=T[h],l[h]=M)}else l[m]=M}function Nn(a,l,h){var m,M,T=0,w=Nn.prefilters.length,z=u.Deferred().always(function(){delete O.elem}),O=function(){if(M)return!1;for(var ve=Gn||Gi(),Q=Math.max(0,$.startTime+$.duration-ve),ae=Q/$.duration||0,qe=1-ae,rt=0,Ve=$.tweens.length;rt<Ve;rt++)$.tweens[rt].run(qe);return z.notifyWith(a,[$,qe,Q]),qe<1&&Ve?Q:(Ve||z.notifyWith(a,[$,1,0]),z.resolveWith(a,[$]),!1)},$=z.promise({elem:a,props:u.extend({},l),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},h),originalProperties:l,originalOptions:h,startTime:Gn||Gi(),duration:h.duration,tweens:[],createTween:function(ve,Q){var ae=u.Tween(a,$.opts,ve,Q,$.opts.specialEasing[ve]||$.opts.easing);return $.tweens.push(ae),ae},stop:function(ve){var Q=0,ae=ve?$.tweens.length:0;if(M)return this;for(M=!0;Q<ae;Q++)$.tweens[Q].run(1);return ve?(z.notifyWith(a,[$,1,0]),z.resolveWith(a,[$,ve])):z.rejectWith(a,[$,ve]),this}}),ee=$.props;for($c(ee,$.opts.specialEasing);T<w;T++)if(m=Nn.prefilters[T].call($,a,ee,$.opts),m)return b(m.stop)&&(u._queueHooks($.elem,$.opts.queue).stop=m.stop.bind(m)),m;return u.map(ee,Sr,$),b($.opts.start)&&$.opts.start.call(a,$),$.progress($.opts.progress).done($.opts.done,$.opts.complete).fail($.opts.fail).always($.opts.always),u.fx.timer(u.extend(O,{elem:a,anim:$,queue:$.opts.queue})),$}u.Animation=u.extend(Nn,{tweeners:{"*":[function(a,l){var h=this.createTween(a,l);return pe(h.elem,a,R.exec(l),h),h}]},tweener:function(a,l){b(a)?(l=a,a=["*"]):a=a.match(He);for(var h,m=0,M=a.length;m<M;m++)h=a[m],Nn.tweeners[h]=Nn.tweeners[h]||[],Nn.tweeners[h].unshift(l)},prefilters:[Xc],prefilter:function(a,l){l?Nn.prefilters.unshift(a):Nn.prefilters.push(a)}}),u.speed=function(a,l,h){var m=a&&typeof a=="object"?u.extend({},a):{complete:h||!h&&l||b(a)&&a,duration:a,easing:h&&l||l&&!b(l)&&l};return u.fx.off?m.duration=0:typeof m.duration!="number"&&(m.duration in u.fx.speeds?m.duration=u.fx.speeds[m.duration]:m.duration=u.fx.speeds._default),(m.queue==null||m.queue===!0)&&(m.queue="fx"),m.old=m.complete,m.complete=function(){b(m.old)&&m.old.call(this),m.queue&&u.dequeue(this,m.queue)},m},u.fn.extend({fadeTo:function(a,l,h,m){return this.filter(k).css("opacity",0).show().end().animate({opacity:l},a,h,m)},animate:function(a,l,h,m){var M=u.isEmptyObject(a),T=u.speed(l,h,m),w=function(){var z=Nn(this,u.extend({},a),T);(M||Pe.get(this,"finish"))&&z.stop(!0)};return w.finish=w,M||T.queue===!1?this.each(w):this.queue(T.queue,w)},stop:function(a,l,h){var m=function(M){var T=M.stop;delete M.stop,T(h)};return typeof a!="string"&&(h=l,l=a,a=void 0),l&&this.queue(a||"fx",[]),this.each(function(){var M=!0,T=a!=null&&a+"queueHooks",w=u.timers,z=Pe.get(this);if(T)z[T]&&z[T].stop&&m(z[T]);else for(T in z)z[T]&&z[T].stop&&yr.test(T)&&m(z[T]);for(T=w.length;T--;)w[T].elem===this&&(a==null||w[T].queue===a)&&(w[T].anim.stop(h),M=!1,w.splice(T,1));(M||!h)&&u.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var l,h=Pe.get(this),m=h[a+"queue"],M=h[a+"queueHooks"],T=u.timers,w=m?m.length:0;for(h.finish=!0,u.queue(this,a,[]),M&&M.stop&&M.stop.call(this,!0),l=T.length;l--;)T[l].elem===this&&T[l].queue===a&&(T[l].anim.stop(!0),T.splice(l,1));for(l=0;l<w;l++)m[l]&&m[l].finish&&m[l].finish.call(this);delete h.finish})}}),u.each(["toggle","show","hide"],function(a,l){var h=u.fn[l];u.fn[l]=function(m,M,T){return m==null||typeof m=="boolean"?h.apply(this,arguments):this.animate(Vi(l,!0),m,M,T)}}),u.each({slideDown:Vi("show"),slideUp:Vi("hide"),slideToggle:Vi("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,l){u.fn[a]=function(h,m,M){return this.animate(l,h,m,M)}}),u.timers=[],u.fx.tick=function(){var a,l=0,h=u.timers;for(Gn=Date.now();l<h.length;l++)a=h[l],!a()&&h[l]===a&&h.splice(l--,1);h.length||u.fx.stop(),Gn=void 0},u.fx.timer=function(a){u.timers.push(a),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Bt||(Bt=!0,Kt())},u.fx.stop=function(){Bt=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(a,l){return a=u.fx&&u.fx.speeds[a]||a,l=l||"fx",this.queue(l,function(h,m){var M=e.setTimeout(h,a);m.stop=function(){e.clearTimeout(M)}})},function(){var a=f.createElement("input"),l=f.createElement("select"),h=l.appendChild(f.createElement("option"));a.type="checkbox",S.checkOn=a.value!=="",S.optSelected=h.selected,a=f.createElement("input"),a.value="t",a.type="radio",S.radioValue=a.value==="t"}();var so,Mr=u.expr.attrHandle;u.fn.extend({attr:function(a,l){return Ge(this,u.attr,a,l,arguments.length>1)},removeAttr:function(a){return this.each(function(){u.removeAttr(this,a)})}}),u.extend({attr:function(a,l,h){var m,M,T=a.nodeType;if(!(T===3||T===8||T===2)){if(typeof a.getAttribute>"u")return u.prop(a,l,h);if((T!==1||!u.isXMLDoc(a))&&(M=u.attrHooks[l.toLowerCase()]||(u.expr.match.bool.test(l)?so:void 0)),h!==void 0){if(h===null){u.removeAttr(a,l);return}return M&&"set"in M&&(m=M.set(a,h,l))!==void 0?m:(a.setAttribute(l,h+""),h)}return M&&"get"in M&&(m=M.get(a,l))!==null?m:(m=u.find.attr(a,l),m??void 0)}},attrHooks:{type:{set:function(a,l){if(!S.radioValue&&l==="radio"&&W(a,"input")){var h=a.value;return a.setAttribute("type",l),h&&(a.value=h),l}}}},removeAttr:function(a,l){var h,m=0,M=l&&l.match(He);if(M&&a.nodeType===1)for(;h=M[m++];)a.removeAttribute(h)}}),so={set:function(a,l,h){return l===!1?u.removeAttr(a,h):a.setAttribute(h,h),h}},u.each(u.expr.match.bool.source.match(/\w+/g),function(a,l){var h=Mr[l]||u.find.attr;Mr[l]=function(m,M,T){var w,z,O=M.toLowerCase();return T||(z=Mr[O],Mr[O]=w,w=h(m,M,T)!=null?O:null,Mr[O]=z),w}});var Yc=/^(?:input|select|textarea|button)$/i,Kc=/^(?:a|area)$/i;u.fn.extend({prop:function(a,l){return Ge(this,u.prop,a,l,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[u.propFix[a]||a]})}}),u.extend({prop:function(a,l,h){var m,M,T=a.nodeType;if(!(T===3||T===8||T===2))return(T!==1||!u.isXMLDoc(a))&&(l=u.propFix[l]||l,M=u.propHooks[l]),h!==void 0?M&&"set"in M&&(m=M.set(a,h,l))!==void 0?m:a[l]=h:M&&"get"in M&&(m=M.get(a,l))!==null?m:a[l]},propHooks:{tabIndex:{get:function(a){var l=u.find.attr(a,"tabindex");return l?parseInt(l,10):Yc.test(a.nodeName)||Kc.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),S.optSelected||(u.propHooks.selected={get:function(a){var l=a.parentNode;return l&&l.parentNode&&l.parentNode.selectedIndex,null},set:function(a){var l=a.parentNode;l&&(l.selectedIndex,l.parentNode&&l.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function _i(a){var l=a.match(He)||[];return l.join(" ")}function xi(a){return a.getAttribute&&a.getAttribute("class")||""}function zs(a){return Array.isArray(a)?a:typeof a=="string"?a.match(He)||[]:[]}u.fn.extend({addClass:function(a){var l,h,m,M,T,w;return b(a)?this.each(function(z){u(this).addClass(a.call(this,z,xi(this)))}):(l=zs(a),l.length?this.each(function(){if(m=xi(this),h=this.nodeType===1&&" "+_i(m)+" ",h){for(T=0;T<l.length;T++)M=l[T],h.indexOf(" "+M+" ")<0&&(h+=M+" ");w=_i(h),m!==w&&this.setAttribute("class",w)}}):this)},removeClass:function(a){var l,h,m,M,T,w;return b(a)?this.each(function(z){u(this).removeClass(a.call(this,z,xi(this)))}):arguments.length?(l=zs(a),l.length?this.each(function(){if(m=xi(this),h=this.nodeType===1&&" "+_i(m)+" ",h){for(T=0;T<l.length;T++)for(M=l[T];h.indexOf(" "+M+" ")>-1;)h=h.replace(" "+M+" "," ");w=_i(h),m!==w&&this.setAttribute("class",w)}}):this):this.attr("class","")},toggleClass:function(a,l){var h,m,M,T,w=typeof a,z=w==="string"||Array.isArray(a);return b(a)?this.each(function(O){u(this).toggleClass(a.call(this,O,xi(this),l),l)}):typeof l=="boolean"&&z?l?this.addClass(a):this.removeClass(a):(h=zs(a),this.each(function(){if(z)for(T=u(this),M=0;M<h.length;M++)m=h[M],T.hasClass(m)?T.removeClass(m):T.addClass(m);else(a===void 0||w==="boolean")&&(m=xi(this),m&&Pe.set(this,"__className__",m),this.setAttribute&&this.setAttribute("class",m||a===!1?"":Pe.get(this,"__className__")||""))}))},hasClass:function(a){var l,h,m=0;for(l=" "+a+" ";h=this[m++];)if(h.nodeType===1&&(" "+_i(xi(h))+" ").indexOf(l)>-1)return!0;return!1}});var Zc=/\r/g;u.fn.extend({val:function(a){var l,h,m,M=this[0];return arguments.length?(m=b(a),this.each(function(T){var w;this.nodeType===1&&(m?w=a.call(this,T,u(this).val()):w=a,w==null?w="":typeof w=="number"?w+="":Array.isArray(w)&&(w=u.map(w,function(z){return z==null?"":z+""})),l=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!l||!("set"in l)||l.set(this,w,"value")===void 0)&&(this.value=w))})):M?(l=u.valHooks[M.type]||u.valHooks[M.nodeName.toLowerCase()],l&&"get"in l&&(h=l.get(M,"value"))!==void 0?h:(h=M.value,typeof h=="string"?h.replace(Zc,""):h??"")):void 0}}),u.extend({valHooks:{option:{get:function(a){var l=u.find.attr(a,"value");return l??_i(u.text(a))}},select:{get:function(a){var l,h,m,M=a.options,T=a.selectedIndex,w=a.type==="select-one",z=w?null:[],O=w?T+1:M.length;for(T<0?m=O:m=w?T:0;m<O;m++)if(h=M[m],(h.selected||m===T)&&!h.disabled&&(!h.parentNode.disabled||!W(h.parentNode,"optgroup"))){if(l=u(h).val(),w)return l;z.push(l)}return z},set:function(a,l){for(var h,m,M=a.options,T=u.makeArray(l),w=M.length;w--;)m=M[w],(m.selected=u.inArray(u.valHooks.option.get(m),T)>-1)&&(h=!0);return h||(a.selectedIndex=-1),T}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(a,l){if(Array.isArray(l))return a.checked=u.inArray(u(a).val(),l)>-1}},S.checkOn||(u.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value})}),S.focusin="onfocusin"in e;var ao=/^(?:focusinfocus|focusoutblur)$/,oo=function(a){a.stopPropagation()};u.extend(u.event,{trigger:function(a,l,h,m){var M,T,w,z,O,$,ee,ve,Q=[h||f],ae=v.call(a,"type")?a.type:a,qe=v.call(a,"namespace")?a.namespace.split("."):[];if(T=ve=w=h=h||f,!(h.nodeType===3||h.nodeType===8)&&!ao.test(ae+u.event.triggered)&&(ae.indexOf(".")>-1&&(qe=ae.split("."),ae=qe.shift(),qe.sort()),O=ae.indexOf(":")<0&&"on"+ae,a=a[u.expando]?a:new u.Event(ae,typeof a=="object"&&a),a.isTrigger=m?2:3,a.namespace=qe.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+qe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=h),l=l==null?[a]:u.makeArray(l,[a]),ee=u.event.special[ae]||{},!(!m&&ee.trigger&&ee.trigger.apply(h,l)===!1))){if(!m&&!ee.noBubble&&!y(h)){for(z=ee.delegateType||ae,ao.test(z+ae)||(T=T.parentNode);T;T=T.parentNode)Q.push(T),w=T;w===(h.ownerDocument||f)&&Q.push(w.defaultView||w.parentWindow||e)}for(M=0;(T=Q[M++])&&!a.isPropagationStopped();)ve=T,a.type=M>1?z:ee.bindType||ae,$=(Pe.get(T,"events")||Object.create(null))[a.type]&&Pe.get(T,"handle"),$&&$.apply(T,l),$=O&&T[O],$&&$.apply&&nt(T)&&(a.result=$.apply(T,l),a.result===!1&&a.preventDefault());return a.type=ae,!m&&!a.isDefaultPrevented()&&(!ee._default||ee._default.apply(Q.pop(),l)===!1)&&nt(h)&&O&&b(h[ae])&&!y(h)&&(w=h[O],w&&(h[O]=null),u.event.triggered=ae,a.isPropagationStopped()&&ve.addEventListener(ae,oo),h[ae](),a.isPropagationStopped()&&ve.removeEventListener(ae,oo),u.event.triggered=void 0,w&&(h[O]=w)),a.result}},simulate:function(a,l,h){var m=u.extend(new u.Event,h,{type:a,isSimulated:!0});u.event.trigger(m,null,l)}}),u.fn.extend({trigger:function(a,l){return this.each(function(){u.event.trigger(a,l,this)})},triggerHandler:function(a,l){var h=this[0];if(h)return u.event.trigger(a,l,h,!0)}}),S.focusin||u.each({focus:"focusin",blur:"focusout"},function(a,l){var h=function(m){u.event.simulate(l,m.target,u.event.fix(m))};u.event.special[l]={setup:function(){var m=this.ownerDocument||this.document||this,M=Pe.access(m,l);M||m.addEventListener(a,h,!0),Pe.access(m,l,(M||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,M=Pe.access(m,l)-1;M?Pe.access(m,l,M):(m.removeEventListener(a,h,!0),Pe.remove(m,l))}}});var br=e.location,lo={guid:Date.now()},ks=/\?/;u.parseXML=function(a){var l,h;if(!a||typeof a!="string")return null;try{l=new e.DOMParser().parseFromString(a,"text/xml")}catch{}return h=l&&l.getElementsByTagName("parsererror")[0],(!l||h)&&u.error("Invalid XML: "+(h?u.map(h.childNodes,function(m){return m.textContent}).join(`
`):a)),l};var Jc=/\[\]$/,co=/\r?\n/g,Qc=/^(?:submit|button|image|reset|file)$/i,eu=/^(?:input|select|textarea|keygen)/i;function Bs(a,l,h,m){var M;if(Array.isArray(l))u.each(l,function(T,w){h||Jc.test(a)?m(a,w):Bs(a+"["+(typeof w=="object"&&w!=null?T:"")+"]",w,h,m)});else if(!h&&E(l)==="object")for(M in l)Bs(a+"["+M+"]",l[M],h,m);else m(a,l)}u.param=function(a,l){var h,m=[],M=function(T,w){var z=b(w)?w():w;m[m.length]=encodeURIComponent(T)+"="+encodeURIComponent(z??"")};if(a==null)return"";if(Array.isArray(a)||a.jquery&&!u.isPlainObject(a))u.each(a,function(){M(this.name,this.value)});else for(h in a)Bs(h,a[h],l,M);return m.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=u.prop(this,"elements");return a?u.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!u(this).is(":disabled")&&eu.test(this.nodeName)&&!Qc.test(a)&&(this.checked||!ze.test(a))}).map(function(a,l){var h=u(this).val();return h==null?null:Array.isArray(h)?u.map(h,function(m){return{name:l.name,value:m.replace(co,`\r
`)}}):{name:l.name,value:h.replace(co,`\r
`)}}).get()}});var tu=/%20/g,nu=/#.*$/,iu=/([?&])_=[^&]*/,ru=/^(.*?):[ \t]*([^\r\n]*)$/mg,su=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,au=/^(?:GET|HEAD)$/,ou=/^\/\//,uo={},Hs={},fo="*/".concat("*"),Gs=f.createElement("a");Gs.href=br.href;function ho(a){return function(l,h){typeof l!="string"&&(h=l,l="*");var m,M=0,T=l.toLowerCase().match(He)||[];if(b(h))for(;m=T[M++];)m[0]==="+"?(m=m.slice(1)||"*",(a[m]=a[m]||[]).unshift(h)):(a[m]=a[m]||[]).push(h)}}function po(a,l,h,m){var M={},T=a===Hs;function w(z){var O;return M[z]=!0,u.each(a[z]||[],function($,ee){var ve=ee(l,h,m);if(typeof ve=="string"&&!T&&!M[ve])return l.dataTypes.unshift(ve),w(ve),!1;if(T)return!(O=ve)}),O}return w(l.dataTypes[0])||!M["*"]&&w("*")}function Vs(a,l){var h,m,M=u.ajaxSettings.flatOptions||{};for(h in l)l[h]!==void 0&&((M[h]?a:m||(m={}))[h]=l[h]);return m&&u.extend(!0,a,m),a}function lu(a,l,h){for(var m,M,T,w,z=a.contents,O=a.dataTypes;O[0]==="*";)O.shift(),m===void 0&&(m=a.mimeType||l.getResponseHeader("Content-Type"));if(m){for(M in z)if(z[M]&&z[M].test(m)){O.unshift(M);break}}if(O[0]in h)T=O[0];else{for(M in h){if(!O[0]||a.converters[M+" "+O[0]]){T=M;break}w||(w=M)}T=T||w}if(T)return T!==O[0]&&O.unshift(T),h[T]}function cu(a,l,h,m){var M,T,w,z,O,$={},ee=a.dataTypes.slice();if(ee[1])for(w in a.converters)$[w.toLowerCase()]=a.converters[w];for(T=ee.shift();T;)if(a.responseFields[T]&&(h[a.responseFields[T]]=l),!O&&m&&a.dataFilter&&(l=a.dataFilter(l,a.dataType)),O=T,T=ee.shift(),T){if(T==="*")T=O;else if(O!=="*"&&O!==T){if(w=$[O+" "+T]||$["* "+T],!w){for(M in $)if(z=M.split(" "),z[1]===T&&(w=$[O+" "+z[0]]||$["* "+z[0]],w)){w===!0?w=$[M]:$[M]!==!0&&(T=z[0],ee.unshift(z[1]));break}}if(w!==!0)if(w&&a.throws)l=w(l);else try{l=w(l)}catch(ve){return{state:"parsererror",error:w?ve:"No conversion from "+O+" to "+T}}}}return{state:"success",data:l}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:br.href,type:"GET",isLocal:su.test(br.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":fo,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,l){return l?Vs(Vs(a,u.ajaxSettings),l):Vs(u.ajaxSettings,a)},ajaxPrefilter:ho(uo),ajaxTransport:ho(Hs),ajax:function(a,l){typeof a=="object"&&(l=a,a=void 0),l=l||{};var h,m,M,T,w,z,O,$,ee,ve,Q=u.ajaxSetup({},l),ae=Q.context||Q,qe=Q.context&&(ae.nodeType||ae.jquery)?u(ae):u.event,rt=u.Deferred(),Ve=u.Callbacks("once memory"),Wt=Q.statusCode||{},Ht={},dn={},bt="canceled",it={readyState:0,getResponseHeader:function(vt){var Nt;if(O){if(!T)for(T={};Nt=ru.exec(M);)T[Nt[1].toLowerCase()+" "]=(T[Nt[1].toLowerCase()+" "]||[]).concat(Nt[2]);Nt=T[vt.toLowerCase()+" "]}return Nt==null?null:Nt.join(", ")},getAllResponseHeaders:function(){return O?M:null},setRequestHeader:function(vt,Nt){return O==null&&(vt=dn[vt.toLowerCase()]=dn[vt.toLowerCase()]||vt,Ht[vt]=Nt),this},overrideMimeType:function(vt){return O==null&&(Q.mimeType=vt),this},statusCode:function(vt){var Nt;if(vt)if(O)it.always(vt[it.status]);else for(Nt in vt)Wt[Nt]=[Wt[Nt],vt[Nt]];return this},abort:function(vt){var Nt=vt||bt;return h&&h.abort(Nt),on(0,Nt),this}};if(rt.promise(it),Q.url=((a||Q.url||br.href)+"").replace(ou,br.protocol+"//"),Q.type=l.method||l.type||Q.method||Q.type,Q.dataTypes=(Q.dataType||"*").toLowerCase().match(He)||[""],Q.crossDomain==null){z=f.createElement("a");try{z.href=Q.url,z.href=z.href,Q.crossDomain=Gs.protocol+"//"+Gs.host!=z.protocol+"//"+z.host}catch{Q.crossDomain=!0}}if(Q.data&&Q.processData&&typeof Q.data!="string"&&(Q.data=u.param(Q.data,Q.traditional)),po(uo,Q,l,it),O)return it;$=u.event&&Q.global,$&&u.active++===0&&u.event.trigger("ajaxStart"),Q.type=Q.type.toUpperCase(),Q.hasContent=!au.test(Q.type),m=Q.url.replace(nu,""),Q.hasContent?Q.data&&Q.processData&&(Q.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Q.data=Q.data.replace(tu,"+")):(ve=Q.url.slice(m.length),Q.data&&(Q.processData||typeof Q.data=="string")&&(m+=(ks.test(m)?"&":"?")+Q.data,delete Q.data),Q.cache===!1&&(m=m.replace(iu,"$1"),ve=(ks.test(m)?"&":"?")+"_="+lo.guid+++ve),Q.url=m+ve),Q.ifModified&&(u.lastModified[m]&&it.setRequestHeader("If-Modified-Since",u.lastModified[m]),u.etag[m]&&it.setRequestHeader("If-None-Match",u.etag[m])),(Q.data&&Q.hasContent&&Q.contentType!==!1||l.contentType)&&it.setRequestHeader("Content-Type",Q.contentType),it.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+fo+"; q=0.01":""):Q.accepts["*"]);for(ee in Q.headers)it.setRequestHeader(ee,Q.headers[ee]);if(Q.beforeSend&&(Q.beforeSend.call(ae,it,Q)===!1||O))return it.abort();if(bt="abort",Ve.add(Q.complete),it.done(Q.success),it.fail(Q.error),h=po(Hs,Q,l,it),!h)on(-1,"No Transport");else{if(it.readyState=1,$&&qe.trigger("ajaxSend",[it,Q]),O)return it;Q.async&&Q.timeout>0&&(w=e.setTimeout(function(){it.abort("timeout")},Q.timeout));try{O=!1,h.send(Ht,on)}catch(vt){if(O)throw vt;on(-1,vt)}}function on(vt,Nt,wr,Xr){var hn,yi,Si,ln,li,wn=Nt;O||(O=!0,w&&e.clearTimeout(w),h=void 0,M=Xr||"",it.readyState=vt>0?4:0,hn=vt>=200&&vt<300||vt===304,wr&&(ln=lu(Q,it,wr)),!hn&&u.inArray("script",Q.dataTypes)>-1&&u.inArray("json",Q.dataTypes)<0&&(Q.converters["text script"]=function(){}),ln=cu(Q,ln,it,hn),hn?(Q.ifModified&&(li=it.getResponseHeader("Last-Modified"),li&&(u.lastModified[m]=li),li=it.getResponseHeader("etag"),li&&(u.etag[m]=li)),vt===204||Q.type==="HEAD"?wn="nocontent":vt===304?wn="notmodified":(wn=ln.state,yi=ln.data,Si=ln.error,hn=!Si)):(Si=wn,(vt||!wn)&&(wn="error",vt<0&&(vt=0))),it.status=vt,it.statusText=(Nt||wn)+"",hn?rt.resolveWith(ae,[yi,wn,it]):rt.rejectWith(ae,[it,wn,Si]),it.statusCode(Wt),Wt=void 0,$&&qe.trigger(hn?"ajaxSuccess":"ajaxError",[it,Q,hn?yi:Si]),Ve.fireWith(ae,[it,wn]),$&&(qe.trigger("ajaxComplete",[it,Q]),--u.active||u.event.trigger("ajaxStop")))}return it},getJSON:function(a,l,h){return u.get(a,l,h,"json")},getScript:function(a,l){return u.get(a,void 0,l,"script")}}),u.each(["get","post"],function(a,l){u[l]=function(h,m,M,T){return b(m)&&(T=T||M,M=m,m=void 0),u.ajax(u.extend({url:h,type:l,dataType:T,data:m,success:M},u.isPlainObject(h)&&h))}}),u.ajaxPrefilter(function(a){var l;for(l in a.headers)l.toLowerCase()==="content-type"&&(a.contentType=a.headers[l]||"")}),u._evalUrl=function(a,l,h){return u.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(m){u.globalEval(m,l,h)}})},u.fn.extend({wrapAll:function(a){var l;return this[0]&&(b(a)&&(a=a.call(this[0])),l=u(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(a){return b(a)?this.each(function(l){u(this).wrapInner(a.call(this,l))}):this.each(function(){var l=u(this),h=l.contents();h.length?h.wrapAll(a):l.append(a)})},wrap:function(a){var l=b(a);return this.each(function(h){u(this).wrapAll(l?a.call(this,h):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(a){return!u.expr.pseudos.visible(a)},u.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var uu={0:200,1223:204},Tr=u.ajaxSettings.xhr();S.cors=!!Tr&&"withCredentials"in Tr,S.ajax=Tr=!!Tr,u.ajaxTransport(function(a){var l,h;if(S.cors||Tr&&!a.crossDomain)return{send:function(m,M){var T,w=a.xhr();if(w.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(T in a.xhrFields)w[T]=a.xhrFields[T];a.mimeType&&w.overrideMimeType&&w.overrideMimeType(a.mimeType),!a.crossDomain&&!m["X-Requested-With"]&&(m["X-Requested-With"]="XMLHttpRequest");for(T in m)w.setRequestHeader(T,m[T]);l=function(z){return function(){l&&(l=h=w.onload=w.onerror=w.onabort=w.ontimeout=w.onreadystatechange=null,z==="abort"?w.abort():z==="error"?typeof w.status!="number"?M(0,"error"):M(w.status,w.statusText):M(uu[w.status]||w.status,w.statusText,(w.responseType||"text")!=="text"||typeof w.responseText!="string"?{binary:w.response}:{text:w.responseText},w.getAllResponseHeaders()))}},w.onload=l(),h=w.onerror=w.ontimeout=l("error"),w.onabort!==void 0?w.onabort=h:w.onreadystatechange=function(){w.readyState===4&&e.setTimeout(function(){l&&h()})},l=l("abort");try{w.send(a.hasContent&&a.data||null)}catch(z){if(l)throw z}},abort:function(){l&&l()}}}),u.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return u.globalEval(a),a}}}),u.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),u.ajaxTransport("script",function(a){if(a.crossDomain||a.scriptAttrs){var l,h;return{send:function(m,M){l=u("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",h=function(T){l.remove(),h=null,T&&M(T.type==="error"?404:200,T.type)}),f.head.appendChild(l[0])},abort:function(){h&&h()}}}});var mo=[],Ws=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=mo.pop()||u.expando+"_"+lo.guid++;return this[a]=!0,a}}),u.ajaxPrefilter("json jsonp",function(a,l,h){var m,M,T,w=a.jsonp!==!1&&(Ws.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ws.test(a.data)&&"data");if(w||a.dataTypes[0]==="jsonp")return m=a.jsonpCallback=b(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,w?a[w]=a[w].replace(Ws,"$1"+m):a.jsonp!==!1&&(a.url+=(ks.test(a.url)?"&":"?")+a.jsonp+"="+m),a.converters["script json"]=function(){return T||u.error(m+" was not called"),T[0]},a.dataTypes[0]="json",M=e[m],e[m]=function(){T=arguments},h.always(function(){M===void 0?u(e).removeProp(m):e[m]=M,a[m]&&(a.jsonpCallback=l.jsonpCallback,mo.push(m)),T&&b(M)&&M(T[0]),T=M=void 0}),"script"}),S.createHTMLDocument=function(){var a=f.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",a.childNodes.length===2}(),u.parseHTML=function(a,l,h){if(typeof a!="string")return[];typeof l=="boolean"&&(h=l,l=!1);var m,M,T;return l||(S.createHTMLDocument?(l=f.implementation.createHTMLDocument(""),m=l.createElement("base"),m.href=f.location.href,l.head.appendChild(m)):l=f),M=B.exec(a),T=!h&&[],M?[l.createElement(M[1])]:(M=ce([a],l,T),T&&T.length&&u(T).remove(),u.merge([],M.childNodes))},u.fn.load=function(a,l,h){var m,M,T,w=this,z=a.indexOf(" ");return z>-1&&(m=_i(a.slice(z)),a=a.slice(0,z)),b(l)?(h=l,l=void 0):l&&typeof l=="object"&&(M="POST"),w.length>0&&u.ajax({url:a,type:M||"GET",dataType:"html",data:l}).done(function(O){T=arguments,w.html(m?u("<div>").append(u.parseHTML(O)).find(m):O)}).always(h&&function(O,$){w.each(function(){h.apply(this,T||[O.responseText,$,O])})}),this},u.expr.pseudos.animated=function(a){return u.grep(u.timers,function(l){return a===l.elem}).length},u.offset={setOffset:function(a,l,h){var m,M,T,w,z,O,$,ee=u.css(a,"position"),ve=u(a),Q={};ee==="static"&&(a.style.position="relative"),z=ve.offset(),T=u.css(a,"top"),O=u.css(a,"left"),$=(ee==="absolute"||ee==="fixed")&&(T+O).indexOf("auto")>-1,$?(m=ve.position(),w=m.top,M=m.left):(w=parseFloat(T)||0,M=parseFloat(O)||0),b(l)&&(l=l.call(a,h,u.extend({},z))),l.top!=null&&(Q.top=l.top-z.top+w),l.left!=null&&(Q.left=l.left-z.left+M),"using"in l?l.using.call(a,Q):ve.css(Q)}},u.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(M){u.offset.setOffset(this,a,M)});var l,h,m=this[0];if(m)return m.getClientRects().length?(l=m.getBoundingClientRect(),h=m.ownerDocument.defaultView,{top:l.top+h.pageYOffset,left:l.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,l,h,m=this[0],M={top:0,left:0};if(u.css(m,"position")==="fixed")l=m.getBoundingClientRect();else{for(l=this.offset(),h=m.ownerDocument,a=m.offsetParent||h.documentElement;a&&(a===h.body||a===h.documentElement)&&u.css(a,"position")==="static";)a=a.parentNode;a&&a!==m&&a.nodeType===1&&(M=u(a).offset(),M.top+=u.css(a,"borderTopWidth",!0),M.left+=u.css(a,"borderLeftWidth",!0))}return{top:l.top-M.top-u.css(m,"marginTop",!0),left:l.left-M.left-u.css(m,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&u.css(a,"position")==="static";)a=a.offsetParent;return a||xe})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,l){var h=l==="pageYOffset";u.fn[a]=function(m){return Ge(this,function(M,T,w){var z;if(y(M)?z=M:M.nodeType===9&&(z=M.defaultView),w===void 0)return z?z[l]:M[T];z?z.scrollTo(h?z.pageXOffset:w,h?w:z.pageYOffset):M[T]=w},a,m,arguments.length)}}),u.each(["top","left"],function(a,l){u.cssHooks[l]=ot(S.pixelPosition,function(h,m){if(m)return m=st(h,l),oe.test(m)?u(h).position()[l]+"px":m})}),u.each({Height:"height",Width:"width"},function(a,l){u.each({padding:"inner"+a,content:l,"":"outer"+a},function(h,m){u.fn[m]=function(M,T){var w=arguments.length&&(h||typeof M!="boolean"),z=h||(M===!0||T===!0?"margin":"border");return Ge(this,function(O,$,ee){var ve;return y(O)?m.indexOf("outer")===0?O["inner"+a]:O.document.documentElement["client"+a]:O.nodeType===9?(ve=O.documentElement,Math.max(O.body["scroll"+a],ve["scroll"+a],O.body["offset"+a],ve["offset"+a],ve["client"+a])):ee===void 0?u.css(O,$,z):u.style(O,$,ee,z)},l,w?M:void 0,w)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,l){u.fn[l]=function(h){return this.on(l,h)}}),u.fn.extend({bind:function(a,l,h){return this.on(a,null,l,h)},unbind:function(a,l){return this.off(a,null,l)},delegate:function(a,l,h,m){return this.on(l,a,h,m)},undelegate:function(a,l,h){return arguments.length===1?this.off(a,"**"):this.off(l,a||"**",h)},hover:function(a,l){return this.mouseenter(a).mouseleave(l||a)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,l){u.fn[l]=function(h,m){return arguments.length>0?this.on(l,null,h,m):this.trigger(l)}});var fu=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(a,l){var h,m,M;if(typeof l=="string"&&(h=a[l],l=a,a=h),!!b(a))return m=s.call(arguments,2),M=function(){return a.apply(l||this,m.concat(s.call(arguments)))},M.guid=a.guid=a.guid||u.guid++,M},u.holdReady=function(a){a?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=W,u.isFunction=b,u.isWindow=y,u.camelCase=Fe,u.type=E,u.now=Date.now,u.isNumeric=function(a){var l=u.type(a);return(l==="number"||l==="string")&&!isNaN(a-parseFloat(a))},u.trim=function(a){return a==null?"":(a+"").replace(fu,"$1")};var du=e.jQuery,hu=e.$;return u.noConflict=function(a){return e.$===u&&(e.$=hu),a&&e.jQuery===u&&(e.jQuery=du),u},typeof t>"u"&&(e.jQuery=e.$=u),u})})(Vg);const Wg=Ps,Nr=Cu({__proto__:null,default:Wg},[Ps]);function Ql(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function ro(i={},e={}){Object.keys(e).forEach(t=>{typeof i[t]>"u"?i[t]=e[t]:Ql(e[t])&&Ql(i[t])&&Object.keys(e[t]).length>0&&ro(i[t],e[t])})}const Ic={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function $n(){const i=typeof document<"u"?document:{};return ro(i,Ic),i}const qg={document:Ic,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function bn(){const i=typeof window<"u"?window:{};return ro(i,qg),i}function jg(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Xa(i,e=0){return setTimeout(i,e)}function Ds(){return Date.now()}function Xg(i){const e=bn();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function $g(i,e="x"){const t=bn();let n,r,s;const c=Xg(i);return t.WebKitCSSMatrix?(r=c.transform||c.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=c.MozTransform||c.OTransform||c.MsTransform||c.msTransform||c.transform||c.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:n.length===16?r=parseFloat(n[12]):r=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:n.length===16?r=parseFloat(n[13]):r=parseFloat(n[5])),r||0}function ws(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function Yg(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function yn(...i){const e=Object(i[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<i.length;n+=1){const r=i[n];if(r!=null&&!Yg(r)){const s=Object.keys(Object(r)).filter(c=>t.indexOf(c)<0);for(let c=0,o=s.length;c<o;c+=1){const d=s[c],p=Object.getOwnPropertyDescriptor(r,d);p!==void 0&&p.enumerable&&(ws(e[d])&&ws(r[d])?r[d].__swiper__?e[d]=r[d]:yn(e[d],r[d]):!ws(e[d])&&ws(r[d])?(e[d]={},r[d].__swiper__?e[d]=r[d]:yn(e[d],r[d])):e[d]=r[d])}}}return e}function Es(i,e,t){i.style.setProperty(e,t)}function Nc({swiper:i,targetPosition:e,side:t}){const n=bn(),r=-i.translate;let s=null,c;const o=i.params.speed;i.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(i.cssModeFrameID);const d=e>r?"next":"prev",p=(v,_)=>d==="next"&&v>=_||d==="prev"&&v<=_,g=()=>{c=new Date().getTime(),s===null&&(s=c);const v=Math.max(Math.min((c-s)/o,1),0),_=.5-Math.cos(v*Math.PI)/2;let x=r+_*(e-r);if(p(x,e)&&(x=e),i.wrapperEl.scrollTo({[t]:x}),p(x,e)){i.wrapperEl.style.overflow="hidden",i.wrapperEl.style.scrollSnapType="",setTimeout(()=>{i.wrapperEl.style.overflow="",i.wrapperEl.scrollTo({[t]:x})}),n.cancelAnimationFrame(i.cssModeFrameID);return}i.cssModeFrameID=n.requestAnimationFrame(g)};g()}function jn(i,e=""){return[...i.children].filter(t=>t.matches(e))}function Uc(i,e=[]){const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:[e]),t}function Kg(i,e){const t=[];for(;i.previousElementSibling;){const n=i.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function Zg(i,e){const t=[];for(;i.nextElementSibling;){const n=i.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function pi(i,e){return bn().getComputedStyle(i,null).getPropertyValue(e)}function Rs(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Oc(i,e){const t=[];let n=i.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function $a(i,e,t){const n=bn();return t?i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):i.offsetWidth}let Ia;function Jg(){const i=bn(),e=$n();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function Fc(){return Ia||(Ia=Jg()),Ia}let Na;function Qg({userAgent:i}={}){const e=Fc(),t=bn(),n=t.navigator.platform,r=i||t.navigator.userAgent,s={ios:!1,android:!1},c=t.screen.width,o=t.screen.height,d=r.match(/(Android);?[\s\/]+([\d.]+)?/);let p=r.match(/(iPad).*OS\s([\d_]+)/);const g=r.match(/(iPod)(.*OS\s([\d_]+))?/),v=!p&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),_=n==="Win32";let x=n==="MacIntel";const S=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!p&&x&&e.touch&&S.indexOf(`${c}x${o}`)>=0&&(p=r.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),x=!1),d&&!_&&(s.os="android",s.android=!0),(p||v||g)&&(s.os="ios",s.ios=!0),s}function ev(i={}){return Na||(Na=Qg(i)),Na}let Ua;function tv(){const i=bn();let e=!1;function t(){const n=i.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}if(t()){const n=String(i.navigator.userAgent);if(n.includes("Version/")){const[r,s]=n.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));e=r<16||r===16&&s<2}}return{isSafari:e||t(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function nv(){return Ua||(Ua=tv()),Ua}function iv({swiper:i,on:e,emit:t}){const n=bn();let r=null,s=null;const c=()=>{!i||i.destroyed||!i.initialized||(t("beforeResize"),t("resize"))},o=()=>{!i||i.destroyed||!i.initialized||(r=new ResizeObserver(g=>{s=n.requestAnimationFrame(()=>{const{width:v,height:_}=i;let x=v,S=_;g.forEach(({contentBoxSize:b,contentRect:y,target:f})=>{f&&f!==i.el||(x=y?y.width:(b[0]||b).inlineSize,S=y?y.height:(b[0]||b).blockSize)}),(x!==v||S!==_)&&c()})}),r.observe(i.el))},d=()=>{s&&n.cancelAnimationFrame(s),r&&r.unobserve&&i.el&&(r.unobserve(i.el),r=null)},p=()=>{!i||i.destroyed||!i.initialized||t("orientationchange")};e("init",()=>{if(i.params.resizeObserver&&typeof n.ResizeObserver<"u"){o();return}n.addEventListener("resize",c),n.addEventListener("orientationchange",p)}),e("destroy",()=>{d(),n.removeEventListener("resize",c),n.removeEventListener("orientationchange",p)})}function rv({swiper:i,extendParams:e,on:t,emit:n}){const r=[],s=bn(),c=(p,g={})=>{const v=s.MutationObserver||s.WebkitMutationObserver,_=new v(x=>{if(i.__preventObserver__)return;if(x.length===1){n("observerUpdate",x[0]);return}const S=function(){n("observerUpdate",x[0])};s.requestAnimationFrame?s.requestAnimationFrame(S):s.setTimeout(S,0)});_.observe(p,{attributes:typeof g.attributes>"u"?!0:g.attributes,childList:typeof g.childList>"u"?!0:g.childList,characterData:typeof g.characterData>"u"?!0:g.characterData}),r.push(_)},o=()=>{if(i.params.observer){if(i.params.observeParents){const p=Oc(i.el);for(let g=0;g<p.length;g+=1)c(p[g])}c(i.el,{childList:i.params.observeSlideChildren}),c(i.wrapperEl,{attributes:!1})}},d=()=>{r.forEach(p=>{p.disconnect()}),r.splice(0,r.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",o),t("destroy",d)}const sv={on(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return i.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][r](e)}),n},once(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function r(...s){n.off(i,r),r.__emitterProxy&&delete r.__emitterProxy,e.apply(n,s)}return r.__emitterProxy=e,n.on(i,r,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[n](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(...i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;return typeof i[0]=="string"||Array.isArray(i[0])?(t=i[0],n=i.slice(1,i.length),r=e):(t=i[0].events,n=i[0].data,r=i[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(c=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(o=>{o.apply(r,[c,...n])}),e.eventsListeners&&e.eventsListeners[c]&&e.eventsListeners[c].forEach(o=>{o.apply(r,n)})}),e}};function av(){const i=this;let e,t;const n=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=n.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=n.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(pi(n,"padding-left")||0,10)-parseInt(pi(n,"padding-right")||0,10),t=t-parseInt(pi(n,"padding-top")||0,10)-parseInt(pi(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function ov(){const i=this;function e(Z){return i.isHorizontal()?Z:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[Z]}function t(Z,W){return parseFloat(Z.getPropertyValue(e(W))||0)}const n=i.params,{wrapperEl:r,slidesEl:s,size:c,rtlTranslate:o,wrongRTL:d}=i,p=i.virtual&&n.virtual.enabled,g=p?i.virtual.slides.length:i.slides.length,v=jn(s,`.${i.params.slideClass}, swiper-slide`),_=p?i.virtual.slides.length:v.length;let x=[];const S=[],b=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(i));let f=n.slidesOffsetAfter;typeof f=="function"&&(f=n.slidesOffsetAfter.call(i));const A=i.snapGrid.length,C=i.slidesGrid.length;let E=n.spaceBetween,D=-y,u=0,q=0;if(typeof c>"u")return;typeof E=="string"&&E.indexOf("%")>=0&&(E=parseFloat(E.replace("%",""))/100*c),i.virtualSize=-E,v.forEach(Z=>{o?Z.style.marginLeft="":Z.style.marginRight="",Z.style.marginBottom="",Z.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Es(r,"--swiper-centered-offset-before",""),Es(r,"--swiper-centered-offset-after",""));const V=n.grid&&n.grid.rows>1&&i.grid;V&&i.grid.initSlides(_);let P;const U=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(Z=>typeof n.breakpoints[Z].slidesPerView<"u").length>0;for(let Z=0;Z<_;Z+=1){P=0;let W;if(v[Z]&&(W=v[Z]),V&&i.grid.updateSlide(Z,W,_,e),!(v[Z]&&pi(W,"display")==="none")){if(n.slidesPerView==="auto"){U&&(v[Z].style[e("width")]="");const B=getComputedStyle(W),Y=W.style.transform,re=W.style.webkitTransform;if(Y&&(W.style.transform="none"),re&&(W.style.webkitTransform="none"),n.roundLengths)P=i.isHorizontal()?$a(W,"width",!0):$a(W,"height",!0);else{const ue=t(B,"width"),ge=t(B,"padding-left"),le=t(B,"padding-right"),be=t(B,"margin-left"),ye=t(B,"margin-right"),He=B.getPropertyValue("box-sizing");if(He&&He==="border-box")P=ue+be+ye;else{const{clientWidth:Te,offsetWidth:se}=W;P=ue+ge+le+be+ye+(se-Te)}}Y&&(W.style.transform=Y),re&&(W.style.webkitTransform=re),n.roundLengths&&(P=Math.floor(P))}else P=(c-(n.slidesPerView-1)*E)/n.slidesPerView,n.roundLengths&&(P=Math.floor(P)),v[Z]&&(v[Z].style[e("width")]=`${P}px`);v[Z]&&(v[Z].swiperSlideSize=P),b.push(P),n.centeredSlides?(D=D+P/2+u/2+E,u===0&&Z!==0&&(D=D-c/2-E),Z===0&&(D=D-c/2-E),Math.abs(D)<1/1e3&&(D=0),n.roundLengths&&(D=Math.floor(D)),q%n.slidesPerGroup===0&&x.push(D),S.push(D)):(n.roundLengths&&(D=Math.floor(D)),(q-Math.min(i.params.slidesPerGroupSkip,q))%i.params.slidesPerGroup===0&&x.push(D),S.push(D),D=D+P+E),i.virtualSize+=P+E,u=P,q+=1}}if(i.virtualSize=Math.max(i.virtualSize,c)+f,o&&d&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${i.virtualSize+n.spaceBetween}px`),n.setWrapperSize&&(r.style[e("width")]=`${i.virtualSize+n.spaceBetween}px`),V&&i.grid.updateWrapperSize(P,x,e),!n.centeredSlides){const Z=[];for(let W=0;W<x.length;W+=1){let B=x[W];n.roundLengths&&(B=Math.floor(B)),x[W]<=i.virtualSize-c&&Z.push(B)}x=Z,Math.floor(i.virtualSize-c)-Math.floor(x[x.length-1])>1&&x.push(i.virtualSize-c)}if(p&&n.loop){const Z=b[0]+E;if(n.slidesPerGroup>1){const W=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/n.slidesPerGroup),B=Z*n.slidesPerGroup;for(let Y=0;Y<W;Y+=1)x.push(x[x.length-1]+B)}for(let W=0;W<i.virtual.slidesBefore+i.virtual.slidesAfter;W+=1)n.slidesPerGroup===1&&x.push(x[x.length-1]+Z),S.push(S[S.length-1]+Z),i.virtualSize+=Z}if(x.length===0&&(x=[0]),n.spaceBetween!==0){const Z=i.isHorizontal()&&o?"marginLeft":e("marginRight");v.filter((W,B)=>!n.cssMode||n.loop?!0:B!==v.length-1).forEach(W=>{W.style[Z]=`${E}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let Z=0;b.forEach(B=>{Z+=B+(n.spaceBetween?n.spaceBetween:0)}),Z-=n.spaceBetween;const W=Z-c;x=x.map(B=>B<0?-y:B>W?W+f:B)}if(n.centerInsufficientSlides){let Z=0;if(b.forEach(W=>{Z+=W+(n.spaceBetween?n.spaceBetween:0)}),Z-=n.spaceBetween,Z<c){const W=(c-Z)/2;x.forEach((B,Y)=>{x[Y]=B-W}),S.forEach((B,Y)=>{S[Y]=B+W})}}if(Object.assign(i,{slides:v,snapGrid:x,slidesGrid:S,slidesSizesGrid:b}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Es(r,"--swiper-centered-offset-before",`${-x[0]}px`),Es(r,"--swiper-centered-offset-after",`${i.size/2-b[b.length-1]/2}px`);const Z=-i.snapGrid[0],W=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(B=>B+Z),i.slidesGrid=i.slidesGrid.map(B=>B+W)}if(_!==g&&i.emit("slidesLengthChange"),x.length!==A&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),S.length!==C&&i.emit("slidesGridLengthChange"),n.watchSlidesProgress&&i.updateSlidesOffset(),!p&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const Z=`${n.containerModifierClass}backface-hidden`,W=i.el.classList.contains(Z);_<=n.maxBackfaceHiddenSlides?W||i.el.classList.add(Z):W&&i.el.classList.remove(Z)}}function lv(i){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const c=o=>n?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const o=e.activeIndex+s;if(o>e.slides.length&&!n)break;t.push(c(o))}else t.push(c(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const o=t[s].offsetHeight;r=o>r?o:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function cv(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(i.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-i.cssOverflowAdjustment()}function uv(i=this&&this.translate||0){const e=this,t=e.params,{slides:n,rtlTranslate:r,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let c=-i;r&&(c=i),n.forEach(o=>{o.classList.remove(t.slideVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let o=0;o<n.length;o+=1){const d=n[o];let p=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(p-=n[0].swiperSlideOffset);const g=(c+(t.centeredSlides?e.minTranslate():0)-p)/(d.swiperSlideSize+t.spaceBetween),v=(c-s[0]+(t.centeredSlides?e.minTranslate():0)-p)/(d.swiperSlideSize+t.spaceBetween),_=-(c-p),x=_+e.slidesSizesGrid[o];(_>=0&&_<e.size-1||x>1&&x<=e.size||_<=0&&x>=e.size)&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(o),n[o].classList.add(t.slideVisibleClass)),d.progress=r?-g:g,d.originalProgress=r?-v:v}}function fv(i){const e=this;if(typeof i>"u"){const g=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*g||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:c,progressLoop:o}=e;const d=s,p=c;if(n===0)r=0,s=!0,c=!0;else{r=(i-e.minTranslate())/n;const g=Math.abs(i-e.minTranslate())<1,v=Math.abs(i-e.maxTranslate())<1;s=g||r<=0,c=v||r>=1,g&&(r=0),v&&(r=1)}if(t.loop){const g=e.getSlideIndexByData(0),v=e.getSlideIndexByData(e.slides.length-1),_=e.slidesGrid[g],x=e.slidesGrid[v],S=e.slidesGrid[e.slidesGrid.length-1],b=Math.abs(i);b>=_?o=(b-_)/S:o=(b+S-x)/S,o>1&&(o-=1)}Object.assign(e,{progress:r,progressLoop:o,isBeginning:s,isEnd:c}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),s&&!d&&e.emit("reachBeginning toEdge"),c&&!p&&e.emit("reachEnd toEdge"),(d&&!s||p&&!c)&&e.emit("fromEdge"),e.emit("progress",r)}function dv(){const i=this,{slides:e,params:t,slidesEl:n,activeIndex:r}=i,s=i.virtual&&t.virtual.enabled,c=d=>jn(n,`.${t.slideClass}${d}, swiper-slide${d}`)[0];e.forEach(d=>{d.classList.remove(t.slideActiveClass,t.slideNextClass,t.slidePrevClass)});let o;if(s)if(t.loop){let d=r-i.virtual.slidesBefore;d<0&&(d=i.virtual.slides.length+d),d>=i.virtual.slides.length&&(d-=i.virtual.slides.length),o=c(`[data-swiper-slide-index="${d}"]`)}else o=c(`[data-swiper-slide-index="${r}"]`);else o=e[r];if(o){o.classList.add(t.slideActiveClass);let d=Zg(o,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!d&&(d=e[0]),d&&d.classList.add(t.slideNextClass);let p=Kg(o,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!p===0&&(p=e[e.length-1]),p&&p.classList.add(t.slidePrevClass)}i.emitSlidesClasses()}const Cs=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,n=e.closest(t());if(n){const r=n.querySelector(`.${i.params.lazyPreloaderClass}`);r&&r.remove()}},ec=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Ya=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex,s=r+n-1;if(i.params.rewind)for(let c=r-e;c<=s+e;c+=1){const o=(c%t+t)%t;o!==r&&o>s&&ec(i,o)}else for(let c=Math.max(s-e,0);c<=Math.min(s+e,t-1);c+=1)c!==r&&c>s&&ec(i,c)};function hv(i){const{slidesGrid:e,params:t}=i,n=i.rtlTranslate?i.translate:-i.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?r=s:n>=e[s]&&n<e[s+1]&&(r=s+1):n>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function pv(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:r,activeIndex:s,realIndex:c,snapIndex:o}=e;let d=i,p;const g=_=>{let x=_-e.virtual.slidesBefore;return x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),x};if(typeof d>"u"&&(d=hv(e)),n.indexOf(t)>=0)p=n.indexOf(t);else{const _=Math.min(r.slidesPerGroupSkip,d);p=_+Math.floor((d-_)/r.slidesPerGroup)}if(p>=n.length&&(p=n.length-1),d===s){p!==o&&(e.snapIndex=p,e.emit("snapIndexChange")),e.params.loop&&e.virtual&&e.params.virtual.enabled&&(e.realIndex=g(d));return}let v;e.virtual&&r.virtual.enabled&&r.loop?v=g(d):e.slides[d]?v=parseInt(e.slides[d].getAttribute("data-swiper-slide-index")||d,10):v=d,Object.assign(e,{previousSnapIndex:o,snapIndex:p,previousRealIndex:c,realIndex:v,previousIndex:s,activeIndex:d}),e.initialized&&Ya(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),c!==v&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function mv(i){const e=this,t=e.params,n=i.closest(`.${t.slideClass}, swiper-slide`);let r=!1,s;if(n){for(let c=0;c<e.slides.length;c+=1)if(e.slides[c]===n){r=!0,s=c;break}}if(n&&r)e.clickedSlide=n,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=s;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}const gv={updateSize:av,updateSlides:ov,updateAutoHeight:lv,updateSlidesOffset:cv,updateSlidesProgress:uv,updateProgress:fv,updateSlidesClasses:dv,updateActiveIndex:pv,updateClickedSlide:mv};function vv(i=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:n,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let c=$g(s,i);return c+=e.cssOverflowAdjustment(),n&&(c=-c),c||0}function _v(i,e){const t=this,{rtlTranslate:n,params:r,wrapperEl:s,progress:c}=t;let o=0,d=0;const p=0;t.isHorizontal()?o=n?-i:i:d=i,r.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:d,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-d:r.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():d-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${d}px, ${p}px)`);let g;const v=t.maxTranslate()-t.minTranslate();v===0?g=0:g=(i-t.minTranslate())/v,g!==c&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function xv(){return-this.snapGrid[0]}function yv(){return-this.snapGrid[this.snapGrid.length-1]}function Sv(i=0,e=this.params.speed,t=!0,n=!0,r){const s=this,{params:c,wrapperEl:o}=s;if(s.animating&&c.preventInteractionOnTransition)return!1;const d=s.minTranslate(),p=s.maxTranslate();let g;if(n&&i>d?g=d:n&&i<p?g=p:g=i,s.updateProgress(g),c.cssMode){const v=s.isHorizontal();if(e===0)o[v?"scrollLeft":"scrollTop"]=-g;else{if(!s.support.smoothScroll)return Nc({swiper:s,targetPosition:-g,side:v?"left":"top"}),!0;o.scrollTo({[v?"left":"top"]:-g,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(g),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(g),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(_){!s||s.destroyed||_.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}const Mv={getTranslate:vv,setTranslate:_v,minTranslate:xv,maxTranslate:yv,translateTo:Sv};function bv(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`),t.emit("setTransition",i,e)}function zc({swiper:i,runCallbacks:e,direction:t,step:n}){const{activeIndex:r,previousIndex:s}=i;let c=t;if(c||(r>s?c="next":r<s?c="prev":c="reset"),i.emit(`transition${n}`),e&&r!==s){if(c==="reset"){i.emit(`slideResetTransition${n}`);return}i.emit(`slideChangeTransition${n}`),c==="next"?i.emit(`slideNextTransition${n}`):i.emit(`slidePrevTransition${n}`)}}function Tv(i=!0,e){const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),zc({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function wv(i=!0,e){const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),zc({swiper:t,runCallbacks:i,direction:e,step:"End"}))}const Ev={setTransition:bv,transitionStart:Tv,transitionEnd:wv};function Av(i=0,e=this.params.speed,t=!0,n,r){typeof i=="string"&&(i=parseInt(i,10));const s=this;let c=i;c<0&&(c=0);const{params:o,snapGrid:d,slidesGrid:p,previousIndex:g,activeIndex:v,rtlTranslate:_,wrapperEl:x,enabled:S}=s;if(s.animating&&o.preventInteractionOnTransition||!S&&!n&&!r)return!1;const b=Math.min(s.params.slidesPerGroupSkip,c);let y=b+Math.floor((c-b)/s.params.slidesPerGroup);y>=d.length&&(y=d.length-1);const f=-d[y];if(o.normalizeSlideIndex)for(let C=0;C<p.length;C+=1){const E=-Math.floor(f*100),D=Math.floor(p[C]*100),u=Math.floor(p[C+1]*100);typeof p[C+1]<"u"?E>=D&&E<u-(u-D)/2?c=C:E>=D&&E<u&&(c=C+1):E>=D&&(c=C)}if(s.initialized&&c!==v&&(!s.allowSlideNext&&f<s.translate&&f<s.minTranslate()||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(v||0)!==c))return!1;c!==(g||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let A;if(c>v?A="next":c<v?A="prev":A="reset",_&&-f===s.translate||!_&&f===s.translate)return s.updateActiveIndex(c),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(f),A!=="reset"&&(s.transitionStart(t,A),s.transitionEnd(t,A)),!1;if(o.cssMode){const C=s.isHorizontal(),E=_?f:-f;if(e===0){const D=s.virtual&&s.params.virtual.enabled;D&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),D&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{x[C?"scrollLeft":"scrollTop"]=E})):x[C?"scrollLeft":"scrollTop"]=E,D&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Nc({swiper:s,targetPosition:E,side:C?"left":"top"}),!0;x.scrollTo({[C?"left":"top"]:E,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(f),s.updateActiveIndex(c),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,A),e===0?s.transitionEnd(t,A):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(E){!s||s.destroyed||E.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,A))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Cv(i=0,e=this.params.speed,t=!0,n){typeof i=="string"&&(i=parseInt(i,10));const r=this;let s=i;return r.params.loop&&(r.virtual&&r.params.virtual.enabled?s=s+r.virtual.slidesBefore:s=r.getSlideIndexByData(s)),r.slideTo(s,e,t,n)}function Lv(i=this.params.speed,e=!0,t){const n=this,{enabled:r,params:s,animating:c}=n;if(!r)return n;let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const d=n.activeIndex<s.slidesPerGroupSkip?1:o,p=n.virtual&&s.virtual.enabled;if(s.loop){if(c&&!p&&s.loopPreventsSliding)return!1;n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft}return s.rewind&&n.isEnd?n.slideTo(0,i,e,t):n.slideTo(n.activeIndex+d,i,e,t)}function Pv(i=this.params.speed,e=!0,t){const n=this,{params:r,snapGrid:s,slidesGrid:c,rtlTranslate:o,enabled:d,animating:p}=n;if(!d)return n;const g=n.virtual&&r.virtual.enabled;if(r.loop){if(p&&!g&&r.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const v=o?n.translate:-n.translate;function _(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const x=_(v),S=s.map(f=>_(f));let b=s[S.indexOf(x)-1];if(typeof b>"u"&&r.cssMode){let f;s.forEach((A,C)=>{x>=A&&(f=C)}),typeof f<"u"&&(b=s[f>0?f-1:f])}let y=0;if(typeof b<"u"&&(y=c.indexOf(b),y<0&&(y=n.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(y=y-n.slidesPerViewDynamic("previous",!0)+1,y=Math.max(y,0))),r.rewind&&n.isBeginning){const f=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(f,i,e,t)}return n.slideTo(y,i,e,t)}function Dv(i=this.params.speed,e=!0,t){const n=this;return n.slideTo(n.activeIndex,i,e,t)}function Rv(i=this.params.speed,e=!0,t,n=.5){const r=this;let s=r.activeIndex;const c=Math.min(r.params.slidesPerGroupSkip,s),o=c+Math.floor((s-c)/r.params.slidesPerGroup),d=r.rtlTranslate?r.translate:-r.translate;if(d>=r.snapGrid[o]){const p=r.snapGrid[o],g=r.snapGrid[o+1];d-p>(g-p)*n&&(s+=r.params.slidesPerGroup)}else{const p=r.snapGrid[o-1],g=r.snapGrid[o];d-p<=(g-p)*n&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,i,e,t)}function Iv(){const i=this,{params:e,slidesEl:t}=i,n=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let r=i.clickedIndex,s;const c=i.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(i.animating)return;s=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<i.loopedSlides-n/2||r>i.slides.length-i.loopedSlides+n/2?(i.loopFix(),r=i.getSlideIndex(jn(t,`${c}[data-swiper-slide-index="${s}"]`)[0]),Xa(()=>{i.slideTo(r)})):i.slideTo(r):r>i.slides.length-n?(i.loopFix(),r=i.getSlideIndex(jn(t,`${c}[data-swiper-slide-index="${s}"]`)[0]),Xa(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}const Nv={slideTo:Av,slideToLoop:Cv,slideNext:Lv,slidePrev:Pv,slideReset:Dv,slideToClosest:Rv,slideToClickedSlide:Iv};function Uv(i){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;jn(n,`.${t.slideClass}, swiper-slide`).forEach((s,c)=>{s.setAttribute("data-swiper-slide-index",c)}),e.loopFix({slideRealIndex:i,direction:t.centeredSlides?void 0:"next"})}function Ov({slideRealIndex:i,slideTo:e=!0,direction:t,setTranslate:n,activeSlideIndex:r,byController:s,byMousewheel:c}={}){const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:d,allowSlidePrev:p,allowSlideNext:g,slidesEl:v,params:_}=o;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&_.virtual.enabled){e&&(!_.centeredSlides&&o.snapIndex===0?o.slideTo(o.virtual.slides.length,0,!1,!0):_.centeredSlides&&o.snapIndex<_.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0)),o.allowSlidePrev=p,o.allowSlideNext=g,o.emit("loopFix");return}const x=_.slidesPerView==="auto"?o.slidesPerViewDynamic():Math.ceil(parseFloat(_.slidesPerView,10));let S=_.loopedSlides||x;S%_.slidesPerGroup!==0&&(S+=_.slidesPerGroup-S%_.slidesPerGroup),o.loopedSlides=S;const b=[],y=[];let f=o.activeIndex;typeof r>"u"?r=o.getSlideIndex(o.slides.filter(u=>u.classList.contains(_.slideActiveClass))[0]):f=r;const A=t==="next"||!t,C=t==="prev"||!t;let E=0,D=0;if(r<S){E=Math.max(S-r,_.slidesPerGroup);for(let u=0;u<S-r;u+=1){const q=u-Math.floor(u/d.length)*d.length;b.push(d.length-q-1)}}else if(r>o.slides.length-S*2){D=Math.max(r-(o.slides.length-S*2),_.slidesPerGroup);for(let u=0;u<D;u+=1){const q=u-Math.floor(u/d.length)*d.length;y.push(q)}}if(C&&b.forEach(u=>{v.prepend(o.slides[u])}),A&&y.forEach(u=>{v.append(o.slides[u])}),o.recalcSlides(),_.slidesPerView==="auto"&&o.updateSlides(),_.watchSlidesProgress&&o.updateSlidesOffset(),e){if(b.length>0&&C)if(typeof i>"u"){const u=o.slidesGrid[f],V=o.slidesGrid[f+E]-u;c?o.setTranslate(o.translate-V):(o.slideTo(f+E,0,!1,!0),n&&(o.touches[o.isHorizontal()?"startX":"startY"]+=V))}else n&&o.slideToLoop(i,0,!1,!0);else if(y.length>0&&A)if(typeof i>"u"){const u=o.slidesGrid[f],V=o.slidesGrid[f-D]-u;c?o.setTranslate(o.translate-V):(o.slideTo(f-D,0,!1,!0),n&&(o.touches[o.isHorizontal()?"startX":"startY"]+=V))}else o.slideToLoop(i,0,!1,!0)}if(o.allowSlidePrev=p,o.allowSlideNext=g,o.controller&&o.controller.control&&!s){const u={slideRealIndex:i,slideTo:!1,direction:t,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix(u)}):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix(u)}o.emit("loopFix")}function Fv(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const n=[];i.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;n[s]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),n.forEach(r=>{t.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}const zv={loopCreate:Uv,loopFix:Ov,loopDestroy:Fv};function kv(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Bv(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}const Hv={setGrabCursor:kv,unsetGrabCursor:Bv};function Gv(i,e=this){function t(n){if(!n||n===$n()||n===bn())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(i);return!r&&!n.getRootNode?null:r||t(n.getRootNode().host)}return t(e)}function Vv(i){const e=this,t=$n(),n=bn(),r=e.touchEventsData;r.evCache.push(i);const{params:s,touches:c,enabled:o}=e;if(!o||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let d=i;d.originalEvent&&(d=d.originalEvent);let p=d.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(p)||"which"in d&&d.which===3||"button"in d&&d.button>0||r.isTouched&&r.isMoved)return;const g=!!s.noSwipingClass&&s.noSwipingClass!=="",v=i.composedPath?i.composedPath():i.path;g&&d.target&&d.target.shadowRoot&&v&&(p=v[0]);const _=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,x=!!(d.target&&d.target.shadowRoot);if(s.noSwiping&&(x?Gv(_,p):p.closest(_))){e.allowClick=!0;return}if(s.swipeHandler&&!p.closest(s.swipeHandler))return;c.currentX=d.pageX,c.currentY=d.pageY;const S=c.currentX,b=c.currentY,y=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,f=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(y&&(S<=f||S>=n.innerWidth-f))if(y==="prevent")i.preventDefault();else return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),c.startX=S,c.startY=b,r.touchStartTime=Ds(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let A=!0;p.matches(r.focusableElements)&&(A=!1,p.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==p&&t.activeElement.blur();const C=A&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||C)&&!p.isContentEditable&&d.preventDefault(),e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",d)}function Wv(i){const e=$n(),t=this,n=t.touchEventsData,{params:r,touches:s,rtlTranslate:c,enabled:o}=t;if(!o||!r.simulateTouch&&i.pointerType==="mouse")return;let d=i;if(d.originalEvent&&(d=d.originalEvent),!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",d);return}const p=n.evCache.findIndex(u=>u.pointerId===d.pointerId);p>=0&&(n.evCache[p]=d);const g=n.evCache.length>1?n.evCache[0]:d,v=g.pageX,_=g.pageY;if(d.preventedByNestedSwiper){s.startX=v,s.startY=_;return}if(!t.allowTouchMove){d.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:v,startY:_,prevX:t.touches.currentX,prevY:t.touches.currentY,currentX:v,currentY:_}),n.touchStartTime=Ds());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(_<s.startY&&t.translate<=t.maxTranslate()||_>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(v<s.startX&&t.translate<=t.maxTranslate()||v>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&d.target===e.activeElement&&d.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}if(n.allowTouchCallbacks&&t.emit("touchMove",d),d.targetTouches&&d.targetTouches.length>1)return;s.currentX=v,s.currentY=_;const x=s.currentX-s.startX,S=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(x**2+S**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let u;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:x*x+S*S>=25&&(u=Math.atan2(Math.abs(S),Math.abs(x))*180/Math.PI,n.isScrolling=t.isHorizontal()?u>r.touchAngle:90-u>r.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",d),typeof n.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||t.zoom&&t.params.zoom&&t.params.zoom.enabled&&n.evCache.length>1){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&d.cancelable&&d.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&d.stopPropagation();let b=t.isHorizontal()?x:S,y=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(b=Math.abs(b)*(c?1:-1),y=Math.abs(y)*(c?1:-1)),s.diff=b,b*=r.touchRatio,c&&(b=-b,y=-y);const f=t.touchesDirection;t.swipeDirection=b>0?"prev":"next",t.touchesDirection=y>0?"prev":"next";const A=t.params.loop&&!r.cssMode;if(!n.isMoved){if(A&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const u=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(u)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",d)}let C;n.isMoved&&f!==t.touchesDirection&&A&&Math.abs(b)>=1&&(t.loopFix({direction:t.swipeDirection,setTranslate:!0}),C=!0),t.emit("sliderMove",d),n.isMoved=!0,n.currentTranslate=b+n.startTranslate;let E=!0,D=r.resistanceRatio;if(r.touchReleaseOnEdges&&(D=0),b>0?(A&&!C&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.size/2:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(E=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+b)**D))):b<0&&(A&&!C&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.size/2:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(E=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-b)**D))),E&&(d.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),r.threshold>0)if(Math.abs(b)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),t.params.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function qv(i){const e=this,t=e.touchEventsData,n=t.evCache.findIndex(C=>C.pointerId===i.pointerId);if(n>=0&&t.evCache.splice(n,1),["pointercancel","pointerout","pointerleave"].includes(i.type)&&!(i.type==="pointercancel"&&(e.browser.isSafari||e.browser.isWebView)))return;const{params:r,touches:s,rtlTranslate:c,slidesGrid:o,enabled:d}=e;if(!d||!r.simulateTouch&&i.pointerType==="mouse")return;let p=i;if(p.originalEvent&&(p=p.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",p),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&r.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}r.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const g=Ds(),v=g-t.touchStartTime;if(e.allowClick){const C=p.path||p.composedPath&&p.composedPath();e.updateClickedSlide(C&&C[0]||p.target),e.emit("tap click",p),v<300&&g-t.lastClickTime<300&&e.emit("doubleTap doubleClick",p)}if(t.lastClickTime=Ds(),Xa(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||s.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let _;if(r.followFinger?_=c?e.translate:-e.translate:_=-t.currentTranslate,r.cssMode)return;if(e.params.freeMode&&r.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:_});return}let x=0,S=e.slidesSizesGrid[0];for(let C=0;C<o.length;C+=C<r.slidesPerGroupSkip?1:r.slidesPerGroup){const E=C<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof o[C+E]<"u"?_>=o[C]&&_<o[C+E]&&(x=C,S=o[C+E]-o[C]):_>=o[C]&&(x=C,S=o[o.length-1]-o[o.length-2])}let b=null,y=null;r.rewind&&(e.isBeginning?y=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(b=0));const f=(_-o[x])/S,A=x<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(v>r.longSwipesMs){if(!r.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(f>=r.longSwipesRatio?e.slideTo(r.rewind&&e.isEnd?b:x+A):e.slideTo(x)),e.swipeDirection==="prev"&&(f>1-r.longSwipesRatio?e.slideTo(x+A):y!==null&&f<0&&Math.abs(f)>r.longSwipesRatio?e.slideTo(y):e.slideTo(x))}else{if(!r.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(p.target===e.navigation.nextEl||p.target===e.navigation.prevEl)?p.target===e.navigation.nextEl?e.slideTo(x+A):e.slideTo(x):(e.swipeDirection==="next"&&e.slideTo(b!==null?b:x+A),e.swipeDirection==="prev"&&e.slideTo(y!==null?y:x))}}function tc(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:r,snapGrid:s}=i,c=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const o=c&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!o?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!c?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=n,i.params.watchOverflow&&s!==i.snapGrid&&i.checkOverflow()}function jv(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Xv(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=i;if(!n)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const s=i.maxTranslate()-i.minTranslate();s===0?r=0:r=(i.translate-i.minTranslate())/s,r!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function $v(i){const e=this;Cs(e,i.target),e.update()}let nc=!1;function Yv(){}const kc=(i,e)=>{const t=$n(),{params:n,el:r,wrapperEl:s,device:c}=i,o=!!n.nested,d=e==="on"?"addEventListener":"removeEventListener",p=e;r[d]("pointerdown",i.onTouchStart,{passive:!1}),t[d]("pointermove",i.onTouchMove,{passive:!1,capture:o}),t[d]("pointerup",i.onTouchEnd,{passive:!0}),t[d]("pointercancel",i.onTouchEnd,{passive:!0}),t[d]("pointerout",i.onTouchEnd,{passive:!0}),t[d]("pointerleave",i.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[d]("click",i.onClick,!0),n.cssMode&&s[d]("scroll",i.onScroll),n.updateOnWindowResize?i[p](c.ios||c.android?"resize orientationchange observerUpdate":"resize observerUpdate",tc,!0):i[p]("observerUpdate",tc,!0),r[d]("load",i.onLoad,{capture:!0})};function Kv(){const i=this,e=$n(),{params:t}=i;i.onTouchStart=Vv.bind(i),i.onTouchMove=Wv.bind(i),i.onTouchEnd=qv.bind(i),t.cssMode&&(i.onScroll=Xv.bind(i)),i.onClick=jv.bind(i),i.onLoad=$v.bind(i),nc||(e.addEventListener("touchstart",Yv),nc=!0),kc(i,"on")}function Zv(){kc(this,"off")}const Jv={attachEvents:Kv,detachEvents:Zv},ic=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function Qv(){const i=this,{realIndex:e,initialized:t,params:n,el:r}=i,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const c=i.getBreakpoint(s,i.params.breakpointsBase,i.el);if(!c||i.currentBreakpoint===c)return;const d=(c in s?s[c]:void 0)||i.originalParams,p=ic(i,n),g=ic(i,d),v=n.enabled;p&&!g?(r.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),i.emitContainerClasses()):!p&&g&&(r.classList.add(`${n.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&n.grid.fill==="column")&&r.classList.add(`${n.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(b=>{const y=n[b]&&n[b].enabled,f=d[b]&&d[b].enabled;y&&!f&&i[b].disable(),!y&&f&&i[b].enable()});const _=d.direction&&d.direction!==n.direction,x=n.loop&&(d.slidesPerView!==n.slidesPerView||_);_&&t&&i.changeDirection(),yn(i.params,d);const S=i.params.enabled;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),v&&!S?i.disable():!v&&S&&i.enable(),i.currentBreakpoint=c,i.emit("_beforeBreakpoint",d),x&&t&&(i.loopDestroy(),i.loopCreate(e),i.updateSlides()),i.emit("breakpoint",d)}function e_(i,e="window",t){if(!i||e==="container"&&!t)return;let n=!1;const r=bn(),s=e==="window"?r.innerHeight:t.clientHeight,c=Object.keys(i).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const d=parseFloat(o.substr(1));return{value:s*d,point:o}}return{value:o,point:o}});c.sort((o,d)=>parseInt(o.value,10)-parseInt(d.value,10));for(let o=0;o<c.length;o+=1){const{point:d,value:p}=c[o];e==="window"?r.matchMedia(`(min-width: ${p}px)`).matches&&(n=d):p<=t.clientWidth&&(n=d)}return n||"max"}const t_={setBreakpoint:Qv,getBreakpoint:e_};function n_(i,e){const t=[];return i.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(r=>{n[r]&&t.push(e+r)}):typeof n=="string"&&t.push(e+n)}),t}function i_(){const i=this,{classNames:e,params:t,rtl:n,el:r,device:s}=i,c=n_(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...c),r.classList.add(...e),i.emitContainerClasses()}function r_(){const i=this,{el:e,classNames:t}=i;e.classList.remove(...t),i.emitContainerClasses()}const s_={addClasses:i_,removeClasses:r_};function a_(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:n}=t;if(n){const r=i.slides.length-1,s=i.slidesGrid[r]+i.slidesSizesGrid[r]+n*2;i.isLocked=i.size>s}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}const o_={checkOverflow:a_},rc={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function l_(i,e){return function(n={}){const r=Object.keys(n)[0],s=n[r];if(typeof s!="object"||s===null){yn(e,n);return}if(["navigation","pagination","scrollbar"].indexOf(r)>=0&&i[r]===!0&&(i[r]={auto:!0}),!(r in i&&"enabled"in s)){yn(e,n);return}i[r]===!0&&(i[r]={enabled:!0}),typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),yn(e,n)}}const Oa={eventsEmitter:sv,update:gv,translate:Mv,transition:Ev,slide:Nv,loop:zv,grabCursor:Hv,events:Jv,breakpoints:t_,checkOverflow:o_,classes:s_},Fa={};class Cn{constructor(...e){let t,n;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?n=e[0]:[t,n]=e,n||(n={}),n=yn({},n),t&&!n.el&&(n.el=t);const r=$n();if(n.el&&typeof n.el=="string"&&r.querySelectorAll(n.el).length>1){const d=[];return r.querySelectorAll(n.el).forEach(p=>{const g=yn({},n,{el:p});d.push(new Cn(g))}),d}const s=this;s.__swiper__=!0,s.support=Fc(),s.device=ev({userAgent:n.userAgent}),s.browser=nv(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const c={};s.modules.forEach(d=>{d({params:n,swiper:s,extendParams:l_(n,c),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const o=yn({},rc,c);return s.params=yn({},o,Fa,n),s.originalParams=yn({},s.params),s.passedParams=yn({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(d=>{s.on(d,s.params.on[d])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=jn(t,`.${n.slideClass}, swiper-slide`),s=Rs(r[0]);return Rs(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=jn(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),c=(n.maxTranslate()-r)*e+r;n.translateTo(c,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const n=this,{params:r,slides:s,slidesGrid:c,slidesSizesGrid:o,size:d,activeIndex:p}=n;let g=1;if(r.centeredSlides){let v=s[p].swiperSlideSize,_;for(let x=p+1;x<s.length;x+=1)s[x]&&!_&&(v+=s[x].swiperSlideSize,g+=1,v>d&&(_=!0));for(let x=p-1;x>=0;x-=1)s[x]&&!_&&(v+=s[x].swiperSlideSize,g+=1,v>d&&(_=!0))}else if(e==="current")for(let v=p+1;v<s.length;v+=1)(t?c[v]+o[v]-c[p]<d:c[v]-c[p]<d)&&(g+=1);else for(let v=p-1;v>=0;v-=1)c[p]-c[v]<d&&(g+=1);return g}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(c=>{c.complete&&Cs(e,c)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const c=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(c,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(e.params.freeMode&&e.params.freeMode.enabled)r(),e.params.autoHeight&&e.updateAutoHeight();else{if((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const c=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(c.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,r=n.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let c=(()=>n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):jn(n,r())[0])();return!c&&t.params.createElements&&(c=Uc("div",t.params.wrapperClass),n.append(c),jn(n,`.${t.params.slideClass}`).forEach(o=>{c.append(o)})),Object.assign(t,{el:n,wrapperEl:c,slidesEl:t.isElement?n:c,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||pi(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||pi(n,"direction")==="rtl"),wrongRTL:pi(c,"display")==="-webkit-box"}),!0}init(e){const t=this;return t.initialized||t.mount(e)===!1||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete?Cs(t,r):r.addEventListener("load",s=>{Cs(t,s.target)})}),Ya(t),t.initialized=!0,Ya(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:r,el:s,wrapperEl:c,slides:o}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),c.removeAttribute("style"),o&&o.length&&o.forEach(d=>{d.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),d.removeAttribute("style"),d.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(d=>{n.off(d)}),e!==!1&&(n.el.swiper=null,jg(n)),n.destroyed=!0),null}static extendDefaults(e){yn(Fa,e)}static get extendedDefaults(){return Fa}static get defaults(){return rc}static installModule(e){Cn.prototype.__modules__||(Cn.prototype.__modules__=[]);const t=Cn.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Cn.installModule(t)),Cn):(Cn.installModule(e),Cn)}}Object.keys(Oa).forEach(i=>{Object.keys(Oa[i]).forEach(e=>{Cn.prototype[e]=Oa[i][e]})});Cn.use([iv,rv]);function Bc(i,e,t,n){return i.params.createElements&&Object.keys(n).forEach(r=>{if(!t[r]&&t.auto===!0){let s=jn(i.el,`.${n[r]}`)[0];s||(s=Uc("div",n[r]),s.className=n[r],i.el.append(s)),t[r]=s,e[r]=s}}),t}function c_({swiper:i,extendParams:e,on:t,emit:n}){e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),i.navigation={nextEl:null,prevEl:null};const r=S=>(Array.isArray(S)||(S=[S].filter(b=>!!b)),S);function s(S){let b;return S&&typeof S=="string"&&i.isElement&&(b=i.el.shadowRoot.querySelector(S),b)?b:(S&&(typeof S=="string"&&(b=[...document.querySelectorAll(S)]),i.params.uniqueNavElements&&typeof S=="string"&&b.length>1&&i.el.querySelectorAll(S).length===1&&(b=i.el.querySelector(S))),S&&!b?S:b)}function c(S,b){const y=i.params.navigation;S=r(S),S.forEach(f=>{f&&(f.classList[b?"add":"remove"](...y.disabledClass.split(" ")),f.tagName==="BUTTON"&&(f.disabled=b),i.params.watchOverflow&&i.enabled&&f.classList[i.isLocked?"add":"remove"](y.lockClass))})}function o(){const{nextEl:S,prevEl:b}=i.navigation;if(i.params.loop){c(b,!1),c(S,!1);return}c(b,i.isBeginning&&!i.params.rewind),c(S,i.isEnd&&!i.params.rewind)}function d(S){S.preventDefault(),!(i.isBeginning&&!i.params.loop&&!i.params.rewind)&&(i.slidePrev(),n("navigationPrev"))}function p(S){S.preventDefault(),!(i.isEnd&&!i.params.loop&&!i.params.rewind)&&(i.slideNext(),n("navigationNext"))}function g(){const S=i.params.navigation;if(i.params.navigation=Bc(i,i.originalParams.navigation,i.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(S.nextEl||S.prevEl))return;let b=s(S.nextEl),y=s(S.prevEl);Object.assign(i.navigation,{nextEl:b,prevEl:y}),b=r(b),y=r(y);const f=(A,C)=>{A&&A.addEventListener("click",C==="next"?p:d),!i.enabled&&A&&A.classList.add(...S.lockClass.split(" "))};b.forEach(A=>f(A,"next")),y.forEach(A=>f(A,"prev"))}function v(){let{nextEl:S,prevEl:b}=i.navigation;S=r(S),b=r(b);const y=(f,A)=>{f.removeEventListener("click",A==="next"?p:d),f.classList.remove(...i.params.navigation.disabledClass.split(" "))};S.forEach(f=>y(f,"next")),b.forEach(f=>y(f,"prev"))}t("init",()=>{i.params.navigation.enabled===!1?x():(g(),o())}),t("toEdge fromEdge lock unlock",()=>{o()}),t("destroy",()=>{v()}),t("enable disable",()=>{let{nextEl:S,prevEl:b}=i.navigation;S=r(S),b=r(b),[...S,...b].filter(y=>!!y).forEach(y=>y.classList[i.enabled?"remove":"add"](i.params.navigation.lockClass))}),t("click",(S,b)=>{let{nextEl:y,prevEl:f}=i.navigation;y=r(y),f=r(f);const A=b.target;if(i.params.navigation.hideOnClick&&!f.includes(A)&&!y.includes(A)){if(i.pagination&&i.params.pagination&&i.params.pagination.clickable&&(i.pagination.el===A||i.pagination.el.contains(A)))return;let C;y.length?C=y[0].classList.contains(i.params.navigation.hiddenClass):f.length&&(C=f[0].classList.contains(i.params.navigation.hiddenClass)),n(C===!0?"navigationShow":"navigationHide"),[...y,...f].filter(E=>!!E).forEach(E=>E.classList.toggle(i.params.navigation.hiddenClass))}});const _=()=>{i.el.classList.remove(...i.params.navigation.navigationDisabledClass.split(" ")),g(),o()},x=()=>{i.el.classList.add(...i.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(i.navigation,{enable:_,disable:x,update:o,init:g,destroy:v})}function Ur(i=""){return`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function u_({swiper:i,extendParams:e,on:t,emit:n}){const r="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),i.pagination={el:null,bullets:[]};let s,c=0;const o=f=>(Array.isArray(f)||(f=[f].filter(A=>!!A)),f);function d(){return!i.params.pagination.el||!i.pagination.el||Array.isArray(i.pagination.el)&&i.pagination.el.length===0}function p(f,A){const{bulletActiveClass:C}=i.params.pagination;f&&(f=f[`${A==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${C}-${A}`),f=f[`${A==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${C}-${A}-${A}`)))}function g(f){const A=f.target.closest(Ur(i.params.pagination.bulletClass));if(!A)return;f.preventDefault();const C=Rs(A)*i.params.slidesPerGroup;if(i.params.loop){if(i.realIndex===C)return;const E=i.getSlideIndexByData(C),D=i.getSlideIndexByData(i.realIndex);E>i.slides.length-i.loopedSlides&&i.loopFix({direction:E>D?"next":"prev",activeSlideIndex:E,slideTo:!1}),i.slideToLoop(C)}else i.slideTo(C)}function v(){const f=i.rtl,A=i.params.pagination;if(d())return;let C=i.pagination.el;C=o(C);let E,D;const u=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.slides.length,q=i.params.loop?Math.ceil(u/i.params.slidesPerGroup):i.snapGrid.length;if(i.params.loop?(D=i.previousRealIndex||0,E=i.params.slidesPerGroup>1?Math.floor(i.realIndex/i.params.slidesPerGroup):i.realIndex):typeof i.snapIndex<"u"?(E=i.snapIndex,D=i.previousSnapIndex):(D=i.previousIndex||0,E=i.activeIndex||0),A.type==="bullets"&&i.pagination.bullets&&i.pagination.bullets.length>0){const V=i.pagination.bullets;let P,U,Z;if(A.dynamicBullets&&(s=$a(V[0],i.isHorizontal()?"width":"height",!0),C.forEach(W=>{W.style[i.isHorizontal()?"width":"height"]=`${s*(A.dynamicMainBullets+4)}px`}),A.dynamicMainBullets>1&&D!==void 0&&(c+=E-(D||0),c>A.dynamicMainBullets-1?c=A.dynamicMainBullets-1:c<0&&(c=0)),P=Math.max(E-c,0),U=P+(Math.min(V.length,A.dynamicMainBullets)-1),Z=(U+P)/2),V.forEach(W=>{const B=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(Y=>`${A.bulletActiveClass}${Y}`)].map(Y=>typeof Y=="string"&&Y.includes(" ")?Y.split(" "):Y).flat();W.classList.remove(...B)}),C.length>1)V.forEach(W=>{const B=Rs(W);B===E&&W.classList.add(...A.bulletActiveClass.split(" ")),A.dynamicBullets&&(B>=P&&B<=U&&W.classList.add(...`${A.bulletActiveClass}-main`.split(" ")),B===P&&p(W,"prev"),B===U&&p(W,"next"))});else{const W=V[E];if(W&&W.classList.add(...A.bulletActiveClass.split(" ")),A.dynamicBullets){const B=V[P],Y=V[U];for(let re=P;re<=U;re+=1)V[re]&&V[re].classList.add(...`${A.bulletActiveClass}-main`.split(" "));p(B,"prev"),p(Y,"next")}}if(A.dynamicBullets){const W=Math.min(V.length,A.dynamicMainBullets+4),B=(s*W-s)/2-Z*s,Y=f?"right":"left";V.forEach(re=>{re.style[i.isHorizontal()?Y:"top"]=`${B}px`})}}C.forEach((V,P)=>{if(A.type==="fraction"&&(V.querySelectorAll(Ur(A.currentClass)).forEach(U=>{U.textContent=A.formatFractionCurrent(E+1)}),V.querySelectorAll(Ur(A.totalClass)).forEach(U=>{U.textContent=A.formatFractionTotal(q)})),A.type==="progressbar"){let U;A.progressbarOpposite?U=i.isHorizontal()?"vertical":"horizontal":U=i.isHorizontal()?"horizontal":"vertical";const Z=(E+1)/q;let W=1,B=1;U==="horizontal"?W=Z:B=Z,V.querySelectorAll(Ur(A.progressbarFillClass)).forEach(Y=>{Y.style.transform=`translate3d(0,0,0) scaleX(${W}) scaleY(${B})`,Y.style.transitionDuration=`${i.params.speed}ms`})}A.type==="custom"&&A.renderCustom?(V.innerHTML=A.renderCustom(i,E+1,q),P===0&&n("paginationRender",V)):(P===0&&n("paginationRender",V),n("paginationUpdate",V)),i.params.watchOverflow&&i.enabled&&V.classList[i.isLocked?"add":"remove"](A.lockClass)})}function _(){const f=i.params.pagination;if(d())return;const A=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.slides.length;let C=i.pagination.el;C=o(C);let E="";if(f.type==="bullets"){let D=i.params.loop?Math.ceil(A/i.params.slidesPerGroup):i.snapGrid.length;i.params.freeMode&&i.params.freeMode.enabled&&D>A&&(D=A);for(let u=0;u<D;u+=1)f.renderBullet?E+=f.renderBullet.call(i,u,f.bulletClass):E+=`<${f.bulletElement} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?E=f.renderFraction.call(i,f.currentClass,f.totalClass):E=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?E=f.renderProgressbar.call(i,f.progressbarFillClass):E=`<span class="${f.progressbarFillClass}"></span>`),i.pagination.bullets=[],C.forEach(D=>{f.type!=="custom"&&(D.innerHTML=E||""),f.type==="bullets"&&i.pagination.bullets.push(...D.querySelectorAll(Ur(f.bulletClass)))}),f.type!=="custom"&&n("paginationRender",C[0])}function x(){i.params.pagination=Bc(i,i.originalParams.pagination,i.params.pagination,{el:"swiper-pagination"});const f=i.params.pagination;if(!f.el)return;let A;typeof f.el=="string"&&i.isElement&&(A=i.el.shadowRoot.querySelector(f.el)),!A&&typeof f.el=="string"&&(A=[...document.querySelectorAll(f.el)]),A||(A=f.el),!(!A||A.length===0)&&(i.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(A)&&A.length>1&&(A=[...i.el.querySelectorAll(f.el)],A.length>1&&(A=A.filter(C=>Oc(C,".swiper")[0]===i.el)[0])),Array.isArray(A)&&A.length===1&&(A=A[0]),Object.assign(i.pagination,{el:A}),A=o(A),A.forEach(C=>{f.type==="bullets"&&f.clickable&&C.classList.add(f.clickableClass),C.classList.add(f.modifierClass+f.type),C.classList.add(i.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(C.classList.add(`${f.modifierClass}${f.type}-dynamic`),c=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&C.classList.add(f.progressbarOppositeClass),f.clickable&&C.addEventListener("click",g),i.enabled||C.classList.add(f.lockClass)}))}function S(){const f=i.params.pagination;if(d())return;let A=i.pagination.el;A&&(A=o(A),A.forEach(C=>{C.classList.remove(f.hiddenClass),C.classList.remove(f.modifierClass+f.type),C.classList.remove(i.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&C.removeEventListener("click",g)})),i.pagination.bullets&&i.pagination.bullets.forEach(C=>C.classList.remove(...f.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!i.pagination||!i.pagination.el)return;const f=i.params.pagination;let{el:A}=i.pagination;A=o(A),A.forEach(C=>{C.classList.remove(f.horizontalClass,f.verticalClass),C.classList.add(i.isHorizontal()?f.horizontalClass:f.verticalClass)})}),t("init",()=>{i.params.pagination.enabled===!1?y():(x(),_(),v())}),t("activeIndexChange",()=>{typeof i.snapIndex>"u"&&v()}),t("snapIndexChange",()=>{v()}),t("snapGridLengthChange",()=>{_(),v()}),t("destroy",()=>{S()}),t("enable disable",()=>{let{el:f}=i.pagination;f&&(f=o(f),f.forEach(A=>A.classList[i.enabled?"remove":"add"](i.params.pagination.lockClass)))}),t("lock unlock",()=>{v()}),t("click",(f,A)=>{const C=A.target;let{el:E}=i.pagination;if(Array.isArray(E)||(E=[E].filter(D=>!!D)),i.params.pagination.el&&i.params.pagination.hideOnClick&&E&&E.length>0&&!C.classList.contains(i.params.pagination.bulletClass)){if(i.navigation&&(i.navigation.nextEl&&C===i.navigation.nextEl||i.navigation.prevEl&&C===i.navigation.prevEl))return;const D=E[0].classList.contains(i.params.pagination.hiddenClass);n(D===!0?"paginationShow":"paginationHide"),E.forEach(u=>u.classList.toggle(i.params.pagination.hiddenClass))}});const b=()=>{i.el.classList.remove(i.params.pagination.paginationDisabledClass);let{el:f}=i.pagination;f&&(f=o(f),f.forEach(A=>A.classList.remove(i.params.pagination.paginationDisabledClass))),x(),_(),v()},y=()=>{i.el.classList.add(i.params.pagination.paginationDisabledClass);let{el:f}=i.pagination;f&&(f=o(f),f.forEach(A=>A.classList.add(i.params.pagination.paginationDisabledClass))),S()};Object.assign(i.pagination,{enable:b,disable:y,render:_,update:v,init:x,destroy:S})}function f_({swiper:i,extendParams:e,on:t,emit:n,params:r}){i.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,c,o=r&&r.autoplay?r.autoplay.delay:3e3,d=r&&r.autoplay?r.autoplay.delay:3e3,p,g=new Date().getTime,v,_,x,S,b,y;function f(ue){!i||i.destroyed||!i.wrapperEl||ue.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",f),V())}const A=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?v=!0:v&&(d=p,v=!1);const ue=i.autoplay.paused?p:g+d-new Date().getTime();i.autoplay.timeLeft=ue,n("autoplayTimeLeft",ue,ue/o),c=requestAnimationFrame(()=>{A()})},C=()=>{let ue;return i.virtual&&i.params.virtual.enabled?ue=i.slides.filter(le=>le.classList.contains("swiper-slide-active"))[0]:ue=i.slides[i.activeIndex],ue?parseInt(ue.getAttribute("data-swiper-autoplay"),10):void 0},E=ue=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(c),A();let ge=typeof ue>"u"?i.params.autoplay.delay:ue;o=i.params.autoplay.delay,d=i.params.autoplay.delay;const le=C();!Number.isNaN(le)&&le>0&&typeof ue>"u"&&(ge=le,o=le,d=le),p=ge;const be=i.params.speed,ye=()=>{!i||i.destroyed||(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(be,!0,!0),n("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,be,!0,!0),n("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(be,!0,!0),n("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,be,!0,!0),n("autoplay")),i.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return ge>0?(clearTimeout(s),s=setTimeout(()=>{ye()},ge)):requestAnimationFrame(()=>{ye()}),ge},D=()=>{i.autoplay.running=!0,E(),n("autoplayStart")},u=()=>{i.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(c),n("autoplayStop")},q=(ue,ge)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(s),ue||(y=!0);const le=()=>{n("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",f):V()};if(i.autoplay.paused=!0,ge){b&&(p=i.params.autoplay.delay),b=!1,le();return}p=(p||i.params.autoplay.delay)-(new Date().getTime()-g),!(i.isEnd&&p<0&&!i.params.loop)&&(p<0&&(p=0),le())},V=()=>{i.isEnd&&p<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(g=new Date().getTime(),y?(y=!1,E(p)):E(),i.autoplay.paused=!1,n("autoplayResume"))},P=()=>{if(i.destroyed||!i.autoplay.running)return;const ue=$n();ue.visibilityState==="hidden"&&(y=!0,q(!0)),ue.visibilityState==="visible"&&V()},U=ue=>{ue.pointerType==="mouse"&&(y=!0,q(!0))},Z=ue=>{ue.pointerType==="mouse"&&i.autoplay.paused&&V()},W=()=>{i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",U),i.el.addEventListener("pointerleave",Z))},B=()=>{i.el.removeEventListener("pointerenter",U),i.el.removeEventListener("pointerleave",Z)},Y=()=>{$n().addEventListener("visibilitychange",P)},re=()=>{$n().removeEventListener("visibilitychange",P)};t("init",()=>{i.params.autoplay.enabled&&(W(),Y(),g=new Date().getTime(),D())}),t("destroy",()=>{B(),re(),i.autoplay.running&&u()}),t("beforeTransitionStart",(ue,ge,le)=>{i.destroyed||!i.autoplay.running||(le||!i.params.autoplay.disableOnInteraction?q(!0,!0):u())}),t("sliderFirstMove",()=>{if(!(i.destroyed||!i.autoplay.running)){if(i.params.autoplay.disableOnInteraction){u();return}_=!0,x=!1,y=!1,S=setTimeout(()=>{y=!0,x=!0,q(!0)},200)}}),t("touchEnd",()=>{if(!(i.destroyed||!i.autoplay.running||!_)){if(clearTimeout(S),clearTimeout(s),i.params.autoplay.disableOnInteraction){x=!1,_=!1;return}x&&i.params.cssMode&&V(),x=!1,_=!1}}),t("slideChange",()=>{i.destroyed||!i.autoplay.running||(b=!0)}),Object.assign(i.autoplay,{start:D,stop:u,pause:q,resume:V})}Nr(window).bind("scroll",function(){var i=Nr(window).height()-70;Nr(window).scrollTop()>i?Nr("nav").addClass("fixed"):Nr("nav").removeClass("fixed")});new Cn(".mySwiper",{modules:[c_,u_,f_],speed:500,slidesPerView:4,spaceBetween:10,freeMode:!0,grabCursor:!0,loop:!0,autoplay:{delay:1500,disableOnInteraction:!0}});document.querySelector("#contact-form").addEventListener("submit",i=>{i.preventDefault(),console.log(i.target.elements.name.value),console.log(i.target.elements.email.value),console.log(i.target.elements.message.value),Email.send({SecureToken:"938bc9ef-b493-46b1-889a-3ed5e920edf8",To:"manmeets1100@gmail.com",From:"mnmyt.dev@gmail.com",Subject:"Inquiry from My Website",Body:"Name: "+i.target.elements.name.value+"<br> Email: "+i.target.elements.email.value+"<br> Message: "+i.target.elements.message.value}).then(e=>alert("Thank you for connecting with me")),i.target.elements.name.value="",i.target.elements.email.value="",i.target.elements.message.value=""});let Pn,si,Di,sc,Hc=0,Gc=0,Vc=window.innerWidth/2,Wc=window.innerHeight/2,qc;d_();jc();function d_(){Pn=new Sn(50,window.innerWidth/window.innerHeight,5,2e3),Pn.position.z=10,si=new Dg,si.fog=new no(255,.001);const i=new Dn,e=[],t=2e3;for(let d=0;d<2e4;d++){const p=(Math.random()*t+Math.random()*t)/2-t/2,g=(Math.random()*t+Math.random()*t)/2-t/2,v=(Math.random()*t+Math.random()*t)/2-t/2;e.push(p,g,v)}i.setAttribute("position",new sn(e,3)),sc=new Dc({size:2,color:16777215});const n=new Ng(i,sc);si.add(n),Di=new Lc,Di.setPixelRatio(window.devicePixelRatio),Di.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Di.domElement),document.body.style.touchAction="none",document.body.addEventListener("pointermove",p_),window.addEventListener("resize",h_);const r=new Fg(16777215);r.position.set(15,15,50);const s=new zg(16777215,.1);si.add(r,s);const c=new kg(r),o=new Bg(2e3,50);si.add(c,o),qc=new Hg(Pn,Di.domElement),Pn.position.set(0,20,100)}function h_(){Vc=window.innerWidth/2,Wc=window.innerHeight/2,Pn.aspect=window.innerWidth/window.innerHeight,Pn.updateProjectionMatrix(),Di.setSize(window.innerWidth,window.innerHeight)}function p_(i){Hc=i.clientX-Vc,Gc=i.clientY-Wc}function jc(){requestAnimationFrame(jc),qc.update(),m_()}function m_(){Pn.position.x+=(Hc*2-Pn.position.x)*.02,Pn.position.y+=(-Gc*2-Pn.position.y)*.02,Pn.lookAt(si.position),Di.render(si,Pn),si.rotation.x+=.001,si.rotation.y+=.002}
