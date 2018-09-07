import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Grid from '../Grid'

describe('Grid', () => {
    test('renders correctly', () => {
        const wrapper = shallow(<Grid />)

        expect(toJson(wrapper)).toMatchSnapshot()
    })    
})