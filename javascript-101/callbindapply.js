// Call -> Function Borrowing
// call() allows for a function/method belonging to one object to be assigned and called for a different object.
// call() provides a new value of this to the function/method

let name1 ={
    firstname : 'Raswanth',
    lastname : 'Rajangam',
    printname : function(role,company){
        console.log(this.firstname + " "+ this.lastname + "- " + role+", "+company)
    }
}

let name2 ={
    firstname : 'Kendall',
    lastname : 'Roy'
}

name1.printname('CTO','Waystar')
name1.printname.call(name2,'CEO','Waystar')

// apply is same as call but the arguements are paased as list instead of individual elements.

name1.printname.apply(name2,['CEO','Waystar'])

// bind is similar to call, but it creates bound function (copy of the function)

let func = name1.printname.bind(name2,'CEO','Waystar')
console.log(func)
func()

//Polyfill for bind() -> Creating your own bind function

// Function.prototype is to specify (access) to all functions
Function.prototype.mybind = function(...args) {
    let obj = this // accessing printname
    params = args.slice(1) // second parameter
    return function(...args2){ // rest of the arguments & should return a function(bind behaviour)
        obj.apply(args[0],[params,args2]) // calling printname
    }
}

let func1 = name1.printname.mybind(name2,'CEO','Waystar')
console.log(func1)
func1()