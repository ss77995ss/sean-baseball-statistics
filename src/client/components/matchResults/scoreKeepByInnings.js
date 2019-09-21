import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

const ByInnScoreKeep = ({ isScoreKeepOpen, onClick }) => (
  <Fade in={isScoreKeepOpen}>
    <Box>
      <Typography variant="h4" component="h1">
        ScoreKeep By Innings
      </Typography>
      <Button variant="contained" onClick={onClick}>
        Back to Home page
      </Button>
    </Box>
  </Fade>
);

ByInnScoreKeep.propTypes = {
  isScoreKeepOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ByInnScoreKeep;
