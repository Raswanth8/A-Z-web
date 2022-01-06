// Normal Function statement
function fun1(){
    console.log('Raswanth')
}
fun1()

// Function Expression 
var john = function fun2(){
    console.log('John')
}

john()

// Pass function into another function
function callfun(fun){
    fun()
}

callfun(john)