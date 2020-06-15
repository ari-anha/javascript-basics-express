const express = require('express');

const app = express();
app.use(express.json());

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings.js');

const { add, subtract, multiply, divide, remainder } = require('../lib/numbers.js');

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans.js');
const {
  getNthElement,
  arrayToCSVString,
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
  sortByLastLetter,
} = require('../lib/arrays.js');
// Can also be written
// const sayHello = require('../lib/strings.js').sayHello;

// STRINGS
// sayhello
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

// uppercase
app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

// lowercase
app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

// firstCharacter
app.get('/strings/first-character/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});

// first-characters
app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacters(req.params.string, parseInt(req.query.length)) });
});

// NUMBERS
// add
app.get('/numbers/add/:a/and/:b', (req, res) => {
  const numberA = parseInt(req.params.a);
  const numberB = parseInt(req.params.b);

  if (Number.isNaN(numberA) === true || Number.isNaN(numberB) === true) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: add(numberA, numberB) });
  }
});
// subtract
app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const numberA = parseInt(req.params.a);
  const numberB = parseInt(req.params.b);

  if (Number.isNaN(numberA) === true || Number.isNaN(numberB) === true) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: subtract(numberA, numberB) });
  }
});

// multiply
app.post('/numbers/multiply', (req, res) => {
  const numberA = parseInt(req.body.a, 10);
  const numberB = parseInt(req.body.b, 10);

  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(numberA) || Number.isNaN(numberB)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.json({ result: multiply(numberA, numberB) });
  }
});

// divide
app.post('/numbers/divide', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
  const numberA = parseInt(a, 10);
  const numberB = parseInt(b, 10);

  if (numberB === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(numberA) || Number.isNaN(numberB)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.json({ result: divide(numberA, numberB) });
  }
});

// remainder
app.post('/numbers/remainder', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
  const numberA = parseInt(a, 10);
  const numberB = parseInt(b, 10);

  if (numberB === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(numberA) || Number.isNaN(numberB)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: remainder(numberA, numberB) });
  }
});

// BOOLEANS
// negate
app.post('/booleans/negate', (req, res) => {
  res.json({ result: negate(req.body.value) });
});

// truthiness
app.post('/booleans/truthiness', (req, res) => {
  res.json({ result: truthiness(req.body.value) });
});

// isOdd
app.get('/booleans/is-odd/:number', (req, res) => {
  if (Number.isNaN(parseInt(req.params.number, 10))) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.json({ result: isOdd(req.params.number) });
  }
});

// startsWith
app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string } = req.params;
  const { char } = req.params;

  if (char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.json({ result: startsWith(char, string) });
  }
});

// ARRAYS
// getNthElement
app.post('/arrays/element-at-index/:index', (req, res) => {
  res.json({ result: getNthElement(req.params.index, req.body.array) });
});

// arrayToCSVString
app.post('/arrays/to-string', (req, res) => {
  res.json({ result: arrayToCSVString(req.body.array) });
});

// addToArray2
app.post('/arrays/append', (req, res) => {
  res.json({ result: addToArray2(req.body.value, req.body.array) });
});

// elementsStartingWithAVowel
app.post('/arrays/starts-with-vowel', (req, res) => {
  res.json({ result: elementsStartingWithAVowel(req.body.array) });
});

// removeNthElement
app.post('/arrays/remove-element', (req, res) => {
  if (req.query.index === undefined) {
    res.json({ result: removeNthElement2(0, req.body.array) });
  } else {
    res.json({ result: removeNthElement2(req.query.index, req.body.array) });
  }
});

module.exports = app;
