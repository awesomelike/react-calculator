import React from 'react';
import PropTypes from 'prop-types';
import useNumberClick from '../hooks/useNumberClick';
import useEqual from '../hooks/useEqual';

const NumberButton = ({ number }) => {
  const handleClick = useNumberClick(number);
  const equal = useEqual(number, handleClick);

  return (
    <td>
      <input
        type="button"
        onClick={handleClick}
        value={number}
        className="num-button"
        style={equal ? {
          backgroundColor: 'rgba(90, 90, 90, 0.527)',
        } : {}}
      />
    </td>
  );
};

NumberButton.propTypes = {
  number: PropTypes.number,
};

NumberButton.defaultProps = {
  number: 0,
};

export { NumberButton as default };
