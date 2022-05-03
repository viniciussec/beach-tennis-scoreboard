import React, { Component } from "react";

class Game extends Component {
  state = {};
  render() {
    return (
      <>
        <div style={{ textAlign: "right", display: "inline" }}>
          {this.props.game.count}
        </div>
        <button
          style={{ textAlign: "right", display: "inline", marginLeft: 50 }}
        >
          Escore
        </button>
      </>
    );
  }
}

export default Game;
