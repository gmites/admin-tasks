const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

mongoose.connect('mongodb://localhost/admin-tasks')
.then((db)=>{
    console.log("Connected")
})
.catch((error)=>{
    console.log("Error")
})

//Settings
const app = express()
app.set('port', 3500)

//Middleware
app.use(express.json())
app.use(cors())

//Routes
app.use(routes.tasksRoutes)
app.use(routes.usersRoutes)

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
})