import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import MatchResults from 'client/components/matchResults';
import { titles, buttonText } from 'client/constants/base';

describe('<MatchResults />', () => {
  afterEach(cleanup);

  describe('render', () => {
    it('should render correctly', () => {
      const { getByText, queryByText } = render(<MatchResults />);

      expect(queryByText(titles.matchResult)).not.toBeNull();
      expect(queryByText(titles.scoreKeepByInning)).toBeNull();

      fireEvent.click(getByText(buttonText.scoreKeepByInning));

      expect(queryByText(titles.matchResult)).toBeNull();
      expect(queryByText(titles.scoreKeepByInning)).not.toBeNull();
    });
  });
});
