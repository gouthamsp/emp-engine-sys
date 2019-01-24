var express = require('express');
var router = express.Router();
var common = require('./common');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/user_stats/', (req, res) => {
  const user_token = req.body.token;
})

module.exports = router;