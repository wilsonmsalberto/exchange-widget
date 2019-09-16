import React from 'react';
import PropTypes from 'prop-types';

const LoopIcon = ({ className }) => (
  <svg
    className={ className }
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clipRule="evenodd"
      fillRule="evenodd"
    >
      <path d="M6 16a1 1 0 0 0 1-1V7h16.591l-3.255 3.294a1.013 1.013 0 0 0 0 1.429c.393.394 1.03.394 1.423 0l4.94-4.999a1.013 1.013 0 0 0 0-1.429L21.759.296a1.004 1.004 0 0 0-1.423 0 1.012 1.012 0 0 0 0 1.428L23.573 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1zM26 15.993a1 1 0 0 0-1 1v8.031H8.373l3.284-3.33a1.016 1.016 0 0 0 0-1.431 1.003 1.003 0 0 0-1.423 0L5.32 25.247a1.019 1.019 0 0 0 0 1.474l4.915 4.983c.393.395 1.03.395 1.423 0a1.016 1.016 0 0 0 0-1.431l-3.203-3.248H26a1 1 0 0 0 1-1v-9.031a1 1 0 0 0-1-1.001z" />
    </g>
  </svg>
);

LoopIcon.propTypes = {
  className: PropTypes.string,
};

LoopIcon.defaultProps = {
  className: undefined,
};

export default LoopIcon;
