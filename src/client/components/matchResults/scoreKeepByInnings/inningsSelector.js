import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AddIcon from '@material-ui/icons/Add';

import BatterStats from './batterStats';

const renderInnings = innings => {
  const inningsTabs = Array.from({ length: innings }, (v, inning) => (
    <Tab key={`innings-#${inning}`} label={inning + 1} />
  ));

  return inningsTabs;
};

const InningsSelector = () => {
  const [innings, setInnings] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);
  const handleClick = () => setInnings(innings + 1);
  const handleChange = (event, value) => setTabIndex(value);

  return (
    <div>
      <Tabs value={tabIndex} onChange={handleChange}>
        {renderInnings(innings)}
        <Tab icon={<AddIcon />} onClick={handleClick} />
      </Tabs>
      <BatterStats />
    </div>
  );
};

export default InningsSelector;
