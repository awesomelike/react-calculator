import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { appendSymbol, clearInput } from '../actions/input';

const NumberButton = ({ number }) => {
  const {
    input, dispatchInput, equalClicked, setEqualClicked,
  } = useContext(InputContext);
  const { setBuffer } = useContext(BufferContext);
  const handleClick = () => {
    const symbol = `${number}`;
    if (equalClicked) {
      dispatchInput(clearInput());
      setBuffer('');
      dispatchInput(appendSymbol(symbol));
      setEqualClicked(false);
    } else if (number !== '.' || input.substr(-1) !== '.') dispatchInput(appendSymbol(symbol));
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
