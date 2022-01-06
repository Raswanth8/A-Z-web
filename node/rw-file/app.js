var fs = require('fs')

// Synchronus Way, Block model
var sample = fs.readFileSync('sampler.txt','utf8') 

fs.writeFileSync('samplew.txt',sample)

// Asynchronus Way

fs.readFile('sampler.txt','utf8',function(error,data){
    console.log(data)
    fs.writeFile('sampleaync.txt',data,function(error,result){
        if (error) {
            console.log(error)
        }
    })
})

console.log('Done')

// Done 
// Hey there 