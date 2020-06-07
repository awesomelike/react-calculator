import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { appendSymbol, clearInput } from '../actions/input';

const NumberButton = ({ number }) => {
  const { dispatchInput, equalClicked, setEqualClicked } = useContext(InputContext);
  const { setBuffer } = useContext(BufferContext);
  const handleClick = () => {
    if (equalClicked) {
      dispatchInput(clearInput());
      setBuffer('');
      dispatchInput(appendSymbol(`${number}`));
      setEqualClicked(false);
    } else {
      dispatchInput(appendSymbol(`${number}`));
    }
  };

  return (
    <td>
      <input
        type="button"
        onClick={handleClick}
        value={number}
        className="num-button"
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