exports.up = function(knex) {
  return knex.schema.createTable('instructions', table => {
    table.increments();
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.text('instruction').notNullable();
    table.integer('instruction_number').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructions');
};
