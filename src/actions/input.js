export const appendSymbol = (symbol) => ({
  type: 'APPEND_SYMBOL',
  symbol,
});

export const eraseOne = () => ({
  type: 'ERASE_ONE',
});

export const setInput = (string) => ({
  type: 'SET_INPUT',
  string,
});

export const clearInput = () => ({
  type: 'CLEAR_INPUT',
});
