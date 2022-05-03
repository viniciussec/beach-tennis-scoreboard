import React, { Component } from "react";
import Set from "./set";

class Match extends Component {
  state = {
    title: "Open DC de Beach Tennis",
    // Placeholder temporario para o timer:
    timer: "00:00:00",
    names: ["Fernando Trinta/Lincoln Rocha", "João Paulo Pordeus/Paulo Rêgo"],

    set1: [{ count: 0 }, { count: 0 }],

    set2: [{ count: 0 }, { count: 0 }],

    game: [{ count: 15 }, { count: 30 }],

    secondSet: 1,
    winCondition: 0,
  };

  // handleScoredPoint();
  // handleGameWin();
  // handleSetWin();
  // handleMatchWin();
  // resetWinCondition();

  render() {
    const inLineL = { textAlign: "right", display: "inline" };
    return (
      <>
        <p>
          <div style={inLineL}>{this.state.title}</div>
          <div
            style={{ textAlign: "right", marginLeft: 500, display: "inline" }}
          >
            {this.state.timer}
          </div>
        </p>
        <div style={inLineL}>{this.state.names[0]}</div>
        <Set
          set1={this.state.set1[0]}
          set2={this.state.set2[0]}
          secondSet={this.state.secondSet}
          game={this.state.game[0]}
        />
        <p></p>
        <div style={inLineL}>{this.state.names[1]}</div>
        <Set
          set1={this.state.set1[1]}
          set2={this.state.set2[1]}
          secondSet={this.state.secondSet}
          game={this.state.game[1]}
        />
      </>
    );
  }
}

export default Match;
