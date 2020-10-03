const isOperation = (symbol) => ['+', '-', '×', '/'].includes(symbol);
const t = (key) => {
  switch (key) {
    case '*':
      return '×';
    case '/':
      return '/';
    case '+':
      return '+';
    case '-':
      return '-';
    case 'Backspace':
      return '⌫';
    case 'Enter':
      return '=';
    case 'C':
    case 'c':
      return 'C';
    case '(':
    case ')':
      return '( )';
    default:
      return key;
  }
};
export { isOperation as default, t };
