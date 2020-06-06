import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const Buffer = ({ buffer }) => {
  const props = useSpring({
    from: { opacity: 0, marginTop: -50 },
    to: { opacity: 1, marginTop: -20 },
    config: { duration: 250 },
  });
  return <td><animated.p className="buffer" style={props}>{buffer}</animated.p></td>;
};

Buffer.defaultProps = {
  buffer: '',
};

Buffer.propTypes = {
  buffer: PropTypes.string,
};
export { Buffer as default };
