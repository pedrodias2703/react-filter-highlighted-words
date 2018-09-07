import { addWord, removeWord } from '../WordsActions'
import { WORDS } from '../../types'

describe('words actions', () => {
  test('should create an action to add a word', () => {
    const color = 'red'
    const word = 'WAES'
    const expectedAction = {
      type: WORDS.ADD_WORD,
      payload: { color, word }
    }
    expect(addWord(color, word)).toEqual(expectedAction)
  });

  test('should create an action to remove a word', () => {
    const color = 'green'
    const word = 'netherlands'
    const expectedAction = {
      type: WORDS.REMOVE_WORD,
      payload: { color, word }
    }
    expect(removeWord(color, word)).toEqual(expectedAction)
  });
})