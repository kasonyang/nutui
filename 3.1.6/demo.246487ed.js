import{c as s}from"./mobile.c80a6c29.js";import{_ as e}from"./index.4b39d8d5.js";import{a,r as t,e as l,j as o,k as i,B as n,C as d,g as r,o as u,l as c}from"./vendor.f398f23f.js";const{createDemo:p}=s("overlay"),v=p({props:{},setup:()=>({state:a({show:!1,show2:!1})})}),f=s=>(n("data-v-3325d30e"),s=s(),d(),s),h={class:"demo"},m=f((()=>r("h2",null,"基础用法",-1))),b=c("显示遮罩层"),w=f((()=>r("h2",null,"嵌套内容",-1))),_=c("嵌套内容"),y=f((()=>r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1)));var j=e(v,[["render",function(s,e,a,n,d,r){const c=t("nut-button"),p=t("nut-overlay"),v=t("nut-cell");return u(),l("div",h,[m,o(v,null,{default:i((()=>[o(c,{type:"primary",onClick:e[0]||(e[0]=e=>s.state.show=!0)},{default:i((()=>[b])),_:1}),o(p,{visible:s.state.show,"onUpdate:visible":e[1]||(e[1]=e=>s.state.show=e),"z-index":2e3},null,8,["visible"])])),_:1}),w,o(v,null,{default:i((()=>[o(c,{type:"success",onClick:e[2]||(e[2]=e=>s.state.show2=!0)},{default:i((()=>[_])),_:1}),o(p,{visible:s.state.show2,"onUpdate:visible":e[3]||(e[3]=e=>s.state.show2=e),"z-index":2e3},{default:i((()=>[y])),_:1},8,["visible"])])),_:1})])}],["__scopeId","data-v-3325d30e"]]);export{j as default};