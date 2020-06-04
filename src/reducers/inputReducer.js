import isOperation from '../util/operation';

// eslint-disable-next-line consistent-return
const inputReducer = (state, action) => {
  switch (action.type) {
    case 'APPEND_SYMBOL': {
      const { symbol } = action;
      if (state === '0') {
        if (isOperation(symbol)) {
          return ` ${state + action.symbol}`.trim();
        }
        return `${action.symbol}`;
      } return ` ${state + action.symbol}`.trim();
    }
    case 'ERASE_ONE': {
      const stateLength = `${state}`.length;
      return `${state}` === '0' || stateLength === 1 ? '0' : `${state}`.substring(0, stateLength - 1);
    }
    case 'SET_INPUT':
      return action.string;
    case 'CLEAR_INPUT':
      return '0';
    default:
      break;
  }
};

export { inputReducer as default };
