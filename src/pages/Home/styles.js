import styled from '@emotion/styled';

import Button from 'ui/components/Button';
import LoopIcon from 'ui/components/Icons/Loop';

import ExchangeForm from './ExchangeForm';

const InputExchangeForm = styled(ExchangeForm)`
  position: relative;
  height: 20vh;
`;

const StyledLoopIcon = styled(LoopIcon)`
  width: 2rem;
  height: 2rem;
  fill: #007eff;
`;

const OutputExchangeForm = styled(ExchangeForm)`
  height: 80vh;
  background-color: #f3f9ff;
`;

const ExchangeButton = styled(Button)`
  padding: 1.2rem;
  width: 80%;
  background-color: #FF1D8F;
  box-shadow: 0 .8rem 1.2rem -.6rem #FF1D8F;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const PairInfo = styled.div`
  border-radius: 2rem;
  border: 3px solid #f3f9ff;
  background-color: #fff;
  padding: 0 2rem;
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: flex-start;
  color: #0171e4;
`;

const PairSwitcher = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 0;
  right: 0;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`;

const SwitcherButton = styled(Button)`
  position: absolute;
  left: 2rem;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 3px solid #f3f9ff;
  background-color: #fff;
  fill: #0171e4;
`;

export {
  ExchangeButton,
  InputExchangeForm,
  OutputExchangeForm,
  PairInfo,
  PairSwitcher,
  StyledLoopIcon as LoopIcon,
  SwitcherButton,
  Wrapper,
};
