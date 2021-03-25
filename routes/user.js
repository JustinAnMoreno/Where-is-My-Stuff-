
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/user');


router.get('/new', usersCtrl.new);
router.post('/signup', usersCtrl.signUp); 

router.get('/signin', usersCtrl.signIn);
router.post('/login', usersCtrl.login);
module.exports = router;