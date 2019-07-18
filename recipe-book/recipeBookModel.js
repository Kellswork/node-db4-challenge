const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipeId) {
  return db
    .select('ingredients.name', 'dishes.quantity')
    .from('dishes')
    .join(
      'ingredients as ingredients',
      'ingredients.id',
      'dishes.ingredient_id'
    )
    .join('recipes', 'recipes.id', 'dishes.recipe_id')
    .where('recipes.id', recipeId);
}

function getInstructions(recipeId) {
  return db
    .select('instruction', 'instruction_number')
    .from('instructions')
    .where('recipe_id', recipeId)
    .orderBy('instruction_number');
}

/*
select instruction, instruction_number 
from instructions where recipe_id = 3 
order by instruction_number 
*/
