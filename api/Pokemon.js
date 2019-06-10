const axios = require('axios');
const async = require('async');
const memoryCache = require('memory-cache');
const Promise = require('es6-promise').Promise;
const Pokedex = require('pokedex-promise-v2');
const util = require('util');

const options = {
  protocol: 'https',
  cacheLimit: 100 * 1000,
  timeout: 10 * 1000
};
const Poke = new Pokedex(options);
Poke.resource(['api/v2/pokedex/2/'])
  .then(function displayPokemon(req, res) {
    for (let i = 0; i < req.length; i++) {
      console.log(req[i]);
    }
  })
  .catch(error => console.log(error));
