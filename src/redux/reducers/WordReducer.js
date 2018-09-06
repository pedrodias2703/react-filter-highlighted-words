import { WORDS } from '../types';

const INITIAL_STATE = { red: [], yellow: [], green: [] } ;


export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case WORDS.ADD_WORD:
            const { color, word } = payload;
            state[color].push(word);
            return { ...state  };
        case WORDS.CLEAR_WORDS:
            return { ...INITIAL_STATE };
        default:
            return state;
    }

}

