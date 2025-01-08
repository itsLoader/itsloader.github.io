const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_about.C8paj6bR.js","assets/chunks/chunk-_7lwwWoG.js","assets/static/app_generated_index-6937cd5a.DulVHb0g.css","assets/entries/pages_adailtonmorreuhoje.a80IQL9j.js","assets/entries/pages_games.Qk2oO_Al.js","assets/entries/pages_index.Dk7hmzUm.js","assets/entries/pages_meme-machine-corporation.DQKXgcFu.js","assets/entries/pages_merd.BPVXpHoD.js","assets/entries/pages_music.BAkOGH1K.js"])))=>i.map(i=>d[i]);
function ye(e){return Array.from(new Set(e))}const Oe="0.4.206",X={projectName:"Vike",projectVersion:Oe},ne=`_${X.projectName.toLowerCase()}`;function T(e,t){const n=ke();return n[e]=n[e]||t}function ke(){return globalThis[ne]=globalThis[ne]||{}}const v=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),_=T("assertSingleInstance.ts",{instances:[],alreadyLogged:new Set}),De="Client runtime of both Server Routing and Client Routing loaded https://vike.dev/client-runtimes-conflict",ve="Client runtime loaded twice https://vike.dev/client-runtime-duplicated";function Ee(){{const e=ye(_.instances);Be(e.length<=1,`vike@${v.bold(e[0])} and vike@${v.bold(e[1])} loaded but only one version should be loaded`)}_.checkSingleInstance&&_.instances.length>1&&G(!1,ve,{onlyOnce:!0,showStackTrace:!0})}function We(e){G(_.isClientRouting!==!0,De,{onlyOnce:!0,showStackTrace:!0}),G(_.isClientRouting===void 0,ve,{onlyOnce:!0,showStackTrace:!0}),_.isClientRouting=!1,_.checkSingleInstance=!0,Ee()}function Ve(){_.instances.push(X.projectVersion),Ee()}function Be(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function G(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=_,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}function Ue(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function D(e,t){const n=new Error(e);return Ue()&&(n.stack=He(n.stack,t)),n}function He(e,t){if(!e)return e;const n=Ge(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Ne(s)?(r++,!1):!0).join(`
`)}function Ne(e){return e.startsWith("    at ")}function Ge(e){return e.split(/\r?\n/)}function w(e){return typeof e=="object"&&e!==null}const S=T("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});Ve();const Je="[vike]",Ye=`[vike@${X.projectVersion}]`,W=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return v.dim(`Debug info (for Vike maintainers; you can ignore this): ${l}`)})();let i=[`You stumbled upon a Vike bug. Go to ${v.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");i=B(i),i=V(i,"Bug"),i=U(i,!0);const s=D(i,W);throw(a=S.onBeforeLog)==null||a.call(S),s}function m(e,t,{showStackTrace:n}={}){var i;if(e)return;n=n||S.alwaysShowStackTrace,t=B(t),t=V(t,"Wrong Usage"),t=U(t);const r=D(t,W);throw n&&S.showStackTraceList.add(r),(i=S.onBeforeLog)==null||i.call(S),r}function Me(e){return e=B(e),e=V(e,"Error"),e=U(e),D(e,W)}function R(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(r=r||S.alwaysShowStackTrace,t=B(t),t=V(t,"Warning"),t=U(t),n){const{alreadyLogged:s}=S,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=S.onBeforeLog)==null||i.call(S),r){const s=D(t,W);S.showStackTraceList.add(s),S.logger(s,"warn")}else S.logger(t,"warn")}}function V(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=v.bold(v[r](n)),`${n}${e}`}function B(e){return e.startsWith("[")?e:` ${e}`}function U(e,t=!1){return`${t?Ye:Je}${e}`}function Q(){return typeof window<"u"&&typeof window.scrollY=="number"}const re=T("utils/assertRouterType.ts",{});function qe(){Ke(re.isClientRouting!==!0),re.isClientRouting=!1}function Ke(e){m(Q(),`${v.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),R(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function Se(e,t,n){return typeof e=="string"?ie(e.split(""),t,n).join(""):ie(e,t,n)}function ie(e,t,n){const r=[];let i=t;o(i>=0&&i<=e.length);let s=e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}function Xe(e,t){o(at(e),e),o(t.startsWith("/"));const{hashString:n,withoutHash:r}=Qe(e);o(n===null||n.startsWith("#"));const i=n===null?"":be(n.slice(1)),{searchString:s,withoutSearch:a}=se(r);o(s===null||s.startsWith("?"));let l="";if(s!==null)l=s;else if(e.startsWith("#")){const C=we();l=C&&se(C).searchString||""}const u={},c={};Array.from(new URLSearchParams(l)).forEach(([C,I])=>{u[C]=I,c[C]=[...c.hasOwnProperty(C)?c[C]:[],I]});let{protocol:g,origin:p,pathnameAbsoluteWithBase:d}=et(a,t);const f=a.slice((p||"").length);ot(e,p,f,s,n);let{pathname:h,hasBaseServer:E}=it(d,t);const b=Ce(p,h,s,n),A=p?p.slice(g.length):null,{hostname:P,port:N}=tt(A,e);return h=Ze(h),o(h.startsWith("/")),{href:b,protocol:g,hostname:P,port:N,origin:p,pathname:h,pathnameOriginal:f,hasBaseServer:E,search:u,searchAll:c,searchOriginal:s,hash:i,hashOriginal:n}}function Qe(e){const[t,...n]=e.split("#");return{hashString:["",...n].join("#")||null,withoutHash:t}}function se(e){const[t,...n]=e.split("?");return{searchString:["",...n].join("?")||null,withoutSearch:t}}function be(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Ze(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>be(t).split("/").join("%2F")).join("/"),e}function et(e,t){o(!e.includes("?")&&!e.includes("#"));{const{protocol:n,origin:r,pathname:i}=oe(e);if(r)return{protocol:n,origin:r,pathnameAbsoluteWithBase:i};o(i===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const n=we();let r;return n?r=oe(n.split("?")[0].split("#")[0]).pathname:r=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:rt(e,r)}}}function we(){var t;return typeof window<"u"?(t=window==null?void 0:window.document)==null?void 0:t.baseURI:void 0}function oe(e){if(_e(e)){const{protocol:t,uriWithoutProtocol:n}=Pe(e);o(t);const[r,...i]=n.split("/"),s=t+r;return{pathname:"/"+i.join("/"),origin:s,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function tt(e,t){const n={hostname:null,port:null};if(!e)return n;const r=e.split(":");if(r.length>1){const i=parseInt(r.pop(),10);o(i||i===0,t),n.port=i}return n.hostname=r.join(":"),n}function Pe(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let i=n+t,s=r.join(t);const a="//";return s.startsWith(a)&&(i=i+a,s=s.slice(a.length)),{protocol:i,uriWithoutProtocol:s}}function nt(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function rt(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const l=r[a];l==""&&a==="0"||l!="."&&(l==".."?n.pop():(i=!1,n.push(l)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function it(e,t){return o(e.startsWith("/")),o(st(t)),o(e.startsWith("/")),o(t.startsWith("/")),{pathname:e,hasBaseServer:!0}}function st(e){return e.startsWith("/")}function ot(e,t,n,r,i){const s=Ce(t,n,r,i);o(e===s)}function Ce(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function at(e){return _e(e)||e.startsWith("/")||lt(e)}function lt(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function _e(e){const{protocol:t}=Pe(e);return!!t&&nt(t)}function j(e,t){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function H(e){return e instanceof Function||typeof e=="function"}function ut(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function ct(e){return ut(t=>{const n=e(t);return n===null?null:!n})}function x(e){return Array.isArray(e)}function ft(e){return x(e)&&e.every(t=>typeof t=="string")}function dt(e){return w(e)&&Object.values(e).every(t=>typeof t=="string")}function y(e,t,n){if(!w(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?x(r):n==="object"?w(r):n==="string[]"?ft(r):n==="string{}"?dt(r):n==="function"?H(r):x(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function gt(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const pt=e=>e!=null;function je(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const ht=["clientRouting"];function mt(e){ht.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;m(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),m(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const Re=["render","clientRouting","prerender","doNotPrerender"];function yt(e,t){m(!Re.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function vt(e){const t=".page.",n=Se(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function z(e){je(e)}function Z(e,t){return o(!e.includes("\\")),e.includes("/_error")}function Et(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return Z(e)}const $e=["js","ts","cjs","cts","mjs","mts"],St=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],Te=["vue","svelte","marko","md","mdx"],bt=[...$e,...St,...Te];function xe(e){const t=bt.some(n=>e.endsWith("."+n));return wt(e)&&o(t),t}function wt(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=$e.some(r=>e.endsWith("."+r));return o(t===n),t}function Pt(e){return Te.some(t=>e.endsWith("."+t))}const Ct=[".page",".page.server",".page.route",".page.client",".css"];function _t(e){if(je(e),e.endsWith(".css"))return".css";o(xe(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function ze(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(ae(i.filePath)||jt(s,i.filePath)),n=_t(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:J(e),isRendererPageFile:n!==".css"&&J(e)&&ae(e),isErrorPageFile:Z(e),pageId:vt(e)};return i}function J(e){return z(e),Z(e)?!1:e.includes("/_default")}function ae(e){return z(e),e.includes("/renderer/")}function jt(e,t){z(e),z(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(J(t));const n=Se(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function Rt(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(l=>{i=`${i} { ${l}`,s=` }${s}`}),i+s}function $t(e,t,n){return`${Y(e,t)} at ${k(n,t)}`}function Tt(e,t,n){return n?`${Y(e,t)} at ${k(n,t)}`:`${Y(e,t)} internally`}function Y(e,t){return`${e} ${v.cyan(t)} defined`}function k(e,t){let n;return x(e)?n=e:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let l=s;const u=Rt(a,t);return u&&(l=`${l} > ${v.cyan(u)}`),l}).join(" / ")}const xt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Ae(e){const t=JSON.parse(e);return ee(t)}function ee(e){return typeof e=="string"?zt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=ee(n)}),e)}function zt(e){for(const{match:t,deserialize:n}of xt)if(t(e))return n(e,Ae);return e}const At=["$$registrations","_rerender_only"],It=[".md",".mdx"];function Ft(e,t,n){const r=Object.keys(e).filter(c=>!At.includes(c)),i=c=>c==="default"||c===n,s=r.filter(i),a=r.filter(c=>!i(c));if(s.length===1&&a.length===0)return;const l=v.code("export default"),u=v.code(`export { ${n} }`);o(s.length<=2),s.length===0&&m(!1,`${t} should have ${u} or ${l}`),s.length===2&&m(!1,`${t} is ambiguous: remove ${l} or ${u}`),It.some(c=>t.endsWith(c))||a.forEach(c=>{R(!1,`${t} unexpected ${v.cyan(`export { ${c} }`)}`,{onlyOnce:!0})})}function M(e){return kt(e)}function Lt(e,t){const n=e.map(i=>{const s=M(i.configValuesSerialized),{pageId:a,isErrorPage:l,routeFilesystem:u,loadConfigValuesAll:c}=i;return Ot(s),{pageId:a,isErrorPage:l,routeFilesystem:u,configValues:s,loadConfigValuesAll:c}}),r={configValues:{}};{const i=M(t.configValuesSerialized);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Ot(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:i}=n,s=typeof r;o(i);const a=$t("Config",t,i);m(s==="string"||H(r),`${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`)}function kt(e){const t={};return Object.entries(e).forEach(([r,i])=>{let s;if(i.type==="cumulative"){const{valueSerialized:a,...l}=i;s={value:a.map((c,g)=>{const{value:p,sideExports:d}=le(c,r,()=>{const f=i.definedAtData[g];return o(f),f});return n(d),p}),...l}}else{const{valueSerialized:a,...l}=i,{value:u,sideExports:c}=le(a,r,()=>(o(i.type!=="computed"),i.definedAtData));n(c),s={value:u,...l}}t[r]=s}),t;function n(r){r.forEach(i=>{const{configName:s,configValue:a}=i;t[s]||(t[s]=a)})}}function le(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=ee(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:i}=e;Ft(i,r.filePathToShowToUser,t);let s,a=!1;const l=[];return Object.entries(i).forEach(([u,c])=>{u!=="default"&&u!==t?l.push({configName:u,configValue:{type:"standard",value:c,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[u]}}}):(s=c,o(!a),a=!0)}),o(a),{value:s,sideExports:l}}o(!1)}function Dt(e){o(y(e,"pageFilesLazy","object")),o(y(e,"pageFilesEager","object")),o(y(e,"pageFilesExportNamesLazy","object")),o(y(e,"pageFilesExportNamesEager","object")),o(y(e.pageFilesLazy,".page")),o(y(e.pageFilesLazy,".page.client")||y(e.pageFilesLazy,".page.server")),o(y(e,"pageFilesList","string[]")),o(y(e,"pageConfigsSerialized")),o(y(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;Wt(t),Vt(n);const{pageConfigs:r,pageConfigGlobal:i}=Lt(t,n),s={};L(e.pageFilesLazy).forEach(({filePath:l,pageFile:u,globValue:c})=>{u=s[l]=s[l]??u;const g=c;ue(g),u.loadFile=async()=>{"fileExports"in u||(u.fileExports=await g(),mt(u))}}),L(e.pageFilesExportNamesLazy).forEach(({filePath:l,pageFile:u,globValue:c})=>{u=s[l]=s[l]??u;const g=c;ue(g),u.loadExportNames=async()=>{if(!("exportNames"in u)){const p=await g();o(y(p,"exportNames","string[]"),u.filePath),u.exportNames=p.exportNames}}}),L(e.pageFilesEager).forEach(({filePath:l,pageFile:u,globValue:c})=>{u=s[l]=s[l]??u;const g=c;o(w(g)),u.fileExports=g}),L(e.pageFilesExportNamesEager).forEach(({filePath:l,pageFile:u,globValue:c})=>{u=s[l]=s[l]??u;const g=c;o(w(g)),o(y(g,"exportNames","string[]"),u.filePath),u.exportNames=g.exportNames}),e.pageFilesList.forEach(l=>{s[l]=s[l]??ze(l)});const a=Object.values(s);return a.forEach(({filePath:l})=>{o(!l.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:i}}function L(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(Ct.includes(n)),o(w(r)),Object.entries(r).forEach(([i,s])=>{const a=ze(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function ue(e){o(H(e))}function Wt(e){o(x(e)),e.forEach(t=>{o(w(t)),o(y(t,"pageId","string")),o(y(t,"routeFilesystem")),o(y(t,"configValuesSerialized"))})}function Vt(e){o(y(e,"configValuesSerialized"))}const F=T("setPageFiles.ts",{});function Bt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=Dt(e);F.pageFilesAll=t,F.pageConfigs=n,F.pageConfigGlobal=r}async function Ut(e,t){o(!F.pageFilesGetter),o(t===void 0);const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i}=F;o(n&&r&&i);const s=Ht(n,r);return{pageFilesAll:n,allPageIds:s,pageConfigs:r,pageConfigGlobal:i}}function Ht(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=ye(n),i=t.map(s=>s.pageId);return[...r,...i]}function Nt(e,t){return Gt(e,t,!0)}function Gt(e,t,n){const r="CLIENT_ONLY",i=e.filter(f=>f.isRelevant(t)&&f.fileType!==".page.route").sort(Jt(n,t)),s=f=>{const h=i.filter(b=>b.pageId===t&&b.isEnv(f?"CLIENT_AND_SERVER":r));m(h.length<=1,`Merge the following files into a single file: ${h.map(b=>b.filePath).join(" ")}`);const E=h[0];return o(E===void 0||!E.isDefaultPageFile),E},a=s(!1),l=s(!0),u=f=>i.filter(h=>h.isRendererPageFile&&h.isEnv(f?"CLIENT_AND_SERVER":r))[0],c=u(!1),g=u(!0),p=i.filter(f=>f.isDefaultPageFile&&!f.isRendererPageFile&&(f.isEnv(r)||f.isEnv("CLIENT_AND_SERVER")));return[a,l,...p,c,g].filter(pt)}function Jt(e,t){const n="CLIENT_ONLY";return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return-1;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return 1;{const u=a.isRendererPageFile,c=l.isRendererPageFile;if(!u&&c)return-1;if(!c&&u)return 1;o(u===c)}{const u=ce(t,a.filePath),c=ce(t,l.filePath);if(u<c)return-1;if(c<u)return 1;o(u===c)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return-1;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return 1}return 0}}function ce(e,t){z(e),z(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}function Yt(e){if(!e||x(e))return null;const{filePathToShowToUser:t}=e;return o(t),t}function Mt(e,t){const n={},r={},i={};e.forEach(d=>{qt(d).forEach(({exportName:h,exportValue:E,isFromDefaultExport:b})=>{o(h!=="default"),i[h]=i[h]??[],i[h].push({exportValue:E,exportSource:`${d.filePath} > ${b?`\`export default { ${h} }\``:`\`export { ${h} }\``}`,filePath:d.filePath,_filePath:d.filePath,_fileType:d.fileType,_isFromDefaultExport:b})})});const s={},a={},l=(d,f)=>{s[f]=d,a[f]??(a[f]=[]),a[f].push(d)},u={configsStandard:{},configsCumulative:{},configsComputed:{}};t&&Object.entries(t.configValues).forEach(([d,f])=>{const{value:h}=f,E=Yt(f.definedAtData),b=Tt("Config",d,f.definedAtData);if(r[d]=r[d]??h,n[d]=n[d]??[],o(n[d].length===0),n[d].push({configValue:h,configDefinedAt:b,configDefinedByFile:E}),f.type==="standard"){const P={type:"configsStandard",value:f.value,definedAt:k(f.definedAtData,d)};l(P,d),u.configsStandard[d]=P}if(f.type==="cumulative"){const P={type:"configsCumulative",values:f.value.map((N,C)=>{const I=f.definedAtData[C];o(I);const Le=k(I,d);return{value:N,definedAt:Le}})};l(P,d),u.configsCumulative[d]=P}if(f.type==="computed"){const P={type:"configsComputed",value:f.value};l(P,d),u.configsComputed[d]=P}const A=d;i[A]=i[A]??[],i[A].push({exportValue:h,exportSource:b,filePath:E,_filePath:E,_fileType:null,_isFromDefaultExport:null})});const c=Kt(),g={};return Object.entries(i).forEach(([d,f])=>{f.forEach(({exportValue:h,_fileType:E,_isFromDefaultExport:b})=>{g[d]=g[d]??h,E===".page"&&!b&&(d in c||(c[d]=h))})}),o(!("default"in g)),o(!("default"in i)),{from:u,source:s,sources:a,config:r,configEntries:n,exports:g,exportsAll:i,pageExports:c}}function qt(e){const{filePath:t,fileExports:n}=e;o(n),o(xe(t));const r=[];return Object.entries(n).sort(ct(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(Pt(t))i="Page";else{m(w(s),`The ${v.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([l,u])=>{yt(l,t),r.push({exportName:l,exportValue:u,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&Re.includes(i)))}),r}function Kt(){return new Proxy({},{get(...e){return Q()||R(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const Xt="modulepreload",Qt=function(e){return"/"+e},fe={},$=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=Qt(u),u in fe)return;fe[u]=!0;const c=u.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Xt,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},te={},Zt={},en={},tn={},nn=[],Ie={},rn=[{pageId:"/pages/about",isErrorPage:void 0,routeFilesystem:{routeString:"/about",definedBy:"/pages/about/"},loadConfigValuesAll:()=>$(()=>import("./pages_about.C8paj6bR.js"),__vite__mapDeps([0,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/adailtonmorreuhoje",isErrorPage:void 0,routeFilesystem:{routeString:"/adailtonmorreuhoje",definedBy:"/pages/adailtonmorreuhoje/"},loadConfigValuesAll:()=>$(()=>import("./pages_adailtonmorreuhoje.a80IQL9j.js"),__vite__mapDeps([3,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/games",isErrorPage:void 0,routeFilesystem:{routeString:"/games",definedBy:"/pages/games/"},loadConfigValuesAll:()=>$(()=>import("./pages_games.Qk2oO_Al.js"),__vite__mapDeps([4,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>$(()=>import("./pages_index.Dk7hmzUm.js"),__vite__mapDeps([5,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/meme-machine-corporation",isErrorPage:void 0,routeFilesystem:{routeString:"/meme-machine-corporation",definedBy:"/pages/meme-machine-corporation/"},loadConfigValuesAll:()=>$(()=>import("./pages_meme-machine-corporation.DQKXgcFu.js"),__vite__mapDeps([6,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/merd",isErrorPage:void 0,routeFilesystem:{routeString:"/merd",definedBy:"/pages/merd/"},loadConfigValuesAll:()=>$(()=>import("./pages_merd.BPVXpHoD.js"),__vite__mapDeps([7,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/music",isErrorPage:void 0,routeFilesystem:{routeString:"/music",definedBy:"/pages/music/"},loadConfigValuesAll:()=>$(()=>import("./pages_music.BAkOGH1K.js"),__vite__mapDeps([8,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}}],sn={configValuesSerialized:{}},on=Object.assign({}),an={...on};te[".page"]=an;const ln=Object.assign({}),un={...ln};te[".page.client"]=un;const cn=Object.assign({}),fn={...cn};Ie[".page.server"]=fn;const dn=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:Ie,pageConfigGlobalSerialized:sn,pageConfigsSerialized:rn,pageFilesEager:Zt,pageFilesExportNamesEager:tn,pageFilesExportNamesLazy:en,pageFilesLazy:te,pageFilesList:nn},Symbol.toStringTag,{value:"Module"}));Bt(dn);function gn(){o(Q())}function pn(){gn()}function de(e){const t=e/1e3;if(t<120){const n=ge(t);return`${n} second${pe(n)}`}{const n=t/60,r=ge(n);return`${r} minute${pe(r)}`}}function ge(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function pe(e){return e==="1"?"":"s"}const q=T("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function hn(e,t,n){const{hookName:r,hookFilePath:i,hookTimeout:{error:s,warning:a}}=t;let l,u;const c=new Promise((f,h)=>{l=E=>{g(),f(E)},u=E=>{g(),h(E)}}),g=()=>{p&&clearTimeout(p),d&&clearTimeout(d)},p=he(a)&&setTimeout(()=>{R(!1,`The ${r}() hook defined by ${i} is slow: it's taking more than ${de(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),d=he(s)&&setTimeout(()=>{const f=Me(`The ${r}() hook defined by ${i} timed out: it didn't finish after ${de(s)} (https://vike.dev/hooksTimeout)`);u(f)},s);return(async()=>{try{mn(n);const f=await e();l(f)}catch(f){w(f)&&q.userHookErrors.set(f,{hookName:r,hookFilePath:i}),u(f)}})(),c}function he(e){return!!e&&e!==1/0}function mn(e){q.pageContext=e,Promise.resolve().then(()=>{q.pageContext=null})}function yn(e){return typeof e=="string"&&vn(e)?`.${e}`:`[${JSON.stringify(e)}]`}function vn(e){return/^[a-z0-9\$_]+$/i.test(e)}pn();function En(){const e="vike_pageContext",t=document.getElementById(e);m(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=Ae(n);return o(y(r,"pageId","string")),o(y(r,"routeParams","string{}")),r}function Sn(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function bn(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll(),r=M(n.configValuesSerialized);return Object.assign(e.configValues,r),j(e,{isAllLoaded:!0}),e}const wn="__whileFetchingAssets";async function Pn(e,t,n){const r=Nt(t,e),i=Sn(n,e);let s;const a=!1;try{s=(await Promise.all([i&&bn(i,a),...r.map(g=>{var p;return(p=g.loadFile)==null?void 0:p.call(g)})]))[0]}catch(c){throw Cn(c)&&Object.assign(c,{[wn]:!0}),c}const l=Mt(r,s),u={};return j(u,l),j(u,{_pageFilesLoaded:r}),u}function Cn(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function _n(e,t){o(!e.startsWith("#"));const{searchOriginal:n,hashOriginal:r,pathname:i}=Xe(e,"/");let s=`${i}${n||""}`;return t!=null&&t.withoutHash||(s+=r||""),o(s.startsWith("/")),s}function Fe(e){return _n(window.location.href,e)}const me=Fe({withoutHash:!0});async function jn(){const e=En();return j(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),j(e,await $n(e.pageId)),Rn(),e}function Rn(){const e=Fe({withoutHash:!0});m(me===e,`The URL was manipulated before the hydration finished ('${me}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function $n(e){const t={},{pageFilesAll:n,pageConfigs:r}=await Ut();return j(t,{_pageFilesAll:n,_pageConfigs:r}),j(t,await Pn(e,t._pageFilesAll,t._pageConfigs)),n.filter(i=>i.fileType!==".page.server").forEach(i=>{var s;R(!((s=i.fileExports)!=null&&s.onBeforeRender),`export { onBeforeRender } of ${i.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const Tn=T("getHook.ts",{});function K(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=An(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),zn(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function xn(e,t){K(e,t)}function zn(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),m(H(e),`Hook ${t}() defined by ${n} should be a function`)}function An(e,t){const n=In(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=Fn(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function In(e){if(e===void 0)return{};if(e===!1)return!1;m(w(e),`Setting ${v.cyan("hooksTimeout")} should be ${v.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}m(w(r),`Setting ${v.cyan(`hooksTimeout.${n}`)} should be ${v.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const l=r[a];if(l===void 0||l===!1)return l;const u=`Setting ${v.cyan(`hooksTimeout.${n}.${a}`)} should be`;return m(typeof l=="number",`${u} ${v.cyan("false")} or a number`),m(l>0,`${u} a positive number`),l});t[n]={error:i,warning:s}}),t}function Fn(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:Tn.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}const Ln="not-serializable",O=T("getPageContextProxyForUser.ts",{});function On(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=yn(n);return m(r!==Ln,`Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`),kn(e,n,i),r}})}function kn(e,t,n){if(Vn(t)||t in e||Wn(t)||!e._hasPageContextFromServer)return;const r=`pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;e._hasPageContextFromClient?R(!1,r,{onlyOnce:!1,showStackTrace:!0}):m(!1,r)}const Dn=["then","toJSON"];function Wn(e){return!!(Dn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Vn(e){return O.prev===e||O.prev==="__v_raw"?!0:(O.prev=e,window.setTimeout(()=>{O.prev=void 0},0),!1)}function Bn(e){Un(e),Hn(e)}function Un(e){Et(e.pageId,e._pageConfigs)&&o(y(e,"is404","boolean"))}function Hn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!w(t)){R(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}function Nn(e){o(e.pageId),o("config"in e),o("configEntries"in e),Bn(e),"_pageId"in e||Object.defineProperty(e,"_pageId",{get(){return R(!1,"pageContext._pageId has been renamed to pageContext.pageId",{showStackTrace:!0,onlyOnce:!0}),e.pageId},enumerable:!1}),Gn(e)}function Gn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>gt(n,r))),Object.defineProperties(e,t)}function Jn(e,t){{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}const n=e.config.Page||e.exports.Page;return j(e,{Page:n}),Yn(e),Nn(e),On(e)}function Yn(e){Mn(e)}function Mn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function qn(e,t){const n=Jn(e);let r=null,i;r=K(e,"render"),i="render";{const l=K(e,"onRenderClient");l&&(r=l,i="onRenderClient")}if(!r){const l=Kn(e);if(o(l),e._pageConfigs.length>0)m(!1,`No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vike.dev/onRenderClient`);else{const u=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let c;u.length===0?c="No file `*.page.client.*` found for URL "+l:c="One of the following files should export a render() hook: "+u.map(g=>g.filePath).join(" "),m(!1,c)}}o(r);const s=r.hookFn;o(i);const a=await hn(()=>s(n),r,e);m(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Kn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}qe();We();Xn();async function Xn(){var t,n;const e=await jn();await qn(e),xn(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
