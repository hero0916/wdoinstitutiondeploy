"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9615],{58787:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(95590),a=t(81129),o=t(33784),i=t(29595),s=t(76677),l=t(41959),c=t(74931),d=t(79369),u=t(90546),f=t(23712);var m=function(e){var r=e.slug,t=(0,c.v9)(u.us),n=d.Z.find(t,{slug:r});return(0,f.jsx)(l.Z,{className:"font-semibold text-12",label:null===n||void 0===n?void 0:n.title,sx:{color:function(e){return"light"===e.palette.mode?(0,s._j)(null===n||void 0===n?void 0:n.color,.4):(0,s.$n)(null===n||void 0===n?void 0:n.color,.8)},backgroundColor:function(e){return"light"===e.palette.mode?(0,s.$n)(null===n||void 0===n?void 0:n.color,.8):(0,s._j)(null===n||void 0===n?void 0:n.color,.1)}},size:"small"})};var p=function(e){var r=e.course,t=e.className;return r?(0,f.jsxs)("div",{className:(0,i.Z)("w-full",t),children:[(0,f.jsxs)("div",{className:"flex items-center justify-between mb-16",children:[(0,f.jsx)(m,{slug:r.category}),r.progress.completed>0&&(0,f.jsx)(o.Z,{className:"text-green-600",size:20,children:"heroicons-solid:badge-check"})]}),(0,f.jsx)(n.Z,{className:"text-16 font-medium",children:r.title}),(0,f.jsx)(n.Z,{className:"text-13 mt-2 line-clamp-2",color:"text.secondary",children:r.description}),(0,f.jsx)(a.Z,{className:"w-48 my-24 border-1",light:!0}),(0,f.jsxs)(n.Z,{className:"flex items-center space-x-6 text-13",color:"text.secondary",children:[(0,f.jsx)(o.Z,{color:"disabled",size:20,children:"heroicons-solid:clock"}),(0,f.jsx)("span",{className:"whitespace-nowrap leading-none",children:"".concat(r.duration," minutes")})]}),(0,f.jsxs)(n.Z,{className:"flex items-center space-x-6 text-13 mt-8",color:"text.secondary",children:[(0,f.jsx)(o.Z,{color:"disabled",size:20,children:"heroicons-solid:academic-cap"}),(0,f.jsxs)("span",{className:"whitespace-nowrap leading-none",children:[1===r.progress.completed&&"Completed once",2===r.progress.completed&&"Completed twice",r.progress.completed>2&&"Completed ".concat(r.progress.completed," times"),r.progress.completed<=0&&"Never completed"]})]})]}):null}},18519:function(e,r,t){var n=t(4663),a=t(29595),o=t(23712);r.Z=function(e){var r=e.course,t=e.className;return(0,o.jsx)(n.Z,{className:(0,a.Z)("w-full h-2",t),variant:"determinate",value:100*r.progress.currentStep/r.totalSteps,color:"secondary"})}},9615:function(e,r,t){t.r(r),t.d(r,{default:function(){return B}});var n=t(29439),a=t(79369),o=t(82872),i=t(81660),s=t(71027),l=t(49269),c=t(16867),d=t(95590),u=t(13960),f=t(88391),m=t(74931),p=t(40738),x=t(76663),h=t(35431),v=t(33649),g=t(64444),b=t(90546),Z=t(59110),y=t(75208),w=t(46999),j=t(28644),C=t(99498),N=t(86827),S=t(33784),k=t(76677),P=t(58787),M=t(18519),I=t(23712);var E=function(e){var r=e.course;return(0,I.jsxs)(y.Z,{className:"flex flex-col h-384 shadow",children:[(0,I.jsx)(w.Z,{className:"flex flex-col flex-auto p-24",children:(0,I.jsx)(P.Z,{course:r,className:""})}),(0,I.jsx)(M.Z,{className:"",course:r}),(0,I.jsx)(j.Z,{className:"items-center justify-end py-16 px-24",sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,k.$n)(e.palette.background.default,.4):(0,k.$n)(e.palette.background.default,.03)}},children:(0,I.jsx)(C.Z,{to:"/apps/academy/courses/".concat(r.id,"/").concat(r.slug),component:N.rU,className:"px-16 min-w-128",color:"secondary",variant:"contained",endIcon:(0,I.jsx)(S.Z,{className:"",size:20,children:"heroicons-solid:arrow-sm-right"}),children:function(){switch(r.activeStep){case r.totalSteps:return"Completed";case 0:return"Start";default:return"Continue"}}()})})]})};var B=function(e){var r=(0,m.I0)(),t=(0,m.v9)(Z.ln),y=(0,m.v9)(b.us),w=(0,g.Z)((function(e){return e.breakpoints.down("lg")})),j=(0,f.useState)(null),C=(0,n.Z)(j,2),N=C[0],S=C[1],k=(0,f.useState)(""),P=(0,n.Z)(k,2),M=P[0],B=P[1],L=(0,f.useState)("all"),z=(0,n.Z)(L,2),R=z[0],A=z[1],q=(0,f.useState)(!1),_=(0,n.Z)(q,2),D=_[0],$=_[1];return(0,f.useEffect)((function(){r((0,Z.Ho)())}),[r]),(0,f.useEffect)((function(){t&&S(0!==M.length||"all"!==R||D?a.Z.filter(t,(function(e){return("all"===R||e.category===R)&&!(D&&e.progress.completed>0)&&e.title.toLowerCase().includes(M.toLowerCase())})):t)}),[t,D,M,R]),(0,I.jsx)(v.Z,{header:(0,I.jsxs)(p.Z,{className:"relative overflow-hidden flex shrink-0 items-center justify-center px-16 py-32 md:p-64",sx:{backgroundColor:"primary.main",color:function(e){return e.palette.getContrastText(e.palette.primary.main)}},children:[(0,I.jsxs)("div",{className:"flex flex-col items-center justify-center  mx-auto w-full",children:[(0,I.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:0}},children:(0,I.jsx)(d.Z,{color:"inherit",className:"text-18 font-semibold",children:"FUSE ACADEMY"})}),(0,I.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:0}},children:(0,I.jsx)(d.Z,{color:"inherit",className:"text-center text-32 sm:text-48 font-extrabold tracking-tight mt-4",children:"What do you want to learn today?"})}),(0,I.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:(0,I.jsx)(d.Z,{color:"inherit",className:"text-16 sm:text-20 mt-16 sm:mt-24 opacity-75 tracking-tight max-w-md text-center",children:"Our courses will step you through the process of a building small applications, or adding new features to existing applications."})})]}),(0,I.jsx)("svg",{className:"absolute inset-0 pointer-events-none",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:(0,I.jsxs)("g",{className:"text-gray-700 opacity-25",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[(0,I.jsx)("circle",{r:"234",cx:"196",cy:"23"}),(0,I.jsx)("circle",{r:"234",cx:"790",cy:"491"})]})})]}),content:(0,I.jsxs)("div",{className:"flex flex-col flex-1 w-full mx-auto px-24 pt-24 sm:p-40",children:[(0,I.jsxs)("div",{className:"flex flex-col shrink-0 sm:flex-row items-center justify-between space-y-16 sm:space-y-0",children:[(0,I.jsxs)("div",{className:"flex flex-col sm:flex-row w-full sm:w-auto items-center space-y-16 sm:space-y-0 sm:space-x-16",children:[(0,I.jsxs)(o.Z,{className:"flex w-full sm:w-136",variant:"outlined",children:[(0,I.jsx)(i.Z,{id:"category-select-label",children:"Category"}),(0,I.jsxs)(l.Z,{labelId:"category-select-label",id:"category-select",label:"Category",value:R,onChange:function(e){A(e.target.value)},children:[(0,I.jsx)(s.Z,{value:"all",children:(0,I.jsx)("em",{children:" All "})}),y.map((function(e){return(0,I.jsx)(s.Z,{value:e.slug,children:e.title},e.id)}))]})]}),(0,I.jsx)(c.Z,{label:"Search for a course",placeholder:"Enter a keyword...",className:"flex w-full sm:w-256 mx-8",value:M,inputProps:{"aria-label":"Search"},onChange:function(e){B(e.target.value)},variant:"outlined",InputLabelProps:{shrink:!0}})]}),(0,I.jsx)(h.Z,{label:"Hide completed",control:(0,I.jsx)(x.Z,{onChange:function(e){$(e.target.checked)},checked:D,name:"hideCompleted"})})]}),(0,f.useMemo)((function(){var e={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return N&&(N.length>0?(0,I.jsx)(u.E.div,{className:"flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 mt-32 sm:mt-40",variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",children:N.map((function(r){return(0,I.jsx)(u.E.div,{variants:e,children:(0,I.jsx)(E,{course:r})},r.id)}))}):(0,I.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,I.jsx)(d.Z,{color:"text.secondary",className:"text-24 my-24",children:"No courses found!"})}))}),[N])]}),scroll:w?"normal":"page"})}},28644:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(63366),a=t(87462),o=t(88391),i=t(23154),s=t(89932),l=t(81087),c=t(17344),d=t(36382);function u(e){return(0,d.Z)("MuiCardActions",e)}(0,t(47467).Z)("MuiCardActions",["root","spacing"]);var f=t(23712),m=["disableSpacing","className"],p=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,!t.disableSpacing&&r.spacing]}})((function(e){var r=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),x=o.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCardActions"}),o=t.disableSpacing,l=void 0!==o&&o,d=t.className,x=(0,n.Z)(t,m),h=(0,a.Z)({},t,{disableSpacing:l}),v=function(e){var r=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(t,u,r)}(h);return(0,f.jsx)(p,(0,a.Z)({className:(0,i.Z)(v.root,d),ownerState:h,ref:r},x))}))},4663:function(e,r,t){var n,a,o,i,s,l,c,d,u,f,m,p,x=t(30168),h=t(63366),v=t(87462),g=t(88391),b=t(23154),Z=t(89932),y=t(847),w=t(76677),j=t(78641),C=t(83182),N=t(81087),S=t(17344),k=t(78689),P=t(23712),M=["className","color","value","valueBuffer","variant"],I=(0,y.F4)(c||(c=n||(n=(0,x.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),E=(0,y.F4)(d||(d=a||(a=(0,x.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),B=(0,y.F4)(u||(u=o||(o=(0,x.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),L=function(e,r){return"inherit"===r?"currentColor":"light"===e.palette.mode?(0,w.$n)(e.palette[r].main,.62):(0,w._j)(e.palette[r].main,.5)},z=(0,N.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r["color".concat((0,j.Z)(t.color))],r[t.variant]]}})((function(e){var r=e.ownerState,t=e.theme;return(0,v.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:L(t,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})})),R=(0,N.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,r){var t=e.ownerState;return[r.dashed,r["dashedColor".concat((0,j.Z)(t.color))]]}})((function(e){var r=e.ownerState,t=e.theme,n=L(t,r.color);return(0,v.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,y.iv)(f||(f=i||(i=(0,x.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),B)),A=(0,N.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,r){var t=e.ownerState;return[r.bar,r["barColor".concat((0,j.Z)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((function(e){var r=e.ownerState,t=e.theme;return(0,v.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":t.palette[r.color].main},"determinate"===r.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===r.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var r=e.ownerState;return("indeterminate"===r.variant||"query"===r.variant)&&(0,y.iv)(m||(m=s||(s=(0,x.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),I)})),q=(0,N.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,r){var t=e.ownerState;return[r.bar,r["barColor".concat((0,j.Z)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((function(e){var r=e.ownerState,t=e.theme;return(0,v.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":t.palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:L(t,r.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var r=e.ownerState;return("indeterminate"===r.variant||"query"===r.variant)&&(0,y.iv)(p||(p=l||(l=(0,x.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),E)})),_=g.forwardRef((function(e,r){var t=(0,S.Z)({props:e,name:"MuiLinearProgress"}),n=t.className,a=t.color,o=void 0===a?"primary":a,i=t.value,s=t.valueBuffer,l=t.variant,c=void 0===l?"indeterminate":l,d=(0,h.Z)(t,M),u=(0,v.Z)({},t,{color:o,variant:c}),f=function(e){var r=e.classes,t=e.variant,n=e.color,a={root:["root","color".concat((0,j.Z)(n)),t],dashed:["dashed","dashedColor".concat((0,j.Z)(n))],bar1:["bar","barColor".concat((0,j.Z)(n)),("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&"barColor".concat((0,j.Z)(n)),"buffer"===t&&"color".concat((0,j.Z)(n)),("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,Z.Z)(a,k.E,r)}(u),m=(0,C.Z)(),p={},x={bar1:{},bar2:{}};if("determinate"===c||"buffer"===c)if(void 0!==i){p["aria-valuenow"]=Math.round(i),p["aria-valuemin"]=0,p["aria-valuemax"]=100;var g=i-100;"rtl"===m.direction&&(g=-g),x.bar1.transform="translateX(".concat(g,"%)")}else 0;if("buffer"===c)if(void 0!==s){var y=(s||0)-100;"rtl"===m.direction&&(y=-y),x.bar2.transform="translateX(".concat(y,"%)")}else 0;return(0,P.jsxs)(z,(0,v.Z)({className:(0,b.Z)(f.root,n),ownerState:u,role:"progressbar"},p,{ref:r},d,{children:["buffer"===c?(0,P.jsx)(R,{className:f.dashed,ownerState:u}):null,(0,P.jsx)(A,{className:f.bar1,ownerState:u,style:x.bar1}),"determinate"===c?null:(0,P.jsx)(q,{className:f.bar2,ownerState:u,style:x.bar2})]}))}));r.Z=_},78689:function(e,r,t){t.d(r,{E:function(){return a}});var n=t(36382);function a(e){return(0,n.Z)("MuiLinearProgress",e)}var o=(0,t(47467).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);r.Z=o}}]);