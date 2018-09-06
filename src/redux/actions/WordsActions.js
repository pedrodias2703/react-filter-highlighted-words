import { WORDS } from '../types';

export const addWord = (color, word) => ({
    type: WORDS.ADD_WORD,
    payload: {color, word}
});

// export const setFilteredColor = color => ({
//     type: COLOR.SET_FILTERED,
//     payload: color
// });

// export const removeFilteredColor = color => ({
//     type: COLOR.REMOVE_FILTERED,
//     payload: color
// });