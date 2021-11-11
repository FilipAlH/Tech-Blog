const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        
        if(!userData) {
            res.status(400).json({ message: 'Please enter valid credentials!' });
            return;
        }

        req.session.save(() => {
            req.session.logged_in = true;
      
            res.status(200).json(userData);
        });
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;