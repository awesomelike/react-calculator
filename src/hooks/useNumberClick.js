import { useContext } from 'react';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { appendSymbol, clearInput } from '../actions/input';

const useNumberClick = (number) => {
  const {
    dispatchInput, equalClicked, setEqualClicked,
  } = useContext(InputContext);
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

  return handleClick;
};

export { useNumberClick as default };
