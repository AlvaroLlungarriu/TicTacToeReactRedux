import React, {Component} from 'react';
import { setActive, calculateWinner } from "../actions/actions"

export default class Square extends Component{
  handleClick () {
    this.props.dispatch(setActive(this.props.pos));
    this.props.dispatch(calculateWinner());
  }
  render() {
    return (
      <button
        className="square" onClick={()=>this.handleClick()}>
        {this.props.game.squares[this.props.pos]}
      </button>
    );
  }
}
