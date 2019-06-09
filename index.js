const express = require('express');
const bodyParser = require('body-parser');
require('./api/Pokemon');
const app = express();
app.use(bodyParser.json());
const port = 3000;
app.get('/', (req, res) => res.send('hello world!'));
app.listen(port, () =>
  console.log(`node server up and listening on port ${port}`)
);
