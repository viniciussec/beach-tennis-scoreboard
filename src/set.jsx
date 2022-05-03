import React, { Component } from "react";
import Game from "./game";

class Set extends Component {
  state = {};
  render() {
    return (
      // A pontuação do segundo set só será exibida se o segundo set já tiver sido iniciado (checado via variavel secondSet).
      <>
        <div style={{ textAlign: "left", display: "inline", marginLeft: 50 }}>
          {this.props.secondSet === 1 && this.props.set2.count}
        </div>
        <div style={{ textAlign: "left", display: "inline", marginLeft: 50 }}>
          {this.props.set1.count}
        </div>
        <div style={{ textAlign: "left", display: "inline", marginLeft: 50 }}>
          <Game
            style={{ textAlign: "left", display: "inline", marginLeft: 50 }}
            game={this.props.game}
          />
        </div>
      </>
    );
  }
}

export default Set;
