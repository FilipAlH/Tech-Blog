const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Threads, Replies } = require('../../models');

router.post('/threads', withAuth, async (req, res) => {
    console.log(req.session.user_id)
    try {
        const newThread = await Threads.create({
            title: req.body.title,
            text: req.body.text,
            user_id: req.session.user_id
        })
        res.status(200).json(newThread);
        res.redirect('homepage');
    } catch(error){
        res.json(error);
    }
})

router.get('/threads/:id', withAuth, async (req,res) => {
    const thread = await Threads.findByPk(req.params.id)
    const replies = await Replies.findAll({ where: {thread_id: req.params.id}})

    prettyThread = thread.dataValues
    prettyReplies = new Array

    for(i = 0; i < replies.length; i++){
        prettyReplies.push(replies[i].dataValues)
    }

    const repliesObject = {prettyReplies}
    console.log(prettyThread, prettyReplies)
    console.log(repliesObject.prettyReplies)

    console.log('right before the render')
    res.render('thread', {thread: prettyThread, replies: {prettyReplies}})
})


module.exports = router;