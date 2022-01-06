var http = require('http')


var server = http.createServer(function(req,res){
    console.log('Request made : '+ req.url) 
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('Hey there')
})
server.listen(4000,'127.0.0.1')
console.log('Listening to 4000..')