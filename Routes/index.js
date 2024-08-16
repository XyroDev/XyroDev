const express = require('express');
const router = express.Router();

router.get('/auth/login', (req, res) => {
  res.render('Auth/Login', { title: 'Xyro Development - Login' });
});

router.post('/auth/login/submit', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  console.log(name);
  console.log(password);
  res.send('Login Successful');
});

router.get('/index/dashboard', (req, res) => {
  res.send('Welcome to the Dashboard!');
});

module.exports = router;
