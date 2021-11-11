const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage', {loggedIn: req.session.logged_in});
});

router.get('/dashboard', async (req, res) => {
  res.render('dashboard', {loggedIn: req.session.logged_in});
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});


module.exports = router;
