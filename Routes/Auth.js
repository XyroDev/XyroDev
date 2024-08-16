const express = require('express');
const router = express.Router();

router.get('/auth/login', (req, res) => {
  res.render('Auth/Login', { title: 'Xyro Development - Login' });
});

router.post('/auth/login/submit', (req, res) => {
    name = req.body.name;
    password = req.body.password;
    console.log(name);
    console.log.password
    res.send('Login Successful');

});




module.exports = router;