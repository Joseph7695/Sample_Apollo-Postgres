const faker = require("faker");

const createFakePerson = () => ({
  address: JSON.stringify(faker.address.streetAddress()),
  age: faker.random.number(50),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});

exports.seed = function(knex) {
  const fakePersons = [];
  const desiredFakes = 5;

  console.log(createFakePerson());
  for (let i = 0; i < desiredFakes; i++) {
    fakePersons.push(createFakePerson());
  }

  return knex("persons")
    .del()
    .then(function() {
      return knex("persons").insert(fakePersons);
    });
};
