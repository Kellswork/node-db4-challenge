exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          recipe_id: 3,
          instruction: 'pour a cup of whip cream in a bowl',
          instruction_number: 1
        },
        {
          recipe_id: 3,
          instruction: 'whisk till perfection',
          instruction_number: 2
        },
        {
          recipe_id: 3,
          instruction: 'add condensed milk',
          instruction_number: 3
        },
        {
          recipe_id: 3,
          instruction: 'refrigerate for 6 hours',
          instruction_number: 4
        },
        {
          recipe_id: 4,
          instruction: 'add a cup of butter to a pan',
          instruction_number: 1
        }
      ]);
    });
};
