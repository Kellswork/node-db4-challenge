exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'cup of flour' },
        { name: 'gram of butter' },
        { name: 'cup of condensed milk' },
        { name: 'cup of whip cream' }
      ]);
    });
};
