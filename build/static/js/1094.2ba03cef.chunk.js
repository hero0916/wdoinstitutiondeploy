"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[1094],{82792:function(n,o,e){e.r(o),o.default='import * as React from \'react\';\nimport FormControl from \'@mui/material/FormControl\';\nimport FormLabel from \'@mui/material/FormLabel\';\nimport FormControlLabel from \'@mui/material/FormControlLabel\';\nimport RadioGroup from \'@mui/material/RadioGroup\';\nimport Radio from \'@mui/material/Radio\';\nimport HighlightedCode from \'../../utils/HighlightedCode\';\nimport Grid from \'@mui/material/Grid\';\nimport { green } from \'@mui/material/colors\';\nimport Typography from \'@mui/material/Typography\';\nimport Box from \'@mui/material/Box\';\nimport Button from \'@mui/material/Button\';\nimport Popover from \'@mui/material/Popover\';\nimport Input from \'@mui/material/Input\';\nimport InputLabel from \'@mui/material/InputLabel\';\n\nconst inlineStyles = {\n  anchorVertical: {\n    top: {\n      top: -5,\n    },\n    center: {\n      top: \'calc(50% - 5px)\',\n    },\n    bottom: {\n      bottom: -5,\n    },\n  },\n  anchorHorizontal: {\n    left: {\n      left: -5,\n    },\n    center: {\n      left: \'calc(50% - 5px)\',\n    },\n    right: {\n      right: -5,\n    },\n  },\n};\n\nfunction AnchorPlayground() {\n  const anchorRef = React.useRef();\n\n  const [state, setState] = React.useState({\n    open: false,\n    anchorOriginVertical: \'top\',\n    anchorOriginHorizontal: \'left\',\n    transformOriginVertical: \'top\',\n    transformOriginHorizontal: \'left\',\n    positionTop: 200, // Just so the popover can be spotted more easily\n    positionLeft: 400, // Same as above\n    anchorReference: \'anchorEl\',\n  });\n\n  const {\n    open,\n    anchorOriginVertical,\n    anchorOriginHorizontal,\n    transformOriginVertical,\n    transformOriginHorizontal,\n    positionTop,\n    positionLeft,\n    anchorReference,\n  } = state;\n\n  const handleChange = (event) => {\n    setState({\n      ...state,\n      [event.target.name]: event.target.value,\n    });\n  };\n\n  const handleNumberInputChange = (key) => (event) => {\n    setState({\n      ...state,\n      [key]: parseInt(event.target.value, 10),\n    });\n  };\n\n  const handleClickButton = () => {\n    setState({\n      ...state,\n      open: true,\n    });\n  };\n\n  const handleClose = () => {\n    setState({\n      ...state,\n      open: false,\n    });\n  };\n\n  let mode = \'\';\n\n  if (anchorReference === \'anchorPosition\') {\n    mode = `\n  anchorReference="${anchorReference}"\n  anchorPosition={{ top: ${positionTop}, left: ${positionLeft} }}`;\n  }\n\n  const jsx = `\n<Popover ${mode}\n  anchorOrigin={{\n    vertical: \'${anchorOriginVertical}\',\n    horizontal: \'${anchorOriginHorizontal}\',\n  }}\n  transformOrigin={{\n    vertical: \'${transformOriginVertical}\',\n    horizontal: \'${transformOriginHorizontal}\',\n  }}\n>\n  The content of the Popover.\n</Popover>\n`;\n\n  const radioAnchorClasses = {\n    color: green[600],\n    \'&.Mui-checked\': {\n      color: green[500],\n    },\n  };\n\n  return (\n    <div>\n      <Grid container justifyContent="center">\n        <Grid item sx={{ position: \'relative\', mb: 4 }}>\n          <Button ref={anchorRef} variant="contained" onClick={handleClickButton}>\n            Open Popover\n          </Button>\n          {anchorReference === \'anchorEl\' && (\n            <Box\n              sx={{\n                bgcolor: green[500],\n                width: 10,\n                height: 10,\n                borderRadius: \'50%\',\n                position: \'absolute\',\n              }}\n              style={{\n                ...inlineStyles.anchorVertical[anchorOriginVertical],\n                ...inlineStyles.anchorHorizontal[anchorOriginHorizontal],\n              }}\n            />\n          )}\n        </Grid>\n      </Grid>\n      <Popover\n        open={open}\n        anchorEl={anchorRef.current}\n        anchorReference={anchorReference}\n        anchorPosition={{\n          top: positionTop,\n          left: positionLeft,\n        }}\n        onClose={handleClose}\n        anchorOrigin={{\n          vertical: anchorOriginVertical,\n          horizontal: anchorOriginHorizontal,\n        }}\n        transformOrigin={{\n          vertical: transformOriginVertical,\n          horizontal: transformOriginHorizontal,\n        }}\n      >\n        <Typography sx={{ m: 2 }}>The content of the Popover.</Typography>\n      </Popover>\n      <Grid container spacing={2}>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">anchorReference</FormLabel>\n            <RadioGroup\n              row\n              aria-label="anchor reference"\n              name="anchorReference"\n              value={anchorReference}\n              onChange={handleChange}\n            >\n              <FormControlLabel\n                value="anchorEl"\n                control={<Radio />}\n                label="anchorEl"\n              />\n              <FormControlLabel\n                value="anchorPosition"\n                control={<Radio />}\n                label="anchorPosition"\n              />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl variant="standard">\n            <InputLabel htmlFor="position-top">anchorPosition.top</InputLabel>\n            <Input\n              id="position-top"\n              type="number"\n              value={positionTop}\n              onChange={handleNumberInputChange(\'positionTop\')}\n            />\n          </FormControl>\n          &nbsp;\n          <FormControl variant="standard">\n            <InputLabel htmlFor="position-left">anchorPosition.left</InputLabel>\n            <Input\n              id="position-left"\n              type="number"\n              value={positionLeft}\n              onChange={handleNumberInputChange(\'positionLeft\')}\n            />\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">anchorOrigin.vertical</FormLabel>\n            <RadioGroup\n              aria-label="anchor origin vertical"\n              name="anchorOriginVertical"\n              value={anchorOriginVertical}\n              onChange={handleChange}\n            >\n              <FormControlLabel\n                value="top"\n                control={<Radio sx={radioAnchorClasses} />}\n                label="Top"\n              />\n              <FormControlLabel\n                value="center"\n                control={<Radio sx={radioAnchorClasses} />}\n                label="Center"\n              />\n              <FormControlLabel\n                value="bottom"\n                control={<Radio sx={radioAnchorClasses} />}\n                label="Bottom"\n              />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">transformOrigin.vertical</FormLabel>\n            <RadioGroup\n              aria-label="transform origin vertical"\n              name="transformOriginVertical"\n              value={transformOriginVertical}\n              onChange={handleChange}\n            >\n              <FormControlLabel value="top" control={<Radio />} label="Top" />\n              <FormControlLabel\n                value="center"\n                control={<Radio color="primary" />}\n                label="Center"\n              />\n              <FormControlLabel\n                value="bottom"\n                control={<Radio color="primary" />}\n                label="Bottom"\n              />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>\n            <RadioGroup\n              row\n              aria-label="anchor origin horizontal"\n              name="anchorOriginHorizontal"\n              value={anchorOriginHorizontal}\n              onChange={handleChange}\n            >\n              <FormControlLabel\n                value="left"\n                control={<Radio sx={radioAnchorClasses} />}\n                label="Left"\n              />\n              <FormControlLabel\n                value="center"\n                control={<Radio sx={radioAnchorClasses} />}\n                label="Center"\n              />\n              <FormControlLabel\n                value="right"\n                control={<Radio sx={radioAnchorClasses} />}\n                label="Right"\n              />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n        <Grid item xs={12} sm={6}>\n          <FormControl component="fieldset">\n            <FormLabel component="legend">transformOrigin.horizontal</FormLabel>\n            <RadioGroup\n              row\n              aria-label="transform origin horizontal"\n              name="transformOriginHorizontal"\n              value={transformOriginHorizontal}\n              onChange={handleChange}\n            >\n              <FormControlLabel\n                value="left"\n                control={<Radio color="primary" />}\n                label="Left"\n              />\n              <FormControlLabel\n                value="center"\n                control={<Radio color="primary" />}\n                label="Center"\n              />\n              <FormControlLabel\n                value="right"\n                control={<Radio color="primary" />}\n                label="Right"\n              />\n            </RadioGroup>\n          </FormControl>\n        </Grid>\n      </Grid>\n      <HighlightedCode code={jsx} language="jsx" />\n    </div>\n  );\n}\n\nexport default AnchorPlayground;\n'},96404:function(n,o,e){e.r(o),o.default="import * as React from 'react';\nimport Popover from '@mui/material/Popover';\nimport Typography from '@mui/material/Typography';\nimport Button from '@mui/material/Button';\n\nexport default function BasicPopover() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  const handleClick = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  const open = Boolean(anchorEl);\n  const id = open ? 'simple-popover' : undefined;\n\n  return (\n    <div>\n      <Button aria-describedby={id} variant=\"contained\" onClick={handleClick}>\n        Open Popover\n      </Button>\n      <Popover\n        id={id}\n        open={open}\n        anchorEl={anchorEl}\n        onClose={handleClose}\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'left',\n        }}\n      >\n        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>\n      </Popover>\n    </div>\n  );\n}\n"},50112:function(n,o,e){e.r(o),o.default="import * as React from 'react';\nimport Popover from '@mui/material/Popover';\nimport Typography from '@mui/material/Typography';\n\nexport default function MouseOverPopover() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  const handlePopoverOpen = (event) => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handlePopoverClose = () => {\n    setAnchorEl(null);\n  };\n\n  const open = Boolean(anchorEl);\n\n  return (\n    <div>\n      <Typography\n        aria-owns={open ? 'mouse-over-popover' : undefined}\n        aria-haspopup=\"true\"\n        onMouseEnter={handlePopoverOpen}\n        onMouseLeave={handlePopoverClose}\n      >\n        Hover with a Popover.\n      </Typography>\n      <Popover\n        id=\"mouse-over-popover\"\n        sx={{\n          pointerEvents: 'none',\n        }}\n        open={open}\n        anchorEl={anchorEl}\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'left',\n        }}\n        transformOrigin={{\n          vertical: 'top',\n          horizontal: 'left',\n        }}\n        onClose={handlePopoverClose}\n        disableRestoreFocus\n      >\n        <Typography sx={{ p: 1 }}>I use Popover.</Typography>\n      </Popover>\n    </div>\n  );\n}\n"},68281:function(n,o,e){e.r(o),o.default="import * as React from 'react';\nimport Typography from '@mui/material/Typography';\nimport Button from '@mui/material/Button';\nimport Popover from '@mui/material/Popover';\nimport PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';\n\nexport default function PopoverPopupState() {\n  return (\n    <PopupState variant=\"popover\" popupId=\"demo-popup-popover\">\n      {(popupState) => (\n        <div>\n          <Button variant=\"contained\" {...bindTrigger(popupState)}>\n            Open Popover\n          </Button>\n          <Popover\n            {...bindPopover(popupState)}\n            anchorOrigin={{\n              vertical: 'bottom',\n              horizontal: 'center',\n            }}\n            transformOrigin={{\n              vertical: 'top',\n              horizontal: 'center',\n            }}\n          >\n            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>\n          </Popover>\n        </div>\n      )}\n    </PopupState>\n  );\n}\n"},81241:function(n,o,e){e.d(o,{Z:function(){return L}});var r=e(29439),t=e(65877),a=e(75208),i=e(45681),l=e(88778),c=e(29595),s=e(88391),p=e(76677),h=e(18754),m=e(1413),d=e(45987),u=e(87650),f=e(66926),v=e(91882),x=e(85635),g=e(26647),j=e(83182),b=e(81087),Z=e(79421),C=e(23712),P=["children","name"];function y(n){var o=n.children,e=n.document,r=(0,j.Z)();s.useEffect((function(){e.body.dir=r.direction}),[e,r.direction]);var t=s.useMemo((function(){return(0,v.Z)({key:"iframe-demo-".concat(r.direction),prepend:!0,container:e.head,stylisPlugins:"rtl"===r.direction?[f.Z]:[]})}),[e,r.direction]),a=s.useCallback((function(){return e.defaultView}),[e]);return(0,C.jsx)(g.StyleSheetManager,{target:e.head,stylisPlugins:"rtl"===r.direction?[f.Z]:[],children:(0,C.jsxs)(x.C,{value:t,children:[(0,C.jsx)(Z.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),s.cloneElement(o,{window:a})]})})}var O=(0,b.ZP)("iframe")((function(n){var o=n.theme;return{backgroundColor:o.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:o.shadows[1]}}));function R(n){var o,e=n.children,t=n.name,a=(0,d.Z)(n,P),i="".concat(t," demo"),l=s.useRef(null),c=s.useReducer((function(){return!0}),!1),p=(0,r.Z)(c,2),h=p[0],f=p[1];s.useEffect((function(){var n=l.current.contentDocument;null==n||"complete"!==n.readyState||h||f()}),[h]);var v=null===(o=l.current)||void 0===o?void 0:o.contentDocument;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(O,(0,m.Z)({onLoad:f,ref:l,title:i},a)),!1!==h?u.createPortal((0,C.jsx)(y,{document:v,children:e}),v.body):null]})}var F=s.memo(R),T=e(33784);function z(n){var o=(0,s.useState)(n.currentTabIndex),e=(0,r.Z)(o,2),m=e[0],d=e[1],u=n.component,f=n.raw,v=n.iframe,x=n.className,g=n.name;return(0,C.jsxs)(a.Z,{className:(0,c.Z)(x,"shadow"),sx:{backgroundColor:function(n){return(0,p._j)(n.palette.background.paper,"light"===n.palette.mode?.01:.1)}},children:[(0,C.jsx)(h.Z,{sx:{backgroundColor:function(n){return(0,p._j)(n.palette.background.paper,"light"===n.palette.mode?.02:.2)}},children:(0,C.jsxs)(l.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(n,o){d(o)},textColor:"secondary",indicatorColor:"secondary",children:[u&&(0,C.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,C.jsx)(T.Z,{children:"heroicons-outline:eye"})}),f&&(0,C.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,C.jsx)(T.Z,{children:"heroicons-outline:code"})})]})}),(0,C.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,C.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:u&&(v?(0,C.jsx)(F,{name:g,children:(0,C.jsx)(u,{})}):(0,C.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,C.jsx)(u,{})}))}),(0,C.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:f&&(0,C.jsx)("div",{className:"flex flex-1",children:(0,C.jsx)(t.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:f.default})})})]})]})}z.defaultProps={name:"",currentTabIndex:0};var L=z},75286:function(n,o,e){var r=e(4942),t=e(1413),a=e(29439),i=e(88391),l=e(82872),c=e(97789),s=e(35431),p=e(69135),h=e(74036),m=e(43361),d=e(12600),u=e(96031),f=e(95590),v=e(18754),x=e(99498),g=e(95914),j=e(90951),b=e(81660),Z=e(23712),C={anchorVertical:{top:{top:-5},center:{top:"calc(50% - 5px)"},bottom:{bottom:-5}},anchorHorizontal:{left:{left:-5},center:{left:"calc(50% - 5px)"},right:{right:-5}}};o.Z=function(){var n=i.useRef(),o=i.useState({open:!1,anchorOriginVertical:"top",anchorOriginHorizontal:"left",transformOriginVertical:"top",transformOriginHorizontal:"left",positionTop:200,positionLeft:400,anchorReference:"anchorEl"}),e=(0,a.Z)(o,2),P=e[0],y=e[1],O=P.open,R=P.anchorOriginVertical,F=P.anchorOriginHorizontal,T=P.transformOriginVertical,z=P.transformOriginHorizontal,L=P.positionTop,w=P.positionLeft,E=P.anchorReference,N=function(n){y((0,t.Z)((0,t.Z)({},P),{},(0,r.Z)({},n.target.name,n.target.value)))},k=function(n){return function(o){y((0,t.Z)((0,t.Z)({},P),{},(0,r.Z)({},n,parseInt(o.target.value,10))))}},G="";"anchorPosition"===E&&(G='\n  anchorReference="'.concat(E,'"\n  anchorPosition={{ top: ').concat(L,", left: ").concat(w," }}"));var S="\n<Popover ".concat(G,"\n  anchorOrigin={{\n    vertical: '").concat(R,"',\n    horizontal: '").concat(F,"',\n  }}\n  transformOrigin={{\n    vertical: '").concat(T,"',\n    horizontal: '").concat(z,"',\n  }}\n>\n  The content of the Popover.\n</Popover>\n"),B={color:u.Z[600],"&.Mui-checked":{color:u.Z[500]}};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(d.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsxs)(d.ZP,{item:!0,sx:{position:"relative",mb:4},children:[(0,Z.jsx)(x.Z,{ref:n,variant:"contained",onClick:function(){y((0,t.Z)((0,t.Z)({},P),{},{open:!0}))},children:"Open Popover"}),"anchorEl"===E&&(0,Z.jsx)(v.Z,{sx:{bgcolor:u.Z[500],width:10,height:10,borderRadius:"50%",position:"absolute"},style:(0,t.Z)((0,t.Z)({},C.anchorVertical[R]),C.anchorHorizontal[F])})]})}),(0,Z.jsx)(g.ZP,{open:O,anchorEl:n.current,anchorReference:E,anchorPosition:{top:L,left:w},onClose:function(){y((0,t.Z)((0,t.Z)({},P),{},{open:!1}))},anchorOrigin:{vertical:R,horizontal:F},transformOrigin:{vertical:T,horizontal:z},children:(0,Z.jsx)(f.Z,{sx:{m:2},children:"The content of the Popover."})}),(0,Z.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsxs)(l.Z,{component:"fieldset",children:[(0,Z.jsx)(c.Z,{component:"legend",children:"anchorReference"}),(0,Z.jsxs)(p.Z,{row:!0,"aria-label":"anchor reference",name:"anchorReference",value:E,onChange:N,children:[(0,Z.jsx)(s.Z,{value:"anchorEl",control:(0,Z.jsx)(h.Z,{}),label:"anchorEl"}),(0,Z.jsx)(s.Z,{value:"anchorPosition",control:(0,Z.jsx)(h.Z,{}),label:"anchorPosition"})]})]})}),(0,Z.jsxs)(d.ZP,{item:!0,xs:12,sm:6,children:[(0,Z.jsxs)(l.Z,{variant:"standard",children:[(0,Z.jsx)(b.Z,{htmlFor:"position-top",children:"anchorPosition.top"}),(0,Z.jsx)(j.Z,{id:"position-top",type:"number",value:L,onChange:k("positionTop")})]}),"\xa0",(0,Z.jsxs)(l.Z,{variant:"standard",children:[(0,Z.jsx)(b.Z,{htmlFor:"position-left",children:"anchorPosition.left"}),(0,Z.jsx)(j.Z,{id:"position-left",type:"number",value:w,onChange:k("positionLeft")})]})]}),(0,Z.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsxs)(l.Z,{component:"fieldset",children:[(0,Z.jsx)(c.Z,{component:"legend",children:"anchorOrigin.vertical"}),(0,Z.jsxs)(p.Z,{"aria-label":"anchor origin vertical",name:"anchorOriginVertical",value:R,onChange:N,children:[(0,Z.jsx)(s.Z,{value:"top",control:(0,Z.jsx)(h.Z,{sx:B}),label:"Top"}),(0,Z.jsx)(s.Z,{value:"center",control:(0,Z.jsx)(h.Z,{sx:B}),label:"Center"}),(0,Z.jsx)(s.Z,{value:"bottom",control:(0,Z.jsx)(h.Z,{sx:B}),label:"Bottom"})]})]})}),(0,Z.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsxs)(l.Z,{component:"fieldset",children:[(0,Z.jsx)(c.Z,{component:"legend",children:"transformOrigin.vertical"}),(0,Z.jsxs)(p.Z,{"aria-label":"transform origin vertical",name:"transformOriginVertical",value:T,onChange:N,children:[(0,Z.jsx)(s.Z,{value:"top",control:(0,Z.jsx)(h.Z,{}),label:"Top"}),(0,Z.jsx)(s.Z,{value:"center",control:(0,Z.jsx)(h.Z,{color:"primary"}),label:"Center"}),(0,Z.jsx)(s.Z,{value:"bottom",control:(0,Z.jsx)(h.Z,{color:"primary"}),label:"Bottom"})]})]})}),(0,Z.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsxs)(l.Z,{component:"fieldset",children:[(0,Z.jsx)(c.Z,{component:"legend",children:"anchorOrigin.horizontal"}),(0,Z.jsxs)(p.Z,{row:!0,"aria-label":"anchor origin horizontal",name:"anchorOriginHorizontal",value:F,onChange:N,children:[(0,Z.jsx)(s.Z,{value:"left",control:(0,Z.jsx)(h.Z,{sx:B}),label:"Left"}),(0,Z.jsx)(s.Z,{value:"center",control:(0,Z.jsx)(h.Z,{sx:B}),label:"Center"}),(0,Z.jsx)(s.Z,{value:"right",control:(0,Z.jsx)(h.Z,{sx:B}),label:"Right"})]})]})}),(0,Z.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsxs)(l.Z,{component:"fieldset",children:[(0,Z.jsx)(c.Z,{component:"legend",children:"transformOrigin.horizontal"}),(0,Z.jsxs)(p.Z,{row:!0,"aria-label":"transform origin horizontal",name:"transformOriginHorizontal",value:z,onChange:N,children:[(0,Z.jsx)(s.Z,{value:"left",control:(0,Z.jsx)(h.Z,{color:"primary"}),label:"Left"}),(0,Z.jsx)(s.Z,{value:"center",control:(0,Z.jsx)(h.Z,{color:"primary"}),label:"Center"}),(0,Z.jsx)(s.Z,{value:"right",control:(0,Z.jsx)(h.Z,{color:"primary"}),label:"Right"})]})]})})]}),(0,Z.jsx)(m.Z,{code:S,language:"jsx"})]})}},35245:function(n,o,e){e.d(o,{Z:function(){return s}});var r=e(29439),t=e(88391),a=e(95914),i=e(95590),l=e(99498),c=e(23712);function s(){var n=t.useState(null),o=(0,r.Z)(n,2),e=o[0],s=o[1],p=Boolean(e),h=p?"simple-popover":void 0;return(0,c.jsxs)("div",{children:[(0,c.jsx)(l.Z,{"aria-describedby":h,variant:"contained",onClick:function(n){s(n.currentTarget)},children:"Open Popover"}),(0,c.jsx)(a.ZP,{id:h,open:p,anchorEl:e,onClose:function(){s(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,c.jsx)(i.Z,{sx:{p:2},children:"The content of the Popover."})})]})}},74355:function(n,o,e){e.d(o,{Z:function(){return c}});var r=e(29439),t=e(88391),a=e(95914),i=e(95590),l=e(23712);function c(){var n=t.useState(null),o=(0,r.Z)(n,2),e=o[0],c=o[1],s=function(){c(null)},p=Boolean(e);return(0,l.jsxs)("div",{children:[(0,l.jsx)(i.Z,{"aria-owns":p?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(n){c(n.currentTarget)},onMouseLeave:s,children:"Hover with a Popover."}),(0,l.jsx)(a.ZP,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:p,anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:s,disableRestoreFocus:!0,children:(0,l.jsx)(i.Z,{sx:{p:1},children:"I use Popover."})})]})}},71248:function(n,o,e){e.d(o,{Z:function(){return s}});var r=e(1413),t=(e(88391),e(95590)),a=e(99498),i=e(95914),l=e(24550),c=e(23712);function s(){return(0,c.jsx)(l.ZP,{variant:"popover",popupId:"demo-popup-popover",children:function(n){return(0,c.jsxs)("div",{children:[(0,c.jsx)(a.Z,(0,r.Z)((0,r.Z)({variant:"contained"},(0,l.vW)(n)),{},{children:"Open Popover"})),(0,c.jsx)(i.ZP,(0,r.Z)((0,r.Z)({},(0,l.ZW)(n)),{},{anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,c.jsx)(t.Z,{sx:{p:2},children:"The content of the Popover."})}))]})}})}},21094:function(n,o,e){e.r(o);var r=e(81241),t=e(33784),a=e(99498),i=e(95590),l=e(23712);o.default=function(n){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,l.jsx)(a.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/popover",target:"_blank",role:"button",startIcon:(0,l.jsx)(t.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,l.jsx)(i.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Popover"}),(0,l.jsx)(i.Z,{className:"description",children:"A Popover can be used to display some content on top of another."}),(0,l.jsxs)(i.Z,{className:"mb-40",component:"div",children:["Things to know when using the ",(0,l.jsx)("code",{children:"Popover"})," component:"]}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["The component is built on top of the"," ",(0,l.jsx)("a",{href:"/material-ui/react-modal/",children:(0,l.jsx)("code",{children:"Modal"})})," ","component."]}),(0,l.jsxs)("li",{children:["The scroll and click away are blocked unlike with the"," ",(0,l.jsx)("a",{href:"/material-ui/react-popper/",children:(0,l.jsx)("code",{children:"Popper"})})," ","component."]})]}),(0,l.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic Popover"}),(0,l.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,l.jsx)(r.Z,{name:"BasicPopover.js",className:"my-24",iframe:!1,component:e(35245).Z,raw:e(96404)})}),(0,l.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Anchor playground"}),(0,l.jsxs)(i.Z,{className:"mb-40",component:"div",children:["Use the radio buttons to adjust the ",(0,l.jsx)("code",{children:"anchorOrigin"})," and"," ",(0,l.jsx)("code",{children:"transformOrigin"})," positions. You can also set the ",(0,l.jsx)("code",{children:"anchorReference"})," to"," ",(0,l.jsx)("code",{children:"anchorPosition"})," or ",(0,l.jsx)("code",{children:"anchorEl"}),". When it is ",(0,l.jsx)("code",{children:"anchorPosition"}),", the component will, instead of ",(0,l.jsx)("code",{children:"anchorEl"}),", refer to the"," ",(0,l.jsx)("code",{children:"anchorPosition"})," prop which you can adjust to set the position of the popover."]}),(0,l.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,l.jsx)(r.Z,{name:"AnchorPlayground.js",className:"my-24",iframe:!1,component:e(75286).Z,raw:e(82792)})}),(0,l.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Mouse over interaction"}),(0,l.jsxs)(i.Z,{className:"mb-40",component:"div",children:["This demo demonstrates how to use the ",(0,l.jsx)("code",{children:"Popover"})," component and the mouseover event to achieve popover behavior."]}),(0,l.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,l.jsx)(r.Z,{name:"MouseOverPopover.js",className:"my-24",iframe:!1,component:e(74355).Z,raw:e(50112)})}),(0,l.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Complementary projects"}),(0,l.jsx)(i.Z,{className:"mb-40",component:"div",children:"For more advanced use cases, you might be able to take advantage of:"}),(0,l.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"PopupState helper"}),(0,l.jsxs)(i.Z,{className:"mb-40",component:"div",children:["There is a 3rd party package"," ",(0,l.jsx)("a",{href:"https://github.com/jcoreio/material-ui-popup-state",children:(0,l.jsx)("code",{children:"material-ui-popup-state"})})," ","that takes care of popover state for you in most cases."]}),(0,l.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,l.jsx)(r.Z,{name:"PopoverPopupState.js",className:"my-24",iframe:!1,component:e(71248).Z,raw:e(68281)})})]})}},43361:function(n,o,e){var r=e(1413),t=e(45987),a=e(88391),i=e(65877),l=e(23712),c=["code","language"],s=(0,a.forwardRef)((function(n,o){var e=n.code,a=n.language,s=(0,t.Z)(n,c);return(0,l.jsx)(i.Z,(0,r.Z)((0,r.Z)({component:"pre",className:"language-".concat(a||"jsx"),ref:o},s),{},{children:e}))}));o.Z=s}}]);