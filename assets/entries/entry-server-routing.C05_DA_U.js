const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_index.iG4a0tyV.js","assets/static/index.CfJSgMc2.css"])))=>i.map(i=>d[i]);
function ye(e){return Array.from(new Set(e))}const Le="0.4.182",Q={projectName:"Vike",projectVersion:Le},re=`_${Q.projectName.toLowerCase()}`;function k(e,t){const n=Fe();return n[e]=n[e]||t}function Fe(){return globalThis[re]=globalThis[re]||{}}const E=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),$=k("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),We="The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",Ee="Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";function ve(){{const e=ye($.instances);ze(e.length<=1,`vike@${E.bold(e[0])} and vike@${E.bold(e[1])} loaded but only one version should be loaded`)}$.checkSingleInstance&&$.instances.length>1&&J(!1,Ee,{onlyOnce:!0,showStackTrace:!0})}function Ie(e){J($.isClientRouting!==!0,We,{onlyOnce:!0,showStackTrace:!0}),J($.isClientRouting===void 0,Ee,{onlyOnce:!0,showStackTrace:!0}),$.isClientRouting=!1,e&&($.checkSingleInstance=!0),ve()}function Ae(){$.instances.push(Q.projectVersion),ve()}function ze(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function J(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const s=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:i}=$,a=n===!0?s:n;if(i.has(a))return;i.add(a)}console.warn(r?new Error(s):s)}function De(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function z(e,t){const n=new Error(e);return De()&&(n.stack=Ve(n.stack,t)),n}function Ve(e,t){if(!e)return e;const n=He(e);let r=0;return n.filter(i=>i.includes(" (internal/")||i.includes(" (node:internal")?!1:r<t&&Ue(i)?(r++,!1):!0).join(`
`)}function Ue(e){return e.startsWith("    at ")}function He(e){return e.split(/\r?\n/)}function S(e){return typeof e=="object"&&e!==null}const b=k("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});Ae();const Be="[vike]",Ne=`[vike@${Q.projectVersion}]`,D=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const c=typeof t=="string"?t:JSON.stringify(t);return E.dim(`Debug info (for Vike maintainers; you can ignore this): ${c}`)})();let s=[`You stumbled upon a Vike bug. Go to ${E.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");s=U(s),s=V(s,"Bug"),s=H(s,!0);const i=z(s,D);throw(a=b.onBeforeLog)==null||a.call(b),i}function m(e,t,{showStackTrace:n}={}){var s;if(e)return;n=n||b.alwaysShowStackTrace,t=U(t),t=V(t,"Wrong Usage"),t=H(t);const r=z(t,D);throw n&&b.showStackTraceList.add(r),(s=b.onBeforeLog)==null||s.call(b),r}function Ge(e){return e=U(e),e=V(e,"Error"),e=H(e),z(e,D)}function x(e,t,{onlyOnce:n,showStackTrace:r}){var s;if(!e){if(r=r||b.alwaysShowStackTrace,t=U(t),t=V(t,"Warning"),t=H(t),n){const{alreadyLogged:i}=b,a=n===!0?t:n;if(i.has(a))return;i.add(a)}if((s=b.onBeforeLog)==null||s.call(b),r){const i=z(t,D);b.showStackTraceList.add(i),b.logger(i,"warn")}else b.logger(t,"warn")}}function V(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=E.bold(E[r](n)),`${n}${e}`}function U(e){return e.startsWith("[")?e:` ${e}`}function H(e,t=!1){return`${t?Ne:Be}${e}`}function Z(){return typeof window<"u"&&typeof window.scrollY=="number"}const se=k("utils/assertRouterType.ts",{});function Je(){Ye(se.isClientRouting!==!0),se.isClientRouting=!1}function Ye(e){m(Z(),`${E.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),x(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function I(e,t,n){return typeof e=="string"?ie(e.split(""),t,n).join(""):ie(e,t,n)}function ie(e,t,n){const r=[];let s=t>=0?t:e.length+t;o(s>=0&&s<=e.length);let i=n>=0?n:e.length+n;for(o(i>=0&&i<=e.length);!(s===i||(s===e.length&&(s=0),s===i));){const a=e[s];o(a!==void 0),r.push(a),s++}return r}function Me(e,t){o(rt(e),e),o(t.startsWith("/"));const[n,...r]=e.split("#");o(n!==void 0);const s=["",...r].join("#")||null;o(s===null||s.startsWith("#"));const i=s===null?"":be(s.slice(1)),[a,...c]=n.split("?");o(a!==void 0);const l=["",...c].join("?")||null;o(l===null||l.startsWith("?"));const u={},g={};Array.from(new URLSearchParams(l||"")).forEach(([R,L])=>{u[R]=L,g[R]=[...g.hasOwnProperty(R)?g[R]:[],L]});let{protocol:v,origin:f,pathnameAbsoluteWithBase:d}=Ke(a,t);const h=a.slice((f||"").length);nt(e,f,h,l,s);let{pathname:p,hasBaseServer:w}=et(d,t);const O=Se(f,p,l,s),P=f?f.slice(v.length):null,{hostname:N,port:G}=Xe(P,e);return p=qe(p),o(p.startsWith("/")),{href:O,protocol:v,hostname:N,port:G,origin:f,pathname:p,pathnameOriginal:h,hasBaseServer:w,search:u,searchAll:g,searchOriginal:l,hash:i,hashOriginal:s}}function be(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function qe(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>be(t).split("/").join("%2F")).join("/"),e}function Ke(e,t){var n;o(!e.includes("?")&&!e.includes("#"));{const{protocol:r,origin:s,pathname:i}=oe(e);if(s)return{protocol:r,origin:s,pathnameAbsoluteWithBase:i};o(i===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const r=typeof window<"u"?(n=window==null?void 0:window.document)==null?void 0:n.baseURI:void 0;let s;return r?s=oe(r.split("?")[0]).pathname:s=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:Ze(e,s)}}}function oe(e){if(Pe(e)){const{protocol:t,uriWithoutProtocol:n}=we(e);o(t);const[r,...s]=n.split("/"),i=t+r;return{pathname:"/"+s.join("/"),origin:i,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function Xe(e,t){const n={hostname:null,port:null};if(!e)return n;const[r,...s]=e.split(":");if(n.hostname=r,s.length>0){o(s.length===1,t);const i=s[0],a=parseInt(i,10);o(a||a===0,t),n.port=a}return n}function we(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let s=n+t,i=r.join(t);const a="//";return i.startsWith(a)&&(s=s+a,i=i.slice(a.length)),{protocol:s,uriWithoutProtocol:i}}function Qe(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function Ze(e,t){const n=t.split("/"),r=e.split("/");let s=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const c=r[a];c==""&&a==="0"||c!="."&&(c==".."?n.pop():(s=!1,n.push(c)))}let i=n.join("/");return s&&!i.endsWith("/")&&(i+="/"),i.startsWith("/")||(i="/"+i),i}function et(e,t){o(e.startsWith("/")),o(tt(t));let n=e;if(o(n.startsWith("/")),o(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let r=t;return t.endsWith("/")&&n===I(t,0,-1)&&(r=I(t,0,-1),o(n===r)),n.startsWith(r)?(o(n.startsWith("/")||n.startsWith("http")),o(n.startsWith(r)),n=n.slice(r.length),n.startsWith("/")||(n="/"+n),o(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function tt(e){return e.startsWith("/")}function nt(e,t,n,r,s){const i=Se(t,n,r,s);o(e===i)}function Se(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function rt(e){return Pe(e)||e.startsWith("/")||st(e)}function st(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function Pe(e){const{protocol:t}=we(e);return!!t&&Qe(t)}function C(e,t){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function B(e){return e instanceof Function||typeof e=="function"}function it(e){return(t,n)=>{const r=e(t),s=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(s)),r===s)return 0;if(r===!0||s===!1)return-1;if(s===!0||r===!1)return 1;o(!1)}}function ot(e){return it(t=>{const n=e(t);return n===null?null:!n})}function _(e){return Array.isArray(e)}function at(e){return _(e)&&e.every(t=>typeof t=="string")}function lt(e){return S(e)&&Object.values(e).every(t=>typeof t=="string")}function y(e,t,n){if(!S(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?_(r):n==="object"?S(r):n==="string[]"?at(r):n==="string{}"?lt(r):n==="function"?B(r):_(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function ct(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const ut=e=>e!=null;function $e(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const ft=["clientRouting"];function dt(e){ft.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;m(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),m(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const Te=["render","clientRouting","prerender","doNotPrerender"];function gt(e,t){m(!Te.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function ht(e){const t=".page.",n=I(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function j(e){$e(e)}function ee(e,t){return o(!e.includes("\\")),e.includes("/_error")}function pt(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return ee(e)}const xe=["js","ts","cjs","cts","mjs","mts"],mt=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],Ce=["vue","svelte","marko","md","mdx"],yt=[...xe,...mt,...Ce];function Re(e){const t=yt.some(n=>e.endsWith("."+n));return Et(e)&&o(t),t}function Et(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=xe.some(r=>e.endsWith("."+r));return o(t===n),t}function vt(e){return Ce.some(t=>e.endsWith("."+t))}const bt=[".page",".page.server",".page.route",".page.client",".css"];function wt(e){if($e(e),e.endsWith(".css"))return".css";o(Re(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],s=n.slice(-2)[0];if(s==="page")return".page";if(o(r==="page",e),s==="server")return".page.server";if(s==="client")return".page.client";if(s==="route")return".page.route";o(!1,e)}function ke(e){const t=i=>s.pageId===i||s.isDefaultPageFile&&(ae(s.filePath)||St(i,s.filePath)),n=wt(e),s={filePath:e,fileType:n,isEnv:i=>{if(o(n!==".page.route"),i==="CLIENT_ONLY")return n===".page.client"||n===".css";if(i==="SERVER_ONLY")return n===".page.server";if(i==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:Y(e),isRendererPageFile:n!==".css"&&Y(e)&&ae(e),isErrorPageFile:ee(e),pageId:ht(e)};return s}function Y(e){return j(e),ee(e)?!1:e.includes("/_default")}function ae(e){return j(e),e.includes("/renderer/")}function St(e,t){j(e),j(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(Y(t));const n=I(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function Pt(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let s="",i="";return n==="default"?s="export default":(s="export",r=[n,...r]),r.forEach(c=>{s=`${s} { ${c}`,i=` }${i}`}),s+i}function $t(e,t,n){return`${M(e,t)} at ${A(n,t)}`}function Tt(e,t,n){return n?`${M(e,t)} at ${A(n,t)}`:`${M(e,t)} internally`}function M(e,t){return`${e} ${E.cyan(t)} defined`}function A(e,t){let n;return _(e)?n=e:n=[e],o(n.length>=1),n.map(s=>{const{filePathToShowToUser:i,fileExportPathToShowToUser:a}=s;let c=i;const l=Pt(a,t);return l&&(c=`${c} > ${E.cyan(l)}`),c}).join(" / ")}const xt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function _e(e){const t=JSON.parse(e);return te(t)}function te(e){return typeof e=="string"?Ct(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=te(n)}),e)}function Ct(e){for(const{match:t,deserialize:n}of xt)if(t(e))return n(e,_e);return e}const Rt=["$$registrations","_rerender_only"],kt=[".md",".mdx"];function _t(e,t,n){const r=Object.keys(e).filter(u=>!Rt.includes(u)),s=u=>u==="default"||u===n,i=r.filter(s),a=r.filter(u=>!s(u));if(i.length===1&&a.length===0)return;const c=E.code("export default"),l=E.code(`export { ${n} }`);i.length===0&&m(!1,`${t} should have a ${l} or ${c}`),i.length===2&&x(!1,`${t} is ambiguous: remove ${c} or ${l}`,{onlyOnce:!0}),o(i.length===1),o(a.length>0),kt.some(u=>t.endsWith(u))||a.forEach(u=>{x(!1,`${t} unexpected ${E.cyan(`export { ${u} }`)}`,{onlyOnce:!0})})}function q(e){return Lt(e)}function jt(e,t){const n=e.map(s=>{const i=q(s.configValuesSerialized),{pageId:a,isErrorPage:c,routeFilesystem:l,loadConfigValuesAll:u}=s;return Ot(i),{pageId:a,isErrorPage:c,routeFilesystem:l,configValues:i,loadConfigValuesAll:u}}),r={configValues:{}};{const s=q(t.configValuesSerialized);Object.assign(r.configValues,s)}return{pageConfigs:n,pageConfigGlobal:r}}function Ot(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:s}=n,i=typeof r;o(s);const a=$t("Config",t,s);m(i==="string"||B(r),`${a} has an invalid type '${i}': it should be a string or a function instead, see https://vike.dev/route`)}function Lt(e){const t={};return Object.entries(e).forEach(([r,s])=>{let i;if(s.type==="cumulative"){const{valueSerialized:a,...c}=s;i={value:a.map((u,g)=>{const{value:v,sideExports:f}=le(u,r,()=>{const d=s.definedAtData[g];return o(d),d});return n(f),v}),...c}}else{const{valueSerialized:a,...c}=s,{value:l,sideExports:u}=le(a,r,()=>(o(s.type!=="computed"),s.definedAtData));n(u),i={value:l,...c}}t[r]=i}),t;function n(r){r.forEach(s=>{const{configName:i,configValue:a}=s;t[i]||(t[i]=a)})}}function le(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=te(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:s}=e;_t(s,r.filePathToShowToUser,t);let i,a=!1;const c=[];return Object.entries(s).forEach(([l,u])=>{l!=="default"&&l!==t?c.push({configName:l,configValue:{type:"standard",value:u,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[l]}}}):(i=u,o(!a),a=!0)}),o(a),{value:i,sideExports:c}}o(!1)}function Ft(e){o(y(e,"pageFilesLazy","object")),o(y(e,"pageFilesEager","object")),o(y(e,"pageFilesExportNamesLazy","object")),o(y(e,"pageFilesExportNamesEager","object")),o(y(e.pageFilesLazy,".page")),o(y(e.pageFilesLazy,".page.client")||y(e.pageFilesLazy,".page.server")),o(y(e,"pageFilesList","string[]")),o(y(e,"pageConfigsSerialized")),o(y(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;Wt(t),It(n);const{pageConfigs:r,pageConfigGlobal:s}=jt(t,n),i={};F(e.pageFilesLazy).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=i[c]=i[c]??l;const g=u;ce(g),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await g(),dt(l))}}),F(e.pageFilesExportNamesLazy).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=i[c]=i[c]??l;const g=u;ce(g),l.loadExportNames=async()=>{if(!("exportNames"in l)){const v=await g();o(y(v,"exportNames","string[]"),l.filePath),l.exportNames=v.exportNames}}}),F(e.pageFilesEager).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=i[c]=i[c]??l;const g=u;o(S(g)),l.fileExports=g}),F(e.pageFilesExportNamesEager).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=i[c]=i[c]??l;const g=u;o(S(g)),o(y(g,"exportNames","string[]"),l.filePath),l.exportNames=g.exportNames}),e.pageFilesList.forEach(c=>{i[c]=i[c]??ke(c)});const a=Object.values(i);return a.forEach(({filePath:c})=>{o(!c.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:s}}function F(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(bt.includes(n)),o(S(r)),Object.entries(r).forEach(([s,i])=>{const a=ke(s);o(a.fileType===n),t.push({filePath:s,pageFile:a,globValue:i})})}),t}function ce(e){o(B(e))}function Wt(e){o(_(e)),e.forEach(t=>{o(S(t)),o(y(t,"pageId","string")),o(y(t,"routeFilesystem")),o(y(t,"configValuesSerialized"))})}function It(e){o(y(e,"configValuesSerialized"))}const T=k("setPageFiles.ts",{});function At(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=Ft(e);T.pageFilesAll=t,T.pageConfigs=n,T.pageConfigGlobal=r}async function zt(e,t){e?(o(!T.pageFilesGetter),o(t===void 0)):(o(T.pageFilesGetter),o(typeof t=="boolean"),(!T.pageFilesAll||!t)&&await T.pageFilesGetter());const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:s}=T;o(n&&r&&s);const i=Dt(n,r);return{pageFilesAll:n,allPageIds:i,pageConfigs:r,pageConfigGlobal:s}}function Dt(e,t){const n=e.filter(({isDefaultPageFile:i})=>!i).map(({pageId:i})=>i),r=ye(n),s=t.map(i=>i.pageId);return[...r,...s]}function Vt(e,t){return Ut(e,t,!0)}function Ut(e,t,n){const r=n?"CLIENT_ONLY":"SERVER_ONLY",s=e.filter(d=>d.isRelevant(t)&&d.fileType!==".page.route").sort(Ht(n,t)),i=d=>{const h=s.filter(w=>w.pageId===t&&w.isEnv(d?"CLIENT_AND_SERVER":r));m(h.length<=1,`Merge the following files into a single file: ${h.map(w=>w.filePath).join(" ")}`);const p=h[0];return o(p===void 0||!p.isDefaultPageFile),p},a=i(!1),c=i(!0),l=d=>s.filter(h=>h.isRendererPageFile&&h.isEnv(d?"CLIENT_AND_SERVER":r))[0],u=l(!1),g=l(!0),v=s.filter(d=>d.isDefaultPageFile&&!d.isRendererPageFile&&(d.isEnv(r)||d.isEnv("CLIENT_AND_SERVER")));return[a,c,...v,u,g].filter(ut)}function Ht(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",r=-1,s=1,i=0;return(a,c)=>{if(!a.isDefaultPageFile&&c.isDefaultPageFile)return r;if(!c.isDefaultPageFile&&a.isDefaultPageFile)return s;{const l=a.isRendererPageFile,u=c.isRendererPageFile;if(!l&&u)return r;if(!u&&l)return s;o(l===u)}{const l=ue(t,a.filePath),u=ue(t,c.filePath);if(l<u)return r;if(u<l)return s;o(l===u)}{if(a.isEnv(n)&&c.isEnv("CLIENT_AND_SERVER"))return r;if(c.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return s}return i}}function ue(e,t){j(e),j(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),s=t.slice(n),i=r.split("/").length,a=s.split("/").length;return i+a}function Bt(e){if(!e||_(e))return null;const{filePathToShowToUser:t}=e;return o(t),t}function Nt(e,t){const n={},r={},s={};e.forEach(f=>{Gt(f).forEach(({exportName:h,exportValue:p,isFromDefaultExport:w})=>{o(h!=="default"),s[h]=s[h]??[],s[h].push({exportValue:p,exportSource:`${f.filePath} > ${w?`\`export default { ${h} }\``:`\`export { ${h} }\``}`,filePath:f.filePath,_filePath:f.filePath,_fileType:f.fileType,_isFromDefaultExport:w})})});const i={},a={},c=(f,d)=>{i[d]=f,a[d]??(a[d]=[]),a[d].push(f)},l={configsStandard:{},configsCumulative:{},configsComputed:{}};t&&Object.entries(t.configValues).forEach(([f,d])=>{const{value:h}=d,p=Bt(d.definedAtData),w=Tt("Config",f,d.definedAtData);if(r[f]=r[f]??h,n[f]=n[f]??[],o(n[f].length===0),n[f].push({configValue:h,configDefinedAt:w,configDefinedByFile:p}),d.type==="standard"){const P={type:"configsStandard",value:d.value,definedAt:A(d.definedAtData,f)};c(P,f),l.configsStandard[f]=P}if(d.type==="cumulative"){const P={type:"configsCumulative",values:d.value.map((N,G)=>{const R=d.definedAtData[G];o(R);const L=A(R,f);return{value:N,definedAt:L}})};c(P,f),l.configsCumulative[f]=P}if(d.type==="computed"){const P={type:"configsComputed",value:d.value};c(P,f),l.configsComputed[f]=P}const O=f;s[O]=s[O]??[],s[O].push({exportValue:h,exportSource:w,filePath:p,_filePath:p,_fileType:null,_isFromDefaultExport:null})});const u=Jt(),g={};return Object.entries(s).forEach(([f,d])=>{d.forEach(({exportValue:h,_fileType:p,_isFromDefaultExport:w})=>{g[f]=g[f]??h,p===".page"&&!w&&(f in u||(u[f]=h))})}),o(!("default"in g)),o(!("default"in s)),{from:l,source:i,sources:a,config:r,configEntries:n,exports:g,exportsAll:s,pageExports:u}}function Gt(e){const{filePath:t,fileExports:n}=e;o(n),o(Re(t));const r=[];return Object.entries(n).sort(ot(([s])=>s==="default")).forEach(([s,i])=>{let a=s==="default";if(a)if(vt(t))s="Page";else{m(S(i),`The ${E.cyan("export default")} of ${t} should be an object.`),Object.entries(i).forEach(([c,l])=>{gt(c,t),r.push({exportName:c,exportValue:l,isFromDefaultExport:a})});return}r.push({exportName:s,exportValue:i,isFromDefaultExport:a})}),r.forEach(({exportName:s,isFromDefaultExport:i})=>{o(!(i&&Te.includes(s)))}),r}function Jt(){return new Proxy({},{get(...e){return Z()||x(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const Yt="modulepreload",Mt=function(e){return"/"+e},fe={},qt=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=Mt(l),l in fe)return;fe[l]=!0;const u=l.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const h=i[d];if(h.href===l&&(!u||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${g}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Yt,u||(f.as="script",f.crossOrigin=""),f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((d,h)=>{f.addEventListener("load",d),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},ne={},Kt={},Xt={},Qt={},Zt=[],je={},en=[{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>qt(()=>import("./pages_index.iG4a0tyV.js"),__vite__mapDeps([0,1])),configValuesSerialized:{clientEntryLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}}}}],tn={configValuesSerialized:{}},nn=Object.assign({}),rn={...nn};ne[".page"]=rn;const sn=Object.assign({}),on={...sn};ne[".page.client"]=on;const an=Object.assign({}),ln={...an};je[".page.server"]=ln;const cn=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:je,pageConfigGlobalSerialized:tn,pageConfigsSerialized:en,pageFilesEager:Kt,pageFilesExportNamesEager:Qt,pageFilesExportNamesLazy:Xt,pageFilesLazy:ne,pageFilesList:Zt},Symbol.toStringTag,{value:"Module"}));At(cn);function un(){o(Z())}function fn(){un()}function de(e){const t=e/1e3;if(t<120){const n=ge(t);return`${n} second${he(n)}`}{const n=t/60,r=ge(n);return`${r} minute${he(r)}`}}function ge(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function he(e){return e==="1"?"":"s"}const K=k("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function dn(e,t,n){const{hookName:r,hookFilePath:s,hookTimeout:{error:i,warning:a}}=t;let c,l;const u=new Promise((d,h)=>{c=p=>{g(),d(p)},l=p=>{g(),h(p)}}),g=()=>{v&&clearTimeout(v),f&&clearTimeout(f)},v=pe(a)&&setTimeout(()=>{x(!1,`The ${r}() hook defined by ${s} is slow: it's taking more than ${de(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),f=pe(i)&&setTimeout(()=>{const d=Ge(`The ${r}() hook defined by ${s} timed out: it didn't finish after ${de(i)} (https://vike.dev/hooksTimeout)`);l(d)},i);return(async()=>{try{gn(n);const d=await e();c(d)}catch(d){S(d)&&K.userHookErrors.set(d,{hookName:r,hookFilePath:s}),l(d)}})(),u}function pe(e){return!!e&&e!==1/0}function gn(e){K.pageContext=e,Promise.resolve().then(()=>{K.pageContext=null})}function Oe(e){const t=window.location.href,{searchOriginal:n,hashOriginal:r,pathname:s}=Me(t,"/");let i;return e!=null&&e.withoutHash?i=`${s}${n||""}`:i=`${s}${n||""}${r||""}`,o(i.startsWith("/")),i}function hn(e){return typeof e=="string"&&pn(e)?`.${e}`:`[${JSON.stringify(e)}]`}function pn(e){return/^[a-z0-9\$_]+$/i.test(e)}fn();function mn(){const e="vike_pageContext",t=document.getElementById(e);m(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=_e(n);return o(y(r,"_pageId","string")),o(y(r,"routeParams","string{}")),r}function yn(e,t){const n=e.filter(s=>s.pageId===t);return o(n.length<=1),n[0]??null}async function En(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll(),r=q(n.configValuesSerialized);return Object.assign(e.configValues,r),C(e,{isAllLoaded:!0}),e}const vn="__whileFetchingAssets";async function bn(e,t,n){const r=Vt(t,e),s=yn(n,e);let i;const a=!1;try{i=(await Promise.all([s&&En(s,a),...r.map(g=>{var v;return(v=g.loadFile)==null?void 0:v.call(g)})]))[0]}catch(u){throw wn(u)&&Object.assign(u,{[vn]:!0}),u}const c=Nt(r,i),l={};return C(l,c),C(l,{_pageFilesLoaded:r}),l}function wn(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}const me=Oe({withoutHash:!0});async function Sn(){const e=mn();return C(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),C(e,await $n(e._pageId)),Pn(),e}function Pn(){const e=Oe({withoutHash:!0});m(me===e,`The URL was manipulated before the hydration finished ('${me}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function $n(e){const t={},{pageFilesAll:n,pageConfigs:r}=await zt(!0);return C(t,{_pageFilesAll:n,_pageConfigs:r}),C(t,await bn(e,t._pageFilesAll,t._pageConfigs)),n.filter(s=>s.fileType!==".page.server").forEach(s=>{var i;x(!((i=s.fileExports)!=null&&i.onBeforeRender),`export { onBeforeRender } of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const Tn=k("getHook.ts",{isPrerendering:!1});function X(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=Rn(n,t),s=e.exports[t],i=e.exportsAll[t][0];if(o(i.exportValue===s),s===null)return null;const a=i.filePath;return o(a),o(!a.endsWith(" ")),Cn(s,{hookName:t,hookFilePath:a}),{hookFn:s,hookName:t,hookFilePath:a,hookTimeout:r}}function xn(e,t){X(e,t)}function Cn(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),m(B(e),`Hook ${t}() defined by ${n} should be a function`)}function Rn(e,t){const n=kn(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],s=_n(t);return(r==null?void 0:r.error)!==void 0&&(s.error=r.error),(r==null?void 0:r.warning)!==void 0&&(s.warning=r.warning),s}function kn(e){if(e===void 0)return{};if(e===!1)return!1;m(S(e),`Setting ${E.cyan("hooksTimeout")} should be ${E.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}m(S(r),`Setting ${E.cyan(`hooksTimeout.${n}`)} should be ${E.cyan("false")} or an object`);const[s,i]=["error","warning"].map(a=>{const c=r[a];if(c===void 0||c===!1)return c;const l=`Setting ${E.cyan(`hooksTimeout.${n}.${a}`)} should be`;return m(typeof c=="number",`${l} ${E.cyan("false")} or a number`),m(c>0,`${l} a positive number`),c});t[n]={error:s,warning:i}}),t}function _n(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:Tn.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}function jn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>ct(n,r))),Object.defineProperties(e,t)}function On(e){Ln(e),Fn(e)}function Ln(e){pt(e._pageId,e._pageConfigs)&&o(y(e,"is404","boolean"))}function Fn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!S(t)){x(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const Wn="not-serializable",W=k("getPageContextProxyForUser.ts",{});function In(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],s=hn(n);return m(r!==Wn,`Can't access pageContext${s} on the client side. Because it can't be serialized, see server logs.`),An(e,n,s),r}})}function An(e,t,n){if(Vn(t)||t in e||Dn(t)||!e._hasPageContextFromServer)return;const r=`pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;e._hasPageContextFromClient?x(!1,r,{onlyOnce:!1,showStackTrace:!0}):m(!1,r)}const zn=["then","toJSON"];function Dn(e){return!!(zn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Vn(e){return W.prev===e||W.prev==="__v_raw"?!0:(W.prev=e,window.setTimeout(()=>{W.prev=void 0},0),!1)}function Un(e,t){if(t){const s=e;o([!0,!1].includes(s.isHydration)),o([!0,!1,null].includes(s.isBackwardNavigation))}else{const s=e;o(s.isHydration===!0),o(s.isBackwardNavigation===null)}o("config"in e),o("configEntries"in e),o("exports"in e),o("exportsAll"in e),o("pageExports"in e),o(S(e.pageExports));const n=e.exports.Page;C(e,{Page:n}),Hn(e),jn(e);const r=In(e);return On(e),r}function Hn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function Bn(e,t){const n=Un(e,t);let r=null,s;r=X(e,"render"),s="render";{const c=X(e,"onRenderClient");c&&(r=c,s="onRenderClient")}if(!r){const c=Nn(e);if(o(c),e._pageConfigs.length>0)m(!1,`No onRenderClient() hook defined for URL '${c}', but it's needed, see https://vike.dev/onRenderClient`);else{const l=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let u;l.length===0?u="No file `*.page.client.*` found for URL "+c:u="One of the following files should export a render() hook: "+l.map(g=>g.filePath).join(" "),m(!1,u)}}o(r);const i=r.hookFn;o(s);const a=await dn(()=>i(n),r,e);m(a===void 0,`The ${s}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Nn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}Je();const Gn=!0;Ie(Gn);Jn();async function Jn(){var t,n;const e=await Sn();await Bn(e,!1),xn(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
