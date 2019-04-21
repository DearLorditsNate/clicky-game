import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container-fluid">
          <div className="row">
            {this.state.characters.map(character => (
              <GameCard
                image={character.image}
                key={character.id}
                id={character.id}
                name={character.name}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
