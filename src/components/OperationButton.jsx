import React from 'react';
import PropTypes from 'prop-types';
import useOperationClick from '../hooks/useOperationClick';
import useEqual from '../hooks/useEqual';

const OperationButton = ({ operation }) => {
  const handleClick = useOperationClick(operation);
  const equal = useEqual(operation, handleClick);

  return (
    <td>
      <input
        type="button"
        onClick={handleClick}
        value={operation}
        className={operation !== '+/-' ? 'num-button operation' : 'num-button'}
        style={equal ? {
          background: 'linear-gradient(to right, rgb(207, 134, 45), rgba(201, 131, 46, 0.15))',
          transform: 'translateY(2px)',
        } : {}}
      />
    </td>
  );
};

OperationButton.defaultProps = {
  operation: '+',
};

OperationButton.propTypes = {
  operation: PropTypes.string,
};

export { OperationButton as default };
