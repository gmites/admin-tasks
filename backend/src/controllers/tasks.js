const {taskModel, userModel} = require('../models')

const getAllTasks = async(req, res) => {
    const data = await taskModel.find()
    const response = {
        status: 'Success',
        data: data
    }
    res.json(response)
}

const getTask = async(req, res) => {
    const data = await taskModel.findById(req.params.id)
    const response = {
        status: 'Success',
        data: data
    }
    res.json(response)
}

const createTask = async(req, res) => {
    try{
        const user = await userModel.findOne({username:req.body.user}) 
        const dataTask = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            user:[
                user._id
            ]
        }
        const newTask = new taskModel(dataTask)
        const data = await newTask.save()
        const response = {
            status: 'Success',
            data: {
                task:[data]
            }
        }
        res.json(response)
    }catch(err){
        res.json({err: err.message})
    }
}

const updateTask = async(req, res) => {
    const task = await taskModel.findById(req.params.id)
    task.title = req.body.title
    task.description = req.body.description
    task.isPublic = req.body.isPublic
    const data = await task.save()

    const response = {
        status: 'Success',
        data: {
            task:[data]
        }
    }
    res.json(response)
}

const deleteTask = async(req, res) => {
    const task = await taskModel.findById(req.params.id)
    task.isDeleted = true
    const data = await task.save()
    const response = {
        status: 'Success',
        data: {
            task:[]
        }
    }
    res.json(response) 
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}