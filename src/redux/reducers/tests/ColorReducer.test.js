import ColorReducer from '../ColorReducer';
import { COLOR } from '../../types';

describe('color reducer', () => {
    test('should return the intestial state', () => {
      expect(ColorReducer(undefined, {})).toEqual(
        { selectedColor: null, filteredColors: [] }
      )
    })

    test('should handle SET_SELECTED', () => {
      expect(
        ColorReducer(undefined, {
          type: COLOR.SET_SELECTED,
          payload: 'green'
        })
      ).toEqual(
        { filteredColors: [], selectedColor: 'green' }
      )

      expect(
        ColorReducer({ 
            selectedColor: 'green', filteredColors: [] 
        }, {
            type: COLOR.SET_SELECTED,
            payload: 'yellow'
        })
      ).toEqual({
        filteredColors: [], selectedColor: 'yellow'
      })
    })

    test('should handle SET_FILTERED', () => {
        expect(
          ColorReducer(undefined, {
            type: COLOR.SET_FILTERED,
            payload: 'green'
          })
        ).toEqual(
          { filteredColors: ['green'], "selectedColor": null }
        )
  
        expect(
          ColorReducer({ 
              selectedColor: null, filteredColors: ['green'] 
          }, {
              type: COLOR.SET_FILTERED,
              payload: 'yellow'
          })
        ).toEqual({
          selectedColor: null, filteredColors: ['green', 'yellow'] 
        })
    })

    test('should handle SET_FILTERED', () => {
        expect(
          ColorReducer(undefined, {
            type: COLOR.REMOVE_FILTERED,
            payload: 'green'
          })
        ).toEqual(
          { filteredColors: [], "selectedColor": null }
        )
  
        expect(
          ColorReducer({ 
              selectedColor: null, filteredColors: ['green'] 
          }, {
              type: COLOR.REMOVE_FILTERED,
              payload: 'yellow'
          })
        ).toEqual({
          selectedColor: null, filteredColors: ['green'] 
        })

        expect(
            ColorReducer({ 
                selectedColor: null, filteredColors: ['green', 'yellow'] 
            }, {
                type: COLOR.REMOVE_FILTERED,
                payload: 'yellow'
            })
          ).toEqual({
            selectedColor: null, filteredColors: ['green'] 
          })
    })
})
