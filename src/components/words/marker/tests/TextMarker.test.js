import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

import { TextMarker } from '../..'

const mockStore = configureStore()
const store = mockStore({
    colors: { 
        filteredColors: [], 
        selectedColor: undefined
    }
})

const instance = () => {
    const props = {
        store: store,
    }
    const wrapper = shallow(<TextMarker { ...props }/>)
    
    return {
        wrapper
    }
}

describe('TextMarker', () => {
    test('renders correctly', () => {
        const { wrapper } = instance()
        const component = wrapper.dive()

        expect(toJson(component)).toMatchSnapshot()
    })
})