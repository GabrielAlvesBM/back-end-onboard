const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
  res.send({ data: 'Hello, World!' });
});

app.listen(PORT, () => {
  console.log(`Running in: http://localhost:${PORT}`);
});
