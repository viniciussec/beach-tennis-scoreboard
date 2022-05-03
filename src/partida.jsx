import React, { Component } from 'react';

class Partida extends Component {
    state = {  
        sets:[{id:0, count:0},{id:1, count:0}],
        games:[{id:0, count:0}, {id:1, count:0}],
        points: [{id:0, count:0}, {id:1, count:0}],
        winCondition:0
    } 

    handleScoredPoint();
    handleGameWin();
    handleSetWin();
    handleMatchWin();
    resetWinCondition();


    render() { 
        return ();
    }
}
 
export default Partida;