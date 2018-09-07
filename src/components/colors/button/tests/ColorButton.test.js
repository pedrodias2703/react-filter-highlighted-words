import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

import { Button } from 'semantic-ui-react'
import { ColorButton } from '../..'
import { ROLES, COLORS } from '../../../../constants'

const mockStore = configureStore()
const store = mockStore({
  colors: {
    filteredColors: [],
    selectedColor: undefined,
  },
})

const instance = () => {
  const props = {
    store,
    role: ROLES.FILTERING,
    color: COLORS.RED,
  }
  const wrapper = shallow(<ColorButton {...props} />)

  return {
    wrapper,
  }
}

describe('ColorButton', () => {
  test('renders correctly', () => {
    const { wrapper } = instance()
    const component = wrapper.dive()

    expect(toJson(component)).toMatchSnapshot()
  })

  test('onClick', () => {
    const { wrapper } = instance()
    const component = wrapper.dive()

    component.find(Button).props().onClick()

    expect(store.getActions()).toMatchSnapshot()
  })
})
