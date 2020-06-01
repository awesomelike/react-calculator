import React from 'react';

const NumberButton = ({ number }) => {
  const appendNumber = () => {
    dispatchEvent()
  }

  return (
    <td>
      <input type="button" onClick={appendNumber} value={number} className="num-button"/>
    </td>
  );
};

export { NumberButton as default};