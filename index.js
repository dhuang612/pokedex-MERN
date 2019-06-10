const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./api/Pokemon');

const port = 3000;
app.get('/', (req, res) => res.send('hello world!'));
app.listen(port, () =>
  console.log(`node server up and listening on port ${port}`)
);
