const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    title:String,
    description: String,
    isPublic: Boolean,
    creationDate: Date,
    updateDate: Date
})

module.exports = model('task', taskSchema)