import { COLOR } from '../types'

export const setSelectedColor = color => ({
    type: COLOR.SET_SELECTED,
    payload: color
})

export const setFilteredColor = color => ({
    type: COLOR.SET_FILTERED,
    payload: color
})

export const removeFilteredColor = color => ({
    type: COLOR.REMOVE_FILTERED,
    payload: color
})