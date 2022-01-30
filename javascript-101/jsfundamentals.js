// new ES6 String methods

var str = "Rachoo "

console.log(str.repeat(3))
console.log(str.startsWith("Rac"))
console.log(str.startsWith("oo", str.length-3))
console.log(str.endsWith("oo "))
console.log(str.endsWith("R", str.length-6))

var temp = "My name is Kendall Roy"
console.log(temp.includes('Kendall'))

// Sets -> hold unique values

var names = new Set()
names.add("Kendall Roy").add("Roman Roy").add("Shiv Roy")
console.log(names.has("Kendall Roy"))
names.delete("Shiv Roy")
names.clear()
console.log(names)

// Generators - appears to be a function but it behaves like an iterator.

function* gen(){
    yield console.log('Kendall Roy') // yield is to pause the program
    console.log('Roman Roy')
    console.log('Shiv Roy')
}

var genz = gen()
genz.next() // logs Kendall Roy
genz.next() // logs everything


// ES6 Class and Objects
class User{
     constructor(name, role){
         this.name = name
         this.role = role
     }
    getName(){
        console.log(this.name + " ,HEY THERE")

     }
    static getCount(){
        console.log("50 bucks")
    }
}

const Kendall = new User("Kendall Roy", "CEO")
Kendall.getName()
User.getCount()

class Temp extends User{
    
    constructor(name,role,company){
        super(name,role)
        this.company= company
    }
    getComp(){
        console.log("Company:"+ this.company)
    }
}
const Roman = new Temp("Roman Roy","CTO","Waystar HQ")
Roman.getName()
Roman.getComp()

// Compositons -  Composition means to Compose. Everything in JavaScript is treated as an object even functions in JavaScript are treated as a high-class object.

function swimmer({name}){
    return{
        swim : () => {
            console.log(`${name}  swam`)
        }
    }
}

function flyer({name}){
    return{
        fly : () => {
            console.log(`${name}  flew`)
        }
    }
}

function Monster(name){
    const monster = {name : name}
    
    return{
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }
}

const mon =  Monster('Logan')
mon.swim()
mon.fly()

// Pure Functions - Shoudn't change the inputs but instead we should make use of those inputs to return the output

const arr = [1,2,3]

function fun(a,ele){
    return [...a,ele]
}

console.log(fun(arr,4)) // logs [1,2,3,4]
console.log(arr) // logs [1,2,3]

// and most important thing is that,every operation should give same output for the same input. 
// Used widely for unit testing