(window.webpackJsonpexercises=window.webpackJsonpexercises||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/paper.128c2852.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/scissors.ea9b959e.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/stone.b59b38c8.jpg"},38:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_css_Pages_calc_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(73),_css_Pages_calc_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_css_Pages_calc_scss__WEBPACK_IMPORTED_MODULE_6__),_Items_CalcButton__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(39),Calc=function(_Component){function Calc(props){var _this;return Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calc),_this=Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calc).call(this,props)),_this.reset=function(){_this.setState({current:"0",previous:[],nextIsReset:!1})},_this.addToCurrent=function(e){if(["/","-","+","*"].indexOf(e)>-1){var t=_this.state.previous;t.push(_this.state.current+e),_this.setState({previous:t,nextIsReset:!0})}else"0"===_this.state.current&&"."!==e||_this.state.nextIsReset?_this.setState({current:e,nextIsReset:!1}):_this.setState({current:_this.state.current+e})},_this.calculate=function(){var _this$state=_this.state,current=_this$state.current,previous=_this$state.previous;previous.length>0&&(current=eval(String(previous[previous.length-1]+current)),_this.setState({current:current,previous:[],nextIsReset:!0}))},_this.state={current:"0",previous:[],nextIsReset:!1},_this}return Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calc,_Component),Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calc,[{key:"render",value:function(){var e=[{symbol:"C",cols:3,action:this.reset},{symbol:"/",cols:1,action:this.addToCurrent},{symbol:"7",cols:1,action:this.addToCurrent},{symbol:"8",cols:1,action:this.addToCurrent},{symbol:"9",cols:1,action:this.addToCurrent},{symbol:"*",cols:1,action:this.addToCurrent},{symbol:"4",cols:1,action:this.addToCurrent},{symbol:"5",cols:1,action:this.addToCurrent},{symbol:"6",cols:1,action:this.addToCurrent},{symbol:"-",cols:1,action:this.addToCurrent},{symbol:"3",cols:1,action:this.addToCurrent},{symbol:"2",cols:1,action:this.addToCurrent},{symbol:"1",cols:1,action:this.addToCurrent},{symbol:"+",cols:1,action:this.addToCurrent},{symbol:"0",cols:2,action:this.addToCurrent},{symbol:".",cols:1,action:this.addToCurrent},{symbol:"=",cols:1,action:this.calculate}];return react__WEBPACK_IMPORTED_MODULE_5__.createElement("div",{className:"application"},react__WEBPACK_IMPORTED_MODULE_5__.createElement("div",{className:"floaty-last"},this.state.previous[this.state.previous.length-1]),react__WEBPACK_IMPORTED_MODULE_5__.createElement("div",{className:"input-calc"},react__WEBPACK_IMPORTED_MODULE_5__.createElement("input",{className:"result",type:"text",value:this.state.current})),e.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Items_CalcButton__WEBPACK_IMPORTED_MODULE_7__.a,{key:t,symbol:e.symbol,cols:e.cols,action:function(t){return e.action(t)}})}))}}]),Calc}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calc},39:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(4),s=a(3),i=a(5),l=a(0),o=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.createElement("div",{className:"column-".concat(this.props.cols)},l.createElement("button",{className:"calc-button",onClick:function(){return e.props.action(e.props.symbol)}},this.props.symbol))}}]),t}(l.Component);t.a=o},44:function(e,t,a){e.exports=a(86)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(33),i=a.n(s),l=(a(49),a(1)),o=a(2),u=a(4),m=a(3),_=a(5),h=(a(50),a(51),a(8)),d=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("a",{className:"menu-text","data-toggle":"modal",href:this.props.href},r.createElement("div",null,r.createElement("li",null,this.props.title,"      ")))}}]),t}(r.Component),p={menuBasic:[{title:'"Hello!"',href:"/react_fun/#/hello-name#/"},{title:"Family Dialog",href:"/react_fun/#/dialog#"},{title:"Timer",href:"/react_fun/#/timer#"}],menuReactFun:[{title:"Do do list",href:"/react_fun/#/to-do-list"},{title:"Calc",href:"/react_fun/#/calc"},{title:"Chart Animation",href:"/react_fun/#/chart"},{title:"Search",href:"/react_fun/#/search"}],menuGames:[{title:"Play Stone Paper Scissors",href:"/react_fun/#/sps"},{title:"Tic Tac Toe",href:"/react_fun/#/tic-tac-toe"}],menuCSS:[{title:"Race",href:"/react_fun/#/race"},{title:"Color Wheel",href:"/react_fun/#/color-wheel"}],menuApi:[{title:"Rick and Morthy",href:"/react_fun/#/rick-and-morthy"}]},b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={displayMenu:!1,show:!1},a.showDropdownMenu=a.showDropdownMenu.bind(Object(h.a)(a)),a.hideDropdownMenu=a.hideDropdownMenu.bind(Object(h.a)(a)),a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})}},{key:"render",value:function(){return r.createElement("div",{className:"dropdown"},r.createElement("div",{className:"button-drop",onClick:this.showDropdownMenu}," ",this.props.title," "),r.createElement("ul",null,this.state.displayMenu?p[this.props.menu].map(function(e,t){return r.createElement(d,Object.assign({key:t},e))}):null))}}]),t}(r.Component),E=[{menu:"menuBasic",title:"Basic"},{menu:"menuReactFun",title:"React Fun"},{menu:"menuGames",title:"Games"},{menu:"menuCSS",title:"CSS Fun"},{menu:"menuApi",title:"API Fun"}],f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"menu-block"},E.map(function(e,t){return r.createElement("div",{key:t,className:"nav"},r.createElement(b,e))}))}}]),t}(r.Component),v=a(40),O=a(14),j=[2,5,7,10,34,16,9,1],k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",null,j.map(function(e,t){return r.createElement("div",null,e%2===0?r.createElement("li",{key:t},e):null)}))}}]),t}(r.Component),y=(a(52),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleClick=function(){a.setState({value:""})},a.state={value:"..."},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"name"},r.createElement("label",null,r.createElement("input",{id:"input-name",type:"text",value:this.state.value,onChange:this.handleChange,onClick:this.handleClick})),r.createElement("br",null),r.createElement("span",{id:"hello"},"Hello ",this.state.value))}}]),t}(r.Component)),C=["John","Bill","Emma","Stella","Rob"],g=Math.round(4*Math.random()),w=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",null,C[g])}}]),t}(r.Component),N=a(34),D=a.n(N),M=a(35),P=a.n(M),S=a(36),T=a.n(S),I=(a(53),["Paper","Scissors","Stone"]),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={text:"",value:"",plWin:0,plLoos:0},a.game=a.game.bind(Object(h.a)(a)),a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"game",value:function(e){var t=this;(n=Math.round(2*Math.random()))===e?this.setState(function(){return{text:"It's a draw",value:I[n]}}):2===n&&0===e?this.setState(function(){return{text:"You win!",value:I[n],plWin:t.state.plWin+1}}):n>e||0===n&&2===e?this.setState(function(){return{text:"You loose",value:I[n],plLoos:t.state.plLoos+1}}):this.setState(function(){return{text:"You win!",value:I[n],plWin:t.state.plWin+1}})}},{key:"reset",value:function(){this.setState(function(){return{text:"",value:"",plLoos:0,plWin:0}})}},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"stone-div"},r.createElement("div",{className:"choose"},r.createElement("div",{className:"img"},r.createElement("img",{onClick:function(){return e.game(0)},src:D.a,alt:"Paper"}),r.createElement("img",{onClick:function(){return e.game(1)},src:P.a,alt:"Scissors"}),r.createElement("img",{onClick:function(){return e.game(2)},src:T.a,alt:"Stone"})),r.createElement("div",{className:"game-info"},r.createElement("div",{className:"oponent"}," Oponent played: ",this.state.value," "),r.createElement("div",{className:"result"},"Result: ",this.state.text," "),r.createElement("div",{className:"sum-results"},r.createElement("div",{className:"win"},"You win ",this.state.plWin," times "),r.createElement("div",{className:"lost"},"Program wins ",this.state.plLoos," times")))),r.createElement("button",{className:"reset",onClick:function(){return e.reset()}},"Reset"))}}]),t}(r.Component),W=a(37),R=a.n(W),A=(a(54),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("div",{class:"the-icons span3",title:"Code: 0xe800"},r.createElement("i",{class:"demo-icon icon-gauge"})),r.createElement("button",{variant:"contained",color:"primary",onClick:function(e){R()(".MyFile").trigger("click")}},"Upload post Image"),r.createElement("input",{type:"file",style:{display:"none"},className:"my-file"}),r.createElement("div",null,r.createElement("h2",null," W tym momencie jest to jedynie mo\u017cliwo\u015b\u0107 ",r.createElement("br",null)," wy\u015bwietlenia okna wyboru plik\xf3w")))}}]),t}(r.Component)),B=a(12),L=function(e){var t=Object(r.useState)(Number(e.value)),a=Object(B.a)(t,2),n=a[0],c=a[1];return r.createElement("div",null,r.createElement("label",null," ",n," "),r.createElement("button",{onClick:function(){return c(n+1)}},"+"),r.createElement("button",{onClick:function(){return c(n-1)}},"-"))},q=function(){var e=Object(r.useState)(0),t=Object(B.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(0),s=Object(B.a)(c,2),i=s[0],l=s[1];return r.createElement("div",null,r.createElement("h2",null,"Proste przekazywanie danych rodzic - dziecko",r.createElement("br",null)," i manipulacja liczb\u0105 z poziomu dziecka"),r.createElement("input",{onChange:function(e){return n(a=e.target.value)},type:"number"})," ",r.createElement("br",null),r.createElement("button",{onClick:function(){return l(i=a)}},"Propagate to child"),r.createElement("div",null,i?r.createElement(L,{value:i}):null))};var U=function(e){return r.createElement("div",null,r.createElement("p",null,"Choose number:",r.createElement("input",{className:"big-input",onBlur:function(t){return e.handleInput(t.target.value)},type:"number"})))},K=(a(55),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleNumber=function(e){a.setState({value:e.currentTarget.value}),a.table=[]},a.handleInput=function(e){a.state.bigNum<e&&a.setState({bigNum:e})},a.handleInpNumber=function(e,t){a.table=Array(Number(e)).fill(r.createElement("div",{className:"forInput",key:t},r.createElement(U,{handleInput:function(e){return a.handleInput(e)},type:"number",min:"0"}),r.createElement("br",null)))},a.state={value:2,bigNum:0},a.table=[],a.handleNumber=a.handleNumber.bind(Object(h.a)(a)),a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.handleInpNumber=a.handleInpNumber.bind(Object(h.a)(a)),a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("p",{className:"pbig"},"How many numbers do you want to pass?"),r.createElement("input",{className:"input-numbers",type:"number",min:"2",max:"6",onBlur:this.handleNumber,defaultValue:this.state.value}),r.createElement("button",{onClick:this.handleInpNumber(this.state.value)},"ok"),r.createElement("div",null,this.state.value>1?r.createElement("span",null,this.table):null),r.createElement("p",{className:"pbig"},"The biggest number:",this.state.bigNum))}}]),t}(r.Component)),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={date:new Date},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.updateDate.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"updateDate",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e="  Time now: "+this.state.date.getHours()+":"+this.state.date.getMinutes()+":"+this.state.date.getSeconds()+"  "+this.state.date.getDate()+"/"+this.state.date.getMonth()+"/"+this.state.date.getFullYear();return r.createElement("time",null,e)}}]),t}(r.Component),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={dateVis:!0,text:!0},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"onButtonClick",value:function(){this.setState(function(e){return{dateVis:!e.dateVis,text:!e.text}})}},{key:"render",value:function(){return r.createElement("div",null,r.createElement("button",{onClick:this.onButtonClick.bind(this)},this.state.text?"Zniknij":"Poka\u017c"),this.state.dateVis&&r.createElement(z,null))}}]),t}(r.Component),G=a(17),V=a.n(G),Y="".concat("/react_fun","/images/unknown-avatar.png"),H=function(e){return e.characters.map(function(e){var t=e.name,a=e.image,n=void 0===a?Y:a,c=e.species,s=e.gender;return r.createElement("div",{className:"id-card-wrapper",key:t},r.createElement("div",{className:"id-card"},r.createElement("div",{className:"profile-row"},r.createElement("div",{className:"profile-row__avatar"},r.createElement("img",{className:"avatar__image",src:n,alt:"".concat(t,"'s avatar")})),r.createElement("div",{className:"profile-row__desc"},r.createElement("h1",{className:"desc__name"},t),r.createElement("p",null,"Species: ",c),r.createElement("p",null,"Gender: ",s)))))})},J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;V.a.get("https://rickandmortyapi.com/api/character/").then(function(t){var a=t.data.results;e.setState({characters:a})})}},{key:"render",value:function(){return r.createElement(H,{characters:this.state.characters})}}]),t}(r.Component),$=(r.Component,a(43)),X=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={done:a.props.done},a.toggleDone=function(){a.setState({done:!a.state.done})},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{onClick:this.toggleDone,className:this.state.done?"done-to-do":""},r.createElement("p",null,this.props.task.text))}}]),t}(r.Component);X.defaultProps={done:!1};var Z=X,Q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:a.props.tasks,draft:""},a.updateDraft=function(e){a.setState({draft:e.target.value})},a.addToDo=function(){var e=a.state,t=e.tasks,n=e.draft,r=t;a.setState({tasks:[].concat(Object($.a)(r),[{text:n}])}),a.setState({draft:""})},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.draft,n=this.props.title;return r.createElement("div",null,r.createElement("h1",null,n),t.map(function(e,t){return r.createElement(Z,{key:t,task:e})}),r.createElement("input",{type:"text",onChange:this.updateDraft,value:a}),r.createElement("button",{onClick:this.addToDo},"Add"))}}]),t}(r.Component),ee=(a(72),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).myTasks=[{done:!0,text:"Be zer0 waste"},{done:!1,text:"Dream fish"}],a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement(Q,{title:"my stuff",tasks:this.myTasks}),r.createElement("h2",null,"Mamy mo\u017cliwo\u015b\u0107 dopisywania kolejnych pozycji oraz skre\u015blania ich"))}}]),t}(r.Component)),te=a(38),ae=(a(74),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("h2",null,"Which is the fastest one?"),r.createElement("div",{className:"animation"},r.createElement("div",{className:"race"},r.createElement("div",{className:"credits"}))))}}]),t}(r.Component)),ne=(a(75),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1},a.handleWheel=function(){var e=a.state.active;a.setState({active:!e})},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("div",{className:"switch"}),r.createElement("div",{className:"dark-circle"}),r.createElement("div",{className:this.state.active?"circle":"circle active"}),r.createElement("button",{className:"wheel-btn",onClick:this.handleWheel}," Wheel the wheel "))}}]),t}(r.Component)),re=a(13),ce=a.n(re),se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={size:"15000%",options:{},series:[44,55,41,17,15],labels:["A","B","C","D","E"]},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"my-line-chart"},r.createElement(ce.a,{type:"donut",options:this.state.options,series:this.state.series}))}}]),t}(r.Component),ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={options:{xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"sales",data:[130,40,35,50,49,60,70,91,125]}]},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"line-chart"},r.createElement(ce.a,{type:"line",options:this.state.options,series:this.state.series}))}}]),t}(r.Component),le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={options:{chart:{id:"basic-bar"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"The real data",data:[30,40,45,50,49,60,70,91]}]},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"mixed-chart"},r.createElement(ce.a,{options:this.state.options,series:this.state.series,type:"bar"}))}}]),t}(r.Component),oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={options:{xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{name:"series-1",data:[30,40,25,50,49,21,70,51]},{name:"series-2",data:[23,12,54,61,32,56,81,19]}]},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"area"},r.createElement(ce.a,{options:this.state.options,series:this.state.series,type:"area"}))}}]),t}(r.Component),ue=(a(81),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"chart-app"},r.createElement("h1",{className:"info"},"Charts generated using Apexcharts"),r.createElement("div",{className:"row"},r.createElement("div",{className:"donut-graph"},r.createElement(se,null)),r.createElement("div",{className:"my-chart"},r.createElement(oe,null)),r.createElement("div",{className:"bar-graph"},r.createElement(le,null)),r.createElement("div",{className:"line-graph"},r.createElement(ie,null)),r.createElement("div",{className:"close"})))}}]),t}(r.Component));var me=function(e){return r.createElement("button",{className:"square",onClick:e.onClick},e.value)},_e=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){var t=a.state.squares.slice();a.calculateWinner(t)||t[e]||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext}))},a.handleReset=function(){a.setState({squares:Array(9).fill(null),xIsNext:!0})},a.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(B.a)(t[a],3),r=n[0],c=n[1],s=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[s])return e[r]}return null},a.state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.createElement(me,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=this.calculateWinner(this.state.squares);return e=t?"Wygrywa: "+t:"Nast\u0119pny gracz: "+(this.state.xIsNext?"X":"O"),r.createElement("div",null,r.createElement("div",{className:"status"},e),r.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),r.createElement("button",{className:"ttt-button",onClick:this.handleReset},"Reset Game"))}}]),t}(r.Component),he=(a(82),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"ttt-game"},r.createElement("h1",null,"Tic Tac Toe Game"),r.createElement(_e,null))}}]),t}(r.Component)),de=(a(83),function(e){var t=e.users;return t?r.createElement("ul",{className:"search-list"},t.map(function(e){return r.createElement("li",{key:e},e)})):r.createElement("p",null,"No results!")}),pe=["Michal","Kasia","Jacek","Marta","Tomek","Ania"];var be=function(){var e=r.useState(pe),t=Object(B.a)(e,2),a=t[0],n=t[1];return r.createElement("div",{className:"search"},r.createElement("h2",null,"Przy wpisywaniu znak\xf3w do inputa",r.createElement("br",null)," zostaj\u0105 jedynie posiadaj\u0105ce te znaki imiona"),r.createElement("div",null,r.createElement("input",{onInput:function(e){var t=function(e){return pe.filter(function(t){return t.toLowerCase().includes(e)})}(e.currentTarget.value.toLowerCase());n(t)}})),r.createElement("div",{className:"search-user"},r.createElement(de,{users:a})))},Ee=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"app"},r.createElement("div",{className:"pages"},r.createElement(v.a,{basename:"/"},r.createElement("div",null,r.createElement(O.a,{exact:!0,path:"/",component:y}),r.createElement(O.a,{path:"/sps",component:x}),r.createElement(O.a,{path:"/biggest",component:K}),r.createElement(O.a,{path:"/random-number",component:w}),r.createElement(O.a,{path:"/dialog",component:q}),r.createElement(O.a,{path:"/hello-name",component:y}),r.createElement(O.a,{path:"/even-number",component:k}),r.createElement(O.a,{path:"/file-selector",component:A}),r.createElement(O.a,{path:"/timer",component:F}),r.createElement(O.a,{path:"/rick-and-morthy",component:J}),r.createElement(O.a,{path:"/to-do-list",component:ee}),r.createElement(O.a,{path:"/calc",component:te.a}),r.createElement(O.a,{path:"/race",component:ae}),r.createElement(O.a,{path:"/color-wheel",component:ne}),r.createElement(O.a,{path:"/chart",component:ue}),r.createElement(O.a,{path:"/tic-tac-toe",component:he}),r.createElement(O.a,{path:"/search",component:be})))))}}]),t}(r.Component),fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleDarkOn=function(e){var t=a.state.dark;a.setState({dark:!t})},a.state={dark:!0},a}return Object(_.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:this.state.dark?"dark":"light"},r.createElement("div",{className:"app"},r.createElement("div",{className:"menu-bar"},r.createElement(f,null)),r.createElement("div",{className:"pages"},r.createElement(Ee,null),r.createElement("div",{className:"darkness"},r.createElement("button",{onClick:this.handleDarkOn},this.state.dark?"Light":"Dark")))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.8de42fbc.chunk.js.map