import React, { Component } from 'react';
import './App.css';

import HeroDisplayer from './HeroDisplayer';
import SearchInput from './SearchInput';
import filterHeroes from './filterHeroes.js';
import heroAbilities from './assets/heroAbilities.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredHeroList: filterHeroes("")
    }
  }

  handleSearchChange = event => {
    this.setState({
      filteredHeroList: filterHeroes(event.target.value)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">huehuehue</div>
        <SearchInput textChange={this.handleSearchChange}/>
        <HeroDisplayer heroList={this.state.filteredHeroList} abilityList={heroAbilities}/>
      </div>
    );
  }
}

export default App;
