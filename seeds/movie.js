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

const createFakeMovie = () => ({
  name: faker.company.catchPhrase()
});

exports.seed = function(knex) {
  const fakeMovies = [];
  const desiredFakes = 5;
  for (let i = 0; i < desiredFakes; i++) {
    fakeMovies.push(createFakeMovie());
  }
  return knex("movies")
    .del()
    .then(function() {
      // Inserts seed entries
      // table.string("name");
      // table.string("address");
      return knex("movies").insert(fakeMovies);
    });
};
