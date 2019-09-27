import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

import { battersConfig } from 'client/constants/base';
import Batter from './batter';

const renderBatters = batterNumbers => {
  const batters = Array.from({ length: batterNumbers }, (v, number) => (
    <Batter key={`batter-stat-#${number}`} batterNo={number} />
  ));

  return batters;
};

const BatterStats = ({ defaultBatters }) => {
  const [batters, setBatters] = useState(defaultBatters);
  const handleAddClick = () => setBatters(batters + 1);
  const handleRemoveClick = () => {
    if (batters > battersConfig.defaultBatters) setBatters(batters - 1);
  };

  return (
    <div>
      {renderBatters(batters)}
      <IconButton onClick={handleAddClick}>
        <AddCircleOutline />
      </IconButton>
      <IconButton onClick={handleRemoveClick}>
        <RemoveCircleOutline />
      </IconButton>
    </div>
  );
};

BatterStats.defaultProps = {
  defaultBatters: battersConfig.defaultBatters
};

BatterStats.propTypes = {
  defaultBatters: PropTypes.number
};

export default BatterStats;
