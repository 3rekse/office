import{o as n,c as r,k as s,q as a,s as u,A as e,e as l,a6 as t}from"../modules/vue-CzHRG3tJ.js";import{I as i}from"./default-CESjIoGN.js";import{_ as d,d6 as o}from"../index-CNiOs4Um.js";import{p as c,u as p,f as _}from"./context-CzMzD048.js";import"../modules/shiki-C5i64R19.js";const g=l("h2",null,"Input tests",-1),m=l("p",null,[t("Puoi testare diverse combinazioni di input collegando gli altri estremi dei cavi con clip alligatore ai pin "),l("strong",null,"A4"),t(" e "),l("strong",null,"A7"),t(" a "),l("strong",null,"GND"),t(" o "),l("strong",null,"3.3V"),t(". Il pin "),l("strong",null,"GND"),t(" produrrà un valore di input "),l("code",null,"false"),t(" e "),l("strong",null,"3.3V"),t(" produrrà un valore di input "),l("code",null,"true"),t(". Sposta l’altro estremo del cavo con clip alligatore collegato al pin osservatore "),l("strong",null,"A6"),t(" a ciascuno degli output "),l("strong",null,"A1"),t(", "),l("strong",null,"A2"),t(" e "),l("strong",null,"A3"),t(" per vedere il risultato dell’operazione logica programmata per quei pin.")],-1),f=l("p",null,[t("Come esempio, ecco la tabella di verità con le tensioni dei pin per l’operazione "),l("strong",null,"NOT"),t(":")],-1),h=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"A4"),l("th",null,"A1"),l("th",null,"Pixels")])]),l("tbody",null,[l("tr",null,[l("td",null,"GND"),l("td",null,"3.3V"),l("td",null,[l("code",null,"[light.setAll(0x00ff00)]")])]),l("tr",null,[l("td",null,"3.3V"),l("td",null,"GND"),l("td",null,[l("code",null,"[light.setAll(0xffff00)]")])]),l("tr",null,[l("td",null,[l("br")]),l("td"),l("td")])])],-1),A=l("p",null,[t("Do test connections for the inputs and check the results for the "),l("strong",null,"OR"),t(" and "),l("strong",null,"AND"),t(" outputs.")],-1),v={__name:"185",setup(x){return c(o),p(),(N,D)=>(n(),r(i,a(u(e(_)(e(o),184))),{default:s(()=>[g,m,f,h,A]),_:1},16))}},G=d(v,[["__file","/@slidev/slides/185.md"]]);export{G as default};