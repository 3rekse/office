import{o as i,c as o,k as n,q as u,s as r,A as t,e as l,a6 as s}from"../modules/vue-CzHRG3tJ.js";import{I as d}from"./two-cols-header-idZowl6v.js";import{_ as p,d9 as e}from"../index-CNiOs4Um.js";import{p as c,u as f,f as h}from"./context-CzMzD048.js";import"../modules/shiki-C5i64R19.js";const g=l("h2",null,"XOR device",-1),_=l("p",null,[s("Il nostro script della porta logica è un po’ diverso questa volta. Per semplificare la formazione dell’espressione per "),l("strong",null,"XOR"),s(", assegneremo variabili ai valori di input e output.")],-1),m=l("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[l("code",{class:"language-"},[l("span",{class:"line"},[l("span",null,"let A = false")]),s(`
`),l("span",{class:"line"},[l("span",null,"let B = false")]),s(`
`),l("span",{class:"line"},[l("span",null,"let Q = false")]),s(`
`),l("span",{class:"line"},[l("span",null,"forever(function () {")]),s(`
`),l("span",{class:"line"},[l("span",null,"    A = pins.A4.digitalRead()")]),s(`
`),l("span",{class:"line"},[l("span",null,"    B = pins.A7.digitalRead()")]),s(`
`),l("span",{class:"line"},[l("span",null,"    Q = !(A) && B || A && !(B)")]),s(`
`),l("span",{class:"line"},[l("span",null,"    pins.A2.digitalWrite(Q)")]),s(`
`),l("span",{class:"line"},[l("span",null,"    pause(100)")]),s(`
`),l("span",{class:"line"},[l("span",null,"})")])])],-1),A=l("p",null,[s("Collega gli input per "),l("strong",null,"A4"),s(" e "),l("strong",null,"A7"),s(" secondo la tabella di verità "),l("strong",null,"XOR"),s(" e verifica se gli output nella tabella corrispondono ai tuoi risultati.")],-1),v=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"A4"),l("th",null,"A7"),l("th",null,"A2"),l("th",null,"Pixels")])]),l("tbody",null,[l("tr",null,[l("td",null,"GND"),l("td",null,"GND"),l("td",null,"GND"),l("td",null,[l("code",null,"[light.setAll(0xffff00)]")])]),l("tr",null,[l("td",null,"GND"),l("td",null,"3.3V"),l("td",null,"3.3V"),l("td",null,[l("code",null,"[light.setAll(0x00ff00)]")])]),l("tr",null,[l("td",null,"3.3V"),l("td",null,"GND"),l("td",null,"3.3V"),l("td",null,[l("code",null,"[light.setAll(0x00ff00)]")])]),l("tr",null,[l("td",null,"3.3V"),l("td",null,"3.3V"),l("td",null,"GND"),l("td",null,[l("code",null,"[light.setAll(0xffff00)]")])])])],-1),k={__name:"188",setup(x){return c(e),f(),(b,N)=>(i(),o(d,u(r(t(h)(t(e),187))),{left:n(a=>[g,_,m]),right:n(a=>[A,v]),_:1},16))}},R=p(k,[["__file","/@slidev/slides/188.md"]]);export{R as default};
