const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const achadoFun = employees.find((fun) =>
    fun.firstName === employeeName || fun.lastName === employeeName);
  return achadoFun;
}

module.exports = getEmployeeByName;
