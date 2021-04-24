const {Router} = require('express')
const {usersController} = require('../controllers')

const router = Router()

router.get('/users', usersController.getAllUsers)
router.post('/user', usersController.createUser)
router.delete('/user/:id', usersController.deleteUser)

module.exports = router
