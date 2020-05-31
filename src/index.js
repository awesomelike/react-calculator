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
            <td><p>Calculation buffer</p></td>
          </tr>
          <tr>
            <td><input type="input" value="text"/></td>
          </tr>
          <tr>
            <td><input type="button" value="C"/></td>
          </tr>
          <tr>
            <table className="button-table">
              <tr>
                <td><input type="button" value="1"/></td>
                <td><input type="button" value="2"/></td>
                <td><input type="button" value="3"/></td>
                <td><input type="button" value="/"/></td>
              </tr>
              <tr>
                <td><input type="button" value="4"/></td>
                <td><input type="button" value="5"/></td>
                <td><input type="button" value="6"/></td>
                <td><input type="button" value="×"/></td>
              </tr>
              <tr>
                <td><input type="button" value="7"/></td>
                <td><input type="button" value="8"/></td>
                <td><input type="button" value="9"/></td>
                <td><input type="button" value="+"/></td>
              </tr>
              <tr>
                <td><input type="button" value="." /></td> 
                <td><input type="button" value="0"/></td> 
                <td><input type="button" value="="/></td> 
                <td><input type="button" value="*"/></td> 
              </tr>
            </table>
          </tr>
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
