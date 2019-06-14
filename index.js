const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//pokemon api
require('./api/Pokemon');

//pokemon schema
require('./models/Pokedata');

const port = 3000;
app.get('/', (req, res) => res.send('hello world!'));
app.get('/pokemon', function(req, res) {
  res.post(req.Pokedata);
});

app.listen(port, () =>
  console.log(`node server up and listening on port ${port}`)
);
