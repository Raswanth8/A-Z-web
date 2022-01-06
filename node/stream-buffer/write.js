var fs = require('fs')

var myStream = fs.ReadStream(__dirname+'/readme.txt','utf8')
var writeStream = fs.createWriteStream(__dirname+'/writeme.txt')

// Eventlistener is triggered to receive that chunk
myStream.on('data',function(chunk){
    console.log("Received Chunk")
    writeStream.write(chunk,function(err){
        if(err) console.log(err)
    })
})