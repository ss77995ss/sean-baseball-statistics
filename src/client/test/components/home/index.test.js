import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import Home from '../../../components/home'

describe('<Home />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('#home-wrapper').length).toBe(1)
  })
})
