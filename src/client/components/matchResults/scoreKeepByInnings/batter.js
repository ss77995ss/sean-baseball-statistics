import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { battersConfig, buttonText } from 'client/constants/base';

const Batter = ({ batterNo }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          {`No.${(batterNo % battersConfig.battersInARow) + 1}`}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Result</Typography>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small">{buttonText.batterStat.cancel}</Button>
        <Button size="small" color="primary">
          {buttonText.batterStat.save}
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};

Batter.propTypes = {
  batterNo: PropTypes.number.isRequired
};

export default Batter;
