var http = require('http')
var fs = require('fs')


var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'})
    var myStream = fs.createReadStream(__dirname+'/index.html','utf8')
    myStream.pipe(res) // No need end method as pipe does the same
    
})
server.listen(4000,'127.0.0.1')
console.log('Listening to 4000..')