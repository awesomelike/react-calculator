const inputReducer = (state, action) => {
  switch (action.type) {
    case 'APPEND_NUMBER':
      return state === '0' ? `${action.number}` : state + `${action.number}`;
    case 'CLEAR_INPUT':
      return '0';
    default:
      break;
  }
}

export { inputReducer as default };