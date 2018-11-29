import React from 'react';
import { combineReducers, createStore} from 'redux';

import Square from './Square';

import './Board.css'

/*function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}*/

export default class Board extends Component {
  renderSquare(i) {
    return (
      <Square pos={i} {...this.props} />
    );
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}