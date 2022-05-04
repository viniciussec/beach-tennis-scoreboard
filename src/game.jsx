import React, { Component } from "react";

class Game extends Component {
  state = {};

  render() {
    let elem;
    if (!this.props.gameOver) {
      elem = (
        <button
          className="p-2 text-white bg-blue-600 rounded-md"
          style={{ textAlign: "right", display: "inline", marginLeft: 50 }}
          onClick={() => {
            this.props.onScore(this.props.game.id);
          }}
        >
          Pontuar
        </button>
      );
    } else {
      if (this.props.winner.id === this.props.id)
        elem = (
          <button
            className="p-2 text-white bg-green-600 rounded-md"
            style={{ textAlign: "right", display: "inline", marginLeft: 50 }}
          >
            Vencedor
          </button>
        );
      else elem = <span></span>;
    }
    return (
      <>
        <div style={{ textAlign: "right", display: "inline" }}>
          {this.props.game.count}
        </div>
        {elem}
      </>
    );
  }
}

export default Game;
