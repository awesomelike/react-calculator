import { useState } from 'react';

const useAsync = (reducer, initalState = null) => {
  const [state, setState] = useState(initalState);

  const dispatch = async (action) => {
    const result = reducer(state, action);
    const newState = await result;
    setState(newState);
  };

  return [state, dispatch];
};

export { useAsync as default };
