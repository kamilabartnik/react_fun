import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//CSS
import './App.css';

//Pages
import Table from './Components/table';
import Name from './Components/name';
import Losowarka from './Components/losowarka';
import StonePS from './Components/StonePS';
import MenuApp from './Components/MenuApp';


function App() {
  return (
    <div className="App">
      <MenuApp />
      <Router>
        <Route
          path='/StonePaperScissors'
          render={() => {
            return (
          <StonePS />)}}
        />
        <Route
          path='/RandomNumber'
          render={() => {
            return (
              <Losowarka />)
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
      </Router>

    </div>
  );
}

export default App;
