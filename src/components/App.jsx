import React, { useReducer, useState } from 'react';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { clearInput } from '../actions/input';
import inputReducer from '../reducers/inputReducer';
import Buffer from './Buffer';

const App = () => {
  const [input, dispatchInput] = useReducer(inputReducer, '0');
  const [buffer, setBuffer] = useState('');
  const [operationClicked, setOperationClicked] = useState(false);
  const [equalClicked, setEqualClicked] = useState(false);

  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => {
  //     console.log(e);
  //   });
  // }, []);

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
          <div className="layout__rectange">
            <table className="table">
              <tr>
                {buffer && <Buffer buffer={buffer} />}
              </tr>
              <tr>
                <td>
                  <div className="input">
                    <span>{input}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <table className="button-table">
                  <tr>
                    <td>
                      <input
                        type="button"
                        value="C"
                        className="num-button"
                        id="c-key"
                        onClick={() => {
                          dispatchInput(clearInput());
                          setBuffer('');
                        }}
                      />
                    </td>
                    <OperationButton operation="/" />
                    <OperationButton operation="×" />
                    <OperationButton operation="⌫" />
                  </tr>
                  <tr>
                    <NumberButton number={7} />
                    <NumberButton number={8} />
                    <NumberButton number={9} />
                    <OperationButton operation="-" />
                  </tr>
                  <tr>
                    <NumberButton number={4} />
                    <NumberButton number={5} />
                    <NumberButton number={6} />
                    <OperationButton operation="+" />
                  </tr>
                  <tr>
                    <NumberButton number={1} />
                    <NumberButton number={2} />
                    <NumberButton number={3} />
                    <OperationButton operation="( )" />
                  </tr>
                  <tr>
                    <OperationButton operation="+/-" />
                    <NumberButton number={0} />
                    <NumberButton number="." />
                    <OperationButton operation="=" />
                  </tr>
                </table>
              </tr>
              <img
                src="react-calculator/logo192.png"
                alt="React logo"
                className="layout__logo"
              />
            </table>
          </div>
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
