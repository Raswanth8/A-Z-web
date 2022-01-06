var fs = require('fs')

var myStream = fs.ReadStream(__dirname+'/readme.txt','utf8')

// Eventlistener is triggered to receive that chunk
myStream.on('data',function(chunk){
    console.log("Received Chunk :")
    console.log(chunk)
})