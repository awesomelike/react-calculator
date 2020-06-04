import React from 'react';
import { Spring } from 'react-spring';
import PropTypes from 'prop-types';

const Buffer = ({ buffer }) => (
  <td>
    <Spring
      from={{ opacity: 0, marginTop: -50 }}
      to={{ opacity: 1, marginTop: -20 }}
      config={{ duration: 250 }}
    >
      {(props) => (
        <p className="buffer" style={props} key={buffer}>
          {buffer}
        </p>
      )}
    </Spring>
  </td>
);

Buffer.defaultProps = {
  buffer: '',
};

Buffer.propTypes = {
  buffer: PropTypes.string,
};
export { Buffer as default };
