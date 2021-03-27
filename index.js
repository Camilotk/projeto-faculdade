const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { User } = require('./app/models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/user/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.get('/user', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// app.put('/update/:id', (req, res) => {
//   res.json('Im in update');
// });

// app.delete('/delete/:id', (req, res) => {
//  res.json('Im in delete');
// });

app.listen(8000);
