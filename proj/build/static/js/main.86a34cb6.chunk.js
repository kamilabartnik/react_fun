(window.webpackJsonpexercises=window.webpackJsonpexercises||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/paper.128c2852.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/scissors.ea9b959e.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/stone.b59b38c8.jpg"},41:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(81),_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6__),_Items_CalcButton__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(42),Calc=function(_Component){function Calc(props){var _this;return Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calc),_this=Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calc).call(this,props)),_this.reset=function(){_this.setState({current:"0",previous:[],nextIsReset:!1})},_this.addToCurrent=function(e){if(["/","-","+","*"].indexOf(e)>-1){var t=_this.state.previous;t.push(_this.state.current+e),_this.setState({previous:t,nextIsReset:!0})}else"0"===_this.state.current&&"."!==e||_this.state.nextIsReset?_this.setState({current:e,nextIsReset:!1}):_this.setState({current:_this.state.current+e})},_this.calculate=function(){var _this$state=_this.state,current=_this$state.current,previous=_this$state.previous;previous.length>0&&(current=eval(String(previous[previous.length-1]+current)),_this.setState({current:current,previous:[],nextIsReset:!0}))},_this.state={current:"0",previous:[],nextIsReset:!1},_this}return Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calc,_Component),Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calc,[{key:"render",value:function(){var e=[{symbol:"C",cols:3,action:this.reset},{symbol:"/",cols:1,action:this.addToCurrent},{symbol:"7",cols:1,action:this.addToCurrent},{symbol:"8",cols:1,action:this.addToCurrent},{symbol:"9",cols:1,action:this.addToCurrent},{symbol:"*",cols:1,action:this.addToCurrent},{symbol:"4",cols:1,action:this.addToCurrent},{symbol:"5",cols:1,action:this.addToCurrent},{symbol:"6",cols:1,action:this.addToCurrent},{symbol:"-",cols:1,action:this.addToCurrent},{symbol:"3",cols:1,action:this.addToCurrent},{symbol:"2",cols:1,action:this.addToCurrent},{symbol:"1",cols:1,action:this.addToCurrent},{symbol:"+",cols:1,action:this.addToCurrent},{symbol:"0",cols:2,action:this.addToCurrent},{symbol:".",cols:1,action:this.addToCurrent},{symbol:"=",cols:1,action:this.calculate}];return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"Application"},this.state.previous.length>0?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"floaty-last"},this.state.previous[this.state.previous.length-1]):null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{className:"result",type:"text",value:this.state.current})),e.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Items_CalcButton__WEBPACK_IMPORTED_MODULE_7__.a,{key:t,symbol:e.symbol,cols:e.cols,action:function(t){return e.action(t)}})}))}}]),Calc}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calc},42:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(4),s=a(3),l=a(5),i=a(0),u=a.n(i),o=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"column-".concat(this.props.cols)},u.a.createElement("button",{className:"calc-button",onClick:function(){return e.props.action(e.props.symbol)}},this.props.symbol))}}]),t}(i.Component);t.a=o},52:function(e,t,a){e.exports=a(94)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(36),l=a.n(s),i=(a(57),a(1)),u=a(2),o=a(4),m=a(3),h=a(5),_=a(45),d=a(13),p=(a(58),a(59),a(6)),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{className:"menuText","data-toggle":"modal",href:this.props.href},c.a.createElement("div",null,c.a.createElement("li",null,this.props.title,"      ")))}}]),t}(r.Component),f=[{title:'"Hello!"',href:"/HelloName"},{title:"Select a file",href:"/FileSelector"},{title:"Family Dialog",href:"/Dialog"},{title:"Timer",href:"/Timer"}],E=[{title:"Biggest",href:"/Biggest"},{title:"Do do list",href:"/ToDoList"},{title:"Calc",href:"/Calc"},{title:"Chart Animation",href:"/Chart"},{title:"Search",href:"/Search"}],v=[{title:"Play Stone Paper Scissors",href:"/StonePaperScissors"},{title:"Tic Tac Toe",href:"/TicTacToe"}],O=[{title:"Race",href:"/Race"},{title:"Color Wheel",href:"./ColorWheel"}],j=[{title:"Rick and Morthy",href:"/RickAndMorthy"},{title:"StarWars",href:"/StarWars"}],C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={displayMenu:!1,show:!1,menus:"menuBasic"===a.props.menu?a.menus=f:"menuReactFun"===a.props.menu?a.menus=E:"menuGames"===a.props.menu?a.menus=v:"menuCSS"===a.props.menu?a.menus=O:a.menus=j},a.showDropdownMenu=a.showDropdownMenu.bind(Object(p.a)(a)),a.hideDropdownMenu=a.hideDropdownMenu.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"dropdown"},c.a.createElement("div",null,c.a.createElement("div",{className:"buttonDrop",onClick:this.showDropdownMenu}," ",this.props.title," "),c.a.createElement("ul",null,this.state.displayMenu?this.state.menus.map(function(e,t){return c.a.createElement(b,Object.assign({key:t},e))}):null)))}}]),t}(c.a.Component),k=[{menu:"menuBasic",title:"Basic"},{menu:"menuReactFun",title:"React Fun"},{menu:"menuApi",title:"API Fun"},{menu:"menuGames",title:"Games"},{menu:"menuCSS",title:"CSS Fun"}],y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"MenuBlock"},k.map(function(e,t){return c.a.createElement("div",{key:t,className:"Nav"},c.a.createElement(C,e))}))}}]),t}(r.Component),g=[2,5,7,10,34,16,9,1],N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,g.map(function(e,t){return c.a.createElement("div",null,e%2===0?c.a.createElement("li",{key:t},e):null)}))}}]),t}(r.Component),w=(a(60),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleClick=function(){a.setState({value:""})},a.state={value:"..."},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",{id:"inputName",type:"text",value:this.state.value,onChange:this.handleChange,onClick:this.handleClick})),c.a.createElement("br",null),c.a.createElement("span",{id:"hello"},"Hello ",this.state.value))}}]),t}(r.Component)),D=["John","Bill","Emma","Stella","Rob"],M=Math.round(4*Math.random()),P=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,D[M])}}]),t}(r.Component),S=a(37),T=a.n(S),I=a(38),x=a.n(I),R=a(39),W=a.n(R),B=(a(61),["Paper","Scissors","Stone"]),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={text:"",value:"",plWin:0,plLoos:0},a.game=a.game.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"game",value:function(e){var t=this;(n=Math.round(2*Math.random()))===e?this.setState(function(){return{text:"It's a draw",value:B[n]}}):2===n&&0===e?this.setState(function(){return{text:"You win!",value:B[n],plWin:t.state.plWin+1}}):n>e||0===n&&2===e?this.setState(function(){return{text:"You loose",value:B[n],plLoos:t.state.plLoos+1}}):this.setState(function(){return{text:"You win!",value:B[n],plWin:t.state.plWin+1}})}},{key:"reset",value:function(){this.setState(function(){return{text:"",value:"",plLoos:0,plWin:0}})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"stoneDiv"},c.a.createElement("div",{className:"choose",id:"#stone"},c.a.createElement("button",{onClick:function(){return e.game(0)}},c.a.createElement("img",{src:T.a,alt:"Paper"})),c.a.createElement("button",{onClick:function(){return e.game(1)}},c.a.createElement("img",{src:x.a,alt:"Scissors"})),c.a.createElement("button",{onClick:function(){return e.game(2)}},c.a.createElement("img",{src:W.a,alt:"Stone"})),c.a.createElement("div",{className:"gameInfo"},c.a.createElement("div",{className:"oponent"}," Oponent played: ",this.state.value," "),c.a.createElement("div",{className:"result"},"Result: ",this.state.text," "),c.a.createElement("div",{className:"sumResults"},c.a.createElement("div",{className:"win"},"You win ",this.state.plWin," times "),c.a.createElement("div",{className:"lost"},"Program wins ",this.state.plLoos," times")))),c.a.createElement("button",{className:"reset",onClick:function(){return e.reset()}},"Reset"))}}]),t}(r.Component),L=a(40),U=a.n(L),q=(a(62),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{class:"the-icons span3",title:"Code: 0xe800"},c.a.createElement("i",{class:"demo-icon icon-gauge"})),c.a.createElement("button",{variant:"contained",color:"primary",onClick:function(e){U()(".MyFile").trigger("click")}},"Upload post Image"),c.a.createElement("input",{type:"file",style:{display:"none"},className:"MyFile"}))}}]),t}(r.Component)),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={fromParent:Number(e.value),current:Number(e.value)},a.handleIncrement=a.handleIncrement.bind(Object(p.a)(a)),a.handleDecrement=a.handleDecrement.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.fromParent&&this.setState({fromParent:Number(e.value),current:Number(e.value)})}},{key:"handleIncrement",value:function(){this.setState({current:this.state.current+1})}},{key:"handleDecrement",value:function(){this.setState({current:this.state.current-1})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("label",null,this.state.current),c.a.createElement("button",{onClick:this.handleIncrement},"+"),c.a.createElement("button",{onClick:this.handleDecrement},"-"))}}]),t}(r.Component),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={input:null,forwardValue:null},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleClick",value:function(){this.setState({forwardValue:this.state.input})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("input",{onChange:this.handleChange,type:"number"})," ",c.a.createElement("br",null),c.a.createElement("button",{onClick:this.handleClick},"Propagate to child"),c.a.createElement("p",null,this.state.forwardValue&&c.a.createElement(K,{value:this.state.forwardValue})))}}]),t}(r.Component);var G=function(e){return c.a.createElement("div",null,c.a.createElement("p",null,"Choose number:",c.a.createElement("input",{className:"bigInput",onBlur:function(t){return e.handleInput(t.target.value)},type:"number"})))},V=(a(63),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleNumber=function(e){a.setState({value:e.currentTarget.value}),a.table=[]},a.handleInput=function(e){a.state.bigNum<e&&a.setState({bigNum:e})},a.handleInpNumber=function(e,t){a.table=Array(Number(e)).fill(c.a.createElement("div",{className:"forInput",key:t},c.a.createElement(G,{handleInput:function(e){return a.handleInput(e)},type:"number",min:"0"}),c.a.createElement("br",null)))},a.state={value:2,bigNum:0},a.table=[],a.handleNumber=a.handleNumber.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleInpNumber=a.handleInpNumber.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",{className:"pbig"},"How many numbers do you want to pass?"),c.a.createElement("input",{className:"inputNumbers",type:"number",min:"2",max:"6",onBlur:this.handleNumber,defaultValue:this.state.value}),c.a.createElement("button",{onClick:this.handleInpNumber(this.state.value)},"ok"),c.a.createElement("div",null,this.state.value>1?c.a.createElement("span",null,this.table):null),c.a.createElement("p",{className:"pbig"},"The biggest number:",this.state.bigNum))}}]),t}(r.Component)),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={date:new Date},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.updateDate.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"updateDate",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state.date.toString();return c.a.createElement("time",null,e)}}]),t}(r.Component),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={dateVis:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onButtonClick",value:function(){this.setState(function(e){return{dateVis:!e.dateVis}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{onClick:this.onButtonClick.bind(this)},"Zniknij"),this.state.dateVis&&c.a.createElement($,null))}}]),t}(r.Component),z=a(17),J=a.n(z),Y="".concat("/react_fun","/images/unknown-avatar.png"),X=function(e){return e.characters.map(function(e){var t=e.name,a=e.image,n=void 0===a?Y:a,r=e.species,s=e.gender;return c.a.createElement("div",{className:"id-card-wrapper",key:t},c.a.createElement("div",{className:"id-card"},c.a.createElement("div",{className:"profile-row"},c.a.createElement("div",{className:"profile-row__avatar"},c.a.createElement("img",{className:"avatar__image",src:n,alt:"".concat(t,"'s avatar")})),c.a.createElement("div",{className:"profile-row__desc"},c.a.createElement("h1",{className:"desc__name"},t),c.a.createElement("p",null,"Species: ",r),c.a.createElement("p",null,"Gender: ",s)))))})},Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.a.get("https://rickandmortyapi.com/api/character/").then(function(t){var a=t.data.results;e.setState({characters:a})})}},{key:"render",value:function(){return c.a.createElement(X,{characters:this.state.characters})}}]),t}(r.Component),Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.a.get("https://swapi.co/api/people").then(function(t){var a=t.data.results;e.setState({characters:a})})}},{key:"render",value:function(){return c.a.createElement(X,{characters:this.state.characters})}}]),t}(r.Component),ee=a(48),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={done:a.props.done},a.toggleDone=function(){a.setState({done:!a.state.done})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{onClick:this.toggleDone,className:this.state.done?"doneToDo":""},c.a.createElement("p",null,this.props.task.text))}}]),t}(r.Component);te.defaultProps={done:!1};var ae=te,ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:a.props.tasks,draft:""},a.updateDraft=function(e){a.setState({draft:e.target.value})},a.addToDo=function(){var e=a.state,t=e.tasks,n=e.draft,r=t;a.setState({tasks:[].concat(Object(ee.a)(r),[{text:n}])}),a.setState({draft:""})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.draft,n=this.props.title;return c.a.createElement("div",null,c.a.createElement("h1",null,n),t.map(function(e,t){return c.a.createElement(ae,{key:t,task:e})}),c.a.createElement("input",{type:"text",onChange:this.updateDraft,value:a}),c.a.createElement("button",{onClick:this.addToDo},"Add"))}}]),t}(r.Component),re=(a(80),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).myTasks=[{done:!0,text:"Be zer0 waste"},{done:!1,text:"Dream fish"}],a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(ne,{title:"my stuff",tasks:this.myTasks}))}}]),t}(r.Component)),ce=a(41),se=a(21),le=a(22);function ie(){var e=Object(se.a)(["\n    background: blue;\n    "]);return ie=function(){return e},e}function ue(){var e=Object(se.a)(["\n  background: $(props => props.theme.backgroundColor);\n  border: 5px solid $(props => props.theme.primaryColor);\n  front-size: 20px;\n  color: $(props => props.theme.primaryColor);\n\n  ","\n"]);return ue=function(){return e},e}var oe=le.b.button(ue(),function(e){return e.primary&&Object(le.a)(ie())}),me=(a(85),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"animation"},c.a.createElement("div",{className:"race"},c.a.createElement("div",{className:"credits"})))}}]),t}(r.Component)),he=(a(86),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1},a.handleWheel=function(){var e=a.state.active;a.setState({active:!e})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"switch"}),c.a.createElement("div",{className:"dark"}),c.a.createElement("div",{className:this.state.active?"circle":"circle active"}),c.a.createElement("button",{className:"wheelBtn",onClick:this.handleWheel}," Wheel the wheel "))}}]),t}(r.Component)),_e=a(12),de=a.n(_e),pe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={size:"15000%",options:{},series:[44,55,41,17,15],labels:["A","B","C","D","E"]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"myLineChart"},c.a.createElement(de.a,{type:"donut",options:this.state.options,series:this.state.series}))}}]),t}(r.Component),be=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={options:{xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"sales",data:[130,40,35,50,49,60,70,91,125]}]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"myLineChart"},c.a.createElement(de.a,{type:"line",options:this.state.options,series:this.state.series}))}}]),t}(r.Component),fe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={options:{chart:{id:"basic-bar"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"The real data",data:[30,40,45,50,49,60,70,91]}]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"mixed-chart"},c.a.createElement(de.a,{options:this.state.options,series:this.state.series,type:"bar"}))))}}]),t}(r.Component),Ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={options:{xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{name:"series-1",data:[30,40,25,50,49,21,70,51]},{name:"series-2",data:[23,12,54,61,32,56,81,19]}]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"area"},c.a.createElement(de.a,{options:this.state.options,series:this.state.series,type:"area"}))}}]),t}(r.Component),ve=(a(90),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"chartApp"},c.a.createElement("h1",{className:"info"},"Charts generated using Apexcharts"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"donutGraph"},c.a.createElement(pe,null)),c.a.createElement("div",{className:"myChart"},c.a.createElement(Ee,null)),c.a.createElement("div",{className:"barGraph"},c.a.createElement(fe,null)),c.a.createElement("div",{className:"lineGraph"},c.a.createElement(be,null)),c.a.createElement("div",{className:"close"})))}}]),t}(r.Component)),Oe=a(49);var je=function(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},c.a.createElement("div",{className:"pSquare"},e.value))},Ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){var t=a.state.squares.slice();a.calculateWinner(t)||t[e]||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext}))},a.handleReset=function(){a.setState({squares:Array(9).fill(null),xIsNext:!0})},a.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(Oe.a)(t[a],3),r=n[0],c=n[1],s=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[s])return e[r]}return null},a.state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(je,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=this.calculateWinner(this.state.squares);return e=t?"Wygrywa: "+t:"Nast\u0119pny gracz: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",null,c.a.createElement("div",{className:"status"},e),c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),c.a.createElement("button",{className:"tttButton",onClick:this.handleReset},"Reset Game"))}}]),t}(r.Component),ke=(a(91),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"tttGame"},c.a.createElement("h1",null,"Tic Tac Toe Game"),c.a.createElement(Ce,null))}}]),t}(r.Component)),ye=(a(92),function(e){var t=e.users;return t.length>0?c.a.createElement("ul",{className:"searchList"},t.map(function(e){return c.a.createElement("li",{key:e},e)})):c.a.createElement("p",null,"No results!")}),ge=["Michal","Kasia","Jacek","Marta","Tomek","Ania"],Ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={filteredUsers:ge},e.filterUsers=e.filterUsers.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"filterUsers",value:function(e){var t=e.currentTarget.value,a=this.getFilteredUsersForText(t);this.setState({filteredUsers:a})}},{key:"getFilteredUsersForText",value:function(e){return ge.filter(function(t){return t.toLowerCase().includes(e.toLowerCase())})}},{key:"render",value:function(){return c.a.createElement("div",{className:"search"},c.a.createElement("input",{onInput:this.filterUsers}),c.a.createElement(ye,{users:this.state.filteredUsers}))}}]),t}(r.Component),we=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleDarkOn=function(e){var t=a.state.dark;a.setState({dark:!t})},a.state={dark:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:this.state.dark?"Dark":"Light"},c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"MenuBar"},c.a.createElement(y,null)),c.a.createElement("div",{className:"Pages"},c.a.createElement(_.a,null,c.a.createElement(d.a,{path:"/StonePaperScissors",render:function(){return c.a.createElement(A,null)}}),c.a.createElement(d.a,{path:"/Biggest",render:function(){return c.a.createElement(V,null)}}),c.a.createElement(d.a,{path:"/RandomNumber",render:function(){return c.a.createElement(P,null)}}),c.a.createElement(d.a,{path:"/Dialog",render:function(){return c.a.createElement(F,null)}}),c.a.createElement(d.a,{path:"/HelloName",render:function(){return c.a.createElement(w,null)}}),c.a.createElement(d.a,{path:"/EvenNumber",render:function(){return c.a.createElement(N,null)}}),c.a.createElement(d.a,{path:"/FileSelector",render:function(){return c.a.createElement(q,null)}}),c.a.createElement(d.a,{path:"/Timer",render:function(){return c.a.createElement(H,null)}}),c.a.createElement(d.a,{path:"/RickAndMorthy",render:function(){return c.a.createElement(Z,null)}}),c.a.createElement(d.a,{path:"/StarWars",render:function(){return c.a.createElement(Q,null)}}),c.a.createElement(d.a,{path:"/ToDoList",render:function(){return c.a.createElement(re,null)}}),c.a.createElement(d.a,{path:"/Calc",render:function(){return c.a.createElement(ce.a,null)}}),c.a.createElement(d.a,{path:"/BWS",render:function(){return c.a.createElement(oe,null," Test Button ")}}),c.a.createElement(d.a,{path:"/Race",render:function(){return c.a.createElement(me,null)}}),c.a.createElement(d.a,{path:"/ColorWheel",render:function(){return c.a.createElement(he,null)}}),c.a.createElement(d.a,{path:"/Chart",render:function(){return c.a.createElement(ve,null)}}),c.a.createElement(d.a,{path:"/TicTacToe",render:function(){return c.a.createElement(ke,null)}}),c.a.createElement(d.a,{path:"/Search",render:function(){return c.a.createElement(Ne,null)}})),c.a.createElement("div",{className:"ciemno"},c.a.createElement("button",{onClick:this.handleDarkOn},this.state.dark?"Light":"Dark")))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.86a34cb6.chunk.js.map