const express = require('express');

// retrieve feeds
const feedRoutes = require('./routes/feed');

const app = express();
app.use(express.json());

// RESOLVE CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.static('public'));
app.use('/feed', feedRoutes);

app.listen(8082);