const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Threads, Replies } = require('../models');

router.get('/', async (req, res) => {
  try {
    const getThreads = await Threads.findAll()
      
    const threads = getThreads.map((thread) => thread.get({plain: true}))
    console.log(threads)

    res.render('homepage', {loggedIn: req.session.logged_in, threads});

  } catch (error){
    res.json(error)
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const getThreads = await Threads.findAll(
      {
        where: {
          user_id: req.session.user_id
        }
      }
    )
    const threads = getThreads.map((thread) => thread.get({plain: true}))
    console.log(threads)

    res.render('dashboard', {loggedIn: req.session.logged_in, threads});
    
  } catch (error){
    res.json(error)
  }

  
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.get('/thread', async(req, res) => {
  res.render('thread')
})

module.exports = router;
