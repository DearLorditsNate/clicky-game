import React, { Component } from "react";
import "./style.css";

class GameCard extends Component {
    state = {
        clicked: false
    }

    render() {
        return (
        <div className="col-6 col-sm-4 col-md-3 m-auto" onClick={() => {this.setState({clicked: true})}}>
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