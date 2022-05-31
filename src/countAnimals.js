const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const amountAnimal = {};
    species.forEach((value) => { amountAnimal[value.name] = value.residents.length; });
    return amountAnimal;
  }
  if (!animal.sex) {
    const categoryType = species.find((value) => value.name === animal.specie);
    const { residents } = categoryType;
    return residents.length;
  }
  if (animal.sex) {
    const categoryType = species.find((value) => value.name === animal.specie);
    const { residents } = categoryType;
    const amount = residents.filter((value) => value.sex === animal.sex).length;
    return amount;
  }
}

// console.log(countAnimals({ specie: 'giraffes' }));
/*
5L - Entrando na primeira condição da função se não haver parametro
7L - Envocamos o 'species de data" e fazemos um loop com 'forEach'
 pegando os valores de name: e residents.length

*/

module.exports = countAnimals;
