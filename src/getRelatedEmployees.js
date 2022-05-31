const data = require('../data/zoo_data');
// const { employees } = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const searchManager = employees
    .map(({ managers }) => managers).join().split(',');
  return searchManager.some((value) => value === id);
}
// destru com mapeameto de manager, juntando os arrays e dps juntando todas elas
// node com b.o n funfa ,.flat() q queria usa :< ou replace()

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const gerenteId = employees
    .filter((gerente) => gerente.managers[0] === managerId
        || gerente.managers[1] === managerId);

  const nomes = gerenteId
    .map((nome) => `${nome.firstName} ${nome.lastName}`);
  return nomes;
}

module.exports = { isManager, getRelatedEmployees };
