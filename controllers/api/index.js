const router = require('express').Router();
const login = require('./loginAPI');
const reply = require('./replyAPI');
const signup = require('./signupAPI');
const thread = require('./threadAPI');

router.use('/login', login);
router.use('/reply', reply);
router.use('/signup', signup);
router.use('/thread', thread);

module.exports = router;