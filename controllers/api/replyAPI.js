const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Threads, Replies } = require('../../models');

router.post('/reply', withAuth, async (req, res) => {
    console.log(req.session.user_id)
    try {
        const newReply = await Replies.create({
            reply: req.body.reply,
            user_id: req.session.user_id,
            thread_id: req.body.thread_id
        })
        res.status(200).json(newReply);
    } catch(error){
        res.json(error);
    }
})

module.exports = router;