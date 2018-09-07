import { WORDS } from '../types'

export const addWord = (color, word) => ({
    type: WORDS.ADD_WORD,
    payload: { color, word }
})

export const removeWord = (color, word) => ({
    type: WORDS.REMOVE_WORD,
    payload: { color, word }
})