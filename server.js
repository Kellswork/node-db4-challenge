const express = require('express');
const recipes = require('./recipe-book/recipeBookRoute');
const server = express();

server.use('/api/recipes', recipes);

module.exports = server;