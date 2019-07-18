exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'how to prepare chicken pots' },
        { name: 'brown rice' },
        { name: 'the best ice cream recipe everr' },
        { name: 'brown rice' },
        { name: 'ice crean cake' }
      ]);
    });
};
