import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import characters from "./characters.json";

class App extends Component {
  state = {
    score: 0,
    highScore: 0
  };

  // Use Fisher-Yates Shuffle to randomize array output
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
    if (this.state.highScore <= this.state.score) {
      this.setState({ highScore: this.state.highScore + 1 });
    }
  };

  resetGame = () => {
    this.setState({ score: 0 });
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron />
        <div className="container-fluid">
          <div className="row">
            {this.shuffle(characters).map(character => (
              <GameCard
                image={character.image}
                key={character.id}
                id={character.id}
                name={character.name}
                incrementScore={this.incrementScore}
                resetGame={this.resetGame}
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
