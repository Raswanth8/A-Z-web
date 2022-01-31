const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors({
    origin : "http://127.0.0.1:5500", // allows all orgin
    credentials : true
} 
))

app.get('/data',(req,res)=>{
    res.json({
        name :'Kendall Roy',
        role :'CEO'
    })
})
app.listen(3000)