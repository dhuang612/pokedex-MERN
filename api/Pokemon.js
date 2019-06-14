const axios = require('axios');
const async = require('async');
const memoryCache = require('memory-cache');
const Promise = require('es6-promise').Promise;
const Pokedex = require('pokedex-promise-v2');
const util = require('util');
const Pokedata = [];
const options = {
  protocol: 'https',
  cacheLimit: 100 * 1000,
  timeout: 10 * 1000
};
/*
can we push the results to an array and then iterate over to grab the info we want?

*/

const Poke = new Pokedex(options);
Poke.resource(['api/v2/pokedex/2/'])
  .then(async function displayPokemon(req, res) {
    // console.log(req[0].pokemon_entries);
    for (let i = 0; i < req.length; i++) {
      if (req[i].pokemon_entries) {
        Pokedata.push(req[i].pokemon_entries);
        const pokemon = await req.Pokedata.save();
        res.send(pokemon);
        //console.log(Pokedata);
      }
      return Pokedata;
    }
  })

  .catch(error => console.log(error));

console.log(Pokedata);
/*
.then(
    Pokedata.forEach(function(pokemon_entries) {
      const pokeStats = [];
      pokeStats.push(pokemon_entries.pokemon_species.url);
      for (let x = 0; x < pokeStats.length; x++) {
        Poke.resource(['api/v2/pokedex/2/pokeStats[x]']).then(
          console.log(Poke)
        );
      }
    })
  )

*/
