const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine','ejs')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req,res){
    res.render('home')
})

app.get('/contact',function(req,res){
    res.render('contact',{qs : req.query})
})

app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body)
    res.render('success',{data : req.body})
})

app.get('/profile/:name',function(req,res){
    const data = {
        Age : 20,
        Job : 'Developer',
        Skills : ['js','node','express']
    }
    res.render('profile',{person : req.params.name, data : data})
})

app.listen(3000)