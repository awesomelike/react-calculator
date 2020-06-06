import React, { useReducer, useState } from 'react';
import Calculator from './Calculator';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import inputReducer from '../reducers/inputReducer';

const App = () => {
  const [input, dispatchInput] = useReducer(inputReducer, '0');
  const [buffer, setBuffer] = useState('');
  const [operationClicked, setOperationClicked] = useState(false);
  const [equalClicked, setEqualClicked] = useState(false);

  return (
    <InputContext.Provider value={{
      input,
      dispatchInput,
      operationClicked,
      setOperationClicked,
      equalClicked,
      setEqualClicked,
    }}
    >
      <BufferContext.Provider value={{ buffer, setBuffer }}>
        <div className="layout">
          <Calculator />
          <button onClick={() => console.log('clicked')} className="button-background" type="button">Change background</button>
          <div className="github-container">
            <img src="react-calculator/github.png" className="github-container__logo" alt="Github logo" />
            <a href="https://github.com/awesomelike" className="github-container__link">@awesomelike</a>
          </div>
        </div>
      </BufferContext.Provider>
    </InputContext.Provider>
  );
};

export { App as default };
