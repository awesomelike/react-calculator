import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { appendSymbol, setInput } from '../actions/input';
import isOperation from '../util/operation';

const OperationButton = ({ operation }) => {
  const {
    input, dispatchInput, setOperationClicked, setEqualClicked,
  } = useContext(InputContext);
  const { setBuffer } = useContext(BufferContext);

  const handleClick = () => {
    if (operation !== '=') {
      const lastChar = input.slice(-1);
      if (isOperation(lastChar) && lastChar !== operation) {
        dispatchInput(setInput(input.substring(0, input.length - 1) + operation));
      } else if (!isOperation(lastChar)) {
        dispatchInput(appendSymbol(operation));
      }
    } else {
      setBuffer(`${input}=`);

      // eslint-disable-next-line no-eval
      dispatchInput(setInput(eval(input.replace('×', '*'))));
      setEqualClicked(true);
    }
    setOperationClicked(true);
  };

  return (
    <td>
      <input
        type="button"
        onClick={handleClick}
        value={operation}
        className="num-button operation"
      />
    </td>
  );
};

OperationButton.defaultProps = {
  operation: '+',
};

OperationButton.propTypes = {
  operation: PropTypes.string,
};

export { OperationButton as default };
