import React, { Component } from "react";
import Set from "./set";

class Match extends Component {
  state = {
    title: "Open DC de Beach Tennis",
    // Placeholder temporario para o timer:
    timer: "00:00:00",
    names: [
      "Fernando Trinta / Lincoln Rocha",
      "João Paulo Pordeus / Paulo Rêgo",
    ],

    // Placar dos Sets
    setScore: [{ count: 0 }, { count: 0 }],

    // Estado dos games de cada set
    setGames: [
      [{ count: 0 }, { count: 0 }],
      [{ count: 0 }, { count: 0 }],
      [{ count: 0 }, { count: 0 }],
    ],

    // Placar do game atual
    game: [
      { id: 0, count: 0 },
      { id: 1, count: 0 },
    ],

    currentSet: 1,
    addValue: 15,
    pointsAheadNeeded: 15,
    targetPoints: 45,
    tieBreak: false,
    superTieBreak: false,
    gameOver: false,
    winner: { name: "", id: -1 },
  };

  resetGame = () => {
    const game = [...this.state.game];
    game[0].count = 0;
    game[1].count = 0;
    this.setState({ game });
  };

  handleScoredPoint = (id) => {
    if (this.state.gameOver) {
      void 0;
    }
    const game = [...this.state.game];
    id === 0
      ? (game[0].count += this.state.addValue)
      : (game[1].count += this.state.addValue);
    this.setState({ game });
    this.checkGameWin(id);
  };

  checkGameWin = (id) => {
    const { targetPoints, game, pointsAheadNeeded, tieBreak, superTieBreak } =
      this.state;
    if (game[0].count >= targetPoints || game[1].count >= targetPoints) {
      if (tieBreak || superTieBreak) {
        if (Math.abs(game[0].count - game[1].count) >= pointsAheadNeeded) {
          this.handleGameWin(id);
        } else {
          void 0;
        }
      } else {
        this.handleGameWin(id);
      }
    }
  };

  handleGameWin = (id) => {
    // Primeira pergunta: o game era um tie-break ou super tie-break? Se sim, o vencedor ganhar um set. Caso contrario, apenas um game.
    const { setGames, setScore, currentSet, tieBreak, superTieBreak, winner } =
      this.state;

    // Era algum tipo de tie-break:
    if (tieBreak || superTieBreak) {
      id === 0 ? setScore[0].count++ : setScore[1].count++;
      id === 0
        ? setGames[currentSet - 1][id].count++
        : setGames[currentSet - 1][id].count++;
      this.setState({ setScore, setGames });
      this.handleSetWin(id);
      if (superTieBreak) {
        let gOver = true;
        winner.name = this.state.names[id];
        winner.id = id;
        this.setState({ gameOver: gOver, winner });
      } else {
        if (
          !(
            setScore[0].count + setScore[1].count === 2 &&
            (setScore[0].count === 0 || setScore[1].count === 0)
          )
        )
          this.resetGame();
      }
    }
    // Nao era um tie-break:
    else {
      setGames[currentSet - 1][id].count++;
      this.setState({ setGames });
      this.checkSetWin(id);
      if (
        !(
          setScore[0].count + setScore[1].count === 2 &&
          (setScore[0].count === 0 || setScore[1].count === 0)
        )
      )
        this.resetGame();
    }
  };

  checkSetWin = (id) => {
    const { setGames, setScore, currentSet } = this.state;
    // O que ocorreu com a vitoria desse game?
    // Se ficou 6 games a 6:
    if (
      setGames[currentSet - 1][0].count === 6 &&
      setGames[currentSet - 1][1].count === 6
    ) {
      // Se for o primeiro set ou segundo set:
      if (currentSet === 1 || currentSet === 2) {
        this.beginTieBreak();
      }
      // Se for terceiro set, vamos ao super tie-break
      else {
        this.beginSuperTieBreak();
      }
    }
    // Alguem tem 6 ou mais com dois games a mais? Entao ganhou o set.
    else if (
      (setGames[currentSet - 1][0].count >= 6 ||
        setGames[currentSet - 1][1].count >= 6) &&
      Math.abs(
        setGames[currentSet - 1][0].count - setGames[currentSet - 1][1].count
      ) >= 2
    ) {
      id === 0 ? setScore[0].count++ : setScore[1].count++;
      this.setState({ setScore });
      this.handleSetWin(id);
    }
  };

  handleSetWin = (id) => {
    const { setScore, winner } = this.state;
    let current = this.state.currentSet;
    let gOver = this.state.gameOver;
    const setSum = setScore[0].count + setScore[1].count;
    if (setSum <= 1) {
      this.beginNormalSet();
    }
    // Dois sets a zero, game over:
    else if (
      setSum === 2 &&
      (setScore[0].count === 0 || setScore[1].count === 0)
    ) {
      gOver = true;
      winner.name = this.state.names[id];
      winner.id = id;
      this.setState({ gameOver: gOver, winner });
    }
    // Se chegamos aqui, esta de 1x1
    else {
      this.beginSuperTieBreak();
    }

    current++;
    this.setState({ currentSet: current });
  };

  beginTieBreak = () => {
    this.setState({
      addValue: 1,
      targetPoints: 7,
      pointsAheadNeeded: 2,
      tieBreak: true,
    });
  };

  beginSuperTieBreak = () => {
    this.setState({
      addValue: 1,
      targetPoints: 10,
      pointsAheadNeeded: 2,
      superTieBreak: true,
    });
  };

  beginNormalSet = () => {
    this.setState({
      addValue: 15,
      targetPoints: 45,
      pointsAheadNeeded: 15,
      superTieBreak: false,
      tieBreak: false,
    });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center p-1 py-4 m-5 space-y-4 bg-gray-100 border-2 border-gray-300 rounded-md">
        <div className="p-4 text-xl font-bold text-white bg-blue-500 border-2 border-white rounded-md drop-shadow-md">
          {this.state.title}
        </div>

        <div className="p-3 text-white bg-green-800 border border-white rounded-md drop-shadow-md">
          {this.state.timer}
        </div>
        <div>
          <div className="p-4 bg-white border-2 border-gray-300 rounded-md drop-shadow-md">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="">{this.state.names[0]}</div>
                  </td>
                  <td>
                    <Set
                      setGames={this.state.setGames}
                      currentSet={this.state.currentSet}
                      game={this.state.game[0]}
                      onScore={this.handleScoredPoint}
                      id={0}
                      gameOver={this.state.gameOver}
                      winner={this.state.winner}
                    />
                  </td>
                </tr>
                <tr className="h-2" />
                <tr>
                  <td>
                    <div className="">{this.state.names[1]}</div>
                  </td>
                  <td>
                    <Set
                      setGames={this.state.setGames}
                      currentSet={this.state.currentSet}
                      game={this.state.game[1]}
                      onScore={this.handleScoredPoint}
                      id={1}
                      gameOver={this.state.gameOver}
                      winner={this.state.winner}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
