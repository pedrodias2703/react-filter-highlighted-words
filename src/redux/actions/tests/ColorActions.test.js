import { setSelectedColor, setFilteredColor, removeFilteredColor } from '../ColorActions'
import { COLOR } from '../../types'

describe('color actions', () => {
  test('should create an action to set a marking color', () => {
    const color = 'red'
    const expectedAction = {
      type: COLOR.SET_SELECTED,
      payload: color,
    }
    expect(setSelectedColor(color)).toEqual(expectedAction)
  })

  test('should create an action to set a filtering color', () => {
    const color = 'green'
    const expectedAction = {
      type: COLOR.SET_FILTERED,
      payload: color,
    }
    expect(setFilteredColor(color)).toEqual(expectedAction)
  })

  test('should create an action to remove a filtering color', () => {
    const color = 'yellow'
    const expectedAction = {
      type: COLOR.REMOVE_FILTERED,
      payload: color,
    }
    expect(removeFilteredColor(color)).toEqual(expectedAction)
  })
})
