const getNthElement = (index, array) => {
  let n = array.length;
  if (n > index) {
    return array[index];
  } else {
    return array[index - n];
  }
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => { 
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(e => { 
    return e.toUpperCase()
});
};

const reverseWordsInArray = strings => {
  return strings.map(word => {
    return word.split("").reverse().join("");
  })
};

const onlyEven = numbers => {
  return numbers.filter(number => (number % 2 === 0));
};

const removeNthElement2 = (index, array) => {
  return array.filter(e => (e !== array[index]));
};

const elementsStartingWithAVowel = strings => {
  return (strings.filter(e => /^[aeiou]/i.test(e)));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((total,currentValue) => {
    return total + currentValue;
});
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
