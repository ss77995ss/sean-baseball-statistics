import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import ScoreKeepByInnings from 'client/components/matchResults/scoreKeepByInnings';
import { titles, buttonText } from 'client/constants/base';

describe('<ScoreKeepByInnings />', () => {
  afterEach(cleanup);

  describe('render', () => {
    it('should render correctly', () => {
      const mockOnClick = jest.fn();
      const { getByText, queryByText } = render(
        <ScoreKeepByInnings isScoreKeepOpen onClick={mockOnClick} />
      );

      expect(queryByText(titles.scoreKeepByInning)).not.toBeNull();

      fireEvent.click(getByText(buttonText.backToHome));

      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
