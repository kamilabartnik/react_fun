(window.webpackJsonpexercises=window.webpackJsonpexercises||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/paper.128c2852.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/scissors.ea9b959e.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/stone.b59b38c8.jpg"},37:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(73),_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_css_Pages_calc_css__WEBPACK_IMPORTED_MODULE_6__),_Items_CalcButton__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(38),Calc=function(_Component){function Calc(props){var _this;return Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calc),_this=Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calc).call(this,props)),_this.reset=function(){_this.setState({current:"0",previous:[],nextIsReset:!1})},_this.addToCurrent=function(e){if(["/","-","+","*"].indexOf(e)>-1){var t=_this.state.previous;t.push(_this.state.current+e),_this.setState({previous:t,nextIsReset:!0})}else"0"===_this.state.current&&"."!==e||_this.state.nextIsReset?_this.setState({current:e,nextIsReset:!1}):_this.setState({current:_this.state.current+e})},_this.calculate=function(){var _this$state=_this.state,current=_this$state.current,previous=_this$state.previous;previous.length>0&&(current=eval(String(previous[previous.length-1]+current)),_this.setState({current:current,previous:[],nextIsReset:!0}))},_this.state={current:"0",previous:[],nextIsReset:!1},_this}return Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calc,_Component),Object(_home_kamila_Programowanie_react_react_fun_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calc,[{key:"render",value:function(){var e=[{symbol:"C",cols:3,action:this.reset},{symbol:"/",cols:1,action:this.addToCurrent},{symbol:"7",cols:1,action:this.addToCurrent},{symbol:"8",cols:1,action:this.addToCurrent},{symbol:"9",cols:1,action:this.addToCurrent},{symbol:"*",cols:1,action:this.addToCurrent},{symbol:"4",cols:1,action:this.addToCurrent},{symbol:"5",cols:1,action:this.addToCurrent},{symbol:"6",cols:1,action:this.addToCurrent},{symbol:"-",cols:1,action:this.addToCurrent},{symbol:"3",cols:1,action:this.addToCurrent},{symbol:"2",cols:1,action:this.addToCurrent},{symbol:"1",cols:1,action:this.addToCurrent},{symbol:"+",cols:1,action:this.addToCurrent},{symbol:"0",cols:2,action:this.addToCurrent},{symbol:".",cols:1,action:this.addToCurrent},{symbol:"=",cols:1,action:this.calculate}];return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"application"},this.state.previous.length>0?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"floaty-last"},this.state.previous[this.state.previous.length-1]):null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"input-calc"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{className:"result",type:"text",value:this.state.current})),e.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Items_CalcButton__WEBPACK_IMPORTED_MODULE_7__.a,{key:t,symbol:e.symbol,cols:e.cols,action:function(t){return e.action(t)}})}))}}]),Calc}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calc},38:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(4),s=a(3),i=a(5),l=a(0),o=a.n(l),u=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"column-".concat(this.props.cols)},o.a.createElement("button",{className:"calc-button",onClick:function(){return e.props.action(e.props.symbol)}},this.props.symbol))}}]),t}(l.Component);t.a=u},44:function(e,t,a){e.exports=a(86)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(32),i=a.n(s),l=(a(49),a(1)),o=a(2),u=a(4),m=a(3),h=a(5),_=a(39),d=a(13),p=(a(50),a(51),a(6)),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{className:"menu-text","data-toggle":"modal",href:this.props.href},c.a.createElement("div",null,c.a.createElement("li",null,this.props.title,"      ")))}}]),t}(r.Component),f=[{title:'"Hello!"',href:"/react_fun/#/HelloName#/"},{title:"Select a file",href:"/react_fun/#/FileSelector#"},{title:"Family Dialog",href:"/react_fun/#/Dialog#"},{title:"Timer",href:"/react_fun/#/Timer#"}],E=[{title:"Biggest",href:"/react_fun/#/Biggest"},{title:"Do do list",href:"/react_fun/#/ToDoList"},{title:"Calc",href:"/react_fun/#/Calc"},{title:"Chart Animation",href:"/react_fun/#/Chart"},{title:"Search",href:"/react_fun/#/Search"}],v=[{title:"Play Stone Paper Scissors",href:"/react_fun/#/SPS"},{title:"Tic Tac Toe",href:"/react_fun/#/TicTacToe"}],O=[{title:"Race",href:"/react_fun/#/Race"},{title:"Color Wheel",href:"/react_fun/#/ColorWheel"}],j=[{title:"Rick and Morthy",href:"/react_fun/#/RickAndMorthy"},{title:"StarWars",href:"/react_fun/#/StarWars"}],y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={displayMenu:!1,show:!1,menus:"menuBasic"===a.props.menu?a.menus=f:"menuReactFun"===a.props.menu?a.menus=E:"menuGames"===a.props.menu?a.menus=v:"menuCSS"===a.props.menu?a.menus=O:a.menus=j},a.showDropdownMenu=a.showDropdownMenu.bind(Object(p.a)(a)),a.hideDropdownMenu=a.hideDropdownMenu.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"dropdown"},c.a.createElement("div",null,c.a.createElement("div",{className:"button-drop",onClick:this.showDropdownMenu}," ",this.props.title," "),c.a.createElement("ul",null,this.state.displayMenu?this.state.menus.map(function(e,t){return c.a.createElement(b,Object.assign({key:t},e))}):null)))}}]),t}(c.a.Component),k=[{menu:"menuBasic",title:"Basic"},{menu:"menuReactFun",title:"React Fun"},{menu:"menuApi",title:"API Fun"},{menu:"menuGames",title:"Games"},{menu:"menuCSS",title:"CSS Fun"}],C=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"menu-block"},k.map(function(e,t){return c.a.createElement("div",{key:t,className:"nav"},c.a.createElement(y,e))}))}}]),t}(r.Component),g=[2,5,7,10,34,16,9,1],w=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,g.map(function(e,t){return c.a.createElement("div",null,e%2===0?c.a.createElement("li",{key:t},e):null)}))}}]),t}(r.Component),N=(a(52),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleClick=function(){a.setState({value:""})},a.state={value:"..."},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"name"},c.a.createElement("label",null,c.a.createElement("input",{id:"input-name",type:"text",value:this.state.value,onChange:this.handleChange,onClick:this.handleClick})),c.a.createElement("br",null),c.a.createElement("span",{id:"hello"},"Hello ",this.state.value),c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Kr\xf3tkim s\u0142\xf3wkiem wst\u0119pu: stronka z\u0142o\u017cy\u0142am z rzeczy, kt\xf3rych si\u0119 uczy\u0142am w mi\u0119dzyczasie, tak\u017ce jest lekko bez sensu, ale posiada ju\u017c pewne cechy, kt\xf3re s\u0105 s\u0142abe i mo\u017ce z luzem wytkn\u0105\u0107 :D Za wszelkie uwagi jestem bardzo wdzi\u0119czna."),c.a.createElement("h3",null,"Basic to mega proste rzeczy :)",c.a.createElement("br",null),"API Fun to tylko \u015bci\u0105gni\u0119cie API :)",c.a.createElement("br",null),"CSS Fun jest zabaw\u0105 w CSS i te\u017c nie ma \u017cadnego przes\u0142ania ;D")))}}]),t}(r.Component)),D=["John","Bill","Emma","Stella","Rob"],P=Math.round(4*Math.random()),S=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,D[P])}}]),t}(r.Component),M=a(33),T=a.n(M),I=a(34),x=a.n(I),W=a(35),R=a.n(W),A=(a(53),["Paper","Scissors","Stone"]),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={text:"",value:"",plWin:0,plLoos:0},a.game=a.game.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"game",value:function(e){var t=this;(n=Math.round(2*Math.random()))===e?this.setState(function(){return{text:"It's a draw",value:A[n]}}):2===n&&0===e?this.setState(function(){return{text:"You win!",value:A[n],plWin:t.state.plWin+1}}):n>e||0===n&&2===e?this.setState(function(){return{text:"You loose",value:A[n],plLoos:t.state.plLoos+1}}):this.setState(function(){return{text:"You win!",value:A[n],plWin:t.state.plWin+1}})}},{key:"reset",value:function(){this.setState(function(){return{text:"",value:"",plLoos:0,plWin:0}})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"stone-div"},c.a.createElement("div",{className:"choose"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{onClick:function(){return e.game(0)},src:T.a,alt:"Paper"}),c.a.createElement("img",{onClick:function(){return e.game(1)},src:x.a,alt:"Scissors"}),c.a.createElement("img",{onClick:function(){return e.game(2)},src:R.a,alt:"Stone"})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",{className:"oponent"}," Oponent played: ",this.state.value," "),c.a.createElement("div",{className:"result"},"Result: ",this.state.text," "),c.a.createElement("div",{className:"sum-results"},c.a.createElement("div",{className:"win"},"You win ",this.state.plWin," times "),c.a.createElement("div",{className:"lost"},"Program wins ",this.state.plLoos," times")))),c.a.createElement("button",{className:"reset",onClick:function(){return e.reset()}},"Reset"))}}]),t}(r.Component),z=a(36),L=a.n(z),U=(a(54),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{class:"the-icons span3",title:"Code: 0xe800"},c.a.createElement("i",{class:"demo-icon icon-gauge"})),c.a.createElement("button",{variant:"contained",color:"primary",onClick:function(e){L()(".MyFile").trigger("click")}},"Upload post Image"),c.a.createElement("input",{type:"file",style:{display:"none"},className:"my-file"}),c.a.createElement("div",null,c.a.createElement("h2",null," W tym momencie jest to jedynie mo\u017cliwo\u015b\u0107 ",c.a.createElement("br",null)," wy\u015bwietlenia okna wyboru plik\xf3w")))}}]),t}(r.Component)),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={fromParent:Number(e.value),current:Number(e.value)},a.handleIncrement=a.handleIncrement.bind(Object(p.a)(a)),a.handleDecrement=a.handleDecrement.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.fromParent&&this.setState({fromParent:Number(e.value),current:Number(e.value)})}},{key:"handleIncrement",value:function(){this.setState({current:this.state.current+1})}},{key:"handleDecrement",value:function(){this.setState({current:this.state.current-1})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("label",null,this.state.current),c.a.createElement("button",{onClick:this.handleIncrement},"+"),c.a.createElement("button",{onClick:this.handleDecrement},"-"))}}]),t}(r.Component),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={input:null,forwardValue:null},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleClick",value:function(){this.setState({forwardValue:this.state.input})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Proste przekazywanie danych rodzic - dziecko",c.a.createElement("br",null)," i manipulacja liczb\u0105 z poziomu dziecka"),c.a.createElement("input",{onChange:this.handleChange,type:"number"})," ",c.a.createElement("br",null),c.a.createElement("button",{onClick:this.handleClick},"Propagate to child"),c.a.createElement("p",null,this.state.forwardValue&&c.a.createElement(q,{value:this.state.forwardValue})))}}]),t}(r.Component);var F=function(e){return c.a.createElement("div",null,c.a.createElement("p",null,"Choose number:",c.a.createElement("input",{className:"big-input",onBlur:function(t){return e.handleInput(t.target.value)},type:"number"})))},V=(a(55),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleNumber=function(e){a.setState({value:e.currentTarget.value}),a.table=[]},a.handleInput=function(e){a.state.bigNum<e&&a.setState({bigNum:e})},a.handleInpNumber=function(e,t){a.table=Array(Number(e)).fill(c.a.createElement("div",{className:"forInput",key:t},c.a.createElement(F,{handleInput:function(e){return a.handleInput(e)},type:"number",min:"0"}),c.a.createElement("br",null)))},a.state={value:2,bigNum:0},a.table=[],a.handleNumber=a.handleNumber.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleInpNumber=a.handleInpNumber.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,'Tu jest jeszcze "troch\u0119" roboty.',c.a.createElement("br",null),"W tym momencie mo\u017cna modyfikowa\u0107 liczb\u0119 input\xf3w ",c.a.createElement("br",null),"i natychmiast z puli uzupe\u0142nionych wy\u015bwietla si\u0119 najwy\u017csza"),c.a.createElement("p",{className:"pbig"},"How many numbers do you want to pass?"),c.a.createElement("input",{className:"input-numbers",type:"number",min:"2",max:"6",onBlur:this.handleNumber,defaultValue:this.state.value}),c.a.createElement("button",{onClick:this.handleInpNumber(this.state.value)},"ok"),c.a.createElement("div",null,this.state.value>1?c.a.createElement("span",null,this.table):null),c.a.createElement("p",{className:"pbig"},"The biggest number:",this.state.bigNum))}}]),t}(r.Component)),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={date:new Date},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.updateDate.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"updateDate",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e="  Time now: "+this.state.date.getHours()+":"+this.state.date.getMinutes()+":"+this.state.date.getSeconds()+"  "+this.state.date.getDate()+"/"+this.state.date.getMonth()+"/"+this.state.date.getFullYear();return c.a.createElement("time",null,e)}}]),t}(r.Component),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={dateVis:!0,text:!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"onButtonClick",value:function(){this.setState(function(e){return{dateVis:!e.dateVis,text:!e.text}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{onClick:this.onButtonClick.bind(this)},this.state.text?"Zniknij":"Poka\u017c"),this.state.dateVis&&c.a.createElement(G,null))}}]),t}(r.Component),Y=a(16),J=a.n(Y),$="".concat("/react_fun","/images/unknown-avatar.png"),X=function(e){return e.characters.map(function(e){var t=e.name,a=e.image,n=void 0===a?$:a,r=e.species,s=e.gender;return c.a.createElement("div",{className:"id-card-wrapper",key:t},c.a.createElement("div",{className:"id-card"},c.a.createElement("div",{className:"profile-row"},c.a.createElement("div",{className:"profile-row__avatar"},c.a.createElement("img",{className:"avatar__image",src:n,alt:"".concat(t,"'s avatar")})),c.a.createElement("div",{className:"profile-row__desc"},c.a.createElement("h1",{className:"desc__name"},t),c.a.createElement("p",null,"Species: ",r),c.a.createElement("p",null,"Gender: ",s)))))})},Z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.a.get("https://rickandmortyapi.com/api/character/").then(function(t){var a=t.data.results;e.setState({characters:a})})}},{key:"render",value:function(){return c.a.createElement(X,{characters:this.state.characters})}}]),t}(r.Component),Q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.a.get("https://swapi.co/api/people").then(function(t){var a=t.data.results;e.setState({characters:a})})}},{key:"render",value:function(){return c.a.createElement(X,{characters:this.state.characters})}}]),t}(r.Component),ee=a(42),te=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={done:a.props.done},a.toggleDone=function(){a.setState({done:!a.state.done})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{onClick:this.toggleDone,className:this.state.done?"done-to-do":""},c.a.createElement("p",null,this.props.task.text))}}]),t}(r.Component);te.defaultProps={done:!1};var ae=te,ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:a.props.tasks,draft:""},a.updateDraft=function(e){a.setState({draft:e.target.value})},a.addToDo=function(){var e=a.state,t=e.tasks,n=e.draft,r=t;a.setState({tasks:[].concat(Object(ee.a)(r),[{text:n}])}),a.setState({draft:""})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.draft,n=this.props.title;return c.a.createElement("div",null,c.a.createElement("h1",null,n),t.map(function(e,t){return c.a.createElement(ae,{key:t,task:e})}),c.a.createElement("input",{type:"text",onChange:this.updateDraft,value:a}),c.a.createElement("button",{onClick:this.addToDo},"Add"))}}]),t}(r.Component),re=(a(72),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).myTasks=[{done:!0,text:"Be zer0 waste"},{done:!1,text:"Dream fish"}],a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(ne,{title:"my stuff",tasks:this.myTasks}),c.a.createElement("h2",null,"Mamy mo\u017cliwo\u015b\u0107 dopisywania kolejnych pozycji oraz skre\u015blania ich"))}}]),t}(r.Component)),ce=a(37),se=(a(74),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Which is the fastest one?"),c.a.createElement("div",{className:"animation"},c.a.createElement("div",{className:"race"},c.a.createElement("div",{className:"credits"}))))}}]),t}(r.Component)),ie=(a(75),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1},a.handleWheel=function(){var e=a.state.active;a.setState({active:!e})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"switch"}),c.a.createElement("div",{className:"dark"}),c.a.createElement("div",{className:this.state.active?"circle":"circle active"}),c.a.createElement("button",{className:"wheel-btn",onClick:this.handleWheel}," Wheel the wheel "))}}]),t}(r.Component)),le=a(12),oe=a.n(le),ue=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={size:"15000%",options:{},series:[44,55,41,17,15],labels:["A","B","C","D","E"]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"my-line-chart"},c.a.createElement(oe.a,{type:"donut",options:this.state.options,series:this.state.series}))}}]),t}(r.Component),me=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={options:{xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"sales",data:[130,40,35,50,49,60,70,91,125]}]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"my-line-chart"},c.a.createElement(oe.a,{type:"line",options:this.state.options,series:this.state.series}))}}]),t}(r.Component),he=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={options:{chart:{id:"basic-bar"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"The real data",data:[30,40,45,50,49,60,70,91]}]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"mixed-chart"},c.a.createElement(oe.a,{options:this.state.options,series:this.state.series,type:"bar"}))))}}]),t}(r.Component),_e=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={options:{xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{name:"series-1",data:[30,40,25,50,49,21,70,51]},{name:"series-2",data:[23,12,54,61,32,56,81,19]}]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"area"},c.a.createElement(oe.a,{options:this.state.options,series:this.state.series,type:"area"}))}}]),t}(r.Component),de=(a(81),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"chart-app"},c.a.createElement("h1",{className:"info"},"Charts generated using Apexcharts"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"donut-graph"},c.a.createElement(ue,null)),c.a.createElement("div",{className:"my-chart"},c.a.createElement(_e,null)),c.a.createElement("div",{className:"bar-graph"},c.a.createElement(he,null)),c.a.createElement("div",{className:"line-graph"},c.a.createElement(me,null)),c.a.createElement("div",{className:"close"})))}}]),t}(r.Component)),pe=a(43);var be=function(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){var t=a.state.squares.slice();a.calculateWinner(t)||t[e]||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext}))},a.handleReset=function(){a.setState({squares:Array(9).fill(null),xIsNext:!0})},a.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(pe.a)(t[a],3),r=n[0],c=n[1],s=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[s])return e[r]}return null},a.state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(be,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=this.calculateWinner(this.state.squares);return e=t?"Wygrywa: "+t:"Nast\u0119pny gracz: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",null,c.a.createElement("div",{className:"status"},e),c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),c.a.createElement("button",{className:"ttt-button",onClick:this.handleReset},"Reset Game"))}}]),t}(r.Component),Ee=(a(82),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"ttt-game"},c.a.createElement("h1",null,"Tic Tac Toe Game"),c.a.createElement(fe,null))}}]),t}(r.Component)),ve=(a(83),function(e){var t=e.users;return t?c.a.createElement("ul",{className:"search-list"},t.map(function(e){return c.a.createElement("li",{key:e},e)})):c.a.createElement("p",null,"No results!")}),Oe=["Michal","Kasia","Jacek","Marta","Tomek","Ania"],je=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={filteredUsers:Oe},e.filterUsers=e.filterUsers.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"filterUsers",value:function(e){var t=e.currentTarget.value,a=this.getFilteredUsersForText(t);this.setState({filteredUsers:a})}},{key:"getFilteredUsersForText",value:function(e){return Oe.filter(function(t){return t.toLowerCase().includes(e.toLowerCase())})}},{key:"render",value:function(){return c.a.createElement("div",{className:"search"},c.a.createElement("h2",null,"Przy wpisywaniu znak\xf3w do inputa",c.a.createElement("br",null)," zostaj\u0105 jedynie posiadaj\u0105ce te znaki imiona"),c.a.createElement("div",null,c.a.createElement("input",{onInput:this.filterUsers})),c.a.createElement("div",{className:"search-user"},c.a.createElement(ve,{users:this.state.filteredUsers})))}}]),t}(r.Component),ye=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleDarkOn=function(e){var t=a.state.dark;a.setState({dark:!t})},a.state={dark:!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:this.state.dark?"dark":"light"},c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"menu-bar"},c.a.createElement(C,null)),c.a.createElement("div",{className:"pages"},c.a.createElement(_.a,{basename:"/"},c.a.createElement("div",null,c.a.createElement(d.a,{exact:!0,path:"/",component:N}),c.a.createElement(d.a,{path:"/SPS",component:B}),c.a.createElement(d.a,{path:"/Biggest",component:V}),c.a.createElement(d.a,{path:"/RandomNumber",component:S}),c.a.createElement(d.a,{path:"/Dialog",component:K}),c.a.createElement(d.a,{path:"/HelloName",component:N}),c.a.createElement(d.a,{path:"/EvenNumber",component:w}),c.a.createElement(d.a,{path:"/FileSelector",component:U}),c.a.createElement(d.a,{path:"/Timer",component:H}),c.a.createElement(d.a,{path:"/RickAndMorthy",component:Z}),c.a.createElement(d.a,{path:"/StarWars",component:Q}),c.a.createElement(d.a,{path:"/ToDoList",component:re}),c.a.createElement(d.a,{path:"/Calc",component:ce.a}),c.a.createElement(d.a,{path:"/Race",component:se}),c.a.createElement(d.a,{path:"/ColorWheel",component:ie}),c.a.createElement(d.a,{path:"/Chart",component:de}),c.a.createElement(d.a,{path:"/TicTacToe",component:Ee}),c.a.createElement(d.a,{path:"/Search",component:je}))),c.a.createElement("div",{className:"darkness"},c.a.createElement("button",{onClick:this.handleDarkOn},this.state.dark?"Light":"Dark")))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.38e0a919.chunk.js.map