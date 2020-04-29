const express = require('express')
const Tasks = require('./tasks')
const auth = require('./auth')
const router = new express.Router()
router.post('/tasks', auth, async(req, res) => {
    //const task = new Tasks(req.body)
    const task = new Tasks({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/tasks/:id', async(req, res) => {
    try {
        /* const task = await Tasks.findByIdAndDelete(rea.params.id)*/
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id
        })
        if (!task) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.patch('/tasks/:id', auth, async(res, req) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const sia = updates.every((updates) => {
        allowedUpdates.includes(updates)
    })
    if (!sia) {
        return res.status(400).send({
            error: 'Invalid updates'
        })
    }

    try {
        const task = await Tasks.findOne({
                _id: req.params.id,
                owner: rewq.user._id
            })
            /* const task = await Tasks.findByIdAndUpdate(req.params.body)*/


        /*const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        }) */
        if (!task) {
            return res.status(400).send()
        }
        updates.forEach((updates) => {
            task[updates] = req.body[updates]
        })
        await task.save()
        res.send(task)

    } catch (e) {
        res.status(400).send(e)
    }
})
router.get('/tasks', auth, async(req, res) => {
    const match = {}
    const sort = {}
    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        console.log(parts[0])
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        /*const tasks = await Tasks.find({
            owner: req.user._id
        })*/
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }

})
router.get('/tasks/:id', auth, async(req, res) => {
    const _id = req.params.id
    try {
        // const task = await Tasks.findById(_id)
        const task = await Tasks.findOne({
            _id,
            owner: req.user._id
        })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})
module.exports = router