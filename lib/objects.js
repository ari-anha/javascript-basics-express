const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object['name'];
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  const thePerson = people.filter(a => {return a.name === name});
  return thePerson[0];
};

const findHondas = cars => {
  return cars.filter(a => {return a.manufacturer === "Honda"});
};

const averageAge = people => {
  const divideBy = people.length
  const getOurAges = people.map(a => a.age);
  const sum = getOurAges.reduce((a, b) => {
    return a + b;
    }, 0);
  return sum / divideBy;
};

const createTalkingPerson = (name, age) => {
  return {
    "name": name,
    "age": age,
    "introduce": newPerson => {
      return `Hi ${newPerson}, my name is ${name} and I am ${age}!`
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
