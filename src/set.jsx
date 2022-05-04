import React, { Component } from "react";
import Game from "./game";

class Set extends Component {
  state = {};
  render() {
    return (
      // A pontuação do segundo set só será exibida se o segundo set já tiver sido iniciado (checado via variavel currentSet).
      <>
        <div style={{ textAlign: "left", display: "inline", marginLeft: 50 }}>
          {this.props.currentSet >= 1 &&
            this.props.setGames[0][this.props.id].count}
        </div>
        <div style={{ textAlign: "left", display: "inline", marginLeft: 50 }}>
          {this.props.currentSet >= 2 &&
            this.props.setGames[1][this.props.id].count}
        </div>

        <div style={{ textAlign: "left", display: "inline", marginLeft: 50 }}>
          <Game
            style={{ textAlign: "left", display: "inline", marginLeft: 50 }}
            game={this.props.game}
            onScore={this.props.onScore}
            gameOver={this.props.gameOver}
            id={this.props.id}
            winner={this.props.winner}
          />
        </div>
      </>
    );
  }
}

export default Set;
