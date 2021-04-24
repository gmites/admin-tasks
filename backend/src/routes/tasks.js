const {Router} = require('express')
const {tasksController} = require('../controllers')

const router = Router()

router.get('/tasks', tasksController.getAllTasks)
router.get('/task/:id', tasksController.getTask)
router.post('/task', tasksController.createTask)
router.put('/task/:id', tasksController.updateTask)
router.delete('/task/:id', tasksController.deleteTask)

module.exports = router
