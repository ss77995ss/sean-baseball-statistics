import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import MatchResults from 'client/components/matchResults';
import { titles, buttonText } from 'client/constants/base';

describe('<MatchResults />', () => {
  afterEach(cleanup);

  describe('render', () => {
    const setup = () => render(<MatchResults />);

    it('should render initial title correctly', () => {
      const { queryByText } = setup();

      expect(queryByText(titles.matchResult)).not.toBeNull();
      expect(queryByText(titles.scoreKeepByInning)).toBeNull();
    });

    it(`should render title correctly after click '${buttonText.scoreKeepByInning} button'`, () => {
      const { getByText, queryByText } = setup();

      fireEvent.click(getByText(buttonText.scoreKeepByInning));
      expect(queryByText(titles.matchResult)).toBeNull();
      expect(queryByText(titles.scoreKeepByInning)).not.toBeNull();
    });
  });
});
