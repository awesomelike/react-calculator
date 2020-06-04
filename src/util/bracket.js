const isValid = (input) => {
  const openBrackets = `${input}`.match(/[(]/g);
  const closedBrackets = `${input}`.match(/[)]/g);
  if (!openBrackets) return true;
  if (!!openBrackets && !!closedBrackets) return openBrackets.length === closedBrackets.length;
  return false;
};

const countOpenBrackets = (input) => `${input}`.match(/[(]/g).length;

export { isValid as default, countOpenBrackets };
