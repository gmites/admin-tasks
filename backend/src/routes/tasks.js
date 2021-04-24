const {Router} = require('express')
const {tasksController} = require('../controllers')

const router = Router()

router.get('/tasks', tasksController.getAllTasks)
router.get('/task', tasksController.getTask)
router.post('/task', tasksController.createTask)
router.put('/task', tasksController.updateTask)
router.delete('/task', tasksController.deleteTask)

module.exports = router
