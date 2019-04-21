import React, { Component } from "react";
import "./style.css";

function GameCard(props) {
    return (
        <div>
            <img src={props.image} />
        </div>
    );
}

export default GameCard;