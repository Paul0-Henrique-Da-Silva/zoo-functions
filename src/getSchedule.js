const data = require('../data/zoo_data');

const { hours, species } = data;

const dayOftheWeek = Object.keys(hours);

function verifyTime(day) {
  const allHours = Object.values(hours[day]);
  if (allHours[0] === 0) { return 'CLOSED'; }
  return `Open from ${allHours[0]}am until ${allHours[1]}pm`;
}

function verify(day) {
  const days = species.filter((value) => value.availability.includes(day) === true);
  if (days.length === 0) { return 'The zoo will be closed!'; }
  return days.map((value) => value.name);
}
function parameterNotF() {
  const AxhibitionTime = dayOftheWeek.reduce((acc, value) => {
    acc[value] = {
      officeHour: verifyTime(value),
      exhibition: verify(value) };
    return acc;
  }, {});
  return AxhibitionTime;
}

function getSchedule(scheduleTarget) {
  const allAnimal = species.map((value) => value.name);
  if (allAnimal.includes(scheduleTarget)) {
    const allAnimalsExhibition = species.find((value) => value.name === scheduleTarget);
    return allAnimalsExhibition.availability;
  }
  if (dayOftheWeek.includes(scheduleTarget)) {
    const obj = {};
    obj[scheduleTarget] = {
      officeHour: verifyTime(scheduleTarget),
      exhibition: verify(scheduleTarget),
    };
    return obj;
  }
  return parameterNotF();
}
console.log(getSchedule());

module.exports = getSchedule;
