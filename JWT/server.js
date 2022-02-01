require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [{
    username : 'Kendall',
    title : 'Post 1',
},
{
    username : 'Roman',
    title : 'Post 2',   
}
]

app.get('/posts', authenticateToken, (req, res) => {
    var newPosts = posts.filter(post => post.username === req.user.name)
    console.log(newPosts)
    res.json(newPosts)
})

app.post('/login',(req,res)=>{
    const username = req.body.username
    const user = { name: username }

    const accessToken  = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)

    res.json({accesstoken : accessToken})
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }
  

app.listen(3000)
console.log('Listening to 3000')