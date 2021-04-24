const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`Mixing it up on port ${PORT}`)
);

