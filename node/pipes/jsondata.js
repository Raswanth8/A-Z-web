var http = require('http')
var fs = require('fs')


var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'application/json'})
    var data = {
        name : 'Raswanth',
        age : 20,
        role : 'Dev'
    }

    res.end(JSON.stringify(data))
    
})
server.listen(4000,'127.0.0.1')
console.log('Listening to 4000..')