"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[7936],{97936:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var s=n(44461),r=n(88391),l=n(74931),a=n(28480),i=n(40099),c=n(64444),o=n(95590),d=n(13960),m=n(15866),u=n(33784),f=n(76677),x=n(40738),h=n(99498),p=n(4942),j=n(74165),y=n(15861),v=n(51551),Z=n(88173),g=n(63387),N=n.n(g),b=(0,v.hg)("fileManagerApp/items/getItems",function(){var e=(0,y.Z)((0,j.Z)().mark((function e(t){var n,s;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N().get("/api/file-manager/".concat(t));case 2:return n=e.sent,e.next=5,n.data;case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=(0,v.HF)({}),k=w.getSelectors((function(e){return e.fileManagerApp.items})),I=k.selectAll,C=(k.selectEntities,k.selectById),A=(0,v.oM)({name:"fileManagerApp/items",initialState:w.getInitialState({selectedItemId:null,path:[]}),reducers:{setSelectedItem:function(e,t){e.selectedItemId=t.payload}},extraReducers:(0,p.Z)({},b.fulfilled,(function(e,t){var n=t.payload,s=n.items,r=n.path;w.setAll(e,s),e.path=r,e.selectedItemId=null}))}),M=(0,Z.P1)([I],(function(e){return e.filter((function(e){return"folder"===e.type}))})),S=(0,Z.P1)([I],(function(e){return e.filter((function(e){return"folder"!==e.type}))})),z=function(e){return e.fileManagerApp.items.selectedItemId},E=function(e){return e.fileManagerApp.items.path},F=A.actions.setSelectedItem,$=A.reducer,D=n(45987),P=n(81087),U=n(32044),B=n(4247),_=n(96031),O=n(39764),L=n(41112),T=n(23712),X=["theme"],G=(0,P.ZP)(x.Z)((function(e){e.theme;var t=(0,D.Z)(e,X);return{backgroundColor:{PDF:U.Z[600],DOC:B.Z[600],XLS:_.Z[600],TXT:O.Z[600],JPG:L.Z[600]}[t.color]}}));var H=function(e){var t=e.type;return"folder"===t?(0,T.jsx)(u.Z,{className:"",size:56,color:"disabled",children:"heroicons-outline:folder"}):(0,T.jsxs)("div",{className:"relative",children:[(0,T.jsx)(u.Z,{className:"",size:56,color:"disabled",children:"heroicons-outline:document"}),(0,T.jsx)(G,{color:t,className:"absolute left-0 bottom-0 px-6 rounded text-12 font-semibold leading-20 text-white",children:t})]})};var J=function(e){var t=(0,l.I0)(),n=(0,l.v9)((function(e){return C(e,e.fileManagerApp.items.selectedItemId)}));return n?(0,T.jsxs)(d.E.div,{initial:{y:50,opacity:.8},animate:{y:0,opacity:1,transition:{delay:.3}},className:"file-details p-24 sm:p-32",children:[(0,T.jsx)("div",{className:"flex items-center justify-end w-full",children:(0,T.jsx)(m.Z,{className:"",size:"large",onClick:function(){return t(F(null))},children:(0,T.jsx)(u.Z,{children:"heroicons-outline:x"})})}),(0,T.jsx)(x.Z,{className:" w-full rounded-8 border preview h-128 sm:h-256 file-icon flex items-center justify-center my-32",sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,f.$n)(e.palette.background.default,.4):(0,f.$n)(e.palette.background.default,.02)}},children:(0,T.jsx)(d.E.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:(0,T.jsx)(H,{className:"",type:n.type})})}),(0,T.jsx)(o.Z,{className:"text-18 font-medium",children:n.name}),(0,T.jsx)("div",{className:"text-16 font-medium mt-32",children:"Information"}),(0,T.jsxs)("div",{className:"flex flex-col mt-16 border-t border-b divide-y font-medium",children:[(0,T.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,T.jsx)(o.Z,{color:"text.secondary",children:"Created By"}),(0,T.jsx)(o.Z,{children:n.createdBy})]}),(0,T.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,T.jsx)(o.Z,{color:"text.secondary",children:"Created At"}),(0,T.jsx)(o.Z,{children:n.createdAt})]}),(0,T.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,T.jsx)(o.Z,{color:"text.secondary",children:"Modified At"}),(0,T.jsx)(o.Z,{children:n.modifiedAt})]}),(0,T.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,T.jsx)(o.Z,{color:"text.secondary",children:"Size"}),(0,T.jsx)(o.Z,{children:n.size})]}),n.contents&&(0,T.jsxs)("div",{className:"flex items-center justify-between py-12",children:[(0,T.jsx)(o.Z,{color:"text.secondary",children:"Contents"}),(0,T.jsx)(o.Z,{children:n.contents})]})]}),n.description&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"text-16 font-medium mt-32 pb-16 border-b",children:"Description"}),(0,T.jsx)(o.Z,{className:"py-12",children:n.description})]}),(0,T.jsxs)("div",{className:"grid grid-cols-2 gap-16 w-full mt-32",children:[(0,T.jsx)(h.Z,{className:"flex-auto",color:"secondary",variant:"contained",children:"Download"}),(0,T.jsx)(h.Z,{className:"flex-auto",children:"Delete"})]})]}):null},R=(0,n(42601).UY)({items:$}),W=n(11792),Y=n(86827),q=n(764);var K=function(e){var t=(0,l.v9)(M),n=(0,l.v9)(S),s=(0,l.v9)(E);return(0,T.jsxs)("div",{className:"p-24 sm:p-32 w-full flex flex-col sm:flex-row space-y-8 sm:space-y-0 items-center justify-between",children:[(0,T.jsxs)("div",{className:"flex flex-col items-center sm:items-start space-y-8 sm:space-y-0",children:[(0,T.jsxs)(d.E.span,{className:"flex items-end",initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,children:[(0,T.jsx)(o.Z,{component:Y.rU,to:"/apps/file-manager",className:"text-20 md:text-32 font-extrabold tracking-tight leading-none",role:"button",children:"File Manager"}),s.length>0&&(0,T.jsxs)(W.Z,{"aria-label":"breadcrumb",className:"mx-12",separator:(0,T.jsx)(q.Z,{fontSize:"small"}),children:[(0,T.jsx)("div",{}),s.map((function(e,t){return t+1===s.length?(0,T.jsx)(o.Z,{children:e.name},t):(0,T.jsx)(Y.rU,{color:"text.primary",to:"/apps/file-manager/".concat(e.id),children:e.name},t)}))]})]}),(0,T.jsx)(o.Z,{component:d.E.span,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},delay:500,className:"text-14 font-medium mx-2",color:"text.secondary",children:"".concat(t.length," folders, ").concat(n.length," files")})]}),(0,T.jsx)("div",{className:"flex items-center -mx-8",children:(0,T.jsx)(h.Z,{className:"mx-8 whitespace-nowrap",variant:"contained",color:"secondary",startIcon:(0,T.jsx)(u.Z,{size:20,children:"heroicons-outline:plus"}),children:"Upload file"})})]})},Q=n(13663);var V=function(e){var t=e.item,n=(0,l.I0)();return t?(0,T.jsxs)(x.Z,{sx:{backgroundColor:"background.paper"},className:"relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16",children:[(0,T.jsx)(m.Z,{className:"absolute z-20 top-0 right-0 m-6 w-32 h-32 min-h-32",onClick:function(){return n(F(t.id))},children:(0,T.jsx)(u.Z,{size:20,children:"heroicons-solid:information-circle"})}),(0,T.jsxs)(Q.Z,{className:"flex flex-col h-full w-full",to:"/apps/file-manager/".concat(t.id),role:"button",children:[(0,T.jsx)("div",{className:"flex flex-auto w-full items-center justify-center",children:(0,T.jsx)(H,{className:"",type:t.type})}),(0,T.jsxs)("div",{className:"flex shrink flex-col justify-center text-center",children:[(0,T.jsx)(o.Z,{className:"truncate text-12 font-medium",children:t.name}),t.contents&&(0,T.jsx)(o.Z,{className:"truncate text-12 font-medium",color:"text.secondary",children:t.contents})]})]})]}):null};var ee=function(e){var t=e.item,n=(0,l.I0)();return t?(0,T.jsxs)(x.Z,{sx:{backgroundColor:"background.paper"},className:"flex flex-col relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16 cursor-pointer",onClick:function(){return n(F(t.id))},children:[(0,T.jsx)("div",{className:"flex flex-auto w-full items-center justify-center",children:(0,T.jsx)(H,{className:"",type:t.type})}),(0,T.jsxs)("div",{className:"flex shrink flex-col justify-center text-center",children:[(0,T.jsx)(o.Z,{className:"truncate text-12 font-medium",children:t.name}),t.contents&&(0,T.jsx)(o.Z,{className:"truncate text-12 font-medium",color:"text.secondary",children:t.contents})]})]}):null};var te=function(){var e=(0,l.v9)(M),t=(0,l.v9)(S);return(0,T.jsxs)("div",{className:"p-32",children:[e.length>0&&(0,T.jsxs)(x.Z,{className:"p-16 w-full rounded-16 mb-24 border",sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,f.$n)(e.palette.background.default,.4):(0,f.$n)(e.palette.background.default,.02)}},children:[(0,T.jsx)(o.Z,{className:"font-medium",children:"Folders"}),(0,T.jsx)("div",{className:"flex flex-wrap -m-8 mt-8",children:e.map((function(e){return(0,T.jsx)(V,{item:e},e.id)}))})]}),t.length>0&&(0,T.jsxs)(x.Z,{className:"p-16 w-full rounded-16 mb-24 border",sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,f.$n)(e.palette.background.default,.4):(0,f.$n)(e.palette.background.default,.02)}},children:[(0,T.jsx)(o.Z,{className:"font-medium",children:"Files"}),(0,T.jsx)("div",{className:"flex flex-wrap -m-8 mt-8",children:t.map((function(e){return(0,T.jsx)(ee,{item:e},e.id)}))})]})]})};var ne=(0,s.Z)("fileManagerApp",R)((function(){var e=(0,l.I0)(),t=(0,l.v9)(z),n=(0,i.UO)(),s=(0,c.Z)((function(e){return e.breakpoints.down("lg")}));return(0,r.useEffect)((function(){e(b(n.folderId))}),[e,n.folderId]),(0,T.jsx)(a.Z,{header:(0,T.jsx)(K,{}),content:(0,T.jsx)(te,{}),rightSidebarOpen:Boolean(t),rightSidebarContent:(0,T.jsx)(J,{}),rightSidebarWidth:400,scroll:s?"normal":"content"})}))},764:function(e,t,n){var s=n(64836);t.Z=void 0;var r=s(n(15145)),l=n(23712),a=(0,r.default)((0,l.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=a}}]);