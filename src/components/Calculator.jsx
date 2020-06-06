import React, { useContext } from 'react';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';
import Buffer from './Buffer';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { clearInput } from '../actions/input';

const Calculator = () => {
  const { input, dispatchInput } = useContext(InputContext);
  const { buffer, setBuffer } = useContext(BufferContext);

  return (
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
  );
};

export { Calculator as default };
