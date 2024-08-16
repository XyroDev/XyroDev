const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Customer Dashboard' });
});

module.exports = router;