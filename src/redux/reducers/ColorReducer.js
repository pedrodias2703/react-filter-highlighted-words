import { COLOR } from '../types'

const INITIAL_STATE = { selectedColor: null, filteredColors: [] }


export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case COLOR.SET_SELECTED:
            const color = state.selectedColor === payload ? null : payload
            return { ...state, selectedColor: color } 
        case COLOR.SET_FILTERED:
            return { ...state, filteredColors: [...state.filteredColors, payload] }
        case COLOR.REMOVE_FILTERED:
            return { ...state, filteredColors: state.filteredColors.filter( color => color !== payload) }
        default:
            return state
    }

}

