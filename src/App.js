import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
    if (this.state.highScore <= this.state.score) {
      this.setState({ highScore: this.state.highScore + 1 });
    }
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore}/>
        <Jumbotron />
        <div className="container-fluid">
          <div className="row">
            {this.state.characters.map(character => (
              <GameCard
                image={character.image}
                key={character.id}
                id={character.id}
                name={character.name}
                incrementScore={this.incrementScore}
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
