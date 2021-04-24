const express = require('express')
const cors = require('cors')
const routes = require('./routes')

//Settings
const app = express()
app.set('port', 3500)

//Middleware
app.use(express.json())
app.use(cors())

//Routes
app.use(routes.tasksRoutes)

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
})