(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{1:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u}));var a=function(e){return{type:"APPEND_SYMBOL",symbol:e}},r=function(){return{type:"ERASE_ONE"}},c=function(e){return{type:"SET_INPUT",string:e}},u=function(){return{type:"CLEAR_INPUT"}}},11:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=function(e){var t="".concat(e).match(/[(]/g),n="".concat(e).match(/[)]/g);return!t||!(!t||!n)&&t.length===n.length},r=function(e){return"".concat(e).match(/[(]/g).length},c=function(e){var t="".concat(e).match(/[)]/g);return null!==t?t.length:0}},26:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useOperationClick}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_util_operation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_context_inputContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_context_bufferContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_actions_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_util_bracket__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),useOperationClick=function useOperationClick(operation){var _useContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_inputContext__WEBPACK_IMPORTED_MODULE_2__.a),input=_useContext.input,dispatchInput=_useContext.dispatchInput,setOperationClicked=_useContext.setOperationClicked,equalClicked=_useContext.equalClicked,setEqualClicked=_useContext.setEqualClicked,_useContext2=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_bufferContext__WEBPACK_IMPORTED_MODULE_3__.a),setBuffer=_useContext2.setBuffer,handleClick=function handleClick(){equalClicked&&(setEqualClicked(!1),setBuffer(""));var lastChar="".concat(input).slice(-1);if("\u232b"===operation)dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.c)());else if("( )"===operation){var isPaired=Object(_util_bracket__WEBPACK_IMPORTED_MODULE_5__.c)(input);"0"===input?dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.d)("(")):"("===lastChar||isPaired&&(Object(_util_operation__WEBPACK_IMPORTED_MODULE_1__.a)(lastChar)||"("===lastChar)?dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.a)("(")):!isPaired||Object(_util_operation__WEBPACK_IMPORTED_MODULE_1__.a)(lastChar)&&")"!==lastChar?isPaired||dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.a)(")")):dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.a)("\xd7("))}else if("+/-"===operation)"0"===input?dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.d)("(-")):parseInt(input,10)<0?dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.d)("".concat(-1*parseInt(input,10)))):"(-"===input?dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.d)("0")):Object(_util_operation__WEBPACK_IMPORTED_MODULE_1__.a)(lastChar)||"("===lastChar?dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.a)("(-")):dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.d)("(-".concat(input)));else{if("="!==operation)Object(_util_operation__WEBPACK_IMPORTED_MODULE_1__.a)(lastChar)&&lastChar!==operation?dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.d)(input.substring(0,input.length-1)+operation)):Object(_util_operation__WEBPACK_IMPORTED_MODULE_1__.a)(lastChar)||dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.a)(operation));else{var inputLength=input.length,validInput;if(validInput=Object(_util_operation__WEBPACK_IMPORTED_MODULE_1__.a)(input[inputLength-1])?input.substring(0,inputLength-1):input,!Object(_util_bracket__WEBPACK_IMPORTED_MODULE_5__.c)(input))for(var fillBracketsCount=Object(_util_bracket__WEBPACK_IMPORTED_MODULE_5__.b)(input)-Object(_util_bracket__WEBPACK_IMPORTED_MODULE_5__.a)(input),i=0;i<fillBracketsCount;i+=1)validInput+=")";setBuffer("".concat(validInput,"="));var expression="".concat(validInput).replace(/[\xd7]/g,"*");try{dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.d)(eval(expression)))}catch(error){dispatchInput(Object(_actions_input__WEBPACK_IMPORTED_MODULE_4__.d)("Wrong format!"))}setEqualClicked(!0)}setOperationClicked(!0)}};return handleClick}},28:function(e,t,n){e.exports=n(54)},33:function(e,t,n){},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(e){return["+","-","\xd7","/"].includes(e)},r=function(e){switch(e){case"*":return"\xd7";case"/":return"/";case"+":return"+";case"-":return"-";case"Backspace":return"\u232b";case"Enter":return"=";case"C":case"c":return"C";case"(":case")":return"( )";default:return e}}},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),r=n.n(a).a.createContext()},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),u=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(33);var _=n(13),i=n.n(_),o=n(25),l=n(3),s=n(7),p=n(5),E=n(6),b=n(1),m=r.a.createContext(),O=function(e,t){var n=Object(a.useContext)(m).pressed,r=Object(a.useState)(!1),c=Object(l.a)(r,2),u=c[0],_=c[1];return Object(a.useEffect)((function(){n===e&&(t(),_(!0),setTimeout((function(){_(!1)}),100))}),[n]),u},f=function(e){var t=e.number,n=function(e){var t=Object(a.useContext)(p.a),n=t.dispatchInput,r=t.equalClicked,c=t.setEqualClicked,u=Object(a.useContext)(E.a).setBuffer;return function(){r?(n(Object(b.b)()),u(""),n(Object(b.a)("".concat(e))),c(!1)):n(Object(b.a)("".concat(e)))}}(t),c=O(t,n);return r.a.createElement("td",null,r.a.createElement("input",{type:"button",onClick:n,value:t,className:"num-button",style:c?{backgroundColor:"rgba(90, 90, 90, 0.527)"}:{}}))};f.defaultProps={number:0};var d=n(26),C=function(e){var t=e.operation,n=Object(d.a)(t),a=O(t,n);return r.a.createElement("td",null,r.a.createElement("input",{type:"button",onClick:n,value:t,className:"+/-"!==t?"num-button operation":"num-button",style:a?{background:"linear-gradient(to right, rgb(207, 134, 45), rgba(201, 131, 46, 0.15))",transform:"translateY(2px)"}:{}}))};C.defaultProps={operation:"+"};var h=function(e){var t=e.buffer,n=Object(s.c)({from:{opacity:0,marginTop:-50},to:{opacity:1,marginTop:-20},config:{duration:250}});return r.a.createElement("td",null,r.a.createElement(s.a.p,{className:"buffer",style:n},t))};h.defaultProps={buffer:""};var P=n(4),g=function(){var e=Object(a.useContext)(p.a),t=e.input,n=e.dispatchInput,c=Object(a.useContext)(E.a),u=c.buffer,_=c.setBuffer,i=Object(a.useState)(""),o=Object(l.a)(i,2),s=o[0],O=o[1],d=function(e){var t=isNaN(parseInt(e.key,10))?e.key:parseInt(e.key,10);"number"===typeof t?O(t):function(e){return e.match(/[0-9]|[-+*/=.]|Enter|Backspace|C|[()]/)}(t)&&O(Object(P.b)(t))},g=function(){O("")};return Object(a.useEffect)((function(){return document.addEventListener("keydown",d),function(){return document.removeEventListener("keydown",d)}}),[]),Object(a.useEffect)((function(){return document.addEventListener("keyup",g),function(){return document.removeEventListener("keyup",g)}}),[t]),r.a.createElement(m.Provider,{value:{pressed:s}},r.a.createElement("div",{className:"layout__rectange"},r.a.createElement("table",{className:"table"},r.a.createElement("tr",null,u&&r.a.createElement(h,{buffer:u})),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"input"},r.a.createElement("span",null,t)))),r.a.createElement("tr",null,r.a.createElement("table",{className:"button-table"},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"button",value:"C",className:"num-button",id:"c-key",onClick:function(){n(Object(b.b)()),_("")}})),r.a.createElement(C,{operation:"/"}),r.a.createElement(C,{operation:"\xd7"}),r.a.createElement(C,{operation:"\u232b"})),r.a.createElement("tr",null,r.a.createElement(f,{number:7}),r.a.createElement(f,{number:8}),r.a.createElement(f,{number:9}),r.a.createElement(C,{operation:"-"})),r.a.createElement("tr",null,r.a.createElement(f,{number:4}),r.a.createElement(f,{number:5}),r.a.createElement(f,{number:6}),r.a.createElement(C,{operation:"+"})),r.a.createElement("tr",null,r.a.createElement(f,{number:1}),r.a.createElement(f,{number:2}),r.a.createElement(f,{number:3}),r.a.createElement(C,{operation:"( )"})),r.a.createElement("tr",null,r.a.createElement(C,{operation:"+/-"}),r.a.createElement(f,{number:0}),r.a.createElement(f,{number:"."}),r.a.createElement(C,{operation:"="})))),r.a.createElement("img",{src:"logo192.png",alt:"React logo",className:"layout__logo"}))))},D=n(27),M=function(e){var t=e.photographer;return Object(a.useContext)(p.a).transitions.map((function(e){var n=e.props,a=e.key;return t&&r.a.createElement(s.a.div,{className:"unsplash-container",key:a,style:Object(D.a)({},n)},r.a.createElement("span",null,"Photo by \xa0")," ",r.a.createElement("a",{href:"".concat(t.links.html,"?utm_source=ReactCalculator&utm_medium=referral"),className:"unsplash-container__link"},t.name)," ",r.a.createElement("span",null,"\xa0 on \xa0")," ",r.a.createElement("a",{href:"https://unsplash.com/?utm_source=ReactCalculator&utm_medium=referral",className:"unsplash-container__link"},"Unsplash"))}))},j=function(){return r.a.createElement("div",{className:"github-container"},r.a.createElement("img",{src:"github.png",className:"github-container__logo",alt:"Github logo"}),r.a.createElement("a",{href:"https://github.com/awesomelike",className:"github-container__link"},"@awesomelike"))},k=function(e,t){switch(t.type){case"APPEND_SYMBOL":var n=t.symbol;return"0"===e?Object(P.a)(n)?" ".concat(e+t.symbol).trim():"".concat(t.symbol):" ".concat(e+t.symbol).trim();case"ERASE_ONE":var a="".concat(e).length;return"0"==="".concat(e)||1===a?"0":"".concat(e).substring(0,a-1);case"SET_INPUT":return t.string;case"CLEAR_INPUT":return"0"}},I=n(14),v=n.n(I);n(51).config();var B="\nhttps://api.unsplash.com/photos/random?client_id=".concat("wFjDaiR29CLJlXNHVvusn2Na5wFr58rvUqJIR10MjDs","&orientation=landscape&query=Wallpaper+mountains"),L="/react-calculator/images/mojave-20.jpg",R=function(){var e=Object(a.useReducer)(k,"0"),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),_=Object(l.a)(u,2),b=_[0],m=_[1],O=Object(a.useState)(!1),f=Object(l.a)(O,2),d=f[0],C=f[1],h=Object(a.useState)(!1),P=Object(l.a)(h,2),D=P[0],I=P[1],R=Object(a.useState)(L),T=Object(l.a)(R,2),U=T[0],y=T[1],A=Object(a.useState)(null),W=Object(l.a)(A,2),K=W[0],w=W[1],x=Object(a.useState)(null),N=Object(l.a)(x,2),q=N[0],S=N[1],J=Object(a.useState)(!1),F=Object(l.a)(J,2),Y=F[0],H=F[1],V=Object(s.d)(Y,null,{from:{filter:"blur(1rem)"},enter:{filter:"blur(0)"},leave:{filter:"blur(1rem)"},config:s.b.molasses}),X=new Image;X.onload=function(){y(q),H(!1)};var G=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H(!0),new Promise((function(e,t){v.a.get(B).then((function(t){var n,a=t.data;e({urls:a.urls,user:a.user}),v.a.get((n=a.links.download_location,"".concat(n,"?client_id=").concat("wFjDaiR29CLJlXNHVvusn2Na5wFr58rvUqJIR10MjDs")))})).catch((function(e){return t(e)}))})).then((function(e){var t=e.urls,n=e.user;S(t.regular),w(n)})).catch((function(){y(L),w(null),H(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("image"));y(e?e.background:L),w(e?e.photographer:null)}),[]),Object(a.useEffect)((function(){localStorage.setItem("image",JSON.stringify({background:U,photographer:K}))}),[U,K]),Object(a.useEffect)((function(){X.src=q}),[q]),r.a.createElement(p.a.Provider,{value:{input:n,dispatchInput:c,operationClicked:d,setOperationClicked:C,equalClicked:D,setEqualClicked:I,transitions:V,isLoading:Y}},r.a.createElement(E.a.Provider,{value:{buffer:b,setBuffer:m}},r.a.createElement("div",{className:"layout",style:{backgroundImage:"url(".concat(U,")")}},r.a.createElement(g,null),r.a.createElement("button",{onClick:G,className:"button-background",type:"button",disabled:Y},Y?"Loading...":"Change background"),r.a.createElement(M,{photographer:K}),r.a.createElement(j,null))))};u.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),r=n.n(a).a.createContext()}},[[28,1,2]]]);
//# sourceMappingURL=main.c6ee8c6d.chunk.js.map