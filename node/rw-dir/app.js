var fs = require('fs')

fs.mkdir('stuff',function(){
    fs.readFile('readme.txt','utf8',function(err,data){
        fs.writeFile('./stuff/readme.txt',data,function(result,err){
            if(err) console.log(err)
        })
    })
})
// delete file
fs.unlink('./stuff/readme.txt',function(){
    fs.rmdir('stuff',function(err){
        if(err) console.log(err)
    })
}) 

