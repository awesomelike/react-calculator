import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { appendSymbol, setInput, eraseOne } from '../actions/input';
import isOperation from '../util/operation';
import isValid, { countOpenBrackets } from '../util/bracket';

const OperationButton = ({ operation }) => {
  const {
    input, dispatchInput, setOperationClicked, setEqualClicked,
  } = useContext(InputContext);
  const { setBuffer } = useContext(BufferContext);

  const handleClick = () => {
    const lastChar = input.slice(-1);
    if (operation === '⌫') {
      dispatchInput(eraseOne());
    } else if (operation === '( )') {
      const isPaired = isValid(input);
      if (input === '0') dispatchInput(setInput('('));
      else if (lastChar === '(') dispatchInput(appendSymbol('('));
      else if (isPaired && (isOperation(lastChar) || lastChar === '(')) {
        dispatchInput(appendSymbol('('));
      } else if (isPaired && (!isOperation(lastChar) || lastChar === ')')) {
        dispatchInput(appendSymbol('×('));
      } else if (!isPaired) dispatchInput(appendSymbol(')'));
    } else if (operation === '+/-') {
      if (input === '0') dispatchInput(setInput('(-'));
      else if (input === '(-') dispatchInput(setInput('0'));
      else if (isOperation(lastChar) || lastChar === '(') dispatchInput(appendSymbol('(-'));
      else dispatchInput(setInput(`(-${input}`));
    } else {
      if (operation !== '=') {
        if (isOperation(lastChar) && lastChar !== operation) {
          dispatchInput(setInput(input.substring(0, input.length - 1) + operation));
        } else if (!isOperation(lastChar)) {
          dispatchInput(appendSymbol(operation));
        }
      } else {
        const inputLength = input.length;
        let validInput;
        if (isOperation(input[inputLength - 1])) {
          validInput = input.substring(0, inputLength - 1);
        } else validInput = input;
        if (!isValid(input)) {
          const openBracketsCount = countOpenBrackets(input);
          for (let i = 0; i < openBracketsCount; i += 1) validInput += ')';
        }
        setBuffer(`${validInput}=`);

        const expression = validInput.replace(/[×]/g, '*');

        // eslint-disable-next-line no-eval
        dispatchInput(setInput(eval(expression)));
        setEqualClicked(true);
      }
      setOperationClicked(true);
    }
  };

  return (
    <td>
      <input
        type="button"
        onClick={handleClick}
        value={operation}
        className={operation !== '+/-' ? 'num-button operation' : 'num-button'}
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
