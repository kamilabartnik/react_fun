import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HashRouter, Route, Link } from "react-router-dom";
// import { ThemeProvider } from 'styled-components';

//themes
// import LightTheme from './Components/common/theme/light';
// import DarkTheme from './Components/common/theme/dark';

//CSS
import './css/App.css';

//Menu
import NavBar from './Components/NavBar';

//Pages
import Table from './Components/Pages/table';
import Name from './Components/Pages/name';
import Losowarka from './Components/Pages/losowarka';
import StonePS from './Components/Pages/StonePS';
import FileSelector from './Components/Pages/FileSelector';
import Dialog from './Components/Pages/Dialog';
import Biggest from './Components/Pages/Biggest';
import Timer from './Components/Pages/Timer';
import RickAndMorthy from './Components/Pages/RickAndMorthyCharactersCards';
import StarWars from './Components/Pages/StarWars';
import ToDoList from './Components/Pages/ToDoList';
import Calc from './Components/Pages/Calc';
import ButtonWithStyled from './Components/common/Button';
import Race from './Components/Pages/Race';
import ColorWheel from './Components/Pages/ColorWheel';
import Charts from './Components/Pages/Charts';
import TicTacToe from './Components/Pages/TicTacToe';
import Search from './Components/Pages/Search';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: true
    };

  }

  handleDarkOn = (e) => {
    const currentState = this.state.dark;
    this.setState({ dark: !currentState });
  }

  render() {
    return (
      // <ThemeProvider theme={LightTheme} >

      <div className={this.state.dark ? 'Dark' : 'Light'}>

        <div className="App">
          <div className="MenuBar">

            <NavBar />
          </div>
          <div className="Pages">
            <HashRouter basename="/">
              <div>
                <Route exact path='/' component={Name} />
                <Route path='/SPS' component={StonePS} />
                <Route path='/Biggest' component={Biggest} />
                <Route path='/RandomNumber' component={Losowarka} />
                <Route path='/Dialog' component={Dialog} />
                <Route path='/HelloName' component={Name} />
                <Route path='/EvenNumber' component={Table} />
                <Route path='/FileSelector' component={FileSelector} />
                <Route path='/Timer' component={Timer} />
                <Route path='/RickAndMorthy' component={RickAndMorthy} />
                <Route path='/StarWars' component={StarWars} />
                <Route path='/ToDoList' component={ToDoList} />
                <Route path='/Calc' component={Calc} />
                <Route path='/BWS' component={ButtonWithStyled} />
                <Route path='/Race' component={Race} />
                <Route path='/ColorWheel' component={ColorWheel} />
                <Route path='/Chart' component={Charts} />
                <Route path='/TicTacToe' component={TicTacToe} />
                <Route path='/Search' component={Search} />
              </div>
            </HashRouter>
            <div className="ciemno">
              <button onClick={this.handleDarkOn}>{this.state.dark ? 'Light' : 'Dark'}</button>
            </div>
          </div>
        </div>
      </div>
      // </ThemeProvider>
    );
  }
}

export default App;
