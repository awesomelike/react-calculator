import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';

const OperationButton = ({ operation }) => {
  const { input, setOperationClicked } = useContext(InputContext);
  const { buffer, setBuffer } = useContext(BufferContext);

  const handleClick = () => {
    const lastChar = buffer.slice(-1);
    if (buffer.length === 0) {
      setBuffer(`${input} ${operation}`);
    } else if (lastChar !== operation) {
      const updatedBuffer = buffer.replace(lastChar, operation);
      setBuffer(updatedBuffer);
    }
    setOperationClicked(true);
  };

  return (
    <td>
      <input
        type="button"
        onClick={(e) => handleClick(e)}
        value={operation}
        className="num-button operation"
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
