import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Home from 'components/home'

describe('<Home />', () => {
  afterEach(cleanup)

  describe('render', () => {
    it('should render correctly', () => {
      const { getByText } = render(<Home />)
      expect(getByText('Hello World').textContent).toBe('Hello World')
    })
  })
})
