import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

import { titles, buttonText } from 'client/constants/base';

const ByInnScoreKeep = ({ isScoreKeepOpen, onClick }) => (
  <Fade in={isScoreKeepOpen}>
    <Box>
      <Typography variant="h4" component="h1">
        {titles.scoreKeepByInning}
      </Typography>
      <Button variant="contained" onClick={onClick}>
        {buttonText.backToHome}
      </Button>
    </Box>
  </Fade>
);

ByInnScoreKeep.propTypes = {
  isScoreKeepOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ByInnScoreKeep;
