const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    title:String,
    description: String,
    isPublic: Boolean,
    isDeleted: { type: Boolean, default: false},
    user: [
            {
                ref: 'user',
                type: Schema.Types.ObjectId
            }
        ]   
    },
    { timestamps: true }, 
)

module.exports = model('task', taskSchema)