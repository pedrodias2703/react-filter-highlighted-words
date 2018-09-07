import WordReducer from '../WordReducer'
import { WORDS } from '../../types'

describe('word reducer', () => {
    it('should return the initial state', () => {
      expect(WordReducer(undefined, {})).toEqual(
        { red: [], yellow: [], green: [] }
      )
    })

    it('should return the handle ADD_WORD', () => {
        expect(WordReducer(undefined, {
            type: WORDS.ADD_WORD,
            payload: { color: 'green', word: 'In the light you will find the road' }
        })).toEqual(
          { red: [], yellow: [], green: ['In the light you will find the road'] }
        )

        expect(WordReducer({ red: [], yellow: [], green: ['In the light you will find the road'] }, {
            type: WORDS.ADD_WORD,
            payload: { color: 'yellow', word: 'dolphins' }
        })).toEqual(
          { red: [], yellow: ['dolphins'], green: ['In the light you will find the road'] }
        )
    })

    it('should return the handle REMOVE_WORD', () => {
        expect(WordReducer(undefined, {
            type: WORDS.REMOVE_WORD,
            payload: { color: 'green', word: 'In the light you will find the road' }
        })).toEqual(
          { red: [], yellow: [], green: [] }
        )

        expect(WordReducer({ red: [], yellow: [], green: ['In the light you will find the road'] }, {
            type: WORDS.REMOVE_WORD,
            payload: { color: 'yellow', word: 'dolphins' }
        })).toEqual(
            { red: [], yellow: [], green: ['In the light you will find the road'] }
        )

        expect(WordReducer({ red: [], yellow: ['dolphins'], green: ['In the light you will find the road'] }, {
            type: WORDS.REMOVE_WORD,
            payload: { color: 'yellow', word: 'dolphins' }
        })).toEqual(
            { red: [], yellow: [], green: ['In the light you will find the road'] }
        )
    })


})