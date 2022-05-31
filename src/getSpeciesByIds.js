const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const novaArrayS = species.filter(({ id }) => ids.includes(id));
  return novaArrayS;
}

/*
3l Fazendo a destrurização para o array de obj {species}
5l função com parametro SPREAD..
6l hof atribuida em uma variavel usando filter e em seu callback(com a desestruturização de species:id)
 PARAMETRO(ids) usando 'includes' verifica(valores) e confima se PARAMETRO(ids) existe em 'id'

a destruzição do id no parametro.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
http://cangaceirojavascript.com.br/array-includes-vs-array-some/
*/
console.log(getSpeciesByIds('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getSpeciesByIds;
