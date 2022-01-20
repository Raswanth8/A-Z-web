// Whenever an object or function or array is created, javascript engine automatically attaches
// an object to it.

// The object referenced by [[Prototype]] is called a “prototype”

let arr = [1,2,3]
console.log(arr.__proto__) // logs array of objects
console.log(Array.prototype) // both are same 

console.log(arr.__proto__.__proto__) // logs objects
console.log(Object.prototype) // both are same

console.log(arr.__proto__.__proto__.__proto__) // logs null 

// The above one is called Prototype chaining.

function func() {
 // 
}

console.log( func.__proto__) // logs function
console.log( func.__proto__.__proto__) // logs object.prototype
console.log( func.__proto__.__proto__.__proto__)  // logs null


// Prototypal Inheritance -> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. 
// It is a method by which an object can inherit the properties and methods of another object.

let object1 = {
    name : 'Kendall',
    role : 'CEO',
    getinfo : function(){
        console.log(this.name + " " + this.role )
    }
}

let object2 = {
    name : 'Roman'
}

object2.__proto__ = object1

console.log(object2.__proto__) // logs object 1
console.log(object2.getinfo()) // logs Roman CEO 
// If we call obj.method(), and the method is taken from the prototype, this still references obj. 
// So methods always work with the current object even if they are inherited. Thats why it logs Roman CEO

// The for..in loop iterates over both its own and its inherited properties. 
// All other key/value-getting methods only operate on the object itself.