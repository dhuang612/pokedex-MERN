const axios = require('axios');
const async = require('async');
const memoryCache = require('memory-cache');
const Promise = require('es6-promise').Promise;
const Pokedex = require('pokedex-promise-v2');
const options = {
  protocol: 'https',
  cacheLimit: 100 * 1000,
  timeout: 10 * 1000
};
var Poke = new Pokedex(options);
Poke.resource(['api/v2/pokedex/2/'])
  .then(function(req, res) {
    console.log(req);
  })

  .catch(function(error) {
    console.log('there was an error: ', error);
  });

//https://pokeapi.co/api/v2/pokedex/2/pokemon_entries
