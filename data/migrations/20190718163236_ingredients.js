exports.up = function(knex) {
  return knex.schema.createTable('ingredients', table => {
    table.increments();
    table.text('name').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};

