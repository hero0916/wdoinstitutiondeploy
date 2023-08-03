"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[7931],{48875:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport Box from '@mui/material/Box';\nimport Container from '@mui/material/Container';\n\nexport default function FixedContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container fixed>\n        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n"},27954:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport Box from '@mui/material/Box';\nimport Container from '@mui/material/Container';\n\nexport default function SimpleContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container maxWidth=\"sm\">\n        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n"},81241:function(e,n,t){t.d(n,{Z:function(){return B}});var r=t(29439),a=t(65877),o=t(75208),i=t(45681),s=t(88778),c=t(29595),l=t(88391),d=t(76677),u=t(18754),m=t(1413),x=t(45987),f=t(87650),h=t(66926),p=t(91882),b=t(85635),g=t(26647),v=t(83182),Z=t(81087),j=t(79421),C=t(23712),y=["children","name"];function k(e){var n=e.children,t=e.document,r=(0,v.Z)();l.useEffect((function(){t.body.dir=r.direction}),[t,r.direction]);var a=l.useMemo((function(){return(0,p.Z)({key:"iframe-demo-".concat(r.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===r.direction?[h.Z]:[]})}),[t,r.direction]),o=l.useCallback((function(){return t.defaultView}),[t]);return(0,C.jsx)(g.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===r.direction?[h.Z]:[],children:(0,C.jsxs)(b.C,{value:a,children:[(0,C.jsx)(j.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),l.cloneElement(n,{window:o})]})})}var w=(0,Z.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function W(e){var n,t=e.children,a=e.name,o=(0,x.Z)(e,y),i="".concat(a," demo"),s=l.useRef(null),c=l.useReducer((function(){return!0}),!1),d=(0,r.Z)(c,2),u=d[0],h=d[1];l.useEffect((function(){var e=s.current.contentDocument;null==e||"complete"!==e.readyState||u||h()}),[u]);var p=null===(n=s.current)||void 0===n?void 0:n.contentDocument;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w,(0,m.Z)({onLoad:h,ref:s,title:i},o)),!1!==u?f.createPortal((0,C.jsx)(k,{document:p,children:t}),p.body):null]})}var N=l.memo(W),S=t(33784);function R(e){var n=(0,l.useState)(e.currentTabIndex),t=(0,r.Z)(n,2),m=t[0],x=t[1],f=e.component,h=e.raw,p=e.iframe,b=e.className,g=e.name;return(0,C.jsxs)(o.Z,{className:(0,c.Z)(b,"shadow"),sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,C.jsx)(u.Z,{sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,C.jsxs)(s.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,n){x(n)},textColor:"secondary",indicatorColor:"secondary",children:[f&&(0,C.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,C.jsx)(S.Z,{children:"heroicons-outline:eye"})}),h&&(0,C.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,C.jsx)(S.Z,{children:"heroicons-outline:code"})})]})}),(0,C.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,C.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:f&&(p?(0,C.jsx)(N,{name:g,children:(0,C.jsx)(f,{})}):(0,C.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,C.jsx)(f,{})}))}),(0,C.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:h&&(0,C.jsx)("div",{className:"flex flex-1",children:(0,C.jsx)(a.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}R.defaultProps={name:"",currentTabIndex:0};var B=R},97484:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(88391),a=t(26459),o=t(18754),i=t(55215),s=t(23712);function c(){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(a.ZP,{}),(0,s.jsx)(i.Z,{fixed:!0,children:(0,s.jsx)(o.Z,{sx:{bgcolor:"#cfe8fc",height:"100vh"}})})]})}},15232:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(88391),a=t(26459),o=t(18754),i=t(55215),s=t(23712);function c(){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(a.ZP,{}),(0,s.jsx)(i.Z,{maxWidth:"sm",children:(0,s.jsx)(o.Z,{sx:{bgcolor:"#cfe8fc",height:"100vh"}})})]})}},27931:function(e,n,t){t.r(n);var r=t(81241),a=t(65877),o=t(33784),i=t(99498),s=t(95590),c=t(23712);n.default=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,c.jsx)(i.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/container",target:"_blank",role:"button",startIcon:(0,c.jsx)(o.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,c.jsx)(s.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Container"}),(0,c.jsx)(s.Z,{className:"description",children:"The container centers your content horizontally. It's the most basic layout element."}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:"While containers can be nested, most layouts do not require a nested container."}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fluid"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["A fluid container width is bounded by the ",(0,c.jsx)("code",{children:"maxWidth"})," prop value."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(r.Z,{name:"SimpleContainer.js",className:"my-24",iframe:!0,component:t(15232).Z,raw:t(27954)})}),(0,c.jsx)(a.Z,{component:"pre",className:"language-jsx",children:' \n<Container maxWidth="sm">\n'}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fixed"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the ",(0,c.jsx)("code",{children:"fixed"})," prop. The max-width matches the min-width of the current breakpoint."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(r.Z,{name:"FixedContainer.js",className:"my-24",iframe:!0,component:t(97484).Z,raw:t(48875)})}),(0,c.jsx)(a.Z,{component:"pre",className:"language-jsx",children:" \n<Container fixed>\n"})]})}},55215:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(4942),a=t(63366),o=t(87462),i=t(88391),s=t(23154),c=t(89932),l=t(17344),d=t(81087),u=t(36382);function m(e){return(0,u.Z)("MuiContainer",e)}(0,t(47467).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var x=t(78641),f=t(23712),h=["className","component","disableGutters","fixed","maxWidth"],p=(0,d.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,x.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=n.breakpoints.values[t];return 0!==r&&(e[n.breakpoints.up(t)]={maxWidth:"".concat(r).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),b=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiContainer"}),r=t.className,i=t.component,d=void 0===i?"div":i,u=t.disableGutters,b=void 0!==u&&u,g=t.fixed,v=void 0!==g&&g,Z=t.maxWidth,j=void 0===Z?"lg":Z,C=(0,a.Z)(t,h),y=(0,o.Z)({},t,{component:d,disableGutters:b,fixed:v,maxWidth:j}),k=function(e){var n=e.classes,t=e.fixed,r=e.disableGutters,a=e.maxWidth,o={root:["root",a&&"maxWidth".concat((0,x.Z)(String(a))),t&&"fixed",r&&"disableGutters"]};return(0,c.Z)(o,m,n)}(y);return(0,f.jsx)(p,(0,o.Z)({as:d,ownerState:y,className:(0,s.Z)(k.root,r),ref:n},C))}))},26459:function(e,n,t){var r=t(87462),a=t(88391),o=t(17344),i=t(79421),s=t(23712),c=function(e,n){return(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},n&&{colorScheme:e.palette.mode})},l=function(e){return(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};n.ZP=function(e){var n=(0,o.Z)({props:e,name:"MuiCssBaseline"}),t=n.children,d=n.enableColorScheme,u=void 0!==d&&d;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(i.Z,{styles:function(e){return function(e){var n,t,a={html:c(e,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},l(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o=null==(n=e.components)||null==(t=n.MuiCssBaseline)?void 0:t.styleOverrides;return o&&(a=[a,o]),a}(e,u)}}),t]})}}}]);