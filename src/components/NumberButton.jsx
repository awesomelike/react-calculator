import React from 'react';

const NumberButton = ({ number }) => {
  return (
    <td><input type="button" value={number} className="num-button"/></td>
  );
};

export { NumberButton as default};