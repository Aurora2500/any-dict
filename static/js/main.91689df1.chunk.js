(this["webpackJsonpany-dict"]=this["webpackJsonpany-dict"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(6),r=n.n(l),i=(n(14),n(9)),s=n(2),u=n(0),o=function(e){var t=e.label,n=e.value,a=e.setValue;return Object(u.jsxs)("div",{className:"labeled-input",children:[Object(u.jsx)("label",{className:"labeled-input-label",children:t}),Object(u.jsx)("input",{className:"labeled-input-input",value:n,onChange:function(e){return a(e.target.value)}})]})},b=function(e){var t=e.label,n=e.value,a=e.setValue;return Object(u.jsxs)("div",{className:"labeled-input",children:[Object(u.jsx)("label",{className:"labeled-input-label",children:t}),Object(u.jsx)("textarea",{className:"labeled-input-input",value:n,onChange:function(e){return a(e.target.value)}})]})},d=function(e){var t=e.entryDispatch,n=Object(a.useState)(""),c=Object(s.a)(n,2),l=c[0],r=c[1],i=Object(a.useState)(""),d=Object(s.a)(i,2),j=d[0],O=d[1],p=Object(a.useState)(""),v=Object(s.a)(p,2),f=v[0],h=v[1];return Object(u.jsxs)("form",{className:"add-entry-form",onSubmit:function(e){e.preventDefault(),t({type:"add",payload:{word:l,translation:j,body:f}}),console.log("submitted")},children:[Object(u.jsx)(o,{label:"word",value:l,setValue:r}),Object(u.jsx)(o,{label:"translation",value:j,setValue:O}),Object(u.jsx)(b,{label:"word",value:f,setValue:h}),Object(u.jsx)("button",{type:"submit",children:"submit"})]})},j=function(e){var t=e.word,n=e.translation,a=e.body;return Object(u.jsxs)("article",{className:"dictionary-entry",children:[Object(u.jsx)("h3",{children:t}),n&&Object(u.jsxs)("div",{children:["Translation: ",Object(u.jsx)("b",{children:n})]}),a]})},O=n(8),p=function(e,t){switch(t.type){case"add":return[].concat(Object(O.a)(e),[t.payload]);case"replace":return t.payload}},v=(n(16),n(7)),f=n.n(v);var h=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useReducer)(p,[]),r=Object(s.a)(l,2),o=r[0],b=r[1],O=Object(a.useState)(!1),v=Object(s.a)(O,2),h=v[0],x=v[1],y=f.a.filter(n,o,{extract:function(e){return e.word}});return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("button",{onClick:function(){var e=new Blob([JSON.stringify(o)]),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="dictionary.json",n.click(),URL.revokeObjectURL(t)},children:"download"}),Object(u.jsx)("input",{onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){var t,n,a=null!==(t=null===(n=e.target)||void 0===n?void 0:n.result)&&void 0!==t?t:"",c="string"==typeof a?a:"",l=JSON.parse(c);b({type:"replace",payload:l})},n.readAsText(t)},type:"file"}),Object(u.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)}})," ",Object(u.jsx)("button",{onClick:function(){return x((function(e){return!e}))},children:"Add"}),h&&Object(u.jsx)(d,{entryDispatch:b})]}),Object(u.jsx)("div",{className:"entry-list",children:y.map((function(e){return Object(u.jsx)(j,Object(i.a)({},e.original),e.original.word)}))})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.91689df1.chunk.js.map