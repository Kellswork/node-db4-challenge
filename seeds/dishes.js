
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {quantity: 20.5, recipe_id: 3, ingredient_id: 3 },
        {quantity: 22.5, recipe_id: 4, ingredient_id: 2 },
        {quantity: 6, recipe_id: 3, ingredient_id: 4 },
      ]);
    });
};
