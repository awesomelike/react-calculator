import React from 'react';

const OperationButton = ({ operation }) => {
  return (
    <td><input type="button" value={operation} className="num-button operation"/></td>
  )
}

export { OperationButton as default };