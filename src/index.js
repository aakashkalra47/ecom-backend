const express = require('express');
require('dotenv').config();
require('./db');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.use('/', routes);

const server = app.listen(PORT, () => {
  console.log('1..server connected at port', server.address().port);
});
