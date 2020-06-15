const negate = a => {
  return a !== true;
};

const both = (a, b) => {
  return a === true && b === true;
};

const either = (a, b) => {
  return a === true || b === true;
};

const none = (a, b) => {
  return a !== true && b !== true;
};

const one = (a, b) => {
  return a !== b;
};

const truthiness = a => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 !== 0;
};

const isEven = a => {
  return a % 2 === 0;
};

const isSquare = a => {
  return Math.sqrt(a) === Math.trunc(Math.sqrt(a));
};

const startsWith = (char, string) => {
  return string[0] === char;
};

const containsVowels = string => {
  if (string.match(/[aeiou]/gi) !== null) {
    return true;
  }
  return false;
};

const isLowerCase = string => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
