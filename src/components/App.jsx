import React, { useState, useReducer } from 'react';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';

const App = () => {
  const [input, setInput] = useState('');
  const [buffer, setBuffer] = useState('');

  return (
    <div className="layout">
      <div className="layout__rectange">
        <table className="table">
          <tr>
            <td><p className="buffer">24+</p></td>
          </tr>
          <tr>
            {/* <td><input type="input"/></td> */}
            <td>
              <div className="input">
                <p>{input}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="button" value="C" className="num-button" id="c-key"/></td>
          </tr>
          <tr>
            <table className="button-table">
              <tr>
                <NumberButton number={1} />
                <NumberButton number={2} />
                <NumberButton number={3} />
                <OperationButton operation={'/'} />
              </tr>
              <tr>
                <NumberButton number={4} />
                <NumberButton number={5} />
                <NumberButton number={6} />
                <OperationButton operation={'×'} />
              </tr>
              <tr>
                <NumberButton number={7} />
                <NumberButton number={8} />
                <NumberButton number={9} />
                <OperationButton operation={'+'} />
              </tr>
              <tr>
                <td><input type="button" value="+/-" className="num-button"/></td> 
                <NumberButton number={0} />
                <td><input type="button" value="." className="num-button"/></td> 
                <OperationButton operation={'='} />
              </tr>
            </table>
          </tr>
          <img src="logo192.png" alt="React" className="layout__logo"/>
        </table>
      </div>
    </div>
  );
};

export { App as default };