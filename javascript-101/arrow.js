class User{
    constructor(name){
        this.name = name
    }

    printArrow(){
        setTimeout(()=>{
            console.log('Arrow: ' + this.name)
        },1000)
    }
    
    printFunc(){
        setTimeout(function(){
            console.log('Normal: '+ this.name)
        })
    }
}

let user = new User('Kendall')
user.printArrow()
user.printFunc()

// Normal: undefined
// Arrow: Kendall
// This happens because this keywords gets redifined in the normal function, but not 
// in arrow function.

// The call, apply and bind methods are NOT suitable for Arrow functions -- as 
// they were designed to allow methods to execute within different scopes -- because Arrow functions establish "this" 
// based on the scope the Arrow function is defined within.

