
// Synchronous - Top to bottom
// Asynchronous - Top -> Asynchronous parts + rest of the code simulataneously.

// Example 1 
let a = 10
let b = 20

setTimeout(function(){  // Aynchrnous by default
    console.log("Async a :",a)
})

a = 40
console.log('synchronous')
console.log(a)
console.log(b)
