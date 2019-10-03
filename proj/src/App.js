import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    this.setState({dark: !currentState});
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
            <Router basename="{process.env.PUBLIC_URL}">
              <Route
                path='/react_fun/'
                render={() => {
                  return (
                    <StonePS />)
                }}
              />
              <Route
                path='/Biggest'
                render={() => {
                  return (
                    <Biggest />)
                }}
              />
              <Route
                path='/RandomNumber'
                render={() => {
                  return (
                    <Losowarka />)
                }}
              />
              <Route
                path='/Dialog'
                render={() => {
                  return (
                    <Dialog />)
                }}
              />
              <Route
                path='/HelloName'
                render={() => {
                  return (
                    <Name />)
                }}
              />
              <Route
                path='/EvenNumber'
                render={() => {
                  return (
                    <Table />)
                }}
              />
              <Route
                path='/FileSelector'
                render={() => {
                  return (
                    <FileSelector />)
                }}
              />
              <Route
                path='/Timer'
                render={() => {
                  return (
                    <Timer />)
                }}
              />
              <Route
                path='/RickAndMorthy'
                render={() => {
                  return (
                    <RickAndMorthy />)
                }}
              />
              <Route
                path='/StarWars'
                render={() => {
                  return (
                    <StarWars />)
                }}
              />
              <Route
                path='/ToDoList'
                render={() => {
                  return (
                    <ToDoList />)
                }}
              />
              <Route
                path='/Calc'
                render={() => {
                  return (
                    <Calc />)
                }}
              />
              <Route
                path='/BWS'
                render={() => {
                  return (
                    <ButtonWithStyled> Test Button </ButtonWithStyled>)
                }}
              />
              <Route
                path='/Race'
                render={() => {
                  return (
                    <Race />)
                }}
              />
              <Route
                path='/ColorWheel'
                render={() => {
                  return (
                    <ColorWheel />)
                }}
              />
              <Route
                path='/Chart'
                render={() => {
                  return (
                    <Charts />)
                }}
              />
              <Route
                path='/TicTacToe'
                render={() => {
                  return (
                    <TicTacToe />)
                }}
              />
              <Route
                path='/Search'
                render={() => {
                  return (
                    <Search />)
                }}
              />
            </Router>
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
