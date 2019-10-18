const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/api/v1/:id', (req, res) => {
  console.log('***********',req.params.id);
res.send(req.params.id)
});

app.listen(PORT, HOST);

console.log("PM2 running")
console.log(`Running on http://${HOST}:${PORT}`);