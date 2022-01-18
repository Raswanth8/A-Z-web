// Currying is a process in functional programming in which we can transform a function with 
// multiple arguments into a sequence of nesting functions.

// Function currying using bind

let multiply = function(x,y){
    console.log(x*y)
}

let mulbytwo = multiply.bind(this,2)
mulbytwo(5) // logs 10

// Using Closures

let mult = function(x){
    return function(y){
        console.log(x*y)
    }
}

let mulbythree = mult(3)
mulbythree(5) //logs 15

// Partial application is more or less a pattern of calling a function. You can partially apply any function.
// Currying is more about a form of the function. To be able to use currying, you have to explicitly create a 
// new function that is a curried version of the original one.