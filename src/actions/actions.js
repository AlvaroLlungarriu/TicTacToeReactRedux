import { MOVIMIENTO, INIT_GAME, WINNER } from '../constants/constants';

export function setActive(i) {
    return {
        type: MOVIMIENTO,
        playload: i
    }
}

export function initGame(i) {
    return {
        type: INIT_GAME
    }
}

export function calculateWinner(i) {
    return {
        type: WINNER
    }
}