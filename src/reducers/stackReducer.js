const stackReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.element];
    default:
      return state;
  }
};

export { stackReducer as default };
