const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MusicList Alpha' });
});


router.get('/sendjson', (req, res, next) => {
  res.json(testJSON)
});

module.exports = router;
