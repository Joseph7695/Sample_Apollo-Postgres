exports.up = knex => {
  return knex.schema
    .createTable('books', table => {
      table.increments('id').primary()
      table.string('title')
      table.string('author')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('books')
}
