const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    return getAge(person.yearOfBirth, person.yearOfDeath) >
      getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      ? person
      : oldest;
  });
};
const getAge = (birth, death) => {
  if (!death) {
    return new Date().getFullYear() - birth;
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
