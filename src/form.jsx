import React, { Component } from "react";
import Match from "./match";

class Form extends Component {
  state = {
    description: "",
    firstTeam: ["", ""],
    secondTeam: ["", ""],
    firstServe: 1,
    setsQuantity: 3,
    hasSupertiebreak: true,
    matchStarted: false,
  };

  render() {
    return !this.state.matchStarted ? (
      <div className="p-1 py-4 m-5 space-y-4 bg-gray-100 border-2 border-gray-300 rounded-md">
        <form className="grid w-full grid-cols-2 gap-4 p-4">
          <div className="flex flex-col col-span-2 space-y-2">
            <label>Descrição do Jogo</label>
            <input
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              type="text"
              className="p-2 rounded-md"
              placeholder="Ex. Jogo 2 - Campeonato municipal"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Dupla 1</label>
            <input
              value={this.state.firstTeam[0]}
              onChange={(e) =>
                this.setState({
                  firstTeam: [e.target.value, this.state.firstTeam[1]],
                })
              }
              type="text"
              className="p-2 rounded-md"
              placeholder="Nome do primeiro atleta"
            />
            <input
              value={this.state.firstTeam[1]}
              onChange={(e) =>
                this.setState({
                  firstTeam: [this.state.firstTeam[0], e.target.value],
                })
              }
              type="text"
              className="p-2 rounded-md"
              placeholder="Nome do segundo atleta"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Dupla 2</label>
            <input
              value={this.state.secondTeam[0]}
              onChange={(e) =>
                this.setState({
                  secondTeam: [e.target.value, this.state.secondTeam[1]],
                })
              }
              type="text"
              className="p-2 rounded-md"
              placeholder="Nome do primeiro atleta"
            />
            <input
              value={this.state.secondTeam[1]}
              onChange={(e) =>
                this.setState({
                  secondTeam: [this.state.secondTeam[0], e.target.value],
                })
              }
              type="text"
              className="p-2 rounded-md"
              placeholder="Nome do segundo atleta"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Qual equipe irá sacar primeiro?</label>
            <select
              value={this.state.firstServe}
              onChange={(e) => this.setState({ firstServe: e.target.value })}
              className="p-3 bg-white rounded-md"
              name=""
              id=""
            >
              <option value={1}>Dupla 1</option>
              <option value={2}>Dupla 2</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label>Quantidade de sets</label>
            <select
              value={this.state.setsQuantity}
              onChange={(e) => this.setState({ setsQuantity: e.target.value })}
              className="p-3 bg-white rounded-md"
              name=""
              id=""
            >
              <option value={1}>Um único set</option>
              <option value={3}>Melhor de 3</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label>O último set será em modo supertiebrake?</label>
            <select
              value={this.state.hasSupertiebreak}
              onChange={(e) =>
                this.setState({ hasSupertiebreak: e.target.value })
              }
              className="p-3 bg-white rounded-md"
              name=""
              id=""
            >
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </div>
          <div className="flex justify-center col-span-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                this.setState({ matchStarted: true });
              }}
              className="p-4 text-white bg-blue-500 rounded-md"
            >
              Iniciar partida
            </button>
          </div>
        </form>
      </div>
    ) : (
      <Match
        description={this.state.description}
        firstTeam={this.state.firstTeam}
        secondTeam={this.state.secondTeam}
        firstServe={this.state.firstServe}
        setsQuantity={this.state.setsQuantity}
        hasSupertiebreak={this.state.hasSupertiebreak}
      />
    );
  }
}

export default Form;
