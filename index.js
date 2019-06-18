const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//pokemon api
require('./api/Pokemon');

//pokemon schema
require('./models/Pokedata');

const port = 3000;
app.get('/', (req, res) => res.send('hello world!'));

app.use(express.static('api/Pokemon'));
app.listen(port, () =>
  console.log(`node server up and listening on port ${port}`)
);
