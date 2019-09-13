import React, { Component } from 'react';
import axios from 'axios';
import CharacterCards from './Items/CharactersCards'

const API_URL = 'https://swapi.co/api/people';

class StarWars extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios.get(API_URL).then(({ data: { results } }) => {
      this.setState({ characters: results });
    });
  }


  render() {
    return <CharacterCards characters={this.state.characters} />;
  }
}

export default StarWars;