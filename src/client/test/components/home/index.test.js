import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from 'components/home';

describe('<Home />', () => {
  afterEach(cleanup);

  describe('render', () => {
    it('should render correctly', () => {
      const { getByText } = render(<Home />);
      expect(getByText('Baseball Match Results').textContent).toBe(
        'Baseball Match Results'
      );
    });
  });
});
