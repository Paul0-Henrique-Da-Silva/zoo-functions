const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const visitors = {
    child: entrants.filter((value) => value.age < 18).length,
    adult: entrants.filter((value) => value.age >= 18 && value.age < 50).length,
    senior: entrants.filter((value) => value.age >= 50).length,
  };
  return visitors;
}

function calculateEntry(entrants) {
  const visitors = countEntrants(entrants);

  if (!visitors || Object.keys(visitors).length === 0
  || Object.values(visitors).length === 0) return 0;
  if (Object.keys(entrants.length > 0)) {
    const priceChild = visitors.child * prices.child;
    const priceAdult = visitors.adult * prices.adult;
    const priceSenior = visitors.senior * prices.senior;
    const Allvalues = priceChild + priceAdult + priceSenior;
    return Allvalues;
  }
}
/* 5l - condição verifica se entrada for falsa ou
se o coprimento  obj pelas chave forem igual a 0 , retorne 0
7L - obj visitors com chave atribuida,
 atribuida funçoes no valor .. q retorna seus valores com filter
 8,9,10L - filter segue seu parametro atribuido na callback e
 retorna numero de  idades, e por final vemos seu comprimeto'lenght'

 16L - pegamos a função anterior e atribuimos na variavel (variavel
   tem valores da função q no caso seria o return q corresponde o obj visitors)
 18L -   se valores de visitors for falso ou chaves ou valores de comprimento
  dentro de obj tambem forem , retorn 0
 19L - Ou então se comprimento de chave forem maior 0. pegara valorde obj
  da chave de visitors que corresponde em comprimento e  multiplicamos  e
  atribuimos em variaveis,(obs: exportamo obj price na linha 2)
*/
module.exports = { calculateEntry, countEntrants };
