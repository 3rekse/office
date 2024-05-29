import{o as e,c as l,k as h,q as k,s as n,A as a,e as i,a6 as s}from"../modules/vue-CzHRG3tJ.js";import{I as r}from"./default-DHB9zM-F.js";import{_ as d,eL as t}from"../index-Bxv0B-Cu.js";import{p as o,u as p,f as g}from"./context-BRdP0yFI.js";import"../modules/shiki-C5i64R19.js";const c=i("h1",null,"Validazione lato client",-1),y=i("p",null,"I moduli consentono agli utenti di fornire dati di input",-1),u=i("p",null,"HTML ha alcuni attributi che possiamo utilizzare per validare l’input che il client sta fornendo.",-1),m=i("p",null,"Non solo possiamo rendere specifici campi del modulo obbligatori, ma possiamo anche validare che i numeri siano un intervallo specifico, o che l’input di testo segua uno schema specifico.",-1),D=i("p",null,[s("Il codice di esempio qui sotto mostra come utilizzare l’attributo "),i("code",null,"required"),s(" per rendere un input obbligatorio.")],-1),B=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-html"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"form"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"label"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," for"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"password"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Name (required)"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"label"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"input"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," id"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"fullname"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"fullname"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," type"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"text"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," required"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"required"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"form"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),f={__name:"289",setup(A){return o(t),p(),(_,C)=>(e(),l(r,k(n(a(g)(a(t),288))),{default:h(()=>[c,y,u,m,D,B]),_:1},16))}},z=d(f,[["__file","/@slidev/slides/289.md"]]);export{z as default};
