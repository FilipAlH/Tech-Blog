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

router.get('/thread/:id', withAuth, async (req,res) => {
    const thread = await Threads.findByPk(req.params.id)
    prettyThread = thread.dataValues

    res.render('update', prettyThread)
})

router.put('/threads/:id', withAuth, async (req, res) => {

    const thread = await Threads.findByPk(req.params.id)
    const id = req.params.id
    console.log(id)
    console.log(req.body.title, req.body.text)
    if(req.session.user_id === thread.user_id){
        const update = await Threads.update(
            {
            title: req.body.title,
            text: req.body.text,
            },
            { where : { id: id },
        }) 

        res.status(200).json(update)

    } else {
        res.status(300).json(req.session.user_id)
    }
})

router.delete('/threads/:id', withAuth, async (req, res) => {
    console.log('deleting')
    const thread = await Threads.findByPk(req.params.id)

    if(req.session.user_id === thread.user_id){
        const deleteThread = await Threads.destroy({where: {
            id: req.params.id
        }})

        res.status(200).json(deleteThread)
    } else {
        res.status(300).json(req.session.user_id)
    }
})


module.exports = router;