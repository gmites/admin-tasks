const {userModel, roleModel} = require('../models')

const getAllUsers = async(req, res) => {
    const data = await userModel.find()
    const response = {
        status: 'Success',
        data: data
    }
    res.json(response)
}
const createUser = async(req, res) => {
    try{
        const role = await roleModel.findOne({name:req.body.role})
        const dataUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role:[
                role._id
            ]
        }
        const newUser = new userModel(dataUser)
        const data = await newUser.save()
        const response = {
            status: 'Success',
            data: {
                user:[data]
            }
        }
        res.json(response)
    } catch(err){
        res.json({err: err.message})
    }
        
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