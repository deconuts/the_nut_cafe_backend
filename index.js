// index.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Dry‑fruit API is alive 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
