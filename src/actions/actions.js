import { MOVIMIENTO, INIT_GAME, WINNER } from '../constants/constants';

export function setActive(i) {
    return {
        type: MOVIMIENTO,
        payload: i
    }
}

export function initGame() {
    return {
        type: INIT_GAME
    }
}

export function calculateWinner() {
    return {
        type: WINNER
    }
}