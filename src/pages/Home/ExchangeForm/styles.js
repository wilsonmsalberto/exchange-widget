import styled from '@emotion/styled';

import Input from 'ui/components/Input';
import Select from 'ui/components/Select';

const Wrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;

const StyledSelect = styled(Select)`
  display: flex;
  flex: 0 1 auto;
  height: 20vh;
`;

const StyledInput = styled(Input)`
  display: flex;
  flex: 1;
  max-width: 65%;
  height: 20vh;
`;

export {
  Wrapper,
  StyledInput as Input,
  StyledSelect as Select,
};
