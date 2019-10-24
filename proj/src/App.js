import * as React from 'react';
import { Component } from 'react';

//CSS
import './css/App.scss';

//Menu
import NavBar from './Components/NavBar';
import RouterApp from './Components/RouterApp';


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

      <div className={this.state.dark ? 'dark' : 'light'}>

        <div className="app">
          <div className="menu-bar">
            <NavBar />
          </div>
          <div className="pages">
            <RouterApp />
            <div className="darkness">
              <button onClick={this.handleDarkOn}>{this.state.dark ? 'Light' : 'Dark'}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
