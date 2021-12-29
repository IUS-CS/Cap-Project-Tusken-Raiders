const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000   // This is the port our express server will run on
const app = express()
const api = require('./routes/api')
//app.use(bodyParser.json())
//app.use('/api', api)

app.get('/', function(req,res){
    res.send('Hello from server')
})

app.listen(PORT,function(){
    console.log('Server running on local host:' + PORT)

})

