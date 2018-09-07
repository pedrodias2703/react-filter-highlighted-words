import WordReducer from '../WordReducer';
import { WORDS } from '../../types';

describe('word reducer', () => {
    it('should return the initial state', () => {
      expect(WordReducer(undefined, {})).toEqual(
        { red: [], yellow: [], green: [] }
      )
    })

    it('should return the handle ADD_WORD', () => {
        expect(WordReducer(undefined, {
            type: WORDS.ADD_WORD,
            payload: { color: 'green', word: 'WAES' }
        })).toEqual(
          { red: [], yellow: [], green: ['WAES'] }
        )

        expect(WordReducer({ red: [], yellow: [], green: ['WAES'] }, {
            type: WORDS.ADD_WORD,
            payload: { color: 'yellow', word: 'netherlands' }
        })).toEqual(
          { red: [], yellow: ['netherlands'], green: ['WAES'] }
        )
    })

    it('should return the handle REMOVE_WORD', () => {
        expect(WordReducer(undefined, {
            type: WORDS.REMOVE_WORD,
            payload: { color: 'green', word: 'WAES' }
        })).toEqual(
          { red: [], yellow: [], green: [] }
        )

        expect(WordReducer({ red: [], yellow: [], green: ['WAES'] }, {
            type: WORDS.REMOVE_WORD,
            payload: { color: 'yellow', word: 'netherlands' }
        })).toEqual(
            { red: [], yellow: [], green: ['WAES'] }
        )

        expect(WordReducer({ red: [], yellow: ['netherlands'], green: ['WAES'] }, {
            type: WORDS.REMOVE_WORD,
            payload: { color: 'yellow', word: 'netherlands' }
        })).toEqual(
            { red: [], yellow: [], green: ['WAES'] }
        )
    })


})