(window.webpackJsonpexercises=window.webpackJsonpexercises||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/paper.128c2852.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/scissors.ea9b959e.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/stone.b59b38c8.jpg"},46:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(4),c=a(3),o=a(5),i=a(0),l=a.n(i),u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"column-".concat(this.props.cols)},l.a.createElement("button",{className:"calc-button",onClick:function(){return e.props.action(e.props.symbol)}},this.props.symbol))}}]),t}(i.Component);t.a=u},54:function(e,t,a){e.exports=a(98)},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},86:function(e,t,a){},87:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(88),_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6__),_Items_CalcButton__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(46),Calc=function(_Component){function Calc(props){var _this;return Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calc),_this=Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calc).call(this,props)),_this.reset=function(){_this.setState({current:"0",previous:[],nextIsReset:!1})},_this.addToCurrent=function(e){if(["/","-","+","*"].indexOf(e)>-1){var t=_this.state.previous;t.push(_this.state.current+e),_this.setState({previous:t,nextIsReset:!0})}else"0"===_this.state.current&&"."!==e||_this.state.nextIsReset?_this.setState({current:e,nextIsReset:!1}):_this.setState({current:_this.state.current+e})},_this.calculate=function(){var _this$state=_this.state,current=_this$state.current,previous=_this$state.previous;previous.length>0&&(current=eval(String(previous[previous.length-1]+current)),_this.setState({current:current,previous:[],nextIsReset:!0}))},_this.state={current:"0",previous:[],nextIsReset:!1},_this}return Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calc,_Component),Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calc,[{key:"render",value:function(){var e=[{symbol:"C",cols:3,action:this.reset},{symbol:"/",cols:1,action:this.addToCurrent},{symbol:"7",cols:1,action:this.addToCurrent},{symbol:"8",cols:1,action:this.addToCurrent},{symbol:"9",cols:1,action:this.addToCurrent},{symbol:"*",cols:1,action:this.addToCurrent},{symbol:"4",cols:1,action:this.addToCurrent},{symbol:"5",cols:1,action:this.addToCurrent},{symbol:"6",cols:1,action:this.addToCurrent},{symbol:"-",cols:1,action:this.addToCurrent},{symbol:"3",cols:1,action:this.addToCurrent},{symbol:"2",cols:1,action:this.addToCurrent},{symbol:"1",cols:1,action:this.addToCurrent},{symbol:"+",cols:1,action:this.addToCurrent},{symbol:"0",cols:2,action:this.addToCurrent},{symbol:".",cols:1,action:this.addToCurrent},{symbol:"=",cols:1,action:this.calculate}];return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"Application"},this.state.previous.length>0?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"floaty-last"},this.state.previous[this.state.previous.length-1]):null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{className:"result",type:"text",value:this.state.current})),e.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Items_CalcButton__WEBPACK_IMPORTED_MODULE_7__.a,{key:t,symbol:e.symbol,cols:e.cols,action:function(t){return e.action(t)}})}))}}]),Calc}(react__WEBPACK_IMPORTED_MODULE_5__.Component),_unused_webpack_default_export=Calc},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(20),o=a.n(c),i=(a(59),a(1)),l=a(2),u=a(4),_=a(3),m=a(5),h=(a(99),a(22)),d=a(16),p=(a(64),a(65),a(7)),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("a",{className:"menuText","data-toggle":"modal",href:this.props.href},s.a.createElement("div",null,s.a.createElement("li",null,this.props.title,"      ")))}}]),t}(r.Component),E=[{title:"Play Stone Paper Scissors",href:"/SPS"},{title:"Tic Tac Toe",href:"/TicTacToe"}],f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={displayMenu:!1,show:!1,menus:"menuGames"===a.props.menu?a.menus=E:null},a.showDropdownMenu=a.showDropdownMenu.bind(Object(p.a)(a)),a.hideDropdownMenu=a.hideDropdownMenu.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"dropdown"},s.a.createElement("div",null,s.a.createElement("div",{className:"buttonDrop",onClick:this.showDropdownMenu}," ",this.props.title," "),s.a.createElement("ul",null,this.state.displayMenu?this.state.menus.map(function(e,t){return s.a.createElement(b,Object.assign({key:t},e))}):null)))}}]),t}(s.a.Component),v=[{menu:"menuBasic",title:"Basic"},{menu:"menuReactFun",title:"React Fun"},{menu:"menuApi",title:"API Fun"},{menu:"menuGames",title:"Games"},{menu:"menuCSS",title:"CSS Fun"}],O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"MenuBlock"},v.map(function(e,t){return s.a.createElement("div",{key:t,className:"Nav"},s.a.createElement(f,e))}))}}]),t}(r.Component),C=[2,5,7,10,34,16,9,1],j=(r.Component,a(66),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleClick=function(){a.setState({value:""})},a.state={value:"..."},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement("input",{id:"inputName",type:"text",value:this.state.value,onChange:this.handleChange,onClick:this.handleClick})),s.a.createElement("br",null),s.a.createElement("span",{id:"hello"},"Hello ",this.state.value))}}]),t}(r.Component)),k=["John","Bill","Emma","Stella","Rob"],y=Math.round(4*Math.random()),D=(r.Component,a(42)),P=a.n(D),g=a(43),w=a.n(g),M=a(44),N=a.n(M),S=(a(67),["Paper","Scissors","Stone"]),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={text:"",value:"",plWin:0,plLoos:0},a.game=a.game.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"game",value:function(e){var t=this;(n=Math.round(2*Math.random()))===e?this.setState(function(){return{text:"It's a draw",value:S[n]}}):2===n&&0===e?this.setState(function(){return{text:"You win!",value:S[n],plWin:t.state.plWin+1}}):n>e||0===n&&2===e?this.setState(function(){return{text:"You loose",value:S[n],plLoos:t.state.plLoos+1}}):this.setState(function(){return{text:"You win!",value:S[n],plWin:t.state.plWin+1}})}},{key:"reset",value:function(){this.setState(function(){return{text:"",value:"",plLoos:0,plWin:0}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"stoneDiv"},s.a.createElement("div",{className:"choose",id:"#stone"},s.a.createElement("button",{onClick:function(){return e.game(0)}},s.a.createElement("img",{src:P.a,alt:"Paper"})),s.a.createElement("button",{onClick:function(){return e.game(1)}},s.a.createElement("img",{src:w.a,alt:"Scissors"})),s.a.createElement("button",{onClick:function(){return e.game(2)}},s.a.createElement("img",{src:N.a,alt:"Stone"})),s.a.createElement("div",{className:"gameInfo"},s.a.createElement("div",{className:"oponent"}," Oponent played: ",this.state.value," "),s.a.createElement("div",{className:"result"},"Result: ",this.state.text," "),s.a.createElement("div",{className:"sumResults"},s.a.createElement("div",{className:"win"},"You win ",this.state.plWin," times "),s.a.createElement("div",{className:"lost"},"Program wins ",this.state.plLoos," times")))),s.a.createElement("button",{className:"reset",onClick:function(){return e.reset()}},"Reset"))}}]),t}(r.Component),I=a(45),x=a.n(I),R=(a(68),r.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={fromParent:Number(e.value),current:Number(e.value)},a.handleIncrement=a.handleIncrement.bind(Object(p.a)(a)),a.handleDecrement=a.handleDecrement.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.fromParent&&this.setState({fromParent:Number(e.value),current:Number(e.value)})}},{key:"handleIncrement",value:function(){this.setState({current:this.state.current+1})}},{key:"handleDecrement",value:function(){this.setState({current:this.state.current-1})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("label",null,this.state.current),s.a.createElement("button",{onClick:this.handleIncrement},"+"),s.a.createElement("button",{onClick:this.handleDecrement},"-"))}}]),t}(r.Component));r.Component;var W=function(e){return s.a.createElement("div",null,s.a.createElement("p",null,"Choose number:",s.a.createElement("input",{className:"bigInput",onBlur:function(t){return e.handleInput(t.target.value)},type:"number"})))},A=(a(69),r.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={date:new Date},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.updateDate.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"updateDate",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state.date.toString();return s.a.createElement("time",null,e)}}]),t}(r.Component)),B=(r.Component,a(21)),L=a.n(B),q="".concat("/react_fun","/images/unknown-avatar.png"),K=function(e){return e.characters.map(function(e){var t=e.name,a=e.image,n=void 0===a?q:a,r=e.species,c=e.gender;return s.a.createElement("div",{className:"id-card-wrapper",key:t},s.a.createElement("div",{className:"id-card"},s.a.createElement("div",{className:"profile-row"},s.a.createElement("div",{className:"profile-row__avatar"},s.a.createElement("img",{className:"avatar__image",src:n,alt:"".concat(t,"'s avatar")})),s.a.createElement("div",{className:"profile-row__desc"},s.a.createElement("h1",{className:"desc__name"},t),s.a.createElement("p",null,"Species: ",r),s.a.createElement("p",null,"Gender: ",c)))))})},U=(r.Component,r.Component,a(50)),$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={done:a.props.done},a.toggleDone=function(){a.setState({done:!a.state.done})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.toggleDone,className:this.state.done?"doneToDo":""},s.a.createElement("p",null,this.props.task.text))}}]),t}(r.Component);$.defaultProps={done:!1};var F=$,G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:a.props.tasks,draft:""},a.updateDraft=function(e){a.setState({draft:e.target.value})},a.addToDo=function(){var e=a.state,t=e.tasks,n=e.draft,r=t;a.setState({tasks:[].concat(Object(U.a)(r),[{text:n}])}),a.setState({draft:""})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.draft,n=this.props.title;return s.a.createElement("div",null,s.a.createElement("h1",null,n),t.map(function(e,t){return s.a.createElement(F,{key:t,task:e})}),s.a.createElement("input",{type:"text",onChange:this.updateDraft,value:a}),s.a.createElement("button",{onClick:this.addToDo},"Add"))}}]),t}(r.Component),J=(a(86),r.Component,a(87),a(26)),Y=a(27);function z(){var e=Object(J.a)(["\n    background: blue;\n    "]);return z=function(){return e},e}function H(){var e=Object(J.a)(["\n  background: $(props => props.theme.backgroundColor);\n  border: 5px solid $(props => props.theme.primaryColor);\n  front-size: 20px;\n  color: $(props => props.theme.primaryColor);\n\n  ","\n"]);return H=function(){return e},e}Y.b.button(H(),function(e){return e.primary&&Object(Y.a)(z())}),a(89),r.Component,a(90),r.Component;var X=a(15),Q=a.n(X),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={size:"15000%",options:{},series:[44,55,41,17,15],labels:["A","B","C","D","E"]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"myLineChart"},s.a.createElement(Q.a,{type:"donut",options:this.state.options,series:this.state.series}))}}]),t}(r.Component),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={options:{xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"sales",data:[130,40,35,50,49,60,70,91,125]}]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"myLineChart"},s.a.createElement(Q.a,{type:"line",options:this.state.options,series:this.state.series}))}}]),t}(r.Component),ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={options:{chart:{id:"basic-bar"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"The real data",data:[30,40,45,50,49,60,70,91]}]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"mixed-chart"},s.a.createElement(Q.a,{options:this.state.options,series:this.state.series,type:"bar"}))))}}]),t}(r.Component),te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={options:{xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{name:"series-1",data:[30,40,25,50,49,21,70,51]},{name:"series-2",data:[23,12,54,61,32,56,81,19]}]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"area"},s.a.createElement(Q.a,{options:this.state.options,series:this.state.series,type:"area"}))}}]),t}(r.Component),ae=(a(94),r.Component,a(51));var ne=function(e){return s.a.createElement("button",{className:"square",onClick:e.onClick},s.a.createElement("div",{className:"pSquare"},e.value))},re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).handleClick=function(e){var t=a.state.squares.slice();a.calculateWinner(t)||t[e]||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext}))},a.handleReset=function(){a.setState({squares:Array(9).fill(null),xIsNext:!0})},a.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(ae.a)(t[a],3),r=n[0],s=n[1],c=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[c])return e[r]}return null},a.state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderSquare",value:function(e){var t=this;return s.a.createElement(ne,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=this.calculateWinner(this.state.squares);return e=t?"Wygrywa: "+t:"Nast\u0119pny gracz: "+(this.state.xIsNext?"X":"O"),s.a.createElement("div",null,s.a.createElement("div",{className:"status"},e),s.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),s.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),s.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),s.a.createElement("button",{className:"tttButton",onClick:this.handleReset},"Reset Game"))}}]),t}(r.Component),se=(a(95),r.Component,a(96),function(e){var t=e.users;return t.length>0?s.a.createElement("ul",{className:"searchList"},t.map(function(e){return s.a.createElement("li",{key:e},e)})):s.a.createElement("p",null,"No results!")}),ce=["Michal","Kasia","Jacek","Marta","Tomek","Ania"],oe=(r.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(_.a)(t).call(this,e))).handleDarkOn=function(e){var t=a.state.dark;a.setState({dark:!t})},a.state={dark:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.state.dark?"Dark":"Light"},s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"MenuBar"},s.a.createElement(O,null)),s.a.createElement("div",{className:"Pages"},s.a.createElement(h.a,{basename:"/react_fun"},s.a.createElement("div",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(h.b,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"/SPS"},"About"))),s.a.createElement("hr",null),s.a.createElement(d.a,{exact:!0,path:"/",component:j}),s.a.createElement(d.a,{path:"/SPS",component:T}))),s.a.createElement("div",{className:"ciemno"},s.a.createElement("button",{onClick:this.handleDarkOn},this.state.dark?"Light":"Dark")))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.818fd0bb.chunk.js.map