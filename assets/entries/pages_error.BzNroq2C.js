import{j as e,B as p,a as m,T as n,L as u,i as c,b as i,R as x,c as g,d as f}from"../chunks/chunk-Bg-ryAV_.js";const l=void 0,j=void 0,h=[],y=[],w=({})=>e.jsx(p,{className:"w-body cpnq0oi cyxohe c18akm75 c1uwwhq4 c1u05j8u c5fgij5 c17azk3o c12whm2v",children:e.jsx(m,{className:"w-box ciap98x c1s0g5eq c1020anh c2vkpsx cype6b",children:e.jsxs(n,{className:"w-text c1veg00p c1jird8p cr065up cscf6co cvu0wsw c1iwfytz cmfqypm",children:[e.jsx(n,{tag:"span",className:"w-text cmfqypm",children:"OOPS!"}),e.jsx(n,{className:"w-text cxpj1dz c1ohyem cr065up cscf6co c5swzl5 c1iwfytz",children:"You Took the Wrong Train!"}),e.jsx(u,{href:"/",className:"w-link c1ohyem cxpj1dz cvsl5r2",children:"Return to Home"})]})})}),v=({data:o})=>{const{pageMeta:t}=o,{origin:r}=new URL(o.url);let s=t.socialImageUrl;return t.socialImageAssetName&&(s=`${r}${c({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,s&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:d})=>e.jsx("meta",{property:a,content:d},a)),j,h.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),y.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a.name}`,as:"image"},a.id))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:v},Symbol.toStringTag,{value:"Module"})),T=({data:o})=>{const{system:t,resources:r,url:s}=o;return e.jsx(x.Provider,{value:{imageLoader:c,assetBaseUrl:i,imageBaseUrl:g,resources:r},children:e.jsx(w,{system:t},s)})},z=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),b={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/error/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/error/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{b as configValuesSerialized};
