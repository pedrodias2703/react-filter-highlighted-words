import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { ButtonGroup, ColorButton } from '../..'

describe('ButtonGroup', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<ButtonGroup role="mock" />)
    const component = wrapper.dive()

    expect(toJson(component)).toMatchSnapshot()
  })

  test('it has 3 buttons', () => {
    const wrapper = shallow(<ButtonGroup role="mock" />)
    const component = wrapper.dive()

    expect(component.find(ColorButton)).toHaveLength(3)
  })
})
