import * as React from 'react';
import { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

//Pages
import Table from './Pages/table';
import Name from './Pages/name';
import Randomizer from './Pages/Randomizer';
import StonePS from './Pages/StonePS';
import FileSelector from './Pages/FileSelector';
import Dialog from './Pages/Dialog';
import Biggest from './Pages/Biggest';
import Timer from './Pages/Timer';
import RickAndMorthy from './Pages/RickAndMorthyCharactersCards';
import StarWars from './Pages/StarWars';
import ToDoList from './Pages/ToDoList';
import Calc from './Pages/Calc';
import Race from './Pages/Race';
import ColorWheel from './Pages/ColorWheel';
import Charts from './Pages/Charts';
import TicTacToe from './Pages/TicTacToe';
import Search from './Pages/Search';


class RouterApp extends Component {

  render() {
    return (
        <div className="app">
          <div className="pages">
            <HashRouter basename="/">
              <div>
                <Route exact path='/' component={Name} />
                <Route path='/sps' component={StonePS} />
                <Route path='/biggest' component={Biggest} />
                <Route path='/random-number' component={Randomizer} />
                <Route path='/dialog' component={Dialog} />
                <Route path='/hello-name' component={Name} />
                <Route path='/even-number' component={Table} />
                <Route path='/file-selector' component={FileSelector} />
                <Route path='/timer' component={Timer} />
                <Route path='/rick-and-morthy' component={RickAndMorthy} />
                {/* <Route path='/star-wars' component={StarWars} /> */}
                <Route path='/to-do-list' component={ToDoList} />
                <Route path='/calc' component={Calc} />
                <Route path='/race' component={Race} />
                <Route path='/color-wheel' component={ColorWheel} />
                <Route path='/chart' component={Charts} />
                <Route path='/tic-tac-toe' component={TicTacToe} />
                <Route path='/search' component={Search} />
              </div>
            </HashRouter>
        </div>
      </div>
    );
  }
}

export default RouterApp;
