(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{171:function(t,e,n){"use strict";n.r(e);var r=n(0),i=(n(1),n(5)),s=n(21),a=n(69),o=n.n(a),u=function(t){var e=t.data;return Object(r.jsx)("div",{className:"cell-container",children:Object(r.jsxs)("article",{className:"mini-post",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h3",{children:Object(r.jsx)("a",{href:e.link,children:e.title})}),Object(r.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(r.jsx)("a",{href:e.link,className:"image",children:Object(r.jsx)("img",{src:"".concat("/personal-site").concat(e.image),alt:e.title})}),Object(r.jsx)("div",{className:"description",children:Object(r.jsx)("p",{children:e.desc})})]})})},c=[{title:"Code Buddies",link:"https://github.com/zhifanl/CodeBuddies",image:"/images/projects/codebuddies.jpg",date:"2021-11-20",desc:"Allow users to send request to learn courses via CodeBuddies website. User will receive email notification for the booked appointment with our teachers. Users can view the orders, and list of courses and tutors. Admin can manager the user status, course status, tutor status, order status (approval, rejection), see the request list."},{title:"Online Chat Room",link:"https://tom-online-chat-room.herokuapp.com/",image:"/images/projects/online-chat-room.jpg",date:"2021-08-10",desc:"Real time chat room. Support full duplex communication. Support chatting in different rooms. Support bad word detection. Support user to share their locations with each other. "},{title:"Rental Property Management System",link:"https://github.com/zhifanl/ENSF480-RentalPropertySystem",image:"/images/projects/rentalpropertyms.jpg",date:"2021-12-11",desc:"Rental Property Management System for house renting, Users can login as Renters, Landlords, and Admin"}];e.default=function(){return Object(r.jsx)(s.a,{title:"Projects",description:"Learn about Zhifan (Tom) Li's projects.",children:Object(r.jsxs)("article",{className:"post",id:"projects",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(i.b,{to:"/projects",children:"Projects"})}),Object(r.jsx)("p",{children:"A selection of the projects I have made"})]})}),c.map((function(t){return Object(r.jsx)(u,{data:t},t.title)}))]})})}},69:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",o="quarter",u="year",c="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,o=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:u,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",p={};p[$]=l;var g=function(t){return t instanceof y},j=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var i=t.name;p[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},v=m;v.l=j,v.i=g,v.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function l(t){this.$L=j(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return M(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<M(t)},f.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,d=!!v.u(o)||o,l=v.p(t),f=function(t,e){var n=v.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?n:n.endOf(i)},m=function(t,e){return v.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},$=this.$W,p=this.$M,g=this.$D,j="set"+(this.$u?"UTC":"");switch(l){case u:return d?f(1,0):f(31,11);case a:return d?f(1,p):f(0,p+1);case s:var M=this.$locale().weekStart||0,y=($<M?$+7:$)-M;return f(d?g-y:g+(6-y),p);case i:case c:return m(j+"Hours",0);case r:return m(j+"Minutes",1);case n:return m(j+"Seconds",2);case e:return m(j+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,d=v.p(s),l="set"+(this.$u?"UTC":""),f=(h={},h[i]=l+"Date",h[c]=l+"Date",h[a]=l+"Month",h[u]=l+"FullYear",h[r]=l+"Hours",h[n]=l+"Minutes",h[e]=l+"Seconds",h[t]=l+"Milliseconds",h)[d],m=d===i?this.$D+(o-this.$W):o;if(d===a||d===u){var $=this.clone().set(c,1);$.$d[f](m),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,o){var c,h=this;t=Number(t);var d=v.p(o),l=function(e){var n=M(h);return v.w(n.date(n.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===i)return l(1);if(d===s)return l(7);var f=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,m=this.$d.getTime()+t*f;return v.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),i=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=i.weekdays,c=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},l=function(t){return v.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:v.s(o+1,2,"0"),MMM:h(i.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,u,2),ddd:h(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:v.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||m[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,h){var d,l=v.p(c),f=M(t),m=6e4*(f.utcOffset()-this.utcOffset()),$=this-f,p=v.m(this,f);return p=(d={},d[u]=p/12,d[a]=p,d[o]=p/3,d[s]=($-m)/6048e5,d[i]=($-m)/864e5,d[r]=$/36e5,d[n]=$/6e4,d[e]=$/1e3,d)[l]||$,h?p:v.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=j(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),O=y.prototype;return M.prototype=O,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",u],["$D",c]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,y,M),t.$i=!0),M},M.locale=j,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=p[$],M.Ls=p,M.p={},M}()}}]);
//# sourceMappingURL=7.eb52a142.chunk.js.map