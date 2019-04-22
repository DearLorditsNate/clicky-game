import React from "react";
import "./style.css";

function Navbar() {
    return (
      <header className="d-flex">
        <nav className="navbar navbar-expand-md navbar-light fixed-top nav-theme navbar-header row bg-info text-center justify-content-around text-white">
          <div className="col-4">
            <h2 className="col"><a href="/">Clicky Game</a></h2>
          </div>
          <div className="col-4">
            <h2 className="col">Click and image to begin!</h2>
          </div>
          <div className="col-4">
            <h2 className="col">Score: <span>0</span> | Top Score: <span>0</span></h2>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;