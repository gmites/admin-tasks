const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    title:String,
    isPublic: Boolean,
    description: String
    },
    { timestamps: true }
)

module.exports = model('task', taskSchema)