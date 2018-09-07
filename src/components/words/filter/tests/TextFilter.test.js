import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

import { TextFilter } from '../..'

const mockStore = configureStore()
const store = mockStore({
  words: {
    red: ['In the light you will find the road'],
  },
  colors: {
    filteredColors: [],
    selectedColor: undefined,
  },
})

const instance = () => {
  const props = {
    store,
  }
  const wrapper = shallow(<TextFilter {...props} />)

  return {
    wrapper,
  }
}

describe('TextFilter', () => {
  test('renders correctly intiallly', () => {
    const { wrapper } = instance()
    const component = wrapper.dive()

    expect(toJson(component)).toMatchSnapshot()
  })
})
