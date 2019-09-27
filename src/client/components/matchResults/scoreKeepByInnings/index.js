import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import { titles, buttonText } from 'client/constants/base';
import InningsSelector from './inningsSelector';

const ScoreKeepByInnings = ({ isScoreKeepOpen, onClick }) => (
  <Fade in={isScoreKeepOpen}>
    <Box>
      <Typography variant="h4" component="h1">
        {titles.scoreKeepByInning}
      </Typography>
      <InningsSelector />
      <hr />
      <Button variant="contained" onClick={onClick}>
        {buttonText.backToHome}
      </Button>
    </Box>
  </Fade>
);

ScoreKeepByInnings.propTypes = {
  isScoreKeepOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ScoreKeepByInnings;
