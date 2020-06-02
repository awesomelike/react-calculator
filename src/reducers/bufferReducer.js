const bufferReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.string;
    default:
      return state;
  }
};

export { bufferReducer as default };