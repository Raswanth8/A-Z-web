// Destructuring is very useful to access variables.

const obj = {
    name : 'Kendall Roy',
    age : '32',
    role : {
        primary : 'CEO'
    }

}

// const {name,age} = obj // Destructure
// console.log(name,age)

const {name : firstname,role : primary, ...rest} = obj
console.log(firstname,rest,primary)

const arr = [33,44,55,66,77]

// const [a,b] = arr
// console.log(a,b) 

function func(a,b){
    return [a+b,a*b]
}
console.log(func(3,6))

function printuser({name,age}){
    console.log(`Name is ${name},${age} years old `)
}
printuser(obj)