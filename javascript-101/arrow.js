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