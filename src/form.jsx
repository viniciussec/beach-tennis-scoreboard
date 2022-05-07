import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="p-1 py-4 m-5 space-y-4 bg-gray-100 border-2 border-gray-300 rounded-md">
        <form action="" className="grid w-full grid-cols-2 gap-4 p-4">
          <div className="flex flex-col col-span-2 space-y-2">
            <label>Descrição do Jogo</label>
            <input
              type="text"
              className="p-2 rounded-md"
              placeholder="Ex. Jogo 2 - Campeonato municipal"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Dupla 1</label>
            <input
              type="text"
              className="p-2 rounded-md"
              placeholder="Nome do primeiro atleta"
            />
            <input
              type="text"
              className="p-2 rounded-md"
              placeholder="Nome do segundo atleta"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Dupla 2</label>
            <input
              type="text"
              className="p-2 rounded-md"
              placeholder="Nome do primeiro atleta"
            />
            <input
              type="text"
              className="p-2 rounded-md"
              placeholder="Nome do segundo atleta"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Qual equipe irá sacar primeiro?</label>
            <select className="p-3 bg-white rounded-md" name="" id="">
              <option value="">Dupla 1</option>
              <option value="">Dupla 2</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label>Quantidade de sets</label>
            <select className="p-3 bg-white rounded-md" name="" id="">
              <option value="">Um único set</option>
              <option value="">Melhor de 3</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label>O último set será em modo supertiebrake?</label>
            <select className="p-3 bg-white rounded-md" name="" id="">
              <option value="">Sim</option>
              <option value="">Não</option>
            </select>
          </div>
          <div className="flex justify-center col-span-2">
            <button className="p-4 text-white bg-blue-500 rounded-md">
              Iniciar partida
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
