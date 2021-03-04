import React from "react";
import "./style.css";
export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    getTurn(playerTurn){
        if(playerTurn==="X")
            return "Player 1's turn";
        if(playerTurn==="O")
            return "Player 2's turn";
    }
    render(){
    return <div className="turn">{this.getTurn(this.props.turn)}</div>
    }
}