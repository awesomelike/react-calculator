import React, { useReducer, useState, useEffect } from 'react';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { clearInput } from '../actions/input';
import inputReducer from '../reducers/inputReducer';

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
                <td>
                  <p className="buffer">
                    {buffer}
&nbsp;
                  </p>
                </td>
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
                    {/* <td>
                      <input type="button" value="+/-" className="num-button" />
                    </td> */}
                    <OperationButton operation="+/-" />
                    <NumberButton number={0} />
                    <NumberButton number="." />
                    <OperationButton operation="=" />
                  </tr>
                </table>
              </tr>
              <img
                src="logo192.png"
                alt="React logo"
                className="layout__logo"
              />
            </table>
          </div>
        </div>
      </BufferContext.Provider>
    </InputContext.Provider>
  );
};

export { App as default };
