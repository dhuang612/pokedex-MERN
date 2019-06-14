const mongoose = require('mongoose');
const { Schema } = mongoose;

const pokemonSchema = new Schema({
  name: String,
  stats: Array
});

mongoose.model('pokemon', pokemonSchema);
