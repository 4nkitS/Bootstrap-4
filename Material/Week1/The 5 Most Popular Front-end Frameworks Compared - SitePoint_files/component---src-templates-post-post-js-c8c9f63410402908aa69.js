(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+c4W":function(e,t,n){var r=n("711d"),o=n("4/ic"),a=n("9ggG"),i=n("9Nap");e.exports=function(e){return a(e)?r(i(e)):o(e)}},"2ajD":function(e,t){e.exports=function(e){return e!=e}},"4/WZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("5l6m");var r=function(e){return String(e).replace(/&amp;/g,"&").replace(/&#038;/g,"&").replace(/&#039;/g,"'").replace(/&#8217;/g,"'").replace(/&#8211;/g,"-").replace(/&#8212;/g,"—").replace(/&#8220;/g,"“").replace(/&#8221;/g,"”").replace(/&#8230;/g,"…").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&mdash;/g,"-").replace(/<p>/g,"").replace(/<\/p>/g,"")}},"4/ic":function(e,t,n){var r=n("ZWtO");e.exports=function(e){return function(t){return r(t,e)}}},"44Ds":function(e,t,n){var r=n("e4Nc");function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},"4sDh":function(e,t,n){var r=n("4uTw"),o=n("03A+"),a=n("Z0cm"),i=n("wJg7"),l=n("shjB"),c=n("9Nap");e.exports=function(e,t,n){for(var s=-1,u=(t=r(t,e)).length,d=!1;++s<u;){var p=c(t[s]);if(!(d=null!=e&&n(e,p)))break;e=e[p]}return d||++s!=u?d:!!(u=null==e?0:e.length)&&l(u)&&i(p,u)&&(a(e)||o(e))}},"4uTw":function(e,t,n){var r=n("Z0cm"),o=n("9ggG"),a=n("GNiM"),i=n("dt0z");e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))}},"6pba":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return Ke}));n("UtXx"),n("T7Pk"),n("KNqU"),n("OWso"),n("d3jB"),n("5l6m"),n("IGiI"),n("K6vE"),n("VSsl");var r=n("q1tI"),o=n.n(r),a=n("sEfC"),i=n.n(a);var l=function(e,t){if(!e)throw new Error("Invariant failed")};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=new Map,p=new Map,f=new Map,h=0;function m(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,o=r.root,a=r.rootMargin,i=r.threshold;if(d.has(e)&&l(!1),e){var c=function(e){return e?f.has(e)?f.get(e):(h+=1,f.set(e,h.toString()),f.get(e)+"_"):""}(o)+(a?i.toString()+"_"+a:i.toString()),s=p.get(c);s||(s=new IntersectionObserver(g,n),c&&p.set(c,s));var u={callback:t,element:e,inView:!1,observerId:c,observer:s,thresholds:s.thresholds||(Array.isArray(i)?i:[i])};return d.set(e,u),s.observe(e),u}}function v(e){if(e){var t=d.get(e);if(t){var n=t.observerId,r=t.observer,o=r.root;r.unobserve(e);var a=!1,i=!1;n&&d.forEach((function(t,r){r!==e&&(t.observerId===n&&(a=!0,i=!0),t.observer.root===o&&(i=!0))})),!i&&o&&f.delete(o),r&&!a&&r.disconnect(),d.delete(e)}}}function g(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=d.get(r);if(o&&n>=0){var a=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(a=a&&t),o.inView=a,o.callback(a,e)}}))}var b=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return c(u(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),c(u(t),"node",null),c(u(t),"handleNode",(function(e){t.node&&(v(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),c(u(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=o.prototype;return a.componentDidMount=function(){this.node||l(!1)},a.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(v(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(v(this.node),this.node=null)},a.componentWillUnmount=function(){this.node&&(v(this.node),this.node=null)},a.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;m(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},a.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var o=this.props,a=o.children,i=o.as,l=o.tag,c=(o.triggerOnce,o.threshold,o.root,o.rootMargin,o.onChange,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(i||l||"div",s({ref:this.handleNode},c),a)},o}(r.Component);c(b,"displayName","InView"),c(b,"defaultProps",{threshold:0,triggerOnce:!1});var y=n("i8R+"),w=n("FMNI"),E=n("4/WZ"),O=n("f0Ye"),j=function(e){if("undefined"==typeof window)return"";window.dataLayer=window.dataLayer||[],window.dataLayer.push(e)},x=n("Bl7J"),k=n("vrFN"),A=n("QNf7"),S=n("C+fU"),_=Object(A.styled)("div")({name:"StyledPost",class:"shgz0o2"});n("l7Gh");n("ER96"),n("tKM+"),n("UsjJ");var I=n("sWYD"),C=n("Aw06"),L=(n("YmQD"),n("IP2g")),D=n("4Bjl"),T=n("8tEE");var N={email:function(e){var t=e.shareUrl,n=e.shareTitle;return"mailto:"+U({subject:void 0===n?"":n,body:""+t})},facebook:function(e){return"https://www.facebook.com/sharer/sharer.php"+U({u:e.shareUrl})},twitter:function(e){var t=e.shareUrl,n=e.shareTitle;return"https://twitter.com/share"+U({url:t,text:(void 0===n?"":n)+"\n"})},reddit:function(e){var t=e.shareUrl,n=e.shareTitle;return"https://www.reddit.com/submit"+U({url:t,title:void 0===n?"":n})}};function U(e){var t=Object.keys(e).filter((function(t){return!!e[t]}));return t.length?"?"+t.map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&"):""}var z=function(e){var t=e.network,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["network"]),r=n.shareUrl,o=t.toLowerCase();if(!r)throw new Error("the ShareButton's 'url' can't be undefined");return N[o](n)},M=function(e,t,n){void 0===t&&(t=650),void 0===n&&(n=450);var r={height:n,width:t,left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-n/2,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"};return window.open(e,"Sitepoint share",Object.keys(r).map((function(e){return e+"="+r[e]})).join(","))},P=Object(A.styled)("button")({name:"StyledButton",class:"sgoxgza"});n("xzU+");var J=function(e){var t=e.title,n=e.uri,r=e.network;return o.a.createElement(P,{"aria-label":"Share Sitepoint on "+r,"data-network":r,key:r,onClick:function(e){e.preventDefault();var r,o=t+" — SitePoint",a=window.location.origin+"/"+n,i=e.currentTarget.dataset.network;if(r=i.toLowerCase(),!N.hasOwnProperty(r))throw new Error("The '"+i+"' is not a valid value for share button");var l=z({network:i,shareTitle:o,shareUrl:a});l.match(/^mailto:/gi)?window.open(l,"_self"):M(l),e.currentTarget.blur()},className:"social-share-button"},function(e){var t="";switch(e){case"email":t=D.c;break;case"facebook":t=T.c;break;case"twitter":t=T.l;break;case"reddit":t=T.i;break;default:t=D.g}return o.a.createElement(L.a,{icon:t,size:"lg",className:"share-icon"})}(r))},R=n("th3D"),B=Object(A.styled)("section")({name:"StyledHeader",class:"s1xu2uce",vars:{"s1xu2uce-0":[function(e){return"url("+e.headerBG+")"}],"s1xu2uce-2":[function(e){var t=e.color;return S.b.colors.category[t]||"#346"}]}}),Y=Object(A.styled)("div")({name:"Wrapper",class:"wzjw2su"}),Z=Object(A.styled)("header")({name:"Info",class:"i1ju85s6"}),G=Object(A.styled)("div")({name:"Metabox",class:"mj4qk0u"}),W=Object(A.styled)("h1")({name:"Title",class:"t1nx95qj"}),q=Object(A.styled)("p")({name:"Meta",class:"m1pdrmq3"});n("piGO");var F=function(e){var t=e.title,n=e.authors,r=e.date,a=e.category,i=e.uri,l=e.order,c=void 0===l?1:l,s=e.headerAd,u=e.takeOverAd,d=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["title","authors","date","category","uri","order","headerAd","takeOverAd"]);return o.a.createElement(B,Object.assign({},d,{headerBG:"https://uploads.sitepoint.com/wp-content/uploads/2020/04/1586298076bg_header.svg#"+a.slug.toLowerCase(),color:a.slug.toLowerCase()}),o.a.createElement(Y,null,o.a.createElement(Z,null,o.a.createElement(W,null,t),o.a.createElement(G,null,o.a.createElement("div",null,o.a.createElement(q,null,"By ",n.length>0?n.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:t},o.a.createElement(C.a,{to:"/author/"+e.slug},e.name),t!==n.length-1?", ":"")})):"SitePoint Team"),o.a.createElement(q,null,o.a.createElement(C.a,{to:"/"+a.slug.toLowerCase(),dangerouslySetInnerHTML:{__html:a.name}})),o.a.createElement(q,{as:"time",dateTime:Object(I.a)(new Date(r),"yyyy-MM-dd")},Object(I.a)(new Date(r),"LLLL d, yyyy"))),o.a.createElement("div",null,o.a.createElement(q,null,"Share:"),["facebook","reddit","twitter","email"].map((function(e,n){return o.a.createElement(J,{key:n,title:t,uri:i,network:e})}))))),o.a.createElement(R.a,{id:"article_header",type:"book",headerAd:s,properUnit:"sitepoint_blog_header",googleData:{slot:"2222275135",style:{display:"inline-block",width:"300px",height:"250px"}},customData:{image:null==u?void 0:u.imageUrl,link:null==u?void 0:u.ctaUrl},bsaData:{id:c>1?"bsa-zone_1594140427842-3_123456_"+c:"bsa-zone_1594140427842-3_123456"}})))},H=n("i8i4"),V=n("+iC2"),Q=n("DzJC"),K=n.n(Q),X=Object(A.styled)("div")({name:"Content",class:"c1j9oh5q"}),$=Object(A.styled)("div")({name:"StyledRollerDoor",class:"s9dbkf1"});n("c0XB");var ee=function(e){var t=e.children,n=Object(r.useRef)(),a=Object(r.useRef)();return Object(r.useLayoutEffect)((function(){if("undefined"!==window&&n&&a){var e=K()((function(){var e=.75*window.innerHeight,t=window.scrollY+e,r=n.current,o=a.current;if(r.offsetTop>=t)r.style.height=0;else{var i=t-r.offsetTop;i>=o.offsetHeight?r.style.height=o.offsetHeight+"px":r.style.height=i+"px"}}),150),t=K()(r,250);return r(),window.addEventListener("resize",t),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",t)}}function r(){window.innerWidth<S.b.breakpoints[1]?(window.removeEventListener("scroll",e),n.current.style.height="auto"):window.addEventListener("scroll",e)}}),[n,a]),o.a.createElement($,{ref:n},o.a.createElement(X,{ref:a},t))},te=Object(A.styled)("section")({name:"StyledBody",class:"sqalzbe"});function ne(){var e=new Event("DOMContentLoaded",{bubbles:!0,cancelable:!0});document.dispatchEvent(e)}n("FZ2A");var re=["application/javascript","application/ecmascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript"],oe=function(e){if("undefined"!=typeof document){var t,n=e.querySelectorAll("script"),r=[];n.forEach((function(e){var n,o,a;t=e.getAttribute("type"),(null===(n=e.parentElement)||void 0===n||null===(o=n.parentElement)||void 0===o||null===(a=o.classList)||void 0===a?void 0:a.contains("proper-ad-unit"))||t&&-1===re.indexOf(t)||r.push((function(t){!function(e,t){var n=document.createElement("script");e.getAttributeNames().forEach((function(t){n.setAttribute(t,e[t])})),e.src?(n.onload=t,n.onerror=t):n.textContent=e.innerText,e.parentNode.appendChild(n),e.parentNode.removeChild(e),e.src||t()}(e,t)}))})),r.length>0&&function e(t,n,r){void 0===r&&(r=0),t[r]((function(){++r===t.length?n():e(t,n,r)}))}(r,ne)}};var ae=function(e){var t=e.content,n=(e.order,e.rollerDoorAd),a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["content","order","rollerDoorAd"]),i=Object(r.useRef)(),l=Object(r.useState)(!1)[1];Object(r.useLayoutEffect)((function(){var e=i.current;function t(e){return console.error(e),!0}return oe(e),window.addEventListener("error",t),function(){window.removeEventListener("error",t)}}),[]),Object(r.useEffect)((function(){l(!0)}),[l]);var c=!Object(V.a)()&&i.current&&null!==i.current.querySelector(".roller-door-placeholder");return o.a.createElement(o.a.Fragment,null,o.a.createElement(te,Object.assign({},a,{ref:i,dangerouslySetInnerHTML:{__html:t}})),c&&Object(H.createPortal)(o.a.createElement(ee,null,o.a.createElement(R.a,{id:"article_rollerdoor",type:"book_form",rollerDoorAd:n})),i.current.querySelector(".roller-door-placeholder")))},ie=(n("Pw7m"),n("Wbzz")),le=n("X8Ct"),ce=n("qPyV"),se=n.n(ce),ue=n("NmYn"),de=n.n(ue),pe=Object(A.styled)("div")({name:"StyledJobList",class:"spg26fi"}),fe=Object(A.styled)("h3")({name:"StyledJobListTitle",class:"s1wmj4av"}),he=Object(A.styled)("div")({name:"JobContainer",class:"j100ille",vars:{"j100ille-0":[function(e){return e.isFeatured?"2px solid rgb(235, 236, 180)":"none"}],"j100ille-1":[function(e){return e.isFeatured?"7px":"0"}]}}),me=Object(A.styled)("div")({name:"Details",class:"d3rdqui"}),ve=Object(A.styled)("div")({name:"Logo",class:"lgpxlpe"}),ge=Object(A.styled)("ul")({name:"TagList",class:"t1ajvr33"}),be=Object(A.styled)("li")({name:"Tag",class:"thrnbho"}),ye=Object(A.styled)("div")({name:"RemoteJobLink",class:"rffaumc"}),we=pe;function Ee(e,t){var n=/[*+~.(),'"!:@]/g;return de()(e,{remove:n,lower:!0})+"/"+de()(t,{remove:n,lower:!0})}function Oe(e){var t=e.id,n=e.compLogo,r=e.company,a=e.jobTitle,i=e.jobTags,l=e.index,c=e.isFeatured;return o.a.createElement(he,{id:"job_ad_"+(l+1)+"-link","data-type":"remote",isFeatured:c},o.a.createElement(ve,null,o.a.createElement("img",{src:n,alt:r})),o.a.createElement(me,null,o.a.createElement("a",{href:"https://sitepoint.com/jobs/"+Ee(r,a),"data-unit":"article_sidebar_remote","data-network":c?"featured - "+r+":"+a+":"+t:r+":"+a+":"+t},o.a.createElement("h4",null,a)),o.a.createElement("p",null,r),o.a.createElement(ge,null,i.slice(0,2).map((function(e,t){return o.a.createElement(be,{key:t},e)})))))}function je(e){var t=e.featuredJobs;return o.a.createElement(o.a.Fragment,null,t.length>0?t.map((function(e,t){return o.a.createElement(Oe,Object.assign({},e.node,{index:t,isFeatured:!0,key:e.node.id}))})):null)}function xe(e){var t=e.jobsAd,n=e.featuredJobs,r=se()(t,(function(e){return e.node.company}));return o.a.createElement(we,{id:"job_ad_list"},o.a.createElement(fe,null,"Latest Remote Jobs"),o.a.createElement(je,{featuredJobs:n}),n.length<5&&r.slice(0,5-n.length).map((function(e,t){var n=e.node;return o.a.createElement(Oe,Object.assign({},n,{index:t}))})),o.a.createElement(ye,null,o.a.createElement("a",{href:"https://sitepoint.com/jobs/","data-unit":"article_sidebar_remote","data-network":"More Remote Jobs"},"More Remote Jobs")))}n("EUlv");var ke=Object(A.styled)("div")({name:"StyledSidebar",class:"s27361g"}),Ae=Object(A.styled)("div")({name:"Authors",class:"am9wix7"}),Se=Object(A.styled)("div")({name:"Author",class:"admakik"}),_e=Object(A.styled)("div")({name:"AuthorMeta",class:"a16x32zb"}),Ie=Object(A.styled)("img")({name:"AuthorAvatar",class:"a1eqqr2y"}),Ce=Object(A.styled)("h3")({name:"AuthorName",class:"a1n4qnu2"}),Le=Object(A.styled)("a")({name:"AuthorContact",class:"a1ytldcw"}),De=Object(A.styled)("p")({name:"AuthorDescription",class:"aq0gnlt"}),Te=ke;n("IEzE");var Ne=function(e){var t=e.authors,n=e.newBooks,r=e.order,a=void 0===r?1:r,i=e.jobsAd,l=e.featuredJobs;return o.a.createElement(Te,{"aria-label":"Article sidebar"},o.a.createElement(Ae,null,t.length>0?t.map((function(e,t){return o.a.createElement(Se,{key:e.id},o.a.createElement(_e,{className:e.id},o.a.createElement(Ie,{src:e.photo,alt:e.name,loading:"lazy"}),o.a.createElement("div",null,o.a.createElement(Ce,null,o.a.createElement(ie.Link,{to:"/author/"+e.slug+"/"},e.name)),Object.entries(e.contactInfo).map((function(t,n){return!!t[1].length&&o.a.createElement(Le,{key:n,href:t[1],rel:"noreferrer noopener",target:"_blank","aria-label":e.name+"'s "+t[0]+" account"},Object(le.a)(t[0]))})))),e.description&&o.a.createElement(De,{dangerouslySetInnerHTML:{__html:e.description}}))})):o.a.createElement(Se,null,o.a.createElement(_e,null,o.a.createElement(Ie,{src:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/10/1507698696SitePoint@2x-96x96.png",alt:"Team SitePoint",loading:"lazy"}),o.a.createElement("div",null,o.a.createElement(Ce,null,"SitePoint Team"))))),o.a.createElement(R.a,{id:"article_sidebar",type:"books_new",newBooks:n,properUnit:"sitepoint_blog_sponsor_1",googleData:{slot:"8596111792",style:{display:"inline-block",width:"300px",height:"600px"}},bsaData:{id:a>1?"bsa-zone_1594140434323-3_123456_"+a:"bsa-zone_1594140434323-3_123456"}}),o.a.createElement(xe,{jobsAd:i,featuredJobs:l}),o.a.createElement(R.a,{id:"side_1",properUnit:"sitepoint_side_1",googleData:{slot:"5910238707",style:{display:"inline-block",width:"300px",height:"250px"}}}),o.a.createElement(R.a,{id:"side_2",properUnit:"sitepoint_side_2",googleData:{slot:"1735383491",style:{display:"inline-block",width:"300px",height:"250px"}}}),o.a.createElement(R.a,{id:"side_3",type:"sticky",properUnit:"sitepoint_side_3",googleData:{slot:"2235799142",style:{display:"inline-block",width:"300px",height:"250px"}},bsaData:{id:a>1?"bsa-zone_1594140495501-1_123456_"+a:"bsa-zone_1594140495501-1_123456"}}))},Ue=Object(r.forwardRef)((function(e,t){var n=e.post,r=e.order,a=e.headerAd,i=e.rollerDoorAd,l=e.newBooks,c=e.takeOverAd,s=e.jobsAd,u=e.featuredJobs,d=n.id,p=n.title,f=n.authors,h=n.date,m=n.categories,v=n.content,g=n.uri,b=Object(E.a)(p),y=f.filter((function(e){return e})),w=m.nodes&&m.nodes.length>0?n.categories.nodes[0]:{name:"Blogs",slug:"blogs"};return o.a.createElement("article",{ref:t,"aria-label":"Article title: "+b,className:d},o.a.createElement(F,{"aria-label":"Article header for "+b,title:b,authors:y,date:h,category:w,uri:""+g,order:r,headerAd:a,takeOverAd:c}),o.a.createElement(_,null,o.a.createElement(ae,{"aria-label":"Article content for "+b,order:r,content:v,rollerDoorAd:i}),o.a.createElement(Ne,{"aria-label":"Article sidebar for "+b,order:r,authors:y,newBooks:l,jobsAd:s,featuredJobs:u})))}));Ue.defaultProps={order:1};var ze=Object(r.memo)(Ue),Me=Object(A.styled)("span")({name:"Text",class:"t19sashs"}),Pe=Object(A.styled)("div")({name:"StyledLoader",class:"s1nwqc8k"});n("GFMg");var Je=function(e){var t=e.text;return o.a.createElement(Pe,null,o.a.createElement(L.a,{icon:D.h,size:"2x",pulse:!0}),t&&o.a.createElement(Me,null,t))},Re=(n("DN5E"),n("nTL2"),n("17x9")),Be=n.n(Re),Ye=n("j8Va"),Ze=n("8iFL"),Ge=n("NsN6"),We=function(e){var t=Object(r.useState)(!1),n=t[0],o=t[1],a=Object(Ge.a)();return Object(r.useEffect)((function(){if(e&&!a&&!document.getElementById("googleSP")){var t=document.createElement("script");t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.id="googleSP",t.defer=!0,document.body.appendChild(t),t.onload=function(){o(!0)}}})),n},qe=function(e){var t=Object(r.useState)(!1),n=t[0],o=t[1],a=Object(Ge.a)();return Object(r.useEffect)((function(){if(e&&!a&&!document.getElementById("bsaSP")){var t=document.createElement("script");t.src="https://cdn-s2s.buysellads.net/pub/sitepoint.js?"+(new Date-new Date%6e5),t.id="bsaSP",t.type="text/javascript",t.async=!0,document.head.appendChild(t),t.onload=function(){o(!0)}}})),n},Fe=function(e){var t=e.postTags,n=e.postCategory,o=e.postTitle,a=0===["sponsored","adfree"].filter((function(e){return t.includes(e)})).length&&!Object(V.a)(),i=Object(Ye.c)(),l=i.customReady,c=i.properReady,s=i.googleReady,u=i.bsaReady,d=i.adProvider,p=Object(Ye.b)(),f="custom"===d&&a;Object(r.useEffect)((function(){p({type:"SET_CUSTOM_READY",payload:f})}),[l,f,p]);var h=Object(Ze.a)("proper"===d&&a,n,o);Object(r.useEffect)((function(){c||p({type:"SET_PROPER_READY",payload:h})}),[c,h,p]);var m=We("google"===d&&a);Object(r.useEffect)((function(){s||p({type:"SET_GOOGLE_READY",payload:m})}),[s,m,p]);var v=qe("bsa"===d&&a);return Object(r.useEffect)((function(){u||p({type:"SET_BSA_READY",payload:v})}),[u,v,p]),null};Fe.propTypes={postTags:Be.a.arrayOf(Be.a.string).isRequired,postCategory:Be.a.string};var He=Fe;function Ve(e){return function(e){if(Array.isArray(e))return Qe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Qe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ke="2365017131";t.default=function(e){var t,n,a,l,c,s=e.data,u=e.pageContext,d=u.post,p=u.related,f=void 0===p?[]:p,h=u.popularBooks,m=void 0===h?[]:h,v=Object(r.useRef)(),g=f.length+1,A=Object(r.useState)(d),S=A[0],_=A[1],I=Object(r.useState)(f.length>0),C=I[0],L=I[1],D=Object(r.useState)([d]),T=D[0],N=D[1],U=Object(r.useCallback)((function(){var e=T.length,t=e<g?f.slice(e-1,e):[];N([].concat(Ve(T),Ve(t)))}),[T,f,g]),z=Object(r.useCallback)((function(){if(C){var e=y.window.innerHeight,t=y.window.scrollY+e;(null==v?void 0:v.current)&&t>=v.current.offsetHeight&&U()}}),[C,U]);Object(r.useEffect)((function(){L(T.length<g)}),[T,g]),Object(r.useEffect)((function(){if(void 0!==y.window&&"undefined"!=typeof document){var e=i()(z,250);return y.window.addEventListener("scroll",e),function(){y.window.removeEventListener("scroll",e)}}}),[z]);var M=Array.prototype.map.call(S.tags.edges,(function(e){return e.node.name})),P=S.seo.metaDesc?S.seo.metaDesc:Object(E.a)(Object(O.b)(S.excerpt,21)),J=S.seo.title?S.seo.title:S.title,R=(null==S||null===(t=S.categories)||void 0===t?void 0:t.nodes)&&(null==S||null===(n=S.categories)||void 0===n?void 0:n.nodes.length)>0?S.categories.nodes[0]:{name:"Blogs",slug:"blogs"};return j({post_id:S.id,title:S.title,category:R.name,tags:M.toString(),authors:Object(w.a)(S.authors),permalink:S.slug,published:S.date}),o.a.createElement(x.a,{layout:"full-width",showAds:Object(y.exists)(y.window)},o.a.createElement(k.a,{title:Object(E.a)(J),description:P,image:null==S||null===(a=S.featuredImage)||void 0===a?void 0:a.mediaItemUrl,schema:{"@context":"http://schema.org","@type":"Article",headline:Object(E.a)(J),url:"https://www.sitepoint.com/"+S.slug+"/",articleSection:R.name,mainEntityOfPage:{"@type":"WebPage","@id":"https://www.sitepoint.com/"+S.slug+"/"},author:[{"@type":"Person",name:Object(w.a)(S.authors)}],publisher:{"@type":"Organization",name:"SitePoint",logo:{"@type":"ImageObject",url:"https://uploads.sitepoint.com/wp-content/uploads/2019/12/1576634464sitepoint-app-icon-512.png"}},dateCreated:S.date,datePublished:S.date,dateModified:S.modified,thumbnailUrl:null==S||null===(l=S.featuredImage)||void 0===l?void 0:l.mediaItemUrl,image:{"@type":"ImageObject",url:null==S||null===(c=S.featuredImage)||void 0===c?void 0:c.mediaItemUrl},keywords:M},breadcrumbSchema:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Blog",item:"https://www.sitepoint.com/blog"},{"@type":"ListItem",position:2,name:R.name,item:"https://www.sitepoint.com/"+R.slug},{"@type":"ListItem",position:3,name:S.title,item:"https://www.sitepoint.com/"+S.slug}]}}),o.a.createElement(He,{postTags:M,postCategory:R.name,postTitle:S.title}),o.a.createElement("div",{ref:v},T.map((function(e,t){return o.a.createElement(b,{key:t,rootMargin:"-25% 0px -75% 0px",threshold:[0,.25,.5,.75,1],triggerOnce:!1,onChange:function(t){t&&(y.window.location.pathname.replace(/\//g,"")!==e.uri.replace(/\//g,"")&&(y.window.history.replaceState(null,null,"/"+e.uri),_(e)))}},(function(n){var r,a,i,l,c,u,d,p=n.ref;return o.a.createElement(ze,{ref:p,order:t+1,post:e,popularBooks:m,newBooks:null==s||null===(r=s.sanityNewBooks)||void 0===r?void 0:r.newBooks,headerAd:(null==s||null===(a=s.sanityPostAd)||void 0===a?void 0:a.header_ad)?null==s||null===(i=s.sanityPostAd)||void 0===i?void 0:i.header_ad:null==s||null===(l=s.sanityDefaultAd)||void 0===l?void 0:l.header_ad,rollerDoorAd:(null==s||null===(c=s.sanityPostAd)||void 0===c?void 0:c.rollerdoor)?null==s||null===(u=s.sanityPostAd)||void 0===u?void 0:u.rollerdoor:null==s||null===(d=s.sanityDefaultAd)||void 0===d?void 0:d.rollerdoor,takeOverAd:null==s?void 0:s.sanityImageAd,jobsAd:null==s?void 0:s.allJobs.edges,featuredJobs:null==s?void 0:s.featuredJobs.edges})}))})),C&&o.a.createElement(Je,null)))}},"711d":function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},"8iFL":function(e,t,n){"use strict";var r=n("q1tI"),o=n("NsN6");t.a=function(e,t,n){void 0===t&&(t=""),void 0===n&&(n="");var a=Object(r.useState)(!1),i=a[0],l=a[1],c=Object(o.a)();return Object(r.useEffect)((function(){if(e&&!c){if(document.getElementById("properSP")){if(!window||!window.ProperMedia)return;window.special_ops&&(window.special_ops.tags=[t.toLowerCase()]),l(!0),window.properInfNewPage()}else{var n=document.createElement("script");n.textContent='\n        var special_ops = special_ops || {};\n        special_ops.tags =\n          [\n            "'+t.toLowerCase()+'"\n          ]\n      ',document.head.appendChild(n);var r=document.createElement("script");r.src="https://global.proper.io/sitepoint.min.js",r.id="properSP",r.defer=!0,document.body.appendChild(r),r.onload=function(){l(!0)}}return function(){var e,t,n;if(window&&window.ProperMedia&&window.propertag&&window.googletag&&window.googletag.destroySlots){var r=(null===(e=window)||void 0===e||null===(t=e.ProperMedia)||void 0===t||null===(n=t.ad_project)||void 0===n?void 0:n.getAdSlots())||[];document.querySelectorAll(".proper-ad-unit").forEach((function(e){if(e.children.length){var t=(e.children[0].hasAttribute("id")?e.children[0].getAttribute("id"):"").slice("proper-ad-".length);r.indexOf(t)<0&&r.push(t)}})),r.forEach((function(e){window.properDestroyDfpSlot&&window.properDestroyDfpSlot(e)}))}}}}),[e,c,t,n]),i}},"9Nap":function(e,t,n){var r=n("/9aa");e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},"9ggG":function(e,t,n){var r=n("Z0cm"),o=n("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},CZoQ:function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},DzJC:function(e,t,n){var r=n("sEfC"),o=n("GoyQ");e.exports=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),r(e,t,{leading:a,maxWait:t,trailing:i})}},GDhZ:function(e,t,n){var r=n("wF/u"),o=n("mwIZ"),a=n("hgQt"),i=n("9ggG"),l=n("CMye"),c=n("IOzZ"),s=n("9Nap");e.exports=function(e,t){return i(e)&&l(t)?c(s(e),t):function(n){var i=o(n,e);return void 0===i&&i===t?a(n,e):r(t,i,3)}}},GNiM:function(e,t,n){var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=i},I01J:function(e,t,n){var r=n("44Ds");e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},IOzZ:function(e,t){e.exports=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}},Juji:function(e,t){e.exports=function(e,t){return null!=e&&t in Object(e)}},KwMD:function(e,t){e.exports=function(e,t,n,r){for(var o=e.length,a=n+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}},LGYb:function(e,t,n){var r=n("1hJj"),o=n("jbM+"),a=n("Xt/L"),i=n("xYSL"),l=n("dQpi"),c=n("rEGp");e.exports=function(e,t,n){var s=-1,u=o,d=e.length,p=!0,f=[],h=f;if(n)p=!1,u=a;else if(d>=200){var m=t?null:l(e);if(m)return c(m);p=!1,u=i,h=new r}else h=t?[]:f;e:for(;++s<d;){var v=e[s],g=t?t(v):v;if(v=n||0!==v?v:0,p&&g==g){for(var b=h.length;b--;)if(h[b]===g)continue e;t&&h.push(g),f.push(v)}else u(h,g,n)||(h!==f&&h.push(g),f.push(v))}return f}},NmYn:function(e,t,n){var r;r=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},"vi":{"Đ":"D","đ":"d"}}');function n(n,r){if("string"!=typeof n)throw new Error("slugify: string argument expected");var o=t[(r="string"==typeof r?{replacement:r}:r||{}).locale]||{},a=void 0===r.replacement?"-":r.replacement,i=n.split("").reduce((function(t,n){return t+(o[n]||e[n]||n).replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+a+"]+","g"),a);return r.lower&&(i=i.toLowerCase()),r.strict&&(i=i.replace(new RegExp("[^a-zA-Z0-9"+a+"]","g"),"").replace(new RegExp("[\\s"+a+"]+","g"),a)),i}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=r(),e.exports.default=r()},NsN6:function(e,t,n){"use strict";var r=n("q1tI"),o="undefined"!=typeof window&&window.matchMedia("(max-width: 623px)");t.a=function(){var e=Object(r.useState)(!0),t=e[0],n=e[1],a=Object(r.useCallback)((function(e){n(e.matches)}),[n]);return Object(r.useEffect)((function(){return a({matches:o.matches}),o.addListener(a),function(){o.removeListener(a)}}),[a]),t}},OoBC:function(e,t,n){var r=n("IvzW"),o=n("1RYp"),a=n("a0vn"),i=n("6Zah").f,l=function(e){return function(t){for(var n,l=a(t),c=o(l),s=c.length,u=0,d=[];s>u;)n=c[u++],r&&!i.call(l,n)||d.push(e?[n,l[n]]:l[n]);return d}};e.exports={entries:l(!0),values:l(!1)}},Pw7m:function(e,t,n){var r=n("ZS3K"),o=n("OoBC").entries;r({target:"Object",stat:!0},{entries:function(e){return o(e)}})},QIyF:function(e,t,n){var r=n("Kz5y");e.exports=function(){return r.Date.now()}},"R/W3":function(e,t,n){var r=n("KwMD"),o=n("2ajD"),a=n("CZoQ");e.exports=function(e,t,n){return t==t?a(e,t,n):r(e,o,n)}},X8Ct:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("IP2g"),i=n("4Bjl"),l=n("8tEE"),c=function(e){var t="";switch(e){case"codepen":t=l.a;break;case"flickr":t=l.d;break;case"linkedin":t=l.g;break;case"medium":t=l.h;break;case"googleplus":t=l.f;break;case"dribbble":t=l.b;break;case"twitter":t=l.l;break;case"github":t=l.e;break;case"youtube":t=l.m;break;case"reddit":t=l.j;break;case"facebook":t=l.c;break;default:t=i.g}return o.a.createElement(a.a,{icon:t,size:"lg",className:"share-icon"})}},"Xt/L":function(e,t){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},ZCpW:function(e,t,n){var r=n("lm/5"),o=n("O7RO"),a=n("IOzZ");e.exports=function(e){var t=o(e);return 1==t.length&&t[0][2]?a(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},ZWtO:function(e,t,n){var r=n("4uTw"),o=n("9Nap");e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},dQpi:function(e,t,n){var r=n("yGk4"),o=n("vN+2"),a=n("rEGp"),i=r&&1/a(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=i},hgQt:function(e,t,n){var r=n("Juji"),o=n("4sDh");e.exports=function(e,t){return null!=e&&o(e,t,r)}},"jbM+":function(e,t,n){var r=n("R/W3");e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},mwIZ:function(e,t,n){var r=n("ZWtO");e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},qPyV:function(e,t,n){var r=n("ut/Y"),o=n("LGYb");e.exports=function(e,t){return e&&e.length?o(e,r(t,2)):[]}},sEfC:function(e,t,n){var r=n("GoyQ"),o=n("QIyF"),a=n("tLB3"),i=Math.max,l=Math.min;e.exports=function(e,t,n){var c,s,u,d,p,f,h=0,m=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=c,r=s;return c=s=void 0,h=t,d=e.apply(r,n)}function y(e){return h=e,p=setTimeout(E,t),m?b(e):d}function w(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-h>=u}function E(){var e=o();if(w(e))return O(e);p=setTimeout(E,function(e){var n=t-(e-f);return v?l(n,u-(e-h)):n}(e))}function O(e){return p=void 0,g&&c?b(e):(c=s=void 0,d)}function j(){var e=o(),n=w(e);if(c=arguments,s=this,f=e,n){if(void 0===p)return y(f);if(v)return clearTimeout(p),p=setTimeout(E,t),b(f)}return void 0===p&&(p=setTimeout(E,t)),d}return t=a(t)||0,r(n)&&(m=!!n.leading,u=(v="maxWait"in n)?i(a(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==p&&clearTimeout(p),h=0,c=f=s=p=void 0},j.flush=function(){return void 0===p?d:O(o())},j}},"ut/Y":function(e,t,n){var r=n("ZCpW"),o=n("GDhZ"),a=n("zZ0H"),i=n("Z0cm"),l=n("+c4W");e.exports=function(e){return"function"==typeof e?e:null==e?a:"object"==typeof e?i(e)?o(e[0],e[1]):r(e):l(e)}},"vN+2":function(e,t){e.exports=function(){}},zZ0H:function(e,t){e.exports=function(e){return e}}}]);
//# sourceMappingURL=component---src-templates-post-post-js-c8c9f63410402908aa69.js.map