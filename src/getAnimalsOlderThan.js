const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const searchForAnimal = species.find((speci) => speci.name === animal);
  const { residents } = searchForAnimal;
  const agesAnimal = residents.map((ages) => ages.age);
  return agesAnimal.every((idade) => idade > age);
}
console.log(getAnimalsOlderThan('lions', 6));

/*
1l_especies importada
4l_Função com dois parametro ANIMAL e AGE
5l_função Find busca dentro de species com callback passada e retorna o primeiro valor achado,
callback procurando PARAMETRO(speci).name  q seja igual ao PARAMETRO(animal) da função.... exe animal = 'lions
6l_destructuring ou destrurização  de residents: de searchForAnimal deixando mais exposta as propriedades.
7l_Funçao Map , acesando residenst; copia ou mapeia valor de age de residenst: exe [ 12, 15, 7, 14 ] e
é atribuito na variavel agesAnimal
8l_Com retorno \\ usando a variavel ,com a função every verifica e retorna um valor booleano, em callback se
PAAMETRO(idade) q representa praticamete os valores de agesAnimal são maiores(>) q PARAMETRO(age)
/////////console.log(getAnimalsOlderThan('lions', 6));
*/

module.exports = getAnimalsOlderThan;
