const getAllTasks = async(req, res) => {
    res.send("getAllTasks")
}

const getTask = async(req, res) => {
    res.send("getTask")
}

const createTask = async(req, res) => {
    res.send("createTask")
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