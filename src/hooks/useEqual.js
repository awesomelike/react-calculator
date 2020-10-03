import { useContext, useState, useEffect } from 'react';
import KeyContext from '../context/keyContext';

const useEqual = (value, handleClick) => {
  const { pressed } = useContext(KeyContext);
  const [equal, setEqual] = useState(false);

  useEffect(() => {
    if (pressed === value) {
      handleClick();
      setEqual(true);
      setTimeout(() => {
        setEqual(false);
      }, 100);
    }
  }, [pressed]);

  return equal;
};

export { useEqual as default };
