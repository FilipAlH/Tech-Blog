const router = require('express').Router();
const login = require('./loginAPI');
const logout = require('./logoutAPI');
const reply = require('./replyAPI');
const signup = require('./signupAPI');
const thread = require('./threadAPI');

router.use('/', login);
router.use('/', logout);
router.use('/', reply);
router.use('/', signup);
router.use('/', thread);

module.exports = router;