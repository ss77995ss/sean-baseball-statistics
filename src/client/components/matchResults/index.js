import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import { titles, buttonText } from 'client/constants/base';
import ScoreKeepByInnings from './scoreKeepByInnings';

const useStyles = makeStyles({
  matchResultsWrapper: {
    textAlign: 'center'
  }
});

const MatchResults = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={classes.matchResultsWrapper}>
      {isOpen ? (
        <Fade in={isOpen}>
          <Box>
            <Typography variant="h4" component="h1">
              {titles.matchResult}
            </Typography>
            <Button variant="contained" onClick={handleClick}>
              {buttonText.scoreKeepByInning}
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
