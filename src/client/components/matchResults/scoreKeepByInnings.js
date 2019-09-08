import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

const ScoreKeepByInnings = ({ isScoreKeepOpen, onClick }) => {
  const handleClick = event => onClick(event);

  return (
    <Fade in={isScoreKeepOpen}>
      <Box>
        <Typography variant="h4" component="h1">
          ScoreKeep By Innings
        </Typography>
        <Button variant="contained" onClick={handleClick}>
          Back to Home page
        </Button>
      </Box>
    </Fade>
  );
};

ScoreKeepByInnings.propTypes = {
  isScoreKeepOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ScoreKeepByInnings;
