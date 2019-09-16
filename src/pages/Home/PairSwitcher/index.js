import React from 'react';

import {
  LoopIcon,
  PairInfo,
  SwitcherButton,
  Wrapper,
} from './styles';

const PairSwitcher = () => (
  <Wrapper>
    <SwitcherButton>
      <LoopIcon />
    </SwitcherButton>
    <PairInfo>
      1$ = €1.2
    </PairInfo>
  </Wrapper>
);

export default PairSwitcher;
