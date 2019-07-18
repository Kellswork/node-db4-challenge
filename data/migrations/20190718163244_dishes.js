exports.up = function(knex) {
    return knex.schema.createTable('dishes', table => {
      table.increments();
      table.float('quantity').notNullable();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
    });
  };

  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('dishes');
};