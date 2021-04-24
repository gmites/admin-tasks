const {userModel} = require('../models')

const getAllUsers = async(req, res) => {
    const data = await userModel.find()
    const response = {
        status: 'Success',
        data: data
    }
    res.json(response)
}
const createUser = async(req, res) => {
    const newUser = new userModel(req.body)
    const data = await newUser.save()
    const response = {
        status: 'Success',
        data: {
            user:[data]
        }
    }
    res.json(response)
}

const deleteUser = async(req, res) => {
    const user = await userModel.findById(req.params.id)
    user.isDeleted = true
    const data = await user.save()
    const response = {
        status: 'Success',
        data: {
            user:[]
        }
    }
    res.json(response) 
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser   
}