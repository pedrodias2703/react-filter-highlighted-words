import { WORDS } from '../types';

const INITIAL_STATE = { red: [], yellow: [], green: [] } ;


export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case WORDS.ADD_WORD:
            const { color: colorAdd, word: wordAdd } = payload;
            state[colorAdd].push(wordAdd);
            return { ...state  };
        case WORDS.REMOVE_WORD:
            const { color: colorRemove, word: wordRemove } = payload;
            state[colorRemove] = state[colorRemove].filter( el => el !== wordRemove);
            return { ...state };
        default:
            return state;
    }

}

