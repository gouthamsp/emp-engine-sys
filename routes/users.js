var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (email === 'abc@abc.com' && password === '12345') {
    res.send('Logged In!');
  } else {
    res.send('Failed to Login!');
  }
});

router.get('/', (req, res) => {
  res.send('This URL Does not support get requests!')
})

module.exports = router;
