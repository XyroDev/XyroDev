const express = require('express');
const router = express.Router();

router.get('/staff/admin', (req, res) => {
  res.render('admin', { title: 'Admin Panel' });
});

module.exports = router;