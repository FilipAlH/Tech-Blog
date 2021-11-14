const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        const userData = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        
        if(!userData) {
            res.status(400).json({ message: 'Please enter valid credentials!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(userData.id)
            res.json({ user: userData, message: 'You are now logged in!' });
          });
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;