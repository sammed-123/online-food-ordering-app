const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4003

const {MONGOURI} = require('./config/keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})

mongoose.connection.on('error',(err)=>{
    console.log('err connecting',err)
})

require('./models/user')
// require('./models/post')

// use middleware here
app.use(express.json())
app.use(require('./routes/auth'))
// app.use(require('./routes/post'))

if(process.env.NODE_ENV=='production')
{
    app.use(express.static('final/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(_dirname,'final','build','index.html'))
    })
}

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})