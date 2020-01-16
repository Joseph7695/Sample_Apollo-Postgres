const faker = require("faker");

const createFakePerson = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.random.number(50),
  address: faker.address.streetAddress()
});

const createFakeAnimal = () => ({
  name: faker.commerce.productName(),
  species: faker.commerce.product()
});

const createFakeMovies = () => ({
  name: faker.company.catchPhrase()
});

exports.seed = function(knex) {
  const fakeAnimals = [];
  const desiredFakes = 5;
  for (let i = 0; i < desiredFakes; i++) {
    fakeAnimals.push(createFakeAnimal());
  }
  return knex("animals")
    .del()
    .then(function() {
      // Inserts seed entries
      // table.string("name");
      // table.string("address");
      return knex("animals").insert(fakeAnimals);
    });
};
