import { MOVIMIENTO, INIT_GAME, WINNER } from '../constants/constants'

export default function reducer ( state ={
    squares: [],
    turn: 'X',
    xIsTrue: true,
    winner: false
}, action ) {
    switch (action.type) {
        case INIT_GAME: {
            let turn = state.turn;
            return {
                ...state,
                turn: "Turno de: " + turn,
                squares: Array(9).fill(null),
            }
        }
        case MOVIMIENTO: {
            console.log(action)
            let newState = [...state.squares];
            let player = state.xIsTrue;
            let turn = state.turn;
            if (state.winner === false) {
                if (newState[action.payload] === null) {
                    newState[action.payload] = state.xIsTrue? 'X' : 'O';
                    turn = state.xIsTrue? 'O' : 'X';
                    player = !state.xIsTrue;
                    return {
                        ...state,
                        squares: newState,
                        turn: "Turno de: " + turn,
                        xIsTrue: player
                    }
                } else {
                    return {
                        ...state,
                        turn: "Ganador: " + turn
                    }
                }
            } else {
                return {
                    ...state
                }
            }
        }
        case WINNER: {
            let turn = state.turn;
            function Winner() {
                const lines = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6],
                ];
                for (let i = 0; i < lines.length; i++) {
                    const [a, b, c] = lines[i];
                    if (state.squares[a] && state.squares[a] == state.squares[b] && state.squares[a] == state.squares[c]) {
                        return state.squares[a];
                    }
                }
                return null;
            }
            if (Winner() != null) {
                return {
                    ...state,
                    winner: true
                }
            } else {
                return state;
            }
        }
        default: {
            return state;
        }
    }
} 