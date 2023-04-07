const router = require('express').Router()
const task = require('../controller/tasks')

// router.get('/', user.home)

// router.get('/add', user.add)

router.get('/', task.alltasks)

router.get('/addtask', task.addtask)

router.get('/search', task.search)

router.get('/edit/:id', task.edit)

router.get('/editTask/:id', task.editTask)

router.get('/delete', task.delete)

router.get('/status/:id', task.status)

router.get('/newtask', task.newtask)

router.get('/del/:id', task.del)

router.get('/show/:id', task.show)

module.exports = router