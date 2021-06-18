var __vite_style__=document.createElement("style");__vite_style__.innerHTML="@keyframes nutFadeIn-1d2dfb33{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-1d2dfb33{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-1d2dfb33],.nutFade-leave-active[data-v-1d2dfb33],.nutFadeIn[data-v-1d2dfb33],.nutFadeOut[data-v-1d2dfb33]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-1d2dfb33],.nutFadeIn[data-v-1d2dfb33]{animation-name:nutFadeIn-1d2dfb33}.nutFade-leave-active[data-v-1d2dfb33],.nutFadeOut[data-v-1d2dfb33]{animation-name:nutFadeOut-1d2dfb33}@keyframes nutZoomIn-1d2dfb33{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-1d2dfb33{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-1d2dfb33],.nutZoom-leave-active[data-v-1d2dfb33],.nutZoomIn[data-v-1d2dfb33],.nutZoomOut[data-v-1d2dfb33]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-1d2dfb33],.nutZoomIn[data-v-1d2dfb33]{animation-name:nutZoomIn-1d2dfb33}.nutZoom-leave-active[data-v-1d2dfb33],.nutZoomOut[data-v-1d2dfb33]{animation-name:nutZoomOut-1d2dfb33}@keyframes nutEaseIn-1d2dfb33{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-1d2dfb33{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-1d2dfb33],.nutEase-leave-active[data-v-1d2dfb33],.nutEaseIn[data-v-1d2dfb33],.nutEaseOut[data-v-1d2dfb33]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-1d2dfb33],.nutEaseIn[data-v-1d2dfb33]{animation-name:nutEaseIn-1d2dfb33}.nutEase-leave-active[data-v-1d2dfb33],.nutEaseOut[data-v-1d2dfb33]{animation-name:nutEaseOut-1d2dfb33}@keyframes nutDropIn-1d2dfb33{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-1d2dfb33{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-1d2dfb33],.nutDrop-leave-active[data-v-1d2dfb33],.nutDropIn[data-v-1d2dfb33],.nutDropOut[data-v-1d2dfb33]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-1d2dfb33],.nutDropIn[data-v-1d2dfb33]{animation-name:nutDropIn-1d2dfb33}.nutDrop-leave-active[data-v-1d2dfb33],.nutDropOut[data-v-1d2dfb33]{animation-name:nutDropOut-1d2dfb33}@keyframes rotation-1d2dfb33{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-1d2dfb33],.nutRotate-leave-active[data-v-1d2dfb33],.nutRotateIn[data-v-1d2dfb33],.nutRotateOut[data-v-1d2dfb33]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-1d2dfb33],.nutRotateIn[data-v-1d2dfb33]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-1d2dfb33],.nutRotateOut[data-v-1d2dfb33]{animation-name:nutRotateOut}.drag-boundary[data-v-1d2dfb33]{position:absolute;top:360px;left:8px;width:300px;height:200px;border:1px solid red}",document.head.appendChild(__vite_style__),System.register(["./mobile-legacy.9727b9fc.js","./vendor-legacy.20dce152.js","./index-legacy.457d4c62.js"],(function(t){"use strict";var a,e,n,d,o,i,u,r,f;return{setters:[function(t){a=t.c},function(t){e=t.x,n=t.y,d=t.r,o=t.o,i=t.c,u=t.f,r=t.s,f=t.j},function(){}],execute:function(){const{createDemo:m}=a("drag");var c=t("default",m({setup:()=>({right:function(){return document.documentElement.clientWidth-300-9},bottom:function(){return document.documentElement.clientHeight-559}})}));const b=r();e("data-v-1d2dfb33");const s={class:"demo full"},v=u("h2",null,"基础用法",-1),l=f("触摸移动"),p=u("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),y=f("只能X轴拖拽"),_=f("只能Y轴拖拽"),x=u("h2",{style:{top:"60px",position:"relative"}},"自动吸边",-1),g=f("拖动我"),h=u("h2",{style:{top:"90px",position:"relative"}},"限制拖动边界",-1),I=u("div",{class:"drag-boundary"},null,-1),O=f("限制拖拽边界");n();const E=b(((t,a,e,n,r,f)=>{const m=d("nut-button"),c=d("nut-drag");return o(),i("div",s,[v,u(c,{style:{top:"120px",left:"8px"}},{default:b((()=>[u(m,{type:"primary"},{default:b((()=>[l])),_:1})])),_:1}),p,u(c,{direction:"x",style:{top:"200px",left:"8px"}},{default:b((()=>[u(m,{type:"primary"},{default:b((()=>[y])),_:1})])),_:1}),u(c,{direction:"y",style:{top:"200px",right:"50px"}},{default:b((()=>[u(m,{type:"primary"},{default:b((()=>[_])),_:1})])),_:1}),x,u(c,{direction:"x",attract:!0,style:{top:"275px",left:"8px"}},{default:b((()=>[u(m,{type:"primary"},{default:b((()=>[g])),_:1})])),_:1}),h,I,u(c,{boundary:{top:361,left:9,bottom:t.bottom(),right:t.right()},style:{top:"400px",left:"50px"}},{default:b((()=>[u(m,{type:"primary"},{default:b((()=>[O])),_:1})])),_:1},8,["boundary"])])}));c.render=E,c.__scopeId="data-v-1d2dfb33"}}}));