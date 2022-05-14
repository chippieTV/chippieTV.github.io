(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[822],{3108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/three",function(){return t(688)}])},688:function(e,n,t){"use strict";t.r(n);var r=t(5667),i=t(2541),o=t(7879),a=t(8664),s=t(8757),l=t(3405),c=t(9290);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(e){var n=(0,s.useRef)(null),t=(0,s.useState)(!1),i=t[0],o=t[1],a=(0,s.useState)(!1),c=a[0],d=a[1];return(0,l.x)((function(e,t){return n.current.rotation.x+=.01})),(0,r.jsxs)("mesh",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}({},e,{ref:n,scale:c?1.5:1,onClick:function(e){return d(!c)},onPointerOver:function(e){return o(!0)},onPointerOut:function(e){return o(!1)},children:[(0,r.jsx)("boxGeometry",{args:[1,1,1]}),(0,r.jsx)("meshStandardMaterial",{color:i?"hotpink":"orange"})]}))};n.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsxs)("div",{style:{padding:"16px"},children:[(0,r.jsx)(o.X6,{}),(0,r.jsx)(o.NZ,{}),(0,r.jsx)(a.um,{}),(0,r.jsxs)(c.Xz,{children:[(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{position:[10,10,10]}),(0,r.jsx)(d,{position:[-1.2,0,0]}),(0,r.jsx)(d,{position:[1.2,0,0]})]})]})]})}},8664:function(e,n,t){"use strict";t.d(n,{um:function(){return c}});var r=t(5667);t(8757);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(s)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a={PhotoShop:{score:8},Illustrator:{score:6},TypeScript:{score:8},JavaScript:{score:6},React:{score:7},CSS:{score:6},HTML:{score:4}},s=function(e){return(0,r.jsx)("ul",{className:e.containerStyle?e.containerStyle:"",children:Object.entries(e.skillsData).map((function(n){var t=o(n,2),i=t[0],a=t[1];return(0,r.jsx)(e.LI,{skill:{name:i,score:a.score}},i)}))})},l=function(e){return(0,r.jsxs)("li",{style:{display:"grid",gridTemplateColumns:"1fr 40px",width:"200px",fontWeight:700,listStyle:"none",lineHeight:"1.4"},children:[(0,r.jsx)("span",{style:{marginRight:"20px"},children:e.skill.name}),(0,r.jsx)("span",{children:e.skill.score})]})},c=function(){return(0,r.jsx)(s,{skillsData:a,LI:l})}},7879:function(e,n,t){"use strict";t.d(n,{X6:function(){return i},NZ:function(){return o}});var r=t(5667),i=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"James Hamilton"}),(0,r.jsx)("h2",{children:"Front End Engineer"})]})},o=function(){return(0,r.jsxs)("section",{children:[(0,r.jsx)("p",{children:"In 2013 I moved to Tokyo where I currently work at Axelspace, a company that designs, builds and launches satellites. We also write the software to pilot, manage, downlink and process the data from the satellites."}),(0,r.jsx)("p",{children:" I work as lead front end engineer on the AxelGlobe web project, built with Typescript, React, GraphQL and Mapbox. This involves designing flows, prototyping and eventually releasing internal and customer facing tools. The application is for viewing, selecting, downloading, tasking and managing satellites and their data."}),(0,r.jsx)("p",{children:"I have also worked on some small parts of the image processing pipeline and manually processed 'first light' for GRUS 1A in PhotoShop."}),(0,r.jsx)("p",{children:"Previous to Axelspace I worked DMM.com as front end engineer for around 4 years."}),(0,r.jsx)("p",{children:"Before moving to Japan I spent 10+ years as a freelancer in London, where I gathered broad experience, working with clients on tech and web projects, and graphics and print. My university background was originally in mens fashion design, so I naturally started providing design services to fashion related clients. I have also worked in a few creative agencies on large-client projects for Sony, Coke, Unilever, Fiat, and for individuals, artists, designers and small business owners. My design background means I think visually but I enjoy technical challenges and aim to pursue more technical work over pure design."}),(0,r.jsx)("p",{children:"I have used Photoshop and Illustrator for 25+ years, been playing with HTML since the late 90s.. These days my daily work life is split between planning how best to serve users, building prototypes and writing production code."}),(0,r.jsx)("p",{children:"One notable experience, in 2011/12 for 9 months I was the sole technical and design lead of an online service startup, and although the startup wasn't successful it was a painful but amazing experience."}),(0,r.jsx)("p",{children:"I have taken part in a couple of hackathons, one in London where our team won with 'last sandwich'.. a service to help food retailers connect with customers at the end of the day to reduce food waste. Another fashion technology related hackathon at Google in Tokyo with Hearst."}),(0,r.jsx)("p",{children:"Skills/Specialties: Ideas to implementation, problem solving, front end development, pixels."}),(0,r.jsx)("p",{children:"My wife is from Tokyo, where we live with our cat."})]})};t(8664)},2541:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5667),i=(t(8757),t(3868)),o=function(){return(0,r.jsxs)("div",{className:i.container,children:[(0,r.jsx)("div",{className:i.left}),(0,r.jsx)("div",{className:i.right})]})}},3868:function(e){e.exports={container:"Header_container__NcKDR",left:"Header_left___FU_5",right:"Header_right__BlE6T"}}},function(e){e.O(0,[915,290,774,888,179],(function(){return n=3108,e(e.s=n);var n}));var n=e.O();_N_E=n}]);