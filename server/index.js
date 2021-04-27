const express = require('express');
const path = require('path');
const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static serving middleware
// sends all files in the public dir
app.use(express.static(path.join(__dirname, '..', 'public')));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
  console.log(`Mixing it up on port ${PORT}`)
);
