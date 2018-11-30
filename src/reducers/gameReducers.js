import { MOVIMIENTO, INIT_GAME, WINNER } from '../actions/actions'

export default function reducer ( state ={
    squares: [],
    turno: 'X',
    xIsTrue: true,
    winner: false
}, action ) {
    switch (action.type) {
        case INIT_GAME: {
            return {
                ...state,
                squares: Array.fill(null)
            }
        }
        case MOVIMIENTO: {
            let newState = [...state.squares];
            let turn = state.xIsTrue;
            let turno = state.turno;
            if (state.winner === false) {
                if (newState[action.payload] === null) {
                    newState[action.payload] = state.xIsTrue? 'X' : 'O';
                    turno = state.xIsTrue? 'X' : 'O';
                    turn = !state.xIsTrue;
                    return {
                        ...state,
                        squares: newState,
                        turno: turno,
                        xIsTrue: turn
                    }
                } else {
                    return state;
                }
            } else {
                return {
                    ...state,
                    turno: "Ganador: " + turno
                }
            }
        }
        case WINNER: {
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