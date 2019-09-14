import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//CSS
import './App.css';

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


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Light',
      dark: false
    };

  }

  handleDarkOn = (e) => {
    this.setState({ dark: true, text: 'Light' });
  }
  handleDarkOff = (e) => {
    this.setState({ dark: false, text: 'Dark' });
  }


  render() {
    return (
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
            </Router>
            <div className="ciemno">
              <button onClick={this.state.dark ?
                this.handleDarkOff
                : this.handleDarkOn}>{this.state.text}</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
