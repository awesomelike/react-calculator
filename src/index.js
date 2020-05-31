import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/main.scss'; 

// Is this nice? GOOD JOB!!! You are senior developer! :) ☺ 
const App = () => {
  return (
    <div className="layout">
      <div className="layout__rectange">
        <table className="table">
          <tr>
            <td><p className="buffer">Calculation buffer</p></td>
          </tr>
          <tr>
            <td><input type="input"/></td>
          </tr>
          <tr>
            <td><input type="button" value="C" className="num-button" id="c-key"/></td>
          </tr>
          <tr>
            <table className="button-table">
              <tr>
                <td><input type="button" value="1" className="num-button"/></td>
                <td><input type="button" value="2" className="num-button"/></td>
                <td><input type="button" value="3" className="num-button"/></td>
                <td><input type="button" value="/" className="num-button operation"/></td>
              </tr>
              <tr>
                <td><input type="button" value="4" className="num-button"/></td>
                <td><input type="button" value="5" className="num-button"/></td>
                <td><input type="button" value="6" className="num-button"/></td>
                <td><input type="button" value="×" className="num-button operation"/></td>
              </tr>
              <tr>
                <td><input type="button" value="7" className="num-button"/></td>
                <td><input type="button" value="8" className="num-button"/></td>
                <td><input type="button" value="9" className="num-button"/></td>
                <td><input type="button" value="+" className="num-button operation"/></td>
              </tr>
              <tr>
                <td><input type="button" value="+/-" className="num-button"/></td> 
                <td><input type="button" value="0" className="num-button"/></td> 
                <td><input type="button" value="." className="num-button"/></td> 
                <td><input type="button" value="=" className="num-button operation"/></td> 
              </tr>
            </table>
          </tr>
          <img src="logo192.png" alt="React" className="layout__logo"/>
        </table>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
