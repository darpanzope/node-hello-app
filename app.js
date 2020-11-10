'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

app.get('/me1', (req, res) => {
  res.status(200).send('Hello, me1!').end();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
