import { WORDS } from '../types';

export const addWord = (color, word) => ({
    type: WORDS.ADD_WORD,
    payload: {color, word}
});