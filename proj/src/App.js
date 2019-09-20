import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

//themes
// import LightTheme from './Components/common/theme/light';
// import DarkTheme from './Components/common/theme/dark';

//CSS
import './css/App.css';

//Pages
import Table from './Components/Pages/table';
import Name from './Components/Pages/name';
import Losowarka from './Components/Pages/losowarka';
import StonePS from './Components/Pages/StonePS';
import MenuApp from './Components/MenuApp';
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


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Light',
      dark: false
    };

  }

  handleDarkOn = (e) => {
    this.state.dark ?
      this.setState({ dark: false, text: 'Dark' })
      : this.setState({ dark: true, text: 'Light' });
  }

  render() {
    return (
      // <ThemeProvider theme={LightTheme} >
      <div className={this.state.text}>
        <div className="App">
          <div className="MenuBar">
            <MenuApp />
          </div>
          <div className="Pages">
            <Router>
              <Route
                path='/StonePaperScissors'
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
            </Router>
            <div className="ciemno">
              <button onClick={this.handleDarkOn}>{this.state.text}</button>
            </div>
          </div>

        </div>
      </div>
      // </ThemeProvider>
    );
  }
}

export default App;
