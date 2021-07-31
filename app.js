const express = require('express');

// retrieve feeds
const feedRoutes = require('./routes/feed');

const app = express();
app.use(express.json());
app.use('/feed', feedRoutes);

app.listen(8080);