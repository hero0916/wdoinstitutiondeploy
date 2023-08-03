"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[8953],{58787:function(e,s,r){r.d(s,{Z:function(){return x}});var n=r(95590),t=r(81129),o=r(33784),l=r(29595),c=r(76677),i=r(41959),a=r(74931),d=r(79369),u=r(90546),m=r(23712);var p=function(e){var s=e.slug,r=(0,a.v9)(u.us),n=d.Z.find(r,{slug:s});return(0,m.jsx)(i.Z,{className:"font-semibold text-12",label:null===n||void 0===n?void 0:n.title,sx:{color:function(e){return"light"===e.palette.mode?(0,c._j)(null===n||void 0===n?void 0:n.color,.4):(0,c.$n)(null===n||void 0===n?void 0:n.color,.8)},backgroundColor:function(e){return"light"===e.palette.mode?(0,c.$n)(null===n||void 0===n?void 0:n.color,.8):(0,c._j)(null===n||void 0===n?void 0:n.color,.1)}},size:"small"})};var x=function(e){var s=e.course,r=e.className;return s?(0,m.jsxs)("div",{className:(0,l.Z)("w-full",r),children:[(0,m.jsxs)("div",{className:"flex items-center justify-between mb-16",children:[(0,m.jsx)(p,{slug:s.category}),s.progress.completed>0&&(0,m.jsx)(o.Z,{className:"text-green-600",size:20,children:"heroicons-solid:badge-check"})]}),(0,m.jsx)(n.Z,{className:"text-16 font-medium",children:s.title}),(0,m.jsx)(n.Z,{className:"text-13 mt-2 line-clamp-2",color:"text.secondary",children:s.description}),(0,m.jsx)(t.Z,{className:"w-48 my-24 border-1",light:!0}),(0,m.jsxs)(n.Z,{className:"flex items-center space-x-6 text-13",color:"text.secondary",children:[(0,m.jsx)(o.Z,{color:"disabled",size:20,children:"heroicons-solid:clock"}),(0,m.jsx)("span",{className:"whitespace-nowrap leading-none",children:"".concat(s.duration," minutes")})]}),(0,m.jsxs)(n.Z,{className:"flex items-center space-x-6 text-13 mt-8",color:"text.secondary",children:[(0,m.jsx)(o.Z,{color:"disabled",size:20,children:"heroicons-solid:academic-cap"}),(0,m.jsxs)("span",{className:"whitespace-nowrap leading-none",children:[1===s.progress.completed&&"Completed once",2===s.progress.completed&&"Completed twice",s.progress.completed>2&&"Completed ".concat(s.progress.completed," times"),s.progress.completed<=0&&"Never completed"]})]})]}):null}},18519:function(e,s,r){var n=r(4663),t=r(29595),o=r(23712);s.Z=function(e){var s=e.course,r=e.className;return(0,o.jsx)(n.Z,{className:(0,t.Z)("w-full h-2",r),variant:"determinate",value:100*s.progress.currentStep/s.totalSteps,color:"secondary"})}},18953:function(e,s,r){r.r(s);var n=r(29439),t=r(33649),o=r(83182),l=r(73897),c=r(15866),i=r(56617),a=r(64174),d=r(44461),u=r(88391),m=r(74931),p=r(40099),x=r(86827),f=r(82362),h=r(69162),j=r(41785),Z=r(47622),g=r(76281),v=r(81129),w=r(99498),b=r(33784),N=r(55856),y=r(95590),k=r(40738),S=r(64444),C=r(22772),z=r(34085),I=r(58787),M=r(18519),_=r(23712);s.default=(0,d.Z)("academyApp",C.Z)((function(e){var s=(0,m.I0)(),r=(0,m.v9)(z.Oe),d=(0,S.Z)((function(e){return e.breakpoints.down("lg")})),C=(0,o.Z)(),U=(0,u.useState)(!d),O=(0,n.Z)(U,2),E=O[0],H=O[1],T=(0,p.UO)(),D=T.courseId,L=(0,u.useRef)(null);if((0,f.KW)((function(){s((0,z.XR)(D))}),[s,T]),(0,u.useEffect)((function(){r&&0===r.progress.currentStep&&s((0,z.Hf)({progress:{currentStep:1}}))}),[s,r]),(0,u.useEffect)((function(){H(!d)}),[d]),!r)return null;var P=r.progress.currentStep;function R(e){e>r.totalSteps||e<0||s((0,z.Hf)({progress:{currentStep:e}}))}function W(){R(P+1)}function $(){R(P-1)}function q(e){R(e+1)}var A=0!==P?P:1;return(0,_.jsx)(t.Z,{content:(0,_.jsxs)("div",{className:"w-full",children:[(0,_.jsx)(l.Z,{lgDown:!0,children:(0,_.jsx)(M.Z,{className:"sticky top-0 z-10",course:r})}),(0,_.jsx)(l.Z,{lgUp:!0,children:(0,_.jsxs)(i.Z,{className:"flex sticky top-0 z-10 items-center w-full px-16 py-8 border-b-1 shadow-0",square:!0,children:[(0,_.jsx)(c.Z,{to:"/apps/academy/courses",component:x.rU,className:"",children:(0,_.jsx)(b.Z,{children:"ltr"===C.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"})}),(0,_.jsx)(y.Z,{className:"text-13 font-medium tracking-tight mx-10",children:r.title})]})}),(0,_.jsx)(h.ZP,{index:A-1,enableMouseEvents:!0,onChangeIndex:q,children:r.steps.map((function(e,s){return(0,_.jsx)("div",{className:"flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64",children:(0,_.jsx)(i.Z,{className:"w-full max-w-lg mx-auto sm:my-8 lg:mt-16 p-24 sm:p-40 sm:py-48 rounded-16 shadow overflow-hidden",children:(0,_.jsx)("div",{className:"prose prose-sm dark:prose-invert w-full max-w-full",dangerouslySetInnerHTML:{__html:e.content},dir:C.direction})})},s)}))}),(0,_.jsx)(l.Z,{lgDown:!0,children:(0,_.jsx)("div",{className:"flex justify-center w-full sticky bottom-0 p-16 pb-32 z-10",children:(0,_.jsxs)(N.Z,{variant:"contained","aria-label":"",className:"rounded-full",color:"secondary",children:[(0,_.jsx)(w.Z,{className:"min-h-56 rounded-full",size:"large",startIcon:(0,_.jsx)(b.Z,{children:"heroicons-outline:arrow-narrow-left"}),onClick:$,children:"Prev"}),(0,_.jsx)(w.Z,{className:"pointer-events-none min-h-56",size:"large",children:"".concat(A,"/").concat(r.totalSteps)}),(0,_.jsx)(w.Z,{className:"min-h-56 rounded-full",size:"large",endIcon:(0,_.jsx)(b.Z,{children:"heroicons-outline:arrow-narrow-right"}),onClick:W,children:"Next"})]})})}),(0,_.jsx)(l.Z,{lgUp:!0,children:(0,_.jsxs)(k.Z,{sx:{backgroundColor:"background.paper"},className:"flex sticky bottom-0 z-10 items-center w-full p-16 border-t-1",children:[(0,_.jsx)(c.Z,{onClick:function(e){return H(!0)},"aria-label":"open left sidebar",size:"large",children:(0,_.jsx)(b.Z,{children:"heroicons-outline:view-list"})}),(0,_.jsx)(y.Z,{className:"mx-8",children:"".concat(A,"/").concat(r.totalSteps)}),(0,_.jsx)(M.Z,{className:"flex flex-1 mx-8",course:r}),(0,_.jsx)(c.Z,{onClick:$,children:(0,_.jsx)(b.Z,{children:"heroicons-outline:arrow-narrow-left"})}),(0,_.jsx)(c.Z,{onClick:W,children:(0,_.jsx)(b.Z,{children:"heroicons-outline:arrow-narrow-right"})})]})})]}),leftSidebarOpen:E,leftSidebarOnClose:function(){H(!1)},leftSidebarWidth:300,leftSidebarContent:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"p-32",children:[(0,_.jsx)(w.Z,{to:"/apps/academy/courses",component:x.rU,className:"mb-24",color:"secondary",variant:"text",startIcon:(0,_.jsx)(b.Z,{size:20,children:"ltr"===C.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),children:"Back to courses"}),(0,_.jsx)(I.Z,{course:r})]}),(0,_.jsx)(v.Z,{}),(0,_.jsx)(a.Z,{classes:{root:"p-32"},activeStep:A-1,orientation:"vertical",children:r.steps.map((function(e,s){return(0,_.jsxs)(j.Z,{sx:{"& .MuiStepLabel-root, & .MuiStepContent-root":{cursor:"pointer!important"},"& .MuiStepContent-root":{color:"text.secondary",fontSize:13}},onClick:function(){return q(e.order)},expanded:!0,children:[(0,_.jsx)(Z.Z,{className:"font-medium",sx:{"& .MuiSvgIcon-root":{color:"background.default","& .MuiStepIcon-text":{fill:function(e){return e.palette.text.secondary}},"&.Mui-completed":{color:"secondary.main","& .MuiStepIcon-text ":{fill:function(e){return e.palette.secondary.contrastText}}},"&.Mui-active":{color:"secondary.main","& .MuiStepIcon-text ":{fill:function(e){return e.palette.secondary.contrastText}}}}},children:e.title}),(0,_.jsx)(g.Z,{children:e.subtitle})]},s)}))})]}),scroll:"content",ref:L})}))}}]);