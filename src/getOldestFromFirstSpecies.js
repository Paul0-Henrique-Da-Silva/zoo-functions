const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const fistEmployees = employees.find((person) => person.id === id);
  const fistanimalWork = fistEmployees.responsibleFor[0];
  const fistSpecies = species.find((fist) => fist.id === fistanimalWork).residents
    .map((resident) => resident);
  const arrayInSort = arraySpecie.sort((a, b) => b.age - a.age)[0];
  // const testando = fistSpecies.residents.reduce((acc, value) => ((value.age > acc) ? value.age : acc), 0);
  // return Object.values(fistSpecies.residents.find((animal) => animal.age === testandooutraforma));
  // return [arrayInSort.name, arrayInSort.sex, arrayInSort.age];
  return Object.values(arrayInSort);
}

/// jest dando varios erro nese requesito

module.exports = getOldestFromFirstSpecies;
