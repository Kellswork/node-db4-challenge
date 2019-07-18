const express = require('express');
const { getRecipes, getShoppingList, getInstructions } = require('./recipeBookModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await getRecipes();
    return res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'server failed to get recipes' });
  }
});

router.get('/:id/shoppingList', async (req, res) => {
    try {
      const shoppingList = await getShoppingList(req.params.id);
      return res.status(200).json(shoppingList);
    } catch (error) {
      res.status(500).json({ error: 'server failed to get shopping list' });
    }
});
  
router.get('/:id/instructions', async (req, res) => {
    try {
      const instructions = await getInstructions(req.params.id);
      return res.status(200).json(instructions);
    } catch (error) {
      res.status(500).json({ error: 'server failed to get instructions' });
    }
  });

module.exports = router;
