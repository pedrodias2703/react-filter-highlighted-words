import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

import { TextFilter } from '../..'
import { setFilteredColor } from "../../../../redux/actions/ColorActions"

const mockStore = configureStore()
const store = mockStore({
    words: {
        red: ['WAES']
    },
    colors: { 
        filteredColors: [], 
        selectedColor: undefined
    }
})

const instance = () => {
    const props = {
        store: store,
    }
    const wrapper = shallow(<TextFilter { ...props }/>)
    
    return {
        wrapper
    }
}

describe('TextFilter', () => {
    test('renders correctly intiallly', () => {
        const { wrapper } = instance()
        const component = wrapper.dive()

        expect(toJson(component)).toMatchSnapshot()
    })

    test('renders correct when words are filtered', () => {
        store.dispatch(setFilteredColor('red'))

        const { wrapper } = instance()
        const component = wrapper.dive()

        expect(store.getActions()).toMatchSnapshot()
    })
})