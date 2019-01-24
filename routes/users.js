var express = require('express');
var router = express.Router();
const userModel = require('../models/users')

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


/* Create a new User -- endpoint --> /users/createUser/ POST */

router.post('/createUser/', (req, res) => {
  console.log('Request Body:', req.body)
  // console.log('request ', req)
  const email = req.body.email
  const name = req.body.name
  const phone = req.body.phone
  const address = req.body.address
  const bloodGroup = req.body.bloodGroup
  userModel.createUser(name, address, email, phone, bloodGroup)
  res.send('User created!')
})

module.exports = router;
