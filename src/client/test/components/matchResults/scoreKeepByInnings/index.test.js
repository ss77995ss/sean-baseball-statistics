import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import ScoreKeepByInnings from 'client/components/matchResults/scoreKeepByInnings';
import { titles, buttonText } from 'client/constants/base';

describe('<ScoreKeepByInnings />', () => {
  afterEach(cleanup);

  describe('render', () => {
    const setup = mockFn =>
      render(<ScoreKeepByInnings isScoreKeepOpen onClick={mockFn} />);

    it('should render title correctly', () => {
      const { queryByText } = setup(jest.fn());

      expect(queryByText(titles.scoreKeepByInning)).not.toBeNull();
    });

    it(`should have called onClick function after click '${buttonText.backToHome}'`, () => {
      const mockOnClick = jest.fn();
      const { getByText } = setup(mockOnClick);

      fireEvent.click(getByText(buttonText.backToHome));
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
