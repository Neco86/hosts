(self.webpackChunktest=self.webpackChunktest||[]).push([[371],{75941:function(k){k.exports={wrapper:"wrapper___3iih1",config:"config___1jRLL",workArea:"workArea___3Z94m",input:"input___3IKyb",btn:"btn___h4QN4",parseResult:"parseResult___2m4fz",row:"row___35U44",templateInput:"templateInput___3qfFR",errInput:"errInput___2Sb3-",table:"table___3-dMD"}},66635:function(k,M,n){"use strict";n.r(M),n.d(M,{default:function(){return re}});var Re=n(59319),J=n(34866),Ee=n(63185),K=n(9676),Te=n(57663),g=n(27884),Ne=n(34792),E=n(0),T=n(86582),h=n(2824),$e=n(47673),B=n(20086),Q=n(75941),o=n.n(Q),a=n(67294),D=n(7869),W=n.n(D),X=n(30381),j=n.n(X);function q(i){for(var c=new ArrayBuffer(i.length),l=new Uint8Array(c),s=0;s<i.length;s++)l[s]=i.charCodeAt(s)&255;return c}function _(i){var c=W().write({SheetNames:["sheet1"],Sheets:{sheet1:i}},{bookType:"xlsx",bookSST:!1,type:"binary"}),l=new Blob([q(c)],{type:"application/octet-stream"});return l}function ee(i){var c=_(i),l=URL.createObjectURL(c),s=document.createElement("a");s.href=l,s.download="".concat(j()().format("YYYY_MM_DD"),".xlsx"),s.innerText="".concat(j()().format("YYYY_MM_DD"),".xlsx"),s.click(),URL.revokeObjectURL(l)}var te=function(){var i="https://neco86.github.io/templateReport/config.json?t=".concat(Date.now());return fetch(i).then(function(c){return c.json()})},u=n(85893),ae=B.Z.TextArea,ne=D.utils.table_to_sheet,w=/MOMENT\(.+\)/g,le=function i(c){return c.map(function(l){return{title:l.title.replace(w,function(s){return j()().format(s.slice(7,s.length-1))}),dataIndex:l.dataIndex,sorter:l.sorter?function(s,N){var S,v;return s[(S=l==null?void 0:l.dataIndex)!==null&&S!==void 0?S:0]-N[(v=l==null?void 0:l.dataIndex)!==null&&v!==void 0?v:0]}:void 0,children:l.children?i(l.children):void 0}})},re=function(){var i=(0,a.useState)([]),c=(0,h.Z)(i,2),l=c[0],s=c[1],N=(0,a.useState)(""),S=(0,h.Z)(N,2),v=S[0],ue=S[1],se=(0,a.useState)([]),z=(0,h.Z)(se,2),I=z[0],oe=z[1],ie=(0,a.useState)(!1),Y=(0,h.Z)(ie,2),$=Y[0],ce=Y[1],de=(0,a.useState)(""),U=(0,h.Z)(de,2),C=U[0],L=U[1],ve=(0,a.useState)([]),O=(0,h.Z)(ve,2),A=O[0],fe=O[1],me=(0,a.useState)([]),P=(0,h.Z)(me,2),pe=P[0],F=P[1],V=(0,a.useRef)(),he=(0,a.useMemo)(function(){return v.split(`
`).filter(Boolean).map(function(t){return t.split(/(\$\{[0-9]+\})/g).filter(Boolean).map(function(e){return/\$\{[0-9]+\}/.test(e)?{type:"input",dataIndex:+e.slice(2,e.length-1)}:{type:"text",value:e}})})},[v]),H=(0,a.useMemo)(function(){var t,e;return((t=(e=v.split(/(\$\{[0-9]+\})/g).filter(function(r){return/\$\{[0-9]+\}/.test(r)}).map(function(r){return+r.slice(2,r.length-1)}).sort(function(r,d){return d-r}))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:-1)+1},[v]),x=(0,a.useMemo)(function(){return(0,T.Z)(new Array(H)).map(function(){return""})},[H]),xe=(0,a.useState)(x),G=(0,h.Z)(xe,2),y=G[0],Z=G[1],ge=(0,a.useCallback)(function(t){return function(e){Z(y.map(function(r,d){return d===t?e.target.value:r}))}},[y]),Se=(0,a.useCallback)(function(){fe([].concat((0,T.Z)(A),[y])),L(""),Z(x),F([]),V.current.focus()},[A,x,y]),Ce=(0,a.useCallback)(function(){Z(x),F([])},[x]),b=(0,a.useCallback)(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:C,e=(0,T.Z)(x),r=[];I.forEach(function(d,f){var m,p;e[f]=(m=(p=t.replace(/\s/g,"").match(d))===null||p===void 0?void 0:p[1])!==null&&m!==void 0?m:"",e[f]||r.push(f)}),Z(e),F(r)},[x,C,I]),ye=(0,a.useCallback)(function(){var t=ne(document.getElementById("table"));ee(t)},[]),be=(0,a.useCallback)(function(t){var e=t.target.checked;ce(e),e&&C&&b()},[b,C]),je=(0,a.useCallback)(function(t){var e=t.target.value;L(e),$&&e&&b(e)},[$,b]),R=(0,a.useCallback)(function(t){!t||!t.wordTemplate||!t.columns||!t.parseRules?E.default.error("\u914D\u7F6E\u6587\u4EF6\u4E0D\u6B63\u786E!"):(ue(t.wordTemplate.replace(w,function(e){return j()().format(e.slice(7,e.length-1))})),s(le(t.columns)),oe(t.parseRules.map(function(e){return new RegExp(e)})),E.default.success("\u5BFC\u5165\u914D\u7F6E\u6210\u529F!"))},[]),Ie=(0,a.useCallback)(function(){var t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=function(e){var r,d,f=e==null||(r=e.target)===null||r===void 0||(d=r.files)===null||d===void 0?void 0:d[0];if(f){var m=new FileReader;m.onload=function(){var p=m.result;try{var Ze=JSON.parse(p);R(Ze)}catch(Fe){E.default.error("\u914D\u7F6E\u4E0D\u6B63\u786E!")}},m.readAsText(f,"UTF-8")}},t.click()},[R]),Ae=(0,a.useCallback)(function(){te().then(R)},[R]);return(0,u.jsxs)("div",{className:o().wrapper,children:[(0,u.jsxs)("div",{className:o().config,children:[(0,u.jsx)(g.Z,{size:"small",onClick:Ie,children:"\u5BFC\u5165\u914D\u7F6E"}),(0,u.jsx)(g.Z,{size:"small",onClick:Ae,children:"\u4F7F\u7528\u8FDC\u7A0B\u914D\u7F6E"})]}),(0,u.jsxs)("div",{className:o().workArea,children:[(0,u.jsx)(ae,{ref:V,autoFocus:!0,className:o().input,value:C,onChange:je}),(0,u.jsxs)("div",{children:[(0,u.jsx)(g.Z,{className:o().btn,size:"small",type:"primary",onClick:b,disabled:!C,children:"\u89E3\u6790\u2192"}),(0,u.jsx)(K.Z,{className:o().btn,checked:$,onChange:be,children:"\u81EA\u52A8\u2192"})]}),(0,u.jsxs)("div",{className:o().parseResult,children:[he.map(function(t,e){return(0,u.jsx)("div",{className:o().row,children:t.map(function(r,d){var f=r.type,m=r.value,p=r.dataIndex;return(0,u.jsxs)(a.Fragment,{children:[f==="input"&&(0,u.jsx)(B.Z,{value:y[p],onChange:ge(p),className:"".concat(o().templateInput," ").concat(pe.includes(p)&&o().errInput),size:"small"}),f==="text"&&m]},"".concat(e,"_").concat(d))})},e)}),(0,u.jsxs)("div",{className:o().row,children:[(0,u.jsx)(g.Z,{size:"small",type:"primary",onClick:Se,disabled:!v||!I.length,children:"\u786E\u8BA4"}),(0,u.jsx)(g.Z,{size:"small",type:"primary",danger:!0,onClick:Ce,disabled:!v||!I.length,children:"\u6E05\u7A7A"})]})]})]}),(0,u.jsx)(g.Z,{className:o().btn,size:"small",type:"primary",disabled:!A.length,onClick:ye,children:"\u5BFC\u51FA"}),(0,u.jsx)(J.Z,{id:"table",className:o().table,columns:l,dataSource:A,bordered:!0,pagination:!1})]})}},18685:function(){},20067:function(){},55382:function(){},72095:function(){},61219:function(){}}]);