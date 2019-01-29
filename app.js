const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });

const app = express();
app.set('view engine', 'ejs');

app.get('/' , (req, res) => {
  res.render('home');
});

app.get('/secret', (req, res) => {
  res.render('secret');
});

app.listen(3000, () => {
  console.log('Server is running...');
});