import { useContext } from 'react';

import isOperation from '../util/operation';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { appendSymbol, setInput, eraseOne } from '../actions/input';
import isValid, { countOpenBrackets, countClosedBrackets } from '../util/bracket';

const useOperationClick = (operation) => {
  const {
    input, dispatchInput, setOperationClicked, equalClicked, setEqualClicked,
  } = useContext(InputContext);
  const { setBuffer } = useContext(BufferContext);

  const handleClick = () => {
    if (equalClicked) {
      setEqualClicked(false);
      setBuffer('');
    }
    const lastChar = `${input}`.slice(-1);
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
      else if (parseInt(input, 10) < 0) dispatchInput(setInput(`${-1 * parseInt(input, 10)}`));
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
          const fillBracketsCount = countOpenBrackets(input) - countClosedBrackets(input);
          for (let i = 0; i < fillBracketsCount; i += 1) validInput += ')';
        }
        setBuffer(`${validInput}=`);

        const expression = `${validInput}`.replace(/[×]/g, '*');

        try {
          dispatchInput(setInput(eval(expression)));
        } catch (error) {
          dispatchInput(setInput('Wrong format!'));
        }
        setEqualClicked(true);
      }
      setOperationClicked(true);
    }
  };
  return handleClick;
};

export { useOperationClick as default };
