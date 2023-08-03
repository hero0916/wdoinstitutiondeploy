"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9177],{18117:function(e,n,o){o.r(n),n.default="import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nexport default function SimpleAccordion() {\n  return (\n    <div>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1a-content\"\n          id=\"panel1a-header\"\n        >\n          <Typography>Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2a-content\"\n          id=\"panel2a-header\"\n        >\n          <Typography>Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion disabled>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3a-content\"\n          id=\"panel3a-header\"\n        >\n          <Typography>Disabled Accordion</Typography>\n        </AccordionSummary>\n      </Accordion>\n    </div>\n  );\n}\n"},1339:function(e,n,o){o.r(n),n.default="import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nexport default function ControlledAccordions() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleChange = (panel) => (event, isExpanded) => {\n    setExpanded(isExpanded ? panel : false);\n  };\n\n  return (\n    <div>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1bh-content\"\n          id=\"panel1bh-header\"\n        >\n          <Typography sx={{ width: '33%', flexShrink: 0 }}>\n            General settings\n          </Typography>\n          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.\n            Aliquam eget maximus est, id dignissim quam.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2bh-content\"\n          id=\"panel2bh-header\"\n        >\n          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>\n          <Typography sx={{ color: 'text.secondary' }}>\n            You are currently not an owner\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,\n            varius pulvinar diam eros in elit. Pellentesque convallis laoreet\n            laoreet.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3bh-content\"\n          id=\"panel3bh-header\"\n        >\n          <Typography sx={{ width: '33%', flexShrink: 0 }}>\n            Advanced settings\n          </Typography>\n          <Typography sx={{ color: 'text.secondary' }}>\n            Filtering has been entirely disabled for whole web server\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit\n            amet egestas eros, vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel4bh-content\"\n          id=\"panel4bh-header\"\n        >\n          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit\n            amet egestas eros, vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"},47944:function(e,n,o){o.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';\nimport MuiAccordion from '@mui/material/Accordion';\nimport MuiAccordionSummary from '@mui/material/AccordionSummary';\nimport MuiAccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\n\nconst Accordion = styled((props) => (\n  <MuiAccordion disableGutters elevation={0} square {...props} />\n))(({ theme }) => ({\n  border: `1px solid ${theme.palette.divider}`,\n  '&:not(:last-child)': {\n    borderBottom: 0,\n  },\n  '&:before': {\n    display: 'none',\n  },\n}));\n\nconst AccordionSummary = styled((props) => (\n  <MuiAccordionSummary\n    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}\n    {...props}\n  />\n))(({ theme }) => ({\n  backgroundColor:\n    theme.palette.mode === 'dark'\n      ? 'rgba(255, 255, 255, .05)'\n      : 'rgba(0, 0, 0, .03)',\n  flexDirection: 'row-reverse',\n  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {\n    transform: 'rotate(90deg)',\n  },\n  '& .MuiAccordionSummary-content': {\n    marginLeft: theme.spacing(1),\n  },\n}));\n\nconst AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({\n  padding: theme.spacing(2),\n  borderTop: '1px solid rgba(0, 0, 0, .125)',\n}));\n\nexport default function CustomizedAccordions() {\n  const [expanded, setExpanded] = React.useState('panel1');\n\n  const handleChange = (panel) => (event, newExpanded) => {\n    setExpanded(newExpanded ? panel : false);\n  };\n\n  return (\n    <div>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary aria-controls=\"panel1d-content\" id=\"panel1d-header\">\n          <Typography>Collapsible Group Item #1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary aria-controls=\"panel2d-content\" id=\"panel2d-header\">\n          <Typography>Collapsible Group Item #2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary aria-controls=\"panel3d-content\" id=\"panel3d-header\">\n          <Typography>Collapsible Group Item #3</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"},81241:function(e,n,o){o.d(n,{Z:function(){return N}});var a=o(29439),r=o(65877),i=o(75208),t=o(45681),c=o(88778),s=o(29595),d=o(88391),l=o(76677),p=o(18754),m=o(1413),u=o(45987),h=o(87650),x=o(66926),g=o(91882),y=o(85635),f=o(26647),j=o(83182),b=o(81087),A=o(79421),Z=o(23712),v=["children","name"];function S(e){var n=e.children,o=e.document,a=(0,j.Z)();d.useEffect((function(){o.body.dir=a.direction}),[o,a.direction]);var r=d.useMemo((function(){return(0,g.Z)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:o.head,stylisPlugins:"rtl"===a.direction?[x.Z]:[]})}),[o,a.direction]),i=d.useCallback((function(){return o.defaultView}),[o]);return(0,Z.jsx)(f.StyleSheetManager,{target:o.head,stylisPlugins:"rtl"===a.direction?[x.Z]:[],children:(0,Z.jsxs)(y.C,{value:r,children:[(0,Z.jsx)(A.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),d.cloneElement(n,{window:i})]})})}var w=(0,b.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function T(e){var n,o=e.children,r=e.name,i=(0,u.Z)(e,v),t="".concat(r," demo"),c=d.useRef(null),s=d.useReducer((function(){return!0}),!1),l=(0,a.Z)(s,2),p=l[0],x=l[1];d.useEffect((function(){var e=c.current.contentDocument;null==e||"complete"!==e.readyState||p||x()}),[p]);var g=null===(n=c.current)||void 0===n?void 0:n.contentDocument;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,(0,m.Z)({onLoad:x,ref:c,title:t},i)),!1!==p?h.createPortal((0,Z.jsx)(S,{document:g,children:o}),g.body):null]})}var I=d.memo(T),C=o(33784);function D(e){var n=(0,d.useState)(e.currentTabIndex),o=(0,a.Z)(n,2),m=o[0],u=o[1],h=e.component,x=e.raw,g=e.iframe,y=e.className,f=e.name;return(0,Z.jsxs)(i.Z,{className:(0,s.Z)(y,"shadow"),sx:{backgroundColor:function(e){return(0,l._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,Z.jsx)(p.Z,{sx:{backgroundColor:function(e){return(0,l._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,Z.jsxs)(c.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,n){u(n)},textColor:"secondary",indicatorColor:"secondary",children:[h&&(0,Z.jsx)(t.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(C.Z,{children:"heroicons-outline:eye"})}),x&&(0,Z.jsx)(t.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(C.Z,{children:"heroicons-outline:code"})})]})}),(0,Z.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,Z.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:h&&(g?(0,Z.jsx)(I,{name:f,children:(0,Z.jsx)(h,{})}):(0,Z.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,Z.jsx)(h,{})}))}),(0,Z.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:x&&(0,Z.jsx)("div",{className:"flex flex-1",children:(0,Z.jsx)(r.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:x.default})})})]})]})}D.defaultProps={name:"",currentTabIndex:0};var N=D},56850:function(e,n,o){o.d(n,{Z:function(){return d}});o(88391);var a=o(57627),r=o(52092),i=o(16710),t=o(95590),c=o(12746),s=o(23712);function d(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(r.Z,{expandIcon:(0,s.jsx)(c.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,s.jsx)(t.Z,{children:"Accordion 1"})}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(t.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(r.Z,{expandIcon:(0,s.jsx)(c.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,s.jsx)(t.Z,{children:"Accordion 2"})}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(t.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,s.jsx)(a.Z,{disabled:!0,children:(0,s.jsx)(r.Z,{expandIcon:(0,s.jsx)(c.Z,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:(0,s.jsx)(t.Z,{children:"Disabled Accordion"})})})]})}},36302:function(e,n,o){o.d(n,{Z:function(){return p}});var a=o(29439),r=o(88391),i=o(57627),t=o(16710),c=o(52092),s=o(95590),d=o(12746),l=o(23712);function p(){var e=r.useState(!1),n=(0,a.Z)(e,2),o=n[0],p=n[1],m=function(e){return function(n,o){p(!!o&&e)}};return(0,l.jsxs)("div",{children:[(0,l.jsxs)(i.Z,{expanded:"panel1"===o,onChange:m("panel1"),children:[(0,l.jsxs)(c.Z,{expandIcon:(0,l.jsx)(d.Z,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[(0,l.jsx)(s.Z,{sx:{width:"33%",flexShrink:0},children:"General settings"}),(0,l.jsx)(s.Z,{sx:{color:"text.secondary"},children:"I am an accordion"})]}),(0,l.jsx)(t.Z,{children:(0,l.jsx)(s.Z,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),(0,l.jsxs)(i.Z,{expanded:"panel2"===o,onChange:m("panel2"),children:[(0,l.jsxs)(c.Z,{expandIcon:(0,l.jsx)(d.Z,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[(0,l.jsx)(s.Z,{sx:{width:"33%",flexShrink:0},children:"Users"}),(0,l.jsx)(s.Z,{sx:{color:"text.secondary"},children:"You are currently not an owner"})]}),(0,l.jsx)(t.Z,{children:(0,l.jsx)(s.Z,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),(0,l.jsxs)(i.Z,{expanded:"panel3"===o,onChange:m("panel3"),children:[(0,l.jsxs)(c.Z,{expandIcon:(0,l.jsx)(d.Z,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[(0,l.jsx)(s.Z,{sx:{width:"33%",flexShrink:0},children:"Advanced settings"}),(0,l.jsx)(s.Z,{sx:{color:"text.secondary"},children:"Filtering has been entirely disabled for whole web server"})]}),(0,l.jsx)(t.Z,{children:(0,l.jsx)(s.Z,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),(0,l.jsxs)(i.Z,{expanded:"panel4"===o,onChange:m("panel4"),children:[(0,l.jsx)(c.Z,{expandIcon:(0,l.jsx)(d.Z,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:(0,l.jsx)(s.Z,{sx:{width:"33%",flexShrink:0},children:"Personal data"})}),(0,l.jsx)(t.Z,{children:(0,l.jsx)(s.Z,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}},80908:function(e,n,o){o.d(n,{Z:function(){return g}});var a=o(29439),r=o(1413),i=o(88391),t=o(81087),c=o(95768),s=o(57627),d=o(52092),l=o(16710),p=o(95590),m=o(23712),u=(0,t.ZP)((function(e){return(0,m.jsx)(s.Z,(0,r.Z)({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){var n=e.theme;return{border:"1px solid ".concat(n.palette.divider),"&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})),h=(0,t.ZP)((function(e){return(0,m.jsx)(d.Z,(0,r.Z)({expandIcon:(0,m.jsx)(c.Z,{sx:{fontSize:"0.9rem"}})},e))}))((function(e){var n=e.theme;return{backgroundColor:"dark"===n.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:n.spacing(1)}}})),x=(0,t.ZP)(l.Z)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}}));function g(){var e=i.useState("panel1"),n=(0,a.Z)(e,2),o=n[0],r=n[1],t=function(e){return function(n,o){r(!!o&&e)}};return(0,m.jsxs)("div",{children:[(0,m.jsxs)(u,{expanded:"panel1"===o,onChange:t("panel1"),children:[(0,m.jsx)(h,{"aria-controls":"panel1d-content",id:"panel1d-header",children:(0,m.jsx)(p.Z,{children:"Collapsible Group Item #1"})}),(0,m.jsx)(x,{children:(0,m.jsx)(p.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,m.jsxs)(u,{expanded:"panel2"===o,onChange:t("panel2"),children:[(0,m.jsx)(h,{"aria-controls":"panel2d-content",id:"panel2d-header",children:(0,m.jsx)(p.Z,{children:"Collapsible Group Item #2"})}),(0,m.jsx)(x,{children:(0,m.jsx)(p.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,m.jsxs)(u,{expanded:"panel3"===o,onChange:t("panel3"),children:[(0,m.jsx)(h,{"aria-controls":"panel3d-content",id:"panel3d-header",children:(0,m.jsx)(p.Z,{children:"Collapsible Group Item #3"})}),(0,m.jsx)(x,{children:(0,m.jsx)(p.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}},49177:function(e,n,o){o.r(n);var a=o(81241),r=o(65877),i=o(33784),t=o(99498),c=o(95590),s=o(23712);n.default=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,s.jsx)(t.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/accordion",target:"_blank",role:"button",startIcon:(0,s.jsx)(i.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,s.jsx)(c.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Accordion"}),(0,s.jsx)(c.Z,{className:"description",children:"The accordion component allows the user to show and hide sections of related content on a page."}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:"An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card."}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:[(0,s.jsx)("strong",{children:"Note:"}),"Accordions are no longer documented in the"," ",(0,s.jsx)("a",{href:"https://material.io/",children:"Material Design guidelines"}),', but MUI will continue to support them. It was formerly known as the "expansion panel".']}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic accordion"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"BasicAccordion.js",className:"my-24",iframe:!1,component:o(56850).Z,raw:o(18117)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Controlled accordion"}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["Extend the default behavior to create an accordion with the ",(0,s.jsx)("code",{children:"Accordion"})," ","component."]}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"ControlledAccordions.js",className:"my-24",iframe:!1,component:o(36302).Z,raw:o(1339)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the"," ",(0,s.jsx)("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"CustomizedAccordions.js",className:"my-24",iframe:!1,component:o(80908).Z,raw:o(47944)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Performance"}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["The content of Accordions is mounted by default even if the accordion is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your accordion details or simply render many accordions it might be a good idea to change this default behavior by enabling the",(0,s.jsx)("code",{children:"unmountOnExit"})," in ",(0,s.jsx)("code",{children:"TransitionProps"}),":"]}),(0,s.jsx)(r.Z,{component:"pre",className:"language-jsx",children:" \n<Accordion TransitionProps={{ unmountOnExit: true }} />\n"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:"As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies."}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["(WAI-ARIA:"," ",(0,s.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#accordion",children:"https://www.w3.org/TR/wai-aria-practices/#accordion"}),")"]}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["For optimal accessibility we recommend setting ",(0,s.jsx)("code",{children:"id"})," and"," ",(0,s.jsx)("code",{children:"aria-controls"})," on the",(0,s.jsx)("code",{children:"AccordionSummary"}),". The ",(0,s.jsx)("code",{children:"Accordion"})," will derive the necessary"," ",(0,s.jsx)("code",{children:"aria-labelledby"}),"and ",(0,s.jsx)("code",{children:"id"})," for the content region of the accordion."]})]})}},95768:function(e,n,o){var a=o(64836);n.Z=void 0;var r=a(o(15145)),i=o(23712),t=(0,r.default)((0,i.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosSharp");n.Z=t},12746:function(e,n,o){var a=o(64836);n.Z=void 0;var r=a(o(15145)),i=o(23712),t=(0,r.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=t}}]);