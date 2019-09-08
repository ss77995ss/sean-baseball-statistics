import React, { useState, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import ScoreKeepByInnings from './scoreKeepByInnings';

const useStyles = makeStyles({
  matchResultsWrapper: {
    textAlign: 'center'
  }
});

const MatchResults = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className={classes.matchResultsWrapper}>
      {isOpen ? (
        <Fade in={isOpen}>
          <Box>
            <Typography variant="h4" component="h1">
              Baseball Match Results
            </Typography>
            <Button variant="contained" onClick={handleClick}>
              Scorekeeping by Innings
            </Button>
          </Box>
        </Fade>
      ) : (
        <ScoreKeepByInnings isScoreKeepOpen={!isOpen} onClick={handleClick} />
      )}
    </div>
  );
};

export default MatchResults;
