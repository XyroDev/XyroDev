const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.render('admin', { title: 'Customer Dashboard' });
});



module.exports = router;