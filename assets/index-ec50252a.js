(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hr="151",nl=0,br=1,il=2,no=1,sl=2,ui=3,dn=0,gt=1,tn=2,un=0,Yn=1,wr=2,Tr=3,Er=4,rl=5,qn=100,al=101,ol=102,Ar=103,Cr=104,ll=200,cl=201,ul=202,dl=203,io=204,so=205,fl=206,hl=207,pl=208,ml=209,gl=210,_l=0,vl=1,xl=2,er=3,Ml=4,Sl=5,yl=6,bl=7,ro=0,wl=1,Tl=2,nn=0,El=1,Al=2,Cl=3,Ll=4,Pl=5,ao=300,Jn=301,Qn=302,tr=303,nr=304,us=306,ir=1e3,Bt=1001,sr=1002,ft=1003,Lr=1004,_s=1005,Pt=1006,Rl=1007,yi=1008,wn=1009,Dl=1010,Il=1011,oo=1012,Ul=1013,Sn=1014,yn=1015,bi=1016,Nl=1017,Ol=1018,Zn=1020,zl=1021,Gt=1023,Fl=1024,Bl=1025,bn=1026,ei=1027,Gl=1028,kl=1029,Vl=1030,Hl=1031,Wl=1033,vs=33776,xs=33777,Ms=33778,Ss=33779,Pr=35840,Rr=35841,Dr=35842,Ir=35843,ql=36196,Ur=37492,Nr=37496,Or=37808,zr=37809,Fr=37810,Br=37811,Gr=37812,kr=37813,Vr=37814,Hr=37815,Wr=37816,qr=37817,Xr=37818,jr=37819,$r=37820,Yr=37821,ys=36492,Xl=36283,Zr=36284,Kr=36285,Jr=36286,Tn=3e3,Ge=3001,jl=3200,$l=3201,lo=0,Yl=1,Wt="srgb",wi="srgb-linear",co="display-p3",bs=7680,Zl=519,Qr=35044,ea="300 es",rr=1035;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,ar=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ot[i&255]+ot[i>>8&255]+ot[i>>16&255]+ot[i>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function Kl(i,e){return(i%e+e)%e}function Ts(i,e,t){return(1-t)*i+t*e}function ta(i){return(i&i-1)===0&&i!==0}function Jl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],d=n[4],f=n[7],h=n[2],p=n[5],g=n[8],_=s[0],m=s[3],c=s[6],v=s[1],M=s[4],x=s[7],b=s[2],A=s[5],R=s[8];return r[0]=o*_+a*v+l*b,r[3]=o*m+a*M+l*A,r[6]=o*c+a*x+l*R,r[1]=u*_+d*v+f*b,r[4]=u*m+d*M+f*A,r[7]=u*c+d*x+f*R,r[2]=h*_+p*v+g*b,r[5]=h*m+p*M+g*A,r[8]=h*c+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return t*o*d-t*a*u-n*r*d+n*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*o-a*u,h=a*l-d*r,p=u*r-o*l,g=t*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*u-d*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(d*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-u*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Pe;function uo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ti(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ql=new Pe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ec=new Pe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function tc(i){return i.convertSRGBToLinear().applyMatrix3(ec)}function nc(i){return i.applyMatrix3(Ql).convertLinearToSRGB()}const ic={[wi]:i=>i,[Wt]:i=>i.convertSRGBToLinear(),[co]:tc},sc={[wi]:i=>i,[Wt]:i=>i.convertLinearToSRGB(),[co]:nc},Mt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return wi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ic[e],s=sc[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Ln;class fo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ln===void 0&&(Ln=Ti("canvas")),Ln.width=e.width,Ln.height=e.height;const n=Ln.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ln}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ti("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ho{constructor(e=null){this.isSource=!0,this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cs(s[o].image)):r.push(Cs(s[o]))}else r=Cs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rc=0;class _t extends ni{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=Bt,s=Bt,r=Pt,o=yi,a=Gt,l=wn,u=_t.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Ei(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ao)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=ao;_t.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,x=(p+1)/2,b=(c+1)/2,A=(d+h)/4,R=(f+_)/4,P=(g+m)/4;return M>x&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=R/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-d)/v,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class En extends ni{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new _t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class po extends _t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends _t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],u=n[s+1],d=n[s+2],f=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==p||d!==g){let m=1-a;const c=l*h+u*p+d*g+f*_,v=c>=0?1:-1,M=1-c*c;if(M>Number.EPSILON){const b=Math.sqrt(M),A=Math.atan2(b,c*v);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*v;if(l=l*m+h*x,u=u*m+p*x,d=d*m+g*x,f=f*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=b,u*=b,d*=b,f*=b}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],u=n[s+2],d=n[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+d*f+l*p-u*h,e[t+1]=l*g+d*h+u*f-a*p,e[t+2]=u*g+d*p+a*h-l*f,e[t+3]=d*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),d=a(s/2),f=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*d*f+u*p*g,this._y=u*p*f-h*d*g,this._z=u*d*g+h*p*f,this._w=u*d*f-h*p*g;break;case"YXZ":this._x=h*d*f+u*p*g,this._y=u*p*f-h*d*g,this._z=u*d*g-h*p*f,this._w=u*d*f+h*p*g;break;case"ZXY":this._x=h*d*f-u*p*g,this._y=u*p*f+h*d*g,this._z=u*d*g+h*p*f,this._w=u*d*f-h*p*g;break;case"ZYX":this._x=h*d*f-u*p*g,this._y=u*p*f+h*d*g,this._z=u*d*g-h*p*f,this._w=u*d*f+h*p*g;break;case"YZX":this._x=h*d*f+u*p*g,this._y=u*p*f+h*d*g,this._z=u*d*g-h*p*f,this._w=u*d*f-h*p*g;break;case"XZY":this._x=h*d*f-u*p*g,this._y=u*p*f-h*d*g,this._z=u*d*g+h*p*f,this._w=u*d*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],d=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,d=t._w;return this._x=n*d+o*a+s*u-r*l,this._y=s*d+o*l+r*a-n*u,this._z=r*d+o*u+n*l-s*a,this._w=o*d-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-t)*d)/u,h=Math.sin(t*d)/u;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(na.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(na.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*s-a*n,d=l*n+a*t-r*s,f=l*s+r*n-o*t,h=-r*t-o*n-a*s;return this.x=u*l+h*-r+d*-a-f*-o,this.y=d*l+h*-o+f*-r-u*-a,this.z=f*l+h*-a+u*-o-d*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ls.copy(this).projectOnVector(e),this.sub(Ls)}reflect(e){return this.sub(Ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ls=new O,na=new Ai;class Ci{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Pn.copy(e.boundingBox),Pn.applyMatrix4(e.matrixWorld),this.union(Pn);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Zt.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zt)}else s.boundingBox===null&&s.computeBoundingBox(),Pn.copy(s.boundingBox),Pn.applyMatrix4(e.matrixWorld),this.union(Pn)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ri),Ii.subVectors(this.max,ri),Rn.subVectors(e.a,ri),Dn.subVectors(e.b,ri),In.subVectors(e.c,ri),rn.subVectors(Dn,Rn),an.subVectors(In,Dn),mn.subVectors(Rn,In);let t=[0,-rn.z,rn.y,0,-an.z,an.y,0,-mn.z,mn.y,rn.z,0,-rn.x,an.z,0,-an.x,mn.z,0,-mn.x,-rn.y,rn.x,0,-an.y,an.x,0,-mn.y,mn.x,0];return!Ps(t,Rn,Dn,In,Ii)||(t=[1,0,0,0,1,0,0,0,1],!Ps(t,Rn,Dn,In,Ii))?!1:(Ui.crossVectors(rn,an),t=[Ui.x,Ui.y,Ui.z],Ps(t,Rn,Dn,In,Ii))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new O,new O,new O,new O,new O,new O,new O,new O],Zt=new O,Pn=new Ci,Rn=new O,Dn=new O,In=new O,rn=new O,an=new O,mn=new O,ri=new O,Ii=new O,Ui=new O,gn=new O;function Ps(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gn.fromArray(i,r);const a=s.x*Math.abs(gn.x)+s.y*Math.abs(gn.y)+s.z*Math.abs(gn.z),l=e.dot(gn),u=t.dot(gn),d=n.dot(gn);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const oc=new Ci,ai=new O,Rs=new O;class Li{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ai.subVectors(e,this.center);const t=ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ai,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ai.copy(e.center).add(Rs)),this.expandByPoint(ai.copy(e.center).sub(Rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new O,Ds=new O,Ni=new O,on=new O,Is=new O,Oi=new O,Us=new O;class pr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ds.copy(e).add(t).multiplyScalar(.5),Ni.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Ds);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ni),a=on.dot(this.direction),l=-on.dot(Ni),u=on.lengthSq(),d=Math.abs(1-o*o);let f,h,p,g;if(d>0)if(f=o*l-a,h=o*a-l,g=r*d,f>=0)if(h>=-g)if(h<=g){const _=1/d;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+u):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ds).addScaledVector(Ni,h),p}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),s=Kt.dot(Kt)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,s=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,s=(e.min.x-h.x)*u),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,s,r){Is.subVectors(t,e),Oi.subVectors(n,e),Us.crossVectors(Is,Oi);let o=this.direction.dot(Us),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;on.subVectors(this.origin,e);const l=a*this.direction.dot(Oi.crossVectors(on,Oi));if(l<0)return null;const u=a*this.direction.dot(Is.cross(on));if(u<0||l+u>o)return null;const d=-a*on.dot(Us);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,u,d,f,h,p,g,_,m){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=s,c[1]=r,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=g,c[11]=_,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Un.setFromMatrixColumn(e,0).length(),r=1/Un.setFromMatrixColumn(e,1).length(),o=1/Un.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*d,p=o*f,g=a*d,_=a*f;t[0]=l*d,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,g=u*d,_=u*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,g=u*d,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,g=a*d,_=a*f;t[0]=l*d,t[4]=g*u-p,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*d,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-u*d,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*d,t[4]=-f,t[8]=u*d,t[1]=h*f+_,t[5]=o*d,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*d,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lc,e,cc)}lookAt(e,t,n){const s=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),ln.crossVectors(n,St),ln.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),ln.crossVectors(n,St)),ln.normalize(),zi.crossVectors(St,ln),s[0]=ln.x,s[4]=zi.x,s[8]=St.x,s[1]=ln.y,s[5]=zi.y,s[9]=St.y,s[2]=ln.z,s[6]=zi.z,s[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],d=n[1],f=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],c=n[14],v=n[3],M=n[7],x=n[11],b=n[15],A=s[0],R=s[4],P=s[8],S=s[12],E=s[1],N=s[5],D=s[9],C=s[13],I=s[2],F=s[6],W=s[10],$=s[14],q=s[3],Q=s[7],Z=s[11],_e=s[15];return r[0]=o*A+a*E+l*I+u*q,r[4]=o*R+a*N+l*F+u*Q,r[8]=o*P+a*D+l*W+u*Z,r[12]=o*S+a*C+l*$+u*_e,r[1]=d*A+f*E+h*I+p*q,r[5]=d*R+f*N+h*F+p*Q,r[9]=d*P+f*D+h*W+p*Z,r[13]=d*S+f*C+h*$+p*_e,r[2]=g*A+_*E+m*I+c*q,r[6]=g*R+_*N+m*F+c*Q,r[10]=g*P+_*D+m*W+c*Z,r[14]=g*S+_*C+m*$+c*_e,r[3]=v*A+M*E+x*I+b*q,r[7]=v*R+M*N+x*F+b*Q,r[11]=v*P+M*D+x*W+b*Z,r[15]=v*S+M*C+x*$+b*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],c=e[15];return g*(+r*l*f-s*u*f-r*a*h+n*u*h+s*a*p-n*l*p)+_*(+t*l*p-t*u*h+r*o*h-s*o*p+s*u*d-r*l*d)+m*(+t*u*f-t*a*p-r*o*f+n*o*p+r*a*d-n*u*d)+c*(-s*a*d-t*l*f+t*a*h+s*o*f-n*o*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],c=e[15],v=f*m*u-_*h*u+_*l*p-a*m*p-f*l*c+a*h*c,M=g*h*u-d*m*u-g*l*p+o*m*p+d*l*c-o*h*c,x=d*_*u-g*f*u+g*a*p-o*_*p-d*a*c+o*f*c,b=g*f*l-d*_*l-g*a*h+o*_*h+d*a*m-o*f*m,A=t*v+n*M+s*x+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(_*h*r-f*m*r-_*s*p+n*m*p+f*s*c-n*h*c)*R,e[2]=(a*m*r-_*l*r+_*s*u-n*m*u-a*s*c+n*l*c)*R,e[3]=(f*l*r-a*h*r-f*s*u+n*h*u+a*s*p-n*l*p)*R,e[4]=M*R,e[5]=(d*m*r-g*h*r+g*s*p-t*m*p-d*s*c+t*h*c)*R,e[6]=(g*l*r-o*m*r-g*s*u+t*m*u+o*s*c-t*l*c)*R,e[7]=(o*h*r-d*l*r+d*s*u-t*h*u-o*s*p+t*l*p)*R,e[8]=x*R,e[9]=(g*f*r-d*_*r-g*n*p+t*_*p+d*n*c-t*f*c)*R,e[10]=(o*_*r-g*a*r+g*n*u-t*_*u-o*n*c+t*a*c)*R,e[11]=(d*a*r-o*f*r-d*n*u+t*f*u+o*n*p-t*a*p)*R,e[12]=b*R,e[13]=(d*_*s-g*f*s+g*n*h-t*_*h-d*n*m+t*f*m)*R,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*f*s-d*a*s+d*n*l-t*f*l-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,d=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,d*a+n,d*l-s*o,0,u*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,d=o+o,f=a+a,h=r*u,p=r*d,g=r*f,_=o*d,m=o*f,c=a*f,v=l*u,M=l*d,x=l*f,b=n.x,A=n.y,R=n.z;return s[0]=(1-(_+c))*b,s[1]=(p+x)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(h+c))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+M)*R,s[9]=(m-v)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Un.set(s[0],s[1],s[2]).length();const o=Un.set(s[4],s[5],s[6]).length(),a=Un.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ut.copy(this);const u=1/r,d=1/o,f=1/a;return Ut.elements[0]*=u,Ut.elements[1]*=u,Ut.elements[2]*=u,Ut.elements[4]*=d,Ut.elements[5]*=d,Ut.elements[6]*=d,Ut.elements[8]*=f,Ut.elements[9]*=f,Ut.elements[10]*=f,t.setFromRotationMatrix(Ut),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),u=1/(n-s),d=1/(o-r),f=(t+e)*l,h=(n+s)*u,p=(o+r)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Un=new O,Ut=new Xe,lc=new O(0,0,0),cc=new O(1,1,1),ln=new O,zi=new O,St=new O,ia=new Xe,sa=new Ai;class ds{constructor(e=0,t=0,n=0,s=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ia,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sa.setFromEuler(this),this.setFromQuaternion(sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uc=0;const ra=new O,Nn=new Ai,Jt=new Xe,Fi=new O,oi=new O,dc=new O,fc=new Ai,aa=new O(1,0,0),oa=new O(0,1,0),la=new O(0,0,1),hc={type:"added"},ca={type:"removed"};class st extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new O,t=new ds,n=new Ai,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Pe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(aa,e)}rotateY(e){return this.rotateOnAxis(oa,e)}rotateZ(e){return this.rotateOnAxis(la,e)}translateOnAxis(e,t){return ra.copy(e).applyQuaternion(this.quaternion),this.position.add(ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(aa,e)}translateY(e){return this.translateOnAxis(oa,e)}translateZ(e){return this.translateOnAxis(la,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fi.copy(e):Fi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(oi,Fi,this.up):Jt.lookAt(Fi,oi,this.up),this.quaternion.setFromRotationMatrix(Jt),s&&(Jt.extractRotation(s.matrixWorld),Nn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ca)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ca)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,e,dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,fc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}st.DEFAULT_UP=new O(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new O,Qt=new O,Ns=new O,en=new O,On=new O,zn=new O,ua=new O,Os=new O,zs=new O,Fs=new O;let Bi=!1;class zt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nt.subVectors(e,t),s.cross(Nt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nt.subVectors(s,t),Qt.subVectors(n,t),Ns.subVectors(e,t);const o=Nt.dot(Nt),a=Nt.dot(Qt),l=Nt.dot(Ns),u=Qt.dot(Qt),d=Qt.dot(Ns),f=o*u-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(u*l-a*d)*h,g=(o*d-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(e,t,n,s,r,o,a,l){return Bi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bi=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,en),l.setScalar(0),l.addScaledVector(r,en.x),l.addScaledVector(o,en.y),l.addScaledVector(a,en.z),l}static isFrontFacing(e,t,n,s){return Nt.subVectors(n,t),Qt.subVectors(e,t),Nt.cross(Qt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Nt.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Bi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bi=!0),zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;On.subVectors(s,n),zn.subVectors(r,n),Os.subVectors(e,n);const l=On.dot(Os),u=zn.dot(Os);if(l<=0&&u<=0)return t.copy(n);zs.subVectors(e,s);const d=On.dot(zs),f=zn.dot(zs);if(d>=0&&f<=d)return t.copy(s);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(On,o);Fs.subVectors(e,r);const p=On.dot(Fs),g=zn.dot(Fs);if(g>=0&&p<=g)return t.copy(r);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(zn,a);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return ua.subVectors(r,s),a=(f-d)/(f-d+(p-g)),t.copy(s).addScaledVector(ua,a);const c=1/(m+_+h);return o=_*c,a=h*c,t.copy(n).addScaledVector(On,o).addScaledVector(zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pc=0;class Cn extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Yn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Bs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Mt.workingColorSpace){if(e=Kl(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bs(o,r,e+1/3),this.g=Bs(o,r,e),this.b=Bs(o,r,e-1/3)}return Mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Mt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Mt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,u=parseFloat(r[2])/100,d=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,u,d,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=go[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Mt.fromWorkingColorSpace(lt.copy(this),e),mt(lt.r*255,0,255)<<16^mt(lt.g*255,0,255)<<8^mt(lt.b*255,0,255)<<0}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(lt.copy(this),t);const n=lt.r,s=lt.g,r=lt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(lt.copy(this),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=Wt){Mt.fromWorkingColorSpace(lt.copy(this),e);const t=lt.r,n=lt.g,s=lt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${s*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(Gi);const n=Ts(Ot.h,Gi.h,t),s=Ts(Ot.s,Gi.s,t),r=Ts(Ot.l,Gi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const lt=new Ie;Ie.NAMES=go;class _o extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new O,ki=new Fe;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ki.fromBufferAttribute(this,t),ki.applyMatrix3(e),this.setXY(t,ki.x,ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class vo extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xo extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mc=0;const At=new Xe,Gs=new st,Fn=new O,yt=new Ci,li=new Ci,tt=new O;class Dt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uo(e)?xo:vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return Gs.lookAt(e),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];yt.setFromBufferAttribute(r),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];li.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(yt.min,li.min),yt.expandByPoint(tt),tt.addVectors(yt.max,li.max),yt.expandByPoint(tt)):(yt.expandByPoint(li.min),yt.expandByPoint(li.max))}yt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)tt.fromBufferAttribute(a,u),l&&(Fn.fromBufferAttribute(e,u),tt.add(Fn)),s=Math.max(s,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let E=0;E<a;E++)u[E]=new O,d[E]=new O;const f=new O,h=new O,p=new O,g=new Fe,_=new Fe,m=new Fe,c=new O,v=new O;function M(E,N,D){f.fromArray(s,E*3),h.fromArray(s,N*3),p.fromArray(s,D*3),g.fromArray(o,E*2),_.fromArray(o,N*2),m.fromArray(o,D*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);const C=1/(_.x*m.y-m.x*_.y);isFinite(C)&&(c.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(C),v.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(C),u[E].add(c),u[N].add(c),u[D].add(c),d[E].add(v),d[N].add(v),d[D].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let E=0,N=x.length;E<N;++E){const D=x[E],C=D.start,I=D.count;for(let F=C,W=C+I;F<W;F+=3)M(n[F+0],n[F+1],n[F+2])}const b=new O,A=new O,R=new O,P=new O;function S(E){R.fromArray(r,E*3),P.copy(R);const N=u[E];b.copy(N),b.sub(R.multiplyScalar(R.dot(N))).normalize(),A.crossVectors(P,N);const C=A.dot(d[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=C}for(let E=0,N=x.length;E<N;++E){const D=x[E],C=D.start,I=D.count;for(let F=C,W=C+I;F<W;F+=3)S(n[F+0]),S(n[F+1]),S(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,u=new O,d=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),a.add(d),l.add(d),u.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(l.length*d);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let c=0;c<d;c++)h[g++]=u[p++]}return new jt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const d=s[u];this.setAttribute(u,d.clone(t))}const r=e.morphAttributes;for(const u in r){const d=[],f=r[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new Xe,Vt=new pr,Vi=new Li,fa=new O,Bn=new O,Gn=new O,kn=new O,ks=new O,Hi=new O,Wi=new Fe,qi=new Fe,Xi=new Fe,ha=new O,pa=new O,ma=new O,ji=new O,$i=new O;class nt extends st{constructor(e=new Dt,t=new _o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hi.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const d=a[l],f=r[l];d!==0&&(ks.fromBufferAttribute(f,e),o?Hi.addScaledVector(ks,d):Hi.addScaledVector(ks.sub(t),d))}t.add(Hi)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),Vt.copy(e.ray).recast(e.near),Vi.containsPoint(Vt.origin)===!1&&(Vt.intersectSphere(Vi,fa)===null||Vt.origin.distanceToSquared(fa)>(e.far-e.near)**2))||(da.copy(r).invert(),Vt.copy(e.ray).applyMatrix4(da),n.boundingBox!==null&&Vt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,u=n.attributes.uv,d=n.attributes.uv2,f=n.attributes.normal,h=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],c=s[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=M;x<b;x+=3){const A=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);o=Yi(this,c,e,Vt,u,d,f,A,R,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,c=_;m<c;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);o=Yi(this,s,e,Vt,u,d,f,v,M,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],c=s[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=M;x<b;x+=3){const A=x,R=x+1,P=x+2;o=Yi(this,c,e,Vt,u,d,f,A,R,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,c=_;m<c;m+=3){const v=m,M=m+1,x=m+2;o=Yi(this,s,e,Vt,u,d,f,v,M,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function gc(i,e,t,n,s,r,o,a){let l;if(e.side===gt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===dn,a),l===null)return null;$i.copy(a),$i.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo($i);return u<t.near||u>t.far?null:{distance:u,point:$i.clone(),object:i}}function Yi(i,e,t,n,s,r,o,a,l,u){i.getVertexPosition(a,Bn),i.getVertexPosition(l,Gn),i.getVertexPosition(u,kn);const d=gc(i,e,t,n,Bn,Gn,kn,ji);if(d){s&&(Wi.fromBufferAttribute(s,a),qi.fromBufferAttribute(s,l),Xi.fromBufferAttribute(s,u),d.uv=zt.getInterpolation(ji,Bn,Gn,kn,Wi,qi,Xi,new Fe)),r&&(Wi.fromBufferAttribute(r,a),qi.fromBufferAttribute(r,l),Xi.fromBufferAttribute(r,u),d.uv2=zt.getInterpolation(ji,Bn,Gn,kn,Wi,qi,Xi,new Fe)),o&&(ha.fromBufferAttribute(o,a),pa.fromBufferAttribute(o,l),ma.fromBufferAttribute(o,u),d.normal=zt.getInterpolation(ji,Bn,Gn,kn,ha,pa,ma,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new O,materialIndex:0};zt.getNormal(Bn,Gn,kn,f.normal),d.face=f}return d}class Pi extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],d=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function g(_,m,c,v,M,x,b,A,R,P,S){const E=x/R,N=b/P,D=x/2,C=b/2,I=A/2,F=R+1,W=P+1;let $=0,q=0;const Q=new O;for(let Z=0;Z<W;Z++){const _e=Z*N-C;for(let te=0;te<F;te++){const k=te*E-D;Q[_]=k*v,Q[m]=_e*M,Q[c]=I,u.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[c]=A>0?1:-1,d.push(Q.x,Q.y,Q.z),f.push(te/R),f.push(1-Z/P),$+=1}}for(let Z=0;Z<P;Z++)for(let _e=0;_e<R;_e++){const te=h+_e+F*Z,k=h+_e+F*(Z+1),Y=h+(_e+1)+F*(Z+1),se=h+(_e+1)+F*Z;l.push(te,k,se),l.push(k,Y,se),q+=6}a.addGroup(p,q,S),p+=q,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dt(i){const e={};for(let t=0;t<i.length;t++){const n=ti(i[t]);for(const s in n)e[s]=n[s]}return e}function _c(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mo(i){return i.getRenderTarget()===null&&i.outputEncoding===Ge?Wt:wi}const vc={clone:ti,merge:dt};var xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xc,this.fragmentShader=Mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=_c(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class So extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends So{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vn=-90,Hn=1;class Sc extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Rt(Vn,Hn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Rt(Vn,Hn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Rt(Vn,Hn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Rt(Vn,Hn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Rt(Vn,Hn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Rt(Vn,Hn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,u]=this.children,d=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=nn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(d),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class yo extends _t{constructor(e,t,n,s,r,o,a,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Jn,super(e,t,n,s,r,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yc extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:un});r.uniforms.tEquirect.value=t;const o=new nt(s,r),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=Pt),new Sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Vs=new O,bc=new O,wc=new Pe;class vn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vs.subVectors(n,t).cross(bc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wc.getNormalMatrix(e),s=this.coplanarPoint(Vs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new Li,Zi=new O;class mr{constructor(e=new vn,t=new vn,n=new vn,s=new vn,r=new vn,o=new vn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],u=n[5],d=n[6],f=n[7],h=n[8],p=n[9],g=n[10],_=n[11],m=n[12],c=n[13],v=n[14],M=n[15];return t[0].setComponents(a-s,f-l,_-h,M-m).normalize(),t[1].setComponents(a+s,f+l,_+h,M+m).normalize(),t[2].setComponents(a+r,f+u,_+p,M+c).normalize(),t[3].setComponents(a-r,f-u,_-p,M-c).normalize(),t[4].setComponents(a-o,f-d,_-g,M-v).normalize(),t[5].setComponents(a+o,f+d,_+g,M+v).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zi.x=s.normal.x>0?e.max.x:e.min.x,Zi.y=s.normal.y>0?e.max.y:e.min.y,Zi.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bo(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tc(i,e){const t=e.isWebGL2,n=new WeakMap;function s(u,d){const f=u.array,h=u.usage,p=i.createBuffer();i.bindBuffer(d,p),i.bufferData(d,f,h),u.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function r(u,d,f){const h=d.array,p=d.updateRange;i.bindBuffer(f,u),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,s(u,d)):f.version<u.version&&(r(f.buffer,u,d),f.version=u.version)}return{get:o,remove:a,update:l}}class gr extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),u=a+1,d=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let c=0;c<d;c++){const v=c*h-o;for(let M=0;M<u;M++){const x=M*f-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const M=v+u*c,x=v+u*(c+1),b=v+1+u*(c+1),A=v+1+u*c;p.push(M,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ec=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dc="vec3 transformed = vec3( position );",Ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nc=`#ifdef USE_IRIDESCENCE
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
#endif`,Oc=`#ifdef USE_BUMPMAP
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
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qc=`#define PI 3.141592653589793
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
} // validated`,Xc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jc=`vec3 transformedNormal = objectNormal;
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
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
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
}`,uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
#endif`,mu=`#if defined( USE_ENVMAP )
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
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mu=`PhysicalMaterial material;
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
#endif`,Su=`struct PhysicalMaterial {
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
}`,yu=`
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Du=`#if defined( USE_POINTS_UV )
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
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
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
#endif`,Fu=`#ifdef USE_MORPHTARGETS
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
#endif`,Bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
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
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ad=`float getShadowMask() {
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
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
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
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
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
#endif`,gd=`#ifdef USE_TRANSMISSION
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
#endif`,_d=`#ifdef USE_UV
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
#endif`,vd=`#ifdef USE_UV
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
#endif`,xd=`#ifdef USE_UV
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
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yd=`uniform sampler2D t2D;
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ad=`#include <common>
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
}`,Cd=`#if DEPTH_PACKING == 3200
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
}`,Ld=`#define DISTANCE
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
}`,Pd=`#define DISTANCE
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Id=`uniform float scale;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,Nd=`#include <common>
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
}`,Od=`uniform vec3 diffuse;
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
}`,zd=`#define LAMBERT
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
}`,Fd=`#define LAMBERT
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
}`,Bd=`#define MATCAP
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
}`,Gd=`#define MATCAP
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
}`,kd=`#define NORMAL
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
}`,Vd=`#define NORMAL
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
}`,Hd=`#define PHONG
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
}`,Wd=`#define PHONG
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
}`,qd=`#define STANDARD
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
}`,Xd=`#define STANDARD
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
}`,jd=`#define TOON
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
}`,$d=`#define TOON
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
}`,Yd=`uniform float size;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,Jd=`uniform vec3 color;
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
}`,Qd=`uniform float rotation;
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
}`,ef=`uniform vec3 diffuse;
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
}`,Te={alphamap_fragment:Ec,alphamap_pars_fragment:Ac,alphatest_fragment:Cc,alphatest_pars_fragment:Lc,aomap_fragment:Pc,aomap_pars_fragment:Rc,begin_vertex:Dc,beginnormal_vertex:Ic,bsdfs:Uc,iridescence_fragment:Nc,bumpmap_pars_fragment:Oc,clipping_planes_fragment:zc,clipping_planes_pars_fragment:Fc,clipping_planes_pars_vertex:Bc,clipping_planes_vertex:Gc,color_fragment:kc,color_pars_fragment:Vc,color_pars_vertex:Hc,color_vertex:Wc,common:qc,cube_uv_reflection_fragment:Xc,defaultnormal_vertex:jc,displacementmap_pars_vertex:$c,displacementmap_vertex:Yc,emissivemap_fragment:Zc,emissivemap_pars_fragment:Kc,encodings_fragment:Jc,encodings_pars_fragment:Qc,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:su,fog_vertex:ru,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:uu,lightmap_pars_fragment:du,lights_lambert_fragment:fu,lights_lambert_pars_fragment:hu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:_u,lights_phong_fragment:vu,lights_phong_pars_fragment:xu,lights_physical_fragment:Mu,lights_physical_pars_fragment:Su,lights_fragment_begin:yu,lights_fragment_maps:bu,lights_fragment_end:wu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Eu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Cu,map_fragment:Lu,map_pars_fragment:Pu,map_particle_fragment:Ru,map_particle_pars_fragment:Du,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Uu,morphcolor_vertex:Nu,morphnormal_vertex:Ou,morphtarget_pars_vertex:zu,morphtarget_vertex:Fu,normal_fragment_begin:Bu,normal_fragment_maps:Gu,normal_pars_fragment:ku,normal_pars_vertex:Vu,normal_vertex:Hu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:ju,iridescence_pars_fragment:$u,output_fragment:Yu,packing:Zu,premultiplied_alpha_fragment:Ku,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:ed,roughnessmap_fragment:td,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:sd,shadowmap_vertex:rd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:ud,specularmap_fragment:dd,specularmap_pars_fragment:fd,tonemapping_fragment:hd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:gd,uv_pars_fragment:_d,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:Md,background_vert:Sd,background_frag:yd,backgroundCube_vert:bd,backgroundCube_frag:wd,cube_vert:Td,cube_frag:Ed,depth_vert:Ad,depth_frag:Cd,distanceRGBA_vert:Ld,distanceRGBA_frag:Pd,equirect_vert:Rd,equirect_frag:Dd,linedashed_vert:Id,linedashed_frag:Ud,meshbasic_vert:Nd,meshbasic_frag:Od,meshlambert_vert:zd,meshlambert_frag:Fd,meshmatcap_vert:Bd,meshmatcap_frag:Gd,meshnormal_vert:kd,meshnormal_frag:Vd,meshphong_vert:Hd,meshphong_frag:Wd,meshphysical_vert:qd,meshphysical_frag:Xd,meshtoon_vert:jd,meshtoon_frag:$d,points_vert:Yd,points_frag:Zd,shadow_vert:Kd,shadow_frag:Jd,sprite_vert:Qd,sprite_frag:ef},ne={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}}},qt={basic:{uniforms:dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:dt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:dt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:dt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:dt([ne.points,ne.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:dt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:dt([ne.common,ne.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:dt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:dt([ne.sprite,ne.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:dt([ne.common,ne.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:dt([ne.lights,ne.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};qt.physical={uniforms:dt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Ki={r:0,b:0,g:0};function tf(i,e,t,n,s,r,o){const a=new Ie(0);let l=r===!0?0:1,u,d,f=null,h=0,p=null;function g(m,c){let v=!1,M=c.isScene===!0?c.background:null;M&&M.isTexture&&(M=(c.backgroundBlurriness>0?t:e).get(M));const x=i.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(M=null),M===null?_(a,l):M&&M.isColor&&(_(M,1),v=!0),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===us)?(d===void 0&&(d=new nt(new Pi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ti(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=M.encoding!==Ge,(f!==M||h!==M.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=M,h=M.version,p=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new nt(new gr(2,2),new An({name:"BackgroundMaterial",uniforms:ti(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=M.encoding!==Ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,c){m.getRGB(Ki,Mo(i)),n.buffers.color.setClear(Ki.r,Ki.g,Ki.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function nf(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let u=l,d=!1;function f(I,F,W,$,q){let Q=!1;if(o){const Z=_($,W,F);u!==Z&&(u=Z,p(u.object)),Q=c(I,$,W,q),Q&&v(I,$,W,q)}else{const Z=F.wireframe===!0;(u.geometry!==$.id||u.program!==W.id||u.wireframe!==Z)&&(u.geometry=$.id,u.program=W.id,u.wireframe=Z,Q=!0)}q!==null&&t.update(q,34963),(Q||d)&&(d=!1,P(I,F,W,$),q!==null&&i.bindBuffer(34963,t.get(q).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,F,W){const $=W.wireframe===!0;let q=a[I.id];q===void 0&&(q={},a[I.id]=q);let Q=q[F.id];Q===void 0&&(Q={},q[F.id]=Q);let Z=Q[$];return Z===void 0&&(Z=m(h()),Q[$]=Z),Z}function m(I){const F=[],W=[],$=[];for(let q=0;q<s;q++)F[q]=0,W[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:$,object:I,attributes:{},index:null}}function c(I,F,W,$){const q=u.attributes,Q=F.attributes;let Z=0;const _e=W.getAttributes();for(const te in _e)if(_e[te].location>=0){const Y=q[te];let se=Q[te];if(se===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),Y===void 0||Y.attribute!==se||se&&Y.data!==se.data)return!0;Z++}return u.attributesNum!==Z||u.index!==$}function v(I,F,W,$){const q={},Q=F.attributes;let Z=0;const _e=W.getAttributes();for(const te in _e)if(_e[te].location>=0){let Y=Q[te];Y===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const se={};se.attribute=Y,Y&&Y.data&&(se.data=Y.data),q[te]=se,Z++}u.attributes=q,u.attributesNum=Z,u.index=$}function M(){const I=u.newAttributes;for(let F=0,W=I.length;F<W;F++)I[F]=0}function x(I){b(I,0)}function b(I,F){const W=u.newAttributes,$=u.enabledAttributes,q=u.attributeDivisors;W[I]=1,$[I]===0&&(i.enableVertexAttribArray(I),$[I]=1),q[I]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),q[I]=F)}function A(){const I=u.newAttributes,F=u.enabledAttributes;for(let W=0,$=F.length;W<$;W++)F[W]!==I[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function R(I,F,W,$,q,Q){n.isWebGL2===!0&&(W===5124||W===5125)?i.vertexAttribIPointer(I,F,W,q,Q):i.vertexAttribPointer(I,F,W,$,q,Q)}function P(I,F,W,$){if(n.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const q=$.attributes,Q=W.getAttributes(),Z=F.defaultAttributeValues;for(const _e in Q){const te=Q[_e];if(te.location>=0){let k=q[_e];if(k===void 0&&(_e==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),_e==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){const Y=k.normalized,se=k.itemSize,oe=t.get(k);if(oe===void 0)continue;const B=oe.buffer,be=oe.type,Se=oe.bytesPerElement;if(k.isInterleavedBufferAttribute){const ie=k.data,ve=ie.stride,Ue=k.offset;if(ie.isInstancedInterleavedBuffer){for(let he=0;he<te.locationSize;he++)b(te.location+he,ie.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<te.locationSize;he++)x(te.location+he);i.bindBuffer(34962,B);for(let he=0;he<te.locationSize;he++)R(te.location+he,se/te.locationSize,be,Y,ve*Se,(Ue+se/te.locationSize*he)*Se)}else{if(k.isInstancedBufferAttribute){for(let ie=0;ie<te.locationSize;ie++)b(te.location+ie,k.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ie=0;ie<te.locationSize;ie++)x(te.location+ie);i.bindBuffer(34962,B);for(let ie=0;ie<te.locationSize;ie++)R(te.location+ie,se/te.locationSize,be,Y,se*Se,se/te.locationSize*ie*Se)}}else if(Z!==void 0){const Y=Z[_e];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(te.location,Y);break;case 3:i.vertexAttrib3fv(te.location,Y);break;case 4:i.vertexAttrib4fv(te.location,Y);break;default:i.vertexAttrib1fv(te.location,Y)}}}}A()}function S(){D();for(const I in a){const F=a[I];for(const W in F){const $=F[W];for(const q in $)g($[q].object),delete $[q];delete F[W]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const F=a[I.id];for(const W in F){const $=F[W];for(const q in $)g($[q].object),delete $[q];delete F[W]}delete a[I.id]}function N(I){for(const F in a){const W=a[F];if(W[I.id]===void 0)continue;const $=W[I.id];for(const q in $)g($[q].object),delete $[q];delete W[I.id]}}function D(){C(),d=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:x,disableUnusedAttributes:A}}function sf(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,d){i.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,f){if(f===0)return;let h,p;if(s)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,u,d,f),t.update(d,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function rf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),_=i.getParameter(34921),m=i.getParameter(36347),c=i.getParameter(36348),v=i.getParameter(36349),M=h>0,x=o||e.has("OES_texture_float"),b=M&&x,A=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:M,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:A}}function af(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new vn,a=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,c=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?d(null):u();else{const v=r?0:n,M=v*4;let x=c.clippingState||null;l.value=x,x=d(g,h,M,p);for(let b=0;b!==M;++b)x[b]=t[b];c.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const c=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let M=0,x=p;M!==_;++M,x+=4)o.copy(f[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function of(i){let e=new WeakMap;function t(o,a){return a===tr?o.mapping=Jn:a===nr&&(o.mapping=Qn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===tr||a===nr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new yc(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wo extends So{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jn=4,ga=[.125,.215,.35,.446,.526,.582],Mn=20,Hs=new wo,_a=new Ie;let Ws=null;const xn=(1+Math.sqrt(5))/2,Wn=1/xn,va=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,xn,Wn),new O(0,xn,-Wn),new O(Wn,0,xn),new O(-Wn,0,xn),new O(xn,Wn,0),new O(-xn,Wn,0)];class xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ws=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ws),e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===Qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ws=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:bi,format:Gt,encoding:Tn,depthBuffer:!1},s=Ma(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(r)),this._blurMaterial=cf(r,e,t)}return s}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,n,s){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(_a),d.toneMapping=nn,d.autoClear=!1;const p=new _o({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),g=new nt(new Pi,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(_a),_=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const M=this._cubeSize;Ji(s,v*M,c>2?M:0,M,M),d.setRenderTarget(s),_&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Jn||e.mapping===Qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ji(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=va[(s-1)%va.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new nt(this._lodPlanes[s],u),h=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mn-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):Mn;m>Mn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mn}`);const c=[];let v=0;for(let R=0;R<Mn;++R){const P=R/_,S=Math.exp(-P*P/2);c.push(S),R===0?v+=S:R<m&&(v+=2*S)}for(let R=0;R<c.length;R++)c[R]=c[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const x=this._sizeLods[s],b=3*x*(s>M-jn?s-M+jn:0),A=4*(this._cubeSize-x);Ji(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(f,Hs)}}function lf(i){const e=[],t=[],n=[];let s=i;const r=i-jn+1+ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-jn?l=ga[o-i+jn-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,_=3,m=2,c=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),x=new Float32Array(c*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,P=A>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(S,_*g*A),M.set(h,m*g*A);const E=[A,A,A,A,A,A];x.set(E,c*g*A)}const b=new Dt;b.setAttribute("position",new jt(v,_)),b.setAttribute("uv",new jt(M,m)),b.setAttribute("faceIndex",new jt(x,c)),e.push(b),s>jn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ma(i,e,t){const n=new En(i,e,t);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cf(i,e,t){const n=new Float32Array(Mn),s=new O(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_r(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Sa(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_r(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function ya(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function _r(){return`

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
	`}function uf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===tr||l===nr,d=l===Jn||l===Qn;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new xa(i)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||d&&f&&s(f)){t===null&&(t=new xa(i));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function df(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ff(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,c=_.length;m<c;m++)e.update(_[m],34962)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,x=v.length;M<x;M+=3){const b=v[M+0],A=v[M+1],R=v[M+2];h.push(b,A,A,R,R,b)}}else{const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const b=M+0,A=M+1,R=M+2;h.push(b,A,A,R,R,b)}}const m=new(uo(h)?xo:vo)(h,1);m.version=_;const c=r.get(f);c&&e.remove(c),r.set(f,m)}function d(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function hf(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function d(h,p){i.drawElements(r,p,a,h*l),t.update(p,r,1)}function f(h,p,g){if(g===0)return;let _,m;if(s)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,h*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=f}function pf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mf(i,e){return i[0]-e[0]}function gf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _f(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new it,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(d);if(m===void 0||m.count!==_){let F=function(){C.dispose(),r.delete(d),d.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const M=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let S=0;M===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let E=d.attributes.position.count*S,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*N*4*_),C=new po(D,E,N,_);C.type=yn,C.needsUpdate=!0;const I=S*4;for(let W=0;W<_;W++){const $=A[W],q=R[W],Q=P[W],Z=E*N*4*W;for(let _e=0;_e<$.count;_e++){const te=_e*I;M===!0&&(o.fromBufferAttribute($,_e),D[Z+te+0]=o.x,D[Z+te+1]=o.y,D[Z+te+2]=o.z,D[Z+te+3]=0),x===!0&&(o.fromBufferAttribute(q,_e),D[Z+te+4]=o.x,D[Z+te+5]=o.y,D[Z+te+6]=o.z,D[Z+te+7]=0),b===!0&&(o.fromBufferAttribute(Q,_e),D[Z+te+8]=o.x,D[Z+te+9]=o.y,D[Z+te+10]=o.z,D[Z+te+11]=Q.itemSize===4?o.w:1)}}m={count:_,texture:C,size:new Fe(E,N)},r.set(d,m),d.addEventListener("dispose",F)}let c=0;for(let M=0;M<h.length;M++)c+=h[M];const v=d.morphTargetsRelative?1:1-c;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[d.id]=_}for(let x=0;x<g;x++){const b=_[x];b[0]=x,b[1]=h[x]}_.sort(gf);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(mf);const m=d.morphAttributes.position,c=d.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const b=a[x],A=b[0],R=b[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&d.getAttribute("morphTarget"+x)!==m[A]&&d.setAttribute("morphTarget"+x,m[A]),c&&d.getAttribute("morphNormal"+x)!==c[A]&&d.setAttribute("morphNormal"+x,c[A]),s[x]=R,v+=R):(m&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),c&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),s[x]=0)}const M=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function vf(i,e,t,n){let s=new WeakMap;function r(l){const u=n.render.frame,d=l.geometry,f=e.get(l,d);return s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}const To=new _t,Eo=new po,Ao=new ac,Co=new yo,ba=[],wa=[],Ta=new Float32Array(16),Ea=new Float32Array(9),Aa=new Float32Array(4);function ii(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ba[s];if(r===void 0&&(r=new Float32Array(s),ba[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ze(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ke(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fs(i,e){let t=wa[e];t===void 0&&(t=new Int32Array(e),wa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;i.uniform2fv(this.addr,e),Ke(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ze(t,e))return;i.uniform3fv(this.addr,e),Ke(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;i.uniform4fv(this.addr,e),Ke(t,e)}}function bf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ke(t,e)}else{if(Ze(t,n))return;Aa.set(n),i.uniformMatrix2fv(this.addr,!1,Aa),Ke(t,n)}}function wf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ke(t,e)}else{if(Ze(t,n))return;Ea.set(n),i.uniformMatrix3fv(this.addr,!1,Ea),Ke(t,n)}}function Tf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ke(t,e)}else{if(Ze(t,n))return;Ta.set(n),i.uniformMatrix4fv(this.addr,!1,Ta),Ke(t,n)}}function Ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;i.uniform2iv(this.addr,e),Ke(t,e)}}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;i.uniform3iv(this.addr,e),Ke(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;i.uniform4iv(this.addr,e),Ke(t,e)}}function Pf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;i.uniform2uiv(this.addr,e),Ke(t,e)}}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;i.uniform3uiv(this.addr,e),Ke(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;i.uniform4uiv(this.addr,e),Ke(t,e)}}function Uf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||To,s)}function Nf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ao,s)}function Of(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Co,s)}function zf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Eo,s)}function Ff(i){switch(i){case 5126:return xf;case 35664:return Mf;case 35665:return Sf;case 35666:return yf;case 35674:return bf;case 35675:return wf;case 35676:return Tf;case 5124:case 35670:return Ef;case 35667:case 35671:return Af;case 35668:case 35672:return Cf;case 35669:case 35673:return Lf;case 5125:return Pf;case 36294:return Rf;case 36295:return Df;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return zf}}function Bf(i,e){i.uniform1fv(this.addr,e)}function Gf(i,e){const t=ii(e,this.size,2);i.uniform2fv(this.addr,t)}function kf(i,e){const t=ii(e,this.size,3);i.uniform3fv(this.addr,t)}function Vf(i,e){const t=ii(e,this.size,4);i.uniform4fv(this.addr,t)}function Hf(i,e){const t=ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wf(i,e){const t=ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qf(i,e){const t=ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xf(i,e){i.uniform1iv(this.addr,e)}function jf(i,e){i.uniform2iv(this.addr,e)}function $f(i,e){i.uniform3iv(this.addr,e)}function Yf(i,e){i.uniform4iv(this.addr,e)}function Zf(i,e){i.uniform1uiv(this.addr,e)}function Kf(i,e){i.uniform2uiv(this.addr,e)}function Jf(i,e){i.uniform3uiv(this.addr,e)}function Qf(i,e){i.uniform4uiv(this.addr,e)}function eh(i,e,t){const n=this.cache,s=e.length,r=fs(t,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||To,r[o])}function th(i,e,t){const n=this.cache,s=e.length,r=fs(t,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ao,r[o])}function nh(i,e,t){const n=this.cache,s=e.length,r=fs(t,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Co,r[o])}function ih(i,e,t){const n=this.cache,s=e.length,r=fs(t,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Eo,r[o])}function sh(i){switch(i){case 5126:return Bf;case 35664:return Gf;case 35665:return kf;case 35666:return Vf;case 35674:return Hf;case 35675:return Wf;case 35676:return qf;case 5124:case 35670:return Xf;case 35667:case 35671:return jf;case 35668:case 35672:return $f;case 35669:case 35673:return Yf;case 5125:return Zf;case 36294:return Kf;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return eh;case 35679:case 36299:case 36307:return th;case 35680:case 36300:case 36308:case 36293:return nh;case 36289:case 36303:case 36311:case 36292:return ih}}class rh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ff(t.type)}}class ah{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=sh(t.type)}}class oh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function Ca(i,e){i.seq.push(e),i.map[e.id]=e}function lh(i,e,t){const n=i.name,s=n.length;for(qs.lastIndex=0;;){const r=qs.exec(n),o=qs.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Ca(t,u===void 0?new rh(a,i,e):new ah(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new oh(a),Ca(t,f)),t=f}}}class rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);lh(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function La(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let ch=0;function uh(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function dh(i){switch(i){case Tn:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Pa(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+uh(i.getShaderSource(e),o)}else return s}function fh(i,e){const t=dh(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function hh(i,e){let t;switch(e){case El:t="Linear";break;case Al:t="Reinhard";break;case Cl:t="OptimizedCineon";break;case Ll:t="ACESFilmic";break;case Pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ph(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(di).join(`
`)}function mh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gh(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function di(i){return i!==""}function Ra(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Da(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _h=/^[ \t]*#include +<([\w\d./]+)>/gm;function or(i){return i.replace(_h,vh)}function vh(i,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return or(t)}const xh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(i){return i.replace(xh,Mh)}function Mh(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ua(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sh(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===no?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function yh(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jn:case Qn:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bh(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qn:e="ENVMAP_MODE_REFRACTION";break}return e}function wh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ro:e="ENVMAP_BLENDING_MULTIPLY";break;case wl:e="ENVMAP_BLENDING_MIX";break;case Tl:e="ENVMAP_BLENDING_ADD";break}return e}function Th(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Eh(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Sh(t),u=yh(t),d=bh(t),f=wh(t),h=Th(t),p=t.isWebGL2?"":ph(t),g=mh(r),_=s.createProgram();let m,c,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(di).join(`
`),m.length>0&&(m+=`
`),c=[p,g].filter(di).join(`
`),c.length>0&&(c+=`
`)):(m=[Ua(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(di).join(`
`),c=[p,Ua(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Te.tonemapping_pars_fragment:"",t.toneMapping!==nn?hh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,fh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(di).join(`
`)),o=or(o),o=Ra(o,t),o=Da(o,t),a=or(a),a=Ra(a,t),a=Da(a,t),o=Ia(o),a=Ia(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",t.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const M=v+m+o,x=v+c+a,b=La(s,35633,M),A=La(s,35632,x);if(s.attachShader(_,b),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),i.debug.checkShaderErrors){const S=s.getProgramInfoLog(_).trim(),E=s.getShaderInfoLog(b).trim(),N=s.getShaderInfoLog(A).trim();let D=!0,C=!0;if(s.getProgramParameter(_,35714)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,A);else{const I=Pa(s,b,"vertex"),F=Pa(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,35715)+`

Program Info Log: `+S+`
`+I+`
`+F)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(E===""||N==="")&&(C=!1);C&&(this.diagnostics={runnable:D,programLog:S,vertexShader:{log:E,prefix:m},fragmentShader:{log:N,prefix:c}})}s.deleteShader(b),s.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new rs(s,_)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=gh(s,_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=ch++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let Ah=0;class Ch{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lh(e),t.set(e,n)),n}}class Lh{constructor(e){this.id=Ah++,this.code=e,this.usedTimes=0}}function Ph(i,e,t,n,s,r,o){const a=new mo,l=new Ch,u=[],d=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===1?"uv2":"uv"}function m(S,E,N,D,C){const I=D.fog,F=C.geometry,W=S.isMeshStandardMaterial?D.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),q=$&&$.mapping===us?$.image.height:null,Q=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_e=Z!==void 0?Z.length:0;let te=0;F.morphAttributes.position!==void 0&&(te=1),F.morphAttributes.normal!==void 0&&(te=2),F.morphAttributes.color!==void 0&&(te=3);let k,Y,se,oe;if(Q){const ae=qt[Q];k=ae.vertexShader,Y=ae.fragmentShader}else k=S.vertexShader,Y=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);const B=i.getRenderTarget(),be=C.isInstancedMesh===!0,Se=!!S.map,ie=!!S.matcap,ve=!!$,Ue=!!S.aoMap,he=!!S.lightMap,Ce=!!S.bumpMap,Je=!!S.normalMap,rt=!!S.displacementMap,Qe=!!S.emissiveMap,Ye=!!S.metalnessMap,Ne=!!S.roughnessMap,He=S.clearcoat>0,pt=S.iridescence>0,T=S.sheen>0,y=S.transmission>0,G=He&&!!S.clearcoatMap,J=He&&!!S.clearcoatNormalMap,ee=He&&!!S.clearcoatRoughnessMap,re=pt&&!!S.iridescenceMap,xe=pt&&!!S.iridescenceThicknessMap,ce=T&&!!S.sheenColorMap,X=T&&!!S.sheenRoughnessMap,ue=!!S.specularMap,pe=!!S.specularColorMap,ge=!!S.specularIntensityMap,le=y&&!!S.transmissionMap,de=y&&!!S.thicknessMap,Re=!!S.gradientMap,Oe=!!S.alphaMap,We=S.alphaTest>0,L=!!S.extensions,H=!!F.attributes.uv2;return{isWebGL2:d,shaderID:Q,shaderName:S.type,vertexShader:k,fragmentShader:Y,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:be,instancingColor:be&&C.instanceColor!==null,supportsVertexTextures:h,outputEncoding:B===null?i.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Tn,map:Se,matcap:ie,envMap:ve,envMapMode:ve&&$.mapping,envMapCubeUVHeight:q,aoMap:Ue,lightMap:he,bumpMap:Ce,normalMap:Je,displacementMap:h&&rt,emissiveMap:Qe,normalMapObjectSpace:Je&&S.normalMapType===Yl,normalMapTangentSpace:Je&&S.normalMapType===lo,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&S.map.encoding===Ge,metalnessMap:Ye,roughnessMap:Ne,clearcoat:He,clearcoatMap:G,clearcoatNormalMap:J,clearcoatRoughnessMap:ee,iridescence:pt,iridescenceMap:re,iridescenceThicknessMap:xe,sheen:T,sheenColorMap:ce,sheenRoughnessMap:X,specularMap:ue,specularColorMap:pe,specularIntensityMap:ge,transmission:y,transmissionMap:le,thicknessMap:de,gradientMap:Re,opaque:S.transparent===!1&&S.blending===Yn,alphaMap:Oe,alphaTest:We,combine:S.combine,mapUv:Se&&_(S.map.channel),aoMapUv:Ue&&_(S.aoMap.channel),lightMapUv:he&&_(S.lightMap.channel),bumpMapUv:Ce&&_(S.bumpMap.channel),normalMapUv:Je&&_(S.normalMap.channel),displacementMapUv:rt&&_(S.displacementMap.channel),emissiveMapUv:Qe&&_(S.emissiveMap.channel),metalnessMapUv:Ye&&_(S.metalnessMap.channel),roughnessMapUv:Ne&&_(S.roughnessMap.channel),clearcoatMapUv:G&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:X&&_(S.sheenRoughnessMap.channel),specularMapUv:ue&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:ge&&_(S.specularIntensityMap.channel),transmissionMapUv:le&&_(S.transmissionMap.channel),thicknessMapUv:de&&_(S.thicknessMap.channel),alphaMapUv:Oe&&_(S.alphaMap.channel),vertexTangents:Je&&!!F.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs2:H,pointsUvs:C.isPoints===!0&&!!F.attributes.uv&&(Se||Oe),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:C.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:S.toneMapped?i.toneMapping:nn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:L&&S.extensions.derivatives===!0,extensionFragDepth:L&&S.extensions.fragDepth===!0,extensionDrawBuffers:L&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(v(E,S),M(E,S),E.push(i.outputEncoding)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputEncoding),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUvs2&&a.enable(13),E.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.decodeVideoTexture&&a.enable(17),E.opaque&&a.enable(18),E.pointsUvs&&a.enable(19),S.push(a.mask)}function x(S){const E=g[S.type];let N;if(E){const D=qt[E];N=vc.clone(D.uniforms)}else N=S.uniforms;return N}function b(S,E){let N;for(let D=0,C=u.length;D<C;D++){const I=u[D];if(I.cacheKey===E){N=I,++N.usedTimes;break}}return N===void 0&&(N=new Eh(i,E,S,r),u.push(N)),N}function A(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function Rh(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Dh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Na(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oa(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,p,g,_,m){let c=i[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=g,c.renderOrder=f.renderOrder,c.z=_,c.group=m),e++,c}function a(f,h,p,g,_,m){const c=o(f,h,p,g,_,m);p.transmission>0?n.push(c):p.transparent===!0?s.push(c):t.push(c)}function l(f,h,p,g,_,m){const c=o(f,h,p,g,_,m);p.transmission>0?n.unshift(c):p.transparent===!0?s.unshift(c):t.unshift(c)}function u(f,h){t.length>1&&t.sort(f||Dh),n.length>1&&n.sort(h||Na),s.length>1&&s.sort(h||Na)}function d(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:u}}function Ih(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Oa,i.set(n,[o])):s>=r.length?(o=new Oa,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Uh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ie};break;case"SpotLight":t={position:new O,direction:new O,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Nh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Oh=0;function zh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fh(i,e){const t=new Uh,n=Nh(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)s.probe.push(new O);const r=new O,o=new Xe,a=new Xe;function l(d,f){let h=0,p=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let _=0,m=0,c=0,v=0,M=0,x=0,b=0,A=0,R=0,P=0;d.sort(zh);const S=f===!0?Math.PI:1;for(let N=0,D=d.length;N<D;N++){const C=d[N],I=C.color,F=C.intensity,W=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*F*S,p+=I.g*F*S,g+=I.b*F*S;else if(C.isLightProbe)for(let q=0;q<9;q++)s.probe[q].addScaledVector(C.sh.coefficients[q],F);else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){const Q=C.shadow,Z=n.get(C);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.directionalShadow[_]=Z,s.directionalShadowMap[_]=$,s.directionalShadowMatrix[_]=C.shadow.matrix,x++}s.directional[_]=q,_++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(I).multiplyScalar(F*S),q.distance=W,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,s.spot[c]=q;const Q=C.shadow;if(C.map&&(s.spotLightMap[R]=C.map,R++,Q.updateMatrices(C),C.castShadow&&P++),s.spotLightMatrix[c]=Q.matrix,C.castShadow){const Z=n.get(C);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.spotShadow[c]=Z,s.spotShadowMap[c]=$,A++}c++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(I).multiplyScalar(F),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),s.rectArea[v]=q,v++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity*S),q.distance=C.distance,q.decay=C.decay,C.castShadow){const Q=C.shadow,Z=n.get(C);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,s.pointShadow[m]=Z,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=C.shadow.matrix,b++}s.point[m]=q,m++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(F*S),q.groundColor.copy(C.groundColor).multiplyScalar(F*S),s.hemi[M]=q,M++}}v>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_FLOAT_1,s.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_HALF_1,s.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==c||E.rectAreaLength!==v||E.hemiLength!==M||E.numDirectionalShadows!==x||E.numPointShadows!==b||E.numSpotShadows!==A||E.numSpotMaps!==R)&&(s.directional.length=_,s.spot.length=c,s.rectArea.length=v,s.point.length=m,s.hemi.length=M,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=A+R-P,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=P,E.directionalLength=_,E.pointLength=m,E.spotLength=c,E.rectAreaLength=v,E.hemiLength=M,E.numDirectionalShadows=x,E.numPointShadows=b,E.numSpotShadows=A,E.numSpotMaps=R,s.version=Oh++)}function u(d,f){let h=0,p=0,g=0,_=0,m=0;const c=f.matrixWorldInverse;for(let v=0,M=d.length;v<M;v++){const x=d[v];if(x.isDirectionalLight){const b=s.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(c),h++}else if(x.isSpotLight){const b=s.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(c),g++}else if(x.isRectAreaLight){const b=s.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),a.identity(),o.copy(x.matrixWorld),o.premultiply(c),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const b=s.point[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),p++}else if(x.isHemisphereLight){const b=s.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:s}}function za(i,e){const t=new Fh(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Bh(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new za(i,e),t.set(r,[l])):o>=a.length?(l=new za(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Gh extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kh extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hh=`uniform sampler2D shadow_pass;
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
}`;function Wh(i,e,t){let n=new mr;const s=new Fe,r=new Fe,o=new it,a=new Gh({depthPacking:$l}),l=new kh,u={},d=t.maxTextureSize,f={[dn]:gt,[gt]:dn,[tn]:tn},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Vh,fragmentShader:Hh}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no,this.render=function(x,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const R=i.getRenderTarget(),P=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),E=i.state;E.setBlending(un),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let N=0,D=x.length;N<D;N++){const C=x[N],I=C.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const F=I.getFrameExtents();if(s.multiply(F),r.copy(I.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/F.x),s.x=r.x*F.x,I.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/F.y),s.y=r.y*F.y,I.mapSize.y=r.y)),I.map===null){const $=this.type!==ui?{minFilter:ft,magFilter:ft}:{};I.map=new En(s.x,s.y,$),I.map.texture.name=C.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const W=I.getViewportCount();for(let $=0;$<W;$++){const q=I.getViewport($);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),E.viewport(o),I.updateMatrices(C,$),n=I.getFrustum(),M(b,A,I.camera,C,this.type)}I.isPointLightShadow!==!0&&this.type===ui&&c(I,A),I.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(R,P,S)};function c(x,b){const A=e.update(_);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new En(s.x,s.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(b,null,A,h,_,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(b,null,A,p,_,null)}function v(x,b,A,R){let P=null;const S=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(S!==void 0)P=S;else if(P=A.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const E=P.uuid,N=b.uuid;let D=u[E];D===void 0&&(D={},u[E]=D);let C=D[N];C===void 0&&(C=P.clone(),D[N]=C),P=C}if(P.visible=b.visible,P.wireframe=b.wireframe,R===ui?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:f[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const E=i.properties.get(P);E.light=A}return P}function M(x,b,A,R,P){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===ui)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const N=e.update(x),D=x.material;if(Array.isArray(D)){const C=N.groups;for(let I=0,F=C.length;I<F;I++){const W=C[I],$=D[W.materialIndex];if($&&$.visible){const q=v(x,$,R,P);i.renderBufferDirect(A,null,N,q,x,W)}}}else if(D.visible){const C=v(x,D,R,P);i.renderBufferDirect(A,null,N,C,x,null)}}const E=x.children;for(let N=0,D=E.length;N<D;N++)M(E[N],b,A,R,P)}}function qh(i,e,t){const n=t.isWebGL2;function s(){let L=!1;const H=new it;let K=null;const ae=new it(0,0,0,0);return{setMask:function(fe){K!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){L=fe},setClear:function(fe,Be,ke,at,sn){sn===!0&&(fe*=at,Be*=at,ke*=at),H.set(fe,Be,ke,at),ae.equals(H)===!1&&(i.clearColor(fe,Be,ke,at),ae.copy(H))},reset:function(){L=!1,K=null,ae.set(-1,0,0,0)}}}function r(){let L=!1,H=null,K=null,ae=null;return{setTest:function(fe){fe?B(2929):be(2929)},setMask:function(fe){H!==fe&&!L&&(i.depthMask(fe),H=fe)},setFunc:function(fe){if(K!==fe){switch(fe){case _l:i.depthFunc(512);break;case vl:i.depthFunc(519);break;case xl:i.depthFunc(513);break;case er:i.depthFunc(515);break;case Ml:i.depthFunc(514);break;case Sl:i.depthFunc(518);break;case yl:i.depthFunc(516);break;case bl:i.depthFunc(517);break;default:i.depthFunc(515)}K=fe}},setLocked:function(fe){L=fe},setClear:function(fe){ae!==fe&&(i.clearDepth(fe),ae=fe)},reset:function(){L=!1,H=null,K=null,ae=null}}}function o(){let L=!1,H=null,K=null,ae=null,fe=null,Be=null,ke=null,at=null,sn=null;return{setTest:function(qe){L||(qe?B(2960):be(2960))},setMask:function(qe){H!==qe&&!L&&(i.stencilMask(qe),H=qe)},setFunc:function(qe,Et,kt){(K!==qe||ae!==Et||fe!==kt)&&(i.stencilFunc(qe,Et,kt),K=qe,ae=Et,fe=kt)},setOp:function(qe,Et,kt){(Be!==qe||ke!==Et||at!==kt)&&(i.stencilOp(qe,Et,kt),Be=qe,ke=Et,at=kt)},setLocked:function(qe){L=qe},setClear:function(qe){sn!==qe&&(i.clearStencil(qe),sn=qe)},reset:function(){L=!1,H=null,K=null,ae=null,fe=null,Be=null,ke=null,at=null,sn=null}}}const a=new s,l=new r,u=new o,d=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],m=null,c=!1,v=null,M=null,x=null,b=null,A=null,R=null,P=null,S=!1,E=null,N=null,D=null,C=null,I=null;const F=i.getParameter(35661);let W=!1,$=0;const q=i.getParameter(7938);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=$>=2);let Q=null,Z={};const _e=i.getParameter(3088),te=i.getParameter(2978),k=new it().fromArray(_e),Y=new it().fromArray(te);function se(L,H,K){const ae=new Uint8Array(4),fe=i.createTexture();i.bindTexture(L,fe),i.texParameteri(L,10241,9728),i.texParameteri(L,10240,9728);for(let Be=0;Be<K;Be++)i.texImage2D(H+Be,0,6408,1,1,0,6408,5121,ae);return fe}const oe={};oe[3553]=se(3553,3553,1),oe[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),B(2929),l.setFunc(er),rt(!1),Qe(br),B(2884),Ce(un);function B(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function be(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Se(L,H){return p[L]!==H?(i.bindFramebuffer(L,H),p[L]=H,n&&(L===36009&&(p[36160]=H),L===36160&&(p[36009]=H)),!0):!1}function ie(L,H){let K=_,ae=!1;if(L)if(K=g.get(H),K===void 0&&(K=[],g.set(H,K)),L.isWebGLMultipleRenderTargets){const fe=L.texture;if(K.length!==fe.length||K[0]!==36064){for(let Be=0,ke=fe.length;Be<ke;Be++)K[Be]=36064+Be;K.length=fe.length,ae=!0}}else K[0]!==36064&&(K[0]=36064,ae=!0);else K[0]!==1029&&(K[0]=1029,ae=!0);ae&&(t.isWebGL2?i.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function ve(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const Ue={[qn]:32774,[al]:32778,[ol]:32779};if(n)Ue[Ar]=32775,Ue[Cr]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ue[Ar]=L.MIN_EXT,Ue[Cr]=L.MAX_EXT)}const he={[ll]:0,[cl]:1,[ul]:768,[io]:770,[gl]:776,[pl]:774,[fl]:772,[dl]:769,[so]:771,[ml]:775,[hl]:773};function Ce(L,H,K,ae,fe,Be,ke,at){if(L===un){c===!0&&(be(3042),c=!1);return}if(c===!1&&(B(3042),c=!0),L!==rl){if(L!==v||at!==S){if((M!==qn||A!==qn)&&(i.blendEquation(32774),M=qn,A=qn),at)switch(L){case Yn:i.blendFuncSeparate(1,771,1,771);break;case wr:i.blendFunc(1,1);break;case Tr:i.blendFuncSeparate(0,769,0,1);break;case Er:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yn:i.blendFuncSeparate(770,771,1,771);break;case wr:i.blendFunc(770,1);break;case Tr:i.blendFuncSeparate(0,769,0,1);break;case Er:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,b=null,R=null,P=null,v=L,S=at}return}fe=fe||H,Be=Be||K,ke=ke||ae,(H!==M||fe!==A)&&(i.blendEquationSeparate(Ue[H],Ue[fe]),M=H,A=fe),(K!==x||ae!==b||Be!==R||ke!==P)&&(i.blendFuncSeparate(he[K],he[ae],he[Be],he[ke]),x=K,b=ae,R=Be,P=ke),v=L,S=!1}function Je(L,H){L.side===tn?be(2884):B(2884);let K=L.side===gt;H&&(K=!K),rt(K),L.blending===Yn&&L.transparent===!1?Ce(un):Ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ae=L.stencilWrite;u.setTest(ae),ae&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?B(32926):be(32926)}function rt(L){E!==L&&(L?i.frontFace(2304):i.frontFace(2305),E=L)}function Qe(L){L!==nl?(B(2884),L!==N&&(L===br?i.cullFace(1029):L===il?i.cullFace(1028):i.cullFace(1032))):be(2884),N=L}function Ye(L){L!==D&&(W&&i.lineWidth(L),D=L)}function Ne(L,H,K){L?(B(32823),(C!==H||I!==K)&&(i.polygonOffset(H,K),C=H,I=K)):be(32823)}function He(L){L?B(3089):be(3089)}function pt(L){L===void 0&&(L=33984+F-1),Q!==L&&(i.activeTexture(L),Q=L)}function T(L,H,K){K===void 0&&(Q===null?K=33984+F-1:K=Q);let ae=Z[K];ae===void 0&&(ae={type:void 0,texture:void 0},Z[K]=ae),(ae.type!==L||ae.texture!==H)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(L,H||oe[L]),ae.type=L,ae.texture=H)}function y(){const L=Z[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(L){k.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),k.copy(L))}function de(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Re(L,H){let K=f.get(H);K===void 0&&(K=new WeakMap,f.set(H,K));let ae=K.get(L);ae===void 0&&(ae=i.getUniformBlockIndex(H,L.name),K.set(L,ae))}function Oe(L,H){const ae=f.get(H).get(L);d.get(H)!==ae&&(i.uniformBlockBinding(H,ae,L.__bindingPointIndex),d.set(H,ae))}function We(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,Z={},p={},g=new WeakMap,_=[],m=null,c=!1,v=null,M=null,x=null,b=null,A=null,R=null,P=null,S=!1,E=null,N=null,D=null,C=null,I=null,k.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:B,disable:be,bindFramebuffer:Se,drawBuffers:ie,useProgram:ve,setBlending:Ce,setMaterial:Je,setFlipSided:rt,setCullFace:Qe,setLineWidth:Ye,setPolygonOffset:Ne,setScissorTest:He,activeTexture:pt,bindTexture:T,unbindTexture:y,compressedTexImage2D:G,compressedTexImage3D:J,texImage2D:pe,texImage3D:ge,updateUBOMapping:Re,uniformBlockBinding:Oe,texStorage2D:X,texStorage3D:ue,texSubImage2D:ee,texSubImage3D:re,compressedTexSubImage2D:xe,compressedTexSubImage3D:ce,scissor:le,viewport:de,reset:We}}function Xh(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,u=s.maxCubemapSize,d=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,y){return c?new OffscreenCanvas(T,y):Ti("canvas")}function M(T,y,G,J){let ee=1;if((T.width>J||T.height>J)&&(ee=J/Math.max(T.width,T.height)),ee<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const re=y?Jl:Math.floor,xe=re(ee*T.width),ce=re(ee*T.height);_===void 0&&(_=v(xe,ce));const X=G?v(xe,ce):_;return X.width=xe,X.height=ce,X.getContext("2d").drawImage(T,0,0,xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+ce+")."),X}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function x(T){return ta(T.width)&&ta(T.height)}function b(T){return a?!1:T.wrapS!==Bt||T.wrapT!==Bt||T.minFilter!==ft&&T.minFilter!==Pt}function A(T,y){return T.generateMipmaps&&y&&T.minFilter!==ft&&T.minFilter!==Pt}function R(T){i.generateMipmap(T)}function P(T,y,G,J,ee=!1){if(a===!1)return y;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=y;return y===6403&&(G===5126&&(re=33326),G===5131&&(re=33325),G===5121&&(re=33321)),y===33319&&(G===5126&&(re=33328),G===5131&&(re=33327),G===5121&&(re=33323)),y===6408&&(G===5126&&(re=34836),G===5131&&(re=34842),G===5121&&(re=J===Ge&&ee===!1?35907:32856),G===32819&&(re=32854),G===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function S(T,y,G){return A(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==ft&&T.minFilter!==Pt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function E(T){return T===ft||T===Lr||T===_s?9728:9729}function N(T){const y=T.target;y.removeEventListener("dispose",N),C(y),y.isVideoTexture&&g.delete(y)}function D(T){const y=T.target;y.removeEventListener("dispose",D),F(y)}function C(T){const y=n.get(T);if(y.__webglInit===void 0)return;const G=T.source,J=m.get(G);if(J){const ee=J[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(T),Object.keys(J).length===0&&m.delete(G)}n.remove(T)}function I(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const G=T.source,J=m.get(G);delete J[y.__cacheKey],o.memory.textures--}function F(T){const y=T.texture,G=n.get(T),J=n.get(y);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)i.deleteFramebuffer(G.__webglFramebuffer[ee]),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ee]);else{if(i.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,re=y.length;ee<re;ee++){const xe=n.get(y[ee]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(y[ee])}n.remove(y),n.remove(T)}let W=0;function $(){W=0}function q(){const T=W;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),W+=1,T}function Q(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.encoding),y.join()}function Z(T,y){const G=n.get(T);if(T.isVideoTexture&&He(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(G,T,y);return}}t.bindTexture(3553,G.__webglTexture,33984+y)}function _e(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){be(G,T,y);return}t.bindTexture(35866,G.__webglTexture,33984+y)}function te(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){be(G,T,y);return}t.bindTexture(32879,G.__webglTexture,33984+y)}function k(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Se(G,T,y);return}t.bindTexture(34067,G.__webglTexture,33984+y)}const Y={[ir]:10497,[Bt]:33071,[sr]:33648},se={[ft]:9728,[Lr]:9984,[_s]:9986,[Pt]:9729,[Rl]:9985,[yi]:9987};function oe(T,y,G){if(G?(i.texParameteri(T,10242,Y[y.wrapS]),i.texParameteri(T,10243,Y[y.wrapT]),(T===32879||T===35866)&&i.texParameteri(T,32882,Y[y.wrapR]),i.texParameteri(T,10240,se[y.magFilter]),i.texParameteri(T,10241,se[y.minFilter])):(i.texParameteri(T,10242,33071),i.texParameteri(T,10243,33071),(T===32879||T===35866)&&i.texParameteri(T,32882,33071),(y.wrapS!==Bt||y.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,10240,E(y.magFilter)),i.texParameteri(T,10241,E(y.minFilter)),y.minFilter!==ft&&y.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===ft||y.minFilter!==_s&&y.minFilter!==yi||y.type===yn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===bi&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function B(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",N));const J=y.source;let ee=m.get(J);ee===void 0&&(ee={},m.set(J,ee));const re=Q(y);if(re!==T.__cacheKey){ee[re]===void 0&&(ee[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[re].usedTimes++;const xe=ee[T.__cacheKey];xe!==void 0&&(ee[T.__cacheKey].usedTimes--,xe.usedTimes===0&&I(y)),T.__cacheKey=re,T.__webglTexture=ee[re].texture}return G}function be(T,y,G){let J=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=35866),y.isData3DTexture&&(J=32879);const ee=B(T,y),re=y.source;t.bindTexture(J,T.__webglTexture,33984+G);const xe=n.get(re);if(re.version!==xe.__version||ee===!0){t.activeTexture(33984+G),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const ce=b(y)&&x(y.image)===!1;let X=M(y.image,ce,!1,d);X=pt(y,X);const ue=x(X)||a,pe=r.convert(y.format,y.encoding);let ge=r.convert(y.type),le=P(y.internalFormat,pe,ge,y.encoding,y.isVideoTexture);oe(J,y,ue);let de;const Re=y.mipmaps,Oe=a&&y.isVideoTexture!==!0,We=xe.__version===void 0||ee===!0,L=S(y,X,ue);if(y.isDepthTexture)le=6402,a?y.type===yn?le=36012:y.type===Sn?le=33190:y.type===Zn?le=35056:le=33189:y.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===bn&&le===6402&&y.type!==oo&&y.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Sn,ge=r.convert(y.type)),y.format===ei&&le===6402&&(le=34041,y.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Zn,ge=r.convert(y.type))),We&&(Oe?t.texStorage2D(3553,1,le,X.width,X.height):t.texImage2D(3553,0,le,X.width,X.height,0,pe,ge,null));else if(y.isDataTexture)if(Re.length>0&&ue){Oe&&We&&t.texStorage2D(3553,L,le,Re[0].width,Re[0].height);for(let H=0,K=Re.length;H<K;H++)de=Re[H],Oe?t.texSubImage2D(3553,H,0,0,de.width,de.height,pe,ge,de.data):t.texImage2D(3553,H,le,de.width,de.height,0,pe,ge,de.data);y.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(3553,L,le,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,pe,ge,X.data)):t.texImage2D(3553,0,le,X.width,X.height,0,pe,ge,X.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&We&&t.texStorage3D(35866,L,le,Re[0].width,Re[0].height,X.depth);for(let H=0,K=Re.length;H<K;H++)de=Re[H],y.format!==Gt?pe!==null?Oe?t.compressedTexSubImage3D(35866,H,0,0,0,de.width,de.height,X.depth,pe,de.data,0,0):t.compressedTexImage3D(35866,H,le,de.width,de.height,X.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,H,0,0,0,de.width,de.height,X.depth,pe,ge,de.data):t.texImage3D(35866,H,le,de.width,de.height,X.depth,0,pe,ge,de.data)}else{Oe&&We&&t.texStorage2D(3553,L,le,Re[0].width,Re[0].height);for(let H=0,K=Re.length;H<K;H++)de=Re[H],y.format!==Gt?pe!==null?Oe?t.compressedTexSubImage2D(3553,H,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(3553,H,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,H,0,0,de.width,de.height,pe,ge,de.data):t.texImage2D(3553,H,le,de.width,de.height,0,pe,ge,de.data)}else if(y.isDataArrayTexture)Oe?(We&&t.texStorage3D(35866,L,le,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,pe,ge,X.data)):t.texImage3D(35866,0,le,X.width,X.height,X.depth,0,pe,ge,X.data);else if(y.isData3DTexture)Oe?(We&&t.texStorage3D(32879,L,le,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,pe,ge,X.data)):t.texImage3D(32879,0,le,X.width,X.height,X.depth,0,pe,ge,X.data);else if(y.isFramebufferTexture){if(We)if(Oe)t.texStorage2D(3553,L,le,X.width,X.height);else{let H=X.width,K=X.height;for(let ae=0;ae<L;ae++)t.texImage2D(3553,ae,le,H,K,0,pe,ge,null),H>>=1,K>>=1}}else if(Re.length>0&&ue){Oe&&We&&t.texStorage2D(3553,L,le,Re[0].width,Re[0].height);for(let H=0,K=Re.length;H<K;H++)de=Re[H],Oe?t.texSubImage2D(3553,H,0,0,pe,ge,de):t.texImage2D(3553,H,le,pe,ge,de);y.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(3553,L,le,X.width,X.height),t.texSubImage2D(3553,0,0,0,pe,ge,X)):t.texImage2D(3553,0,le,pe,ge,X);A(y,ue)&&R(J),xe.__version=re.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Se(T,y,G){if(y.image.length!==6)return;const J=B(T,y),ee=y.source;t.bindTexture(34067,T.__webglTexture,33984+G);const re=n.get(ee);if(ee.version!==re.__version||J===!0){t.activeTexture(33984+G),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const xe=y.isCompressedTexture||y.image[0].isCompressedTexture,ce=y.image[0]&&y.image[0].isDataTexture,X=[];for(let H=0;H<6;H++)!xe&&!ce?X[H]=M(y.image[H],!1,!0,u):X[H]=ce?y.image[H].image:y.image[H],X[H]=pt(y,X[H]);const ue=X[0],pe=x(ue)||a,ge=r.convert(y.format,y.encoding),le=r.convert(y.type),de=P(y.internalFormat,ge,le,y.encoding),Re=a&&y.isVideoTexture!==!0,Oe=re.__version===void 0||J===!0;let We=S(y,ue,pe);oe(34067,y,pe);let L;if(xe){Re&&Oe&&t.texStorage2D(34067,We,de,ue.width,ue.height);for(let H=0;H<6;H++){L=X[H].mipmaps;for(let K=0;K<L.length;K++){const ae=L[K];y.format!==Gt?ge!==null?Re?t.compressedTexSubImage2D(34069+H,K,0,0,ae.width,ae.height,ge,ae.data):t.compressedTexImage2D(34069+H,K,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+H,K,0,0,ae.width,ae.height,ge,le,ae.data):t.texImage2D(34069+H,K,de,ae.width,ae.height,0,ge,le,ae.data)}}}else{L=y.mipmaps,Re&&Oe&&(L.length>0&&We++,t.texStorage2D(34067,We,de,X[0].width,X[0].height));for(let H=0;H<6;H++)if(ce){Re?t.texSubImage2D(34069+H,0,0,0,X[H].width,X[H].height,ge,le,X[H].data):t.texImage2D(34069+H,0,de,X[H].width,X[H].height,0,ge,le,X[H].data);for(let K=0;K<L.length;K++){const fe=L[K].image[H].image;Re?t.texSubImage2D(34069+H,K+1,0,0,fe.width,fe.height,ge,le,fe.data):t.texImage2D(34069+H,K+1,de,fe.width,fe.height,0,ge,le,fe.data)}}else{Re?t.texSubImage2D(34069+H,0,0,0,ge,le,X[H]):t.texImage2D(34069+H,0,de,ge,le,X[H]);for(let K=0;K<L.length;K++){const ae=L[K];Re?t.texSubImage2D(34069+H,K+1,0,0,ge,le,ae.image[H]):t.texImage2D(34069+H,K+1,de,ge,le,ae.image[H])}}}A(y,pe)&&R(34067),re.__version=ee.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ie(T,y,G,J,ee){const re=r.convert(G.format,G.encoding),xe=r.convert(G.type),ce=P(G.internalFormat,re,xe,G.encoding);n.get(y).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,ce,y.width,y.height,y.depth,0,re,xe,null):t.texImage2D(ee,0,ce,y.width,y.height,0,re,xe,null)),t.bindFramebuffer(36160,T),Ne(y)?h.framebufferTexture2DMultisampleEXT(36160,J,ee,n.get(G).__webglTexture,0,Ye(y)):(ee===3553||ee>=34069&&ee<=34074)&&i.framebufferTexture2D(36160,J,ee,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(T,y,G){if(i.bindRenderbuffer(36161,T),y.depthBuffer&&!y.stencilBuffer){let J=33189;if(G||Ne(y)){const ee=y.depthTexture;ee&&ee.isDepthTexture&&(ee.type===yn?J=36012:ee.type===Sn&&(J=33190));const re=Ye(y);Ne(y)?h.renderbufferStorageMultisampleEXT(36161,re,J,y.width,y.height):i.renderbufferStorageMultisample(36161,re,J,y.width,y.height)}else i.renderbufferStorage(36161,J,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,T)}else if(y.depthBuffer&&y.stencilBuffer){const J=Ye(y);G&&Ne(y)===!1?i.renderbufferStorageMultisample(36161,J,35056,y.width,y.height):Ne(y)?h.renderbufferStorageMultisampleEXT(36161,J,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,T)}else{const J=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0;ee<J.length;ee++){const re=J[ee],xe=r.convert(re.format,re.encoding),ce=r.convert(re.type),X=P(re.internalFormat,xe,ce,re.encoding),ue=Ye(y);G&&Ne(y)===!1?i.renderbufferStorageMultisample(36161,ue,X,y.width,y.height):Ne(y)?h.renderbufferStorageMultisampleEXT(36161,ue,X,y.width,y.height):i.renderbufferStorage(36161,X,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function Ue(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const J=n.get(y.depthTexture).__webglTexture,ee=Ye(y);if(y.depthTexture.format===bn)Ne(y)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,ee):i.framebufferTexture2D(36160,36096,3553,J,0);else if(y.depthTexture.format===ei)Ne(y)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,ee):i.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function he(T){const y=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ue(y.__webglFramebuffer,T)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=i.createRenderbuffer(),ve(y.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),ve(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Ce(T,y,G){const J=n.get(T);y!==void 0&&ie(J.__webglFramebuffer,T,T.texture,36064,3553),G!==void 0&&he(T)}function Je(T){const y=T.texture,G=n.get(T),J=n.get(y);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,re=T.isWebGLMultipleRenderTargets===!0,xe=x(T)||a;if(ee){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)G.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(G.__webglFramebuffer=i.createFramebuffer(),re)if(s.drawBuffers){const ce=T.texture;for(let X=0,ue=ce.length;X<ue;X++){const pe=n.get(ce[X]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ne(T)===!1){const ce=re?y:[y];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let X=0;X<ce.length;X++){const ue=ce[X];G.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(36161,G.__webglColorRenderbuffer[X]);const pe=r.convert(ue.format,ue.encoding),ge=r.convert(ue.type),le=P(ue.internalFormat,pe,ge,ue.encoding,T.isXRRenderTarget===!0),de=Ye(T);i.renderbufferStorageMultisample(36161,de,le,T.width,T.height),i.framebufferRenderbuffer(36160,36064+X,36161,G.__webglColorRenderbuffer[X])}i.bindRenderbuffer(36161,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,J.__webglTexture),oe(34067,y,xe);for(let ce=0;ce<6;ce++)ie(G.__webglFramebuffer[ce],T,y,36064,34069+ce);A(y,xe)&&R(34067),t.unbindTexture()}else if(re){const ce=T.texture;for(let X=0,ue=ce.length;X<ue;X++){const pe=ce[X],ge=n.get(pe);t.bindTexture(3553,ge.__webglTexture),oe(3553,pe,xe),ie(G.__webglFramebuffer,T,pe,36064+X,3553),A(pe,xe)&&R(3553)}t.unbindTexture()}else{let ce=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ce=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,J.__webglTexture),oe(ce,y,xe),ie(G.__webglFramebuffer,T,y,36064,ce),A(y,xe)&&R(ce),t.unbindTexture()}T.depthBuffer&&he(T)}function rt(T){const y=x(T)||a,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,ee=G.length;J<ee;J++){const re=G[J];if(A(re,y)){const xe=T.isWebGLCubeRenderTarget?34067:3553,ce=n.get(re).__webglTexture;t.bindTexture(xe,ce),R(xe),t.unbindTexture()}}}function Qe(T){if(a&&T.samples>0&&Ne(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,J=T.height;let ee=16384;const re=[],xe=T.stencilBuffer?33306:36096,ce=n.get(T),X=T.isWebGLMultipleRenderTargets===!0;if(X)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){re.push(36064+ue),T.depthBuffer&&re.push(xe);const pe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(pe===!1&&(T.depthBuffer&&(ee|=256),T.stencilBuffer&&(ee|=1024)),X&&i.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[ue]),pe===!0&&(i.invalidateFramebuffer(36008,[xe]),i.invalidateFramebuffer(36009,[xe])),X){const ge=n.get(y[ue]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,ge,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,ee,9728),p&&i.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ue,36161,ce.__webglColorRenderbuffer[ue]);const pe=n.get(y[ue]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ue,3553,pe,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function Ye(T){return Math.min(f,T.samples)}function Ne(T){const y=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function He(T){const y=o.render.frame;g.get(T)!==y&&(g.set(T,y),T.update())}function pt(T,y){const G=T.encoding,J=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===rr||G!==Tn&&(G===Ge?a===!1?e.has("EXT_sRGB")===!0&&J===Gt?(T.format=rr,T.minFilter=Pt,T.generateMipmaps=!1):y=fo.sRGBToLinear(y):(J!==Gt||ee!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),y}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=_e,this.setTexture3D=te,this.setTextureCube=k,this.rebindTextures=Ce,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ne}function jh(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===wn)return 5121;if(r===Nl)return 32819;if(r===Ol)return 32820;if(r===Dl)return 5120;if(r===Il)return 5122;if(r===oo)return 5123;if(r===Ul)return 5124;if(r===Sn)return 5125;if(r===yn)return 5126;if(r===bi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zl)return 6406;if(r===Gt)return 6408;if(r===Fl)return 6409;if(r===Bl)return 6410;if(r===bn)return 6402;if(r===ei)return 34041;if(r===rr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Gl)return 6403;if(r===kl)return 36244;if(r===Vl)return 33319;if(r===Hl)return 33320;if(r===Wl)return 36249;if(r===vs||r===xs||r===Ms||r===Ss)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===vs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===vs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ms)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ss)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pr||r===Rr||r===Dr||r===Ir)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Pr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ir)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ql)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ur||r===Nr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ur)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Nr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Or||r===zr||r===Fr||r===Br||r===Gr||r===kr||r===Vr||r===Hr||r===Wr||r===qr||r===Xr||r===jr||r===$r||r===Yr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Or)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Br)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$r)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yr)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ys)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ys)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Xl||r===Zr||r===Kr||r===Jr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ys)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class $h extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yh={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),c=this._getHandJoint(u,_);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zh extends _t{constructor(e,t,n,s,r,o,a,l,u,d){if(d=d!==void 0?d:bn,d!==bn&&d!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===bn&&(n=Sn),n===void 0&&d===ei&&(n=Zn),super(null,s,r,o,a,l,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1}}class Kh extends ni{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,g=null;const _=t.getContextAttributes();let m=null,c=null;const v=[],M=[],x=new Set,b=new Map,A=new Rt;A.layers.enable(1),A.viewport=new it;const R=new Rt;R.layers.enable(2),R.viewport=new it;const P=[A,R],S=new $h;S.layers.enable(1),S.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=v[k];return Y===void 0&&(Y=new Xs,v[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=v[k];return Y===void 0&&(Y=new Xs,v[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=v[k];return Y===void 0&&(Y=new Xs,v[k]=Y),Y.getHandSpace()};function D(k){const Y=M.indexOf(k.inputSource);if(Y===-1)return;const se=v[Y];se!==void 0&&se.dispatchEvent({type:k.type,data:k.inputSource})}function C(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",I);for(let k=0;k<v.length;k++){const Y=M[k];Y!==null&&(M[k]=null,v[k].disconnect(Y))}E=null,N=null,e.setRenderTarget(m),p=null,h=null,f=null,s=null,c=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",C),s.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:p}),c=new En(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:wn,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let Y=null,se=null,oe=null;_.depth&&(oe=_.stencil?35056:33190,Y=_.stencil?ei:bn,se=_.stencil?Zn:Sn);const B={colorFormat:32856,depthFormat:oe,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(B),s.updateRenderState({layers:[h]}),c=new En(h.textureWidth,h.textureHeight,{format:Gt,type:wn,depthTexture:new Zh(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const be=e.properties.get(c);be.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(k){for(let Y=0;Y<k.removed.length;Y++){const se=k.removed[Y],oe=M.indexOf(se);oe>=0&&(M[oe]=null,v[oe].disconnect(se))}for(let Y=0;Y<k.added.length;Y++){const se=k.added[Y];let oe=M.indexOf(se);if(oe===-1){for(let be=0;be<v.length;be++)if(be>=M.length){M.push(se),oe=be;break}else if(M[be]===null){M[be]=se,oe=be;break}if(oe===-1)break}const B=v[oe];B&&B.connect(se)}}const F=new O,W=new O;function $(k,Y,se){F.setFromMatrixPosition(Y.matrixWorld),W.setFromMatrixPosition(se.matrixWorld);const oe=F.distanceTo(W),B=Y.projectionMatrix.elements,be=se.projectionMatrix.elements,Se=B[14]/(B[10]-1),ie=B[14]/(B[10]+1),ve=(B[9]+1)/B[5],Ue=(B[9]-1)/B[5],he=(B[8]-1)/B[0],Ce=(be[8]+1)/be[0],Je=Se*he,rt=Se*Ce,Qe=oe/(-he+Ce),Ye=Qe*-he;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ye),k.translateZ(Qe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Ne=Se+Qe,He=ie+Qe,pt=Je-Ye,T=rt+(oe-Ye),y=ve*ie/He*Ne,G=Ue*ie/He*Ne;k.projectionMatrix.makePerspective(pt,T,y,G,Ne,He),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;S.near=R.near=A.near=k.near,S.far=R.far=A.far=k.far,(E!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,N=S.far);const Y=k.parent,se=S.cameras;q(S,Y);for(let oe=0;oe<se.length;oe++)q(se[oe],Y);se.length===2?$(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),Q(k,S,Y)};function Q(k,Y,se){se===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const oe=k.children;for(let B=0,be=oe.length;B<be;B++)oe[B].updateMatrixWorld(!0);k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ar*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.getPlanes=function(){return x};let Z=null;function _e(k,Y){if(d=Y.getViewerPose(u||o),g=Y,d!==null){const se=d.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let oe=!1;se.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let B=0;B<se.length;B++){const be=se[B];let Se=null;if(p!==null)Se=p.getViewport(be);else{const ve=f.getViewSubImage(h,be);Se=ve.viewport,B===0&&(e.setRenderTargetTextures(c,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(c))}let ie=P[B];ie===void 0&&(ie=new Rt,ie.layers.enable(B),ie.viewport=new it,P[B]=ie),ie.matrix.fromArray(be.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(be.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Se.x,Se.y,Se.width,Se.height),B===0&&(S.matrix.copy(ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(ie)}}for(let se=0;se<v.length;se++){const oe=M[se],B=v[se];oe!==null&&B!==void 0&&B.update(oe,Y,u||o)}if(Z&&Z(k,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let se=null;for(const oe of x)Y.detectedPlanes.has(oe)||(se===null&&(se=[]),se.push(oe));if(se!==null)for(const oe of se)x.delete(oe),b.delete(oe),n.dispatchEvent({type:"planeremoved",data:oe});for(const oe of Y.detectedPlanes)if(!x.has(oe))x.add(oe),b.set(oe,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:oe});else{const B=b.get(oe);oe.lastChangedTime>B&&(b.set(oe,oe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:oe}))}}g=null}const te=new bo;te.setAnimationLoop(_e),this.setAnimationLoop=function(k){Z=k},this.dispose=function(){}}}function Jh(i,e){function t(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function n(m,c){c.color.getRGB(m.fogColor.value,Mo(i)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function s(m,c,v,M,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(m,c):c.isMeshToonMaterial?(r(m,c),f(m,c)):c.isMeshPhongMaterial?(r(m,c),d(m,c)):c.isMeshStandardMaterial?(r(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,x)):c.isMeshMatcapMaterial?(r(m,c),g(m,c)):c.isMeshDepthMaterial?r(m,c):c.isMeshDistanceMaterial?(r(m,c),_(m,c)):c.isMeshNormalMaterial?r(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,M):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,t(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,t(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,t(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===gt&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,t(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===gt&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,t(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,t(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*M,t(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,t(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,M){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=M*.5,c.map&&(m.map.value=c.map,t(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,t(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===gt&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,c){c.matcap&&(m.matcap.value=c.matcap)}function _(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qh(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function u(v,M){let x=s[v.id];x===void 0&&(g(v),x=d(v),s[v.id]=x,v.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(v,b);const A=e.render.frame;r[v.id]!==A&&(h(v),r[v.id]=A)}function d(v){const M=f();v.__bindingPointIndex=M;const x=i.createBuffer(),b=v.__size,A=v.usage;return i.bindBuffer(35345,x),i.bufferData(35345,b,A),i.bindBuffer(35345,null),i.bindBufferBase(35345,M,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const M=s[v.id],x=v.uniforms,b=v.__cache;i.bindBuffer(35345,M);for(let A=0,R=x.length;A<R;A++){const P=x[A];if(p(P,A,b)===!0){const S=P.__offset,E=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let D=0;D<E.length;D++){const C=E[D],I=_(C);typeof C=="number"?(P.__data[0]=C,i.bufferSubData(35345,S+N,P.__data)):C.isMatrix3?(P.__data[0]=C.elements[0],P.__data[1]=C.elements[1],P.__data[2]=C.elements[2],P.__data[3]=C.elements[0],P.__data[4]=C.elements[3],P.__data[5]=C.elements[4],P.__data[6]=C.elements[5],P.__data[7]=C.elements[0],P.__data[8]=C.elements[6],P.__data[9]=C.elements[7],P.__data[10]=C.elements[8],P.__data[11]=C.elements[0]):(C.toArray(P.__data,N),N+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,S,P.__data)}}i.bindBuffer(35345,null)}function p(v,M,x){const b=v.value;if(x[M]===void 0){if(typeof b=="number")x[M]=b;else{const A=Array.isArray(b)?b:[b],R=[];for(let P=0;P<A.length;P++)R.push(A[P].clone());x[M]=R}return!0}else if(typeof b=="number"){if(x[M]!==b)return x[M]=b,!0}else{const A=Array.isArray(x[M])?x[M]:[x[M]],R=Array.isArray(b)?b:[b];for(let P=0;P<A.length;P++){const S=A[P];if(S.equals(R[P])===!1)return S.copy(R[P]),!0}}return!1}function g(v){const M=v.uniforms;let x=0;const b=16;let A=0;for(let R=0,P=M.length;R<P;R++){const S=M[R],E={boundary:0,storage:0},N=Array.isArray(S.value)?S.value:[S.value];for(let D=0,C=N.length;D<C;D++){const I=N[D],F=_(I);E.boundary+=F.boundary,E.storage+=F.storage}if(S.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,R>0){A=x%b;const D=b-A;A!==0&&D-E.boundary<0&&(x+=b-A,S.__offset=x)}x+=E.storage}return A=x%b,A>0&&(x+=b-A),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function c(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:u,dispose:c}}function ep(){const i=Ti("canvas");return i.style.display="block",i}class Lo{constructor(e={}){const{canvas:t=ep(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tn,this.useLegacyLights=!0,this.toneMapping=nn,this.toneMappingExposure=1;const c=this;let v=!1,M=0,x=0,b=null,A=-1,R=null;const P=new it,S=new it;let E=null,N=t.width,D=t.height,C=1,I=null,F=null;const W=new it(0,0,N,D),$=new it(0,0,N,D);let q=!1;const Q=new mr;let Z=!1,_e=!1,te=null;const k=new Xe,Y=new O,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return b===null?C:1}let B=n;function be(w,z){for(let V=0;V<w.length;V++){const U=w[V],j=t.getContext(U,z);if(j!==null)return j}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hr}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),B===null){const z=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&z.shift(),B=be(z,w),B===null)throw be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,ie,ve,Ue,he,Ce,Je,rt,Qe,Ye,Ne,He,pt,T,y,G,J,ee,re,xe,ce,X,ue,pe;function ge(){Se=new df(B),ie=new rf(B,Se,e),Se.init(ie),X=new jh(B,Se,ie),ve=new qh(B,Se,ie),Ue=new pf,he=new Rh,Ce=new Xh(B,Se,ve,he,ie,X,Ue),Je=new of(c),rt=new uf(c),Qe=new Tc(B,ie),ue=new nf(B,Se,Qe,ie),Ye=new ff(B,Qe,Ue,ue),Ne=new vf(B,Ye,Qe,Ue),re=new _f(B,ie,Ce),G=new af(he),He=new Ph(c,Je,rt,Se,ie,ue,G),pt=new Jh(c,he),T=new Ih,y=new Bh(Se,ie),ee=new tf(c,Je,rt,ve,Ne,h,l),J=new Wh(c,Ne,ie),pe=new Qh(B,Ue,ie,ve),xe=new sf(B,Se,Ue,ie),ce=new hf(B,Se,Ue,ie),Ue.programs=He.programs,c.capabilities=ie,c.extensions=Se,c.properties=he,c.renderLists=T,c.shadowMap=J,c.state=ve,c.info=Ue}ge();const le=new Kh(c,B);this.xr=le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(w){w!==void 0&&(C=w,this.setSize(N,D,!1))},this.getSize=function(w){return w.set(N,D)},this.setSize=function(w,z,V=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,D=z,t.width=Math.floor(w*C),t.height=Math.floor(z*C),V===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(N*C,D*C).floor()},this.setDrawingBufferSize=function(w,z,V){N=w,D=z,C=V,t.width=Math.floor(w*V),t.height=Math.floor(z*V),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,z,V,U){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,z,V,U),ve.viewport(P.copy(W).multiplyScalar(C).floor())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,z,V,U){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,z,V,U),ve.scissor(S.copy($).multiplyScalar(C).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(w){ve.setScissorTest(q=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,z=!0,V=!0){let U=0;w&&(U|=16384),z&&(U|=256),V&&(U|=1024),B.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),T.dispose(),y.dispose(),he.dispose(),Je.dispose(),rt.dispose(),Ne.dispose(),ue.dispose(),pe.dispose(),He.dispose(),le.dispose(),le.removeEventListener("sessionstart",fe),le.removeEventListener("sessionend",Be),te&&(te.dispose(),te=null),ke.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const w=Ue.autoReset,z=J.enabled,V=J.autoUpdate,U=J.needsUpdate,j=J.type;ge(),Ue.autoReset=w,J.enabled=z,J.autoUpdate=V,J.needsUpdate=U,J.type=j}function Oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function We(w){const z=w.target;z.removeEventListener("dispose",We),L(z)}function L(w){H(w),he.remove(w)}function H(w){const z=he.get(w).programs;z!==void 0&&(z.forEach(function(V){He.releaseProgram(V)}),w.isShaderMaterial&&He.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,V,U,j,me){z===null&&(z=se);const Me=j.isMesh&&j.matrixWorld.determinant()<0,ye=Jo(w,z,V,U,j);ve.setMaterial(U,Me);let we=V.index,Ee=1;U.wireframe===!0&&(we=Ye.getWireframeAttribute(V),Ee=2);const Ae=V.drawRange,Le=V.attributes.position;let ze=Ae.start*Ee,ct=(Ae.start+Ae.count)*Ee;me!==null&&(ze=Math.max(ze,me.start*Ee),ct=Math.min(ct,(me.start+me.count)*Ee)),we!==null?(ze=Math.max(ze,0),ct=Math.min(ct,we.count)):Le!=null&&(ze=Math.max(ze,0),ct=Math.min(ct,Le.count));const It=ct-ze;if(It<0||It===1/0)return;ue.setup(j,U,ye,V,we);let fn,je=xe;if(we!==null&&(fn=Qe.get(we),je=ce,je.setIndex(fn)),j.isMesh)U.wireframe===!0?(ve.setLineWidth(U.wireframeLinewidth*oe()),je.setMode(1)):je.setMode(4);else if(j.isLine){let De=U.linewidth;De===void 0&&(De=1),ve.setLineWidth(De*oe()),j.isLineSegments?je.setMode(1):j.isLineLoop?je.setMode(2):je.setMode(3)}else j.isPoints?je.setMode(0):j.isSprite&&je.setMode(4);if(j.isInstancedMesh)je.renderInstances(ze,It,j.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,hs=Math.min(V.instanceCount,De);je.renderInstances(ze,It,hs)}else je.render(ze,It)},this.compile=function(w,z){function V(U,j,me){U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=gt,U.needsUpdate=!0,Ri(U,j,me),U.side=dn,U.needsUpdate=!0,Ri(U,j,me),U.side=tn):Ri(U,j,me)}g=y.get(w),g.init(),m.push(g),w.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(c.useLegacyLights),w.traverse(function(U){const j=U.material;if(j)if(Array.isArray(j))for(let me=0;me<j.length;me++){const Me=j[me];V(Me,w,U)}else V(j,w,U)}),m.pop(),g=null};let K=null;function ae(w){K&&K(w)}function fe(){ke.stop()}function Be(){ke.start()}const ke=new bo;ke.setAnimationLoop(ae),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(w){K=w,le.setAnimationLoop(w),w===null?ke.stop():ke.start()},le.addEventListener("sessionstart",fe),le.addEventListener("sessionend",Be),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(z),z=le.getCamera()),w.isScene===!0&&w.onBeforeRender(c,w,z,b),g=y.get(w,m.length),g.init(),m.push(g),k.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(k),_e=this.localClippingEnabled,Z=G.init(this.clippingPlanes,_e),p=T.get(w,_.length),p.init(),_.push(p),at(w,z,0,c.sortObjects),p.finish(),c.sortObjects===!0&&p.sort(I,F),Z===!0&&G.beginShadows();const V=g.state.shadowsArray;if(J.render(V,w,z),Z===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(p,w),g.setupLights(c.useLegacyLights),z.isArrayCamera){const U=z.cameras;for(let j=0,me=U.length;j<me;j++){const Me=U[j];sn(p,w,Me,Me.viewport)}}else sn(p,w,z);b!==null&&(Ce.updateMultisampleRenderTarget(b),Ce.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(c,w,z),ue.resetDefaultState(),A=-1,R=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function at(w,z,V,U){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){U&&Y.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);const Me=Ne.update(w),ye=w.material;ye.visible&&p.push(w,Me,ye,V,Y.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ue.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ue.render.frame),!w.frustumCulled||Q.intersectsObject(w))){U&&Y.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);const Me=Ne.update(w),ye=w.material;if(Array.isArray(ye)){const we=Me.groups;for(let Ee=0,Ae=we.length;Ee<Ae;Ee++){const Le=we[Ee],ze=ye[Le.materialIndex];ze&&ze.visible&&p.push(w,Me,ze,V,Y.z,Le)}}else ye.visible&&p.push(w,Me,ye,V,Y.z,null)}}const me=w.children;for(let Me=0,ye=me.length;Me<ye;Me++)at(me[Me],z,V,U)}function sn(w,z,V,U){const j=w.opaque,me=w.transmissive,Me=w.transparent;g.setupLightsView(V),Z===!0&&G.setGlobalState(c.clippingPlanes,V),me.length>0&&qe(j,me,z,V),U&&ve.viewport(P.copy(U)),j.length>0&&Et(j,z,V),me.length>0&&Et(me,z,V),Me.length>0&&Et(Me,z,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function qe(w,z,V,U){if(te===null){const ye=ie.isWebGL2;te=new En(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?bi:wn,minFilter:yi,samples:ye&&a===!0?4:0})}const j=c.getRenderTarget();c.setRenderTarget(te),c.clear();const me=c.toneMapping;c.toneMapping=nn,Et(w,V,U),Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te);let Me=!1;for(let ye=0,we=z.length;ye<we;ye++){const Ee=z[ye],Ae=Ee.object,Le=Ee.geometry,ze=Ee.material,ct=Ee.group;if(ze.side===tn&&Ae.layers.test(U.layers)){const It=ze.side;ze.side=gt,ze.needsUpdate=!0,kt(Ae,V,U,Le,ze,ct),ze.side=It,ze.needsUpdate=!0,Me=!0}}Me===!0&&(Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te)),c.setRenderTarget(j),c.toneMapping=me}function Et(w,z,V){const U=z.isScene===!0?z.overrideMaterial:null;for(let j=0,me=w.length;j<me;j++){const Me=w[j],ye=Me.object,we=Me.geometry,Ee=U===null?Me.material:U,Ae=Me.group;ye.layers.test(V.layers)&&kt(ye,z,V,we,Ee,Ae)}}function kt(w,z,V,U,j,me){w.onBeforeRender(c,z,V,U,j,me),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(c,z,V,U,w,me),j.transparent===!0&&j.side===tn&&j.forceSinglePass===!1?(j.side=gt,j.needsUpdate=!0,c.renderBufferDirect(V,z,U,j,w,me),j.side=dn,j.needsUpdate=!0,c.renderBufferDirect(V,z,U,j,w,me),j.side=tn):c.renderBufferDirect(V,z,U,j,w,me),w.onAfterRender(c,z,V,U,j,me)}function Ri(w,z,V){z.isScene!==!0&&(z=se);const U=he.get(w),j=g.state.lights,me=g.state.shadowsArray,Me=j.state.version,ye=He.getParameters(w,j.state,me,z,V),we=He.getProgramCacheKey(ye);let Ee=U.programs;U.environment=w.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=(w.isMeshStandardMaterial?rt:Je).get(w.envMap||U.environment),Ee===void 0&&(w.addEventListener("dispose",We),Ee=new Map,U.programs=Ee);let Ae=Ee.get(we);if(Ae!==void 0){if(U.currentProgram===Ae&&U.lightsStateVersion===Me)return Mr(w,ye),Ae}else ye.uniforms=He.getUniforms(w),w.onBuild(V,ye,c),w.onBeforeCompile(ye,c),Ae=He.acquireProgram(ye,we),Ee.set(we,Ae),U.uniforms=ye.uniforms;const Le=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=G.uniform),Mr(w,ye),U.needsLights=el(w),U.lightsStateVersion=Me,U.needsLights&&(Le.ambientLightColor.value=j.state.ambient,Le.lightProbe.value=j.state.probe,Le.directionalLights.value=j.state.directional,Le.directionalLightShadows.value=j.state.directionalShadow,Le.spotLights.value=j.state.spot,Le.spotLightShadows.value=j.state.spotShadow,Le.rectAreaLights.value=j.state.rectArea,Le.ltc_1.value=j.state.rectAreaLTC1,Le.ltc_2.value=j.state.rectAreaLTC2,Le.pointLights.value=j.state.point,Le.pointLightShadows.value=j.state.pointShadow,Le.hemisphereLights.value=j.state.hemi,Le.directionalShadowMap.value=j.state.directionalShadowMap,Le.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Le.spotShadowMap.value=j.state.spotShadowMap,Le.spotLightMatrix.value=j.state.spotLightMatrix,Le.spotLightMap.value=j.state.spotLightMap,Le.pointShadowMap.value=j.state.pointShadowMap,Le.pointShadowMatrix.value=j.state.pointShadowMatrix);const ze=Ae.getUniforms(),ct=rs.seqWithValue(ze.seq,Le);return U.currentProgram=Ae,U.uniformsList=ct,Ae}function Mr(w,z){const V=he.get(w);V.outputEncoding=z.outputEncoding,V.instancing=z.instancing,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function Jo(w,z,V,U,j){z.isScene!==!0&&(z=se),Ce.resetTextureUnits();const me=z.fog,Me=U.isMeshStandardMaterial?z.environment:null,ye=b===null?c.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Tn,we=(U.isMeshStandardMaterial?rt:Je).get(U.envMap||Me),Ee=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ae=!!U.normalMap&&!!V.attributes.tangent,Le=!!V.morphAttributes.position,ze=!!V.morphAttributes.normal,ct=!!V.morphAttributes.color,It=U.toneMapped?c.toneMapping:nn,fn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,je=fn!==void 0?fn.length:0,De=he.get(U),hs=g.state.lights;if(Z===!0&&(_e===!0||w!==R)){const vt=w===R&&U.id===A;G.setState(U,w,vt)}let et=!1;U.version===De.__version?(De.needsLights&&De.lightsStateVersion!==hs.state.version||De.outputEncoding!==ye||j.isInstancedMesh&&De.instancing===!1||!j.isInstancedMesh&&De.instancing===!0||j.isSkinnedMesh&&De.skinning===!1||!j.isSkinnedMesh&&De.skinning===!0||De.envMap!==we||U.fog===!0&&De.fog!==me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==G.numPlanes||De.numIntersection!==G.numIntersection)||De.vertexAlphas!==Ee||De.vertexTangents!==Ae||De.morphTargets!==Le||De.morphNormals!==ze||De.morphColors!==ct||De.toneMapping!==It||ie.isWebGL2===!0&&De.morphTargetsCount!==je)&&(et=!0):(et=!0,De.__version=U.version);let hn=De.currentProgram;et===!0&&(hn=Ri(U,z,j));let Sr=!1,si=!1,ps=!1;const ut=hn.getUniforms(),pn=De.uniforms;if(ve.useProgram(hn.program)&&(Sr=!0,si=!0,ps=!0),U.id!==A&&(A=U.id,si=!0),Sr||R!==w){if(ut.setValue(B,"projectionMatrix",w.projectionMatrix),ie.logarithmicDepthBuffer&&ut.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),R!==w&&(R=w,si=!0,ps=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const vt=ut.map.cameraPosition;vt!==void 0&&vt.setValue(B,Y.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ut.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||j.isSkinnedMesh)&&ut.setValue(B,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){ut.setOptional(B,j,"bindMatrix"),ut.setOptional(B,j,"bindMatrixInverse");const vt=j.skeleton;vt&&(ie.floatVertexTextures?(vt.boneTexture===null&&vt.computeBoneTexture(),ut.setValue(B,"boneTexture",vt.boneTexture,Ce),ut.setValue(B,"boneTextureSize",vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ms=V.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&ie.isWebGL2===!0)&&re.update(j,V,hn),(si||De.receiveShadow!==j.receiveShadow)&&(De.receiveShadow=j.receiveShadow,ut.setValue(B,"receiveShadow",j.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(pn.envMap.value=we,pn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),si&&(ut.setValue(B,"toneMappingExposure",c.toneMappingExposure),De.needsLights&&Qo(pn,ps),me&&U.fog===!0&&pt.refreshFogUniforms(pn,me),pt.refreshMaterialUniforms(pn,U,C,D,te),rs.upload(B,De.uniformsList,pn,Ce)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(rs.upload(B,De.uniformsList,pn,Ce),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ut.setValue(B,"center",j.center),ut.setValue(B,"modelViewMatrix",j.modelViewMatrix),ut.setValue(B,"normalMatrix",j.normalMatrix),ut.setValue(B,"modelMatrix",j.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const vt=U.uniformsGroups;for(let gs=0,tl=vt.length;gs<tl;gs++)if(ie.isWebGL2){const yr=vt[gs];pe.update(yr,hn),pe.bind(yr,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function Qo(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function el(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,z,V){he.get(w.texture).__webglTexture=z,he.get(w.depthTexture).__webglTexture=V;const U=he.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=V===void 0,U.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){const V=he.get(w);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,V=0){b=w,M=z,x=V;let U=!0,j=null,me=!1,Me=!1;if(w){const we=he.get(w);we.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),U=!1):we.__webglFramebuffer===void 0?Ce.setupRenderTarget(w):we.__hasExternalTextures&&Ce.rebindTextures(w,he.get(w.texture).__webglTexture,he.get(w.depthTexture).__webglTexture);const Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Me=!0);const Ae=he.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Ae[z],me=!0):ie.isWebGL2&&w.samples>0&&Ce.useMultisampledRTT(w)===!1?j=he.get(w).__webglMultisampledFramebuffer:j=Ae,P.copy(w.viewport),S.copy(w.scissor),E=w.scissorTest}else P.copy(W).multiplyScalar(C).floor(),S.copy($).multiplyScalar(C).floor(),E=q;if(ve.bindFramebuffer(36160,j)&&ie.drawBuffers&&U&&ve.drawBuffers(w,j),ve.viewport(P),ve.scissor(S),ve.setScissorTest(E),me){const we=he.get(w.texture);B.framebufferTexture2D(36160,36064,34069+z,we.__webglTexture,V)}else if(Me){const we=he.get(w.texture),Ee=z||0;B.framebufferTextureLayer(36160,36064,we.__webglTexture,V||0,Ee)}A=-1},this.readRenderTargetPixels=function(w,z,V,U,j,me,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=he.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me]),ye){ve.bindFramebuffer(36160,ye);try{const we=w.texture,Ee=we.format,Ae=we.type;if(Ee!==Gt&&X.convert(Ee)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ae===bi&&(Se.has("EXT_color_buffer_half_float")||ie.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ae!==wn&&X.convert(Ae)!==B.getParameter(35738)&&!(Ae===yn&&(ie.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-U&&V>=0&&V<=w.height-j&&B.readPixels(z,V,U,j,X.convert(Ee),X.convert(Ae),me)}finally{const we=b!==null?he.get(b).__webglFramebuffer:null;ve.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(w,z,V=0){const U=Math.pow(2,-V),j=Math.floor(z.image.width*U),me=Math.floor(z.image.height*U);Ce.setTexture2D(z,0),B.copyTexSubImage2D(3553,V,0,0,w.x,w.y,j,me),ve.unbindTexture()},this.copyTextureToTexture=function(w,z,V,U=0){const j=z.image.width,me=z.image.height,Me=X.convert(V.format),ye=X.convert(V.type);Ce.setTexture2D(V,0),B.pixelStorei(37440,V.flipY),B.pixelStorei(37441,V.premultiplyAlpha),B.pixelStorei(3317,V.unpackAlignment),z.isDataTexture?B.texSubImage2D(3553,U,w.x,w.y,j,me,Me,ye,z.image.data):z.isCompressedTexture?B.compressedTexSubImage2D(3553,U,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):B.texSubImage2D(3553,U,w.x,w.y,Me,ye,z.image),U===0&&V.generateMipmaps&&B.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,z,V,U,j=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=w.max.x-w.min.x+1,Me=w.max.y-w.min.y+1,ye=w.max.z-w.min.z+1,we=X.convert(U.format),Ee=X.convert(U.type);let Ae;if(U.isData3DTexture)Ce.setTexture3D(U,0),Ae=32879;else if(U.isDataArrayTexture)Ce.setTexture2DArray(U,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,U.flipY),B.pixelStorei(37441,U.premultiplyAlpha),B.pixelStorei(3317,U.unpackAlignment);const Le=B.getParameter(3314),ze=B.getParameter(32878),ct=B.getParameter(3316),It=B.getParameter(3315),fn=B.getParameter(32877),je=V.isCompressedTexture?V.mipmaps[0]:V.image;B.pixelStorei(3314,je.width),B.pixelStorei(32878,je.height),B.pixelStorei(3316,w.min.x),B.pixelStorei(3315,w.min.y),B.pixelStorei(32877,w.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Ae,j,z.x,z.y,z.z,me,Me,ye,we,Ee,je.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ae,j,z.x,z.y,z.z,me,Me,ye,we,je.data)):B.texSubImage3D(Ae,j,z.x,z.y,z.z,me,Me,ye,we,Ee,je),B.pixelStorei(3314,Le),B.pixelStorei(32878,ze),B.pixelStorei(3316,ct),B.pixelStorei(3315,It),B.pixelStorei(32877,fn),j===0&&U.generateMipmaps&&B.generateMipmap(Ae),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ce.setTextureCube(w,0):w.isData3DTexture?Ce.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ce.setTexture2DArray(w,0):Ce.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){M=0,x=0,b=null,ve.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class tp extends Lo{}tp.prototype.isWebGL1Renderer=!0;class vr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new vr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class np extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Po extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new O,Ba=new O,Ga=new Xe,js=new pr,es=new Li;class ip extends st{constructor(e=new Dt,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fa.fromBufferAttribute(t,s-1),Ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fa.distanceTo(Ba);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(s),es.radius+=r,e.ray.intersectsSphere(es)===!1)return;Ga.copy(s).invert(),js.copy(e.ray).applyMatrix4(Ga);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new O,d=new O,f=new O,h=new O,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const c=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let M=c,x=v-1;M<x;M+=p){const b=g.getX(M),A=g.getX(M+1);if(u.fromBufferAttribute(m,b),d.fromBufferAttribute(m,A),js.distanceSqToSegment(u,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let M=c,x=v-1;M<x;M+=p){if(u.fromBufferAttribute(m,M),d.fromBufferAttribute(m,M+1),js.distanceSqToSegment(u,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ka=new O,Va=new O;class sp extends ip{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ka.fromBufferAttribute(t,s),Va.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ka.distanceTo(Va);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ro extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ha=new Xe,lr=new pr,ts=new Li,ns=new O;class rp extends st{constructor(e=new Dt,t=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),ts.radius+=r,e.ray.intersectsSphere(ts)===!1)return;Ha.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Ha);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=u.getX(g);ns.fromBufferAttribute(f,m),Wa(ns,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)ns.fromBufferAttribute(f,g),Wa(ns,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wa(i,e,t,n,s,r,o){const a=lr.distanceSqToPoint(i);if(a<t){const l=new O;lr.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ct extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const d=[],f=new O,h=new O,p=[],g=[],_=[],m=[];for(let c=0;c<=n;c++){const v=[],M=c/n;let x=0;c===0&&o===0?x=.5/t:c===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const A=b/t;f.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(A+x,1-M),v.push(u++)}d.push(v)}for(let c=0;c<n;c++)for(let v=0;v<t;v++){const M=d[c][v+1],x=d[c][v],b=d[c+1][v],A=d[c+1][v+1];(c!==0||o>0)&&p.push(M,x,A),(c!==n-1||l<Math.PI)&&p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ht extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const qa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ap{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){const f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const op=new ap;class Do{constructor(e){this.manager=e!==void 0?e:op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class lp extends Do{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qa.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ti("img");function l(){d(),qa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(f){d(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class bt extends Do{constructor(e){super(e)}load(e,t,n,s){const r=new _t,o=new lp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Io extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $s=new Xe,Xa=new O,ja=new O;class cp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xa),ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ja),t.updateMatrixWorld(),$s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class up extends cp{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dp extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new up}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fp extends Io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hp extends sp{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ie(n),s=new Ie(s);const r=t/2,o=e/t,a=e/2,l=[],u=[];for(let h=0,p=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=h===r?n:s;_.toArray(u,p),p+=3,_.toArray(u,p),p+=3,_.toArray(u,p),p+=3,_.toArray(u,p),p+=3}const d=new Dt;d.setAttribute("position",new ht(l,3)),d.setAttribute("color",new ht(u,3));const f=new Po({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hr);function $a(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function xr(i={},e={}){Object.keys(e).forEach(t=>{typeof i[t]>"u"?i[t]=e[t]:$a(e[t])&&$a(i[t])&&Object.keys(e[t]).length>0&&xr(i[t],e[t])})}const Uo={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function $t(){const i=typeof document<"u"?document:{};return xr(i,Uo),i}const pp={document:Uo,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function Tt(){const i=typeof window<"u"?window:{};return xr(i,pp),i}function mp(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function cr(i,e=0){return setTimeout(i,e)}function os(){return Date.now()}function gp(i){const e=Tt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function _p(i,e="x"){const t=Tt();let n,s,r;const o=gp(i);return t.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(a=>a.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(s==="none"?"":s)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?s=r.m41:n.length===16?s=parseFloat(n[12]):s=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?s=r.m42:n.length===16?s=parseFloat(n[13]):s=parseFloat(n[5])),s||0}function is(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function vp(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function wt(...i){const e=Object(i[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<i.length;n+=1){const s=i[n];if(s!=null&&!vp(s)){const r=Object.keys(Object(s)).filter(o=>t.indexOf(o)<0);for(let o=0,a=r.length;o<a;o+=1){const l=r[o],u=Object.getOwnPropertyDescriptor(s,l);u!==void 0&&u.enumerable&&(is(e[l])&&is(s[l])?s[l].__swiper__?e[l]=s[l]:wt(e[l],s[l]):!is(e[l])&&is(s[l])?(e[l]={},s[l].__swiper__?e[l]=s[l]:wt(e[l],s[l])):e[l]=s[l])}}}return e}function ss(i,e,t){i.style.setProperty(e,t)}function No({swiper:i,targetPosition:e,side:t}){const n=Tt(),s=-i.translate;let r=null,o;const a=i.params.speed;i.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(i.cssModeFrameID);const l=e>s?"next":"prev",u=(f,h)=>l==="next"&&f>=h||l==="prev"&&f<=h,d=()=>{o=new Date().getTime(),r===null&&(r=o);const f=Math.max(Math.min((o-r)/a,1),0),h=.5-Math.cos(f*Math.PI)/2;let p=s+h*(e-s);if(u(p,e)&&(p=e),i.wrapperEl.scrollTo({[t]:p}),u(p,e)){i.wrapperEl.style.overflow="hidden",i.wrapperEl.style.scrollSnapType="",setTimeout(()=>{i.wrapperEl.style.overflow="",i.wrapperEl.scrollTo({[t]:p})}),n.cancelAnimationFrame(i.cssModeFrameID);return}i.cssModeFrameID=n.requestAnimationFrame(d)};d()}function Xt(i,e=""){return[...i.children].filter(t=>t.matches(e))}function Oo(i,e=[]){const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:[e]),t}function xp(i,e){const t=[];for(;i.previousElementSibling;){const n=i.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function Mp(i,e){const t=[];for(;i.nextElementSibling;){const n=i.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function cn(i,e){return Tt().getComputedStyle(i,null).getPropertyValue(e)}function ls(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function zo(i,e){const t=[];let n=i.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function ur(i,e,t){const n=Tt();return t?i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):i.offsetWidth}let Ys;function Sp(){const i=Tt(),e=$t();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function Fo(){return Ys||(Ys=Sp()),Ys}let Zs;function yp({userAgent:i}={}){const e=Fo(),t=Tt(),n=t.navigator.platform,s=i||t.navigator.userAgent,r={ios:!1,android:!1},o=t.screen.width,a=t.screen.height,l=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const d=s.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=n==="Win32";let p=n==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&e.touch&&g.indexOf(`${o}x${a}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),l&&!h&&(r.os="android",r.android=!0),(u||f||d)&&(r.os="ios",r.ios=!0),r}function bp(i={}){return Zs||(Zs=yp(i)),Zs}let Ks;function wp(){const i=Tt();let e=!1;function t(){const n=i.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}if(t()){const n=String(i.navigator.userAgent);if(n.includes("Version/")){const[s,r]=n.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=s<16||s===16&&r<2}}return{isSafari:e||t(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function Tp(){return Ks||(Ks=wp()),Ks}function Ep({swiper:i,on:e,emit:t}){const n=Tt();let s=null,r=null;const o=()=>{!i||i.destroyed||!i.initialized||(t("beforeResize"),t("resize"))},a=()=>{!i||i.destroyed||!i.initialized||(s=new ResizeObserver(d=>{r=n.requestAnimationFrame(()=>{const{width:f,height:h}=i;let p=f,g=h;d.forEach(({contentBoxSize:_,contentRect:m,target:c})=>{c&&c!==i.el||(p=m?m.width:(_[0]||_).inlineSize,g=m?m.height:(_[0]||_).blockSize)}),(p!==f||g!==h)&&o()})}),s.observe(i.el))},l=()=>{r&&n.cancelAnimationFrame(r),s&&s.unobserve&&i.el&&(s.unobserve(i.el),s=null)},u=()=>{!i||i.destroyed||!i.initialized||t("orientationchange")};e("init",()=>{if(i.params.resizeObserver&&typeof n.ResizeObserver<"u"){a();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",u)}),e("destroy",()=>{l(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",u)})}function Ap({swiper:i,extendParams:e,on:t,emit:n}){const s=[],r=Tt(),o=(u,d={})=>{const f=r.MutationObserver||r.WebkitMutationObserver,h=new f(p=>{if(i.__preventObserver__)return;if(p.length===1){n("observerUpdate",p[0]);return}const g=function(){n("observerUpdate",p[0])};r.requestAnimationFrame?r.requestAnimationFrame(g):r.setTimeout(g,0)});h.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),s.push(h)},a=()=>{if(i.params.observer){if(i.params.observeParents){const u=zo(i.el);for(let d=0;d<u.length;d+=1)o(u[d])}o(i.el,{childList:i.params.observeSlideChildren}),o(i.wrapperEl,{attributes:!1})}},l=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",a),t("destroy",l)}const Cp={on(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const s=t?"unshift":"push";return i.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][s](e)}),n},once(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function s(...r){n.off(i,s),s.__emitterProxy&&delete s.__emitterProxy,e.apply(n,r)}return s.__emitterProxy=e,n.on(i,s,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[n](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((s,r)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&t.eventsListeners[n].splice(r,1)})}),t},emit(...i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,s;return typeof i[0]=="string"||Array.isArray(i[0])?(t=i[0],n=i.slice(1,i.length),s=e):(t=i[0].events,n=i[0].data,s=i[0].context||e),n.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(o=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(a=>{a.apply(s,[o,...n])}),e.eventsListeners&&e.eventsListeners[o]&&e.eventsListeners[o].forEach(a=>{a.apply(s,n)})}),e}};function Lp(){const i=this;let e,t;const n=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=n.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=n.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(cn(n,"padding-left")||0,10)-parseInt(cn(n,"padding-right")||0,10),t=t-parseInt(cn(n,"padding-top")||0,10)-parseInt(cn(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function Pp(){const i=this;function e(N){return i.isHorizontal()?N:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[N]}function t(N,D){return parseFloat(N.getPropertyValue(e(D))||0)}const n=i.params,{wrapperEl:s,slidesEl:r,size:o,rtlTranslate:a,wrongRTL:l}=i,u=i.virtual&&n.virtual.enabled,d=u?i.virtual.slides.length:i.slides.length,f=Xt(r,`.${i.params.slideClass}, swiper-slide`),h=u?i.virtual.slides.length:f.length;let p=[];const g=[],_=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(i));let c=n.slidesOffsetAfter;typeof c=="function"&&(c=n.slidesOffsetAfter.call(i));const v=i.snapGrid.length,M=i.slidesGrid.length;let x=n.spaceBetween,b=-m,A=0,R=0;if(typeof o>"u")return;typeof x=="string"&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*o),i.virtualSize=-x,f.forEach(N=>{a?N.style.marginLeft="":N.style.marginRight="",N.style.marginBottom="",N.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ss(s,"--swiper-centered-offset-before",""),ss(s,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&i.grid;P&&i.grid.initSlides(h);let S;const E=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(N=>typeof n.breakpoints[N].slidesPerView<"u").length>0;for(let N=0;N<h;N+=1){S=0;let D;if(f[N]&&(D=f[N]),P&&i.grid.updateSlide(N,D,h,e),!(f[N]&&cn(D,"display")==="none")){if(n.slidesPerView==="auto"){E&&(f[N].style[e("width")]="");const C=getComputedStyle(D),I=D.style.transform,F=D.style.webkitTransform;if(I&&(D.style.transform="none"),F&&(D.style.webkitTransform="none"),n.roundLengths)S=i.isHorizontal()?ur(D,"width",!0):ur(D,"height",!0);else{const W=t(C,"width"),$=t(C,"padding-left"),q=t(C,"padding-right"),Q=t(C,"margin-left"),Z=t(C,"margin-right"),_e=C.getPropertyValue("box-sizing");if(_e&&_e==="border-box")S=W+Q+Z;else{const{clientWidth:te,offsetWidth:k}=D;S=W+$+q+Q+Z+(k-te)}}I&&(D.style.transform=I),F&&(D.style.webkitTransform=F),n.roundLengths&&(S=Math.floor(S))}else S=(o-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(S=Math.floor(S)),f[N]&&(f[N].style[e("width")]=`${S}px`);f[N]&&(f[N].swiperSlideSize=S),_.push(S),n.centeredSlides?(b=b+S/2+A/2+x,A===0&&N!==0&&(b=b-o/2-x),N===0&&(b=b-o/2-x),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),R%n.slidesPerGroup===0&&p.push(b),g.push(b)):(n.roundLengths&&(b=Math.floor(b)),(R-Math.min(i.params.slidesPerGroupSkip,R))%i.params.slidesPerGroup===0&&p.push(b),g.push(b),b=b+S+x),i.virtualSize+=S+x,A=S,R+=1}}if(i.virtualSize=Math.max(i.virtualSize,o)+c,a&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(s.style.width=`${i.virtualSize+n.spaceBetween}px`),n.setWrapperSize&&(s.style[e("width")]=`${i.virtualSize+n.spaceBetween}px`),P&&i.grid.updateWrapperSize(S,p,e),!n.centeredSlides){const N=[];for(let D=0;D<p.length;D+=1){let C=p[D];n.roundLengths&&(C=Math.floor(C)),p[D]<=i.virtualSize-o&&N.push(C)}p=N,Math.floor(i.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(i.virtualSize-o)}if(u&&n.loop){const N=_[0]+x;if(n.slidesPerGroup>1){const D=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/n.slidesPerGroup),C=N*n.slidesPerGroup;for(let I=0;I<D;I+=1)p.push(p[p.length-1]+C)}for(let D=0;D<i.virtual.slidesBefore+i.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+N),g.push(g[g.length-1]+N),i.virtualSize+=N}if(p.length===0&&(p=[0]),n.spaceBetween!==0){const N=i.isHorizontal()&&a?"marginLeft":e("marginRight");f.filter((D,C)=>!n.cssMode||n.loop?!0:C!==f.length-1).forEach(D=>{D.style[N]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let N=0;_.forEach(C=>{N+=C+(n.spaceBetween?n.spaceBetween:0)}),N-=n.spaceBetween;const D=N-o;p=p.map(C=>C<0?-m:C>D?D+c:C)}if(n.centerInsufficientSlides){let N=0;if(_.forEach(D=>{N+=D+(n.spaceBetween?n.spaceBetween:0)}),N-=n.spaceBetween,N<o){const D=(o-N)/2;p.forEach((C,I)=>{p[I]=C-D}),g.forEach((C,I)=>{g[I]=C+D})}}if(Object.assign(i,{slides:f,snapGrid:p,slidesGrid:g,slidesSizesGrid:_}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ss(s,"--swiper-centered-offset-before",`${-p[0]}px`),ss(s,"--swiper-centered-offset-after",`${i.size/2-_[_.length-1]/2}px`);const N=-i.snapGrid[0],D=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(C=>C+N),i.slidesGrid=i.slidesGrid.map(C=>C+D)}if(h!==d&&i.emit("slidesLengthChange"),p.length!==v&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),g.length!==M&&i.emit("slidesGridLengthChange"),n.watchSlidesProgress&&i.updateSlidesOffset(),!u&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const N=`${n.containerModifierClass}backface-hidden`,D=i.el.classList.contains(N);h<=n.maxBackfaceHiddenSlides?D||i.el.classList.add(N):D&&i.el.classList.remove(N)}}function Rp(i){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let s=0,r;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const o=a=>n?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const a=e.activeIndex+r;if(a>e.slides.length&&!n)break;t.push(o(a))}else t.push(o(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const a=t[r].offsetHeight;s=a>s?a:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function Dp(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(i.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-i.cssOverflowAdjustment()}function Ip(i=this&&this.translate||0){const e=this,t=e.params,{slides:n,rtlTranslate:s,snapGrid:r}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-i;s&&(o=i),n.forEach(a=>{a.classList.remove(t.slideVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let a=0;a<n.length;a+=1){const l=n[a];let u=l.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=n[0].swiperSlideOffset);const d=(o+(t.centeredSlides?e.minTranslate():0)-u)/(l.swiperSlideSize+t.spaceBetween),f=(o-r[0]+(t.centeredSlides?e.minTranslate():0)-u)/(l.swiperSlideSize+t.spaceBetween),h=-(o-u),p=h+e.slidesSizesGrid[a];(h>=0&&h<e.size-1||p>1&&p<=e.size||h<=0&&p>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(a),n[a].classList.add(t.slideVisibleClass)),l.progress=s?-d:d,l.originalProgress=s?-f:f}}function Up(i){const e=this;if(typeof i>"u"){const d=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*d||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:a}=e;const l=r,u=o;if(n===0)s=0,r=!0,o=!0;else{s=(i-e.minTranslate())/n;const d=Math.abs(i-e.minTranslate())<1,f=Math.abs(i-e.maxTranslate())<1;r=d||s<=0,o=f||s>=1,d&&(s=0),f&&(s=1)}if(t.loop){const d=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[d],p=e.slidesGrid[f],g=e.slidesGrid[e.slidesGrid.length-1],_=Math.abs(i);_>=h?a=(_-h)/g:a=(_+g-p)/g,a>1&&(a-=1)}Object.assign(e,{progress:s,progressLoop:a,isBeginning:r,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),r&&!l&&e.emit("reachBeginning toEdge"),o&&!u&&e.emit("reachEnd toEdge"),(l&&!r||u&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}function Np(){const i=this,{slides:e,params:t,slidesEl:n,activeIndex:s}=i,r=i.virtual&&t.virtual.enabled,o=l=>Xt(n,`.${t.slideClass}${l}, swiper-slide${l}`)[0];e.forEach(l=>{l.classList.remove(t.slideActiveClass,t.slideNextClass,t.slidePrevClass)});let a;if(r)if(t.loop){let l=s-i.virtual.slidesBefore;l<0&&(l=i.virtual.slides.length+l),l>=i.virtual.slides.length&&(l-=i.virtual.slides.length),a=o(`[data-swiper-slide-index="${l}"]`)}else a=o(`[data-swiper-slide-index="${s}"]`);else a=e[s];if(a){a.classList.add(t.slideActiveClass);let l=Mp(a,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!l&&(l=e[0]),l&&l.classList.add(t.slideNextClass);let u=xp(a,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!u===0&&(u=e[e.length-1]),u&&u.classList.add(t.slidePrevClass)}i.emitSlidesClasses()}const as=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,n=e.closest(t());if(n){const s=n.querySelector(`.${i.params.lazyPreloaderClass}`);s&&s.remove()}},Ya=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},dr=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),s=i.activeIndex,r=s+n-1;if(i.params.rewind)for(let o=s-e;o<=r+e;o+=1){const a=(o%t+t)%t;a!==s&&a>r&&Ya(i,a)}else for(let o=Math.max(r-e,0);o<=Math.min(r+e,t-1);o+=1)o!==s&&o>r&&Ya(i,o)};function Op(i){const{slidesGrid:e,params:t}=i,n=i.rtlTranslate?i.translate:-i.translate;let s;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?n>=e[r]&&n<e[r+1]-(e[r+1]-e[r])/2?s=r:n>=e[r]&&n<e[r+1]&&(s=r+1):n>=e[r]&&(s=r);return t.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function zp(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:s,activeIndex:r,realIndex:o,snapIndex:a}=e;let l=i,u;const d=h=>{let p=h-e.virtual.slidesBefore;return p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),p};if(typeof l>"u"&&(l=Op(e)),n.indexOf(t)>=0)u=n.indexOf(t);else{const h=Math.min(s.slidesPerGroupSkip,l);u=h+Math.floor((l-h)/s.slidesPerGroup)}if(u>=n.length&&(u=n.length-1),l===r){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange")),e.params.loop&&e.virtual&&e.params.virtual.enabled&&(e.realIndex=d(l));return}let f;e.virtual&&s.virtual.enabled&&s.loop?f=d(l):e.slides[l]?f=parseInt(e.slides[l].getAttribute("data-swiper-slide-index")||l,10):f=l,Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:f,previousIndex:r,activeIndex:l}),e.initialized&&dr(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),o!==f&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function Fp(i){const e=this,t=e.params,n=i.closest(`.${t.slideClass}, swiper-slide`);let s=!1,r;if(n){for(let o=0;o<e.slides.length;o+=1)if(e.slides[o]===n){s=!0,r=o;break}}if(n&&s)e.clickedSlide=n,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=r;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}const Bp={updateSize:Lp,updateSlides:Pp,updateAutoHeight:Rp,updateSlidesOffset:Dp,updateSlidesProgress:Ip,updateProgress:Up,updateSlidesClasses:Np,updateActiveIndex:zp,updateClickedSlide:Fp};function Gp(i=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:n,translate:s,wrapperEl:r}=e;if(t.virtualTranslate)return n?-s:s;if(t.cssMode)return s;let o=_p(r,i);return o+=e.cssOverflowAdjustment(),n&&(o=-o),o||0}function kp(i,e){const t=this,{rtlTranslate:n,params:s,wrapperEl:r,progress:o}=t;let a=0,l=0;const u=0;t.isHorizontal()?a=n?-i:i:l=i,s.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,s.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:s.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let d;const f=t.maxTranslate()-t.minTranslate();f===0?d=0:d=(i-t.minTranslate())/f,d!==o&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function Vp(){return-this.snapGrid[0]}function Hp(){return-this.snapGrid[this.snapGrid.length-1]}function Wp(i=0,e=this.params.speed,t=!0,n=!0,s){const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),u=r.maxTranslate();let d;if(n&&i>l?d=l:n&&i<u?d=u:d=i,r.updateProgress(d),o.cssMode){const f=r.isHorizontal();if(e===0)a[f?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return No({swiper:r,targetPosition:-d,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}const qp={getTranslate:Gp,setTranslate:kp,minTranslate:Vp,maxTranslate:Hp,translateTo:Wp};function Xp(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`),t.emit("setTransition",i,e)}function Bo({swiper:i,runCallbacks:e,direction:t,step:n}){const{activeIndex:s,previousIndex:r}=i;let o=t;if(o||(s>r?o="next":s<r?o="prev":o="reset"),i.emit(`transition${n}`),e&&s!==r){if(o==="reset"){i.emit(`slideResetTransition${n}`);return}i.emit(`slideChangeTransition${n}`),o==="next"?i.emit(`slideNextTransition${n}`):i.emit(`slidePrevTransition${n}`)}}function jp(i=!0,e){const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),Bo({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function $p(i=!0,e){const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),Bo({swiper:t,runCallbacks:i,direction:e,step:"End"}))}const Yp={setTransition:Xp,transitionStart:jp,transitionEnd:$p};function Zp(i=0,e=this.params.speed,t=!0,n,s){typeof i=="string"&&(i=parseInt(i,10));const r=this;let o=i;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:f,rtlTranslate:h,wrapperEl:p,enabled:g}=r;if(r.animating&&a.preventInteractionOnTransition||!g&&!n&&!s)return!1;const _=Math.min(r.params.slidesPerGroupSkip,o);let m=_+Math.floor((o-_)/r.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const c=-l[m];if(a.normalizeSlideIndex)for(let M=0;M<u.length;M+=1){const x=-Math.floor(c*100),b=Math.floor(u[M]*100),A=Math.floor(u[M+1]*100);typeof u[M+1]<"u"?x>=b&&x<A-(A-b)/2?o=M:x>=b&&x<A&&(o=M+1):x>=b&&(o=M)}if(r.initialized&&o!==f&&(!r.allowSlideNext&&c<r.translate&&c<r.minTranslate()||!r.allowSlidePrev&&c>r.translate&&c>r.maxTranslate()&&(f||0)!==o))return!1;o!==(d||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(c);let v;if(o>f?v="next":o<f?v="prev":v="reset",h&&-c===r.translate||!h&&c===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),a.effect!=="slide"&&r.setTranslate(c),v!=="reset"&&(r.transitionStart(t,v),r.transitionEnd(t,v)),!1;if(a.cssMode){const M=r.isHorizontal(),x=h?c:-c;if(e===0){const b=r.virtual&&r.params.virtual.enabled;b&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),b&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[M?"scrollLeft":"scrollTop"]=x})):p[M?"scrollLeft":"scrollTop"]=x,b&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1})}else{if(!r.support.smoothScroll)return No({swiper:r,targetPosition:x,side:M?"left":"top"}),!0;p.scrollTo({[M?"left":"top"]:x,behavior:"smooth"})}return!0}return r.setTransition(e),r.setTranslate(c),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,n),r.transitionStart(t,v),e===0?r.transitionEnd(t,v):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(x){!r||r.destroyed||x.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,v))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Kp(i=0,e=this.params.speed,t=!0,n){typeof i=="string"&&(i=parseInt(i,10));const s=this;let r=i;return s.params.loop&&(s.virtual&&s.params.virtual.enabled?r=r+s.virtual.slidesBefore:r=s.getSlideIndexByData(r)),s.slideTo(r,e,t,n)}function Jp(i=this.params.speed,e=!0,t){const n=this,{enabled:s,params:r,animating:o}=n;if(!s)return n;let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<r.slidesPerGroupSkip?1:a,u=n.virtual&&r.virtual.enabled;if(r.loop){if(o&&!u&&r.loopPreventsSliding)return!1;n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft}return r.rewind&&n.isEnd?n.slideTo(0,i,e,t):n.slideTo(n.activeIndex+l,i,e,t)}function Qp(i=this.params.speed,e=!0,t){const n=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=n;if(!l)return n;const d=n.virtual&&s.virtual.enabled;if(s.loop){if(u&&!d&&s.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const f=a?n.translate:-n.translate;function h(c){return c<0?-Math.floor(Math.abs(c)):Math.floor(c)}const p=h(f),g=r.map(c=>h(c));let _=r[g.indexOf(p)-1];if(typeof _>"u"&&s.cssMode){let c;r.forEach((v,M)=>{p>=v&&(c=M)}),typeof c<"u"&&(_=r[c>0?c-1:c])}let m=0;if(typeof _<"u"&&(m=o.indexOf(_),m<0&&(m=n.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(m=m-n.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),s.rewind&&n.isBeginning){const c=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(c,i,e,t)}return n.slideTo(m,i,e,t)}function em(i=this.params.speed,e=!0,t){const n=this;return n.slideTo(n.activeIndex,i,e,t)}function tm(i=this.params.speed,e=!0,t,n=.5){const s=this;let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const u=s.snapGrid[a],d=s.snapGrid[a+1];l-u>(d-u)*n&&(r+=s.params.slidesPerGroup)}else{const u=s.snapGrid[a-1],d=s.snapGrid[a];l-u<=(d-u)*n&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,i,e,t)}function nm(){const i=this,{params:e,slidesEl:t}=i,n=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let s=i.clickedIndex,r;const o=i.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(i.animating)return;r=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<i.loopedSlides-n/2||s>i.slides.length-i.loopedSlides+n/2?(i.loopFix(),s=i.getSlideIndex(Xt(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),cr(()=>{i.slideTo(s)})):i.slideTo(s):s>i.slides.length-n?(i.loopFix(),s=i.getSlideIndex(Xt(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),cr(()=>{i.slideTo(s)})):i.slideTo(s)}else i.slideTo(s)}const im={slideTo:Zp,slideToLoop:Kp,slideNext:Jp,slidePrev:Qp,slideReset:em,slideToClosest:tm,slideToClickedSlide:nm};function sm(i){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;Xt(n,`.${t.slideClass}, swiper-slide`).forEach((r,o)=>{r.setAttribute("data-swiper-slide-index",o)}),e.loopFix({slideRealIndex:i,direction:t.centeredSlides?void 0:"next"})}function rm({slideRealIndex:i,slideTo:e=!0,direction:t,setTranslate:n,activeSlideIndex:s,byController:r,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled){e&&(!h.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=u,a.allowSlideNext=d,a.emit("loopFix");return}const p=h.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let g=h.loopedSlides||p;g%h.slidesPerGroup!==0&&(g+=h.slidesPerGroup-g%h.slidesPerGroup),a.loopedSlides=g;const _=[],m=[];let c=a.activeIndex;typeof s>"u"?s=a.getSlideIndex(a.slides.filter(A=>A.classList.contains(h.slideActiveClass))[0]):c=s;const v=t==="next"||!t,M=t==="prev"||!t;let x=0,b=0;if(s<g){x=Math.max(g-s,h.slidesPerGroup);for(let A=0;A<g-s;A+=1){const R=A-Math.floor(A/l.length)*l.length;_.push(l.length-R-1)}}else if(s>a.slides.length-g*2){b=Math.max(s-(a.slides.length-g*2),h.slidesPerGroup);for(let A=0;A<b;A+=1){const R=A-Math.floor(A/l.length)*l.length;m.push(R)}}if(M&&_.forEach(A=>{f.prepend(a.slides[A])}),v&&m.forEach(A=>{f.append(a.slides[A])}),a.recalcSlides(),h.slidesPerView==="auto"&&a.updateSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),e){if(_.length>0&&M)if(typeof i>"u"){const A=a.slidesGrid[c],P=a.slidesGrid[c+x]-A;o?a.setTranslate(a.translate-P):(a.slideTo(c+x,0,!1,!0),n&&(a.touches[a.isHorizontal()?"startX":"startY"]+=P))}else n&&a.slideToLoop(i,0,!1,!0);else if(m.length>0&&v)if(typeof i>"u"){const A=a.slidesGrid[c],P=a.slidesGrid[c-b]-A;o?a.setTranslate(a.translate-P):(a.slideTo(c-b,0,!1,!0),n&&(a.touches[a.isHorizontal()?"startX":"startY"]+=P))}else a.slideToLoop(i,0,!1,!0)}if(a.allowSlidePrev=u,a.allowSlideNext=d,a.controller&&a.controller.control&&!r){const A={slideRealIndex:i,slideTo:!1,direction:t,setTranslate:n,activeSlideIndex:s,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix(A)}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(A)}a.emit("loopFix")}function am(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const n=[];i.slides.forEach(s=>{const r=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;n[r]=s}),i.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),n.forEach(s=>{t.append(s)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}const om={loopCreate:sm,loopFix:rm,loopDestroy:am};function lm(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function cm(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}const um={setGrabCursor:lm,unsetGrabCursor:cm};function dm(i,e=this){function t(n){if(!n||n===$t()||n===Tt())return null;n.assignedSlot&&(n=n.assignedSlot);const s=n.closest(i);return!s&&!n.getRootNode?null:s||t(n.getRootNode().host)}return t(e)}function fm(i){const e=this,t=$t(),n=Tt(),s=e.touchEventsData;s.evCache.push(i);const{params:r,touches:o,enabled:a}=e;if(!a||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=i;l.originalEvent&&(l=l.originalEvent);let u=l.target;if(r.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(u)||"which"in l&&l.which===3||"button"in l&&l.button>0||s.isTouched&&s.isMoved)return;const d=!!r.noSwipingClass&&r.noSwipingClass!=="",f=i.composedPath?i.composedPath():i.path;d&&l.target&&l.target.shadowRoot&&f&&(u=f[0]);const h=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(l.target&&l.target.shadowRoot);if(r.noSwiping&&(p?dm(h,u):u.closest(h))){e.allowClick=!0;return}if(r.swipeHandler&&!u.closest(r.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const g=o.currentX,_=o.currentY,m=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,c=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(m&&(g<=c||g>=n.innerWidth-c))if(m==="prevent")i.preventDefault();else return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=_,s.touchStartTime=os(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let v=!0;u.matches(s.focusableElements)&&(v=!1,u.nodeName==="SELECT"&&(s.isTouched=!1)),t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==u&&t.activeElement.blur();const M=v&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||M)&&!u.isContentEditable&&l.preventDefault(),e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",l)}function hm(i){const e=$t(),t=this,n=t.touchEventsData,{params:s,touches:r,rtlTranslate:o,enabled:a}=t;if(!a||!s.simulateTouch&&i.pointerType==="mouse")return;let l=i;if(l.originalEvent&&(l=l.originalEvent),!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=n.evCache.findIndex(A=>A.pointerId===l.pointerId);u>=0&&(n.evCache[u]=l);const d=n.evCache.length>1?n.evCache[0]:l,f=d.pageX,h=d.pageY;if(l.preventedByNestedSwiper){r.startX=f,r.startY=h;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:f,startY:h,prevX:t.touches.currentX,prevY:t.touches.currentY,currentX:f,currentY:h}),n.touchStartTime=os());return}if(s.touchReleaseOnEdges&&!s.loop){if(t.isVertical()){if(h<r.startY&&t.translate<=t.maxTranslate()||h>r.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(f<r.startX&&t.translate<=t.maxTranslate()||f>r.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}if(n.allowTouchCallbacks&&t.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;r.currentX=f,r.currentY=h;const p=r.currentX-r.startX,g=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(p**2+g**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let A;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:p*p+g*g>=25&&(A=Math.atan2(Math.abs(g),Math.abs(p))*180/Math.PI,n.isScrolling=t.isHorizontal()?A>s.touchAngle:90-A>s.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||t.zoom&&t.params.zoom&&t.params.zoom.enabled&&n.evCache.length>1){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let _=t.isHorizontal()?p:g,m=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(_=Math.abs(_)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),r.diff=_,_*=s.touchRatio,o&&(_=-_,m=-m);const c=t.touchesDirection;t.swipeDirection=_>0?"prev":"next",t.touchesDirection=m>0?"prev":"next";const v=t.params.loop&&!s.cssMode;if(!n.isMoved){if(v&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(A)}n.allowMomentumBounce=!1,s.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let M;n.isMoved&&c!==t.touchesDirection&&v&&Math.abs(_)>=1&&(t.loopFix({direction:t.swipeDirection,setTranslate:!0}),M=!0),t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=_+n.startTranslate;let x=!0,b=s.resistanceRatio;if(s.touchReleaseOnEdges&&(b=0),_>0?(v&&!M&&n.currentTranslate>(s.centeredSlides?t.minTranslate()-t.size/2:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(x=!1,s.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+_)**b))):_<0&&(v&&!M&&n.currentTranslate<(s.centeredSlides?t.maxTranslate()+t.size/2:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(s.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(x=!1,s.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-_)**b))),x&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),s.threshold>0)if(Math.abs(_)>s.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&t.freeMode||s.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),t.params.freeMode&&s.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function pm(i){const e=this,t=e.touchEventsData,n=t.evCache.findIndex(M=>M.pointerId===i.pointerId);if(n>=0&&t.evCache.splice(n,1),["pointercancel","pointerout","pointerleave"].includes(i.type)&&!(i.type==="pointercancel"&&(e.browser.isSafari||e.browser.isWebView)))return;const{params:s,touches:r,rtlTranslate:o,slidesGrid:a,enabled:l}=e;if(!l||!s.simulateTouch&&i.pointerType==="mouse")return;let u=i;if(u.originalEvent&&(u=u.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",u),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&s.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}s.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=os(),f=d-t.touchStartTime;if(e.allowClick){const M=u.path||u.composedPath&&u.composedPath();e.updateClickedSlide(M&&M[0]||u.target),e.emit("tap click",u),f<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",u)}if(t.lastClickTime=os(),cr(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||r.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(s.followFinger?h=o?e.translate:-e.translate:h=-t.currentTranslate,s.cssMode)return;if(e.params.freeMode&&s.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}let p=0,g=e.slidesSizesGrid[0];for(let M=0;M<a.length;M+=M<s.slidesPerGroupSkip?1:s.slidesPerGroup){const x=M<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof a[M+x]<"u"?h>=a[M]&&h<a[M+x]&&(p=M,g=a[M+x]-a[M]):h>=a[M]&&(p=M,g=a[a.length-1]-a[a.length-2])}let _=null,m=null;s.rewind&&(e.isBeginning?m=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(_=0));const c=(h-a[p])/g,v=p<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(f>s.longSwipesMs){if(!s.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(c>=s.longSwipesRatio?e.slideTo(s.rewind&&e.isEnd?_:p+v):e.slideTo(p)),e.swipeDirection==="prev"&&(c>1-s.longSwipesRatio?e.slideTo(p+v):m!==null&&c<0&&Math.abs(c)>s.longSwipesRatio?e.slideTo(m):e.slideTo(p))}else{if(!s.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(u.target===e.navigation.nextEl||u.target===e.navigation.prevEl)?u.target===e.navigation.nextEl?e.slideTo(p+v):e.slideTo(p):(e.swipeDirection==="next"&&e.slideTo(_!==null?_:p+v),e.swipeDirection==="prev"&&e.slideTo(m!==null?m:p))}}function Za(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:s,snapGrid:r}=i,o=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!a?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!o?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=s,i.allowSlideNext=n,i.params.watchOverflow&&r!==i.snapGrid&&i.checkOverflow()}function mm(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function gm(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=i;if(!n)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let s;const r=i.maxTranslate()-i.minTranslate();r===0?s=0:s=(i.translate-i.minTranslate())/r,s!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function _m(i){const e=this;as(e,i.target),e.update()}let Ka=!1;function vm(){}const Go=(i,e)=>{const t=$t(),{params:n,el:s,wrapperEl:r,device:o}=i,a=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",u=e;s[l]("pointerdown",i.onTouchStart,{passive:!1}),t[l]("pointermove",i.onTouchMove,{passive:!1,capture:a}),t[l]("pointerup",i.onTouchEnd,{passive:!0}),t[l]("pointercancel",i.onTouchEnd,{passive:!0}),t[l]("pointerout",i.onTouchEnd,{passive:!0}),t[l]("pointerleave",i.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&s[l]("click",i.onClick,!0),n.cssMode&&r[l]("scroll",i.onScroll),n.updateOnWindowResize?i[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Za,!0):i[u]("observerUpdate",Za,!0),s[l]("load",i.onLoad,{capture:!0})};function xm(){const i=this,e=$t(),{params:t}=i;i.onTouchStart=fm.bind(i),i.onTouchMove=hm.bind(i),i.onTouchEnd=pm.bind(i),t.cssMode&&(i.onScroll=gm.bind(i)),i.onClick=mm.bind(i),i.onLoad=_m.bind(i),Ka||(e.addEventListener("touchstart",vm),Ka=!0),Go(i,"on")}function Mm(){Go(this,"off")}const Sm={attachEvents:xm,detachEvents:Mm},Ja=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function ym(){const i=this,{realIndex:e,initialized:t,params:n,el:s}=i,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=i.getBreakpoint(r,i.params.breakpointsBase,i.el);if(!o||i.currentBreakpoint===o)return;const l=(o in r?r[o]:void 0)||i.originalParams,u=Ja(i,n),d=Ja(i,l),f=n.enabled;u&&!d?(s.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),i.emitContainerClasses()):!u&&d&&(s.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&s.classList.add(`${n.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(_=>{const m=n[_]&&n[_].enabled,c=l[_]&&l[_].enabled;m&&!c&&i[_].disable(),!m&&c&&i[_].enable()});const h=l.direction&&l.direction!==n.direction,p=n.loop&&(l.slidesPerView!==n.slidesPerView||h);h&&t&&i.changeDirection(),wt(i.params,l);const g=i.params.enabled;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),f&&!g?i.disable():!f&&g&&i.enable(),i.currentBreakpoint=o,i.emit("_beforeBreakpoint",l),p&&t&&(i.loopDestroy(),i.loopCreate(e),i.updateSlides()),i.emit("breakpoint",l)}function bm(i,e="window",t){if(!i||e==="container"&&!t)return;let n=!1;const s=Tt(),r=e==="window"?s.innerHeight:t.clientHeight,o=Object.keys(i).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:r*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:u}=o[a];e==="window"?s.matchMedia(`(min-width: ${u}px)`).matches&&(n=l):u<=t.clientWidth&&(n=l)}return n||"max"}const wm={setBreakpoint:ym,getBreakpoint:bm};function Tm(i,e){const t=[];return i.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(s=>{n[s]&&t.push(e+s)}):typeof n=="string"&&t.push(e+n)}),t}function Em(){const i=this,{classNames:e,params:t,rtl:n,el:s,device:r}=i,o=Tm(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),s.classList.add(...e),i.emitContainerClasses()}function Am(){const i=this,{el:e,classNames:t}=i;e.classList.remove(...t),i.emitContainerClasses()}const Cm={addClasses:Em,removeClasses:Am};function Lm(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:n}=t;if(n){const s=i.slides.length-1,r=i.slidesGrid[s]+i.slidesSizesGrid[s]+n*2;i.isLocked=i.size>r}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}const Pm={checkOverflow:Lm},Qa={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Rm(i,e){return function(n={}){const s=Object.keys(n)[0],r=n[s];if(typeof r!="object"||r===null){wt(e,n);return}if(["navigation","pagination","scrollbar"].indexOf(s)>=0&&i[s]===!0&&(i[s]={auto:!0}),!(s in i&&"enabled"in r)){wt(e,n);return}i[s]===!0&&(i[s]={enabled:!0}),typeof i[s]=="object"&&!("enabled"in i[s])&&(i[s].enabled=!0),i[s]||(i[s]={enabled:!1}),wt(e,n)}}const Js={eventsEmitter:Cp,update:Bp,translate:qp,transition:Yp,slide:im,loop:om,grabCursor:um,events:Sm,breakpoints:wm,checkOverflow:Pm,classes:Cm},Qs={};class Lt{constructor(...e){let t,n;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?n=e[0]:[t,n]=e,n||(n={}),n=wt({},n),t&&!n.el&&(n.el=t);const s=$t();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const l=[];return s.querySelectorAll(n.el).forEach(u=>{const d=wt({},n,{el:u});l.push(new Lt(d))}),l}const r=this;r.__swiper__=!0,r.support=Fo(),r.device=bp({userAgent:n.userAgent}),r.browser=Tp(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],n.modules&&Array.isArray(n.modules)&&r.modules.push(...n.modules);const o={};r.modules.forEach(l=>{l({params:n,swiper:r,extendParams:Rm(n,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const a=wt({},Qa,o);return r.params=wt({},a,Qs,n),r.originalParams=wt({},r.params),r.passedParams=wt({},n),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getSlideIndex(e){const{slidesEl:t,params:n}=this,s=Xt(t,`.${n.slideClass}, swiper-slide`),r=ls(s[0]);return ls(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=Xt(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const s=n.minTranslate(),o=(n.maxTranslate()-s)*e+s;n.translateTo(o,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const s=e.getSlideClasses(n);t.push({slideEl:n,classNames:s}),e.emit("_slideClass",n,s)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const n=this,{params:s,slides:r,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:u}=n;let d=1;if(s.centeredSlides){let f=r[u].swiperSlideSize,h;for(let p=u+1;p<r.length;p+=1)r[p]&&!h&&(f+=r[p].swiperSlideSize,d+=1,f>l&&(h=!0));for(let p=u-1;p>=0;p-=1)r[p]&&!h&&(f+=r[p].swiperSlideSize,d+=1,f>l&&(h=!0))}else if(e==="current")for(let f=u+1;f<r.length;f+=1)(t?o[f]+a[f]-o[u]<l:o[f]-o[u]<l)&&(d+=1);else for(let f=u-1;f>=0;f-=1)o[u]-o[f]<l&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&as(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(e.params.freeMode&&e.params.freeMode.enabled)s(),e.params.autoHeight&&e.updateAutoHeight();else{if((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const o=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(o.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||s()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,s=n.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${s}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(s()):Xt(n,s())[0])();return!o&&t.params.createElements&&(o=Oo("div",t.params.wrapperClass),n.append(o),Xt(n,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement?n:o,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||cn(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||cn(n,"direction")==="rtl"),wrongRTL:cn(o,"display")==="-webkit-box"}),!0}init(e){const t=this;return t.initialized||t.mount(e)===!1||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete?as(t,s):s.addEventListener("load",r=>{as(t,r.target)})}),dr(t),t.initialized=!0,dr(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:s,el:r,wrapperEl:o,slides:a}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),s.loop&&n.loopDestroy(),t&&(n.removeClasses(),r.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el.swiper=null,mp(n)),n.destroyed=!0),null}static extendDefaults(e){wt(Qs,e)}static get extendedDefaults(){return Qs}static get defaults(){return Qa}static installModule(e){Lt.prototype.__modules__||(Lt.prototype.__modules__=[]);const t=Lt.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Lt.installModule(t)),Lt):(Lt.installModule(e),Lt)}}Object.keys(Js).forEach(i=>{Object.keys(Js[i]).forEach(e=>{Lt.prototype[e]=Js[i][e]})});Lt.use([Ep,Ap]);function ko(i,e,t,n){return i.params.createElements&&Object.keys(n).forEach(s=>{if(!t[s]&&t.auto===!0){let r=Xt(i.el,`.${n[s]}`)[0];r||(r=Oo("div",n[s]),r.className=n[s],i.el.append(r)),t[s]=r,e[s]=r}}),t}function Dm({swiper:i,extendParams:e,on:t,emit:n}){e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),i.navigation={nextEl:null,prevEl:null};const s=g=>(Array.isArray(g)||(g=[g].filter(_=>!!_)),g);function r(g){let _;return g&&typeof g=="string"&&i.isElement&&(_=i.el.shadowRoot.querySelector(g),_)?_:(g&&(typeof g=="string"&&(_=[...document.querySelectorAll(g)]),i.params.uniqueNavElements&&typeof g=="string"&&_.length>1&&i.el.querySelectorAll(g).length===1&&(_=i.el.querySelector(g))),g&&!_?g:_)}function o(g,_){const m=i.params.navigation;g=s(g),g.forEach(c=>{c&&(c.classList[_?"add":"remove"](...m.disabledClass.split(" ")),c.tagName==="BUTTON"&&(c.disabled=_),i.params.watchOverflow&&i.enabled&&c.classList[i.isLocked?"add":"remove"](m.lockClass))})}function a(){const{nextEl:g,prevEl:_}=i.navigation;if(i.params.loop){o(_,!1),o(g,!1);return}o(_,i.isBeginning&&!i.params.rewind),o(g,i.isEnd&&!i.params.rewind)}function l(g){g.preventDefault(),!(i.isBeginning&&!i.params.loop&&!i.params.rewind)&&(i.slidePrev(),n("navigationPrev"))}function u(g){g.preventDefault(),!(i.isEnd&&!i.params.loop&&!i.params.rewind)&&(i.slideNext(),n("navigationNext"))}function d(){const g=i.params.navigation;if(i.params.navigation=ko(i,i.originalParams.navigation,i.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let _=r(g.nextEl),m=r(g.prevEl);Object.assign(i.navigation,{nextEl:_,prevEl:m}),_=s(_),m=s(m);const c=(v,M)=>{v&&v.addEventListener("click",M==="next"?u:l),!i.enabled&&v&&v.classList.add(...g.lockClass.split(" "))};_.forEach(v=>c(v,"next")),m.forEach(v=>c(v,"prev"))}function f(){let{nextEl:g,prevEl:_}=i.navigation;g=s(g),_=s(_);const m=(c,v)=>{c.removeEventListener("click",v==="next"?u:l),c.classList.remove(...i.params.navigation.disabledClass.split(" "))};g.forEach(c=>m(c,"next")),_.forEach(c=>m(c,"prev"))}t("init",()=>{i.params.navigation.enabled===!1?p():(d(),a())}),t("toEdge fromEdge lock unlock",()=>{a()}),t("destroy",()=>{f()}),t("enable disable",()=>{let{nextEl:g,prevEl:_}=i.navigation;g=s(g),_=s(_),[...g,..._].filter(m=>!!m).forEach(m=>m.classList[i.enabled?"remove":"add"](i.params.navigation.lockClass))}),t("click",(g,_)=>{let{nextEl:m,prevEl:c}=i.navigation;m=s(m),c=s(c);const v=_.target;if(i.params.navigation.hideOnClick&&!c.includes(v)&&!m.includes(v)){if(i.pagination&&i.params.pagination&&i.params.pagination.clickable&&(i.pagination.el===v||i.pagination.el.contains(v)))return;let M;m.length?M=m[0].classList.contains(i.params.navigation.hiddenClass):c.length&&(M=c[0].classList.contains(i.params.navigation.hiddenClass)),n(M===!0?"navigationShow":"navigationHide"),[...m,...c].filter(x=>!!x).forEach(x=>x.classList.toggle(i.params.navigation.hiddenClass))}});const h=()=>{i.el.classList.remove(...i.params.navigation.navigationDisabledClass.split(" ")),d(),a()},p=()=>{i.el.classList.add(...i.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(i.navigation,{enable:h,disable:p,update:a,init:d,destroy:f})}function ci(i=""){return`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Im({swiper:i,extendParams:e,on:t,emit:n}){const s="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:c=>c,formatFractionTotal:c=>c,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),i.pagination={el:null,bullets:[]};let r,o=0;const a=c=>(Array.isArray(c)||(c=[c].filter(v=>!!v)),c);function l(){return!i.params.pagination.el||!i.pagination.el||Array.isArray(i.pagination.el)&&i.pagination.el.length===0}function u(c,v){const{bulletActiveClass:M}=i.params.pagination;c&&(c=c[`${v==="prev"?"previous":"next"}ElementSibling`],c&&(c.classList.add(`${M}-${v}`),c=c[`${v==="prev"?"previous":"next"}ElementSibling`],c&&c.classList.add(`${M}-${v}-${v}`)))}function d(c){const v=c.target.closest(ci(i.params.pagination.bulletClass));if(!v)return;c.preventDefault();const M=ls(v)*i.params.slidesPerGroup;if(i.params.loop){if(i.realIndex===M)return;const x=i.getSlideIndexByData(M),b=i.getSlideIndexByData(i.realIndex);x>i.slides.length-i.loopedSlides&&i.loopFix({direction:x>b?"next":"prev",activeSlideIndex:x,slideTo:!1}),i.slideToLoop(M)}else i.slideTo(M)}function f(){const c=i.rtl,v=i.params.pagination;if(l())return;let M=i.pagination.el;M=a(M);let x,b;const A=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.slides.length,R=i.params.loop?Math.ceil(A/i.params.slidesPerGroup):i.snapGrid.length;if(i.params.loop?(b=i.previousRealIndex||0,x=i.params.slidesPerGroup>1?Math.floor(i.realIndex/i.params.slidesPerGroup):i.realIndex):typeof i.snapIndex<"u"?(x=i.snapIndex,b=i.previousSnapIndex):(b=i.previousIndex||0,x=i.activeIndex||0),v.type==="bullets"&&i.pagination.bullets&&i.pagination.bullets.length>0){const P=i.pagination.bullets;let S,E,N;if(v.dynamicBullets&&(r=ur(P[0],i.isHorizontal()?"width":"height",!0),M.forEach(D=>{D.style[i.isHorizontal()?"width":"height"]=`${r*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&b!==void 0&&(o+=x-(b||0),o>v.dynamicMainBullets-1?o=v.dynamicMainBullets-1:o<0&&(o=0)),S=Math.max(x-o,0),E=S+(Math.min(P.length,v.dynamicMainBullets)-1),N=(E+S)/2),P.forEach(D=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${v.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();D.classList.remove(...C)}),M.length>1)P.forEach(D=>{const C=ls(D);C===x&&D.classList.add(...v.bulletActiveClass.split(" ")),v.dynamicBullets&&(C>=S&&C<=E&&D.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),C===S&&u(D,"prev"),C===E&&u(D,"next"))});else{const D=P[x];if(D&&D.classList.add(...v.bulletActiveClass.split(" ")),v.dynamicBullets){const C=P[S],I=P[E];for(let F=S;F<=E;F+=1)P[F]&&P[F].classList.add(...`${v.bulletActiveClass}-main`.split(" "));u(C,"prev"),u(I,"next")}}if(v.dynamicBullets){const D=Math.min(P.length,v.dynamicMainBullets+4),C=(r*D-r)/2-N*r,I=c?"right":"left";P.forEach(F=>{F.style[i.isHorizontal()?I:"top"]=`${C}px`})}}M.forEach((P,S)=>{if(v.type==="fraction"&&(P.querySelectorAll(ci(v.currentClass)).forEach(E=>{E.textContent=v.formatFractionCurrent(x+1)}),P.querySelectorAll(ci(v.totalClass)).forEach(E=>{E.textContent=v.formatFractionTotal(R)})),v.type==="progressbar"){let E;v.progressbarOpposite?E=i.isHorizontal()?"vertical":"horizontal":E=i.isHorizontal()?"horizontal":"vertical";const N=(x+1)/R;let D=1,C=1;E==="horizontal"?D=N:C=N,P.querySelectorAll(ci(v.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${C})`,I.style.transitionDuration=`${i.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(P.innerHTML=v.renderCustom(i,x+1,R),S===0&&n("paginationRender",P)):(S===0&&n("paginationRender",P),n("paginationUpdate",P)),i.params.watchOverflow&&i.enabled&&P.classList[i.isLocked?"add":"remove"](v.lockClass)})}function h(){const c=i.params.pagination;if(l())return;const v=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.slides.length;let M=i.pagination.el;M=a(M);let x="";if(c.type==="bullets"){let b=i.params.loop?Math.ceil(v/i.params.slidesPerGroup):i.snapGrid.length;i.params.freeMode&&i.params.freeMode.enabled&&b>v&&(b=v);for(let A=0;A<b;A+=1)c.renderBullet?x+=c.renderBullet.call(i,A,c.bulletClass):x+=`<${c.bulletElement} class="${c.bulletClass}"></${c.bulletElement}>`}c.type==="fraction"&&(c.renderFraction?x=c.renderFraction.call(i,c.currentClass,c.totalClass):x=`<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`),c.type==="progressbar"&&(c.renderProgressbar?x=c.renderProgressbar.call(i,c.progressbarFillClass):x=`<span class="${c.progressbarFillClass}"></span>`),i.pagination.bullets=[],M.forEach(b=>{c.type!=="custom"&&(b.innerHTML=x||""),c.type==="bullets"&&i.pagination.bullets.push(...b.querySelectorAll(ci(c.bulletClass)))}),c.type!=="custom"&&n("paginationRender",M[0])}function p(){i.params.pagination=ko(i,i.originalParams.pagination,i.params.pagination,{el:"swiper-pagination"});const c=i.params.pagination;if(!c.el)return;let v;typeof c.el=="string"&&i.isElement&&(v=i.el.shadowRoot.querySelector(c.el)),!v&&typeof c.el=="string"&&(v=[...document.querySelectorAll(c.el)]),v||(v=c.el),!(!v||v.length===0)&&(i.params.uniqueNavElements&&typeof c.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...i.el.querySelectorAll(c.el)],v.length>1&&(v=v.filter(M=>zo(M,".swiper")[0]===i.el)[0])),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(i.pagination,{el:v}),v=a(v),v.forEach(M=>{c.type==="bullets"&&c.clickable&&M.classList.add(c.clickableClass),M.classList.add(c.modifierClass+c.type),M.classList.add(i.isHorizontal()?c.horizontalClass:c.verticalClass),c.type==="bullets"&&c.dynamicBullets&&(M.classList.add(`${c.modifierClass}${c.type}-dynamic`),o=0,c.dynamicMainBullets<1&&(c.dynamicMainBullets=1)),c.type==="progressbar"&&c.progressbarOpposite&&M.classList.add(c.progressbarOppositeClass),c.clickable&&M.addEventListener("click",d),i.enabled||M.classList.add(c.lockClass)}))}function g(){const c=i.params.pagination;if(l())return;let v=i.pagination.el;v&&(v=a(v),v.forEach(M=>{M.classList.remove(c.hiddenClass),M.classList.remove(c.modifierClass+c.type),M.classList.remove(i.isHorizontal()?c.horizontalClass:c.verticalClass),c.clickable&&M.removeEventListener("click",d)})),i.pagination.bullets&&i.pagination.bullets.forEach(M=>M.classList.remove(...c.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!i.pagination||!i.pagination.el)return;const c=i.params.pagination;let{el:v}=i.pagination;v=a(v),v.forEach(M=>{M.classList.remove(c.horizontalClass,c.verticalClass),M.classList.add(i.isHorizontal()?c.horizontalClass:c.verticalClass)})}),t("init",()=>{i.params.pagination.enabled===!1?m():(p(),h(),f())}),t("activeIndexChange",()=>{typeof i.snapIndex>"u"&&f()}),t("snapIndexChange",()=>{f()}),t("snapGridLengthChange",()=>{h(),f()}),t("destroy",()=>{g()}),t("enable disable",()=>{let{el:c}=i.pagination;c&&(c=a(c),c.forEach(v=>v.classList[i.enabled?"remove":"add"](i.params.pagination.lockClass)))}),t("lock unlock",()=>{f()}),t("click",(c,v)=>{const M=v.target;let{el:x}=i.pagination;if(Array.isArray(x)||(x=[x].filter(b=>!!b)),i.params.pagination.el&&i.params.pagination.hideOnClick&&x&&x.length>0&&!M.classList.contains(i.params.pagination.bulletClass)){if(i.navigation&&(i.navigation.nextEl&&M===i.navigation.nextEl||i.navigation.prevEl&&M===i.navigation.prevEl))return;const b=x[0].classList.contains(i.params.pagination.hiddenClass);n(b===!0?"paginationShow":"paginationHide"),x.forEach(A=>A.classList.toggle(i.params.pagination.hiddenClass))}});const _=()=>{i.el.classList.remove(i.params.pagination.paginationDisabledClass);let{el:c}=i.pagination;c&&(c=a(c),c.forEach(v=>v.classList.remove(i.params.pagination.paginationDisabledClass))),p(),h(),f()},m=()=>{i.el.classList.add(i.params.pagination.paginationDisabledClass);let{el:c}=i.pagination;c&&(c=a(c),c.forEach(v=>v.classList.add(i.params.pagination.paginationDisabledClass))),g()};Object.assign(i.pagination,{enable:_,disable:m,render:h,update:f,init:p,destroy:g})}function Um({swiper:i,extendParams:e,on:t,emit:n,params:s}){i.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,a=s&&s.autoplay?s.autoplay.delay:3e3,l=s&&s.autoplay?s.autoplay.delay:3e3,u,d=new Date().getTime,f,h,p,g,_,m;function c(W){!i||i.destroyed||!i.wrapperEl||W.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",c),P())}const v=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?f=!0:f&&(l=u,f=!1);const W=i.autoplay.paused?u:d+l-new Date().getTime();i.autoplay.timeLeft=W,n("autoplayTimeLeft",W,W/a),o=requestAnimationFrame(()=>{v()})},M=()=>{let W;return i.virtual&&i.params.virtual.enabled?W=i.slides.filter(q=>q.classList.contains("swiper-slide-active"))[0]:W=i.slides[i.activeIndex],W?parseInt(W.getAttribute("data-swiper-autoplay"),10):void 0},x=W=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(o),v();let $=typeof W>"u"?i.params.autoplay.delay:W;a=i.params.autoplay.delay,l=i.params.autoplay.delay;const q=M();!Number.isNaN(q)&&q>0&&typeof W>"u"&&($=q,a=q,l=q),u=$;const Q=i.params.speed,Z=()=>{!i||i.destroyed||(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(Q,!0,!0),n("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,Q,!0,!0),n("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(Q,!0,!0),n("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,Q,!0,!0),n("autoplay")),i.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return $>0?(clearTimeout(r),r=setTimeout(()=>{Z()},$)):requestAnimationFrame(()=>{Z()}),$},b=()=>{i.autoplay.running=!0,x(),n("autoplayStart")},A=()=>{i.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),n("autoplayStop")},R=(W,$)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(r),W||(m=!0);const q=()=>{n("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",c):P()};if(i.autoplay.paused=!0,$){_&&(u=i.params.autoplay.delay),_=!1,q();return}u=(u||i.params.autoplay.delay)-(new Date().getTime()-d),!(i.isEnd&&u<0&&!i.params.loop)&&(u<0&&(u=0),q())},P=()=>{i.isEnd&&u<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(d=new Date().getTime(),m?(m=!1,x(u)):x(),i.autoplay.paused=!1,n("autoplayResume"))},S=()=>{if(i.destroyed||!i.autoplay.running)return;const W=$t();W.visibilityState==="hidden"&&(m=!0,R(!0)),W.visibilityState==="visible"&&P()},E=W=>{W.pointerType==="mouse"&&(m=!0,R(!0))},N=W=>{W.pointerType==="mouse"&&i.autoplay.paused&&P()},D=()=>{i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",E),i.el.addEventListener("pointerleave",N))},C=()=>{i.el.removeEventListener("pointerenter",E),i.el.removeEventListener("pointerleave",N)},I=()=>{$t().addEventListener("visibilitychange",S)},F=()=>{$t().removeEventListener("visibilitychange",S)};t("init",()=>{i.params.autoplay.enabled&&(D(),I(),d=new Date().getTime(),b())}),t("destroy",()=>{C(),F(),i.autoplay.running&&A()}),t("beforeTransitionStart",(W,$,q)=>{i.destroyed||!i.autoplay.running||(q||!i.params.autoplay.disableOnInteraction?R(!0,!0):A())}),t("sliderFirstMove",()=>{if(!(i.destroyed||!i.autoplay.running)){if(i.params.autoplay.disableOnInteraction){A();return}h=!0,p=!1,m=!1,g=setTimeout(()=>{m=!0,p=!0,R(!0)},200)}}),t("touchEnd",()=>{if(!(i.destroyed||!i.autoplay.running||!h)){if(clearTimeout(g),clearTimeout(r),i.params.autoplay.disableOnInteraction){p=!1,h=!1;return}p&&i.params.cssMode&&P(),p=!1,h=!1}}),t("slideChange",()=>{i.destroyed||!i.autoplay.running||(_=!0)}),Object.assign(i.autoplay,{start:b,stop:A,pause:R,resume:P})}window.addEventListener("scroll",function(){var i=window.innerHeight-70;window.pageYOffset>i?document.querySelector("nav").classList.add("fixed"):document.querySelector("nav").classList.remove("fixed")});function cs(i){new Lt(".mySwiper",{modules:[Dm,Im,Um],speed:500,slidesPerView:i,spaceBetween:30,freeMode:!0,grabCursor:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:1500,disableOnInteraction:!0}})}var Vo=window.matchMedia("(max-width: 600px)"),Ho=window.matchMedia("(max-width: 1140px)");function Wo(i){Vo.matches?cs(1):cs(2)}Wo();Vo.addListener(Wo);function qo(i){Ho.matches,cs(2)}qo();Ho.addListener(qo);document.querySelector("#contact-form").addEventListener("submit",i=>{i.preventDefault(),Email.send({SecureToken:"938bc9ef-b493-46b1-889a-3ed5e920edf8",To:"manmeets1100@gmail.com",From:"mnmyt.dev@gmail.com",Subject:"Inquiry from My Website",Body:"Name: "+i.target.elements.name.value+"<br> Email: "+i.target.elements.email.value+"<br> Message: "+i.target.elements.message.value}).then(e=>alert("Thank you for connecting with me")),i.target.elements.name.value="",i.target.elements.email.value="",i.target.elements.message.value=""});let Ft,Ve,$n,eo,Xo=0,jo=0,$o=window.innerWidth/2,Yo=window.innerHeight/2,fi,hi,pi,mi,gi,_i,vi,xi,Mi,Si,Xn,fr;Nm();Ko();function Nm(){Ft=new Rt(50,window.innerWidth/window.innerHeight,1,1e4),Ve=new np,Ve.fog=new vr(255,.001);const i=new Dt,e=[],t=2e3;for(let I=0;I<2e4;I++){const F=(Math.random()*t+Math.random()*t)/2-t/2,W=(Math.random()*t+Math.random()*t)/2-t/2,$=(Math.random()*t+Math.random()*t)/2-t/2;e.push(F,W,$)}i.setAttribute("position",new ht(e,3)),eo=new Ro({size:2,color:16777215});const n=new rp(i,eo);Ve.add(n),$n=new Lo,$n.setPixelRatio(window.devicePixelRatio),$n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild($n.domElement),document.body.style.touchAction="none",document.body.addEventListener("pointermove",zm),window.addEventListener("resize",Om);const s=new bt().load("res/pics/normal_texture1.jpg"),r=new bt().load("res/pics/normal_texture2.jpg"),o=new bt().load("res/pics/normal_texture3.jpg"),a=new bt().load("res/pics/sun map.jpg");let l=new Ct(200,64,64);const u=new Ht({normalMap:o,map:a,roughness:.1});pi=new nt(l,u),pi.position.z=100,pi.position.x=-600,Ve.add(pi);const d=new bt().load("res/pics/mercury-map.jpg");l=new Ct(5,64,64);const f=new Ht({normalMap:r,map:d,roughness:.1});_i=new nt(l,f),_i.position.z=100,_i.position.x=-300,Ve.add(_i);const h=new bt().load("res/pics/venus-map.jpg");l=new Ct(13,64,64);const p=new Ht({normalMap:o,map:h,roughness:.1});vi=new nt(l,p),vi.position.z=-200,vi.position.x=-200,Ve.add(vi);const g=new bt().load("res/pics/earth_daymap.jpg");l=new Ct(13,64,64);const _=new Ht({normalMap:s,map:g,roughness:.1});hi=new nt(l,_),hi.position.z=200,hi.position.x=-100,Ve.add(hi);const m=new bt().load("res/pics/gas-planet-map.jpg");l=new Ct(10,64,64);const c=new Ht({normalMap:r,map:m,roughness:.1});fi=new nt(l,c),fi.position.z=-15,fi.position.x=0,Ve.add(fi);const v=new bt().load("res/pics/mars-map.jpg");l=new Ct(7,64,64);const M=new Ht({normalMap:o,map:v,roughness:.1});xi=new nt(l,M),xi.position.z=-100,xi.position.x=100,Ve.add(xi);const x=new bt().load("res/pics/jupiter-map.jpg");l=new Ct(50,64,64);const b=new Ht({normalMap:o,map:x,roughness:.1});mi=new nt(l,b),mi.position.z=-800,mi.position.x=10,Ve.add(mi);const A=new bt().load("res/pics/saturn-map.jpg");l=new Ct(60,64,64);const R=new Ht({normalMap:r,map:A,roughness:.1});Mi=new nt(l,R),Mi.position.z=1e3,Mi.position.x=10,Ve.add(Mi);const P=new bt().load("res/pics/uranus-map.jpg");l=new Ct(40,64,64);const S=new Ht({normalMap:r,map:P,roughness:.1});Si=new nt(l,S),Si.position.z=500,Si.position.x=500,Ve.add(Si);const E=new bt().load("res/pics/neptune-map.jpg");l=new Ct(17,64,64);const N=new Ht({normalMap:r,map:E,roughness:.1});gi=new nt(l,N),gi.position.z=100,gi.position.x=500,Ve.add(gi);const D=new dp(16777215);D.position.set(-600,0,100).normalize;const C=new fp(16777215,.1);Ve.add(D,C),fr=new hp(2e3,50)}function Zo(){Xn=document.body.getBoundingClientRect().top,Xn<-500&&(Ve.rotation.x=0,Ve.rotation.y=0,to(new O(20,-1,7)),Ve.remove(fr)),Xn<-780&&(Ve.rotation.y=Xn*-.0013-1),Xn>=-600&&(to(new O(500,300,100)),Ve.add(fr))}document.body.onscroll=Zo;Zo();function to(i){var e=Ft.position.clone(),t=i.clone(),n=500,s=null;function r(o){s||(s=o);var a=o-s,l=a/n;l=Math.min(l,1);var u=new O().lerpVectors(e,t,l);Ft.position.copy(u),l<1&&requestAnimationFrame(r)}requestAnimationFrame(r)}function Om(){$o=window.innerWidth/2,Yo=window.innerHeight/2,Ft.aspect=window.innerWidth/window.innerHeight,Ft.updateProjectionMatrix(),$n.setSize(window.innerWidth,window.innerHeight)}function zm(i){Xo=i.clientX-$o,jo=i.clientY-Yo}function Ko(){requestAnimationFrame(Ko),fi.rotation.y+=.002,hi.rotation.y+=.002,pi.rotation.y+=.001,mi.rotation.y+=.003,gi.rotation.y+=.005,_i.rotation.y+=.001,vi.rotation.y+=.004,xi.rotation.y+=.003,Mi.rotation.y+=5e-4,Si.rotation.y+=9e-4,Fm()}function Fm(){Ft.lookAt(Ve.position),$n.render(Ve,Ft),Xn>=-600&&(Ft.position.x+=(Xo*2-Ft.position.x)*.02,Ft.position.y+=(-jo*2-Ft.position.y)*.02,Ve.rotation.x+=.001,Ve.rotation.y+=.002)}
