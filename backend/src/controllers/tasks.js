const {taskModel} = require('../models')

const getAllTasks = async(req, res) => {
    res.send("getAllTasks")
}

const getTask = async(req, res) => {
    res.send("getTask")
}

const createTask = async(req, res) => {
    const newTask = new taskModel(req.body)
    const data = await newTask.save()
    const response = {
        status: 'Success',
        data: {
            task:[data]
        }
    }
    res.json(response)
}

const updateTask = async(req, res) => {
    res.send("updateTask")
}

const deleteTask = async(req, res) => {
    res.send("deleteTask")
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}