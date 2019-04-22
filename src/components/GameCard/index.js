import React, { Component } from "react";
// import ScoreCounter from "../ScoreCounter";
import "./style.css";

class GameCard extends Component {
    state = {
        clicked: false
    }

    isClicked = (clicked) => {
        if (clicked) {
            alert("You lose!");
        } else {
            this.setState({clicked: true});
            // Increment score
            this.props.incrementScore();
        }
    }

    render() {
        return (
        <div className="col-6 col-sm-4 col-md-3 m-auto" onClick={() => {this.isClicked(this.state.clicked)}}>
            <img
            className="card"
            alt={this.props.name}
            src={this.props.image}
            id={this.props.id}
            />
        </div>
        );
    }
}

export default GameCard;