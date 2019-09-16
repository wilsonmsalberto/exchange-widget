import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from './styles';

const Title = ({ children, as }) => <Heading as={ as }>{children}</Heading>;

Title.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  as: undefined,
};

export default Title;
