const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.send('This is Homepage')
})

app.get('/contact',function(req,res){
    res.send('This is Contact Page')
})

app.get('/profile/:id',function(req,res){
    res.send('You requested profile id : '+ req.params.id)
})

app.listen(3000)