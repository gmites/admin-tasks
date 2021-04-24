const {Schema, model} = require('mongoose')

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	isDeleted: { type: Boolean, default: false},
	role: [
		{
			ref: 'role',
			type: Schema.Types.ObjectId
		}
	]
})

module.exports = model('user', userSchema)