import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from 'client/components/home';

describe('<Home />', () => {
  afterEach(cleanup);

  describe('render', () => {
    it('should render `home-wrapper`', () => {
      const { getByTestId } = render(<Home />);

      expect(getByTestId('home-wrapper')).toBeInTheDocument();
    });
  });
});
