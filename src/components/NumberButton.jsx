import React, { useContext } from 'react';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import { appendNumber, clearInput } from '../actions/input';

const NumberButton = ({ number }) => {
	const { dispatchInput, operationClicked, setOperationClicked } = useContext(InputContext);
	const { buffer } = useContext(BufferContext);
	const handleClick = () => {
		if (operationClicked) {
			dispatchInput(clearInput());
			dispatchInput(appendNumber(number));
		} else {
			dispatchInput(appendNumber(number));
		}
		setOperationClicked(false);
	}

	return (
		<td>
			<input
				type="button"
				onClick={handleClick}
				value={number}
				className="num-button"
			/>
		</td>
	);
};

export { NumberButton as default };
