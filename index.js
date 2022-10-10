const express = require('express');
const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Server is running ...</h1>')
});


module.exports= app;
