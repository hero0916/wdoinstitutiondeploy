"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3585],{34215:function(t,e,n){n.r(e),e.default="import themesConfig from 'app/configs/themesConfig';\nimport i18n from '../../i18n';\nimport { authRoles } from '../auth';\n\nconst settingsConfig = {\n  layout: {\n    style: 'layout1', // layout1 layout2 layout3\n    config: {}, // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js\n  },\n  customScrollbars: true,\n  direction: i18n.dir(i18n.options.lng) || 'ltr', // rtl, ltr\n  theme: {\n    main: themesConfig.default,\n    navbar: themesConfig.defaultDark,\n    toolbar: themesConfig.default,\n    footer: themesConfig.defaultDark,\n  },\n  /*\n   To make whole app auth protected by default set defaultAuth:['admin','staff','user']\n   To make whole app accessible without authorization by default set defaultAuth: null\n   *** The individual route configs which has auth option won't be overridden.\n   */\n  defaultAuth: authRoles.guest,\n  /*\n    Default redirect url for the logged-in user,\n   */\n  loginRedirectUrl: '/',\n};\n\nexport default settingsConfig;\n"},23585:function(t,e,n){n.r(e);var a=n(65877),o=n(95590),s=n(23712);e.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{variant:"h4",className:"mb-40 font-700",children:"Default Settings"}),(0,s.jsxs)(o.Z,{className:"mb-16",component:"p",children:["You can set the default layout, theme settings of your app at",(0,s.jsx)("code",{children:"app/configs/settingsConfig.js"})]}),(0,s.jsx)(a.Z,{component:"pre",className:"language-jsx",children:n(34215)})]})}}}]);