import React, { Component } from "react";
import Game from "./game";

class Set extends Component {
  state = {};
  render() {
    return (
      // A pontuação do segundo set só será exibida se o segundo set já tiver sido iniciado (checado via variavel currentSet).
      <div className="flex items-center justify-around">
        {this.props.currentSet >= 1 && (
          <div className="mx-4">
            {this.props.setGames[0][this.props.id].count}
          </div>
        )}
        {this.props.currentSet >= 2 && (
          <div className="mx-4">
            {this.props.setGames[1][this.props.id].count}
          </div>
        )}

        <Game
          game={this.props.game}
          onScore={this.props.onScore}
          gameOver={this.props.gameOver}
          id={this.props.id}
          winner={this.props.winner}
        />
      </div>
    );
  }
}

export default Set;
