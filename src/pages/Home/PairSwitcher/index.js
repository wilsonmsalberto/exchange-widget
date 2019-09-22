import React from 'react';
import PropTypes from 'prop-types';

import {
  LoopIcon,
  PairInfo,
  SwitcherButton,
  Wrapper,
} from './styles';

const PairSwitcher = ({
  activeRate,
  rateInput,
  rateOutput,
  setRateInput,
  setRateOutput,
}) => {
  const handleOnSwitch = () => {
    setRateInput(rateOutput);
    setRateOutput(rateInput);
  };

  if (!activeRate) return null;

  return (
    <Wrapper>
      <SwitcherButton
        onClick={ handleOnSwitch }
      >
        <LoopIcon />
      </SwitcherButton>
      <PairInfo>
        {`${rateInput} 1 = ${rateOutput} ${activeRate.toFixed(2)}`}
      </PairInfo>
    </Wrapper>
  );
};

PairSwitcher.propTypes = {
  activeRate: PropTypes.number,
  rateInput: PropTypes.string.isRequired,
  rateOutput: PropTypes.string.isRequired,
  setRateInput: PropTypes.func.isRequired,
  setRateOutput: PropTypes.func.isRequired,
};

PairSwitcher.defaultProps = {
  activeRate: undefined,
};

export default PairSwitcher;
