// console
console.log('Console object')

// setTimeout
setTimeout(function(){
    console.log("3 seconds have passed")
},3000)

// clearTimeout 
var timer = setTimeout(function(){
    console.log("3 seconds have passed")
    clearTimeout(timer)
},3000)

// setInterval
var time = 0
setInterval(function(){
    time +=2
    console.log(time + "seconds have passed")
},2000)

// clearInterval
var time = 0
var timer = setInterval(function(){
    time +=2
    console.log(time + "seconds have passed")
    if(time > 5){
        clearInterval(timer)
    }
},2000)

// Directory and filename
console.log(__dirname)
console.log(__filename)
