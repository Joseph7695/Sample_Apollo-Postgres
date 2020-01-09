const faker = require("faker");

const createFakeBook = () => ({
  title: faker.name.firstName(),
  author: faker.name.lastName()
});

exports.seed = function (knex) {
  const fakeBooks = [];
  const desiredFakes = 5;
  for (let i = 0; i < desiredFakes; i++) {
    fakeBooks.push(createFakeBook());
  }

  return knex("books")
    .del()
    .then(function () {
      return knex("books").insert(fakeBooks);
    });
};
