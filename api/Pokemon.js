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
/*
can we push the results to an array and then iterate over to grab the info we want?

*/
const Pokedata = [];
const Poke = new Pokedex(options);
Poke.resource(['api/v2/pokedex/2/'])
  .then(function displayPokemon(req, res) {
    // console.log(req[0].pokemon_entries);
    for (let i = 0; i < req.length; i++) {
      if (req[i].pokemon_entries) {
        Pokedata.push(req[i].pokemon_entries);
        console.log(Pokedata);
      }
    }
  })
  .catch(error => console.log(error));
