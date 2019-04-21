import React, { Component } from 'react';
import './App.css';
import GameCard from "./components/GameCard";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters
  }

  render() {
    return (
      <div>
        <h1 className="font-italic">I'm a test</h1>
        {this.state.characters.map(character => (
          <GameCard
          image={character.image}
          key={character.id}
          id={character.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
