(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{169:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=n(5),a=n(21),i=function(e){var t=e.data;return Object(c.jsx)("article",{className:"degree-container",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{className:"degree",children:t.degree}),Object(c.jsxs)("p",{className:"school",children:[Object(c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)("div",{className:"link-to",id:"education"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(c.jsx)(i,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(c.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsx)("div",{className:"link-to",id:"experience"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(c.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var b=d;function y(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return j(this,n)}}var g=n(54),v=n(53),O=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,o=t.competency,a=t.title,i={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},i),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return Object(c.jsxs)("div",{className:"skillbar clearfix",children:[Object(c.jsx)("div",{className:"skillbar-title",style:i,children:Object(c.jsx)("span",{children:a})}),Object(c.jsx)("div",{className:"skillbar-bar",style:s}),Object(c.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};x.defaultProps={categories:[]};var S=x,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o=h(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,c){return Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},c,e===c&&!t.buttons[c]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(c.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(c.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("div",{className:"link-to",id:"skills"}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h3",{children:"Skills"}),Object(c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&y(t.prototype,n),r&&y(t,r),a}(r.Component);k.defaultProps={skills:[],categories:[]};var w=k,D=function(e){var t=e.data,n=e.last;return Object(c.jsxs)("li",{className:"course-container",children:[Object(c.jsxs)("a",{href:t.link,children:[Object(c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(c.jsx)("div",{className:"course-dot",children:Object(c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var N=D,P=function(e){var t,n=e.data;return Object(c.jsxs)("div",{className:"courses",children:[Object(c.jsx)("div",{className:"link-to",id:"courses"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Selected Courses"})}),Object(c.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(c.jsx)(N,{data:e,last:n===t.length-1},e.title)})))})]})};P.defaultProps={data:[]};var C=P,E=function(){return Object(c.jsxs)("div",{className:"references",children:[Object(c.jsx)("div",{className:"link-to",id:"references"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)(o.b,{to:"/contact",children:Object(c.jsx)("h3",{children:"References are available upon request"})})})]})},T=[{title:"Software Requirement Engineering",number:"SENG 471",university:"UofC"},{title:"Principles of Software Design",number:"ENSF 480",university:"UofC"},{title:"Data Base Management Systems",number:"CPSC 471",university:"UofC"},{title:"Principles of Operating Systems",number:"CPSC 457",university:"UofC"},{title:"Embedded System Interfacing",number:"ENCM 511",university:"UofC"},{title:"Principles of Software Development",number:"ENSF 409",university:"UofC"},{title:"Data Structures and Algorithms",number:"CPSC 319",university:"UofC"},{title:"Engineering Technology and Society",number:"ENGG 481",university:"UofC"},{title:"Engineering Professionalism and Ethics",number:"ENGG 513",university:"UofC"},{title:"Programming Fundamentals",number:"ENSF 337",university:"UofC"}],A=[{school:"University of Calgary",degree:"B.S. Software Engineering",link:"https://www.ucalgary.ca/",year:"2019 - Now"}],L=[{company:"AI Shading",position:"Tech Lead",daterange:"June 2021 - December 2021",points:["Led the team and collaborated with 3 interns to achieve full functionality for the IoT product (pilot project) located at the GBT building in SAIT.","Accelerated the development time by a total of 2 months for the project at SAIT and Phase 2 project with the Tuya platform.","Helped the company to supervise 4 students from Electrical Engineering at the University of Alberta with their capstone project at AI Shading.","Helped the company do research, and design software products, helped the company saved 15,000 dollar budget.","Provided technical input and analysis to software development planning, and provided insights, and looked for opportunities for product improvements.","Helped the company test, debug the IoT products.","Helped to increase the accuracy of the AI curtain products by around 30%.","Aided the rest of the team with project updates on a consistent basis to stakeholders about strategy, adjustments, and progress.","Helped the company to network with potential clients and do customer discovery to understand clients\u2019 needs."]}],R=n(17);var W=n(24);var U,I=[{title:"JavaScript",competency:4,category:["Web Development","Languages"]},{title:"Node.JS",competency:4,category:["Web Development"]},{title:"React",competency:3,category:["Web Development"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:3,category:["Web Development","Tools"]},{title:"Algorithms",competency:4,category:["Knowledge"]},{title:"Software Development",competency:4,category:["Knowledge"]},{title:"Object-Oriented Programming",competency:4,category:["Knowledge"]},{title:"Scrum",competency:4,category:["Knowledge"]},{title:"Agile Methodology",competency:4,category:["Knowledge"]},{title:"Deep Learning",competency:4,category:["Knowledge"]},{title:"Machine Learning",competency:4,category:["Knowledge"]},{title:"UI/UX",competency:3,category:["Knowledge"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:2,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git",competency:4,category:["Tools"]},{title:"Kubernetes",competency:3,category:["Tools"]},{title:"Docker",competency:3,category:["Tools"]},{title:"Google Cloud",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:4,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:4,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"Django",competency:3,category:["Web Development","Python"]},{title:"C++",competency:4,category:["Languages"]},{title:"Data Visualization",competency:4,category:["Data Science","Python"]},{title:"Pandas",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"OpenCV",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Java",competency:5,category:["Languages"]},{title:"C#",competency:4,category:["Languages"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),K=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],M=(U=new Set(I.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(R.a)(e)}(U)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(U)||Object(W.a)(U)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:K[t]}})),G=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(c.jsx)(a.a,{title:"Resume",description:"Zhifan (Tom) Li's Resume.",children:Object(c.jsxs)("article",{className:"post",id:"resume",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",children:Object(c.jsx)(o.b,{to:"resume",children:"Resume"})}),Object(c.jsx)("div",{className:"link-container",children:G.map((function(e){return Object(c.jsx)("h4",{children:Object(c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(c.jsx)(l,{data:A}),Object(c.jsx)(b,{data:L}),Object(c.jsx)(w,{skills:I,categories:M}),Object(c.jsx)(C,{data:T}),Object(c.jsx)(E,{})]})})}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(54);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},54:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=6.43209688.chunk.js.map