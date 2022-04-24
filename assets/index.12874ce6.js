import{o as n,c as i,a,u as k,R as E,b as e,t as v,n as z,w as $,p as u,d as p,r as A,e as I,f as h,g as O,h as T,i as L,F as N,j as V,k as U,l as D,m as q,q as H,s as R,v as G}from"./vendor.ed83d83f.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const _ of l.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&r(_)}).observe(document,{childList:!0,subtree:!0});function o(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerpolicy&&(l.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?l.credentials="include":c.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(c){if(c.ep)return;c.ep=!0;const l=o(c);fetch(c.href,l)}};j();const W={class:"main-div"},K={setup(t){return(s,o)=>(n(),i("div",W,[a(k(E))]))}},Q="modulepreload",B={},Z="/",J=function(s,o){return!o||o.length===0?s():Promise.all(o.map(r=>{if(r=`${Z}${r}`,r in B)return;B[r]=!0;const c=r.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":Q,c||(_.as="script",_.crossOrigin=""),_.href=r,document.head.appendChild(_),c)return new Promise((b,F)=>{_.addEventListener("load",b),_.addEventListener("error",F)})})).then(()=>s())};var X="/assets/logo.da9b9095.svg";var d=(t,s)=>{const o=t.__vccOpts||t;for(const[r,c]of s)o[r]=c;return o};const Y={props:{content:{type:String,default:"Default Button"},main:{type:Boolean,default:!1}},setup(t){return(s,o)=>(n(),i("div",{class:z(["main-button-container",{main:t.main}])},[e("button",null,v(t.content),1)],2))}};var m=d(Y,[["__scopeId","data-v-26f0222c"]]);const tt=t=>(u("data-v-e34b6b48"),t=t(),p(),t),et={class:"main-navbar-container"},st=tt(()=>e("a",{href:"#",class:"logo-container"},[e("img",{src:X,alt:"",class:"logo"})],-1)),ot={class:"links-container"},at=I("Home"),ct=I("About"),nt=I("Contact"),it={class:"buttons-container"},rt={setup(t){return(s,o)=>{const r=A("router-link");return n(),i("div",et,[st,e("div",ot,[a(r,{class:"link",to:"Home"},{default:$(()=>[at]),_:1}),a(r,{class:"link",to:"About"},{default:$(()=>[ct]),_:1}),a(r,{class:"link",to:"Contact"},{default:$(()=>[nt]),_:1})]),e("div",it,[a(m,{class:"button",content:"Login"}),a(m,{class:"button",content:"Signup",main:""})])])}}};var lt=d(rt,[["__scopeId","data-v-e34b6b48"]]),_t="/assets/main-image-min.7c53999a.jpg";const f=t=>(u("data-v-238d24d9"),t=t(),p(),t),dt={class:"main-product"},ut=f(()=>e("img",{src:_t,alt:"",class:"back-image"},null,-1)),pt=f(()=>e("div",{class:"filter"},null,-1)),vt={class:"data-container"},mt=f(()=>e("h1",{class:"title"},"Unicampo",-1)),ht=f(()=>e("p",{class:"description"}," Somos una empresa nueva con el objetivo de proveer servicios de contacto y transporte a todos los campesinos de colombia con el fin de mejorar e implementar nuevas maneras de vender sus productos a traves de la tecnologia y las redes de informcion permitiendo una mejor comunicacion y ofreciendo una experiencia rapida y agil para realizar sus operaciones ",-1)),ft={setup(t){return(s,o)=>(n(),i("div",dt,[ut,pt,e("div",vt,[mt,ht,a(m,{class:"button",content:"Leer mas"})])]))}};var gt=d(ft,[["__scopeId","data-v-238d24d9"]]);const g=t=>(u("data-v-5965b41e"),t=t(),p(),t),yt={class:"card-container"},bt={class:"card-image-container"},$t=["src"],xt={class:"card-title"},wt=g(()=>e("p",{class:"card-description"}," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit illum deserunt voluptatibus, laborum temporibus neque ",-1)),St={class:"card-options"},kt=g(()=>e("h3",{class:"card-option-title"},"Quantity",-1)),It=g(()=>e("h3",{class:"card-option-title"},"Total",-1)),Ct=g(()=>e("h3",{class:"card-option-title"},"Delivery",-1)),Lt={class:"count-option"},Nt={class:"text"},Vt={class:"total-text"},Bt={class:"delivery-text"},Mt={props:{title:{type:String,default:"Product"},value:{type:Number,default:10},delivery:{type:String,default:"Default"},image:{type:String,default:"src/assets/logo.svg"},scale:{type:Number,default:1}},setup(t){const s=t;h(l=>({"1bb0d1eb":t.scale}));const o=O(1),r=T(()=>s.value*o.value),c=l=>{o.value+=o.value<=1&&l<0?0:l};return(l,_)=>(n(),i("div",yt,[e("div",bt,[e("img",{class:"card-image",src:t.image},null,8,$t)]),e("h1",xt,v(t.title),1),wt,e("div",St,[kt,It,Ct,e("div",Lt,[e("button",{class:"count-button",onClick:_[0]||(_[0]=b=>c(-1))}),e("h6",Nt,v(o.value),1),e("button",{class:"count-button",onClick:_[1]||(_[1]=b=>c(1))})]),e("h6",Vt,"$ "+v(k(r)),1),e("h6",Bt,v(t.delivery),1)]),a(m,{class:"card-button",content:"Buy",main:""})]))}};var x=d(Mt,[["__scopeId","data-v-5965b41e"]]);const zt=t=>(u("data-v-08219b50"),t=t(),p(),t),Pt={class:"carrousel-container"},Ft=zt(()=>e("h1",{class:"carrousel-title"},"Por mas productos del campo!",-1)),Et={class:"cards-container"},At={setup(t){return(s,o)=>(n(),i("div",Pt,[Ft,e("div",Et,[a(x,{value:15,title:"Manzana",delivery:"Unicampo",image:"./shop/apple.png",scale:1}),a(x,{value:20,title:"Zanahoria",delivery:"Unicampo",image:"./shop/carrot.png",scale:1.2},null,8,["scale"]),a(x,{value:10,title:"Papa",delivery:"Unicampo",image:"./shop/potato.png",scale:1.25},null,8,["scale"])])]))}};var Ot=d(At,[["__scopeId","data-v-08219b50"]]);const Tt=t=>(u("data-v-6aac9bce"),t=t(),p(),t),Ut={key:0,class:"section-image-container"},Dt=["src"],qt={class:"section-text-container"},Ht={class:"section-title"},Rt=Tt(()=>e("p",{class:"section-description"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illo nulla dolores in, alias blanditiis nostrum eum amet maiores sint ducimus nam perspiciatis, beatae commodi soluta, enim hic! Ab, veritatis! ",-1)),Gt={key:1,class:"section-image-container"},jt=["src"],Wt={props:{title:{type:String,default:"Section Title"},image:{type:String,default:"src/assets/logo.svg"},reverse:{type:Boolean,default:!1},scale:{type:Number,default:1}},setup(t){return h(s=>({"6609e4dc":t.scale})),(s,o)=>(n(),i("div",{class:z(["section-container",{reverse:t.reverse}])},[t.reverse?L("",!0):(n(),i("div",Ut,[e("img",{src:t.image,alt:"",class:"section-image"},null,8,Dt)])),e("div",qt,[e("h1",Ht,v(t.title),1),Rt,a(m,{content:"Show more",class:"section-button",main:""})]),t.reverse?(n(),i("div",Gt,[e("img",{src:t.image,alt:"",class:"section-image"},null,8,jt)])):L("",!0)],2))}};var w=d(Wt,[["__scopeId","data-v-6aac9bce"]]);const Kt={class:"main-sections-container"},Qt={setup(t){return(s,o)=>(n(),i("div",Kt,[a(w,{title:"Frutas",image:"./shop/fruits.png",scale:1.18},null,8,["scale"]),a(w,{title:"Verduras",image:"./shop/vegetables.png",scale:1.22,reverse:""},null,8,["scale"]),a(w,{title:"Productos animales",image:"./shop/meat.png",scale:1.21},null,8,["scale"])]))}};var Zt=d(Qt,[["__scopeId","data-v-5a387265"]]);const y=t=>(u("data-v-6eb3b65e"),t=t(),p(),t),Jt={key:0,xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:"#d3d3d3"},Xt=y(()=>e("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1)),Yt=y(()=>e("path",{class:"test",d:"M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"},null,-1)),te=[Xt,Yt],ee={key:1,xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:"#000000"},se=y(()=>e("g",null,[e("path",{d:"M0,0h24v24H0V0z",fill:"none"}),e("path",{d:"M0,0h24v24H0V0z",fill:"none"})],-1)),oe=y(()=>e("g",null,[e("path",{d:"M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"})],-1)),ae=[se,oe],ce={props:{filled:{type:Boolean,default:!1}},setup(t){return(s,o)=>t.filled?(n(),i("svg",ee,ae)):(n(),i("svg",Jt,te))}};var M=d(ce,[["__scopeId","data-v-6eb3b65e"]]);const ne=t=>(u("data-v-e2338fc2"),t=t(),p(),t),ie={class:"main-comment-container"},re={class:"comment-title"},le=ne(()=>e("p",{class:"comment-text"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corporis itaque quae eveniet deserunt aut. ",-1)),_e={class:"stars-container"},de={class:"comment-autor"},ue={props:{title:{type:String,default:"Comment Title"},autor:{type:String,default:"Comment Autor"},stars:{type:Number,default:0}},setup(t){const s=t,o=s.stars>5?5:s.stars,r=5-o;return(c,l)=>(n(),i("div",ie,[e("h1",re,'"'+v(t.title)+'"',1),le,e("div",_e,[(n(!0),i(N,null,V(k(o),_=>(n(),U(M,{key:_,filled:""}))),128)),(n(),i(N,null,V(r,_=>a(M,{key:_})),64))]),e("h3",de,v(t.autor),1)]))}};var S=d(ue,[["__scopeId","data-v-e2338fc2"]]);const pe={class:"main-comments-section"},ve={setup(t){return(s,o)=>(n(),i("div",pe,[a(S,{stars:4}),a(S,{stars:5}),a(S,{stars:4})]))}};var me=d(ve,[["__scopeId","data-v-3d9ad1e5"]]);const he=t=>(u("data-v-0220ecc0"),t=t(),p(),t),fe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"#3b5998"},ge=he(()=>e("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},null,-1)),ye=[ge],be={props:{scale:{type:Number,default:1}},setup(t){return h(s=>({"2421222e":t.scale})),(s,o)=>(n(),i("svg",fe,ye))}};var $e=d(be,[["__scopeId","data-v-0220ecc0"]]);const xe=t=>(u("data-v-1fa51380"),t=t(),p(),t),we={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#1DA1F2"},Se=xe(()=>e("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},null,-1)),ke=[Se],Ie={props:{scale:{type:Number,default:1}},setup(t){return h(s=>({"0d2929d1":t.scale})),(s,o)=>(n(),i("svg",we,ke))}};var Ce=d(Ie,[["__scopeId","data-v-1fa51380"]]);const Le={style:{"enable-background":"new 0 0 512 512"},version:"1.1",viewBox:"0 0 512 512","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Ne=D('<g id="Edges" data-v-43f3713b></g><g id="Symbol" data-v-43f3713b><g data-v-43f3713b><radialGradient cx="56.3501" cy="19.2179" gradientTransform="matrix(0.9986 -5.233596e-02 4.448556e-02 0.8488 -36.9742 443.8014)" gradientUnits="userSpaceOnUse" id="SVGID_1_" r="711.335" data-v-43f3713b><stop offset="0" style="stop-color:#fed576;" data-v-43f3713b></stop><stop offset="0.2634" style="stop-color:#f47133;" data-v-43f3713b></stop><stop offset="0.6091" style="stop-color:#bc3081;" data-v-43f3713b></stop><stop offset="1" style="stop-color:#4c63d2;" data-v-43f3713b></stop></radialGradient><path class="st0" d="M96.1,23.2c-16.2,6.3-29.9,14.7-43.6,28.4C38.8,65.2,30.4,79,24.1,95.1c-6.1,15.6-10.2,33.5-11.4,59.7    c-1.2,26.2-1.5,34.6-1.5,101.4s0.3,75.2,1.5,101.4c1.2,26.2,5.4,44.1,11.4,59.7c6.3,16.2,14.7,29.9,28.4,43.6    c13.7,13.7,27.4,22.1,43.6,28.4c15.6,6.1,33.5,10.2,59.7,11.4c26.2,1.2,34.6,1.5,101.4,1.5c66.8,0,75.2-0.3,101.4-1.5    c26.2-1.2,44.1-5.4,59.7-11.4c16.2-6.3,29.9-14.7,43.6-28.4c13.7-13.7,22.1-27.4,28.4-43.6c6.1-15.6,10.2-33.5,11.4-59.7    c1.2-26.2,1.5-34.6,1.5-101.4s-0.3-75.2-1.5-101.4c-1.2-26.2-5.4-44.1-11.4-59.7C484,79,475.6,65.2,462,51.6    c-13.7-13.7-27.4-22.1-43.6-28.4c-15.6-6.1-33.5-10.2-59.7-11.4c-26.2-1.2-34.6-1.5-101.4-1.5s-75.2,0.3-101.4,1.5    C129.6,12.9,111.7,17.1,96.1,23.2z M356.6,56c24,1.1,37,5.1,45.7,8.5c11.5,4.5,19.7,9.8,28.3,18.4c8.6,8.6,13.9,16.8,18.4,28.3    c3.4,8.7,7.4,21.7,8.5,45.7c1.2,25.9,1.4,33.7,1.4,99.4s-0.3,73.5-1.4,99.4c-1.1,24-5.1,37-8.5,45.7c-4.5,11.5-9.8,19.7-18.4,28.3    c-8.6,8.6-16.8,13.9-28.3,18.4c-8.7,3.4-21.7,7.4-45.7,8.5c-25.9,1.2-33.7,1.4-99.4,1.4s-73.5-0.3-99.4-1.4    c-24-1.1-37-5.1-45.7-8.5c-11.5-4.5-19.7-9.8-28.3-18.4c-8.6-8.6-13.9-16.8-18.4-28.3c-3.4-8.7-7.4-21.7-8.5-45.7    c-1.2-25.9-1.4-33.7-1.4-99.4s0.3-73.5,1.4-99.4c1.1-24,5.1-37,8.5-45.7c4.5-11.5,9.8-19.7,18.4-28.3c8.6-8.6,16.8-13.9,28.3-18.4    c8.7-3.4,21.7-7.4,45.7-8.5c25.9-1.2,33.7-1.4,99.4-1.4S330.7,54.8,356.6,56z" data-v-43f3713b></path><radialGradient cx="154.0732" cy="134.5501" gradientTransform="matrix(0.9986 -5.233596e-02 4.448556e-02 0.8488 -24.3617 253.2946)" gradientUnits="userSpaceOnUse" id="SVGID_2_" r="365.2801" data-v-43f3713b><stop offset="0" style="stop-color:#fed576;" data-v-43f3713b></stop><stop offset="0.2634" style="stop-color:#f47133;" data-v-43f3713b></stop><stop offset="0.6091" style="stop-color:#bc3081;" data-v-43f3713b></stop><stop offset="1" style="stop-color:#4c63d2;" data-v-43f3713b></stop></radialGradient><path class="st1" d="M130.9,256.3c0,69.8,56.6,126.3,126.3,126.3s126.3-56.6,126.3-126.3S327,130,257.2,130    S130.9,186.5,130.9,256.3z M339.2,256.3c0,45.3-36.7,82-82,82s-82-36.7-82-82c0-45.3,36.7-82,82-82S339.2,211,339.2,256.3z" data-v-43f3713b></path><circle class="st2" cx="388.6" cy="125" r="29.5" data-v-43f3713b></circle></g></g>',2),Ve=[Ne],Be={props:{scale:{type:Number,default:1}},setup(t){return h(s=>({"46de4dff":t.scale})),(s,o)=>(n(),i("svg",Le,Ve))}};var Me=d(Be,[["__scopeId","data-v-43f3713b"]]);const P=t=>(u("data-v-9f5087ac"),t=t(),p(),t),ze={class:"main-footer-container"},Pe=P(()=>e("h1",{class:"footer-title"},"Follow Us!",-1)),Fe={class:"footer-social"},Ee={href:"#",class:"link"},Ae={href:"#",class:"link"},Oe={href:"#",class:"link"},Te=P(()=>e("div",{class:"footer-links"},[e("a",{href:"#"},"privacy policy"),e("a",{href:"#"},"about")],-1)),Ue={setup(t){return(s,o)=>(n(),i("div",ze,[Pe,e("div",Fe,[e("a",Ee,[a($e,{scale:.8},null,8,["scale"])]),e("a",Ae,[a(Ce,{scale:.75},null,8,["scale"])]),e("a",Oe,[a(Me,{scale:.7},null,8,["scale"])])]),Te]))}};var De=d(Ue,[["__scopeId","data-v-9f5087ac"]]);const qe={setup(t){return(s,o)=>(n(),i("main",null,[a(lt),a(gt),a(Ot),a(Zt),a(me),a(De)]))}},He=q({history:H(),routes:[{path:"/",name:"home",component:qe,alias:"/home"},{path:"/about",name:"about",component:()=>J(()=>import("./AboutView.9a66658e.js"),["assets/AboutView.9a66658e.js","assets/AboutView.95097ccb.css","assets/vendor.ed83d83f.js"])},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:"/"}]}),C=R(K);C.use(G());C.use(He);C.mount("#app");export{lt as N,X as _};
